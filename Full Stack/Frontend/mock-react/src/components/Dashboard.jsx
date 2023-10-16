import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios';

const Dashboard = () => {
  const [formVisible,setFormVisible] = useState(false);
const [firstName,setFirstName] = useState('');
const [lastName,setLastname] = useState('');
const [email,seEmail]= useState('');
const [department , setDepartment ] = useState('');
const [salary,setSalary] = useState('');
const [employees,setEmployees] = useState([]);

  const toggle = () => {
    setFormVisible(!formVisible);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data =  {
      firstName: firstName,
      lastName: lastName,
      email:email,
      department: department,
      salary:salary
    }


    try {
      const apiFetch = await axios.post(`http://localhost:8000/employees/create`,data);
      console.log(apiFetch)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      const apiData = await axios.get("http://localhost:8000/employees");
    setEmployees(apiData.data);
    console.log(apiData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const deleteApi = async(_id) => {
try {
  const api = await axios.delete(`http://localhost:8000/employees/${_id}`)
  console.log(api)
} catch (error) {
  console.log(error)
}
  }

  const update = async(_id) => {
    try {
      const api = await axios.patch(`http://localhost:8000/employees/${_id}`);

    } catch (error) {
      
    }
  }


  return (
    <div>
      <button onClick={toggle}>{formVisible ? "Hide From": "Add Employees"}</button>
      {formVisible && (
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          <br/>
          <br/>
          <input type='text' placeholder='Last Name'value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
          <br/>
          <br/>
          <input type='email' placeholder='email'value={email} onChange={(e)=>seEmail(e.target.value)}/>
          <br/>
          <br/>
         <select value={department} onChange={(e)=>setDepartment(e.target.value)}>
          <option value="">Choose the Department</option>
          <option value="tech">Tech</option>
          <option value="marketing">Marketing</option>
          <option value="operations">Operations</option>
         </select>
         <br/>
         <br/>
          <input type='text' placeholder='salary' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      <button type='submit'>Add</button>
        </form>  
      )}

<div>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{employees.map((e,ind)=>(
  <tr key={ind}>
<td>{e.firstName}</td>
<td>{e.lastName}</td>
<td>{e.email}</td>
<td>{e.department}</td>
<td>{e.salary}</td>
<button onClick={()=>update(e._id)}>Edit</button>
<button onClick={()=>deleteApi(e._id)}>Delete</button>
  </tr>
))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Dashboard
