import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../Reservation/Component/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../Reservation/Component/Footer";

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [cookieValue, setCookieValue] = useState(Cookies.get('UserId') || '');
    const [localInfo, setLocalInfo] = useState({
        address: '',
        city: '',
        type: '',
        descLocal: '',
        name: '',
        dateStart: null,
        dateEnd: null,
        price: ''
    });
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalInfo({ ...localInfo, [name]: value });
    };

    const handleImageChange = (e, index) => {
        const files = e.target.files;
        const newImage = files[0];

        // Check if the file name already exists in the images array
        const fileNameExists = images.some(image => image.name === newImage.name);

        if (!fileNameExists) {
            const newImages = [...images];

            if (index >= 0 && index < newImages.length) {
                newImages[index] = newImage;
            } else {
                newImages.push(newImage); // If index is out of range, simply push the new image
            }

            setImages(newImages);
        } else {
            console.error("File with the same name already exists.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
        } else if (step === 3) {
            const formData = new FormData();
            let address= localInfo.address;
            let city= localInfo.city;
            let type= localInfo.type;
            let descLocal= localInfo.descLocal;
            let name= localInfo.name;
            let price= localInfo.price;
            let dateStart= localInfo.dateStart
            let dateEnd= localInfo.dateEnd;
            let idU=Cookies.get("UserId");
            let imageObject = {};
            for (let i = 0; i < images.length; i++) {
                imageObject[`image${i + 1}`] = images[i];
            }
            try {
                const response = await axios.post('http://localhost:8080/Hostings/newSave', {
                    address,city,type,descLocal,name,price,dateStart,dateEnd,idU
                });
                if(response.data==="Error"){
                    console.log(images)
                }
                else {
                    for (let i = 0; i < 5; i++) {
                        const formData = new FormData();
                        const idL=response.data
                        formData.append("file",images[i]);
                        console.log(formData.get('file'))
                        imageObject[`image${i + 1}`] = images[i];
                        try {
                            const response = await axios.post(`http://localhost:8080/Hostings/image/${idL}`, formData);
                            console.log(response.data)
                            formData.delete('file');
                        } catch (error) {
                            console.error('Error uploading image:', error.message);
                        }
                    }
                    if(response.data) navigate("/")
                }
            } catch (error) {
                console.log('Connexion Error');

            }
        }
    };


    const handleLogout = () => {
        Cookies.remove('UserId');
        setCookieValue('');
    };

    const handleLogin = () => {
        navigate('/Auth/Login');
    };

    return (
        <React.Fragment>
            <Navbar cookie={Cookies} cookieValue={cookieValue}  handleLogin={handleLogin} handleLogout={handleLogout} />
            <div className="pt-5">
                <div className="container mt-5">
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="card m-5 p-5">
                                <div className="m-2">
                                    <h2>Step 1: Local Information</h2>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={localInfo.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="text" className="form-control" id="price" name="price" placeholder="Enter price" value={localInfo.price} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address:</label>
                                        <input type="text" className="form-control" id="address" name="address" value={localInfo.address} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input type="text" className="form-control" id="city" name="city" value={localInfo.city} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type">Type:</label>
                                        <select className="form-control" id="type" name="type" value={localInfo.type} onChange={handleChange} required>
                                            <option value="">Select type</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Appartement">Appartement</option>
                                            <option value="House">House</option>
                                            <option value="Room">Room</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <textarea className="form-control" id="descLocal" name="descLocal" rows="3" placeholder="Enter description" value={localInfo.descLocal} onChange={handleChange}></textarea>
                                    </div>

                                </div>
                                <div className="text-end">
                                    <button type="submit" className="col-2  btn btn-success">Next</button>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="card m-5 p-5">
                                <h2>Step 2: Date</h2>
                                <div  className="form-group">
                                    <label htmlFor="dateDep">Starting Date:</label>
                                    <input type="date" className="form-control" id="dateStart" name="dateStart" value={localInfo.dateStart} onChange={handleChange} />
                                </div>
                                <div  className="form-group">
                                    <label htmlFor="dateDep">Ending Date:</label>
                                    <input type="date" className="form-control" id="dateEnd" name="dateEnd" value={localInfo.dateEnd} onChange={handleChange} />
                                </div>
                                <div className="text-end p-2">
                                    <button type="button" className="col-2 m-1 btn btn-danger" onClick={() => setStep(1)}>Previous</button>
                                    <button type="submit" className="col-2 m-1 btn btn-success">Next</button>
                                </div>

                            </div>
                        )}
                        {step === 3 && (
                            <div className="card m-5 p-5">
                                <h2>Step 3: Upload Images</h2>
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="form-group">
                                        <label htmlFor={`image${index + 1}`}>Image {index + 1}:</label>
                                        <input type="file" className="form-control" id={`image${index + 1}`} name={`image${index + 1}`} onChange={handleImageChange} />
                                    </div>
                                ))}
                                <div className="text-end p-2">
                                    <button type="button" className="col-2 m-1 btn btn-danger" onClick={() => setStep(2)}>Previous</button>
                                    <button type="submit" className="col-2 m-1 btn btn-primary">Submit</button>
                                </div>

                            </div>
                        )}
                    </form>
                </div>

            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default MultiStepForm;
