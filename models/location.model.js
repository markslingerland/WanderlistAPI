import mongoose from 'mongoose';

const LocationSchema = mongoose.Schema({
    country: {type: String, required: true},
    province: {type: String, required: true},
    city: {type: String, required: true},
    municipality: String,
    district: String,
    street: String,
    number: String,
    coordinates: {type: String, required: true}

}, {collection : 'Location'});

let LocationModel = mongoose.model('Location', LocationSchema);

LocationModel.getAll = () => {
    return LocationModel.find({});
}

LocationModel.addLocation = (locationToAdd) => {
    return locationToAdd.save();
}

LocationModel.removeLocation = async (locationId) => {
    await LocationModel.findByIdAndRemove(locationId, function(err, removedLocation) {
        if (err) console.log(err);
        return removedLocation
    });
}

LocationModel.updateLocation = async (locationId, locationToUpdate) => {
    await LocationModel.findByIdAndUpdate(locationId, { $set: locationToUpdate}, { new: true }, function(err, updatedLocation) {
        if (err) console.log(err);
        return updatedLocation
    });
}


export default LocationModel;