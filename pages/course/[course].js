import React, {useState, useEffect} from 'react'
import {Flex ,Image, Text, Divider} from '@chakra-ui/react';
import Head from 'next/head'
import ClientInfoData from '../../pagesSections/ClientInfoData';

import { stripe } from '../../Stripe/Stripe';
import slugify from 'react-slugify';

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



function Course({courseIndex, StripeCoursesData}) {

  const [ProcessFees, setProcessFees] = useState(null)
  const [IntPrice, setIntPrice] = useState(null)
  const calculateFees = ()=>{
    StripeCoursesData.map((val,i)=>{
      if(val.name === courses[courseIndex]?.title){
        setIntPrice(val.price)
        setProcessFees((((val.price * 3) / 100) + 0.30).toFixed(2))
      }
    })
  }
  useEffect(() => {
    calculateFees()
  }, [])
  


  return (

    <>
      <Head>
        <title>{courses[courseIndex]?.title} </title>
      </Head>


      
      <Flex minH={'90vh'} h='fit-content' pt='40px' pb='100px' w='100%' bgColor={'#121212'} justify={'center'} align={'center'} direction={'column'} gap='50px'>


        <Text fontWeight={700} fontSize={{base:"28px", sm:"34px", md:"40px" }} color='white'>Checkout</Text>

        <Flex w={{base:"90%", sm:"90%", md:"90%", lg:'90%', xl:'75%'}} h='100%' gap='20px'
          align={'start'} justify={'center'} maxW={'900px'} direction={{base:"column", sm:"column", md:"row", lg:'row' }}
        >

          <Image src={courses[courseIndex]?.image} alt='course-image' maxW={'100%'} h='100%' maxH={{base:"250px", sm:"250px", md:"300px", lg:'400px' }}
            w={{base:"100%", sm:"100%", md:"50%", lg:'50%' }} borderRadius={'15px'} />


          <Flex flex='1 0 0' direction={'column'} h='100%' align={'start'} justify={'start'} gap='5px'>

            <Text fontWeight={700} fontSize={{base:"18px", sm:"20px", md:"22px" }} color='#45ced6'>{courses[courseIndex]?.title}</Text>
            <Text fontWeight={700} fontSize={{base:"18px", sm:"20px", md:"22px" }} color='white'>Classe Details:</Text>

            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white'> Duration</Text>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='#45ced6'>{courses[courseIndex]?.duration} Hours</Text>
            </Flex>
            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white'>Level</Text>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='#45ced6'>
              {courses[courseIndex]?.type === 'yes' ? 'Health Pros' : courses[courseIndex]?.type === 'instructor' ? 'Prerequisites' : 'All Levels'} 
              </Text>
            </Flex>
            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white'>Teacher</Text>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='#45ced6'>Chritina Tyler</Text>
            </Flex>
            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white'>Price</Text>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='#45ced6'>{courses[courseIndex]?.price}</Text>
            </Flex>
            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white'>Processing Fees (2.99% + 0.30¢)</Text>
              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='#45ced6'>${ProcessFees}</Text>
            </Flex>
            <Divider my='10px' w='100%' borderColor={'rgba(1, 118, 124,0.5)'} />
            <Flex justify={'space-between'} align={'center'} w='100%'>
              <Text fontWeight={700} fontSize={{base:"16px", sm:"18px", md:"20px" }} color='white'>Total</Text>
              <Text fontWeight={700} fontSize={{base:"16px", sm:"18px", md:"20px" }} letterSpacing={'1px'} color='#FFD700'>${(IntPrice + parseFloat(ProcessFees)).toFixed(2)}</Text>
            </Flex>

          </Flex>


        </Flex>


        <Divider w='150px' borderColor={'rgba(1, 118, 124,0.5)'} />


        {courseIndex === 0 || courseIndex === 1 || courseIndex === 2 || courseIndex === 3 ?
        <Text w='90%' maxW={'700px'} textAlign={'center'} fontWeight={700} fontSize={{base:"12px", sm:"14px", md:"16px" }} mx='auto' color='#FFD700'>
          “The online portion must be completed prior to the skills secession and say that you have 90 days to complete the skills secession.
          If it is not done, you will need to contact me so you can reschedule for no extra fee.”
        </Text>
        : null }

        {courseIndex === 0 || courseIndex === 1 || courseIndex === 2 || courseIndex === 3 ?
        <Divider w='150px' borderColor={'rgba(1, 118, 124,0.5)'} />
        : null }


        <Flex w={{base:"90%", sm:"90%", md:"90%", lg:'90%', xl:'75%'}} h='100%' direction={'column'}
          align={'center'} justify={'center'} maxW={'900px'} 
        >
          <Text fontWeight={700} fontSize={{base:"18px", sm:"20px", md:"22px" }} mb='25px' color='#45ced6'>Fill out your Personal Information</Text>
          <ClientInfoData course={courses[courseIndex]?.title} StripeCoursesData={StripeCoursesData} />
        </Flex>




      </Flex>

    </>

  )
}

export default Course



export async function getServerSideProps ( {params:{course}} ) {

  const {data: prices} = await stripe.prices.list({limit: 20});

  const StripeCoursesData = [];
  for(const price of prices){
    const product = await stripe.products.retrieve(price.product);

    if(price.active === true){
      StripeCoursesData.push({
        name: product.name,
        slug: slugify(product.name),
        price: price.unit_amount / 100,
        id: price.id,
      });
    }
  }

  var exists = false;
  var courseIndex = null;
  courses.map((val, index)=>{
    if(val.slug === course){
      exists = true;
      courseIndex = index;
    }
  })
  
  
  if(exists === true){
    return{
      props:{
        courseIndex: courseIndex,
        StripeCoursesData: StripeCoursesData
      }
    }
  }
  else{
    return {
      notFound: true,
    }
  }

}
