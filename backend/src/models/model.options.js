//cet objet est utilisé pour standardiser la façon dont les documents sont sérialisés en JSON, 
//en définissant des options qui s'appliquent à tous les modèles Mongoose de l'application.

const modelOptions = {
    toJSON: {                           //Cette option définit comment les documents Mongoose sont sérialisés en JSON. 
      virtuals: true,
      transform: (_, obj) => {
        delete obj._id;
        return obj;
      }
    },
    toObject: {                           //Cette option définit comment les documents Mongoose sont convertis en objets JavaScript simples.
      virtuals: true,                     
      transform: (_, obj) => {
        delete obj._id;
        return obj;
      }
    },
    versionKey: false,                      // Cette option définit le nom du champ utilisé pour stocker la version du document. Par défaut, ce champ est nommé __v.
    timestamps: true                        //Cette option définit si les champs createdAt et updatedAt sont ajoutés aux documents créés et mis à jour, respectivement.
  };
  
  export default modelOptions;