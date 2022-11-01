import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now()
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    }
});

//model(싀마이름, 스키마객체)
const Post = mongoose.model('Post', PostSchema);
export default Post;