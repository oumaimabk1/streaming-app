import mongoose from "mongoose";
import modelOptions from "./model.options.js";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  salt: {
    type: String,
    select: false
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  }
}, modelOptions);


userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");

  this.password = crypto.pbkdf2Sync(                        //méthode "pbkdf2Sync" de la bibliothèque "crypto"
    password,                                               //Le mot de passe à dériver (password).
    this.salt,
    1000,                                                   //Le nombre d'itérations (1000)
    64,                                                     //La longueur de la clé de chiffrement dérivée en octets (64).
    "sha512"                                                // //L'algorithme de hachage utilisé (sha512).
  ).toString("hex");
};

userSchema.methods.validPassword = function (password) {
  const hash = crypto.pbkdf2Sync(                         
    password,                                             
    this.salt,
    1000,                                                 
    64,                                                   
    "sha512"                                             
  ).toString("hex");

  return this.password === hash;
};

const userModel = mongoose.model("test", userSchema);

export default userModel;