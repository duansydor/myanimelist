import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
    img:{
        width:'200px',
        height:'200px',
        background:'grey',
        borderRadius:'50%',
        textAlign:'center'
    },
    cont:{
        padding:'14px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }
}));
function AddAnime(){
    const classes = useStyles();
    return(
        <div className="container">
            <div className={classes.cont}>
                <img src="" alt="add image" className={classes.img}></img>
                <TextField
                    id="standard-name"
                    label="Name"
                    margin="normal"
                />
                <div style={{display:'flex',alignItems:'center'}}>
                </div>
            </div>
        </div>
    )
}
export default AddAnime;