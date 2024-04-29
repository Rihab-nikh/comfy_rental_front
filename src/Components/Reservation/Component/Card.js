import React from "react";
import {Link} from "react-router-dom";

const card = ({localId,imgList,title,price,DateStart,DateEnd}) => {
    return (
        <Link to={`/LocalDetail/${localId}`} className="card text-decoration-none border-0 col-3 p-2 mb-3 mx-auto" style={{ maxWidth: "18rem" }}>
            <div id="carouselExample" className=" carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner">
                    {imgList.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={img} className="rounded d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card-body p-0 m-0">
                <p className="card-title m-0 fw-bolder">{title}</p>
                <p className="card-text m-0">{DateStart+"-"+DateEnd}</p>
                <p className="card-text m-0">{price}</p>
            </div>
        </Link>

    );
};
export default card;
