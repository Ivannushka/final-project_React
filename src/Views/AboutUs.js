import {useState} from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import aboutUs from '../Visual/Images/aboutUs.jpeg';
import man from '../Visual/Images/man.jpg';
import cat from '../Visual/Images/cat.jpg';
import '../Visual/Css/style.css';
import Home from '../Components/AboutUs/Home';
import Profile from '../Components/AboutUs/Profile';
import Contacts from '../Components/AboutUs/Contacts';

function AboutUs() {
    const [activeTab, setActiveTab] = useState('home');
    const [articles, setArticles] = useState([
        
        {image: aboutUs, text: 'Behind the couch sleep everywhere, but not in my bed yet munch on tasty moths or jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, dead stare with ears cocked so attack feet. Bring your owner a dead bird don\'t nosh on the birds cough furball into food bowl then scratch owner for a new one. Always hungry attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what\'s your problem? i meant to do that now i shall wash myself intently. Wake up wander around the house making large amounts of noise jump on top of your human\'s bed and fall asleep again waffles yet stuff and things do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy and meow in empty rooms. Drink from the toilet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked, but need to chase tail munch on tasty moths eat a plant, kill a hand, or claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Give me attention or face the wrath of my claws mmmmmmmmmeeeeeeeeooooooooowwwwwwww, nya nya nyan need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me mew mew jump five feet...', text2: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design and... ', text3: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', text4:'Nothing is here...'},
//   {image: man, text: 'Behind the couch sleep everywhere, but not in my bed yet munch on tasty moths or jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, dead stare with ears cocked so attack feet. Bring your owner a dead bird don\'t nosh on the birds cough furball into food bowl then scratch owner for a new one. Always hungry attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what\'s your problem? i meant to do that now i shall wash myself intently. Wake up wander around the house making large amounts of noise jump on top of your human\'s bed and fall asleep again waffles yet stuff and things do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy and meow in empty rooms. Drink from the toilet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked, but need to chase tail munch on tasty moths eat a plant, kill a hand, or claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Give me attention or face the wrath of my claws mmmmmmmmmeeeeeeeeooooooooowwwwwwww, nya nya nyan need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me mew mew jump five feet...', text2: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design and... ', text3: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', text4:'Nothing is here...'},
//    {image: cat, text: 'Behind the couch sleep everywhere, but not in my bed yet munch on tasty moths or jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, dead stare with ears cocked so attack feet. Bring your owner a dead bird don\'t nosh on the birds cough furball into food bowl then scratch owner for a new one. Always hungry attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what\'s your problem? i meant to do that now i shall wash myself intently. Wake up wander around the house making large amounts of noise jump on top of your human\'s bed and fall asleep again waffles yet stuff and things do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy and meow in empty rooms. Drink from the toilet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked, but need to chase tail munch on tasty moths eat a plant, kill a hand, or claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Give me attention or face the wrath of my claws mmmmmmmmmeeeeeeeeooooooooowwwwwwww, nya nya nyan need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me mew mew jump five feet...', text2: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design and... ', text3: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', text4:'Nothing is here...'},
    ])
    // setArticles(newArticles);

    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About Us' },
    ];
    
    let tabContent = '';
    if (activeTab == 'home') {
        tabContent = <Home articles={articles}/>
    } else if (activeTab == 'Profile') {
        tabContent = <Profile articles={articles}/>
    } else if (activeTab == 'Contacts') {
        tabContent = <Contacts articles={articles}/>
    } 
    
    return (
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={breadcrumbPaths} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h1>Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'Home' ? ' active' : '')} onClick={() => setActiveTab('Home')}>Home</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'Profile' ? ' active' : '')} onClick={() => setActiveTab('Profile')}>Profile</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'Contacts' ? ' active' : '')} onClick={() => setActiveTab('Contacts')}>Contacts</button>
                        </li>
                    </ul>
                    {tabContent}
                </div>
            </div>
        {/* </div> */}

// MAP

<div class="map-contacts">
    <h2 class="find-us">Contacts</h2>
    <div class="row">
      <div class="col-sm-7">
        <iframe  class="sized-map" src="https://www.google.com/maps/d/embed?mid=1DyNyv57_v4zXfI87Vh8glb8QCds" width="640" height="480"></iframe> 
      </div>
      <div class="col-sm-5">
          <h5>Address:</h5>
          <p class="info"> 
            Mushrooms street 69, Suncity, Wonderland, WL-108</p>
          <h5 class="contact-us">Email:</h5>
          <navLink to="/mail" class="info">steamyourself@gmail.com</navLink>

          <h5 class="contact-us"> Phone:</h5>
          <p class="info">+371 111 111</p>
      </div>
    </div>
  </div>
  </div>
    )
}
export default AboutUs;