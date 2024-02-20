import './notepad.css';
import {useRef} from 'react';
import Draggable from 'react-draggable';


const Notepad = (props) => {
    const nodeRef = useRef();
    const contentRef = useRef();
    const handleChange = (e) => {
        if (e.target.value.length > 255) {
            e.target.style.color = 'red';
        } else {
            e.target.style.color = "black";
        }
    }
    return( 
    <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef}>
            <div className="notepad" onDoubleClick={() => {props.handleRipNote(contentRef.current.value)}}>
                <div className="notepad-bind"></div>
                <div className="note-taking-container" onDoubleClick={props.handleRipNote}>
                    <textarea ref={contentRef} className="note-taking" onChange={handleChange}></textarea>
                </div>
            </div>
        </div>
    </Draggable>)
}

export default Notepad; 

