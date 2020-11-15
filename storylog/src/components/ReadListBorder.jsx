import React from "react";

function ReadListBorder(props) {
    return (
        <React.Fragment>
            <a className="" href={"#/readlist/" + props.title}>
                <div className="feed-card highlight book animated fadeIn img-bg th-font2"
                     style={{backgroundImage: "url(" + props.bg + ")"}}>
                    <img className="img-feed-highlight book book-feed" alt={"WTF"}
                         src={props.bg} width="50%"></img>
                    <div className="book-read">
                        <div className="w-clearfix feed-card inheightlight rl book">
                            <div className="w-clearfix feed-info-rl nobg highlight full book">
                                <div className="w-clearfix feed-type book"></div>
                                <div className="profile-user-image_user book readList">
                                </div>
                                <div className="feed-info-title collection"><b>{props.title}</b>
                                </div>
                                <div className="feed-info-detail book read-list">{props.detail}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </React.Fragment>

    );
}

export default ReadListBorder;
