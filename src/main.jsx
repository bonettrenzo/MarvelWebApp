import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ConfigProvider } from "antd"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E23636", 
          colorLink: "#518CCA", 
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
