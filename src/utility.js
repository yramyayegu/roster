export function Remove_task(id,list) {
  if (id > -1) { 
      list.splice(id, 1);
    }
    let i = 0;
    for (let value of Object.values(list)) {
      value.id = i++;  
    }
    return list;
}
