import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import multer from 'multer'
import helmet from "helmet"
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit: "20mb", extends: true}))
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}))


const PORT = 