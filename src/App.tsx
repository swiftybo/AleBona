import "./App.css";
import Header from "./components/Header";
// import { useEffect, useRef } from "react";

function App() {
    // const containerRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // function handleScroll(e: React.UIEvent) {
    //     if (rotation < 40) {
    //         e.preventDefault();
    //         console.log("scrolling!");
    //         setRotation((prevValue) => prevValue + 2);
    //     } else {
    //         console.log("scrolling");
    //         return;
    //     }
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const [entry] = entries;
    //         console.log(entry);
    //         setIsVisible(entry.isIntersecting);
    //     }, options);

    //     if (containerRef.current) observer.observe(containerRef.current);

    //     return () => {
    //         if (containerRef.current) observer.unobserve(containerRef.current);
    //     };
    // }, []);
    return (
        <main className="page">
            <section className="content">
                <Header />
                <div>
                    <h1 id="memories">Não perca suas memórias antigas</h1>
                </div>
            </section>
        </main>
    );
}

export default App;
