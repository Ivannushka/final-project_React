import { NavLink, useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import Pagination from '../Components/Pagination';
import articles from '../Components/Articles';
import { SRLWrapper } from 'simple-react-lightbox';
import { useState } from 'react';
import madmax from '../Visual/Images/madmax.jpg';

function Article() {
  const { articleId } = useParams();
  const filteredArticles = articles.filter((article) => {
    return articleId == article.id;
  });
  const article = filteredArticles[0];
  const [mainImage, setMainImage] = useState(madmax);

  const breadcrumbPaths = [
    { link: '/', title: 'Home' },
    { link: '/articles', title: 'Articles' },
    { title: article.title },
  ];

  const imageThumbnails = article.images.map((image, index) => {
    return (
      <div className="col-4 mt-3" key={index}>
        <a href={image}>
          <img
            className="img-fluid"
            src={image}
            onMouseEnter={() => setMainImage(image)}
          />
        </a>
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

      <div className="row">
        <div className="col">
          <h1>{article.title}</h1>
        </div>
      </div>
      <div className="row mb-5 pb-3">
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col">
              <img src={mainImage} className="img-fluid" />
            </div>
          </div>
          <SRLWrapper>
            <div className="row">{imageThumbnails}</div>
          </SRLWrapper>
        </div>
        <div className="col-12 col-md-7 text ">
          <p className="text-muted">{article.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex p-2 bd-highlight justify-content-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default Article;
