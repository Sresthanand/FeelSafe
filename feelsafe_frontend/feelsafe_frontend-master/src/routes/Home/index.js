import React from "react";
import Navbar from "../../components/shared/Navbar";
import MAP_DARK from "../../assets/images/action_image.svg";
import SOS from "../../assets/images/sos.svg";
import {useHistory} from "react-router-dom";
import "./styles.css";

function Home() {
    const history = useHistory();
    return (
        <div className="mainHome">
            <Navbar />
            <div className="mainActions w-full h-full absolute">
                <div className="row">
                    <div className="actionDiv shadow-lg border-2 border-solid border-black mx-auto rounded-lg float-left w-2/5">
                        <div className="actionImageDiv float-left w-full">
                            <img src={MAP_DARK} alt="SOSImage" />
                        </div>
                        <div className="headingDiv float-left w-full">
                            <h1>Send SOS</h1>
                        </div>
                    </div>
                    <div className="actionDiv shadow-lg border-2 border-solid border-black mx-auto rounded-lg w-2/5" onClick={()=>{history.push('/add-complaint')}}>
                        <div className="actionImageDiv float-left w-full">
                            <img src={MAP_DARK} alt="SOSImage" />
                        </div>
                        <div className="headingDiv float-left w-full">
                            <h1>Register Complaint</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="actionDiv shadow-lg border-2 border-solid border-black mx-auto rounded-lg float-left w-2/5"
                        onClick={() => {
                            history.push("/map");
                        }}
                    >
                        <div className="actionImageDIv float-left w-full">
                            <img src={MAP_DARK} alt="SOSImage" />
                        </div>
                        <div className="headingDiv float-left w-full">
                            <h1>View Danger Map</h1>
                        </div>
                    </div>
                    <div className="actionDiv shadow-lg border-2 border-solid border-black mx-auto rounded-lg w-2/5">
                        <div className="actionImageDiv w-full">
                            <img src={MAP_DARK} alt="SOSImage" />
                        </div>
                        <div className="headingDiv w-full">
                            <h1>Find Buddy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
