import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { FeedLatest, FeedPop,FeedPopWeek, Footer ,Home, About, Contact, Login,ProfileBorder, StaffPickBorder, CreativeCommons , InsideReadlist,ClickBorder, ReadListBorder, ShortStory, Emotion,ReadList, Experience, Inspiration, Knowledge, Idea, Notfound, Philosophy, UserAgreement} from "./components";
import LatestPopularBorder from "./components/Latestpopularboarder";
import CategoryBorder from "./components/CategoryBorder";
function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/readlist" exact component={() => <ReadList />} />
                    <Route path="/ProfileBorder" exact component={() => <ProfileBorder />} />
                    <Route path="/about/:id" component={About}/>
                    <Route path="/ClickBorder" exact component={() => <ClickBorder />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/CreativeCommons" exact component={() => <CreativeCommons />} />
                    <Route path="/Philosophy" exact component={() => <Philosophy />} />
                    <Route path="/InsideReadlist" exact component={() => <InsideReadlist />} />
                    <Route path="/UserAgreement" exact component={() => <UserAgreement />} />
                    <Route path="/StaffPickBorder" exact component={() => <StaffPickBorder />} />
                    <Route path="/ReadListBorder" exact component={() => <ReadListBorder />} />
                    <Route path="/LatestPopularBorder" exact component={() => <LatestPopularBorder />} />
                    <Route path="/category/short story" exact component={() => <ShortStory />} />
                    <Route path="/Category/Emotion" exact component={() => <Emotion />} />
                    <Route path="/Category/Experience" exact component={() => <Experience />} />
                    <Route path="/Category/Inspiration" exact component={() => <Inspiration />} />
                    <Route path="/Category/Knowledge" exact component={() => <Knowledge />} />
                    <Route path="/Category/Idea" exact component={() => <Idea />} />
                    <Route path="/CategoryBorder" exact component={() => <CategoryBorder />} />
                    <Route path="/feed/latest" exact component={() => <FeedLatest />} />
                    <Route path="/feed/popular" exact component={() => <FeedPop />} />
                    <Route path="/feed/popular/week" exact component={() => <FeedPopWeek />} />
                    <Route path="*" exact component={() => <Notfound />} />
                </Switch>
                </HashRouter>
        </div>
    );
}

export default App;
