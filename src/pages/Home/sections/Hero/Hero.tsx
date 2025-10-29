import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";



const Hero = () => {

    const StyledHero = styled("div") (({theme}) => ({
        backgroundColor: theme.palette.background.default,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img") (() => ({
        width:"80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.main}`,
    }))

  return (
    <>
     <StyledHero>
        <Container maxWidth={"lg"}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5}}>
                    <Box position={"relative"}>
                        <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                            <AnimatedBackground />
                        </Box>
                        <Box position={"relative"} textAlign={"center"}>
                            <StyledImg src={Avatar} />
                        </Box>
                    </Box>
               
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography color={"primary"} variant={"h1"} textAlign={"center"} pb={2}>Laura Acioly</Typography>
                    <Typography color={"primary"} variant={"h2"} textAlign={"center"}>I'm a Software Engineer</Typography>
                    <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={2}>
                        <Grid size = {{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"} > 
                            <StyledButton>  
                                <DownloadIcon />
                                <Typography>
                                Download CV
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid size = {{ xs: 12, md: 4}} display={"flex"}  justifyContent={"center"}> 
                            <StyledButton>
                            <MailOutlineIcon />
                            <Typography>
                            Contact me
                            </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
     </StyledHero>
    </>
  )
}

export default Hero
