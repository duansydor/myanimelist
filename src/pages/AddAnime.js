import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
function AddAnime(props){
    const classes = useStyles();
    let [anime, setAnime] = useState({
        title:'aa'

    })

    return(
        <div className="container">
            <div className={classes.cont}>
                <img src="" alt="" className={classes.img}></img>
                <TextField
                    id="title"
                    label="Name"
                    margin="normal"
                    onChange={(e) => {setAnime({title:e.target.value})}}
                />
                {anime.title}
                <div style={{display:'flex',alignItems:'center'}}>
                    <Button onClick={() => props.addAnimeClick(anime)} variant="contained" color="primary">Add Anime</Button>
                </div>
            </div>
        </div>
    )
}
export default AddAnime;