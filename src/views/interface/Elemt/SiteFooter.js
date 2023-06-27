import React from "react";
import './SiteFooter.css';
import Logo from '../../../assest/img/Footer Logo.png';
import footerBg from '../../../assest/img/FooterBG.png';
import buttonToTopBG from '../../../assest/img/ToTopButton.png'
class SiteFooter_ extends React.Component {

    render() {
        return (
            <>
                <div className="SiteFooter" style={{ backgroundImage: `url(${footerBg})` }}>
                    <div className="logoim" >
                        <div className="trais">
                            <img src={Logo} alt="" />
                            <p><strong>Beautice </strong> is a Beauty Clinic WordPress Theme.</p>
                            <p>Baker Steet 101, NY, United States.</p>
                            <span style={{ marginRight: '20px' }} >+521 569 8966.</span>
                            <span>mail@company.com. </span>
                        </div>

                        <div className="w3-a" style={{ width: '25%' }} >
                            <h3>Page</h3>
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#About">About</a></li>
                            <li> <a href="#Service">Services</a></li>
                            <li> <a href="#Gallery">Gallery</a></li>
                            <li> <a href="#Blog">Team</a></li>
                        </div>
                        <div className="w3-a">
                            <h3>Informations</h3>
                            <li> <a href="#">Terms & conditions</a></li>
                            <li> <a href="#">Privacy policy</a></li>
                            <li> <a href="#Blog">Blog</a></li>
                            <li> <a style={{ cursor: 'pointer' }} onclick="hanDleOnClickBtnK()">Contact</a></li>
                        </div>
                    </div>

                    <div className="iconContact">
                        <div className="icn">
                            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.3174 15.6593L14.0117 10.6212H9.67041V7.35173C9.67041 5.97339 10.2769 4.62984 12.2212 4.62984H14.1948V0.340373C14.1948 0.340373 12.4038 0 10.6914 0C7.11621 0 4.7793 2.41306 4.7793 6.78136V10.6212H0.805176V15.6593H4.7793V27.8388H9.67041V15.6593H13.3174Z"
                                    fill="white" />
                            </svg>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.4302 6.24912C22.446 6.49641 22.446 6.74375 22.446 6.99103C22.446 14.5336 17.2906 23.2244 7.86802 23.2244C4.96509 23.2244 2.26841 22.2882 0 20.6632C0.412451 20.7161 0.808984 20.7338 1.2373 20.7338C3.63257 20.7338 5.83755 19.8329 7.59834 18.2962C5.3458 18.2431 3.45811 16.6004 2.80771 14.3393C3.125 14.3923 3.44224 14.4276 3.77539 14.4276C4.2354 14.4276 4.69546 14.357 5.12373 14.2334C2.77603 13.7034 1.01519 11.4071 1.01519 8.6338V8.56317C1.69727 8.98711 2.49048 9.25207 3.33115 9.28736C1.95107 8.26281 1.04692 6.51408 1.04692 4.53567C1.04692 3.47584 1.30068 2.50431 1.74487 1.65642C4.26709 5.1186 8.05835 7.37958 12.3096 7.62692C12.2303 7.20298 12.1827 6.76142 12.1827 6.3198C12.1827 3.17554 14.4669 0.614258 17.3064 0.614258C18.7816 0.614258 20.1141 1.30316 21.05 2.41601C22.208 2.16872 23.3184 1.69176 24.302 1.0382C23.9212 2.36305 23.1122 3.47589 22.0494 4.18241C23.0805 4.05882 24.0799 3.7408 24.9999 3.29924C24.3021 4.4297 23.4295 5.43652 22.4302 6.24912V6.24912Z"
                                    fill="white" />
                            </svg>
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.45898 24.3589H0.923828V8.09604H5.45898V24.3589ZM3.18896 5.87763C1.73877 5.87763 0.5625 4.54007 0.5625 2.9252C0.5625 2.14952 0.839216 1.4056 1.33177 0.857115C1.82433 0.308626 2.49238 0.000488281 3.18896 0.000488281C3.88555 0.000488281 4.5536 0.308626 5.04616 0.857115C5.53871 1.4056 5.81543 2.14952 5.81543 2.9252C5.81543 4.54007 4.63867 5.87763 3.18896 5.87763ZM22.4326 24.3589H17.9072V16.4423C17.9072 14.5555 17.873 12.1359 15.5493 12.1359C13.1914 12.1359 12.8301 14.1858 12.8301 16.3063V24.3589H8.29981V8.09604H12.6494V10.3144H12.7129C13.3184 9.03669 14.7974 7.68825 17.0039 7.68825C21.5938 7.68825 22.4375 11.0539 22.4375 15.4255V24.3589H22.4326Z"
                                    fill="white" />
                            </svg>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.8566 3.54354C23.5839 2.4005 22.7807 1.50028 21.7609 1.19478C19.9124 0.639648 12.5 0.639648 12.5 0.639648C12.5 0.639648 5.08767 0.639648 3.2391 1.19478C2.21927 1.50033 1.41606 2.4005 1.14344 3.54354C0.648132 5.61536 0.648132 9.93801 0.648132 9.93801C0.648132 9.93801 0.648132 14.2607 1.14344 16.3325C1.41606 17.4755 2.21927 18.3382 3.2391 18.6437C5.08767 19.1989 12.5 19.1989 12.5 19.1989C12.5 19.1989 19.9123 19.1989 21.7609 18.6437C22.7807 18.3382 23.5839 17.4755 23.8566 16.3325C24.3519 14.2607 24.3519 9.93801 24.3519 9.93801C24.3519 9.93801 24.3519 5.61536 23.8566 3.54354ZM10.0757 13.8627V6.01336L16.271 9.93811L10.0757 13.8627Z"
                                    fill="white" />
                            </svg>
                            <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5049 6.66661C8.39941 6.66661 5.89453 9.45593 5.89453 12.914C5.89453 16.3721 8.39941 19.1615 11.5049 19.1615C14.6104 19.1615 17.1152 16.3721 17.1152 12.914C17.1152 9.45593 14.6104 6.66661 11.5049 6.66661ZM11.5049 16.9757C9.49805 16.9757 7.85742 15.1542 7.85742 12.914C7.85742 10.6739 9.49316 8.85239 11.5049 8.85239C13.5166 8.85239 15.1523 10.6739 15.1523 12.914C15.1523 15.1542 13.5117 16.9757 11.5049 16.9757ZM18.6533 6.41106C18.6533 7.22121 18.0674 7.86825 17.3447 7.86825C16.6172 7.86825 16.0361 7.21577 16.0361 6.41106C16.0361 5.60634 16.6221 4.95387 17.3447 4.95387C18.0674 4.95387 18.6533 5.60634 18.6533 6.41106ZM22.3691 7.89C22.2861 5.93802 21.8857 4.20896 20.6016 2.7844C19.3223 1.35983 17.7695 0.913977 16.0166 0.816106C14.21 0.701923 8.79492 0.701923 6.98828 0.816106C5.24023 0.908539 3.6875 1.3544 2.40332 2.77896C1.11914 4.20353 0.723633 5.93258 0.635742 7.88456C0.533203 9.89635 0.533203 15.9263 0.635742 17.9381C0.71875 19.8901 1.11914 21.6191 2.40332 23.0437C3.6875 24.4682 5.23535 24.9141 6.98828 25.012C8.79492 25.1261 14.21 25.1261 16.0166 25.012C17.7695 24.9195 19.3223 24.4737 20.6016 23.0437C21.8809 21.6191 22.2812 19.8901 22.3691 17.9381C22.4717 15.9263 22.4717 9.90179 22.3691 7.89ZM20.0352 20.0967C19.6543 21.1624 18.917 21.9834 17.9551 22.4129C16.5146 23.0491 13.0967 22.9023 11.5049 22.9023C9.91309 22.9023 6.49023 23.0437 5.05469 22.4129C4.09766 21.9888 3.36035 21.1678 2.97461 20.0967C2.40332 18.4927 2.53516 14.6866 2.53516 12.914C2.53516 11.1415 2.4082 7.32996 2.97461 5.7314C3.35547 4.66569 4.09277 3.84467 5.05469 3.41512C6.49512 2.77896 9.91309 2.92577 11.5049 2.92577C13.0967 2.92577 16.5195 2.7844 17.9551 3.41512C18.9121 3.83923 19.6494 4.66026 20.0352 5.7314C20.6064 7.33539 20.4746 11.1415 20.4746 12.914C20.4746 14.6866 20.6064 18.4981 20.0352 20.0967Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div className="hreff">
                            <p>© AltDesain Studio 2021 - All right reserved.</p>
                        </div>

                    </div>
                    <div className="BtnTotop" onclick="hanDleOnClickBtn()">
                        <button style={{ backgroundImage: `url(${buttonToTopBG})` }} ></button>
                    </div>

                </div>
            </>
        )
    }
}
export default SiteFooter_;