import Car from '../models/cars.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const cars = await Car.getAll();
        logger.info('sending all cars...');
        res.send(cars);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addCar = async (req, res) => {
    let carToAdd = Car({
        name: req.body.name
    });
    try {
        const savedCar = await Car.addCar(carToAdd);
        logger.info('Adding car...');
        res.send('added: ' + savedCar);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.deleteCar = async (req, res) => {
    let carId = req.body._id;
    try{
        const removedCar = await Car.removeCar(carId);
        logger.info('Deleted Car- ' + removedCar);
        res.send('Car successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete car- ' + err);
        res.send('Delete failed..!');
    }
}

controller.updateCar = async (req, res) => {
    let carId = req.params._id;

    try{
        const updatedCar = await Car.updateCar(carId, req.body);
        logger.info('Updated Car- ' + updatedCar);
        res.send('Car successfully updated');
    }
    catch(err) {
        logger.error('Failed to update car- ' + err);
        res.send('Update failed..!');
    }

}

export default controller;