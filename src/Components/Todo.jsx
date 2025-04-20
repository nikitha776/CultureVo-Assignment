import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import ViewModal from "./ViewModal";
import { useState } from "react";

const Todo = ({title,desc,date,isCompleted,isStarred,color,onDelete,onEdit,onToggleStar,onToggleComplete}) => {
	const [showModal, setShowModal] = useState(false);

	const handleViewClick = () => { //to handle the view button click
    setShowModal(true); 
  };

	const closeModal = () => { //to close the modal
    setShowModal(false); 
  };
	const isPastDue = new Date(date) < new Date()
  return (
    <div className={` w-[20%] h-[280px] m-4 rounded-xl p-4 px-6 relative ${isPastDue || isCompleted ? "opacity-30" : ""} overflow-hidden break-words`} style={{backgroundColor: color}}>
      <div className="text-xl font-bold my-2">{title}</div>
      <div  className="text-sm mt-2">{desc}</div>
			<div className="absolute bottom-4 left-4 text-sm text-gray-700">{date}</div>
      <div className="absolute bottom-4 right-4 flex gap-3 items-center">
				<button className="cursor-pointer" onClick={handleViewClick}>
					<FaEye/>
				</button>
				<button onClick={onToggleStar} className="cursor-pointer">
					{isStarred ? <FaStar className="text-yellow-500 " /> : <FaStar className="text-gray-500" />}
				</button>
        <button className="cursor-pointer" onClick={onEdit}>
          <FaRegEdit />
        </button>
        <input type="checkbox" className="accent-gray-400 cursor-pointer" checked={isCompleted} onChange={onToggleComplete}/>
        <button className="cursor-pointer" onClick={onDelete}>
          <MdDeleteOutline className="text-xl cursor-pointer"/>
        </button>
      </div>
			{showModal && (
        <ViewModal onClose={closeModal} title={title} desc={desc} date={date} />
      )} {/*showing modal for viewing a todo*/}
    </div>
  );
};

export default Todo;
