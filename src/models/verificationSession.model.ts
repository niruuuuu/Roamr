import mongoose, { Schema, Document, mongo } from "mongoose";

interface Session extends Document {
    userID: mongoose.Types.ObjectId;
    tokenHash: string;
    expiresAt: Date;
    createdAt: Date;
}

const sessionSchema: Schema<Session> = new Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    tokenHash: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        default: new Date(Date.now() + 10 * 60 * 1000),
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600
    }
})

const SessionModel = mongoose.models.Session as mongoose.Model<Session> || mongoose.model<Session>("Session", sessionSchema)
export default SessionModel