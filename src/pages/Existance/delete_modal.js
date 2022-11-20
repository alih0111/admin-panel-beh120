import { useState, useEffect } from "react";
import "./tree.css";
import { deleteCategory } from "../../services/deleteCategoryService";
import { getAllCategories } from "../../services/getAllCategoryService";
import updateExist from "../../services/updateExistService";

export default function Modal_Tree({ node }) {
  let [mainData, setMainData] = useState();
  const [checkVal, setCheckVal] = useState(false);

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getAllCategories();
        setMainData(data);
      } catch (error) {}
    };
    localFetch();
  }, []);

  const deleteHandler = async (e, node) => {
    e.preventDefault();
    if (checkVal) {
      let i = 0;
      mainData.map(async (item) => {
        if (item.parent == node.id) {
          i++;
          item.parent = node.parent;
          try {
            await updateExist(item.id, item);
          } catch (error) {}
        }
      });
      if (i < 2) {
        try {
          await deleteCategory(node.id);
          window.location.reload();
        } catch (error) {}
      }
    } else {
      try {
        deleteHandlerChild(node.id, node);
      } catch (error) {}
    }
  };

  const deleteHandlerChild = async (last_id, node) => {
    mainData.map(async (item) => {
      if (item.parent == last_id) {
        await deleteHandlerChild(item.id);
      } else {
        window.location.reload();
      }
    });
    await deleteCategory(last_id);
  };

  const childList = (id) => {
    let cc = [];
    if (mainData)
      mainData.map((item) => {
        if (item.parent == id) cc.push(item.text);
      });
    if (cc.length > 0){
      let yoyo= document.querySelector('.checkbox_input')
      yoyo.classList.remove('hidden')
      yoyo.classList.add('flex')
      return { __html: `زیر شاخه هایی که حذف خواهند شد:  ${cc}` };
    }
  };

  const checkboxHandler = () => {
    let c = document.getElementById("checkbox_save_children");
    if (c.checked == true) {
      setCheckVal(true);
    } else {
      setCheckVal(false);
    }
  };

  return (
    <div className="inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-xl w-screen h-screen z-10 absolute ">
      <div className="z-20 absolute flex justify-center items-center flex-col bg-slate-100 rounded-lg w-80 p-6 mx-auto">
        <div className="flex-col">
          <div className="block mb-1 text-slate-400">
            نام موجودیت / دسته بندی{" "}
          </div>{" "}
          <div
            id="container"
            className="flex flex-col items-center justify-center gap-4 "
          >
            <p className="text-slate-700 border border-slate-500 rounded-lg flex mx-auto py-2 px-6 m-3 mb-1">
              {node.text}
            </p>
            <div
              className="text-gray-600 mb-3"
              dangerouslySetInnerHTML={childList(node.id)}
            />
          </div>{" "}
          <div className="checkbox_input hidden gap-2 mb-4">
            <input
              onClick={checkboxHandler}
              type="checkbox"
              id="checkbox_save_children"
            />
            <label className="text-slate-700" htmlFor="checkbox_save_children">
              زیرشاخه ها باقی بمانند
            </label>
          </div>
        </div>{" "}
        <div className="flex gap-2">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-transparent text-slate-500 px-4 py-1 rounded-lg border border-slate-500"
          >
            انصراف{" "}
          </button>{" "}
          <button
            onClick={(e) => deleteHandler(e, node)}
            className="bg-transparent text-red-500 px-4 py-1 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition-all"
          >
            حذف{" "}
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
