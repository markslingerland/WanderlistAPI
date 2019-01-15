import express from "express";
import carController from "../controllers/cars.controller"
const router = express.Router()

router.get('/', (req, res) => {
    carController.getAll(req, res);
});

router.post('/', (req, res) => {
    carController.addCar(req, res);
});

router.delete('/', (req, res) => {
    carController.deleteCar(req, res);
});

router.put('/:_id', (req, res) => {
    carController.updateCar(req, res);
});

export default router;