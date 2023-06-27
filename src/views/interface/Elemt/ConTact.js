import React from "react";
import './ConTact.css';
import imgContact from '../../../assest/img/Contact Animations.png'
import ConTactBg from '../../../assest/img/Bgbb3.png'
class ConTact_ extends React.Component {
    render() {
        return (
            <>
                <div className="conTact" style={{ backgroundImage: `url(${ConTactBg})` }}>
                    <img className="imgContact" src={imgContact} alt="img" />
                    <div className="ttForm" id="Contact">
                        <p>Contact Us</p>
                        <h1>Send your inquiry to<br />
                            our expert team</h1>
                        <h5>Lorem ipsum dolor sit amet nulla turapis tellus.
                        </h5>
                        <form className="FormContra">
                            <div className="FnLName">
                                <input type="text" className="FirstName" name="First name" id="" placeholder="First name" />
                                <input type="text" className="LastName" name="Last name" id="" placeholder="Last name" />
                            </div>
                            <input type="text" className="Email" name="Email address" id="" placeholder="Email address" />
                            <input type=" text" className="Sbmessage" name="Subject message" id="" placeholder="Subject message" />
                            <textarea className="inpinio" name="Your inquiry here" id="" cols="30" rows="10"
                                placeholder="Your inquiry here"></textarea>
                            <div className="sendM"><button>Send Message</button></div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default ConTact_;