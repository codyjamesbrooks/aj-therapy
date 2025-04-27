import "$styles/index.scss"
import "$styles/syntax-highlighting.css"
import "./jquery.js"
import "./main.js"
import "./util.js"

import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

import controllers from "./controllers/**/*.{js,js.rb}"
Object.entries(controllers).forEach(([filename, controller]) => {
  if (filename.includes("_controller.") || filename.includes("-controller.")) {
    const identifier = filename.replace("./controllers/", "")
      .replace(/[_-]controller..*$/, "")
      .replace("_", "-")
      .replace("/", "--")

    Stimulus.register(identifier, controller.default)
  }
})

console.info("Bridgetown is loaded!")
