import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "antd"
import LoginForm from "./components/LoginForm.jsx"
import Dashboard from "./components/Dashboard.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import "./App.css"
import NotFound from "./components/NotFound.jsx"
import CharacterDetail from "./components/CharacterDetail.jsx"

const { Content } = Layout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <Layout className="layout">
            <Content className="content">
              <div className="login-container">
                <div className="image-section">
                  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTAxcGUzbm4yOWQxOTIzMGVkYjNvZHdidzk1Ymh2dG4zNG10ZHAweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduEIoSNmJXWQTWU/giphy.gif" alt="Marvel Hero" className="hero-image" />
                </div>
                <div className="form-section">
                  <LoginForm />
                </div>
              </div>
            </Content>
          </Layout>
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/character/:id" element={
          <ProtectedRoute>
            <CharacterDetail />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
