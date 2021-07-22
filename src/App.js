import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Register from './Views/Register';
import Chat from './Views/Chat';
import AboutUs from './Views/AboutUs';
import Page404 from './Views/Page404';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
<div>
<Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/article/:articleId">
                        <Article />
                    </Route>
                     <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/aboutus">
                        <AboutUs />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
</div>
  );
}

export default App;
