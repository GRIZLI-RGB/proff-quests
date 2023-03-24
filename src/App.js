import AboutProject from "./components/AboutProject";
import Banner from "./components/Banner";
import ForOrganizations from "./components/ForOrganizations";
import ForStudents from "./components/ForStudents";
import Header from "./components/Header";
import ProffSlider from "./components/ProffSlider";
import Welcome from "./components/Welcome";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Welcome />
                <AboutProject />
                <ForStudents />
            </div>
            <ProffSlider />
            <div className="container">
                <ForOrganizations />
            </div>
            <Banner />
        </>
    );
}

export default App;
