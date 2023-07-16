import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, Typography ,Button} from '@material-tailwind/react'

const User = () => {
  let [content, setContent]= useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/users")
    .then((response)=>{
        setContent(response.data);
    })
    .catch(()=>{
        console.log("error");
    })
  },[])
  return (
    <div  className='w-auto pl-16 pr-16 gap-20 h-auto flex justify-center flex-wrap  pt-16'>
      {content.map((x)=>{
                return(
                    <>
                      <Card className='w-60'>
                        <CardHeader>
                          <div className='bg-blue-700 text-white sticky flex flex-col items-center '>
                            <Typography className="text-center font-bold p-8" varient="">
                              {x.name }
                            </Typography>
                          </div>
                        </CardHeader>
                        <CardBody className='flex flex-col justify-between h-40'>
                          <div>
                            <Typography className="text-center">
                              User id: {x.id}
                            </Typography>
                          </div>
                          <div className='flex justify-around'>
                            <Typography className="text-yellow-900">
                            <span className='font-bold text-brown-900'>Company: <br/></span>
                              {x.company}
                            </Typography>
                            <Typography className="text-green-600">
                              <span className='font-bold text-brown-900'>Salary: <br/></span>
                              {x.salary}
                            </Typography>
                          </div>  
                        </CardBody>
                        <CardFooter>
                          <div className='flex justify-around'>
                            <Button className='p-0' variant="outlined">
                              <Link className='py-10 px-2' to={`/edit/${x.id}`} >Edit User</Link>
                            </Button>
                            <Button className='' color='red'>
                            <Link className='py-10' to={`/delete/${x.id}`} >delete</Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </>
                )
            })
        } 
    </div>
  )
}

export default User