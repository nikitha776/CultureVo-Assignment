import React from "react";
import Todo from "./Todo";
import { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import ViewModal from "./ViewModal";

const Body = () => {

	const colors = ["#FDF2B3","#D1EAED","#FFD4A9","#ffe4e1","#ebddf4","#e1f5e1"];
  const [todos, setTodos] = useState([]);
	const [filter,setFilter] = useState("All Tasks")
  const [showModal, setShowModal] = useState(false);
	const [editIdx,setEditIdx] = useState(-1);
	const [viewModal,setViewModal] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState(null)

  const onClose = () => {
    setShowModal(false);
		setViewModal(false)
  };

  const addOrEditTodo = (newTodo) => {   //to add a new todo or edit an existing one
		if(editIdx !== -1) {
			const updatedTodos = [...todos]
			updatedTodos[editIdx] = {...newTodo,color: todos[editIdx].color}
			setTodos(updatedTodos)
			setEditIdx(-1);
		} else {
			const color = colors[todos.length % colors.length]
			setTodos([...todos,{...newTodo,color}])
		}
    setShowModal(false);
  };

	const deleteTodo = (delIdx) => { //to delete a todo
		const updateTodos = todos.filter((_,idx)=>idx !== delIdx)
		setTodos(updateTodos)
	}

	const editTodo = (idx) => { //to edit a todo
		setEditIdx(idx);
		setShowModal(true)
	}

	const onToggleComplete = (idx) => { //to toggle the completion status of a todo
		const updatedTodos = [...todos]
		updatedTodos[idx].isCompleted = !updatedTodos[idx].isCompleted
		setTodos(updatedTodos)
	}

	const onToggleStar = (idx) => { //to toggle the starred status of a todo
		const updatedTodos = [...todos]
		updatedTodos[idx].isStarred = !updatedTodos[idx].isStarred
		setTodos(updatedTodos)
	}

	const filteredTodos = () => { //to filter todos based on the selected filter
		if(filter === "All Tasks") return todos
		else if(filter === "Completed") return todos.filter(todo => todo.isCompleted)
		else if(filter === "Pending") return todos.filter(todo => !todo.isCompleted)
		else if(filter === "Starred") return todos.filter(todo => todo.isStarred)	
	}

	const handleViewClick = (todo) => {

      setSelectedTodo(todo);
      setViewModal(true); // Show ViewModal only if the task is not completed
    
  };


  return (
    <div>
			<Navbar setFilter={setFilter}/>
      {showModal && <Modal onClose={onClose} onSubmit={addOrEditTodo} initials={editIdx !== -1 ? todos[editIdx] : null}/>} {/*showing modal for adding or editing a todo*/}
      <div className="flex flex-wrap md:justify-evenly items-center mt-10">
        {filteredTodos().map((todo, idx) => (
          <Todo
            key={idx}
            title={todo.title}
            desc={todo.desc}
            date={todo.date}
						isStarred={todo.isStarred}
						isCompleted={todo.isCompleted}
						color={todo.color}
						onDelete = {()=>deleteTodo(idx)}
						onEdit = {()=>editTodo(idx)}
						onToggleStar = {() => onToggleStar(idx)}
						onToggleComplete = {() => onToggleComplete(idx)}
						onView={() => handleViewClick(todo)} 
          />
        ))}
        {filter === "All Tasks" && <div
          className="w-[80%] md:w-[20%] md:h-[280px] m-4 bg-[#ECECEC] rounded-full md:rounded-xl flex justify-center items-center text-5xl md:text-8xl font-light cursor-pointer"
          onClick={() => setShowModal(true)}>
          +
        </div>}
      </div>
			{viewModal && selectedTodo && (
        <ViewModal
          onClose={onClose}
          title={selectedTodo.title}
          desc={selectedTodo.desc}
          date={selectedTodo.date}
        />
      )}
    </div>
  );
};

export default Body;
