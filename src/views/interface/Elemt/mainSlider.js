import React from "react";
import './mainSlider.css';
import Frane1 from '../../../assest/img/Frame 1.png';
class MainSlider_ extends React.Component {
    render() {
        return (
            <>
                <div className="block2">
                    <div className="txt">
                        <h1>Clinic & beauty consultant
                        </h1>
                        <p>It is a long established fact that a reader will be by the readable content of a page.
                        </p>
                        <button className="More_Dlt" onclick="hanDlegetId(this)">More Details</button>
                    </div>

                    <img src={Frane1} />

                </div>
                <div className="slideBtn">
                    <div></div>
                    <div class="i"></div>
                    <div></div>
                </div>
            </>
        )
    }
}
export default MainSlider_;
