import PostModel from '../../M/models/Post.js';
class SiteController {
    // [GET] /
    home(req, res, next) {
        res.render('home');
    }
}
export default new SiteController();
