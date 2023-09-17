import {Flex, FormControl, Button, Input ,Icon, Box, FormLabel,InputGroup, Text, InputRightElement, Textarea} from '@chakra-ui/react'
import {FaUser} from 'react-icons/fa'
import {AiTwotonePhone} from 'react-icons/ai'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md' 
import { useState, useEffect, useRef } from 'react'; 
import validator from 'validator';
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js'
import Select from 'react-select'
import { courseOptions, SelectBoxStyle } from './SelectBoxesData'

 




function ClientInfoData({course, StripeCoursesData}) {

  

  const courseOpt = [];
  useEffect(() => {
    courseOptions.map((val,ind)=>{
      if(val.title === course){
        val.dtl.map((v,i)=>{
          courseOpt.push({
            value: v, label: v
          })
        })
      }
    })
  });

  


  const initialFormValues = {firstName: "" , lastName: ""  , Email: ""  , phoneNumber: "", DTL:"" };
  const [FormValues, setFormValues] = useState(initialFormValues);
  const [FormErrors, setFormErrors] = useState({})
  const [MainError, setMainError] = useState('')
  const [FormLoading, setFormLoading] = useState(false);
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const ClientInfoDataRef = useRef();
  

  const SelectBoxesData = [
      {
        options: courseOpt,
        placeholder: 'Pick Date, Time & Location',
        name: 'DTL',
        queryName: 'DTL',
      },  
  ]





  const handleFormChange = (event) =>{
    const {name , value } = event.target;
    setFormValues({ ...FormValues , [name]: value });
  }
  const handleSelectChange = (activeQuery)=>{
    setFormValues({ ...FormValues , [activeQuery.queryName]: activeQuery.queryValue });
  }


  const validateClientInfoData = (FormValues)=>{
    var Errors = {};
    if(validator.isEmpty(FormValues.firstName)) { Errors.firstName = 'Invalid First Name.' }
    if(validator.isEmpty(FormValues.lastName)) { Errors.lastName = 'Invalid Last Name.' }
    if(validator.isEmpty(FormValues.phoneNumber)) { Errors.phoneNumber = 'Invalid phone Number.' }
    if(!(validator.isEmail(FormValues.Email))) { Errors.Email = "invalid Email." ;}
    if(validator.isEmpty(FormValues.DTL)) { Errors.DTL = 'Invalid DTL.' }
    return Errors;
  }


  const FinishPayment = () =>{
    setFormErrors(validateClientInfoData(FormValues));
    setFormSubmitted(true);
  }

  const endpoint = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_dev_domain : process.env.NEXT_PUBLIC_prod_domain


  async function LaunchStripeCheckout(){

    const selectCourseID = StripeCoursesData.find(c => c.name === course).id;
    const selectCoursePrice = StripeCoursesData.find(c => c.name === course).price;
    var ClientData = {
      firstName: FormValues.firstName,
      lastName: FormValues.lastName,
      phoneNumber: FormValues.phoneNumber,
      Email: FormValues.Email,
      DTL: FormValues.DTL,
      price: selectCoursePrice,
      course: course
    };

    setFormLoading(true);
    setMainError('');
    const response = await axios.post(`/api/checkout/${selectCourseID}`, ClientData );
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    await stripe.redirectToCheckout({sessionId: response.data.id});
  }


  useEffect(() => {
    if( Object.keys(FormErrors).length == 0 && FormSubmitted ){
      LaunchStripeCheckout();
    }
    else if( Object.keys(FormErrors).length !== 0 && FormSubmitted ){
      setMainError('Please fill all the required inputs.');
    }

  }, [FormErrors]);











    return (
    
        <form ref={ClientInfoDataRef} style={{ width:'100%', height:'100%'}} > 

          <Flex w='100%' h='100%' mx='auto' position='relative' 
            direction={'column'} zIndex='16' align={'start'} justify='center' gap={{base:"15px", sm:"20px", md:"25px" }}
          >


            <Flex w='100%' direction={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}} justify='center' gap={{base:"20px", sm:"25px", md:"30px" }} >


              <FormControl isInvalid={FormErrors.hasOwnProperty('firstName') ? true : false} position='relative' flex='1 0 0' >
                <FormLabel color='white' fontSize={{base:"13px", sm:"14px", md:"16px" }} fontWeight={600} pl='10px' >First Name</FormLabel>
                <InputGroup border={'transparent'} boxShadow={'md'} borderRadius={'25px'}>
                  <InputRightElement h='100%' mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} 
                    color='white' borderRadius={'25px'} children={<FaUser />}  
                  />
                  <Input 
                    type='text' 
                    value={FormValues.firstName}
                    borderRadius={'25px'}
                    placeholder='John'
                    errorBorderColor='red.500'
                    focusBorderColor='#45ced6'
                    name='firstName'
                    color='white'
                    fontSize={{base:"13px", sm:"14px", md:"15px" }}
                    pl={{base:"10px", sm:"10px", md:"15px" }}
                    bgColor={'#262626'}
                    onChange={handleFormChange}
                    disabled={FormLoading}
                  />
                </InputGroup>
              </FormControl>
              

              <FormControl isInvalid={FormErrors.hasOwnProperty('lastName') ? true : false} position='relative' flex='1 0 0' >
                <FormLabel color='white' fontSize={{base:"13px", sm:"14px", md:"16px" }} fontWeight={600} pl='10px' >Last Name</FormLabel>
                <InputGroup border={'transparent'} boxShadow={'md'} borderRadius={'25px'}>
                  <InputRightElement h='100%' mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} 
                    color='white' borderRadius={'25px'} children={<FaUser />}  
                  />
                  <Input 
                    type='text' 
                    value={FormValues.lastName}
                    borderRadius={'25px'}
                    placeholder='Smith'
                    errorBorderColor='red.500'
                    focusBorderColor='#45ced6'
                    name='lastName'
                    color='white'
                    fontSize={{base:"13px", sm:"14px", md:"15px" }}
                    pl={{base:"10px", sm:"10px", md:"15px" }}
                    bgColor={'#262626'}
                    onChange={handleFormChange}
                    disabled={FormLoading}
                  />
                </InputGroup>
              </FormControl>
              
            </Flex>


            <Flex w='100%' direction={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}} justify='center' gap={{base:"20px", sm:"25px", md:"30px" }} >


              <FormControl isInvalid={FormErrors.hasOwnProperty('phoneNumber') ? true : false} position='relative' flex='1 0 0' >
                <FormLabel color='white' fontSize={{base:"13px", sm:"14px", md:"16px" }} fontWeight={600} pl='10px' >Phone Number</FormLabel>
                <InputGroup border={'transparent'} boxShadow={'md'} borderRadius={'25px'}>
                  <InputRightElement h='100%' mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} 
                    color='white' borderRadius={'25px'} children={<AiTwotonePhone />}  
                  />
                  <Input 
                    type='text' 
                    value={FormValues.phoneNumber}
                    borderRadius={'25px'}
                    placeholder='(623)330-9456'
                    errorBorderColor='red.500'
                    focusBorderColor='#45ced6'
                    name='phoneNumber'
                    color='white'
                    fontSize={{base:"13px", sm:"14px", md:"15px" }}
                    pl={{base:"10px", sm:"10px", md:"15px" }}
                    bgColor={'#262626'}
                    onChange={handleFormChange}
                    disabled={FormLoading}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={FormErrors.hasOwnProperty('Email') ? true : false} position='relative' flex='1 0 0' >
                <FormLabel color='white' fontSize={{base:"13px", sm:"14px", md:"16px" }} fontWeight={600} pl='10px' >Email </FormLabel>
                <InputGroup border={'transparent'} boxShadow={'md'} borderRadius={'25px'}>
                  <InputRightElement h='100%' mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} 
                    color='white' borderRadius={'25px'} children={<MdEmail />}  
                  />
                  <Input 
                    type='text' 
                    value={FormValues.Email}
                    borderRadius={'25px'}
                    placeholder='your-email@gmail.com'
                    errorBorderColor='red.500'
                    focusBorderColor='#45ced6'
                    name='Email'
                    color='white'
                    fontSize={{base:"13px", sm:"14px", md:"15px" }}
                    pl={{base:"10px", sm:"10px", md:"15px" }}
                    bgColor={'#262626'}
                    onChange={handleFormChange}
                    disabled={FormLoading}
                  />
                </InputGroup>
              </FormControl>
              
            </Flex>



            <Flex w='100%' wrap={'wrap'} direction={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}} justify='center' gap={{base:"20px", sm:"25px", md:"30px" }} >
              {SelectBoxesData.map((filter, index)=>(
              <FormControl position='relative' flex='1 0 0' h='fit-content' color='black' 
                key={filter.queryName} 
              >
                <FormLabel color='white' fontSize={{base:"13px", sm:"14px", md:"16px" }} fontWeight={600} pl='10px' >Date - Time - Location </FormLabel>
                <Box border={FormErrors.hasOwnProperty(filter.queryName) ? '2px solid' : ''} 
                  borderColor={FormErrors.hasOwnProperty(filter.queryName) ? 'red.500' : ''} borderRadius={'25px'}
                > 
                  <Select  
                    options={filter.options} 
                    name={filter.name} 
                    styles={SelectBoxStyle} 
                    placeholder={filter.placeholder} 
                    menuPortalTarget={document.body} 
                    menuPosition={'fixed'}
                    onChange={(ev)=> handleSelectChange( {queryName:filter.queryName, queryValue: ev.value }) }
                  />
                </Box>
              </FormControl>
              )
              )}
            </Flex>










            {MainError !== '' ?
              <Text w='100%' mt='10px' color={'red.500'} textAlign={'center'} fontSize={{base:"13px", sm:"14px", md:"16px" }} className="animate__animated animate__headShake">
                {MainError}
              </Text>
            : null }

 

            <Button 
                w={{base:"100%", sm:"280px", md:"300px" }} mx='auto'
                bgColor={'#38aeb5'} className='btn-effect' mt='20px'
                fontWeight={700} _hover={{opacity:0.75}} gap={'5px'} overflow='hidden' textAlign={'center'} 
                 h={{base:"36px", sm:"40px", md:"44px" }} bgSize={'200% auto'} borderRadius={'25px'} color={'black'} 
                _active={{opacity:'0.5'}} boxShadow='xl' zIndex={1}
                isLoading={FormLoading} onClick={FinishPayment} disabled={FormLoading} 
            >           
                <Text fontSize={{base:"13px", sm:"15px", md:"16px" }} >Finish Payment</Text>
                <Icon as={RiSecurePaymentFill} fontSize={{base:"18px", sm:"20px", md:"22px" }} />
            </Button>



          </Flex>

        </form>
    )
}


export default ClientInfoData