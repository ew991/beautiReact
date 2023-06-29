import React from "react";
import './CoreService.css';
import Animation1 from '../../../assest/img/Animation1.png';
import Animation2 from '../../../assest/img/Animation2.png';
import Animation3 from '../../../assest/img/Animation3.png';
// import './respon.css';
class CoreService_ extends React.Component {
    render() {
        return (
            <>
                <div className="CoreService" id="Service">
                    <div className="TitleDesc">
                        <div className="tt1 text-[16px] justify-center max-md:text-[24px]">
                            Main Services
                        </div>
                        <h1 className=" mt-6">
                            Learn services to focus<br />
                            on your beauty
                        </h1>
                        <p className=" mt-7 font-thin">
                            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br />amet, feugiat
                            tellus
                            sagittis, scelerisque eget nulla turpis.
                        </p>
                    </div>
                    <div className="box flex max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col ">
                        <div className="BoxLeft  bg-[#FFFFFF] w-[343px] h-[458px] max-lg:w-auto">
                            <img src={Animation1} alt="Animation1" />
                            <h1 className="name_ser mt-14">Beauty consultation</h1>
                            <p className="infser mt-8">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis.
                            </p>
                        </div>
                        <div className="BoxMid bg-[#FFFFFF] w-[343px] h-[458px] max-lg:w-auto"  >
                            <img src={Animation2} alt="Animation2" />
                            <h1 className="name_ser mt-14">Skin treatments</h1>
                            <p className="infser mt-8">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis.
                            </p>
                        </div>
                        <div className="BoxRight bg-[#FFFFFF] w-[343px] h-[458px] max-lg:w-auto max-lg:col-span-2">
                            <img src={Animation3} alt="Animation3" />
                            <h1 className="name_ser mt-14">Beauty product</h1>
                            <p className="infser mt-8">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis..
                            </p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default CoreService_;