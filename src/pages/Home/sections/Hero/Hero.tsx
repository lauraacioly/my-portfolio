import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";



const Hero = () => {

    const StyledHero = styled("div") (({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh"
    }))

    const StyledImg = styled("img") (() => ({
        width:"100%",
        borderRadius: "50%"
    }))

  return (
    <>
     <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4}}>
                <StyledImg src={Avatar} />
                </Grid>
                <Grid size={{ xs: 12, md: 8  }}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">Ana Laura Acioly</Typography>
                    <Typography color="primary" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                    <Grid container display="flex" justifyContent="center">
                        <Grid size = {{ xs: 12, md: 4}} display="flex" justifyContent="center" > 
                            <Button color="secondary">
                            <DownloadIcon />
                            Download CV
                            </Button>
                            <StyledButton>  
                                <DownloadIcon />
                                Download CV
                            </StyledButton>
                            
                        </Grid>
                        <Grid size = {{ xs: 12, md: 4}} display="flex"  justifyContent="center"> 
                            <Button color="secondary">
                            <MailOutlineIcon />
                            Contact me
                            </Button>
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
