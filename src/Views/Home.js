import {NavLink} from 'react-router-dom';
import '../Visual/Css/style.css';
import image1 from  '../Visual/Images/churros.jpg';
import article1 from '../Visual/Images/robocat.png';
import article2 from '../Visual/Images/tankGirl.jpg';
import article3 from '../Visual/Images/kitty1.jpg';

function Home() {
    const articles = [
        {
            title: 'Creatures',
            image: article1,
            text: 'How Steampunk Became a Stylish Protest to the Digital Age.',
            id: 'first-article',
        },
        {
            title: 'People',
            image: article2,
            text: 'How Steampunk Became a Stylish Protest to the Digital Age.',
            id: 'second-article',
        },
        {
            title: 'Vehicles',
            image: article3,
            text: 'How Steampunk Became a Stylish Protest to the Digital Age.',
            id: 'third-article',
        },
    ];

    const articlesElements = articles.map((article, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={article.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {/* <NavLink to={'/home/' + article.id}> */}
                                    <NavLink to={'/articles/'}>
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{article.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return (
<div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/800/300" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/800/300" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h4>Three most recent articles</h4>
                </div>
            </div>
            <div className="row">
                {articlesElements}
            </div>
        </div>
    );
}
export default Home;