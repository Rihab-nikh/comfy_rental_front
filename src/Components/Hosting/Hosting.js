import React, {useEffect, useState} from "react";
import LocalForm from "./LocalForm";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Hosting = () => {
  const [cookieValue] = useState(Cookies.get('UserId') || '');
  const navigate = useNavigate();

  useEffect(() => {
    const cookieValue = Cookies.get('UserId');
    if (cookieValue) {
      if (cookieValue === '') {
        console.log("Cookie 'UserId' exists with value:", cookieValue);
        navigate('/Auth/Login');
      }
    }
    else {
      navigate('/Auth/Login');
    }
  }, [cookieValue]);
  return (<LocalForm/>);

}
export default Hosting;

