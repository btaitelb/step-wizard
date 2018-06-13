import React, { Component } from "react"
import ConfDialog from "./components/ConfDialog"
import Step from "./components/Step"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: 1, // Number
      curStep: 1, // Number
      isShowingConfig: true, // Boolean
    }
  }

  updateTotalSteps(steps) {
    this.setState({ totalSteps: steps, isShowingConfig: false })
  }

  updateStep(step) {
    this.setState({ curStep: step })
  }

  showConfig() {
    this.setState({ totalSteps: 1, isShowingConfig: true })
  }

  render() {
    const { isShowingConfig, curStep, totalSteps } = this.state
    if (isShowingConfig) {
      return <ConfDialog updateTotalSteps={this.updateTotalSteps.bind(this)} />
    } else {
      return <Step curStep={curStep} updateStep={this.updateStep.bind(this)} totalSteps={totalSteps} showConfig={this.showConfig.bind(this)} />
    }
  }
}

export default App
