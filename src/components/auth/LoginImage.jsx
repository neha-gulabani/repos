import React from 'react';
import LeftImage from "../../assets/leftloginimage.png";
import LogoImage from '../../assets/Subtract.png';

export default function LoginImageComponent() {
    return (
        <div className="flex w-full h-screen relative">


            <div className="flex justify-center items-center w-full h-full">
                <img src={LeftImage} alt="details" className="w-72 h-auto" />
            </div>


            <img
                src={LogoImage}
                alt="details"
                className="absolute bottom-4 left-4 w-40 h-auto"
            />
        </div>
    );
}
