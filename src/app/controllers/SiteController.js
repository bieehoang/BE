import PostModel from '../../M/models/Post.js';
class SiteController {
    // [GET] /
    home(req, res, next) {
        res.render('home');
    }
    // [GET] /search
    search(req, res, next) {
        const searchTerm = new String(req.body.search);
        PostModel.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { post: { $regex: searchTerm, $options: 'i' } },
            ],
        })
            .then((result) => {
                res.json(result);
            })
            .catch(next);
    }
}
export default new SiteController();
