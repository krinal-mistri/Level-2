const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");

  const overdue = () => {
    return all.filter((item) => item.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > today);
  };

  
  const toDisplayableList = (list) =>{
    return list.map((list)=>{
    const complttionStatus = item.completed ? "[x]" : "";
    const displayedDate = item.dueDate === new Date().toLocaleDateString("en-CA") ? "" : item.dueDate;
    return `${complttionStatus} ${item.title} ${displayedDate}`
     } )
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;