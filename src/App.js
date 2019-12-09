import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import "./App.css"

import Card from './components/Card'
import CardTwo from './components/CardTwo'

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const activeDateString = () => {
    let dateString
    const prepend = '&date='
    return `${prepend}${dateString}`
  }
  const [apodState, updateApod] = useState({
    copyright: "Author / Copyright Holder",
    date: "2012-03-14",
    explanation: "Text about the image",
    media_type: "image",
    title: 'Image Title',
    url: 'image url'
  })
  const [activeDate, updateDate] = useState({

  })
  useEffect(() => {
    /*
    axios.get(url + activeDateString())
      .then(res => updateApod(res.data))
    */
  }, [])
  return (
    <Router>
      <div className="App">
        <div className="backing"><span class="s1">nasa</span><span class="s2">apod</span></div>
        <Route exact path='/' render={(props) => <Card { ...props } url={ apodState.url } title={ apodState.title } copyright={ apodState.copyright } explanation={ apodState.explanation } media={ apodState.media_type } date={ apodState.date } />} />
        <Route exact path='/2' render={(props) => <CardTwo {...props} url={ apodState.url } title={ apodState.title } copyright={ apodState.copyright } explanation={ apodState.explanation } media={ apodState.media_type } date={ apodState.date } />} />
      </div>
    </Router>
  );
}

export default App;
