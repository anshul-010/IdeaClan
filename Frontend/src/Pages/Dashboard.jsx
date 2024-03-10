import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {Clock} from "lucide"
import { useSelector } from "react-redux";
import { LactureCard } from "./LactureCard";
export const Dashboard = () => {

  const courses = useSelector((store)=>store.AuthReducer.courses)
  // console.log(courses)

  return (
    <div style={{ height:"100vh",backgroundColor:"#f0f0f0ba"}}> 
      <Box p="20px">
          <Heading size="lg">Today's Schedule</Heading>
        </Box>
      {courses?.map((ele)=><LactureCard data={ele} key={ele._id} />)}
    </div>
  );
};
