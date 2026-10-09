import multer from "multer"

// multer.diskStorage
const storage = multer.memoryStorage()

export const upload = multer({
  storage
})
 