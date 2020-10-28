import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Banner, Login, StaffPickBorder, ReadListBorder, Category } from "./components";
import LatestPopularBorder from "./components/LatestPopularBorder";
function App() {
    return (
        <div className="App">
            <Router>
                {/* <Navigation /> */}
                {/*<Banner />*/}
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/StaffPickBorder" exact component={() => <StaffPickBorder />} />
                    <Route path="/ReadListBorder" exact component={() => <ReadListBorder />} />
                    <Route path="/LatestPopularBorder" exact component={() => <LatestPopularBorder />} />
                    <Route path="/Category" exact component={() => <Category />} />
                </Switch>
                {/*<Footer /> */}
            </Router>
        </div>
    );
}

export default App;
