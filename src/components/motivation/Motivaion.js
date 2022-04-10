import React from 'react';
import {Component} from 'react';
import ReactPlayer from "react-player";
import "./Motivation.css";
class Motivation extends Component { //komponent klasowy
    constructor() {
      super()
      this.state = {msg:'Where to get motivation from?'}
            
    }
      render() {
      return (
        <div className='contentsDivClass_motivation'>
          <h1 className="title">{this.state.msg} </h1>
          <div className='videoPlayer'>
      <ReactPlayer
      width="80vw"
      height="50vh"
      url="https://youtu.be/yzdU3N0_D6o"
      onPlay={(e) => {console.log('On Play'); }} 
      onPause={(e) => {console.log('On Pause'); }}  onVolumeChange={(e) => {console.log('Volume Change'); }} onWaiting={(e) => {console.log('Waiting'); }} onPointerOut={(e) => {console.log('On pointer out'); }}
      onEnded={(e) => {console.log('Video Ended'); }} />
          </div>
      </div>
      )
      }
  };
  export default Motivation;
