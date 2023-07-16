import React, { useEffect, useState } from 'react'
import { Card,CardBody,CardFooter,CardHeader,Typography,Input,Button } from '@material-tailwind/react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Edituser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] =useState("")
    let {editpath} = useParams();
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
useEffect(()=> {
        axios.get(`http://localhost:3001/users/${editpath}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
            console.log("Success");
        })
        .catch(()=>{
            console.log("Don't get data");
        })
    },[])
    let update=()=>{
        let data={name,company,salary}
        axios.put(`http://localhost:3001/users/${editpath}`,data)
        .then(()=>{
            navigate('/user')
            alert("Successfully updated")
        })
        .catch(()=>{
            console.log("some error happened")
        })
    }
  return (
    <div className="flex justify-center items-center h-[90vh] w-[100vw]" >
        <Card className="h-auto w-72 flex flex-col justify-between">
            <CardHeader variant="gradient" color="pink" className="mb-4 grid h-28 place-items-center">
                <Typography variant="h3">
                    Edit
                </Typography>
            </CardHeader>
            <CardBody>
                <form className=' flex flex-col gap-4 ' >
                    <Input label='Name' size='lg' color='pink'  type="text" value={name} onChange={nameData} /> 
                    <Input label='Salary'  size='lg' color='pink'  type="text" value={salary} onChange={salaryData} />
                    <Input label='Company' size='lg' color='pink'  type="text"  value={company} onChange={companyData} />
                </form>
            </CardBody>
            <CardFooter>
                <Button onClick={update} fullWidth color='pink' variant="gradient" >Update</Button>
            </CardFooter>
        </Card>
    </div>
  )
}
export default Edituser