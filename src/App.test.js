import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Step from "./components/Step"
import ConfDialog from "./components/ConfDialog"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("<App />", () => {
  it("App State doesnt change when Step Number input is invalid.", () => {
    const app = shallow(<App />)

    // Confirm Initial State
    expect(app.state("curStep"), 1)
    expect(app.state("totalSteps"), 1)
    expect(app.state("isShowingConfig"), true)

    const confDialog = app.find(ConfDialog).dive()
    const event = { target: { value: "-3" } }
    confDialog.find("Input").simulate("change", event)
    expect(confDialog.state("stepsInput"), "-3") // Successfully Changed State of ConfDialog
    confDialog.find(".form-submit").simulate("click")

    expect(app.state("totalSteps"), 1) // Validate that Apps state hasnt changed
  })

  it("App State changes when Step Number is valid.", () => {
    const app = shallow(<App />)

    // Confirm Initial State
    expect(app.state("curStep"), 1)
    expect(app.state("totalSteps"), 1)
    expect(app.state("isShowingConfig"), true)

    const confDialog = app.find(ConfDialog).dive()
    const event = { target: { value: "22" } }
    confDialog.find("Input").simulate("change", event)
    expect(confDialog.state("stepsInput"), "22") // Successfully Changed State of ConfDialog
    confDialog.find(".form-submit").simulate("click")

    expect(app.state("totalSteps"), 22)
  })
})
