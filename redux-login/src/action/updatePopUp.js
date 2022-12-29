import React, { useState } from "react";
import './updatePopUp.css'
import { useDispatch } from "react";
import UserService from "./userservice";

function UpdatePopup(props) {
    console.log('props', props)

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let { first_name, value } = e.target;
        setState({ ...state, [first_name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.updateUser(dispatch);
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={props.popupData.first_name} onChange={handleInputChange}></input><br />
                        <input type="text" value={props.popupData.last_name} onChange={handleInputChange}></input><br />
                        <input type="text" value={props.popupData.email} onChange={handleInputChange}></input><br />
                        <button type="Submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default UpdatePopup