import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {

    const StyledToobar = styled(Toolbar) (({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,

    }))


  return (
    <>
     <AppBar position="absolute">
        <StyledToobar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
        </StyledToobar>
     </AppBar>
    </>
  )
}
 
export default NavBar
