import './note.css';
import Draggable from 'react-draggable';
import { useRef } from 'react';

const Note = (props) => {
    const nodeRef = useRef();
    return(
        <Draggable nodeRef={nodeRef} onDrag={(e) =>{nodeRef.current.style.position = 'absolute'}}>
            <div className="note-component" ref={nodeRef}>
                <div className="note-component-top-section">
                    <div className="note-component-date">{props.date}</div>
                    <div className="note-component-delete-btn" onClick={() => props.handleDelete(props.id)}/>
                </div>
                <div className="note-component-content-container">
                    <div className="note-component-content">{props.content}</div>
                </div>
            </div>
        </Draggable>
    );
}

export default Note;