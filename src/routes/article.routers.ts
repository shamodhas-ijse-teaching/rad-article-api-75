import { Router } from "express"
import { createArticle } from "../controllers/article.controller"
import { upload } from "../middlewares/upload"

const router = Router()

router.post("/create", upload.single("image"), createArticle)

export default router

// "image": file
