# Cuestionario para el Cliente: Proyecto Web de Reformas y Servicios (Atlanta, USA)

Este documento contiene las preguntas clave organizadas por categorías para definir el alcance, diseño y funcionalidad de la página web y el sistema móvil para técnicos.

---

### 1. Identidad de Marca y Objetivos Generales
> [!NOTE]
> Estas preguntas definen la estética visual, el tono de la comunicación y el mercado objetivo de la web.

* **¿Cuál es el nombre comercial exacto de la empresa?** ¿Tienen ya un logotipo en alta resolución y un esquema de colores definido?
* **¿Cuál es el público objetivo principal en Atlanta?** (¿Propietarios de viviendas residenciales, administradores de apartamentos, subcontratistas? ¿En qué zonas específicas de Atlanta operan?)
* **¿El sitio web será únicamente en inglés, en español, o bilingüe?** (Dado que está en EE.UU. pero el contacto podría ser bilingüe).
* **¿Disponen de un nombre de dominio (ej. *www.empresa.com*) y hosting adquirido, o necesitan asesoría para comprarlo?**

---

### 2. Galería de Trabajos y Portafolio
> [!TIP]
> El portafolio visual es el principal factor de conversión para empresas de reformas. Necesitamos saber cómo organizar el contenido visual.

* **¿Cómo quieren categorizar los trabajos en la galería?**
  * *Ejemplos:* Pintura (Interior/Exterior), Fontanería, Reformas de Cocinas, Reformas de Baños, etc.
* **¿Qué tipo de formato visual prefieren para mostrar los trabajos?**
  * ¿Galería estándar con filtros?
  * ¿Fotos de "Antes y Después" deslizables (Slider Before/After)?
* **¿Cuentan actualmente con fotos de buena calidad de proyectos ya realizados?** (Aproximadamente cuántos proyectos iniciales les gustaría subir).

---

### 3. Sistema de Contacto y Canales de Comunicación
> [!IMPORTANT]
> Es crucial definir cómo fluyen los prospectos desde la web hasta el cliente.

* **Formulario de Contacto:** ¿Qué datos obligatorios deben pedir al usuario?
  * *Sugeridos:* Nombre, Teléfono, Correo, Dirección (o ZIP Code en Atlanta), Tipo de servicio solicitado, Descripción del problema, Opción de subir fotos del daño/reforma.
* **Integración con WhatsApp:**
  * ¿Quieren un botón flotante de WhatsApp directo?
  * Al enviar el formulario, ¿prefieren que se abra WhatsApp con un mensaje pre-redactado o prefieren que llegue una notificación automática interna?
* **Notificaciones por Correo:**
  * ¿A qué dirección de correo deben llegar los mensajes del formulario?
  * ¿Quieren que el cliente reciba un correo de confirmación automático y personalizado?

---

### 4. Portal o Flujo para Técnicos (Móvil)
> [!WARNING]
> Esta es la funcionalidad más avanzada y requiere definir si será una zona privada con usuario/contraseña o un flujo simplificado mediante enlaces seguros.

* **¿Cómo se imaginan el acceso de los técnicos a sus trabajos?**
  * **Opción A (Simple):** El administrador genera un enlace único y seguro para cada trabajo y se lo envía al técnico por WhatsApp/SMS. Al hacer clic, el técnico ve los detalles del trabajo en su móvil sin necesidad de iniciar sesión.
  * **Opción B (Completa):** Cada técnico tiene una cuenta con usuario y contraseña, entra a un portal web y ve una lista de los trabajos asignados.
* **¿Qué información específica debe ver el técnico en su pantalla?**
  * *Sugeridos:* Dirección del trabajo (con enlace directo a Google Maps / Waze), Descripción del trabajo, Monto a cobrar por el técnico, Fotos del área antes de empezar, Datos de contacto del cliente final (opcional).
* **¿El técnico debe poder interactuar con la orden?**
  * ¿Debe poder subir fotos del trabajo terminado?
  * ¿Debe poder cambiar el estado del trabajo (ej. "En proceso", "Completado")?
  * ¿Debe firmar el cliente en la pantalla del móvil del técnico al terminar?
* **¿Cuántos técnicos estiman que usarán el sistema al mismo tiempo?**

---

### 5. Administración del Sitio (Panel de Control)
* **¿Quién se encargará de asignar los trabajos a los técnicos y subir las fotos a la galería?**
  * ¿Necesitan un panel de administración fácil de usar (como WordPress o un panel a medida en React/Next.js) para hacer esto ustedes mismos?

---

## 📋 Pasos Recomendados para la Reunión
1. **Enviar este cuestionario** por correo o compartirlo digitalmente antes de la reunión.
2. **Agendar una videollamada corta** para revisar los puntos donde el cliente tenga dudas, especialmente en la sección de la *App para Técnicos* (Punto 4).
3. **Definir el MVP (Producto Mínimo Viable):** Es recomendable empezar con la web pública y un flujo simple para técnicos (Opción A del punto 4), y luego escalar si el negocio lo requiere.
