import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import Pagination from '../Components/Pagination';
import articles from '../Components/Articles';

function Articles() {
  const breadcrumbPaths = [{ link: '/', title: 'Home' }, { title: 'Articles' }];
  const articleElements = articles.map((article, index) => {
    return (
      <div className="row mb-5 pb-3 border-bottom page2 " key={index}>
        <div className="col-12 col-md-3 ">
          <NavLink to={`/articles/${article.id}`}>
            <img className="img-fluid" src={article.image} />
          </NavLink>
        </div>
        <div className="col-12 col-md-9">
          <h3>
            <NavLink to={'/article/' + article.id}>{article.title}</NavLink>
          </h3>
          <p className="text-muted">{article.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>
      {articleElements}
      <div className="row">
        <div className="col d-flex p-2 bd-highlight justify-content-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default Articles;
