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
} from "@chakra-ui/react";
import { registerNewUser } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

const initialData = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  courses: [],
};

export const Register = () => {
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (name === "courses") {
      if (checked) {
        setData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((course) => course !== value),
        }));
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data)
    setData(initialData)
    dispatch(registerNewUser(data,navigate))
  }

  return (
    <>
      <Box display="flex"  width="100vw" justifyContent="center">
        <Box
          width={{ lg: "35vw", base: "80vw" }}
          boxShadow="base"
          m="20px"
          mb="8vh"
          p={"10px"}
          
        >
          <Heading m="5px" fontSize="3xl" color="#22548A">
            Register here
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mt="20px">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
              <FormLabel>Mobile No.</FormLabel>
              <Input
                type="number"
                placeholder="mobile no."
                name="mobile"
                onChange={handleChange}
                value={data.mobile}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
              <FormLabel m={2}>Select Courses</FormLabel>
              <Checkbox color="gray.600" name="courses" value="Frontend Development" isChecked={data.courses.includes("Frontend Development")} onChange={handleChange}>
                Frontend Development
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="Backend Development" isChecked={data.courses.includes("Backend Development")} onChange={handleChange}>
                Backend Development
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="Fullstack Development" isChecked={data.courses.includes("Fullstack Development")} onChange={handleChange}>
                Fullstack Development
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="DSA" isChecked={data.courses.includes("DSA")} onChange={handleChange}>
                DSA
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="Ethical Hacking" isChecked={data.courses.includes("Ethical Hacking")} onChange={handleChange}>
                Ethical Hacking
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="Data Analytics" isChecked={data.courses.includes("Data Analytics")} onChange={handleChange}>
                Data Analytics
              </Checkbox>
              <br />
              <Checkbox color="gray.600" name="courses" value="Aptitude" isChecked={data.courses.includes("Aptitude")} onChange={handleChange}>
                Aptitude
              </Checkbox>
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
                Register
              </Button>
            </FormControl>
          </form>
          <Flex justify="space-around">
            <Link to="/login">
              <Button color="#22548A" variant="link" fontSize="lg">
                Already have an account!
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
