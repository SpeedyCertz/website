import React from 'react'
import {Flex , Box ,Icon, Button,Image, Text} from '@chakra-ui/react';
import {IoPodium} from 'react-icons/io5'
import Link from 'next/link'
import {FiChevronsRight} from 'react-icons/fi'
import {FaUserNurse, FaClipboardCheck} from 'react-icons/fa'
 
import {HiClock} from 'react-icons/hi'


function HomeSection2() {


    const courses = [
      {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Skills Secession',price:'$65.00', duration:'2.25', type:'no',  image:'/c6.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-skills-secession'},
      {title:'American Red Cross Adult CPR, AED Skills Secession',price:'$60.00', duration:'1.25', type:'no', image:'/c7.jpg', slug:'american-red-cross-adult-cpr-aed-skills-secession'},
      {title:'American Red Cross Adult First Aid, CPR, AED Skills Secession',price:'$60.00', duration:'1.5', type:'no',  image:'/c8.jpg', slug:'american-red-cross-adult-first-aid-cpr-aed-skills-secession'},
      {title:'American Red Cross Adult CPR Skills Secession',price:'$60.00', duration:'1', type:'no',  image:'/c9.jpg', slug:'american-red-cross-adult-cpr-skills-secession'},

      {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Blended Learning',price:'$70.00', duration:'2.25', type:'no', image:'/c2.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-blended-learning'},
      {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Challenge', price:'$70.00', duration:'1', type:'no', image:'/c1.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-challenge'},
      {title:'American Red Cross Adult and Pediatric Basic Life Support Blended Learning',price:'$70.00', duration:'2', type:'yes', image:'/c4.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support-blended-learning'},
      {title:'American Red Cross Adult and Pediatric Basic Life Support Challenge',price:'$70.00', duration:'1', type:'yes', image:'/c3.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support-challenge'},
      {title:'American Red Cross Adult and Pediatric FA, CPR, AED Instructor Blended Learning',price:'$300.00', duration:'5.5', type:'instructor', image:'/c5.jpg', slug:'american-red-cross-adult-and-pediatric-fa-cpr-aed-instructor-blended-learning'},

      {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED',price:'$90.00', duration:'3.75', type:'no', image:'/c10.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed'},
      {title:'American Red Cross Adult and Pediatric Basic Life Support',price:'$90.00', duration:'4', type:'yes', image:'/c11.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support'},
    ]


  return (


    <Flex h='fit-content' w='100%' bgColor={'#121212'} align={'center'} justify={'center'} direction={'column'} position={'relative'} 
      pt='50px' pb='150px'
    >
        
        <Box w='100%' display={'grid'} justifyContent='center' gridColumnGap={{base:"25px", sm:"35px", md:'45px' }} gridRowGap='40px'
          gridTemplateColumns={{base:'repeat(auto-fill, 95%)', sm:'repeat(auto-fill, 350px)',md:'repeat(auto-fill, 350px)'  }} h='fit-content' px='25px' 
          backgroundImage={'radial-gradient(at center, #182626 0%, #121212 55%)'}
        >
          {courses.map((value,index)=>(

            <Box key={index} w={{base:"100%", sm:"350px", md:'350px' }} h={'fit-content'} position={'relative'} className='animate__animated animate__fadeIn' 
              overflow='hidden' borderRadius='15px' boxShadow={'lg'} 
            >
              <Link href={`/course/${value.slug}`}> 
                <Flex w='100%' h='fit-content' bgColor={'#262626'} direction={'column'} borderRadius='15px' overflow={'hidden'}  >
                    <Image src={value.image} w='100%' h={{base:"180px", sm:"220px", md:'200px' }} position='relative'   />
                    <Flex w='100%' px='15px' py='10px' h={{base:"160px", sm:"160px", md:'185px' }} direction={'column'} gap='10px' overflow={'hidden'}>
                        <Text fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white' fontWeight={700} >{value.title}</Text>

                        <Flex justify={'space-between'} align={'center'}>
                          {value.type === 'yes' ?
                          <Flex gap='5px' align={'center'}>
                            <Icon as={FaUserNurse} color='#FFD700' fontSize={{base:"18px", sm:"18px", md:"20px" }} />
                            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#FFD700' letterSpacing={'0.5px'} fontWeight={600} >Health Pros</Text>
                          </Flex>
                          : value.type === 'instructor' ?
                          <Flex gap='5px' align={'center'}>
                            <Icon as={FaClipboardCheck} color='#FFD700' fontSize={{base:"18px", sm:"18px", md:"20px" }} />
                            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#FFD700' letterSpacing={'0.5px'} fontWeight={600} >Prerequisites </Text>
                          </Flex>
                          :
                          <Flex gap='5px' align={'center'}>
                            <Icon as={IoPodium} color='#FFD700' fontSize={{base:"18px", sm:"18px", md:"20px" }} />
                            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#FFD700' letterSpacing={'0.5px'} fontWeight={600} >All Levels</Text>
                          </Flex>
                          }

                          <Text fontSize={{base:"16px", sm:"16px", md:"18px" }} color='gray.200' letterSpacing={'0.5px'} fontWeight={700} >
                            Cost: <span style={{color:'#45ced6'}}>{value.price}</span>
                          </Text>
                        </Flex>


                        <Flex justify={'space-between'} align={'center'}>
                          <Flex gap='5px' align={'center'}>
                            <Icon as={HiClock} color='#45ced6' fontSize={{base:"18px", sm:"18px", md:"20px" }} />
                            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#45ced6' letterSpacing={'0.5px'} fontWeight={600} >{value.duration} Hours</Text>
                          </Flex>
                          <Flex >
                            <Text fontSize={{base:"13px", sm:"13px", md:"14px" }} color='gray.200' letterSpacing={'0.5px'} fontWeight={600} >Continue</Text>
                            <Icon as={FiChevronsRight} color='gray.200' fontSize={{base:"20px", sm:"20px", md:"22px" }} />
                          </Flex>
                        </Flex>
                         
                         
                    </Flex>
                </Flex>
              </Link>
            </Box>

          ))}
             
        </Box>


    </Flex>
  )
}

export default HomeSection2