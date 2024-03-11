import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import { LoginUser } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";

const initialData = {
  email: "",
  password: "",
};

export const Login = () => {
  const [data, setData] = useState(initialData);
  // const [loading,setLoading] = useState(false);
  const loading = useSelector((store)=>store.AuthReducer.isLoading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData(initialData)
    dispatch(LoginUser(data,navigate));
  }


  return (
    <>
    {loading && <Center><Heading color="gray.700" m="10px">Loading...</Heading></Center>}
      <Box display="flex"  width="100vw" justifyContent="center">
        <Box
          width={{ lg: "35vw", base: "80vw" }}
          boxShadow="base"
          m="20px"
          mb="8vh"
          p={"10px"}
          
        >
          <Heading m="5px" fontSize="3xl" color="#22548A">
            Log in
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mt="20px">
             
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
              
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
              
              <br />
              <Button
                type="submit"
                m="20px auto"
                display={"block"}
                p={"10px 50px"}
                size="lg"
                colorScheme="linkedin"
                variant="ghost"
              >
                Log in
              </Button>
            </FormControl>
          </form>
          <Flex justify="space-around">
            <Link to="/register">
              <Button color="#22548A" variant="link" fontSize="lg">
                Register here
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
