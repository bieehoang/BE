import PostModel from '../../M/models/Post.js';
import Util from '../../M/utils/mongoose.js';
class NewsController {
    // [GET] /news
    index(req, res, next) {
        PostModel.find({})
            .then((post) => {
                res.render('news', { post: Util.mongooToMulti(post) });
            })
            .catch(next);
    }
    // [GET] /news/:slug
    detail(req, res, next) {
        PostModel.findOne({ _id: req.params._id })
            .then((post) =>
                res.render(
                    'detail',
                    {
                        post: Util.mongooToOne(post),
                    },
                    console.log(post),
                ),
            )
            .catch(next);
    }
}

export default new NewsController();
