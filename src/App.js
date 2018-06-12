import React, { Component } from "react"
import "./App.css"
import ConfDialog from "./ConfDialog"
import Step from "./Step"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: "",
      curStep: 1,
      isShowingConfig: true,
    }
  }

  updateTotalSteps(steps) {
    this.setState({totalSteps: steps, isShowingConfig: false});
  }

  showConfig() {
    this.setState({totalSteps: "", isShowingConfig: true});
  }

  render() {
    if (this.state.isShowingConfig) {
      return (
        <ConfDialog updateTotalSteps={this.updateTotalSteps.bind(this)} />
      );
    } else {
      return (
        <Step curStep={this.state.curStep}
              totalSteps={this.state.totalSteps}
              showConfig={this.showConfig.bind(this)} />
      );
    }
  }
}

export default App
