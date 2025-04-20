import React from "react";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({onClose, onSubmit, initials}) => {
	const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

	useEffect(()=>{
		if(initials) { //if initials are passed, set the state with the initials values (when editing a todo)
			setTitle(initials.title)
			setDesc(initials.desc)
			setDate(initials.date)	
		} else { //if no initials are passed, set the state to empty strings (when adding a new todo)
				setTitle("");
				setDesc("");
				setDate("");
		}
	},[initials])

	const handleSubmit = () => {
		if(!title) return; //if title is empty, return
		onSubmit({title,desc,date,isCompleted:false,isStarred:false}) //call the onSubmit function passed from the parent component with the new todo object
		setTitle("")
		setDesc("")
		setDate("")
		onClose()
	}

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] md:w-[30%] rounded-2xl p-4 relative">
        <button className="absolute top-4 left-4 mt-2 text-2xl cursor-pointer" onClick={onClose}>
          <IoClose />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">{initials ? "Edit Todo" : "Add New Todo"}</h2>
        <div className="flex items-center flex-wrap justify-center">
          <input
            type="text"
            placeholder="Title"
            className="my-4 border-2 border-gray-100 focus:border-gray-200 rounded focus:outline-none px-2 py-1 w-[80%]"
						value={title}
						onChange={(e) => setTitle(e.target.value)} required/>
          <textarea
            className="w-[80%] my-4 h-32 border-2 border-gray-100 focus:border-gray-200 rounded focus:outline-none px-2 py-1"
            placeholder="Description"
						value={desc} required
						onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="flex items-center justify-between w-[80%]">
            <input
              type="date"
              className=" border-2 border-gray-100 focus:border-gray-200 my-4 rounded"
							value={date} required
							placeholder="Date"
							onChange={(e) => setDate(e.target.value)}/>
            <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" onClick={handleSubmit}>
              {initials ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Modal;
