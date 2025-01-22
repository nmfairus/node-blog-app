import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
}, { timestamps: true });

// statics method to find user by email and password
userSchema.statics.findByCredential = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error('Pengguna tidak dijumpai');
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Kata laluan salah');
    }
  
    return user;
};

const User = mongoose.model("User", userSchema);

export default User;
