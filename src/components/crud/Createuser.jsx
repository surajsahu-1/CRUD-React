import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button ,Card,CardHeader,CardFooter,Input ,Typography, CardBody} from '@material-tailwind/react'
export const Createuser = () => {
let [name, setName]= useState("")
let [salary, setSalary]= useState("")
let [company, setCompany]= useState("")
let navigate =useNavigate()


    let nameData=(e)=>{
        setName(e.target.value)
    }
let salaryData=(e)=>{
    setSalary(e.target.value)
}
let companyData=(e)=>{
    setCompany(e.target.value)
}
let Submit=(e)=>{
    e.preventDefault()
    if(name=="" || company=="" || salary=="")
    {
        alert("enter data first");
    }
    else{
        let payload={name, company, salary}
    axios.post("http://localhost:3001/users", payload)
    .then(()=>{
        console.log("Success");
    })
    .catch(()=>{
        console.log("error");
    })
    navigate("/user")
    }
}
  return (
    <div className="flex justify-center items-center h-[90vh] w-[100vw]" >
        <Card className="h-auto w-80 flex flex-col justify-between">
            <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                <Typography variant="h3">
                    Createuser
                </Typography>
            </CardHeader>
            <CardBody>
                <form className=' flex flex-col gap-4 ' >
                    <Input label='Name' size='lg'   type="text" value={name} onChange={nameData} required/> 
                    <Input label='Salary'  size='lg'   type="text" value={salary} onChange={salaryData} required/>
                    <Input label='Company' size='lg'   type="text" value={company} onChange={companyData} required/>
                </form>
            </CardBody>
            <CardFooter>
                <Button fullWidth variant="gradient" onClick={Submit}>Submit</Button>
            </CardFooter>
        </Card>

        
    </div>
  )
}
export default Createuser