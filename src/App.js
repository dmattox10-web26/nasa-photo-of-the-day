import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import "./App.css"

import Card from './components/Card'
import CardTwo from './components/CardTwo'

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const getISODate = () => {
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    return `${year}-${month}-${day}`
  }
  const incrementDay = () => {
    /*
    if (moment() >= moment(activeDate, moment.ISO_8601).add(1, 'd')) {
      updateDate(moment(activeDate, moment.ISO_8601).add(1, 'd'))
    }
    */
  }
  const decrementDay = () => {
    //updateDate(moment(activeDate, moment.ISO_8601).subtract(1, 'd'))
  }
  const [apodState, updateApod] = useState({
    copyright: "Author / Copyright Holder",
    date: "2012-03-14",
    explanation: "Text about the image",
    media_type: "image",
    title: 'Image Title',
    url: 'image url'
  })
  const [activeDate, updateDate] = useState(getISODate())
  const [displayDate, updateDisplay] = useState({
    day: "1",
    month: "January"
  })
  const prepend = '&date='
  useEffect(() => {
    
    axios.get(url + prepend + activeDate)
      .then(res => updateApod(res.data))
    
  }, [activeDate])
  useEffect(() => {
    const dateSplit = activeDate.toString().split('-')
    const date = new Date(dateSplit[0], dateSplit[1] - 1 , dateSplit[2]) 
    const month = date.toLocaleString('default', { month: 'long' })
    const update = {
      day: dateSplit[2],
      month: month
    }
    updateDisplay(update)
  }, [activeDate])
  return (
    <Router>
      <div className="App">
        <div className="backing"><span className="s1">nasa</span><span className="s2">apod</span></div>
        <Route exact path='/' render={(props) => <Card { ...props } url={ apodState.url } title={ apodState.title } copyright={ apodState.copyright } explanation={ apodState.explanation } media={ apodState.media_type } day={ displayDate.day } month={ displayDate.month } decrementDay={ decrementDay } incrementDay={ incrementDay } />} />
        <Route exact path='/2' render={(props) => <CardTwo {...props} url={ apodState.url } title={ apodState.title } copyright={ apodState.copyright } explanation={ apodState.explanation } media={ apodState.media_type } date={ apodState.date } />} />
      </div>
    </Router>
  );
}

export default App;
