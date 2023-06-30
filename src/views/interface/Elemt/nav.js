
import Hinh from '../../../assest/img/Main Logo.svg';
import bg from '../../../assest/img/Slide Background.png';

import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function Example() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal mr-4"
            >
                <a className=' text-[#414880] font-semibold hover:text-[#FF64AE]' id="fchi" href="#" >Home&nbsp;+</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-[#8B8B8B] mr-[10px] hover:text-[#FF64AE]"
            >
                <a href="#About" >About</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-[#8B8B8B] mr-[10px] hover:text-[#FF64AE]"
            >
                <a href="#Service">Service</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-[#8B8B8B] mr-[10px] hover:text-[#FF64AE]"
            >
                <a href="#Gallery">Gallery</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-[#8B8B8B] mr-[10px] hover:text-[#FF64AE]"
            >
                <a href="#Blog">Blog</a>
            </Typography>
        </ul>
    );

    return (
        <>
            <img className='  absolute -z-30 top-0' src={bg} />

            <Navbar className="sticky top z-10 h-max max-w-full bg-inherit rounded-none py-2 px-4 lg:px-8 lg:py-4 mt-[25px]">


                <div className=" flex items-center justify-between ">

                    <img className=' xl:ml-[115px]' src={Hinh} />
                    <div className="flex items-center gap-[30px]">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block text-[#FFFFFF] bg-[#FF64AE] rounded-[50px] w-[158px] h-[52px] hover:bg-[#f8f3f3] hover:text-[#FF64AE] mr-[85px]"
                        >
                            <span>Contact</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-9 w-9 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-[1.5rem] w-[1.5rem] "
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[1.5rem] w-[1.5rem] "
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className=" text-[#FF64AE]  w-[158px] h-[25px] hover:text-[#414880] p-0"
                    >
                        <span className=' float-left'>Contact</span>
                    </Button>
                </MobileNav>
            </Navbar>
        </>
    );
}