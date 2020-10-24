import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Home() {
    return (
        <div className="home">
            <Navigation />
            <div class="container">
                {/* Body popular */}
                <div class="w-container feed">
                    <div class="">
                        <button class="feed-card tool-create">
                            <div class="icon-create"></div>
                            <div class="tool-create-title">TELL YOUR STORY</div>
                        </button>
                    </div>
                    <div class="w-clearfix category tabfeed">
                        <button class="category-tabs half">STAFF PICKS</button>
                        <button class="category-tabs half">STAFF PICKS</button>
                    </div>
                </div> 
                {/* Body popular */}
            </div>
            <Footer />
        </div>

    );
}

export default Home;