import aboutUs from '../../Visual/Images/aboutUs.jpeg';

function Home({ articles }) {
  const articlesTabs = articles.map((articles, index) => {
    return (
      <div key={index} className="row">
        <div className="col-md-4">
          <img
            src={articles.image1}
            alt="We are"
            className=" img-fluid about"
          />
        </div>
        <div className="col-md-8 text">{articles.text}</div>
      </div>
    );
  });

  return (
    <div>{articlesTabs}</div>
  );
}
export default Home;
