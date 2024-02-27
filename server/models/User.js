import mongoose from'mongoose';

const UserModelSchema = new mongoose.Schema({
    login: String,
    email: {type: String, unique: true},
    password: String
});

const UserModel = mongoose.model("UserModel", UserModelSchema);

export default UserModel;