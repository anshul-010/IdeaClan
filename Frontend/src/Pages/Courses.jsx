import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Components/Card'

export const Courses = () => {
  const courses = useSelector((store)=>store.AuthReducer.courses)

  return (
    <div style={{ height:"100vh",backgroundColor:"#f0f0f0ba"}}> 
    <Box p="20px">
        <Heading size="lg">Courses</Heading>
      </Box>
      <Box display="flex" w="90vw" m="auto" flexWrap="wrap" >

      {courses?.map((ele)=><Card data={ele} key={ele._id}/>)}
      </Box>
  </div>
  )
}
