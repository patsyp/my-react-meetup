import React, { Component } from 'react'
import meetup from '../apis/meetup'
class App extends Component {
        state = {
        results: [],
    }

    componentDidMount() {
        this.getReactMeetupEvents()
    }
    getReactMeetupEvents = async (term) => {
       const response =  await meetup.get('', { params: {  } })
       this.setState({ 
           results: response.data,
        })
    }
    render() {
        return (
            <div>Hello</div>
        )
    }
}

export default App