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
    else if (path.includes("user3")) {
      jid = "user3@localhost";
      password = "123456";
    }
    else if (path.includes("user4")) {
      jid = "user4@localhost";
      password = "123456";
    }
    else if (path.includes("user5")) {
      jid = "user5@localhost";
      password = "123456";
    }

    if (jid && password) {
      dispatch(setCredentials({ jid, password }));
    }
  }, [dispatch]);

  const path = window.location.pathname;

  if (!path.includes("user1") && !path.includes("user2") && !path.includes("user3") && !path.includes("user4")&& !path.includes("user5")) {
    return (
      <div className="text-center mt-10 text-lg font-bold">
        ❌ Add User in the URL
      </div>
    );
  }

  return <ChatContainer />;
}

export default App;