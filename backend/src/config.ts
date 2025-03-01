import * as dotenv from "dotenv";

dotenv.config();

// API
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const PORT = process.env.PORT || 3000
export const ALLOWED_USER = process.env.ALLOWED_USER
export const ALLOWED_PWD = process.env.ALLOWED_PWD

// DB
export const DB_HOST = `${process.env.DB_HOST}`
export const DB = `${process.env.DB}`
export const DB_USR = `${process.env.DB_USR}`
export const DB_PWD = `${process.env.DB_PWD}`
export const DB_PORT = +(process.env.DB_PORT || 0)
export const SECRET_KEY = `${process.env.SECRET_KEY}`


