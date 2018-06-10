import React, { Component } from "react"
import "./App.css"
import { Button, Input, notification } from "antd"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curStep: null,
      stepsInput: "",
      wizardState: "CONFIGURE",
    }
  }

  render() {
    const { stepsInput, wizardState, curStep } = this.state

    switch (wizardState) {
      case "CONFIGURE":
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
                    value={stepsInput}
                    onChange={(e) => {
                      this.setState({ stepsInput: e.target.value })
                    }}
                  />
                  <Button
                    type="primary"
                    style={{ width: 120, marginTop: 14 }}
                    onClick={() => {
                      const input = parseInt(stepsInput, 10)
                      if (input && input > 0) {
                        this.setState({ wizardState: "WIZARD_RUNNING", curStep: 1 })
                      } else {
                        this.setState({ stepsInput: "" })
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
        break

      case "WIZARD_RUNNING":
        return (
          <div className="app-container">
            <div className="title-controls">
              <div style={{ fontSize: 36 }}>
                Wizard Running: Step {curStep}/{parseInt(stepsInput, 10)}
              </div>
              <Button
                type="primary"
                style={{ marginRight: 120 }}
                onClick={() => this.setState({ curStep: null, stepsInput: "", wizardState: "CONFIGURE" })}
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
                  onClick={() => {
                    curStep !== 1
                      ? this.setState({ curStep: curStep - 1 })
                      : this.setState({ curStep: null, stepsInput: "", wizardState: "CONFIGURE" })
                  }}
                >
                  {" "}
                  &lt; Back
                </Button>
                <Button
                  style={{ marginLeft: 12 }}
                  type="primary"
                  disabled={curStep === parseInt(stepsInput, 10)}
                  onClick={() => this.setState({ curStep: curStep + 1 })}
                >
                  Forward &gt;
                </Button>
              </div>
            </div>
          </div>
        )
        break

      default:
        return <div>We're not in Kansas anymore</div>
        break
    }
  }
}

export default App
