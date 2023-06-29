import React from "react";
import './AboutUs.css';
import unplash from '../../../assest/img/unsplash_LRXYS0tSyGc.png';
import Bgimg from '../../../assest/img/BackgroundBubble-1.png';
// import './respon.css';
class AboutUs_ extends React.Component {
    render() {
        return (
            <>
                <div className="AboutUs flex gap-[50px] " style={{ backgroundImage: `url(${Bgimg})` }}>
                    <div className="IforButton ml-[10.5%] max-lg:col-span-2 ">
                        <div className="inforAboutUs " id="About">
                            <p className="Abu text-[16px] max-sm:text-[24px]">About Us</p>
                            <h1 className=" mt-6">We are the best beauty clinic</h1>
                            <div className=" max-lg:grid max-lg:grid-cols-3 max-sm:flex max-sm:flex-col-reverse" >
                                <p className="Abus mt-7 max-lg:col-span-2 max-lg:row-span-2 max-w-[500px] ">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Elit, quam suscipit purus
                                    donec
                                    amet.
                                    Egestas volutpat facilisi eu libero. Nunc,  ipsum ornare mauris sit quam quis enim. Varius
                                    tellus in
                                    suspendisse placerat.<br />
                                    <br />

                                    <p className="max-lg:hidden max-sm:block ">Id dui erat sed quam tellus in purus. Pellentesque  congue fringilla cras tellus enim.</p>
                                </p>

                                <img className=" hidden max-lg:flex max-lg:col-span-1 max-lg:row-span-2 max-lg:h-auto max-sm:flex" src={unplash} />
                                <p className="hidden max-lg:block max-lg:col-span-3 text-[#8B8B8B] max-sm:hidden">Id dui erat sed quam tellus in purus. Pellentesque  congue fringilla cras tellus enim.</p>
                            </div>


                        </div>
                        <div className="ButtonG mt-12">
                            <button className="LearnBtn w-52 h-16 tracking-[1.6px] mr-10">Learn More</button>
                            <button className="playBttn ">
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
                        <img className=" max-lg:hidden" src={unplash} alt="" />

                    </div>

                </div>
            </>
        )
    }
}
export default AboutUs_;