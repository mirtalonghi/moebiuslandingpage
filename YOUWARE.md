# Landing Page CV - Portfolio Profesional

Esta es una landing page moderna y profesional diseñada para sustituir un CV tradicional. Está optimizada para dispositivos móviles y ofrece una experiencia interactiva para reclutadores.

## Características Principales

- **Hero Interactivo**: Fondo con movimiento fluido utilizando gradientes animados y Framer Motion.
- **Portfolio**: Sección de proyectos con tarjetas interactivas, etiquetas de tecnologías y enlaces a GitHub/Demo.
- **Educación**: Línea de tiempo elegante que detalla la formación académica y certificaciones.
- **Contacto**: Sección con botones directos a redes profesionales (LinkedIn, GitHub, Twitter) y un formulario de contacto integrado.
- **Descarga de CV**: Botón de acceso rápido para descargar la versión resumida del CV en un solo clic.

## Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario.
- **TypeScript**: Para un desarrollo robusto y tipado.
- **Tailwind CSS**: Estilizado atómico y responsivo.
- **Framer Motion**: Animaciones fluidas y efectos de movimiento.
- **Lucide React**: Set de iconos modernos y consistentes.

## Estructura del Proyecto

- `src/components/landing/`: Contiene los componentes modulares de la landing page.
  - `Hero.tsx`: Sección de bienvenida con fondo animado.
  - `Portfolio.tsx`: Galería de proyectos.
  - `Education.tsx`: Historial académico.
  - `Contact.tsx`: Redes sociales y formulario.
- `src/App.tsx`: Ensamblador principal de las secciones.
- `src/index.css`: Estilos globales y configuración de scroll suave.

## Reglas de Desarrollo Móvil

1. **Touch-First**: Todos los elementos interactivos tienen un tamaño mínimo de 44px para facilitar la navegación táctil.
2. **Safe Areas**: El diseño respeta los márgenes de seguridad (notches) de dispositivos iOS y Android.
3. **Feedback Táctil**: Se utiliza `hapticFeedback` para mejorar la experiencia de usuario en acciones críticas como la descarga del CV.
4. **Optimización de Rendimiento**: Animaciones ligeras que no comprometen la fluidez en dispositivos móviles.

---
*Proyecto generado para una experiencia de reclutamiento moderna.*
