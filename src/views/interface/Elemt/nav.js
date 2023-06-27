import React from "react";
import Hinh from '../../../assest/img/Main Logo.svg';
import bg from '../../../assest/img/Slide Background.png';

import './nav.css';
class Nav_ extends React.Component {
    render() {
        return (
            <>
                <div className="backGrimg">
                    <img src={bg} />
                </div>
                <div className="navbar" id="#">
                    <img src={Hinh} />
                    <button className="btnHbgIcn" onclick="showMn()"><i className="bx bx-menu" id="hamberGicn"></i></button>
                    <ul id="sElm">
                        <li>
                            <a id="fchi" href="#" style={{ color: '#414880' }} >Home&nbsp;+</a>
                        </li>
                        <li>

                            <a href="#About">About</a>
                        </li>
                        <li>

                            <a href="#Service">Service</a>
                        </li>
                        <li>
                            <a href="#Gallery">Gallery</a>
                        </li>
                        <li>

                            <a href="#Blog">Blog</a>
                        </li>
                        <button className="right" onclick="hanDleOnClickBtnK()">Contact</button>
                    </ul>
                </div>

            </>

        )
    }
}
export default Nav_;