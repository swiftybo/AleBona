import vhs_img from ".././assets/transparentVHS.png";
import classes from "./Header.module.css";
import {
    motion,
    // useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

function Header() {
    const { scrollY } = useScroll();
    console.log(scrollY);

    // //This is no longer needed as this was used to figure out the range values of the scrollY.
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log(latest);
    // });

    const rotation = useTransform(scrollY, [0, 88], [0, 45]);

    return (
        <header className={classes.header}>
            <div>
                <h1 className={classes.header_title}>ALÊ BONA HOME STUDIO</h1>
                <div className={classes.header_subtitle}>
                    Conversão de VHS e cassete para digital
                </div>
            </div>
            {/* BUG need to fix image covering title text on rotation */}
            <motion.img
                src={vhs_img}
                alt="Image of VHS and cassette"
                className={classes.header_img}
                style={{ rotate: rotation }}
            />
        </header>
    );
}

export default Header;
