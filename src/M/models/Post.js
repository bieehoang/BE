import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
const Post = new Schema(
    {
        title: { type: String, null: false, maxlength: 255 },
        post: { type: String, null: false },
        img: { type: String, null: true },
        slug: { type: String, slug: 'title', unique: true, null: false },
    },
    { timestamps: true },
);
const PostModel = mongoose.model('PostModel', Post);
export default PostModel;
