import React from 'react'
import {Flex , Box ,Icon,Image, Text} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import {FcOnlineSupport} from 'react-icons/fc'



function CoursesExplanation() {
  return (
    <Flex minH={'90vh'} h='fit-content' pt='50px' pb='100px' w='100%' bgColor={'#121212'} justify={'start'} align={'center'} direction={'column'} gap='25px'>


        <Text fontWeight={700} fontSize={{base:"30px", sm:"34px", md:"40px" }} color='#45ced6'>Courses Explanation</Text>


    </Flex>
  )
}

export default CoursesExplanation