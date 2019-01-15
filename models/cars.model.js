import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Car'});

let CarsModel = mongoose.model('Car', CarSchema);

CarsModel.getAll = () => {
    return CarsModel.find({});
}

CarsModel.addCar = (carToAdd) => {
    return carToAdd.save();
}

CarsModel.removeCar = async (carId) => {
    await CarsModel.findByIdAndRemove(carId, function(err, removedCar) {
        if (err) console.log(err);
        return removedCar
    });
}

CarsModel.updateCar = async (carId, carToUpdate) => {
    await CarsModel.findByIdAndUpdate(carId, { $set: carToUpdate}, { new: true }, function(err, updatedCar) {
        if (err) console.log(err);
        return updatedCar
    });
}


export default CarsModel;