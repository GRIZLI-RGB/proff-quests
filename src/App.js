import { Helmet } from "react-helmet-async";
import AboutProject from "./components/_Landing/AboutProject";
import Banner from "./components/_Landing/Banner";
import ForOrganizations from "./components/_Landing/ForOrganizations";
import ForStudents from "./components/_Landing/ForStudents";
import Header from "./components/_Landing/Header";
import ProffSlider from "./components/_Landing/ProffSlider";
import Welcome from "./components/_Landing/Welcome";

function App() {
    return (
        <>
        <Helmet>
            <title>ПРОФQUESTS</title>
        </Helmet>
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
