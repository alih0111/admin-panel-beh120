import { useState, useEffect } from "react";
import { getOneExist } from "../../services/getOneExistService";
import updateExist from "../../services/updateExistService";

export default function EditExist({ editModal, node }) {
  const [exist, setExist] = useState();
  const [newExist, setNewExist] = useState();

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneExist(node.id);
        setExist(data);
        setNewExist(data.text);
      } catch (error) {}
    };
    localFetch();
  }, []);

  const changeHandler = (e) => {
    setNewExist(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    exist.text = newExist;
    try {
      await updateExist(exist.id, exist);
    } catch (error) {}
    window.location.reload();
  };

  return (
    <>
      {/* {editModal == 1 ? ( */}
        <div className="inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-xl w-screen h-screen z-10 absolute ">
          <form
            onSubmit={submitForm}
            className="flex justify-center items-center flex-col mt-10 bg-slate-100 rounded-lg w-80 p-6 mx-auto"
          >
            <div className="flex-col w-52">
              <label
                htmlFor="category-title"
                className="block mb-1 text-slate-400"
              >
                نام موجودیت{" "}
              </label>{" "}
              <div id="container" className="flex gap-4 ">
                <input
                  autocomplete="off"
                  value={newExist}
                  // value={newExist!=undefined?newExist:''}
                  type="text"
                  name="name"
                  id="category-title"
                  className=" rounded-md border-slate-400 border-[1px] text-slate-600 m-0  px-4 h-9 font-medium  outline  outline-1 outline-gray-200 focus:border-blue-500 transition-shadow ease-out focus:shadow-md mb-6 focus:border-2 "
                  onChange={changeHandler}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* <span className=" p-1 rounded-lg border border-indigo-400"> */}{" "}
            <div className="flex gap-2">
              <button
                onClick={() => window.location.reload()}
                className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500"
              >
                انصراف{" "}
              </button>{" "}
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-1 rounded-lg border border-indigo-400 hover:bg-indigo-600 transition-all"
              >
                ثبت تغییرات{" "}
              </button>{" "}
            </div>{" "}
            {/* </span> */} {/* <button type="submit">حذف</button> */}{" "}
          </form>
        </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
}
