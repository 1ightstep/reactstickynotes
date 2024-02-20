import { nanoid } from 'nanoid';
import {useState} from 'react';
import Notepad from '../../components/notepad/Notepad';
import Note from '../../components/note/Note';
import './home.css';
import addNote from "../../utils/addNote";
import deleteNote from "../../utils/deleteNote";


const Home = (props) => {
    const [notes, setNotes] = useState(props.loadNotesData || []); 
    const handleRipNote = (content) => {
        if (!(content.length > 255)) {
            const date = new Date(); 
            setNotes([...notes, {
                id: nanoid(),
                date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
                content: content,
                removed: false
            }]);
            addNote(props.locker, notes[notes.length-1]).catch(err => {
                console.log(err);
            });
        }
    }
    const handleDeleteNote = (id) => {
        let temp = [...notes];
        deleteNote(props.locker, id).catch((err) => {
            console.log(err);
        });
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) temp[i].removed = true; 
        }
        setNotes(temp);
    }
    return(
        <div>
            <div className="notes-grid">
                {
                    notes.map((element) => {
                        return (!element.removed && <Note id={element.id} 
                            date={element.date} 
                            content={element.content} 
                            handleDelete={handleDeleteNote}
                        />);
                    })
                }
            </div>
            <Notepad username="Alex" handleRipNote={handleRipNote}/>
        </div>
    );
}

export default Home; 

