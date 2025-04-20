import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Todo = ({title,desc,date,isCompleted,isStarred,color,onDelete,onEdit,onToggleStar,onToggleComplete,onView}) => {
  const isPastDue = new Date(date) < new Date();
  return (
    <>
      <div
        className={`w-[80%] md:w-[20%] md:h-[280px] m-4 rounded-xl p-4 px-6 relative ${
          isPastDue || isCompleted ? "opacity-30" : ""
        } overflow-hidden break-words `}
        style={{ backgroundColor: color }}>
        <div className="text-xl font-bold my-2">{title}</div>
        <div className="text-sm mt-2 mb-8 md:m-0">{desc}</div>
        <div className="absolute bottom-4 left-4 text-sm text-gray-700">
          {date}
        </div>
        <div className="absolute bottom-4 right-4 flex gap-3 items-center sm:mt-8">
          <button className="cursor-pointer" onClick={onView}>
            <FaEye />
          </button>
          <button onClick={onToggleStar} className="cursor-pointer">
            {isStarred ? (
              <FaStar className="text-yellow-500 " />
            ) : (
              <FaStar className="text-gray-500" />
            )}
          </button>
          <button className="cursor-pointer" onClick={onEdit}>
            <FaRegEdit />
          </button>
          <input
            type="checkbox"
            className="accent-gray-400 cursor-pointer"
            checked={isCompleted}
            onChange={onToggleComplete}
          />
          <button className="cursor-pointer" onClick={onDelete}>
            <MdDeleteOutline className="text-xl cursor-pointer" />
          </button>
        </div>
      </div>
     
    </>
  );
};

export default Todo;

// import React from "react";
// import { FaRegEdit } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";
// import { FaStar } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";

// const Todo = ({
//   title,
//   desc,
//   date,
//   isCompleted,
//   isStarred,
//   color,
//   onDelete,
//   onEdit,
//   onToggleStar,
//   onToggleComplete,
//   onView,
// }) => {
//   const isPastDue = new Date(date) < new Date();
  
//   return (
//     <div
//       className={`w-full sm:w-1/2 md:w-[20%] m-4 rounded-xl p-4 px-6 relative ${
//         isPastDue || isCompleted ? "opacity-30" : ""
//       } overflow-hidden break-words`}
//       style={{ backgroundColor: color }}
//     >
//       <div className="text-xl font-bold my-2">{title}</div>
//       <div className="text-sm mt-2">{desc}</div>
//       <div className="absolute bottom-4 left-4 text-sm text-gray-700">{date}</div>

//       {/* Responsive flex container for actions */}
//       <div className="absolute bottom-4 right-4 flex flex-wrap gap-3 items-center justify-between w-full sm:w-auto">
//         <button className="cursor-pointer" onClick={onView}>
//           <FaEye />
//         </button>
//         <button onClick={onToggleStar} className="cursor-pointer">
//           {isStarred ? (
//             <FaStar className="text-yellow-500" />
//           ) : (
//             <FaStar className="text-gray-500" />
//           )}
//         </button>
//         <button className="cursor-pointer" onClick={onEdit}>
//           <FaRegEdit />
//         </button>
//         <input
//           type="checkbox"
//           className="accent-gray-400 cursor-pointer"
//           checked={isCompleted}
//           onChange={onToggleComplete}
//         />
//         <button className="cursor-pointer" onClick={onDelete}>
//           <MdDeleteOutline className="text-xl cursor-pointer" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Todo;
