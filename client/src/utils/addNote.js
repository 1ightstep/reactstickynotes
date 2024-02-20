import axios from 'axios'

const addNote = (locker, noteData) => {
    return axios.post("http://127.0.0.1:3001/notes/add", {
        params: {
            locker: locker, 
            noteData: noteData
        }
    })
}

export default addNote