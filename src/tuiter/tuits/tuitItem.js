import React from "react";
import { FaReply, FaRetweet, FaHeart, FaShare } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
let style = { color: "black" };
const buttonStyle = {
    background: "transparent",
    border: "none",
    outline: "none"
};




const TuitItem = (
    {
        tuit = {
            //"topic": "Space",
            //"userName": "SpaceX",
            //"time": "2h",
            //"title": `Tesla CyberTruck lands on Mars and
            //   picks up the Curiosity rover on its 6' bed`,
            //"image": "tesla.png"
        }
    }
) => {
    if (tuit.liked) {
        style = { color: "red" }
    }
    else {
        style = {color: "black"}
    }
    function clicked() {
        style = {color: "blue"}
    }
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (

        <li className="list-group-item">
            
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10">
                    <button className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)} style={buttonStyle}> <BiX/></button>
                    <div>{tuit.userName} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    
                    <div className="float-start col-3"><FaReply/> {tuit.replies}</div>
                    <div className="float-start col-3"><FaRetweet/> {tuit.retuits}</div>
                    <div className="float-start col-3">
                        <button onClick={clicked} style={buttonStyle}>
                            <FaHeart style={style} />
                        </button>
                        {tuit.likes}
                    </div>
                    <div className="float-end col-3"><FaShare /> </div>
                    
                </div>
                
                
            </div>
        </li>
    );
};
export default TuitItem;