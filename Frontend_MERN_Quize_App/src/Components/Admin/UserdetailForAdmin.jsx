import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserByAdmin } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserdetailForAdmin = (props) => {
  const dispatch = useDispatch();

  const DeleteUser = (e) => {
    if (e) {
      dispatch(deleteUserByAdmin(e));
      toast("Successfully Deleted the User", {
        type: "success",
      });
    } else {
      toast("You cant delete the User", {
        type: "error",
      });
    }
  };

  return (
    <div className="  w-4/5 m-auto">
      <div className="bg-teal-500 rounded-lg w-56 pl-16 p-4 text-2xl">
        <h1>List of Users</h1>
      </div>
      <div class="flex flex-col container max-w-md -mt-16  w-1/2  bg-teal-500 rounded-lg ml-64">
        <ul class="flex flex-col divide-y w-full">
          {props.data.map((e) => {
            return (
              <div className="dark:bg-gray-800 ">
                <li class="flex flex-row ">
                  <div class="select-none cursor-pointer  flex flex-1 items-center p-4 ">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <a href="#" class="block relative">
                        <img
                          alt="profil"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
                          class="mx-auto object-cover rounded-full h-10 w-10"
                        />
                      </a>
                    </div>
                    <div class="flex-1 pl-1">
                      <div class="font-medium dark:text-white">{e.name}</div>
                      <div class="text-gray-600 dark:text-gray-200 text-sm">
                        {e.email}
                      </div>
                    </div>
                    <div class="justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-200 mr-2 mt-1"
                        onClick={() => DeleteUser(e._id)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <ToastContainer />
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
