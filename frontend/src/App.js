import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import ChatProvider from "./Context/ChatProvider";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </ChatProvider>
  );
}

export default App;
