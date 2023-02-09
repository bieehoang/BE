import NewsRoutes from './news.js';
import SiteRoutes from './site.js';
function route(app) {
    app.get('/news', NewsRoutes);
    app.get('/', SiteRoutes);
}
export default route;
