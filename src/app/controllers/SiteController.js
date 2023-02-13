import PostModel from '../../M/models/Post.js';
class SiteController {
    // [GET] /
    home(req, res) {
        PostModel.find({}, function (err, docs) {
            if (!err) {
                res.json(docs);
            } else {
                res.status(400).jsonp({ error: 'message' });
            }
        });
    }
}
export default new SiteController();
