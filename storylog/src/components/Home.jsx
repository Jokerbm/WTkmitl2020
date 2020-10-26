import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Home() {
    return (
        <div className="home">
            <Navigation />
            <div class="feed-cover">
                <div class="feed-cover bg"></div>
            </div>
            <div class="container">
                {/* Body popular */}
                <div class="w-container feed">
                    <div class="w-clearfix category tabfeed">
                        <button class="feed-card tool-create">
                            <div class="icon-create"></div>
                            <div class="tool-create-title">TELL YOUR STORY</div>
                        </button>
                    </div>
                    <div class="w-clearfix category tabfeed">
                        <button class="category-tabs half">STAFF PICKS</button>
                        <button class="category-tabs half">READLIST</button>
                    </div>
                </div> 
                {/* Body popular */}
            </div>
        </div>

    );
}

export default Home;