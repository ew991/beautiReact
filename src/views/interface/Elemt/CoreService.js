import React from "react";
import './CoreService.css'
import Animation1 from '../../../assest/img/Animation1.png'
import Animation2 from '../../../assest/img/Animation2.png'
import Animation3 from '../../../assest/img/Animation3.png'
class CoreService_ extends React.Component {
    render() {
        return (
            <>
                <div className="CoreService" id="Service">
                    <div className="TitleDesc">
                        <div className="tt1">
                            Main Services
                        </div>
                        <h1>
                            Learn services to focus<br />
                            on your beauty
                        </h1>
                        <p>
                            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br />amet, feugiat
                            tellus
                            sagittis, scelerisque eget nulla turpis.
                        </p>
                    </div>
                    <div className="box">
                        <div className="BoxLeft">
                            <img src={Animation1} alt="Animation1" />
                            <h1 className="name_ser mt-52">Beauty consultation</h1>
                            <p className="infser">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis.
                            </p>
                        </div>
                        <div className="BoxMid">
                            <img src={Animation2} alt="Animation2" />
                            <h1 className="name_ser mt-52">Skin treatments</h1>
                            <p className="infser">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis.
                            </p>
                        </div>
                        <div className="BoxRight">
                            <img src={Animation3} alt="Animation3" />
                            <h1 className="name_ser mt-52">Beauty product</h1>
                            <p className="infser">Non parturient amet, feugiat<br /> tellus sagittis, scelerisque eget<br /> nulla turpis..
                            </p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default CoreService_;