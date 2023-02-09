import NewsRoutes from "./news.js";
import SiteRoutes from "./site.js";
function route(app){
    app.use('/news', NewsRoutes);
    app.use('/', SiteRoutes)
}
export default route;
