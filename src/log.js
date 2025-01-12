import { useNavigate } from "react-router-dom";
import NAVBAR from "./MP/navbar";

const Log = () => {
  const nav = useNavigate();
  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        {localStorage.getItem("loggedIn", true) ? (
          <>
            You are already logged in !
            <br />
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                nav("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              LOG-OUT
            </b>
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("loggedIn", true);

              nav("/");
            }}
          >
            LOGIN
          </button>
        )}
      </div>
    </>
  );
};

export default Log;
