import React, { Component } from "react"
import { Button, Input, notification } from "antd"
import "./ConfDialog.css"
import PropTypes from "prop-types"

class ConfDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stepsInput: "", // String
    }
  }

  validate() {
    const totalSteps = parseInt(this.state.stepsInput, 10) // Turn stepsInput (string) into totalSteps (number)
    if (totalSteps && totalSteps > 0) {
      this.props.updateTotalSteps(totalSteps)
    } else {
      this.setState({ stepsInput: "" })
      notification.open({
        message: "Invalid Input",
        description: "Step Number must be a non-zero, positive integer.",
      })
    }
  }

  render() {
    const { stepsInput } = this.state

    return (
      <div className="component-container">
        <div className="page-title">Setup Wizard</div>

        <div className="form-layout">
          <div className="form-container">
            <div className="form-title">Configure the Setup Wizard</div>
            <p className="form-instruction">Please enter the number of steps you would like this wizard to have.</p>
            <div style={{ marginTop: 140 }}>
              <div>Step Number</div>
              <Input
                style={{ marginTop: 8 }}
                placeholder="ie. &quot;1&quot;, &quot;7&quot;, or &quot;22&quot;"
                value={stepsInput}
                onChange={(e) => this.setState({ stepsInput: e.target.value })}
              />
              <Button type="primary" className="form-submit" onClick={() => this.validate()}>
                Launch
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ConfDialog.propTypes = {
  updateTotalSteps: PropTypes.func.isRequired,
}

export default ConfDialog
