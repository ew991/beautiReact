import React from "react";
import Nav_ from "./Elemt/nav";
import MainSlider_ from "./Elemt/mainSlider";
import CoreService_ from "./Elemt/CoreService";
import AboutUs_ from "./Elemt/AboutUs";
import ProfsTeam_ from "./Elemt/ProfsTeam";
import ConTact_ from "./Elemt/ConTact";
import Footer from "./Elemt/Footer";
import './home1.css';
class Home_1 extends React.Component {
    render() {
        return (
            <>
                <Nav_ />
                <MainSlider_ />
                <CoreService_ />
                <AboutUs_ />
                <ProfsTeam_ />
                <ConTact_ />
                <Footer />
            </>)
    }
}
export default Home_1;