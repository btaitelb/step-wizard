import React, { Component } from "react"
import { Button, Input, notification } from "antd"
import "./ConfDialog.css"

class ConfDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: "",
      updateTotalSteps: props.updateTotalSteps, //TODO: set this to a function with a useful error message
    }
  }

  validate() {
    const input = parseInt(this.state.totalSteps, 10)
    if (input && input > 0) {
      this.state.updateTotalSteps(input)
    } else {
      this.setState({ totalSteps: "" })
      notification.open({
        message: "Invalid Input",
        description: "Step Number must be a non-zero, positive integer.",
      })
    }
  }

  render() {
    const { totalSteps } = this.state

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
                value={totalSteps}
                onChange={(e) => this.setState({ totalSteps: e.target.value })}
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

export default ConfDialog
