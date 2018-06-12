import React, { Component } from "react"
import "./App.css"
import { Button, Input, notification } from "antd"

class ConfDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: "",
      updateTotalSteps: props.updateTotalSteps, //TODO: set this to a function with a useful error message
    }
  }

  render() {
    const {totalSteps, updateTotalSteps} = this.state;

    return (
        <div className="app-container">
        <div style={{ paddingLeft: 120, marginTop: 20, fontSize: 36 }}>Setup Wizard</div>

        <div style={{ paddingLeft: 120, marginTop: 120 }}>
            <div className="form-container">
            <div style={{ fontSize: 24, textAlign: "center" }}>Configure the Setup Wizard</div>
            <p style={{ textAlign: "center", fontSize: 16, marginTop: 12 }}>
                Please enter the number of steps you would like this wizard to have.
            </p>
            <div style={{ marginTop: 140 }}>
                <div>Step Number</div>
                <Input
                    style={{ marginTop: 8 }}
                    placeholder="ie. &quot;1&quot;, &quot;7&quot;, or &quot;22&quot;"
                    value={ totalSteps }
                    onChange={(e) => {
                        this.setState({ totalSteps: e.target.value })
                    }}
                />
                <Button
                    type="primary"
                    style={{ width: 120, marginTop: 14 }}
                    onClick={() => {
                        const input = parseInt(totalSteps, 10)
                        if (input && input > 0) {
                            updateTotalSteps(input);
                        } else {
                            this.setState({ totalSteps: "" })
                            notification.open({
                                message: "Invalid Input",
                                description: "Step Number must be a non-zero, positive integer.",
                            })
                        }
                    }}
                >
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
