import React, { Component } from "react"
import { Button } from "antd"
import "../styles/Step.css"
import PropTypes from "prop-types"

class Step extends Component {
  nextStep() {
    const { curStep, updateStep } = this.props
    updateStep(curStep + 1)
  }

  prevStep() {
    const { curStep, updateStep } = this.props
    updateStep(curStep - 1)
  }

  render() {
    const { curStep, totalSteps, showConfig } = this.props

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
            <Button className="back" type="primary" disabled={curStep === 1} onClick={() => this.prevStep()}>
              {" "}
              &lt; Back
            </Button>
            <Button className="forward" style={{ marginLeft: 12 }} type="primary" disabled={curStep === totalSteps} onClick={() => this.nextStep()}>
              Forward &gt;
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Step.propTypes = {
  curStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  showConfig: PropTypes.func.isRequired,
  updateStep: PropTypes.func.isRequired,
}

export default Step
