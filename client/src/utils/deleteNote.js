import axios from 'axios'

const deleteNote = (locker, id) => {
    if (locker && id) {
        return axios.delete("http://127.0.0.1:3001/notes/delete", {
            params: {
                locker: locker, 
                id: id
            }
        })
    }
}

export default deleteNote