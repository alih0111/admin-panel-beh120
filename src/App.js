
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">    
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
