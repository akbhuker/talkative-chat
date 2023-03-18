import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

function App() {
  return (
    <div className="App" history={history}>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
