import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenDecode = (req) => {                               // extraire un tokeen
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(                         //pour vérifier si le jeton est signé avec une clé secrète  
        token,
        process.env.TOKEN_SECRET
      );
    }

    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {                        //vérifier l'authentification de l'utilisateur avant de lui permettre d'accéder à des ressources protégées de l'application.    
  const tokenDecoded = tokenDecode(req);

  if (!tokenDecoded) return responseHandler.unauthorize(res);

  const user = await userModel.findById(tokenDecoded.data);         //Si le jeton est valide et correspond à un utilisateur existant

  if (!user) return responseHandler.unauthorize(res);

  req.user = user;                                                  // la fonction ajoute cet utilisateur à la demande (req.user)

  next();
};

export default { auth, tokenDecode };