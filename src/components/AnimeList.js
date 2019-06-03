import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

let Card = (props) => {
     let classes = useStyles();
       let {image,title, status,text} = props.anime;
    return(
        
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={image} />
                </ListItemAvatar>
                <ListItemText
                primary={
                     <React.Fragment>
                        <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                        >
                            {title}
                        </Typography >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography
                        component="span"
                        variant="body3"
                        className={classes.inline}
                        color="textSecondary"
                        >
                            {status}
                        </Typography >
                         
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {text}
                    </Typography>
                   
                    </React.Fragment>
                }
                />
                <Divider/>
            </ListItem>
    );
}
function AnimeList(props){
    let classes = useStyles();

    let {list} = props;
    return(
        <Container>
            <List className={classes.root}> 
                {
                    list.map(item => {
                        return(
                            <Card  key={item.key} anime={item}/>
                        );
                    })
                }
            </List>
            
        </Container>
    )
}
export default AnimeList;