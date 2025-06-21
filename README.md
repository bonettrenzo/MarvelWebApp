# 🧪 Marvel Web App

![Demo](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZsODFuMWJxbjJ3bHcwZW9taHZ1dHJrOGM0dWZ5YjM1OG1vNWxoYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vBjLa5DQwwxbi/giphy.gif)

Este proyecto fue desarrollado como parte de una prueba técnica para Broers. Está construido utilizando **React 19**, **Vite**, y componentes visuales de **Ant Design**. También se hace uso de librerías como **Formik** y **Yup** para formularios, **SweetAlert2** para alertas, y **React Router DOM v7** para el enrutamiento.

---

## 🚀 Scripts disponibles

En la raíz del proyecto puedes ejecutar:

- `npm run dev`  
  Inicia el servidor de desarrollo con **Vite**.

- `npm run build`  
  Crea una versión optimizada de producción.

- `npm run preview`  
  Previsualiza el build de producción localmente.

- `npm run lint`  
  Ejecuta ESLint para verificar errores de código.

---

## 📦 Dependencias

### Producción

- **react** `^19.0.0`
- **react-dom** `^19.0.0`
- **react-router-dom** `^7.5.3`
- **antd** `^5.24.8`
- **@ant-design/icons** `^6.0.0`
- **formik** `^2.4.6`
- **yup** `^1.6.1`
- **md5** `^2.3.0`
- **sweetalert2** `^11.19.1`
- **react-google-recaptcha** `^3.1.0`

### Desarrollo

- **vite** `^6.3.1`
- **@vitejs/plugin-react-swc** `^3.8.0`
- **eslint** `^9.22.0`
- **@eslint/js** `^9.22.0`
- **eslint-plugin-react-hooks** `^5.2.0`
- **eslint-plugin-react-refresh** `^0.4.19`
- **@types/react** `^19.0.10`
- **@types/react-dom** `^19.0.4`
- **globals** `^16.0.0`

---

## 🛠️ Notas adicionales

- El proyecto está configurado para ser desplegado en **Render**. Asegúrate de configurar las variables de entorno correctamente en la plataforma.
- Utiliza **Docker** para la construcción y despliegue del contenedor en un entorno controlado.
  - Asegúrate de que el archivo `Dockerfile` esté configurado correctamente y que se utilicen las mejores prácticas para el despliegue.



## 🌐 Comentarios sobre la API de Marvel

```js
// Se que las variables de la api deben ir en variables de entorno, pero como la API MARVEL nunca me funcionó,
// y no es por falta de conocimientos para usarla. Me parece que actualmente está fuera de servicio,
// porque incluso revisando videos, a otros les carga la documentación completa, pero a mí ni eso.

// Probé registrándome con dos correos distintos (ambos de Gmail), y en la misma web algunas páginas están rotas,
// no muestran contenido. También probé usando un VPN por si era un problema regional, pero sin éxito.

// Entiendo que el flujo correcto es generar el `ts` con `new Date().getTime()`,
// concatenarlo con la API Key privada y luego la pública, y usar `md5` para generar el hash.
// En la URL se deben enviar `ts`, `apikey` y `hash`.

// Incluso intenté montar un backend en Node + Express para hacer las peticiones desde el servidor,
// y no directamente desde React, pero tampoco funcionó.

// En conclusión: **la API de Marvel no funciona actualmente.**
