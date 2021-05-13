import './App.css'
// import './recorder.fn'
import './polyfill'
import './media-recorder-support'
import * as Tone from 'tone'


import {
    playC4,q
    playDb4,
    playD4,
    playEb4,
    playE4,
    playF4,
    playGb4,
    playG4,
    playAb4,
    playA4,
    playBb4,
    playB4,
    playC5,
} from "./tone.fn";

function App() {
  return (
      <div>
          <div className="keys">
              <div className="white-key" onClick={playC4}></div>
              <div className="black-key" onClick={playDb4}></div>
              <div className="white-key" onClick={playD4}></div>
              <div className="black-key" onClick={playEb4}></div>
              <div className="white-key" onClick={playE4}></div>
              <div className="white-key" onClick={playF4}></div>
              <div className="black-key" onClick={playGb4}></div>
              <div className="white-key" onClick={playG4}></div>
              <div className="black-key" onClick={playAb4}></div>
              <div className="white-key" onClick={playA4}></div>
              <div className="black-key" onClick={playBb4}></div>
              <div className="white-key" onClick={playB4}></div>
              <div className="white-key" onClick={playC5}></div>
          </div>
          {/*<div className="media-buttons">*/}
          {/*    <button id="recordButton" autocomplete="off" title="Record"placeholder="RECORD"></button>*/}
          {/*    <button disabled id="pause" autocomplete="off" title="Pause" placeholder="PAUSE"></button>*/}
          {/*    <button disabled id="play" autocomplete="off" title="Play" placeholder="PLAY"></button>*/}
          {/*    <button disabled id="stop" autocomplete="off" title="Stop" placeholder="STOP"></button>*/}
          {/*    <button disabled id="save" autocomplete="off" title="Save" placeholder="SAVE"></button>*/}
          {/*</div>*/}
          {/*<div className="user-created-audio">*/}
          {/*    <div id="audio-file"></div>*/}
          {/*</div>*/}
      </div>
  );
}

export default App;
