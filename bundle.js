/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment-duration-format");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(_reactRouterDom.Route, {
    component: function component() {
      return _react2.default.createElement(_App2.default, null);
    }
  })
), document.getElementById("root"));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"tasks":[{"id":33929,"task":"noniezle","totalTime":0},{"id":77049,"task":"eeema","totalTime":0},{"id":31870,"task":"mordullo","totalTime":0},{"id":3,"task":"Build App3","totalTime":1000},{"id":4,"task":"Build App4","totalTime":10000},{"id":5,"task":"Build App5","totalTime":100000}],"activeTask":null,"timer":{"active":false,"time":10,"unit":"seconds","display":""}}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _TasksIndex = __webpack_require__(9);

var _TasksIndex2 = _interopRequireDefault(_TasksIndex);

var _TasksShow = __webpack_require__(10);

var _TasksShow2 = _interopRequireDefault(_TasksShow);

var _Timer = __webpack_require__(11);

var _Timer2 = _interopRequireDefault(_Timer);

var _Settings = __webpack_require__(8);

var _Settings2 = _interopRequireDefault(_Settings);

var _electron = __webpack_require__(12);

var _data = __webpack_require__(5);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APP_DATA = _data2.default;

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onAppClose = function () {};

    _this.updateTrayText = function (title) {
      _electron.ipcRenderer.send("update-timer", title);
    };

    _this.timerHasExpired = function () {
      _electron.ipcRenderer.send("update-timer", "");
    };

    _this.handleTimerUpdate = function (newDisplay, reset) {
      _this.setState(function (prevState) {
        var timer = prevState.timer,
            activeTask = prevState.activeTask;
        var active = timer.active;

        var updateTaskTime = active && !reset.reset;
        return {
          timer: _extends({}, timer, { display: newDisplay }),

          activeTask: _extends({}, activeTask, {
            totalTime: updateTaskTime ? activeTask.totalTime + 1 : activeTask.totalTime
          })
        };
      });

      // handler for electron tray title
      _this.updateTrayText(newDisplay);
    };

    _this.handleTimerExpiration = function () {
      _this.setState({
        timer: _extends({}, _this.state.timer, { active: false })
      });
      _this.timerHasExpired(); // handler for electron Notifications
    };

    _this.createTask = function (task) {
      _this.setState({
        tasks: [task].concat(_toConsumableArray(_this.state.tasks))
      });
      _electron.ipcRenderer.send("create-task", task);
    };

    _this.deleteTask = function (task) {
      _this.setState({
        tasks: _this.state.tasks.filter(function (item) {
          return item.id !== task.id;
        })
      });
      _electron.ipcRenderer.send("delete-task", task);
    };

    _this.handleSettingsUpdate = function (newSettings) {
      _this.initializeTimer(newSettings);
      _this.setState({
        timer: _extends({}, _this.state.timer, newSettings, {
          display: _this.timer.display
        })
      });
    };

    _this.handleDataReset = function () {
      _this.setState(_extends({}, _data2.default));
    };

    _this.handleActivation = function (task) {
      _this.initializeTimer();
      _this.setState({
        tasks: _this.state.tasks.filter(function (item) {
          return item.id !== task.id;
        }),
        activeTask: task,
        timer: _extends({}, _this.state.timer, {
          display: _this.timer.display
        })
      });
    };

    _this.handleDeactivation = function (activeTask) {
      _this.setState({
        tasks: [activeTask].concat(_toConsumableArray(_this.state.tasks)),
        activeTask: null
      });
      _electron.ipcRenderer.send("update-timer", "");
    };

    _this.handleTimerStart = function () {
      _this.timer.start(function () {
        // sending a callback so there is no delay in rendering start/stop buttons
        _this.setState({
          timer: _extends({}, _this.state.timer, { active: true })
        });
      });
    };

    _this.handleTimerStop = function () {
      _this.timer.stop(function () {
        _this.setState({
          timer: _extends({}, _this.state.timer, { active: false })
        });
      });
    };

    _this.state = _data2.default;

    _this.onAppClose();
    return _this;
  }

  // --------------------------------------------------
  // -------- electron event handlers -----------------
  // --------------------------------------------------

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "initializeTimer",
    value: function initializeTimer() {
      var timerSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var time = timerSettings.time,
          unit = timerSettings.unit;

      var timerConfig = {
        duration: time || this.state.timer.time,
        unit: unit || this.state.timer.unit,
        onDisplayChange: this.handleTimerUpdate,
        onTimerExpiration: this.handleTimerExpiration
      };
      this.timer = new _Timer2.default(timerConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tasks = _state.tasks,
          activeTask = _state.activeTask,
          timer = _state.timer;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "div",
          { className: "container", style: styles.container },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, {
              exact: true,
              path: "/",
              render: function render() {
                return _react2.default.createElement(_TasksIndex2.default, {
                  activeTask: activeTask,
                  onTaskDeactivate: _this2.handleDeactivation,
                  onTimerStart: _this2.handleTimerStart,
                  onTimerStop: _this2.handleTimerStop,
                  timer: timer
                });
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, {
              path: "/tasks",
              render: function render() {
                return _react2.default.createElement(_TasksShow2.default, {
                  tasks: tasks,
                  activeTask: activeTask,
                  createTask: _this2.createTask,
                  deleteTask: _this2.deleteTask,
                  onTaskActivate: _this2.handleActivation
                });
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, {
              path: "/settings",
              render: function render() {
                return _react2.default.createElement(_Settings2.default, {
                  timer: timer,
                  handleSubmit: _this2.handleSettingsUpdate,
                  handleDataReset: _this2.handleDataReset
                });
              }
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.defaultProps = {
  updateTrayText: function updateTrayText() {},
  onTimerExpire: function onTimerExpire() {}
};


var styles = {
  container: {
    height: "88vh"
  }
};

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: "/settings",
          className: "brand-logo right",
          style: { cursor: "pointer" }
        },
        _react2.default.createElement(
          "i",
          { className: "material-icons" },
          "settings"
        )
      ),
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            "Active Task"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/tasks" },
            "All Tasks"
          )
        )
      )
    )
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.handleSubmit(_this.state);
    };

    _this.buttonStyle = function () {
      var _this$state = _this.state,
          time = _this$state.time,
          unit = _this$state.unit;

      var propsTime = _this.props.timer.time;
      var propsUnit = _this.props.timer.unit;

      if (time == propsTime && unit == propsUnit) {
        // double equals to avoid type check
        return "btn disabled";
      }

      if (_this.props.timer.active) {
        return "btn disabled";
      }

      return "btn";
    };

    _this.state = {
      time: props.timer.time,
      unit: props.timer.unit
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "ul",
          { className: "collection with-header" },
          _react2.default.createElement(
            "li",
            { className: "collection-header" },
            "Settings"
          ),
          _react2.default.createElement(
            "form",
            { onSubmit: this.onSubmit },
            _react2.default.createElement(
              "li",
              { className: "collection-item" },
              _react2.default.createElement(
                "p",
                null,
                "Initial Duration"
              ),
              _react2.default.createElement("input", {
                type: "number",
                min: "1",
                value: this.state.time,
                onChange: function onChange(e) {
                  return _this2.setState({ time: e.target.value });
                }
              })
            ),
            _react2.default.createElement(
              "li",
              { className: "collection-item" },
              _react2.default.createElement(
                "p",
                null,
                "Units"
              ),
              _react2.default.createElement(
                "select",
                {
                  className: "browser-default",
                  value: this.state.unit,
                  onChange: function onChange(e) {
                    return _this2.setState({ unit: e.target.value });
                  }
                },
                _react2.default.createElement(
                  "option",
                  { value: "seconds" },
                  "Seconds"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "minutes" },
                  "Minutes"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "hours" },
                  "Hours"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "collection-item right" },
              _react2.default.createElement(
                "button",
                { type: "submit", className: this.buttonStyle() },
                "Save"
              )
            )
          )
        ),
        _react2.default.createElement(
          "button",
          { className: "btn red", onClick: this.props.handleDataReset },
          "Reset Data"
        )
      );
    }
  }]);

  return Settings;
}(_react.Component);

var styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  pointer: {
    cursor: "pointer"
  }
};

exports.default = Settings;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TasksIndex = function (_Component) {
  _inherits(TasksIndex, _Component);

  function TasksIndex() {
    _classCallCheck(this, TasksIndex);

    return _possibleConstructorReturn(this, (TasksIndex.__proto__ || Object.getPrototypeOf(TasksIndex)).apply(this, arguments));
  }

  _createClass(TasksIndex, [{
    key: "renderActionButtons",
    value: function renderActionButtons() {
      var _this2 = this;

      if (this.props.timer.active) {
        return _react2.default.createElement(
          "div",
          { style: styles.buttonContainer },
          _react2.default.createElement(
            "button",
            { className: "btn red", onClick: function onClick() {
                return _this2.props.onTimerStop();
              } },
            "Stop Timer"
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { style: styles.buttonContainer },
        _react2.default.createElement(
          "button",
          {
            style: styles.button,
            className: "btn green",
            onClick: function onClick() {
              return _this2.props.onTimerStart();
            }
          },
          "Start Timer"
        ),
        _react2.default.createElement(
          "button",
          {
            className: "btn",
            onClick: function onClick() {
              return _this2.props.onTaskDeactivate(_this2.props.activeTask);
            }
          },
          "Deactivate Task"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          activeTask = _props.activeTask,
          timer = _props.timer;


      if (!activeTask) {
        return _react2.default.createElement(
          "div",
          { style: styles.container },
          _react2.default.createElement(
            "h3",
            null,
            "No Active tasks."
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "h2",
          null,
          "Time Left " + timer.display
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Current Task: " + activeTask.task
        ),
        this.renderActionButtons()
      );
    }
  }]);

  return TasksIndex;
}(_react.Component);

var styles = {
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
  }
};

exports.default = TasksIndex;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TasksShow = function (_Component) {
  _inherits(TasksShow, _Component);

  function TasksShow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TasksShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TasksShow.__proto__ || Object.getPrototypeOf(TasksShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      task: ""
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.state.task) {
        var task = {
          id: ~~(Math.random() * 99999),
          totalTime: 0,
          task: _this.state.task
        };
        _this.props.createTask(task);
        _this.setState({ task: "" });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TasksShow, [{
    key: "renderActiveTask",
    value: function renderActiveTask() {
      var activeTask = this.props.activeTask;

      if (activeTask) {
        return _react2.default.createElement(
          "li",
          { className: "collection-item avatar", key: activeTask.id },
          _react2.default.createElement(
            "i",
            { className: "material-icons circle green" },
            "grade"
          ),
          _react2.default.createElement(
            "p",
            { className: "title" },
            activeTask.task
          ),
          _react2.default.createElement(
            "p",
            null,
            "Total Time: " + _moment2.default.duration(activeTask.totalTime, "seconds").format("hh:mm:ss", { trim: false })
          )
        );
      }
      return null;
    }
  }, {
    key: "renderTasks",
    value: function renderTasks() {
      var _this2 = this;

      return this.props.tasks.map(function (task) {
        return _react2.default.createElement(
          "li",
          { className: "collection-item avatar", key: task.id },
          _react2.default.createElement(
            "i",
            {
              className: _this2.props.activeTask ? "hide" : "material-icons circle grey",
              style: styles.pointer,
              onClick: function onClick() {
                return _this2.props.onTaskActivate(task);
              }
            },
            "grade"
          ),
          _react2.default.createElement(
            "p",
            { className: "title" },
            task.task
          ),
          _react2.default.createElement(
            "p",
            null,
            "Total Time: " + _moment2.default.duration(task.totalTime, "seconds").format("hh:mm:ss", { trim: false })
          ),
          _react2.default.createElement(
            "i",
            {
              style: styles.pointer,
              className: "material-icons secondary-content",
              onClick: function onClick() {
                return _this2.props.deleteTask(task);
              }
            },
            "delete"
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "ul",
          { className: "collection with-header" },
          _react2.default.createElement(
            "li",
            { className: "collection-header" },
            _react2.default.createElement(
              "form",
              { onSubmit: this.handleSubmit },
              _react2.default.createElement("input", {
                type: "text",
                placeholder: "Add a task",
                value: this.state.task,
                onChange: function onChange(e) {
                  return _this3.setState({ task: e.target.value });
                }
              })
            )
          ),
          this.renderActiveTask(),
          this.renderTasks()
        )
      );
    }
  }]);

  return TasksShow;
}(_react.Component);

var styles = {
  container: {
    height: "100%",
    overflow: "scroll"
  },
  pointer: {
    cursor: "pointer"
  }
};

exports.default = TasksShow;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer(config) {
    _classCallCheck(this, Timer);

    var _validateConfigObject = this.validateConfigObject(config),
        duration = _validateConfigObject.duration,
        unit = _validateConfigObject.unit,
        onDisplayChange = _validateConfigObject.onDisplayChange,
        onTimerExpiration = _validateConfigObject.onTimerExpiration;

    this.initialDuration = this.getInitialDuration(duration, unit);
    this.duration = this.initialDuration;
    this.delay = 100;
    this.display = this.getTimeDisplay();
    this.interval = null;
    this.startTime = null;
    this.onDisplayChange = onDisplayChange;
    this.onTimerExpiration = onTimerExpiration;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(cb) {
      var _this = this;

      if (!this.interval) {
        this.startTime = (0, _moment2.default)();
        this.interval = setInterval(function () {
          _this.duration -= _this.delay;
          _this.updateDisplay();
          _this.listenForExpiration();
        }, this.delay);
        return cb ? cb() : null;
      }
    }
  }, {
    key: "stop",
    value: function stop(cb) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
        return cb ? cb() : null;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      console.log((0, _moment2.default)() - this.startTime);
      this.stop();
      this.duration = this.initialDuration;
      this.updateDisplay(true);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var newDisplay = this.getTimeDisplay();
      if (this.display !== newDisplay) {
        this.display = newDisplay;
        this.onDisplayChange(this.display, { reset: reset });
      }
    }
  }, {
    key: "listenForExpiration",
    value: function listenForExpiration() {
      if (this.duration <= 0) {
        this.reset();
        this.onTimerExpiration();
      }
    }
  }, {
    key: "getInitialDuration",
    value: function getInitialDuration(duration, unit) {
      return _moment2.default.duration(duration, unit).asMilliseconds();
    }
  }, {
    key: "getTimeDisplay",
    value: function getTimeDisplay() {
      return _moment2.default.duration(this.duration).format("hh:mm:ss", { trim: false });
    }
  }, {
    key: "validateConfigObject",
    value: function validateConfigObject(config) {
      var unit = config.unit,
          onDisplayChange = config.onDisplayChange,
          onTimerExpiration = config.onTimerExpiration;


      var duration = parseInt(config.duration);
      if (typeof duration !== "number") {
        throw new TypeError("Timer class requires duration = Number");
      }

      var validUnits = {
        seconds: true,
        minutes: true,
        hours: true
      };

      if (!validUnits[unit]) {
        throw new TypeError("Timer class requires valid unit of time (seconds, minutes, or hours)");
      }

      if (typeof onDisplayChange !== "function" || typeof onTimerExpiration !== "function") {
        throw new TypeError("Timer class requires 2 callback functions: onDisplayChange and onTimerExpiration");
      }

      return { duration: duration, unit: unit, onDisplayChange: onDisplayChange, onTimerExpiration: onTimerExpiration };
    }
  }]);

  return Timer;
}();

exports.default = Timer;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);