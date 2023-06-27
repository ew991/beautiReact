import React from "react";
import './AboutUs.css';
import unplash from '../../../assest/img/unsplash_LRXYS0tSyGc.png';
import Bgimg from '../../../assest/img/BackgroundBubble-1.png'
class AboutUs_ extends React.Component {
    render() {
        return (
            <>
                <div className="AboutUs" style={{ backgroundImage: `url(${Bgimg})` }}>
                    <div className="IforButton">
                        <div className="inforAboutUs" id="About">
                            <p className="Abu">About Us</p>
                            <h1>We are the best beauty clinic</h1>
                            <p className="Abus">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Elit, quam suscipit purus
                                donec<br />
                                amet.
                                Egestas volutpat facilisi eu libero. Nunc,<br /> ipsum ornare mauris sit quam quis enim. Varius<br />
                                tellus in
                                suspendisse placerat.<br />
                                <br />

                                Id dui erat sed quam tellus in purus. Pellentesque<br /> congue fringilla cras tellus enim.
                            </p>

                        </div>
                        <div className="ButtonG">
                            <button className="LearnBtn">Learn More</button>
                            <button className="playBttn">
                                <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
                                    <path
                                        d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
                                        fill="white" />
                                </svg>
                                Watch Video</button>
                        </div>

                    </div>
                    <div className="trnah">
                        <img src={unplash} alt="" />

                    </div>

                </div>
            </>
        )
    }
}
export default AboutUs_;