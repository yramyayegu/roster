import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


//Css
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1, 
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  


function AddItem(props)
{
    const classes = useStyles();
    // Collecting Form  Data
    const handleSubmit = (event) =>  {
        const New_task = event.target.task.value;
        props.Add_Todo_List(New_task)
        event.target.task.value =''
        event.preventDefault();
        return false;
    }
   
return(
    <div>
        <Paper className={classes.paper}>Make Your List</Paper>
        <Paper className={classes.paper}>
            <div>
                <form onSubmit={handleSubmit.bind()}> 
                  <p>
                    <textarea name='task' ></textarea>
                  </p>
                    <input type="submit"  value="Submit" />
                </form>
            </div>  
        </Paper>
    </div>
)
}

export default AddItem;