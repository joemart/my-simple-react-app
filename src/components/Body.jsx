import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import classes from "./css/Styles.module.css"



export default ({muscles, onChange, category}) =>{
    let styles = {
        textAlign:"center"
    }

   let index = category ? muscles.findIndex(x => x === category) + 1 : 0

    return(
         <Grid className = {classes.gridContainer} container  spacing={2} justify="center" >
             <Grid item xs = {12} style={styles}>
                 <Paper>
                     
                     <Tabs  onChange = {(e,index)=>{
                         //continue here

                     }}
                            value = {index}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                                <Tab label = 'All'></Tab>
                                {muscles.map(m=>
                                <Tab key ={m} label = {m}></Tab>
                                )}
                    </Tabs>
                 </Paper>
             </Grid>
        </Grid>
    )
   
}
