import React, { Component } from "react";
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(450deg);
  }
`;

const rotateSmall = keyframes`
  from {
    transform: rotate(150deg);
  }

  to {
    transform: rotate(510deg);
  }
`;

const ClockarmLarge = styled.span`
  display: block;
  position: absolute;
  width: 90px;
  height: 2px;
  background: rgb(255, 13, 127);
  top: 0px;
  right: 80px;
  bottom: 0;
  left: 0;
  z-index: 3;
  margin: auto;
  transform: rotate(90deg);
  transform-origin: 100% 0 0px;
  animation:  ${props => props.active ? `${rotate} 60s infinite steps(60) forwards` : ''} 
`;

const ClockarmSmall = styled.span`
  display: block;
  width: 75px;
  height: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 4.5px 0.5px rgba(77, 89, 221, 0.11);
  transform: rotate( 150deg);
  position: absolute;
  top: 113px;
  right: 107px;
  transform-origin: 100% 0 0px;
  animation:  ${props => props.active ? `${rotateSmall} rotate 3600s infinite steps(60) forwards` : ''} 
`;


class TasksIndex extends Component {

  renderActionButtons() {
    if (this.props.timer.active) {
      return (
        <div style={{display:"flex",flexDirection:"row",width:"75%",margin:"auto",justifyContent:"center"}}>
          <button style={{...styles.buttonSave, ...{borderRadius:"10px"}}} onClick={() => {
            this.props.onTimerStop()
            this.setState({animating:false});
            }}>
            Stop Timer
          </button>
        </div>
      );
    }

    return (
      <div style={{display:"flex",flexDirection:"row",width:"75%",margin:"auto"}}>
        <button
          style={styles.buttonSave}
          onClick={() => { 
            this.props.onTimerStart()
            this.setState({animating:true});
          }}
        >
          Start Timer
        </button>
        <button
          style={styles.buttonReset}
          onClick={() => this.props.onTaskDeactivate(this.props.activeTask)}
        >
          Deactivate Task
        </button>
      </div>
    );
  }

  render() {
    const { activeTask, timer } = this.props;

    if (!activeTask) {
      return (
        <div style={styles.container}>
          <h3>
            No Active tasks.
          </h3>
        </div>
      );
    }

    return (
      <div style={{textAlign:"center"}}>
        <h3 style={styles.headlineSmall}>Current task:</h3>
        <h4 style={styles.headlineLarge}>{activeTask.task}</h4>
        <div style={styles.container}>
          <div style={styles.clock}>
            <input 
              disabled
              style={styles.clockCounter}
              value={timer.display}
            />
            <ClockarmLarge active={this.props.timer.active}></ClockarmLarge>
            <ClockarmSmall active={this.props.timer.active}></ClockarmSmall>
          </div>      
        </div>
          {this.renderActionButtons()}
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginBottom: "15px"
  },
  clock: {
    width:"80%",
    background:"url('assets/clock.png')",
    backgroundSize:"cover",
    height:"220px",
    margin:"auto",
    textAlign:"center",
    position:"relative"
  }, 
  clockCounter: {
    textAlign:"center",
    fontSize:"0.825rem",
    fontWeight:"900",
    height: "25px",
    width: "95px",
    borderRadius:"10px",
    boxShadow: "inset 0px 8px 13.44px 0.56px rgba(77, 89, 221, 0.15)",
    position: "relative",
    top: "135px"
  },
  clockArmLarge: {
    display:"block",
    position:"absolute",
    width: "90px",
    height: "2px",
    background:"rgb(255, 13, 127)",
    top: "0px",
    right: "80px",
    bottom: "0",
    left: "0",
    margin: "auto",
    transform: "rotate(90deg)",
    transformOrigin:"100% 0 0px"
  },
  clockArmSmall: {
    width: "75px",
    height: "2px",
    backgroundColor:"rgb(255, 255, 255)",
    boxShadow:"0px 2px 4.5px 0.5px rgba(77, 89, 221, 0.11)",
    transform:"rotate(-35deg)",
    position:"absolute",
    top:"88px",
    right:"45px"
  },
  headlineSmall: {
    fontFamily: "'Raleway',sans-serif",
    fontWeight: "500",
    fontSize: "12px",
    marginTop:"30px"
  },
  headlineLarge: {
    fontFamily: "'Raleway',sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    marginTop:"0"
  },
  buttonSave: {
    width:"50%",
    height:"40px",
    backgroundColor:"#ff0d7f",
    border:"none",
    color:"#fff",
    borderRadius:"10px 0 0 10px",
    cursor:"pointer",
    outline:"none"
  },
  buttonReset: {
    width:"50%",
    height:"40px",
    backgroundColor:"#fff",
    color:"#ff0d7f",
    border:"1px solid #e9ebfb",
    borderRadius:"0 10px 10px 0",
    cursor:"pointer",
    outline:"none"
  }
};


export default TasksIndex;
