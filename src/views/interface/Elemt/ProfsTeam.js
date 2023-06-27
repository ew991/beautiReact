import React from "react";
import './ProfsTeam.css'
import tiwtter from '../../../assest/img/twitter.png';
import facebook from '../../../assest/img/Facebook.png';
import instagram from '../../../assest/img/instagram.png';
import unsplash1 from '../../../assest/img/unsplash_pTrhfmj2jDA.png';
import unsplash2 from '../../../assest/img/unsplash_mEZ3PoFGs_k.png';
import unsplash3 from '../../../assest/img/unsplash_FVh_yqLR9eA.png';
class ProfsTeam_ extends React.Component {
    render() {
        return (
            <>
                <div className="ProfenlTem">
                    <div className="TitleDesc">
                        <div className="tt1" id="Blog">
                            Professional Teams
                        </div>
                        <h1>
                            The Professional expert
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </p>
                    </div>
                    <div className="box ">
                        <div className="BoxLeft marh">
                            <img src={unsplash1} alt="Animation1" />
                            <p className="Abu">Surgeon</p>
                            <h1 className="name_ser">Briyan Nevalli</h1>
                            <p className="infser">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct ">
                                <img src={tiwtter} alt="tw" />
                                <img src={facebook} alt="Fb" />
                                <img src={instagram} alt="Itg" />
                            </div>
                        </div>
                        <div className="BoxMid marh">
                            <img src={unsplash2} alt="Animation2" />
                            <p className="Abu">Dermatologist</p>
                            <h1 className="name_ser">Bella sebastian</h1>
                            <p className="infser">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct ">
                                <img src={tiwtter} alt="tw" />
                                <img src={facebook} alt="Fb" />
                                <img src={instagram} alt="Itg" />
                            </div>
                        </div>
                        <div className="BoxRight marh">
                            <img src={unsplash3} alt="Animation3" />
                            <p className="Abu">Stylist expert</p>
                            <h1 className="name_ser">Lilly Adams</h1>
                            <p className="infser">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit ut<br /> aliquam, purus sit
                            </p>
                            <div className="contarct ">
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