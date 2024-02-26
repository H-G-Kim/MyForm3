import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import Input from './components/Input'


//Select and input separately
//Input and Label on same level

function App() {
  const [fname, setFname] = useState('First name')
  const [lname, setLname] = useState('Last name')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('Male')

  useEffect(()=>{
      // load booking data
      console.log("gender changed")
      //e.g days->call backend
    }, [gender]);
 
  const handleFnameChange = (e) => {
    setFname(e.target.value)
  }

  const handleLnameChange = (e) => {
    setLname(e.target.value)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleInputChange = (e) => {
    e.preventDefault()
    console.log(
      'First name: ' +
        fname +
        ', Last  name: ' +
        lname +
        ', Gender: ' +
        gender +
        ', Age: ' +
        age,
    )
  }

  return (
    <div className="App">
      <form onSubmit={handleInputChange}>

          <Input  text="First Name"  type="text" value={fname} onChange={handleFnameChange} />
      
       
          <Input text="Last Name" type="text" value={lname} onChange={handleLnameChange} />
       
 
          <Input text="Age" type="number" value={age} onChange={handleAgeChange} />
     
        <label text="Gender">
          <select onChange={handleGenderChange} value={gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <Input type="submit" value="Submit" />
        <Input type="reset" value="reset" />
      </form>
    </div>
  )
}

export default App

/*
 <label>
          First Name:
          <input
            type="text"
            value={fname}
            name="firstname"
            onChange={handleFnameChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            name="lastname"
            onChange={handleLnameChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            name="age"
            onChange={handleAgeChange}
          />
        </label>
        <label>
          Gender:
          <select onChange={handleGenderChange} value={gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>


*/
