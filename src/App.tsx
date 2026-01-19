import "./App.css";
import Header from "./components/Header";
import HeaderVideo from "./components/HeaderVideo";
import MemoryGallery from "./components/MemoryGallery";

function App() {
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
            <HeaderVideo />
            {/* <MemoryGallery /> */}
        </main>
    );
}

export default App;
