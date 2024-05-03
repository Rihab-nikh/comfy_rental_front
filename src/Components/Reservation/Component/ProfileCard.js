import React from 'react';

function ProfileCard({imgSrc,name}) {
    return (
        <section className="row">
            <div className="container ">
                <div className="col-12 p-2 w-100 col-md-9 col-lg-7 col-xl-5">
                    <div className="card col-12" style={{ borderRadius: "15px" }}>
                        <div className="card-body col-12 h-100 ">
                            <div className="row col-12 text-black">
                                <div className=" col-6">
                                    <img
                                        src={imgSrc}
                                        alt="Generic placeholder image"
                                        className="img-fluid"
                                        style={{ width: "180px", borderRadius: "10px" }}
                                    />

                                </div>
                                <div className=" col-6">
                                    <h5 className="mb-1">{name}</h5>
                                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Local's Host</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileCard;
