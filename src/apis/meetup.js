import axios from 'axios'

const meetupApi = axios.create({
    baseURL: 'https://api.meetup.com/reactjs-dallas/events/response_type=code',
    params: {
    },
})

// const getAccess = axios.create({
//     baseURL: 'https://secure.meetup.com/oauth2/access'
// })
export default meetupApi