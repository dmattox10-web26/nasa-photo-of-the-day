import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import "./App.css"

import Card from './components/Card'
import CardTwo from './components/CardTwo'

function App() {
  const [apodState, updateApod] = useState({
    copyright: "Author / Copyright Holder",
    date: "2012-03-14",
    explanation: "Text about the image",
    media_type: "image",
    title: 'Image Title',
    url: 'image url'
  })
  
  return (
    <Router>
      <div className="App">
        <div class="backing"><span class="s1">nasa</span><span class="s2">apod</span></div>
        <Route exact path='/' render={(props) => <Card {...props} />} />
        <Route exact path='/2' render={(props) => <CardTwo {...props} />} />
      </div>
    </Router>
  );
}

export default App;
