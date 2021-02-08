import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
//CSS
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1, 
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },   
}))
//Component
function NewList(props){
//Event handle function on click of every task
  const handlechange = (event) =>{
    if(event.target.name === 'To-do List'){ props.Add_inprogress_list(event.target.id,event.target.value) }
    if(event.target.name === 'InProgress'){ 
      props.Add_Complete_list(event.target.id,event.target.value)  
    }
  }

    const classes = useStyles;
    return(
        <div>
          <Paper className={classes.paper}>
           
            
            {props.title}
            
            </Paper>
          <Paper className={classes.paper}>
            <List className={classes.root}>
            { props.alltasks.map(item => (
              <ListItem>
                  <FormControlLabel control={<Button name={props.title} value={item.value} id={item.id} /> } 
                  
                   key={item.id} 
                   label={item.value} 
                   onClick={handlechange}
                  />
              </ListItem>
            ))}
              
            </List>
          </Paper>
      </div>
    )
}

export default NewList;