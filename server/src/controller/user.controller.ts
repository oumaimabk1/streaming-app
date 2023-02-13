
import { Request, Response } from "express";
//'lodash' qui est une collection de fonctions JavaScript utiles pour effectuer des tâches courantes
//'omit' est utilisé pour enlever un ou plusieurs propriétés d'un objet.
import { omit } from "lodash";
import { createUser } from "../service/user.service";


export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}