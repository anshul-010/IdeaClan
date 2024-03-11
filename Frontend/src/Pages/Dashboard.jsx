import React, { useEffect } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {Clock} from "lucide"
import { useDispatch, useSelector } from "react-redux";
import { LactureCard } from "./LactureCard";
import { getLactures } from "../Redux/AuthReducer/action";
export const Dashboard = () => {

  const token = useSelector((store)=>store.AuthReducer.token)
  const lacturesForU = useSelector((store)=>store.AuthReducer.lactures)
  const dispatch = useDispatch()
  // console.log(courses)

  useEffect(()=>{
    dispatch(getLactures(token))
  },[])

  return (
    <div style={{ height:"100vh",backgroundColor:"#f0f0f0ba"}}> 
      <Box p="20px">
          <Heading size="lg">Today's Schedule</Heading>
        </Box>
      {lacturesForU?.map((ele)=><LactureCard data={ele} key={ele._id} />)}
    </div>
  );
};
