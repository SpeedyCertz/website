import React from 'react'
import {Flex ,Image, Text} from '@chakra-ui/react';



function AboutMe() {
  return (
    <Flex minH={'90vh'} h='fit-content' pt='30px' pb='100px' w='100%' bgColor={'#121212'} justify={'start'} align={'center'} direction={'column'} gap='25px'>

        <Image src='/about.png' alt='about' width={{base:"70%", sm:"350px", md:"400px"}} mx={"auto"} className="animate__animated animate__fadeIn" style={{animationDelay: '0ms' }}/>

        <Text fontWeight={700} fontSize={{base:"30px", sm:"34px", md:"40px" }} className="animate__animated animate__fadeIn" style={{animationDelay: '250ms'}} color='#45ced6'>About Me</Text>

        <Text textAlign={'center'} fontSize={{base:"13px", sm:"16px", md:"18px" }} color='white' fontWeight={600} w='85%' style={{animationDelay: '500ms' }}
            maxW={'900px'} lineHeight={{base:"22px", sm:"28px", md:"32px" }} className="animate__animated animate__fadeIn"
          >
          My name is Christina Tyler and I had started Speedy Certz so that way people would have a quicker and more efficient way to get certified so you’re not having to waste any time. I’m constantly having things improved based on the feedback from the customers. I started my business after going through negative experiences of people not knowing what to do in emergency situations, also having to do my food handlers and it taking forever to get certified, and my roommates daughter needing to get her permit test and struggling to find a place that would do in person test preparation. I wanted to offer classes that aligns with research and studies showing that in person learning shows a better retention of learning and understanding than online learning. I also wanted to have a platform that other contractors and businesses can use so that way there’s a website that people can go to that provides any and all certifications that they would need. My goal by creating this platform was to create a new pathway out of poverty by providing certifications that you can obtain quickly and efficiently.
        </Text>
    </Flex>
  )
}

export default AboutMe