import { Request, Response } from "express"

export const createArticle = (req: Request, res: Response) => {

    // req.file
    const { title, content, tags } = req.body

    // aws s3 buckets, cloudanary, superbase storage, firebase storages, azure, gcp
}
