import vhs_img from ".././assets/transparentVHS.png";
// import { useState } from "react";
import {
    motion,
    // useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

function Header() {
    // const [rotation, setRotation] = useState<number>(0);
    const { scrollY } = useScroll();
    console.log(scrollY);

    // //This is no longer needed as this was used to figure out the range values of the scrollY.
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log(latest);
    // });

    const rotation = useTransform(scrollY, [0, 88], [0, 45]);

    return (
        <header className="header">
            <div>
                <h1 className="header_title">ALÊ BONA HOME STUDIO</h1>
                <div className="header_subtitle">
                    Conversão de VHS e cassete para digital
                </div>
            </div>
            <motion.img
                src={vhs_img}
                alt="Image of VHS and cassette"
                className="header_img"
                style={{ rotate: rotation }}
            />
        </header>
    );
}

export default Header;
