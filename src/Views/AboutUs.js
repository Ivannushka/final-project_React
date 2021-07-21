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
    const [activeTab, setActiveTab] = useState('Home');

    const articles = [
        
        {image1: aboutUs, 
            image2: man,
            image3: cat,
            text: 'Steampunk is an art form, technological or architectural style that derives mostly from science fiction and fantasy. Its creators envision an alternative industrial future world, which somehow diverged from our normal past during the Victorian era. This was when steam-powered technology was on the up-and-up and was the way to go. Steampunk technology became part of this retro future, where steam, gears and cogs power the machines and air Travel is best done in good, old-fashioned Zeppelin airships. There are many examples of this fascinating art style in the world.A subculture that is the aesthetic expression of a time-traveling fantasy world, one that embraces music, film, design and now fashion, all inspired by the extravagantly inventive age of dirigibles and steam locomotives, brass diving bells and jar-shaped protosubmarines.'},
]

    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About Us' },
    ];
    
    let tabContent = '';
    if (activeTab == 'Home') {
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
  
<div class="map-contacts">
    {/* <h2 class="find-us">Contacts</h2> */}
    <div class="row mt-5">
    <h2 class="find-us">Contacts</h2>
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