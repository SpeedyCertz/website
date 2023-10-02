
export const courseOptions = [
    {
      title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Skills Secession', 
      dtl:
        [
          'Monday 10/09 - 9:00am-11:15am - First Baptist Church of Tempe 4525 S McClintock Dr, Tempe, AZ, 85282',
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult CPR, AED Skills Secession', 
      dtl:
        [
          'Monday 10/09 - 9:00am-11:15am - First Baptist Church of Tempe 4525 S McClintock Dr, Tempe, AZ, 85282',
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult First Aid, CPR, AED Skills Secession', 
      dtl:
        [
          'Monday 10/09 - 9:00am-11:15am - First Baptist Church of Tempe 4525 S McClintock Dr, Tempe, AZ, 85282',
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult CPR Skills Secession', 
      dtl:
        [
          'Monday 10/09 - 9:00am-11:15am - First Baptist Church of Tempe 4525 S McClintock Dr, Tempe, AZ, 85282',
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
        title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Blended Learning', 
        dtl:
          [
            'Call or text first if you are confused on which class you need'
          ]
    },
    {
        title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Challenge', 
        dtl:
          [
            'Call or text first if you are confused on which class you need'
          ]
    },
    {
        title:'American Red Cross Adult and Pediatric Basic Life Support Blended Learning', 
        dtl:
          [
            'Wednesday 10/04 - 10:00am-12:00pm - Dobson Ranch Library 2425 S Dobson Ranch Rd, Mesa, AZ, 85202',
            'Call or text first if you are confused on which class you need'
          ]
    },
    {
        title:'American Red Cross Adult and Pediatric Basic Life Support Challenge', 
        dtl:
          [
            'Call or text first if you are confused on which class you need'
          ]
    },
    {
        title:'American Red Cross Adult and Pediatric FA, CPR, AED Instructor Blended Learning', 
        dtl:
          [
            'Saturday 10/21 - 9:30am-3:00pm - Burton Barr Central Library 1221 N Central Ave, Phoenix, AZ, 85004',
            'Call or text first to discuss a different day'
          ]
    },
    {
      title:'American Red Cross Adult and Pediatric First Aid, CPR, AED', 
      dtl:
        [
            'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult and Pediatric Basic Life Support', 
      dtl:
        [
          'Call or text first if you are confused on which class you need'
        ]
    },
]



export const SelectBoxStyle = { 
    control: (baseStyle, state) => ({
      ...baseStyle,
      background: '#262626',
      borderRadius: '25px',
      borderColor: 'transparent',
      boxShadow: state.isFocused ? null : null,
      cursor:'pointer',
      fontSize:'13px',
      "&:hover": {
        borderColor: state.isFocused ? "#45ced6" : "#45ced6"
      }
    }),
    option: (baseStyle) => ({
        ...baseStyle,
        padding: '8px 0',
        fontSize: '13px',
        paddingLeft: '10px',
        color: '#EBF0F3', 
        cursor:'pointer',
        borderBottom: '1px solid black',
        background: '#303030',
        "&:hover": {
          opacity: 0.9,
        }
    }),
    singleValue: baseStyle => ({
        ...baseStyle,
        color: '#45ced6',
        background: '#262626',
    }),
    menu: (baseStyle) => ({
        ...baseStyle,
        zIndex: 9999,
         
    }),
    menuPortal: (baseStyle) => ({
        ...baseStyle,
        zIndex: 9999,
         
    }),
    placeholder: (baseStyle) => {
      return {
          ...baseStyle,
          fontSize: '13px',
          fontWeight: '500',
          paddingLeft: '5px',
          color: '#EBF0F3', 
      }
    },
    menuList: (baseStyle) => ({
      ...baseStyle,
      // kill the white space on first and last option
      padding: 0
    })
  }