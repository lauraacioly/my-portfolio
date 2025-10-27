import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';


const Hero = () => {

    const StyledHero = styled("div") (() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img") (() => ({
        width:"100%",
        borderRadius: "50%"
    }))

  return (
    <>
     <StyledHero>
        <Container>

        <Grid container spacing={2}>
            <Grid size={{ xs: 4}}>
            <StyledImg src={Avatar} />
            </Grid>
            <Grid size={{ xs: 8}}>
                <Typography color="primary" variant="h1">Ana Laura Acioly</Typography>
                <Typography color="primary" variant="h2">I'm a Software Engineer</Typography>
                <Button>
                    <DownloadIcon />
                    Download CV</Button>
                <Button>Contact me</Button>
            </Grid>
        </Grid>

        </Container>
        
       
     </StyledHero>
    </>
  )
}

export default Hero
