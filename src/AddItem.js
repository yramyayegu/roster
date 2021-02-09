import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import './App.css'
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';

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
    box:{
      backgroundColor:'#fff',
      width: '50%',
      marginLeft: '25%',
      marginTop: '15%', 
    }
  }));

function AddItem(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('Make Your List');

    // Collecting Form  Data
    const handleSubmit = (event) =>  {
        const New_task = event.target.task.value;
        if(New_task){
        props.Add_Todo_List(New_task)
        event.target.task.value =''
        }
        event.preventDefault();
        return false;
    }
    // Open Model
    const handleOpen = () => {
      setOpen(true);
    };
    // Close Model
    const handleClose = () => {
      setOpen(false);
    };

    const GetName = (event) =>{
      setTitle(event.target.value);
    }
    // Model body to change name
    const body = (
      <div className={classes.paper}>
        <div className={classes.box}>
        <input name='todotitle' onChange={GetName.bind()} />
          <br /><br />
          <button onClick={handleClose} >Submit</button>
        </div>
      </div>
    );
   
return(
      <div>
        <Paper className={classes.paper}>
          {title}
          <EditIcon  onClick={handleOpen}/>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">{body}</Modal>

        </Paper>
        <Paper className={classes.paper}>
          <div>
            <form onSubmit={handleSubmit.bind()}> 
              <p>
              <ThemeProvider>
              <TextField
                className={classes.margin}
                label="ThemeProvider"
                id="mui-theme-provider-standard-input"
                name='task'/>
              </ThemeProvider>
              </p>
              <Button type="submit"> Add</Button>
            </form>
          </div>  
        </Paper>
      </div>
)}
export default AddItem;