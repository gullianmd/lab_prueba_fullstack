import { NextFunction, Request, Response } from "express"
import * as bcryptUtils from "../utils/bcryptUtils"
import * as jwtUtils from "../utils/jwtUtils"
import { ALLOWED_PWD, ALLOWED_USER, SECRET_KEY } from "../config"
import jwt from 'jsonwebtoken';
import * as responseHelpers from "../helpers/responseHelpers"

export const decryptAuth = (authorization : string) =>  {
  const b64Str = authorization.split(" ")[1];
  const decryptResult = Buffer.from(b64Str, 'base64').toString('utf8');
  let [user, pass] = decryptResult.split(":");
  return {user, pass}
}

export const login = async (req : Request, res : Response) => {

  const basicAuth = req.headers.authorization as string;

  const { user , pass} = decryptAuth(basicAuth)

  // SOLO PARA PRUEBA USUARIO PERMITIDO Y PWD DEFINIDOS EN LAS VARIABLES DE ENTORNO
  const isUserAllowed = user === ALLOWED_USER && pass === ALLOWED_PWD;

  console.log(`Ingreso usuario ${user}`);

  if (!isUserAllowed) return responseHelpers.forbidden(res);

  return responseHelpers.successWithToken(res, jwtUtils.generateToken(user)) 

}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Obtener el token del encabezado

  if (!token) {
    return res.sendStatus(403); // Prohibido si no hay token
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Prohibido si el token no es válido
    }
    next(); // Llama al siguiente middleware o ruta
  });
};