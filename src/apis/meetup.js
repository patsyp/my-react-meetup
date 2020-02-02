import axios from 'axios'

const meetupApi = axios.create({
    baseURL: 'https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=pulic&page=20',
})
export default meetupApi