import React, { Component } from "react";
import moment from "moment";
import "moment-duration-format";

class TasksShow extends Component {
  state = {
    task: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.task) {
      const task = {
        id: ~~(Math.random() * 99999),
        totalTime: 0,
        task: this.state.task
      };
      this.props.createTask(task);
      this.setState({ task: "" });
    }
  };

  renderActiveTask() {
    const { activeTask } = this.props;
    if (activeTask) {
      return (
        <li style={styles.listItem} key={activeTask.id}>
           <span 
           style={styles.lineActive}
           onClick={ () => {
            this.props.onTaskDeactivate(activeTask);
           }
          }
            >
          </span>
          <div style={styles.taskItem}>
            <p>{activeTask.task}</p>
            <p
            >{`Total Time: ${moment
              .duration(activeTask.totalTime, "seconds")
              .format("hh:mm:ss", { trim: false })}`}</p>
          </div>
        </li>
      );
    }
    return null;
  }

  renderTasks() {
    const { activeTask } = this.props
    const { onTaskActivate } = this.props
    const { onTaskDeactivate } = this.props

    function taskDeactivation(param, callback) {
        return new Promise(function (fulfill, reject){
          //do stuff
          fulfill(onTaskDeactivate(activeTask)); //if the action succeeded
          reject(error); //if the action did not succeed
      });
    }

    return this.props.tasks.map(task => {
      return (
        <li className="collection-item avatar"
            style={styles.listItem}
            key={task.id}>
          <span
            style={styles.line}
            onClick={() => {

                if(activeTask) {
                  taskDeactivation(activeTask).then(function(){
                    onTaskActivate(task)
                  })
                
                } else {
                  onTaskActivate(task)
                }
              
              }
            }
          >
          </span>
          <div style={styles.taskItem}>
            <p>{task.task}</p>
            <p
            >{`Total Time: ${moment
              .duration(task.totalTime, "seconds")
              .format("hh:mm:ss", { trim: false })}`}</p>
          </div>
          <span
            style={styles.close}
            onClick={() => this.props.deleteTask(task)}
          >
          ×
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>

        <div className="task-list-header" style={styles.inputContainer}>
          <h3 style={{fontWeight:"500"}}>Add new task</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.task}
              onChange={e => this.setState({ task: e.target.value })}
              style={styles.input}
            />
          </form>
        </div>
        <h3 style={styles.headline}>ALL TASKS</h3>
        <ul className="task-list" style={styles.list}>
          {this.renderActiveTask()}
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    overflow: "auto"
  },
  pointer: {
    cursor: "pointer"
  },
  close: {
    cursor: "pointer",
    color: "#ff0d7f",
    display:"block",
    width:"4%"
  },
  inputContainer: {
    textAlign:"center",
    fontSize:"0.625rem",
    fontWeight:"500"
  },
  input: {
    width:"10rem",
    height:"1.5rem",
    borderRadius:"5px",
    border:"2px solid #e9ebfb"
  },
  list: {
    listStyle: "none",
    padding:"0"
  },
  listItem: {
    position:'relative',
    borderBottom:"1px solid #e9ebfb",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    width: "100%"
  },
  taskItem: {
    width:"81%",
    paddingLeft:"20px"
  },
  headline: {
    textAlign:"center",
    fontWeight:"900",
    fontSize:"0.7rem",
    marginTop:"1.5rem",
    textTransform:"uppercase"
  },
  line: {
    width: "17%",
    height:"2px",
    boxShadow:"0px 2px 4.5px 0.5px rgba(77, 89, 221, 0.11)",
    cursor: "pointer",
    display:"block"
  },
  lineActive: {
    width: "18%",
    height: "2px",
    backgroundColor: "rgb(255, 13, 127)",
    boxShadow: "box-shadow: 0px 6px 29px 0px rgba(77, 89, 221, 0.2)",
    cursor: "pointer"
  }
};

export default TasksShow;