import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
    return (
        <>
            <div class="d-block d-sm-none fa-2x">XS</div>
            <div class="d-none d-sm-block d-md-none fa-2x">S</div>
            <div class="d-none d-md-block d-lg-none fa-2x">M</div>
            <div class="d-none d-lg-block d-xl-none fa-2x">L</div>
            <div class="d-none d-xl-block d-xxl-none fa-2x">XL</div>
            <div class="d-none d-xxl-block fa-2x">XXL</div>
            <div className="row">

                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpg" className="w-100" />
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <TuitSummaryList />

        </>
    );
};
export default ExploreScreen;