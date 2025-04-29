import { useState } from "react"
import { Form, Input, Button, Typography } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useFormik } from "formik"
import * as Yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import "../styles/LoginForm.css"
import { CREDENCIALES } from "../const/const"

const { Title, Text } = Typography

const LoginForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string().email("Correo electrónico inválido").required("El correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (!recaptchaValue) {
        Swal.fire({
          title: "Error!",
          text: "Por favor, completa el reCAPTCHA",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#E23636", 
        })
        return
      }

      if (values.email === CREDENCIALES.email && values.password === CREDENCIALES.password) {
        localStorage.setItem('MYTOKEN_LOCALSTORAGE', values.email)
        Swal.fire({
          title: "¡Éxito!",
          text: "Has iniciado sesión correctamente",
          icon: "success",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#E23636",
        }).then(() => {
          navigate('/')
        })
      } else {
        Swal.fire({
          title: "Error!",
          text: "Credenciales incorrectas",
          icon: "error",
          confirmButtonText: "Intentar de nuevo",
          confirmButtonColor: "#E23636", 
        })
      }
    },
  })

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value)
  }

  return (
    <div className="login-form-container">
      <div className="login-form-header">
        <Title level={2} className="marvel-title">
          Iniciar sesión
        </Title>
        <Text type="secondary">Bienvenido al universo Marvel</Text>
      </div>

      <Form name="login" className="login-form" onFinish={formik.handleSubmit}>
        <Form.Item
          validateStatus={formik.errors.email && formik.touched.email ? "error" : ""}
          help={formik.touched.email && formik.errors.email}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Correo electrónico"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="large"
          />
        </Form.Item>

        <Form.Item
          validateStatus={formik.errors.password && formik.touched.password ? "error" : ""}
          help={formik.touched.password && formik.errors.password}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
              onChange={handleRecaptchaChange}
              theme="light"
            />
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large" block>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
