import { Router } from 'express'

import multer from 'multer'
import { createCategoryController } from '../module/cars/useCases/createCategory'
import { importCategoryController } from '../module/cars/useCases/importCategory'
import { listCategoriesController } from '../module/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res)
})

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res)
})

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res)
})

export { categoriesRoutes }