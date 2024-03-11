import {
  Box,
  Select,
  Input,
  Text,
  Button,
  Center,
  Heading,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
let initialData = {
  courses: "",
  instructor: "",
  timing: "",
};

export const AdminScheduleLacture = () => {
  const [data, setData] = useState(initialData);
  const toast = useToast()
  function handleChange(e) {
    const { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleAddLacture() {
    axios.post(`https://ideaclan-5twr.onrender.com/lacture/schedule`,data)
    .then((res)=>{
      console.log(res.data)
      toast({
        title: 'Lacture Scheduled',
        status: 'success',
        position:"top",
        duration: 1500,
        isClosable: true,
      })
    })
    setData(initialData)
  }

  return (
    <div>
      <Center>
        <Heading color="gray.700" m="10px">
          Schedule Lacture
        </Heading>
      </Center>
      <Box
        color="gray.700"
        boxShadow="base"
        borderRadius="10px"
        w="400px"
        m="20px auto"
        p="20px"
      >
        <Text fontWeight="bold">Choose Instructor</Text>

        <Select
          placeholder="Select Instructor"
          color="gray.700"
          name="instructor"
          value={data.instructor}
          onChange={handleChange}
        >
          <option value="Nupul Dev">Nupul Dev</option>
          <option value="Aditiya">Aditiya</option>
          <option value="Pulkit">Pulkit</option>
          <option value="Venu Gopal">Venu Gopal</option>
          <option value="Vivek Agraval">Vivek Agraval</option>
        </Select>
        <br />
        <Text fontWeight="bold">Choose Courses</Text>

        <Select
          placeholder="Select Courses"
          name="courses"
          value={data.courses}
          onChange={handleChange}

        >
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Fullstack Development">Fullstack Development</option>
          <option value="DSA">DSA</option>
          <option value="Ethical Hacking">Ethical Hacking</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Aptitude">Aptitude</option>
        </Select>
        <br />
        <Text fontWeight="bold">Timing</Text>
          
        <Input type="time" name="timing" value={data.timing} onChange={handleChange} />

        <Button
          colorScheme="twitter"
          variant="outline"
          m=" 20px auto"
          display={"block"}
          onClick={handleAddLacture}
        >
          Schedule
        </Button>
      </Box>
    </div>
  );
};
