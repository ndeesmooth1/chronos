import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.timer.time,
      unit: props.timer.unit
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  buttonStyle = () => {
    const { time, unit } = this.state;
    const propsTime = this.props.timer.time;
    const propsUnit = this.props.timer.unit;

    if (time == propsTime && unit == propsUnit) {
      // double equals to avoid type check
      return "btn disabled";
    }

    if (this.props.timer.active) {
      return "btn disabled";
    }

    return "btn";
  };

  render() {
    return (
      <div style={styles.container}>
        <ul style={styles.list}>
          <form onSubmit={this.onSubmit} id="settings-form">
            <li style={styles.listItem}>
              <div style={styles.label}>Initial Duration:</div>
              <input
                type="number"
                style={styles.inputContainer}
                min="1"
                value={this.state.time}
                onChange={e => this.setState({ time: e.target.value })}
              />
            </li>
            <li style={styles.listItem}>
              <div style={styles.label}>Units:</div>
              <select
                className="browser-default"
                value={this.state.unit}
                style={styles.selectContainer}
                onChange={e => this.setState({ unit: e.target.value })}
              >
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>
            </li>
          </form>
        </ul>
        <div style={styles.clock}>
          <input 
            disabled
            style={styles.clockCounter}
            value={this.state.time}
          />
          <span style={styles.clockArmLarge}></span>
          <span style={styles.clockArmSmall}></span>
        </div>
        <div style={{display:"flex",flexDirection:"row",width:"75%",margin:"auto"}}>
          <button type="submit" form="settings-form" style={styles.buttonSave}>
            Save
          </button>
          <button style={styles.buttonReset}  onClick={ () => {this.props.handleDataReset(defaultState)}}>
            Reset Data
          </button>
        </div>
      </div>
    );
  }
}


const defaultState = {
  tasks: [
    { id: 1, task: "Default", totalTime: 10 }
  ],
  activeTask: null,
  timer: {
    active: false,
    time: 10,
    unit: "seconds",
    display: ""
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  pointer: {
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding:"1rem 0 0",
    textAlign:"center",
    marginBottom:"0"
  },
  listItem: {
    marginBottom:"30px"
  },
  inputContainer: {
    textAlign:"center",
    fontSize:"0.825rem",
    fontWeight:"900",
    height: "25px",
    width: "95px",
    borderRadius:"10px",
    boxShadow: "inset 0px 8px 13.44px 0.56px rgba(77, 89, 221, 0.15)"
  },
  selectContainer: {
    textAlign:"center",
    fontSize:"0.825rem",
    fontWeight:"500",
    height: "45px",
    width: "100px",
    borderRadius:"10px",
    boxShadow: "inset 0px 8px 13.44px 0.56px rgba(77, 89, 221, 0.15)"
  },
  label: {
    fontSize:"0.9rem",
    marginBottom:"10px"
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


export default Settings;
