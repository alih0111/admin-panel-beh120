import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Evaluation from "./pages/Evaluation/eval";
import Existance from "./pages/Existance/existance"
import Add_Evaluation from "./pages/Add_Evaluation/add_evaluation";
import Existance_tree from "./pages/Existance/existance_tree";
// import EditExist from "./components/Modals/EditExist";
import Set_Mahsol from "./pages/Mahsol/Set_Mahsol";
// import AddExist from "./pages/Existance/AddExist";

const routes = [

  { path: "/set_mahsol", component: Set_Mahsol },
  // { path: "/edit/:id", component: EditExist },
  // { path: "/add/:id", component: AddExist },
  { path: "/existance_tree", component: Existance_tree },
  { path: "/existance", component: Existance },
  { path: "/evaluation", component: Evaluation },
  { path: "/add_evaluation", component: Add_Evaluation },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
