import React from "react";
import { FaReply, FaRetweet, FaHeart, FaShare, FaThumbsDown} from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import { updateTuitThunk } from "../services/tuits-thunks";

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

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                    
                    <div className="float-start col-2"><FaReply/> {tuit.replies}</div>
                    <div className="float-start col-2"><FaRetweet/> {tuit.retuits}</div>
                    <div className="float-start col-2">
                        <FaHeart
                            className=""
                            onClick={() =>
                                dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))
                            }
                            style={style}
                        />
                        <span className="ms-2">{tuit.likes}</span>
                    </div>
                    <div className="float-start col-2">
                        <FaThumbsDown
                            className=""
                            onClick={() =>
                                dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))
                            }
                           
                        />
                        <span className="ms-2">{tuit.dislikes}</span>
                    </div>
                    <div className="float-end col-2"><FaShare /> </div>
                    
                </div>
                
                
            </div>
        </li>
    );
};
export default TuitItem;