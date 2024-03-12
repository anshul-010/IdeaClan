import { Box, Center, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const AdminDashboard = () => {
  const [totalCourses, setTotalCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  function getAllCourses() {
    setLoading(true);
    axios
      .get(`${apiUrl}/courses/course`)
      .then((res) => {
        setLoading(false);
        setTotalCourses(res.data.courses);
      });
  }

  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <div>
      <Center>
        <Heading color="gray.700" m="10px">
          Present Courses
        </Heading>
      </Center>
      {loading && (
        <Center>
          <Heading color="gray.700" m="10px">
            Loading...
          </Heading>
        </Center>
      )}
      {!loading && (
        <Box
          boxShadow="base"
          p="20px"
          borderRadius="10px"
          display="grid"
          gridTemplateColumns="repeat(1,1fr)"
          gap="15px"
          width="500px"
          height="75vh"
          overflowY="scroll"
          scrollBehavior="smooth"
          m="20px auto"
        >
          {totalCourses.map((ele) => {
            return (
              <Box
                p="20px"
                borderRadius="10px"
                boxShadow="base"
                key={ele._id}
                display="flex"
                alignItems="center"
              >
                <Box  w="80px" h="80px">
                  <Image src={ele.image} w="100%" borderRadius="50%" h="100%" />
                </Box>
                <Text
                  textAlign="center"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.600"
                  ml="20px"
                >
                  {ele.courseName}
                </Text>
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
};
