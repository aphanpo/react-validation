import React from "react"
import SubmitPage from "./SubmitPage"
import Form from "./Form"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="routes">
        <Route exact path="/" component={Form}/>
        <Route path="/SubmitPage" component={SubmitPage}/>
      </div>
    </Router>
  )
}

export default App