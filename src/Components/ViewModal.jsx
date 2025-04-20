import React from "react";

const ViewModal = ({ onClose, title, desc, date }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center break-words z-50"> 
      <div className="bg-white w-[90%] md:w-1/3 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm mb-4">{desc}</p>
        <div className="text-sm text-gray-600 mb-4">{date}</div>
        <button 
          onClick={onClose} //to close the modal
          className="bg-[#ff8a00] text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
