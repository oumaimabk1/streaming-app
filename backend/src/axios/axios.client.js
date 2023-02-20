import axios from "axios"; //bibliothèque populaire pour effectuer des requêtes HTTP depuis un navigateur ou un serveur

const get = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default { get };

/*
en important ce module ds un autre fichier, on utilisera la syntaxe suivante pour appeler la fonction get :
import api from "./api";

api.get("https://exemple.com/data).then((data) => {
  // Faire quelque chose avec les données renvoyées
});

*/