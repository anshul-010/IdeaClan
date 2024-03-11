import React from 'react'
import { Box, Button, Text } from "@chakra-ui/react";
export const LactureCard = ({data}) => {
  return (
    <div>
        <Box p="20px">
        
        <Box
          boxShadow='base'
          display="flex"
          m="auto"
          justifyContent="space-between"
          width="70vw"
          backgroundColor="white"
          borderRadius="10px"
          p="10px"
        >
          <Box w="190px">
            <Text fontSize="xl" color="gray.600">Lacture</Text>
            <Text fontSize="lg" color="gray.600">{data.courses}</Text>
          </Box>
          <Box w="150px">
            <Text fontSize="xl" color="gray.600">Instructor</Text>
            <Text fontSize="lg" color="gray.600">{data.instructor}</Text>
          </Box>
          <Box w="180px">
            <Text fontSize="md" color="gray.600" alignSelf="center">{data.timing}</Text>
            <Text fontSize="md" color="gray.600" alignSelf="center">60 min.</Text>
          </Box>
          <Box w="60px" alignSelf="center">
          <Button colorScheme='blue' variant='link' border="none">
                 Live
            </Button>
          </Box>
          <Box w="60px" alignSelf="center">
            <Button colorScheme="twitter" variant="outline">
              Join
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
