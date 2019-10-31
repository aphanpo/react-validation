import React, {useState} from "react"
import "../styles/base.css"
import validator from "validator"

function Form(props) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(<div className="white">Name</div>)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(<div className="white">Email</div>)
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState(<div className="white">Username</div>)
  const [pword, setPword] = useState("")
  const [pwordError, setPwordError] = useState(<div className="white">Password</div>)
  const [conword, setConword] = useState("")
  const [conwordError, setConwordError] = useState(<div className="white">Confirm Password</div>)
  const [site, setSite] = useState("")
  const [siteError, setSiteError] = useState(<div className="white">Website</div>)

function handleSubmit(e){
  e.preventDefault()
  let err = false

  if (validator.isEmpty(name)){
    setNameError(<div className="red">Name - Cannot be blank</div>)
  }

  if (!validator.isEmail(email)) {
    setEmailError(<div className="red">Email - Must be a valid email</div>)
  }
  
  if (validator.isEmpty(username)) {
      setUsernameError(<div className="red">Username - Cannot be blank</div>)
  } 
  
  if (pword !== '') {
    if (!validator.matches(pword, conword)) {
      err = true
      setPwordError(<div className="red">Password - Cannot be blank</div>)
    } else {
      setPwordError(<div className="white">Password</div>)
    } 
  } else {
      err = true
      setPwordError(<div className="red">Password - Cannot be blank</div>)
  }
  

  if (conword !== '') {
    if (!validator.matches(pword, conword)) {
      err = true
      setConwordError(<div className="red">Confirm Password - Must match the password</div>)
    } else {
      setConwordError(<div className="white">Confirm Password</div>)
    }
  } else {
      err = true
      setConwordError(<div className="red">Confirm Password - Must match the password</div>)
  }
  
  if (!validator.isURL(site)) {
    setSiteError(<div className="red">Website - Must be a valid url</div>) 
  }

  if (!err) {
    console.log("Submitted")
    props.history.push('SubmitPage')
  } else {
    console.log("not submitted")
  }
}

  return (
    <div className="container">
      <p>Profile Form - All fields required</p>
      <form onSubmit={handleSubmit} >
       <span className="error">{nameError}</span>
        <input 
          className={nameError === "" ? "" : "error"}
          onChange={e => setName(e.target.value)}
          placeholder="Michael"
          type="text"
          value={name}
        />
        <span className="error">{emailError}</span>
        <input 
          className={emailError === "" ? "" : "error"}
          onChange={e => setEmail(e.target.value)}
          placeholder="email@test.com"
          type="email"
          value={email}
        />
        <span className="error">{usernameError}</span>
        <input
          className={usernameError === "" ? "" : "error"}
          onChange={e => setUsername(e.target.value)}
          placeholder="myusername"
          type="text"
          value={username}
        />
        <span className="error">{pwordError}</span>
        <input
          className={pwordError === "" ? "" : "error"}
          onChange={e => setPword(e.target.value)}
          placeholder="Password"
          type="password"
          value={pword}
        />
        <span className="error">{conwordError}</span>
        <input 
          className={conwordError === "" ? "" : "error"}
          onChange={e => setConword(e.target.value)}
          placeholder="Retype Password"
          type="password"
          value={conword}
        />
        <span className="error">{siteError}</span>
        <input
          className={siteError === "" ? "" : "error"} 
          onChange={e => setSite(e.target.value)}
          placeholder="https://mywebsite.com"
          type="text"
          value={site}
        />

        <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Form
