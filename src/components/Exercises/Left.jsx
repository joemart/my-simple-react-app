import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export default ({style, exercises}) =>
<Paper style = {style.Paper}>
    {exercises.map(([group,exercises])=>
        <>
            <Typography 
            variant = "h5"
            style = {{textTransform: "capitalize"}}>
            {group}
            </Typography>
            
            <List component = "ul">
                {exercises.map(({title})=>
                <ListItem button>
                    <ListItemText primary={title}></ListItemText>
                </ListItem>
                    )}
                
            </List>
        </>
         
    )}
</Paper>