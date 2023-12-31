import { Button } from "@pankod/refine-mui";

import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({type, title, backgroundColor,color, fullWidth, icon, handleClick, disabled}: CustomButtonProps) => {
  return (
    <Button 
    disabled={disabled}
    type={type=== 'submit'? 'submit': 'button'}
    sx={{
      flex: fullWidth? 1: 'unset',
      padding: '9px 14px',
      width: fullWidth? '100%': 'fit-content',
      minWidth: 130,
      backgroundColor,
      color,
      fontSize: 15,
      fontWeight: 550,
      gap: '10px',
      textTransform: 'capitalize',
      '&:hover': { opacity: 0.8,
        backgroundColor
      }
    }}
    onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton