import PostModel from '../../M/models/Post.js';
import Util from '../../utils/mongooseHelp.js';
class DetailController {
    // [GET] /news/detail/:slug
    index(req, res, next) {
        PostModel.findOne({ slug: req.params.slug })
            .then((post) => {
                res.render('news/detail', {
                    post: Util.mongooseToOne(post),
                });
            })
            .catch(next);
    }
}

export default new DetailController();
