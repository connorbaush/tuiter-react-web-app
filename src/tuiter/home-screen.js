import React from "react";
import TuitsList from "./tuits/tuitsList";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import WhatsHappening from "./whats-happening";
//import "./index.css";
function HomeScreen() {
    return (
        <>


            <div className="row">

            </div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList />

        </>
    );
};
export default HomeScreen;