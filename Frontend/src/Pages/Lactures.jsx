import React from 'react'
import { LactureRecords } from './LactureRecords'
import { useSelector } from 'react-redux'
import { Box, Heading } from '@chakra-ui/react'

export const Lactures = () => {

  const courses = useSelector((store)=>store.AuthReducer.courses)

  
  return (
    <div style={{ height:"100vh",backgroundColor:"#f0f0f0ba"}}> 
      <Box p="20px">
          <Heading size="lg">Previous Recordings</Heading>
        </Box>
      {courses?.map((ele)=><LactureRecords data={ele} key={ele._id}/>)}
    </div>
  )
}
