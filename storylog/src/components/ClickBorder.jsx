import React from "react";

function ClickBorder() {
    return (
        <div className="AfterClickReadlist">
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                AfterClickReadlist
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...ข้อความ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClickBorder;

