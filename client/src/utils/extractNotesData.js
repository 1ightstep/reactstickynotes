import axios from 'axios'

const extractNotesData = (locker) => {
    return axios.get("http://127.0.0.1:3001/notes/extract", {
        params: {
            locker: locker
        }
    })
}

export default extractNotesData

