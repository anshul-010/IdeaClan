import { Box, Center, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AdminDashboard = () => {

  const [totalCourses, setTotalCourses] = useState([])
  const [loading, setLoading] = useState(false)

  function getAllCourses(){
    setLoading(true)
    axios.get(`http://localhost:8080/courses/course`)
    .then((res)=>{
      setLoading(false)
      setTotalCourses(res.data.courses)
    })
  }

  useEffect(()=>{
    getAllCourses()
  },[])
  return (
    <div>
      <Center><Heading color="gray.700" m="10px">Present Courses</Heading></Center>
      {loading && <Center><Heading color="gray.700" m="10px">Loading...</Heading></Center>}
      {!loading && <Box boxShadow="base" p="20px" borderRadius="10px" display="grid" gridTemplateColumns="repeat(3,1fr)" gap="15px" width="800px" m="20px auto">
        {totalCourses.map((ele)=>{
          return<Box  p="20px" borderRadius="10px"  boxShadow="base" key={ele._id}>
            <Text textAlign="center" fontSize="md" fontWeight="bold" color="gray.600">{ele.courseName}</Text>
          </Box>
        })}
      </Box>}
    </div>
  )
}
