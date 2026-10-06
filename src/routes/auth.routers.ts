import { Router } from "express"
import { getMyDetails, login, register } from "./../controllers/auth.controller"
import { authenticate } from "../middlewares/auth"

const router = Router()

// public
router.post("/login", login)
router.post("/register", register)

// protected
router.get("/me", authenticate, getMyDetails)

export default router
