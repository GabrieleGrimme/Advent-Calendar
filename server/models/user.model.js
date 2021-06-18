import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  vorname: String,
  email: String,
  datum: Date,
});

const User = mongoose.model('User', userSchema);

export default User;
