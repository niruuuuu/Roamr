import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from "bcrypt"

interface User extends Document {
    fullname: string;
    username: string;
    email: string;
    phone?: string;
    password: string;
    profilePicture?: string;
    bio?: string;
    gender?: "male" | "female" | "others";
    dateOfBirth?: Date;
    isVerified: boolean;
    otp: string;
    otpExpiry: Date;
    createdAt?: number;
    updatedAt?: number;
    followers?: Types.ObjectId[];
    followings?: Types.ObjectId[];
    drops?: Types.ObjectId[];
    likedDrops?: Types.ObjectId[];
    savedDrops?: Types.ObjectId[];
}

const userSchema: Schema<User> = new Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/.+\@.+\..+/, "please use a valid email address"],
        unique: true
    },
    phone: {
        type: String,
        match: [/^\+?[1-9]\d{0,2}(?:[\s().-]*\d){6,14}$/, "please use a valid phone number"],
        unique: true,
        required: false
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    profilePicture: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false,
        enum: ["male", "female", "others"]
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        required: [true, "OTP is required"]
    },
    otpExpiry: {
        type: Date,
        required: [true, "OTP Expiry is required"]
    },
    followers: [{
        type: Types.ObjectId,
        ref: "User",
        required: false
    }],
    followings: [{
        type: Types.ObjectId,
        ref: "User",
        required: false
    }],
    drops: [{
        type: Types.ObjectId,
        ref: "Drop",
        required: false
    }],
    likedDrops: [{
        type: Types.ObjectId,
        ref: "Drop",
        required: false
    }],
    savedDrops: [{
        type: Types.ObjectId,
        ref: "Drop",
        required: false
    }],
}, {
    timestamps: true
})

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

userSchema.pre("save", async function () {
  if (!this.isModified('password')) {
    return;
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log("Error Hashing Password | save middleware - userSchema", error)
    throw error
  }
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", userSchema)
export default UserModel