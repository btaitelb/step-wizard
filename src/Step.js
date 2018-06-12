import React, { Component } from "react"
import "./App.css"
import { Button } from "antd"

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
      this.setState({curStep: step});
  }

  nextStep() {
      this.updateStep(this.state.curStep + 1);
  }

  prevStep() {
      this.updateStep(this.state.curStep - 1);
  }

  render() {
    const {curStep, totalSteps, showConfig} = this.state;

    return (
        <div className="app-container">
        <div className="title-controls">
            <div style={{ fontSize: 36 }}>
                Wizard Running: Step {curStep} / {totalSteps}
            </div>
            <Button
                type="primary"
                style={{ marginRight: 120 }}
                onClick={() => showConfig()}
            >
            Back to Beginning
            </Button>
        </div>

        <div style={{ paddingLeft: 120, marginTop: 120, position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <img alt="placeholder" src={`http://via.placeholder.com/${curStep * 16}x${curStep * 9}`} />
            </div>

            <div style={{ display: "flex", position: "absolute", top: 400 }}>
            <Button
                type="primary"
                disabled={curStep === 1}
                onClick={() => { this.prevStep(); }}
            >
                {" "}
                &lt; Back
            </Button>
            <Button
                style={{ marginLeft: 12 }}
                type="primary"
                disabled={curStep === totalSteps}
                onClick={() => { this.nextStep() }}
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
