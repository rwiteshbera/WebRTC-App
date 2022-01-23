import React, { useContext, useState } from "react";
import { SocketContext } from "./SocketContext";
import { Button, Container, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const App = () => {
  const {
    me,
    name,
    setName,
    callAccepted,
    myVideo,
    userVideo,
    callUser,
    leaveCall,
    callEnded,
    stream,
    call,
    answerCall,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <div className="main">
        <h1>VideoCall App</h1>
        <Container>
          <Row>
            <Col>
              {/* My Own Video */}
              {stream && (
                <div className="myvideo">
                  <h4>{name || "Name"}</h4>
                  <video
                    playsInline
                    muted={true}
                    autoPlay
                    ref={myVideo}
                  ></video>
                </div>
              )}
            </Col>

            <Col>
              {/* User's Video */}
              {callAccepted && !callEnded && (
                <div className="uservideo">
                  <h4>{call.name || "Name"}</h4>
                  <video
                    playsInline
                    muted={true}
                    autoPlay
                    ref={userVideo}
                  ></video>
                </div>
              )}
            </Col>
          </Row>
        </Container>

        <div className="box">
          <div className="options">
            <form action="" noValidate autoComplete="off">
              <input
                placeholder="Your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <Button className="btn btn-primary">Copy Id</Button>
              </CopyToClipboard>

              <input
                type="text"
                onChange={(e) => setIdToCall(e.target.value)}
                value={idToCall}
              />

              {callAccepted && !callEnded ? (
                <Button className="btn btn-danger" onClick={leaveCall}>
                  Hang Up
                </Button>
              ) : (
                <Button
                  className="btn btn-success"
                  onClick={() => {
                    callUser(idToCall);
                  }}
                >
                  Call
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="notification">
        {call.isReceivedCall && !callAccepted && (
          <div>
            <h3>{call.name} is calling.</h3>
            <Button className="btn btn-primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
