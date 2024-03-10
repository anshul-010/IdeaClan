import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

export const AdminAddCourses = () => {
  const [courseName, setCourseName] = useState("")
  const [instructor, setInstructorName] = useState("")
  const [loading, setLoading] = useState(false)

  function handleAddCourse() {
    setLoading(true)

    axios.post(`http://localhost:8080/courses/add-courses`,{courseName,instructor})
    .then((res)=>{
    setLoading(false)

    }) 
    setCourseName("")
    setInstructorName("")
  }

  return (
    <div>
      <Center>
        <Heading color="gray.700" m="10px">
          Add New Courses
        </Heading>
      </Center>
      {loading && <Center><Heading color="gray.700" m="10px">Loading...</Heading></Center>}
      <Box boxShadow="base" borderRadius="10px" p="10px" w="400px" h="300px" m="auto">
        <FormControl>
          <FormLabel>Courses Name</FormLabel>
          <Input type="text" placeholder="Courses Name" value={courseName} onChange={(e)=>setCourseName(e.target.value)} />
          <FormLabel>Instructor Name</FormLabel>
          <Input type="text" placeholder="Instructor Name" value={instructor} onChange={(e)=>setInstructorName(e.target.value)} />
          <Button
            colorScheme="teal"
            variant="outline"
            border="none"
            m="20px auto"
            display="block"
            onClick={handleAddCourse}
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};
