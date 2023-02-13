import { AnySchema } from "yup";
import * as Yup from 'yup';
import { Request, Response, NextFunction } from "express";

const validate = (schema: AnySchema) => async (      //'validate'pour valider les données d'une requête HTTP à l'aide de la bibliothèque Yup.
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
  } catch (error: Yup.ValidationError) {
    console.error(error);
    return res.status(400).send(error.errors || error.message);
  }
};

export default validate;