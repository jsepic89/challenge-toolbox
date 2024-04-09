import express from 'express'
import { getFiles, getAllFiles } from '../controllers/filesController.js'

const router = express.Router()

router.get('/files/data', getFiles)
router.get('/files/list', getAllFiles)

export default router
