import "./App.css";
import Header from "./components/Header";

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
            <Header />
            <div>
                <h1 id="memories">Não perca suas memórias antigas</h1>
            </div>
        </main>
    );
}

export default App;
