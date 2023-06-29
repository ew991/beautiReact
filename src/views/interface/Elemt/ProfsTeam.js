import React from "react";
import './ProfsTeam.css'
import tiwtter from '../../../assest/img/twitter.png';
import facebook from '../../../assest/img/Facebook.png';
import instagram from '../../../assest/img/instagram.png';
import unsplash1 from '../../../assest/img/unsplash_pTrhfmj2jDA.png';
import unsplash2 from '../../../assest/img/unsplash_mEZ3PoFGs_k.png';
import unsplash3 from '../../../assest/img/unsplash_FVh_yqLR9eA.png';
// import './respon.css';
class ProfsTeam_ extends React.Component {
    render() {
        return (
            <>
                <div className="ProfenlTem max-2xl:mt-[-275px] max-lg:mt-[-250px]  max-md:mt-[-250px] max-sm:mt-[150px]">
                    <div className="TitleDesc">
                        <div className="tt1" id="Blog">
                            Professional Teams
                        </div>
                        <h1 className=" mt-5">
                            The Professional expert
                        </h1>
                        <p className=" mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </p>
                    </div>
                    <div className="box lg:mx-[150px]  flex max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
                        <div className="BoxLeft lg:w-[424px] lg:h-[626px]  max-lg:w-full max-lg:h-[626px] ">
                            <img src={unsplash1} alt="Animation1" />
                            <p className="Abu">Surgeon</p>
                            <h1 className="name_ser mt-4">Briyan Nevalli</h1>
                            <p className="infser mt-6">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct flex mt-11 ">
                                <img src={tiwtter} alt="tw" />
                                <img src={facebook} alt="Fb" />
                                <img src={instagram} alt="Itg" />
                            </div>
                        </div>
                        <div className="BoxMid lg:w-[424px] lg:h-[626px]  max-lg:w-full max-lg:h-[626px] bg-[#FFFFFF] ">
                            <img src={unsplash2} alt="Animation2" />
                            <p className="Abu">Dermatologist</p>
                            <h1 className="name_ser mt-4">Bella sebastian</h1>
                            <p className="infser  mt-6">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct flex mt-11">
                                <img src={tiwtter} alt="tw" />
                                <img src={facebook} alt="Fb" />
                                <img src={instagram} alt="Itg" />
                            </div>
                        </div>
                        <div className="BoxRight lg:w-[424px] lg:h-[626px]  max-lg:w-full max-lg:h-[626px] max-lg:col-span-2">
                            <img src={unsplash3} alt="Animation3" />
                            <p className="Abu">Stylist expert</p>
                            <h1 className="name_ser mt-4">Lilly Adams</h1>
                            <p className="infser  mt-6">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct flex mt-11">
                                <img src={tiwtter} alt="tw" />
                                <img src={facebook} alt="Fb" />
                                <img src={instagram} alt="Itg" />
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default ProfsTeam_;