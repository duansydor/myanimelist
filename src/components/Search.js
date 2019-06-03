import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import {InputBase} from '@material-ui/core/'
import { fade } from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/core/styles';


const Search = (props) => {
    const useStyles = makeStyles( theme => ({
        search: {
          position: 'relative',
          
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing(2),
          marginLeft: 0,
          width: '100%',
          display:'flex',
          alignContent:'center',
          justifyContent:'center',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
          },
        },
        searchIcon: {
          width: theme.spacing(7),
          height: '100%',
          position: 'absolute',
          right:'5px',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
          borderRadius:'10px',
          background:'lightgrey'
    
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 7),
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: 200,
          },
        },
      }))
    const classes = useStyles();
    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search Animes"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
            />
        </div>
    );
}
export default Search;
