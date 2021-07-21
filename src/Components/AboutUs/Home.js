import aboutUs from "../../Visual/Images/aboutUs.jpeg";

function Home({articles}) {
    const articlesTabs = articles.map((articles, index) => 
    
    {
 
     return (
       
         <div key={index} class="row" >
         <div class="col-md-4" >
             <img src={articles.image1}  alt="We are" className=" img-fluid about"/>
     </div>
     <div class="col-md-8">
     {articles.text}
     </div>
     </div> 
     )
 })
 
 return (

    <div>
             {articlesTabs}
    </div>
//     <table className="table border border-dark"  >
   
)
}
 export default Home;