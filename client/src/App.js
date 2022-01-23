import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";
import "./App.css";

const App = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div>
      <div className="container">
        <h1>VideoCall App</h1>
        <div className="videoplayer">
          {/* My Own Video */}
          {stream && (
            <div className="myvideo">
              <h4>{name || "Name"}</h4>
              <video playsInline muted={true} autoPlay ref={myVideo}></video>
            </div>
          )}

          {/* User's Video */}
          {callAccepted && !callEnded && (
            <div className="uservideo">
              <h4>{call.name || "Name"}</h4>
              <video playsInline muted={true} autoPlay ref={userVideo}></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
