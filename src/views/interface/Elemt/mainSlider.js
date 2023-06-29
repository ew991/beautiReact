import React from "react";
import './mainSlider.css';
import Frane1 from '../../../assest/img/Frame 1.png';
// import './respon.css';
class MainSlider_ extends React.Component {
    render() {
        return (
            <>
                <div className="block2 max-sm:flex-col-reverse max-sm:justify-center">
                    <div className=" ml-[79px] txt flex flex-col gap-5 max-sm:ml-0">
                        <h1 className=" text-[48px] font-semibold max-md:text-[30px] max-lg:text-[37px]">Clinic & beauty consultant
                        </h1>
                        <p>It is a long established fact that a reader will be by the readable content of a page.
                        </p>
                        <button className="More_Dlt" onclick="hanDlegetId(this)">More Details</button>
                    </div>

                    <img className="max-md:ml-0 max-md:mt-0 max-sm:w-[80%] max-md:float-left max-md:w-[50%] max-lg:w-[50%] ml-[20px] mt-[24px] " src={Frane1} />

                </div>
                <div className="slideBtn">
                    <div></div>
                    <div class="i"></div>
                    <div></div>
                </div>
                {/* <div>
                    <img className=" float-right w-[40%]" src={Frane1} />
                    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
                </div> */}
            </>
        )
    }
}
export default MainSlider_;
