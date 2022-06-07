import React, {useState, useEffect} from 'react';
import {BsArrowUpCircle} from 'react-icons/bs';
import { TopButton} from './ScrollButtonStyles';
import Link from 'next/link';


const ScrollButton = () => {
    const [visable, setVisable] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 200) {
                setVisable(true);
            }else {
                setVisable(false);
            }
        })
    },[]);

    const goToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }

  return (
    <TopButton>
        {" "}
        {visable && (
            <Link href="/">
            <BsArrowUpCircle
                style={{position:"fixed",bottom:"40px",right:"25px",zIndex:"21", color:"white" , cursor:"pointer",
                ainimation:"movebtn 3s ease-in-out infinite", transition:"all 0.5s ease-in-out", 
                }}
                size="4rem"
                onClick={goToTop}
            />
            </Link>
        )}{" "}
    </TopButton>
  )
}

export default ScrollButton;