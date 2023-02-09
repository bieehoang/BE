class SiteController {
    // [GET] /
    home(req, res) {
        res.render('home');
    }
}

export default new SiteController();
