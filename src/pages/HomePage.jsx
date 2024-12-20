import "./HomePage.css";
import HomeComponenet from "../components/HomeComponents/HomeComponent";
import HomeProjects from "../components/HomeComponents/HomeProjects";
import AboutComponent from "../components/HomeComponents/AboutComponent";
import ContactComponent from "../components/HomeComponents/ContactComponent";

function HomePage(){

    const sendEmail = () => {
        window.open(
            'https://form.jotform.com/233324105714042',
            'blank',
            'scrollbars=yes,toolbar=no,width=700,height=500'
        );
    };

        return(
            <div className="home_page">
                <div id="home"></div>
                
                <div className="background">
                    <div className="elips1"></div>
                    <div className="elips2"></div>
                    <div className="elips3"></div>
                    <div className="elips4"></div>
                </div>
                
                <HomeComponenet sendEmail = {sendEmail} />

                <HomeProjects />

                <AboutComponent />
                
                <ContactComponent sendEmail = {sendEmail} />          
            </div>
        )
}

export default HomePage;
