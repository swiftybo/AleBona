import VHSVideo from "../assets/playVid.mp4";
import classes from "./MemoryGallery.module.css";

export default function MemoryGallery() {
    return (
        <section className={classes.memories}>
            <video
                src={VHSVideo}
                className={classes.memories_video}
                autoPlay
                loop
                muted
            />
            <h1 className={classes.memories_title}>
                Não perca suas memórias antigas
            </h1>
        </section>
    );
}
