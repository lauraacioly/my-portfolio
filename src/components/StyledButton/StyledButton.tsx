import { styled } from "@mui/material"      
import type { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton = ({children}) => {

    const StyledButton = styled("button") (({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    }))

  return (
    <>
        <StyledButton>
            {children}
        </StyledButton>
    </>
  )
}

export default StyledButton
