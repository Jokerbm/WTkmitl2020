import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Banner, Login, StaffPickBorder, ReadListBorder, ShortStory, Emotion} from "./components";
import LatestPopularBorder from "./components/Latestpopularboarder";
import CategoryBorder from "./components/CategoryBorder";
function App() {
    return (
        <div className="App">
            <HashRouter>
                {/*<Navigation /> */}
                {/*<Banner />*/}
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/StaffPickBorder" exact component={() => <StaffPickBorder />} />
                    <Route path="/ReadListBorder" exact component={() => <ReadListBorder />} />
                    <Route path="/LatestPopularBorder" exact component={() => <LatestPopularBorder />} />
                    <Route path="/Category/Shortstory" exact component={() => <ShortStory />} />
                    <Route path="/Category/Emotion" exact component={() => <Emotion />} />
                    <Route path="/CategoryBorder" exact component={() => <CategoryBorder />} />
                </Switch>
                {/*<Footer /> */}
                </HashRouter>
        </div>
    );
}

export default App;
