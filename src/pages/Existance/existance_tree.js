import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/getAllCategoryService";
import Tree2 from "./tree/Tree2";
import Tree_Drag2 from "./tree/tree_pro";
import AddExistNoP from "../../components/Modals/AddExistNoP";

export default function Existance_tree() {
  let [mainCategories1, setMainCategories1] = useState([]);
  let [tree, setTree] = useState({});
  const [tree_AllShow_clicked, setTree_AllShow_clicked] = useState(false);
  const [treeShow, setTreeShow] = useState(0);
  const [dragableTree, setDragableTree] = useState(0);
  const [addNoP, setAddNoP] = useState(0);

  // get categories
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getAllCategories();
      setMainCategories1(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  // change plain data to treeview
  useEffect(() => {
    make_tree();
  }, [mainCategories1]);

  let tree5;
  const make_tree = () => {
    if (mainCategories1.length) {
      tree5 = (function (mainCategories1, root) {
        var t = {};
        mainCategories1.forEach((o) => {
          Object.assign((t[o.id] = t[o.id] || {}), o);
          t[o.parent] = t[o.parent] || {};
          t[o.parent].children = t[o.parent].children || [];
          t[o.parent].children.push(t[o.id]);
        });
        return t[root].children;
      })(mainCategories1, 0);
    }
    setTree(tree5);
  };
  // End change plain data to treeview

  const tree_AllShow = () => {
    if (tree_AllShow_clicked) {
      setTree_AllShow_clicked(false);
      setTreeShow(2);
    } else {
      setTree_AllShow_clicked(true);
      setTreeShow(1);
    }
  };

  const dragableTreeHandler = () => {
    if (dragableTree) setDragableTree(0);
    else setDragableTree(1);
  };

  const AddNoPHandler = () => {
    setAddNoP(1);
  };

  return (
    <>
      {/* header */}
      <div className="flex justify-center items-center py-10">
        <h2 className="">درخت دسته بندی ها</h2>
      </div>
      {/* content */}
      <div className="flex gap-2 justify-center mx-2">
        {/* Add Existance with NoParent */}
        <button
          className="AddNoP my-4 border hover:border-indigo-400 hover:bg-slate-200 hover:shadow-lg transition-all bg-white px-4 py-2 rounded-lg"
          onClick={AddNoPHandler}
        >
          <AddExistNoP addNoP={addNoP} />
          افزودن موجودیت
        </button>
        {/* Show All Level Of Tree treeshow == 1 means tree is open*/}
        <button
          className="heoo my-4 bg-white px-4 py-2 rounded-lg border hover:border-indigo-400 hover:bg-slate-200 hover:shadow-lg transition-all"
          onClick={tree_AllShow}
        >
          {treeShow == 1 ? "بستن درخت" : "نمایش کامل درخت"}
        </button>
        {/* Set Pro Tree or Simple One */}
        <button
          className="heoo my-4 bg-white px-4 py-2 rounded-lg border hover:border-indigo-400 hover:bg-slate-200 hover:shadow-lg transition-all"
          onClick={dragableTreeHandler}
        >
          {dragableTree == 1 ? "درخت ساده" : "درخت پیشرفته"}
        </button>
      </div>

      {dragableTree == 1 ? (
        <Tree_Drag2 />
      ) : (
        <Tree2 data={tree} treeShow={treeShow} />
      )}
    </>
  );
}
