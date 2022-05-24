import { Delete } from "@mui/icons-material";
import React from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

const AdminUsersList = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    await axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${item._id}`, {
        headers: { Authorization: token },
      })
      .then((data) => {
        enqueueSnackbar(data.data.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <>
      <div className="flex justify-between items-center p-3 bg-gray-600 w-[18rem] md:w-[20rem] lg:w-[25rem]  rounded-xl mb-3">
        <h1 className="text-green-100 font-semibold">{item.name}</h1>
        <h1 className="text-green-100 font-semibold">{item.email}</h1>
        <div>
          <Delete
            onClick={handleDelete}
            className="text-green-400 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default AdminUsersList;
