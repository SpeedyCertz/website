
export const courseOptions = [
    {
      title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Skills Secession', 
      dtl:
        [
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult CPR, AED Skills Secession', 
      dtl:
        [
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult First Aid, CPR, AED Skills Secession', 
      dtl:
        [
          'Call or text first if you are confused on which class you need'
        ]
    },
    {
      title:'American Red Cross Adult CPR Skills Secession', 
      dtl:
        [
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
            'Thursday 10/19 - 5:00pm-6:00pm - Ironwood Public Library 4333 E Chandler Blvd, Phoenix, AZ, 85048',
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
            'Saturday 10/21 - 9:30am-3:00pm - Cholla Public Library 10050 N Metro Pkwy E, Phoenix, AZ, 85051',
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