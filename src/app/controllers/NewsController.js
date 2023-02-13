import PostModel from '../../M/models/Post.js';
import Util from '../../utils/mongooseHelp.js';
class NewsController {
    // [GET] /news
    index(req, res, next) {
        PostModel.find({})
            .then((posts) => {
                res.render('news', {
                    posts: Util.mongooseToMulti(posts),
                });
            })
            .catch(next);
    }
    // [GET] /news/detail
    detail(req, res, next) {
        PostModel.findOne({ _id: req.params.id })
            .then((post) => {
                res.render('detail', {
                    post: Util.mongooseToOne(post),
                }),
                    console.log(post);
            })
            .catch(next);
    }
}

export default new NewsController();
