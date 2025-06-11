import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../src/components/sandesweb/redux/userSlice";
import ChatContainer from "./components/sandesweb/ChatContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const path = window.location.pathname;
    let jid = null, password = null;

    if (path.includes("user1")) {
      jid = "user1@localhost";
      password = "123456";
    } else if (path.includes("user2")) {
      jid = "user2@localhost";
      password = "123456";
    }

    if (jid && password) {
      dispatch(setCredentials({ jid, password }));
    }
  }, [dispatch]);

  const path = window.location.pathname;

  if (!path.includes("user1") && !path.includes("user2")) {
    return (
      <div className="text-center mt-10 text-lg font-bold">
        ❌ Add `/user1` or `/user2` in the URL
      </div>
    );
  }

  return <ChatContainer />;
}

export default App;
