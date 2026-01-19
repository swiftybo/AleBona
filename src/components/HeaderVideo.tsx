import vhs_img from ".././assets/transparentVHS.png";
import VHSVideo from "../assets/headerVid.mp4";
import classes from "./HeaderVideo.module.css";
import {
    motion,
    // useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

function HeaderVideo() {
    const { scrollY } = useScroll();
    console.log(scrollY);

    const rotation = useTransform(scrollY, [0, 88], [0, 45]);

    return (
        <header className={classes.header}>
            <video
                src={VHSVideo}
                className={classes.header_video}
                autoPlay
                loop
                muted
            />
            {/* <section className={classes.header_content}>
                <div>
                    <h1 className={classes.header_title}>
                        ALÊ BONA HOME STUDIO
                    </h1>
                    <p className={classes.header_subtitle}>
                        Conversão de VHS e cassete para digital
                    </p>
                </div> */}
            {/* BUG need to fix image covering title text on rotation */}
            {/* <motion.img
                    src={vhs_img}
                    alt="Image of VHS and cassette"
                    className={classes.header_img}
                    style={{ rotate: rotation }}
                />
            </section> */}
        </header>
    );
}

export default HeaderVideo;
