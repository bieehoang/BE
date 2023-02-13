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
    // [GET] /news/create
    create(req, res, next) {
        res.render('create');
    }
    // [POST] /news/store
    store(req, res, next) {
        const data = req.body;
        const newPost = new PostModel(data);
        newPost.save().then(res.redirect(`/news/`)).catch(next);
    }
}

export default new NewsController();
