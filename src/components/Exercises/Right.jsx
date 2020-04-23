import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

export default ({style}) =>
<Paper style = {style.Paper}>
    <Typography variant = "h3">
        Welcome
    </Typography>
    <Typography>
        Please select an exercise from the list!
    </Typography>
</Paper>