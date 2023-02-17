
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


// Cette interface définit les propriétés que les documents utilisateur devraient avoir dans la bdd.
export interface UserDocument extends mongoose.Document {    
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;                                    
  comparePassword(candidatePassword: string): Promise<boolean>;
}


//Définition d'un nouveau schéma de données Mongoose appelé UserSchema.
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }            
);


// fonction 'pre' sera appelée avant de sauvegarder un nouvel utilisateur dans la base de données.
//garantit que le mot de passe de l'utilisateur est sécurisé en le haschant avec bcrypt avant de le sauvegarder dans la bdd.
UserSchema.pre("save", async function (next: any): Promise<any> { 
  let user = this as UserDocument;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();  

  // Random additional data
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});


// Used for logging in
//La méthode "comparePassword" permet de comparer le mot de passe entré par l'utilisateur avec le mot de passe stocké en base de données
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;

