import React, { Component } from "react"
import { Button } from "antd"
import "./Step.css"

class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: props.totalSteps,
      curStep: props.curStep,
      showConfig: props.showConfig, // TODO: use a function with an error message
    }
  }

  updateStep(step) {
    this.setState({ curStep: step })
  }

  nextStep() {
    this.updateStep(this.state.curStep + 1)
  }

  prevStep() {
    this.updateStep(this.state.curStep - 1)
  }

  render() {
    const { curStep, totalSteps, showConfig } = this.state

    return (
      <div className="component-container">
        <div className="title-controls">
          <div className="step-title">
            Wizard Running: Step {curStep} / {totalSteps}
          </div>
          <Button type="primary" className="reset-button" onClick={() => showConfig()}>
            Back to Beginning
          </Button>
        </div>

        <div className="step-content">
          <div className="image-container">
            <img alt="placeholder" src={`http://via.placeholder.com/${curStep * 16}x${curStep * 9}`} />
          </div>

          <div className="buttons-container">
            <Button
              type="primary"
              disabled={curStep === 1}
              onClick={() => {
                this.prevStep()
              }}
            >
              {" "}
              &lt; Back
            </Button>
            <Button
              style={{ marginLeft: 12 }}
              type="primary"
              disabled={curStep === totalSteps}
              onClick={() => {
                this.nextStep()
              }}
            >
              Forward &gt;
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Step
