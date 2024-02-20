import axios from 'axios'

const createLocker = (locker) => {
    if (locker) {
        return axios.post('http://127.0.0.1:3001/locker/create', {
            params: {
                locker: locker,
                length: locker.length
            }
        })
    }
}

export default createLocker