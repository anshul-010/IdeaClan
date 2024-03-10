import { Box, Button, Center, Heading, Text, useStatStyles } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const AdminAddLacture = () => {
  const [users, setUsers] = useState([])
  const [state,setState] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = useSelector((store)=>store.AuthReducer.token)
  function getUsers(){
    setLoading(true)
    axios.get(`http://localhost:8080/user/users`, {
    headers: {
      Authorization: `${token}`
    }
  })
    .then((res)=>{
      setLoading(false)
      setUsers(res.data.users)
    })
  }

  function handleDelete(id){
    setLoading(true)
    axios.delete(`http://localhost:8080/user/delete-user/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  })
  .then((res)=>{
    console.log(res.data)
    setLoading(false)
    setState(!state)
  })
  }

  useEffect(()=>{
    getUsers()
  },[state])

  return (
    <div>
      <Center><Heading color="gray.700" m="10px">Manage Users</Heading></Center>
      <Box boxShadow="base" display="flex"  w="80vw" p="5px" m="5px auto">
      <Text fontSize="lg" fontWeight="bold" color="gray.700"  w="220px">Name</Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.700"  w="220px">Email</Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.700"  w="220px">Mobile</Text>
            <Button color='red' border="none"  w="220px" variant='link'>
              Remove User
            </Button>
      </Box>
      {loading && <Center><Heading color="gray.700" m="10px">Loading...</Heading></Center>}
      {!loading && <Box>
        {users.map((ele)=>{
          return<Box key={ele._id} boxShadow="base" display="flex" w="80vw" p="5px" m="5px auto">
            <Text  w="220px">{ele.name}</Text>
            <Text  w="220px">{ele.email}</Text>
            <Text  w="220px">{ele.mobile}</Text>
            <Button color='red' border="none"  w="220px" variant='link' onClick={()=>handleDelete(ele._id)}>
              Delete
            </Button>
          </Box>
        })}
      </Box>}
    </div>
  )
}
