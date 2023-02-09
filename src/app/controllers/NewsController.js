class NewsController{
    // [GET] /news 
    index (req, res){
        res.render('news');
    }
    // [GET] /news/detail
    detail (req, res){
        res.render('detail')
    }
}

export default new NewsController;
