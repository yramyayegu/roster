import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewList from './NewList';
import AddItem from './AddItem';
import './App.css';
import {Remove_task} from './utility';
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
}));

function App() {

// new List data
const [todo_list,settodo_list] = useState([]);
const [inprogress_list,setinprogress_list] = useState([]);
const [completed_list,setcompleted_list] = useState([]);


  // Add_Task_list adds new task to All_tasks array
  const Add_Todo_List = (data) =>{
    settodo_list([...todo_list,{
      id:todo_list.length,
      value:data
    }])
  } 

  const Add_inprogress_list = (id,data) =>{
   setinprogress_list([...inprogress_list,{
      id:inprogress_list.length,
      value:data
    }])
    Remove_task(id,todo_list)
  }


  const Add_Complete_list = (id,data) =>{
   setcompleted_list([...completed_list,{
      id:completed_list.length,
      value:data
    }])
    Remove_task(id,inprogress_list)
  }
  const classes = useStyles();
      return (

        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Roster</h1>
        </header>
 
        <Grid container spacing={3}>
          <Grid item xs={4}>
              <AddItem Add_Todo_List={Add_Todo_List}/>
              <NewList 
                  alltasks={todo_list} 
                  title={'To-do List'} 
                  Add_inprogress_list={Add_inprogress_list}
                  
              />            
          </Grid>
          <Grid item xs={4}>
              <NewList alltasks={inprogress_list} title={'InProgress'} Add_Complete_list ={Add_Complete_list} /> 
          </Grid>
          <Grid item xs={4}>
              <NewList alltasks={completed_list} title={'Completed'} /> 
          </Grid>
      </Grid>

      </div>
      )
}

export default App;
