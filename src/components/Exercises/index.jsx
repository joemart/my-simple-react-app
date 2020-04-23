import React from "react"
import Grid from "@material-ui/core/Grid"
import Left from "./Left"
import Right from "./Right"

const styles = {
    Paper: { 
        padding: 20, 
        margin: 20 , 
        overflowY: 'auto'
    }
}

export default ({exercises}) =>
    <Grid container>
        <Grid item xs>
            <Left style ={styles} exercises ={exercises}></Left>
        </Grid>
        <Grid item xs>
            <Right style = {styles} ></Right>
        </Grid>
    </Grid>