import mongoose from 'mongoose';

const PointSchema = mongoose.Schema({
    name: {type: String, required: true},
    picture: {type: String, required: true}, //Could be false?
    tags: [String],
    isFavorite: Boolean, 
    isUnesco: Boolean,
    location: {type: LocationSchema, required: true},

    coordinates: {type: String, required: true}

}, {collection : 'Point'});

let PointModel = mongoose.model('Point', PointSchema);

PointModel.getAll = () => {
    return PointModel.find({});
}

PointModel.addPoint = (pointToAdd) => {
    return PointToAdd.save();
}

PointModel.removePoint = async (pointId) => {
    await PointModel.findByIdAndRemove(pointId, function(err, removedPoint) {
        if (err) console.log(err);
        return removedPoint
    });
}

PointModel.updatePoint = async (pointId, pointToUpdate) => {
    await PointModel.findByIdAndUpdate(pointId, { $set: pointToUpdate}, { new: true }, function(err, updatedPoint) {
        if (err) console.log(err);
        return updatedPoint
    });
}


export default PointModel;