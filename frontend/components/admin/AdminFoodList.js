import { Cancel, Delete, Edit, Image } from "@mui/icons-material";
import React, { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Modal } from "@mui/material";

const AdminFoodList = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = async () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    await axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/food/${item._id}`, {
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = JSON.parse(window.localStorage.getItem("token"));
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );
    formData.append("cloud_name", `${process.env.NEXT_PUBLIC_CLOUD_NAME}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_API}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/food/${item._id}`,
        {
          name,
          category,
          cost,
          description,
          image: data.secure_url,
        },
        {
          headers: { Authorization: token },
        }
      )
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
        <div>
          <Edit
            onClick={() => setOpenModal(true)}
            className="text-green-400 cursor-pointer"
          />
          <Delete
            onClick={handleDelete}
            className="text-green-400 ml-3 cursor-pointer"
          />
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <div className="h-full w-full md:h-[600px] md:w-[450px] border-none rounded-lg outline-none bg-gray-700 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center relative justify-center h-full">
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleUpdate}
                >
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                    type="text"
                    placeholder="Food name"
                  />
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                    type="text"
                    placeholder="Category"
                  />
                  <input
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                    type="text"
                    placeholder="Price"
                  />
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm w-full"
                    type="text"
                    placeholder="Description"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <label htmlFor="image">
                      <Image className="text-green-500 text-3xl cursor-pointer" />{" "}
                      <h1 className="text-white text-sm font-semibold mt-2 mb-3">
                        {selectedImage.name}
                      </h1>
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                      className="opacity-0 w-48"
                      id="image"
                    />
                  </div>
                  <input
                    type="submit"
                    value={"Update"}
                    className="bg-white text-green-500 font-bold p-3 outline-none rounded-lg w-full cursor-pointer mt-3 hover:bg-green-400 hover:text-white transition duration-300 ease-in"
                  />
                </form>
                <div className="absolute top-2 left-2 flex justify-center items-center bg-gray-700 h-10 w-10 rounded-full cursor-pointer">
                  <Cancel
                    className="text-3xl"
                    onClick={() => setOpenModal(false)}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminFoodList;
