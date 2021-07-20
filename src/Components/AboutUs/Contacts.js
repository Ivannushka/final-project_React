import cat from '../..//Visual/Images/cat.jpg';
function Contacts({articles}) {
    //     const articlesTabs = articles.map((articles, index) => {
     
    //      return (
    //          <tr key={index}>
    //          <td><img  src={articles.image} style={{paddingLeft: '5px',paddingRight: '25px', paddingBottom: '5px', paddingTop: '5px',}} /></td>
    //          <td>  {articles.text}</td>
    //          </tr>
    //      )
    //  })
     
     return (
        //  <table className="table border border-dark"  >
        //      <tbody>
        //          {articlesTabs}
        //      </tbody>
    
        <div class="row">
        <div class="col-md-5">
            <img src={cat} alt="We are" class="about"/>
    </div>
    <div class="col-md-7">
    <p>Steampunk is an art form, technological or architectural style that derives mostly from science fiction and fantasy. Its creators envision an alternative industrial future world, which somehow diverged from our normal past during the Victorian era. This was when steam-powered technology was on the up-and-up and was the way to go.</p> 
    <p>Steampunk technology became part of this retro future, where steam, gears and cogs power the machines and air Travel is best done in good, old-fashioned Zeppelin airships. There are many examples of this fascinating art style in the world.</p> 
     <p>A subculture that is the aesthetic expression of a time-traveling fantasy world, one that embraces music, film, design and now fashion, all inspired by the extravagantly inventive age of dirigibles and steam locomotives, brass diving bells and jar-shaped protosubmarines.</p> 
    </div>
    </div>
     )
     }
     export default Contacts;