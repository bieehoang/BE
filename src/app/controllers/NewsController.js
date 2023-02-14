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
        res.render('news/create');
    }
    // [POST] /news/store
    store(req, res, next) {
        const data = req.body;
        const newPost = new PostModel(data);
        newPost.save().then(res.redirect(`/news/`)).catch(next);
    }
    // [GET] /news/listed
    listed(req, res, next) {
        PostModel.find({})
            .then((values) => {
                res.render('news/listed', {
                    values: Util.mongooseToMulti(values),
                });
            })
            .catch(next);
    }
    // [GET] /news/:id/edit
    edit(req, res, next) {
        PostModel.findById({ _id: req.params._id })
            .then((post) => {
                res.render('news/edit', {
                    post: Util.mongooseToOne(post),
                });
            })
            .catch(next);
    }
    // [PUT]/news/:id/
    changed(req, res, next) {
        const data = req.body;
        PostModel.findOneAndUpdate({ _id: req.params._id }, data)
            .then((x) => {
                res.redirect(`/news/detail/${x.slug}`);
            })
            .catch(next);
    }
    // [DELETE] /news/:id
    delete(req, res, next) {
        PostModel.findByIdAndDelete({ _id: slug.params._id })
            .then(res.redirect('back'))
            .catch(next);
    }
}

export default new NewsController();
