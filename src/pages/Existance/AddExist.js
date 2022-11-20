import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addNewCategory } from "../../services/addNewCategoryService";
import updateExist from "../../services/updateExistService";

export default function AddExist({ node }) {
  const [newExist, setNewExist] = useState();
  // let [fileObj, setFileObj] = useState({ id: 0, NAME: "0", PARENTID: 0 });
  let [fileObj, setFileObj] = useState({ id: 0, text: "0", parent: 0 });
  let [id_url, setId_url] = useState(0);
  const [checkVal, setCheckVal] = useState(false);

  const changeHandler = (e) => {
    setNewExist(e.target.value);
  };

  const checkboxHandler = () => {
    let c = document.getElementById("add_parent_checkbox");
    if (c.checked == true) {
      setCheckVal(true);
    } else {
      setCheckVal(false);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (newExist == "" || newExist == undefined) {
      alert("تکمیل فیلد اجباری است");
      return;
    }
    let id = uuid();

    // checkbox checked
    if (checkVal) {
      id_url = node.parent;
      let node2 = {
        id: node.id,
        text: node.text,
        parent: id,
        droppable: node.droppable,
      };
      try {
        await updateExist(node.id, node2);
      } catch (error) {}
    } else {
      id_url = node.id;
      let node2 = {
        id: node.id,
        text: node.text,
        parent: node.parent,
        droppable: true,
      };
      try {
        await updateExist(node.id, node2);
      } catch (error) {}
    }
    if (checkVal) {
      fileObj = { id: id, text: newExist, parent: 0, droppable: true };
      fileObj.parent = id_url;
    } else {
      fileObj = { id: id, text: newExist, parent: 0, droppable: false };
      fileObj.parent = id_url;
    }
    try {
      await addNewCategory(fileObj);
    } catch (error) {}
    window.location.reload();
  };

  return (
    <>
      <div className="inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-xl w-full h-full z-10 absolute ">
        <form
          className="z-20 absolute flex justify-center items-center flex-col bg-slate-100 rounded-lg w-80 p-6 mx-auto"
        >
          <div className="flex-col w-52">
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              نام دسته بندی{" "}
            </label>{" "}
            <div id="container" className="flex gap-4 ">
              <input
                autocomplete="off"
                value={newExist}
                type="text"
                name="name"
                id="category-title"
                autofocus
                className=" rounded-md border-slate-400 border-[1px] text-slate-600 m-0  px-4 h-9 font-medium  outline  outline-1 outline-gray-200 focus:border-blue-500 transition-shadow ease-out focus:shadow-md mb-6 focus:border-2 "
                onChange={changeHandler}
              />{" "}
            </div>{" "}
            <div className="flex mb-4 gap-2">
              <input
                id="add_parent_checkbox"
                type="checkbox"
                onClick={checkboxHandler}
              />
              <label htmlFor="add_parent_checkbox" className="text-gray-600">
                پدر اضافه شود
              </label>
            </div>
          </div>{" "}
          {/* buttons */}
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500"
            >
              انصراف{" "}
            </button>{" "}
            <button
              type="submit"
              onClick={submitForm}
              className="bg-transparent text-green-700 px-6 py-1 rounded-lg border border-green-700 hover:bg-green-500 hover:text-white transition-all"
            >
              ثبت{" "}
            </button>{" "}
          </div>{" "}
        </form>
      </div>
    </>
  );
}
