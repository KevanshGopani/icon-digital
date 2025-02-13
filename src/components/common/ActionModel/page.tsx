import React, { useState, useRef, useEffect } from "react";

const ActionModel = ({ toggleEditForm }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    // Toggle modal visibility
    const toggleModal = () => setIsOpen(!isOpen);

    // Close modal if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="">
            {/* Button to open modal */}
            <button
                onClick={toggleModal}
            >
                <svg className="cursor-pointer" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor"></path><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"></path><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor"></path></svg>
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    ref={modalRef}
                    className="absolute top-3 z-40 p-4 -right-8 h-auto grid gap-y-3 w-[150px] bg-white shadow-lg"
                >
                    <div className="flex items-center gap-x-3 cursor-pointer"
                        onClick={toggleEditForm} 
                    >
                        <svg
                            stroke="currentColor"
                            fill="#000"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            height="15px"
                            width="15px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"></path>
                        </svg>
                        <p className="text-base text-[#000] font-medium">Edit</p>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <svg
                            stroke="currentColor"
                            fill="#000"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="15px"
                            width="15px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                        </svg>
                        <p className="text-base text-[#000] font-medium">Duplicate</p>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <svg
                            stroke="currentColor"
                            fill="#f74141"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="15px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        </svg>
                        <p className="text-base text-[#f74141] font-medium">Delete</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionModel;
