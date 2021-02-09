import React, {useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import {Remove_task} from './utility';
import NewList from './NewList';
import AddItem from './AddItem';
import './App.css';
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
// ALL List data
const [todo_list,settodo_list] = useState([]);
const [inprogress_list,setinprogress_list] = useState([]);
const [completed_list,setcompleted_list] = useState([]);
const [App , setApp] = useState('DayApp')
const [state, setState] = React.useState({ checkedB: false});
const classes = useStyles();
// Add_Task_list adds new task to All_tasks array
const Add_Todo_List = (data) =>{
  settodo_list([...todo_list,{
    id:todo_list.length,
    value:data
  }])
} 
// Add_inprogress_list adds new task to inprogress_list array
// Here spread operator is used to add data to existing array
const Add_inprogress_list = (id,data) =>{
  setinprogress_list([...inprogress_list,{
    id:inprogress_list.length,
    value:data
  }])
  Remove_task(id,todo_list)
}
// Add_Complete_list adds new task to completed_list array
const Add_Complete_list = (id,data) =>{
  setcompleted_list([...completed_list,{
    id:completed_list.length,
    value:data
  }])
  Remove_task(id,inprogress_list)
}
//handleChange is to change background colors for day and night modes
const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
  if(!state.checkedB){
    document.getElementById("root").className='App'
    document.getElementById("App").className='NightApp'
  }else{
    document.getElementById("root").className='App'  
    document.getElementById("App").className=''
  }
};

  
return (
  <div id='App' className="App">
    <header className="App-header">
      <h1 className="App-title">Roster</h1>
      <FormControlLabel
        control={
          <Switch
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          color="primary" /> }
          label={(state.checkedB) ? 'Night Mode' : 'Day Mode' } />
    </header>
    <Grid container spacing={3}>
      <Grid item xs={4}>
          <AddItem Add_Todo_List={Add_Todo_List}/>
          <NewList 
              alltasks={todo_list} 
              title={'To-do List'} 
              Add_inprogress_list={Add_inprogress_list} />            
      </Grid>
      <Grid item xs={4}>
          <NewList alltasks={inprogress_list} title={'InProgress'} Add_Complete_list ={Add_Complete_list} /> 
      </Grid>
      <Grid item xs={4}>
          <NewList alltasks={completed_list} title={'Completed'} /> 
      </Grid>
  </Grid>
</div>
)}
export default App;