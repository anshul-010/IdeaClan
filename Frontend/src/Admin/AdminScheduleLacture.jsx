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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
let initialData = {
  courses: "",
  instructor: "",
  timing: "",
};

export const AdminScheduleLacture = () => {
  const [data, setData] = useState(initialData);
  const [AllLacture, setAllLacture] = useState([])
  const [state, setState] = useState(false)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const apiUrl = import.meta.env.VITE_API_URL;
  function handleChange(e) {
    const { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleAddLacture() {
    axios.post(`${apiUrl}/lacture/schedule`,data)
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

  function getAllLactures() {
    axios.get(`${apiUrl}/lacture/all-lacture`)
    .then((res)=>{
      console.log(res.data.lactures)
    })
  }

  function ViewAllLacture(){
    onOpen()
    setState(!state)
  }

  useEffect(()=>{
    getAllLactures()
  },[state])

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
      <Button onClick={ViewAllLacture} position="absolute" top="100px" left="100px">View Lactures</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW="700px">
          <ModalHeader>Today's Lactures</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            
            {AllLacture?.map((ele)=>{
              return <Box boxShadow="base" borderRadius="10px" m='5px' display="flex" justifyContent="space-around" p="10px"> 
                <Box  w="150px">
                  <Text>{"Course:"}</Text>
                  <Text>{ele.courses}</Text>
                </Box>
                <Box  w="150px" alignSelf="center">
                  <Text>{"Instructor"}</Text>
                  <Text>{ele.instructor}</Text>
                </Box>
                <Box  w="150px" alignSelf="center">
                  <Text>{"Timing"}</Text>
                  <Text>{ele.timing}</Text>
                </Box>
                <Button alignSelf="center" colorScheme="twitter" variant="ghost">Edit</Button>
              </Box>
            })}
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </div>
  );
};
