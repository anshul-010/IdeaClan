import { Box, Button, Text } from "@chakra-ui/react";

import React from 'react'

export const Card = ({data}) => {
  return (
    <div>
        <Box p="20px" >
        <Box
          boxShadow='base'
          m="auto"
          width="350px"
          backgroundColor="white"
          borderRadius="10px"
          p="10px"
          lineHeight="50px"
        >
          <Box textAlign="center" >
            <Text fontSize="xl" fontWeight="500" color="gray.600">{data}</Text>
          </Box>
          <Box >
            <Text fontSize="xl" color="gray.600">Instructor: Nupul Dev</Text>
            <Text fontSize="xl" color="gray.600">Instructional Associate: Chetan Pant</Text>
            {/* <Text fontSize="lg" color="gray.600">Nupul Dev</Text> */}
          </Box>
          <Box w="180px">
            <Text fontSize="md" color="gray.600" alignSelf="center">Duration: 1 Months</Text>
          </Box>
          <Box display="flex" gap="10px">
            <Text color="gray.600">Pair Programming </Text>
            <Button colorScheme='teal' variant='link' border="none">
                 Available
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
