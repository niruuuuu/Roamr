import mongoose, { Schema, Document, Types } from "mongoose";

interface Reply extends Document {
    reply: String;
    userId: Types.ObjectId;
    commentId: Types.ObjectId;
    time: Date;
    likes: Types.ObjectId[];
}

interface Comment extends Document {
    comment: String;
    userId: Types.ObjectId;
    dropId: Types.ObjectId;
    likes: Types.ObjectId[];
    time: Date;
    replies?: Reply[]
}

const replySchema: Schema<Reply> = new Schema({

    reply: {
        type: String,
        required: [true, "Reply is required"]
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    commentId: {
        type: Types.ObjectId,
        ref: "Comment",
        required: true
    },
    likes: [{
        type: Types.ObjectId,
        ref: "User",
        required: false
    }],
    time: {
        type: Date,
        required: false
    }

})

const commentSchema: Schema<Comment> = new Schema({
    comment: {
        type: String,
        required: [true, "Comment is required"]
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    dropId: {
        type: Types.ObjectId,
        ref: "Drop",
        required: true
    },
    likes: [{
        type: Types.ObjectId,
        ref: "User",
        required: true
    }],
    time: {
        type: Date,
        required: [true, "Time is required"],
        default: Date.now()
    },
    replies: [replySchema]
})

const CommentModel = mongoose.models.Comment as mongoose.Model<Comment> || mongoose.model<Comment>("Comment", commentSchema)
export default CommentModel