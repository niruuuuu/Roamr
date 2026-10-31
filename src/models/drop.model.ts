import mongoose, { Schema, Document, Types } from "mongoose";

interface Drop extends Document {
    caption: string;
    photos?: string[];
    author: Types.ObjectId;
    date: Date;
    location?: String;
    likes?: Types.ObjectId[];
    comments?: Types.ObjectId[];
    redrops?: Types.ObjectId[];
    metadata?: string[];
}

const dropSchema: Schema<Drop> = new Schema({
    caption: {
        type: String,
        required: [true, "Caption is required"]
    },
    photos: [{
        type: String,
        required: false
    }],
    author: {
        type: Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now()
    },
    location: {
        type: String,
        required: false
    },
    likes: [{
        type: Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: Types.ObjectId,
        ref: "Comment"
    }],
    redrops: [{
        type: Types.ObjectId,
        ref: "User"
    }],
    metadata: [{
        type: String,
    }]
}, {
    timestamps: true
})

const DropModel = mongoose.models.Drop as mongoose.Model<Drop> || mongoose.model<Drop>("Drop", dropSchema)
export default DropModel;