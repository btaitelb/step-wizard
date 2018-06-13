import React, { Component } from "react"
import ConfDialog from "./components/ConfDialog"
import Step from "./components/Step"

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
    this.setState({ totalSteps: steps, isShowingConfig: false })
  }

  showConfig() {
    this.setState({ totalSteps: "", isShowingConfig: true })
  }

  render() {
    const { isShowingConfig, curStep, totalSteps } = this.state
    if (isShowingConfig) {
      return <ConfDialog updateTotalSteps={this.updateTotalSteps.bind(this)} />
    } else {
      return <Step curStep={curStep} totalSteps={totalSteps} showConfig={this.showConfig.bind(this)} />
    }
  }
}

export default App
