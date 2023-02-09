import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
const Post = new Schema({
    body: { type: String, null: false },
    image: { type: String, null: true },
    time_publish: { type: Date, default: Date.now },
});
const PostModel = mongoose.model('PostModel', Post);
export default PostModel;
