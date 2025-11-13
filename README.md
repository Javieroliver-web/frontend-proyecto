# 🚀 Sprintix Frontend

Sistema de gestión de proyectos colaborativo desarrollado con Angular 20.

## 📋 Descripción

Sprintix es una aplicación web moderna para la gestión de proyectos con metodología Kanban. Permite a los equipos organizar tareas, colaborar en proyectos y hacer seguimiento del progreso en tiempo real.

## ✨ Características

- 🔐 **Autenticación JWT** - Login seguro con tokens
- 📊 **Dashboard Interactivo** - Visualización de estadísticas con Chart.js
- 🎯 **Tablero Kanban** - Drag & Drop para gestión de tareas
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🎨 **UI Moderna** - Diseño limpio e intuitivo
- ⚡ **Performance** - Carga rápida y fluida
- 🔔 **Notificaciones** - Sistema de notificaciones en tiempo real

## 🛠️ Tecnologías

- **Angular 20** - Framework principal
- **TypeScript 5.9** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva
- **Chart.js 4.5** - Gráficos interactivos
- **HTML5 Drag & Drop API** - Funcionalidad Kanban

## 📦 Requisitos Previos

- Node.js >= 18.x
- npm >= 9.x
- Angular CLI >= 20.x

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd sprintix-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Edita la URL del backend en los servicios (`src/app/services/*.ts`) si es diferente a `http://localhost:8080/api`

### 4. Iniciar el servidor de desarrollo

```bash
ng serve
```

O con npm:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm start                # Inicia el servidor de desarrollo
ng serve                 # Alternativa

# Build
npm run build           # Build de producción
ng build --configuration production

# Tests
npm test                # Ejecuta tests unitarios
npm run test:coverage   # Tests con coverage

# Linting
npm run lint            # Verifica código con ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── guards/              # Guards de autenticación
│   │   └── auth.guard.ts
│   ├── interceptors/        # Interceptores HTTP
│   │   └── auth.interceptor.ts
│   ├── layouts/            # Layouts principales
│   │   └── main-layout/
│   ├── pages/              # Páginas de la aplicación
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── board/
│   │   └── project-list/
│   ├── services/           # Servicios HTTP
│   │   ├── auth.service.ts
│   │   ├── proyecto.service.ts
│   │   ├── tarea.service.ts
│   │   └── notificacion.service.ts
│   ├── app.component.ts    # Componente raíz
│   ├── app.config.ts       # Configuración de la app
│   └── app.routes.ts       # Rutas de la aplicación
├── styles.css              # Estilos globales
├── index.html              # HTML principal
└── main.ts                 # Punto de entrada
```

## 🔑 Credenciales de Prueba

```
Email: juan@sprintix.com
Password: password123
```

## 🌐 API Backend

El frontend consume una API REST desarrollada en Java/Jersey/JPA.

### Endpoints principales:

- `POST /api/auth/login` - Autenticación
- `GET /api/proyectos` - Listar proyectos
- `GET /api/tareas/proyecto/{id}` - Tareas de un proyecto
- `PUT /api/tareas/{id}` - Actualizar tarea
- `GET /api/notificaciones/usuario/{id}` - Notificaciones

Ver documentación completa del backend en su repositorio.

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `src/styles.css`:

```css
:root {
  --primary-color: #2a9d8f;
  --primary-color-dark: #264653;
  /* ... */
}
```

### Cambiar logo

Reemplaza el archivo en `public/img/Logo2.png`

## 🚢 Despliegue

### Build de producción

```bash
npm run build
```

Los archivos se generarán en `dist/sprintix-frontend/`

### Deploy en Netlify/Vercel

1. Conecta tu repositorio
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist/sprintix-frontend/browser`

### Deploy en servidor propio

```bash
# Build
npm run build

# Copiar archivos a servidor
scp -r dist/sprintix-frontend/* user@server:/var/www/sprintix/

# Configurar nginx (ejemplo)
server {
    listen 80;
    server_name sprintix.com;
    root /var/www/sprintix;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:8080;
    }
}
```

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Error CORS

Configura CORS en el backend o usa el proxy de desarrollo (`proxy.conf.json`)

### Error 401 Unauthorized

- Verifica que el backend esté corriendo
- Revisa que las credenciales sean correctas
- Limpia localStorage y vuelve a hacer login

## 📚 Documentación Adicional

- [Angular Documentation](https://angular.dev)
- [RxJS Documentation](https://rxjs.dev)
- [Chart.js Documentation](https://www.chartjs.org)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Convenciones de Código

- Usar camelCase para variables y funciones
- Usar PascalCase para clases y componentes
- Comentar código complejo
- Seguir la guía de estilo de Angular

## 🔄 Versionado

Usamos [SemVer](http://semver.org/) para el versionado.

## 👥 Autores

- **Tu Nombre** - *Desarrollo Frontend* - [GitHub](https://github.com/tu-usuario)

## 📄 Licencia

Este proyecto es privado y confidencial.

## 🙏 Agradecimientos

- Equipo de Angular por el increíble framework
- Chart.js por los gráficos
- Comunidad de desarrolladores

---

Desarrollado con ❤️ usando Angular