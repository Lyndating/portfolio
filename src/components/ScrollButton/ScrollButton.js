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

    const styles = {
        myButtonClass: {
            '&:hover':{
            animation: 'none',
            border: '2px solid #fff',
            },
            "@keyframes movebtn": {
        "0%": {
            transform: "translateY(0px)",
        },
        "25%": {
            transform: "translateY(20px)",
        },
        "50%":{
            transform: "translateY(0px)",
        },
        "75%":{
            transform: "translateY(-20px)",
        },
        "100%":{
            transform: "translateY(0px)",
        },
    }
        }
    };

  return (
    <TopButton>
        {" "}
        {visable && (
            <Link href="/">
            <div id="scroll_button">
            <BsArrowUpCircle className={styles.myButtonClass}
                style={{position:"fixed",bottom:"40px",right:"25px",zIndex:"21", cursor:"pointer",
                ainimation:"movebtn 3s ease-in-out infinite", transition:"all 0.5s ease-in-out", 
                }}
                size="4rem"
                onClick={goToTop}
            />
            </div>
            </Link>
        )}{" "}
    </TopButton>
  )
}

export default ScrollButton;