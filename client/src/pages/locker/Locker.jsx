import './locker.css';
import { useState } from "react";

const Locker = (props) => {
    const [locker, setLocker] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="locker-component">
            <div className="locker-component-container">
                <div className="locker-component-greet">Hello there!</div>
                <form className="locker-component-form" onSubmit={handleSubmit}>
                    <input onChange={(e) => { setLocker(e.target.value) }} className="locker-input" placeholder="locker"/>
                    <div className="locker-component-btns">
                        <button className="locker-open-btn" onClick={() => {props.handleOpen(locker)}}>Open</button>
                        <button className="locker-create-btn" onClick={() => {props.handleCreate(locker)}}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Locker; 