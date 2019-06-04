import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import yourname from '../assets/yourname.png';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer(props) {
  const classes = useStyles();
  



  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <img src={yourname} alt=""></img>
      <Divider />
      <List>
          <ListItem><Link style={{color:'black', textDecoration:'none'}}  variant="h6" component={RouterLink} to="/">All Anime</Link></ListItem>
          <ListItem><Link style={{color:'black', textDecoration:'none'}}  variant="h6" component={RouterLink} to="/add">Add Anime</Link></ListItem>
          <ListItem><Link style={{color:'black', textDecoration:'none'}}  variant="h6" component={RouterLink} to="/favourites">Favourites</Link></ListItem>
          <ListItem><Link style={{color:'black', textDecoration:'none'}}  variant="h6" component={RouterLink} to="/pendent">Pendent</Link></ListItem>
          <ListItem><Link style={{color:'black', textDecoration:'none'}}  variant="h6" component={RouterLink} to="/watched">Watched Anime</Link></ListItem>
      </List>
    </div>
  );

  return (
    <div>
    
      <Drawer open={props.state.left} onClose={props.toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;