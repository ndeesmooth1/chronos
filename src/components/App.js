import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import TasksIndex from "./TasksIndex";
import TasksShow from "./TasksShow";
import Timer from "../utils/Timer";
import Settings from "./Settings";

import { ipcRenderer } from 'electron';



class App extends Component {
  static defaultProps = {
    updateTrayText: () => {},
    onTimerExpire: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, task: "Default", totalTime: 0 }
      ],
      activeTask: null,
      timer: {
        active: false,
        time: 10,
        unit: "seconds",
        display: ""
      }
    }
    
  
    this.onAppClose();

    this.handleDeactivation = this.handleDeactivation.bind(this);
    this.handleActivation = this.handleActivation.bind(this);
  
  }

  // --------------------------------------------------
  // -------- electron event handlers -----------------
  // --------------------------------------------------

  onAppClose = () => {

  };

  updateTrayText = title => {
    ipcRenderer.send("update-timer", title);
  };

  timerHasExpired = () => {
    ipcRenderer.send("update-timer", "");
  };

  getData = () => {

    ipcRenderer.on('data-sent', (event,data) => {
      this.setState(data);
    })

    ipcRenderer.send("ready-for-data");
  }

  componentDidMount() {
    this.initializeTimer();
    this.getData();
    
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillMount() {

  }

  initializeTimer(timerSettings = {}) {
    const { time, unit } = timerSettings;
    const timerConfig = {
      duration: time || this.state.timer.time,
      unit: unit || this.state.timer.unit,
      onDisplayChange: this.handleTimerUpdate,
      onTimerExpiration: this.handleTimerExpiration
    };
    this.timer = new Timer(timerConfig);
  }

  handleTimerUpdate = (newDisplay, reset) => {
    this.setState(prevState => {
      const { timer, activeTask } = prevState;
      const { active } = timer;
      const updateTaskTime = active && !reset.reset;
      return {
        timer: { ...timer, display: newDisplay },

        activeTask: {
          ...activeTask,
          totalTime: updateTaskTime
            ? activeTask.totalTime + 1
            : activeTask.totalTime
        }
      };
    });

    // handler for electron tray title
    this.updateTrayText(newDisplay);
  };

  handleTimerExpiration = () => {
    this.setState({
      timer: { ...this.state.timer, active: false }
    });
    this.timerHasExpired(); // handler for electron Notifications
  };

  createTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
    ipcRenderer.send("create-task", task);
  };

  deleteTask = task => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== task.id)
    });
    ipcRenderer.send("delete-task", task);
  };

  handleSettingsUpdate = newSettings => {
    this.initializeTimer(newSettings);
    this.setState({
      timer: {
        ...this.state.timer,
        ...newSettings,
        display: this.timer.display
      }
    });
    ipcRenderer.send("update-settings", newSettings);
  };

  handleDataReset = defaultState => {
    this.setState(defaultState);
    ipcRenderer.send("reset", defaultState);
  };

  handleActivation = task => {
    this.initializeTimer();
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== task.id),
      activeTask: task,
      timer: {
        ...this.state.timer,
        display: this.timer.display
      }
    });

    console.log(this.state);
  };

  handleDeactivation = activeTask => {
    this.setState({
      tasks: [activeTask, ...this.state.tasks],
      activeTask: null
    });

    console.log(this.state);

    ipcRenderer.send("update-timer", "");
  };

  handleTimerStart = () => {
    this.timer.start(() => {
      // sending a callback so there is no delay in rendering start/stop buttons
      this.setState({
        timer: { ...this.state.timer, active: true }
      });
    });
  };

  handleTimerStop = () => {
    this.timer.stop(() => {
      this.setState({
        timer: { ...this.state.timer, active: false }
      });
    });
  };

  render() {
    const { tasks, activeTask, timer } = this.state;
    return (
      <div style={styles.global}>
        <Header/>
        <div className="container" style={styles.container}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <TasksIndex
                  activeTask={activeTask}
                  onTaskDeactivate={this.handleDeactivation}
                  onTimerStart={this.handleTimerStart}
                  onTimerStop={this.handleTimerStop}
                  timer={timer}
                />
              )}
            />
            <Route
              path="/tasks"
              render={() => (
                <TasksShow
                  tasks={tasks}
                  activeTask={activeTask}
                  createTask={this.createTask}
                  deleteTask={this.deleteTask}
                  onTaskActivate={this.handleActivation}
                  onTaskDeactivate={this.handleDeactivation}
                />
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <Settings
                  timer={timer}
                  handleSubmit={this.handleSettingsUpdate}
                  handleDataReset={this.handleDataReset}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "88vh",
    fontFamily: "'Raleway',sans-serif",
    borderTop: "1px solid #dcdded"
  }, 
  global: {
    fontSize:"16px"
  }
};

export default App;