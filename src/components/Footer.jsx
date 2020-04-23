import React from "react"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import classes from "./css/Footer.module.css"



  

const Footer = () =>{
 
    return(
        <>
        <Grid container  spacing={3} className = {classes.footer}>
            <Grid item xs={4} className = {classes.footerBox}>
                <Grid container direction="column">
                    <Grid item className = {[classes.footerTitle,classes.footerContent]}>Awa<span style={{color:"#6fd0e1"}}>Inspires</span></Grid>
                    <Grid item className = {classes.footerContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam sit excepturi eveniet reprehenderit?</Grid>
                    <Grid item className = {classes.footerContent}>123-123-1234</Grid>
                    <Grid item className = {classes.footerContent}>sadfasdfas@fsdf.com</Grid>
                    <Grid item className = {classes.footerContent}><FacebookIcon></FacebookIcon> <InstagramIcon></InstagramIcon> <TwitterIcon></TwitterIcon> <YouTubeIcon></YouTubeIcon></Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className = {classes.footerBox}>
                <Grid container direction="column">
                    <Grid item className={classes.footerTitle}>Quick LINKs</Grid>
                    <ul>
                        <li><Grid item>Events</Grid></li>
                        <li><Grid item>Contact</Grid></li>
                        <li><Grid item>Mentors</Grid></li>
                        <li><Grid item>Galleries</Grid></li>
                        <li><Grid item>Write for us</Grid></li>
                        <li><Grid item>Terms and conditions</Grid></li>
                    </ul>
                </Grid>
            </Grid>
            <Grid item xs={4} className = {classes.footerBox}>
                <Grid container className={classes.contactUsBox}>
                    <Grid item className={classes.contactUs}>
                        Contact Us
                    </Grid>
                    <Grid item>
                        <FormControl >
                            {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
                            <Input className = {classes.myForm} id="my-input" aria-describedby="my-helper-text" placeholder="Your email address"/>
                        </FormControl>
                        
                            
                        <FormControl className={classes.controlForm}>
                            <TextareaAutosize className= {classes.textArea} aria-label="minimum height" rowsMin={3} placeholder="Message..." />
                        </FormControl>

                        <Button className = {classes.sendButton}>Send</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.botBar}>
            <Grid item >
                Coding Poets | Designed by Awa Melvine
            </Grid>
        </Grid>
        </>
        
    )

}

export default Footer