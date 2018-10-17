import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: String,
    points: [PointSchema]

}, {collection : 'User'});

let UserModel = mongoose.model('User', UserSchema);

UserModel.getAll = () => {
    return UserModel.find({});
}

UserModel.addUser = (userToAdd) => {
    return userToAdd.save();
}

UserModel.removeUser = async (userId) => {
    await UserModel.findByIdAndRemove(userId, function(err, removedUser) {
        if (err) console.log(err);
        return removedUser
    });
}

UserModel.updateUser = async (userId, userToUpdate) => {
    await UserModel.findByIdAndUpdate(userId, { $set: userToUpdate}, { new: true }, function(err, updatedUser) {
        if (err) console.log(err);
        return updatedUser
    });
}


export default userModel;