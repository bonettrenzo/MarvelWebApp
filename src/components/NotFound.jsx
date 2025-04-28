import { Result, Button, Typography } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "../styles/NotFound.css"

const { Title, Paragraph } = Typography

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
      <Result
          status="error"
          title={<Title className="marvel-title-404">404</Title>}
          subTitle={
            <div className="not-found-subtitle">
              <Title level={2}>¡Página no encontrada!</Title>
              <Paragraph className="not-found-message">
                Parece que Thanos ha usado el guante del infinito y ha hecho desaparecer esta página.
              </Paragraph>
            </div>
          }
          extra={
            <Link to="/">
              <Button type="primary" icon={<HomeOutlined />} size="large" className="marvel-button">
                Volver al inicio
              </Button>
            </Link>
          }
        />
        <div className="not-found-image">
          <img src="https://insidethemagic.net/wp-content/uploads/2021/01/tom-holland-says-marvel-spider-man-3-story-is-insane-1210675-1280x0-1-e1672520500815-800x400.jpg" alt="Marvel Hero Confused" className="hero-image-404" />
        </div>
      </div>
    </div>
  )
}

export default NotFound
