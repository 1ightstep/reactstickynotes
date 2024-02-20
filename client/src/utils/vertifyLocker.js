import axios from 'axios'

const vertifyLocker = (locker) => {
    return axios.get('http://127.0.0.1:3001/locker/vertify', {
        params: {
            locker: locker,
            length: locker.length
        }
    })
}   

export default vertifyLocker