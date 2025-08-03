# AURUM MEL - Landing Page

Una landing page de alta costura para la marca de miel premium AURUM MEL, diseñada con un enfoque minimalista y experiencias de usuario sofisticadas.

## 🎯 Concepto

Esta landing page no es simplemente una "web", sino un espacio digital exclusivo que transmite la elegancia y exclusividad de la marca AURUM MEL. Se basa en:

- **Minimalismo extremo**: Diseño limpio sin elementos superfluos
- **Storytelling visual**: Narrativa a través de imágenes y animaciones
- **Micro-interacciones**: Detalles que elevan la experiencia
- **Factor "caro"**: Elementos que sugieren alta producción y exclusividad

## 🏗️ Estructura del Proyecto

```
aurum_mels/
├── index.html          # Estructura principal de la landing page
├── styles.css          # Estilos CSS con animaciones y diseño responsive
├── script.js           # Funcionalidades JavaScript e interacciones
├── assets/             # Carpeta para recursos multimedia
│   ├── honey-video.mp4     # Video de fondo (4K, cámara lenta)
│   ├── bee-macro.jpg       # Foto macro de abeja
│   ├── honey-romero.jpg    # Imagen producto 1
│   ├── honey-roble.jpg     # Imagen producto 2
│   └── apicultor-hands.jpg # Foto manos del apicultor
└── README.md           # Este archivo
```

## 🎨 Secciones de la Landing Page

### 1. **El Impacto Inicial (Above the Fold)**
- Video a pantalla completa en bucle (miel dorada cayendo)
- Logo "AURUM MEL" con animación de entrada
- Tagline "El Alma de la Colmena"
- Indicador de scroll sutil

### 2. **La Filosofía**
- Diseño asimétrico con foto macro de abeja
- Texto poético sobre el legado y la paciencia
- Animaciones de scroll suaves

### 3. **El Producto (Interactivo)**
- Carrusel horizontal controlado por scroll
- Efectos 3D en hover de productos
- Sistema de carrito integrado
- Dos variedades: Romero Salvaje y Roble Centenario

### 4. **El Origen**
- Imagen a pantalla completa en blanco y negro
- Cita del Maestro Apicultor
- Efecto parallax suave

### 5. **La Llamada Final**
- Sección de exclusividad
- CTA prominente con efectos dorados
- Mensaje de edición limitada

## 🚀 Características Técnicas

### **Factor "Caro" Implementado:**
- ✅ Video de alta producción (requiere archivo 4K)
- ✅ Tipografías premium (Playfair Display + Montserrat)
- ✅ Paleta de colores limitada y sofisticada
- ✅ Cursor personalizado con efectos hover
- ✅ Animaciones suaves y micro-interacciones
- ✅ Efectos 3D en productos
- ✅ Sistema de carrito fluido
- ✅ Partículas doradas flotantes
- ✅ Scroll horizontal en carrusel
- ✅ Efectos parallax
- ✅ Diseño totalmente responsive

### **Interacciones Implementadas:**
- Cursor personalizado que cambia en hover
- Carrusel de productos con navegación por scroll
- Efectos 3D en imágenes de productos
- Sistema de carrito con notificaciones
- Animaciones de scroll con Intersection Observer
- Efecto de escritura en el tagline
- Partículas doradas flotantes

## 📱 Responsive Design

La landing page está completamente optimizada para:
- **Desktop**: Experiencia completa con todas las interacciones
- **Tablet**: Adaptación de layouts y tamaños
- **Mobile**: Navegación táctil y optimización de elementos

## 🎬 Recursos Multimedia Necesarios

### **Video de Fondo (honey-video.mp4)**
- **Resolución**: 4K (3840x2160)
- **Duración**: 10-15 segundos en bucle
- **Contenido**: Miel dorada cayendo en cámara súper lenta sobre pizarra negra
- **Estilo**: Iluminación dramática, sin sonido

### **Imágenes Requeridas:**
1. **bee-macro.jpg**: Foto macro de abeja sobre flor de romero
2. **honey-romero.jpg**: Tarro de miel de romero (diseño minimalista)
3. **honey-roble.jpg**: Tarro de miel de roble (diseño minimalista)
4. **apicultor-hands.jpg**: Manos del apicultor sosteniendo panal (B&W)

### **Especificaciones de Imágenes:**
- **Resolución mínima**: 1920x1080px
- **Formato**: JPG/PNG optimizados
- **Estilo**: Fotografía profesional, alta calidad

## 🛠️ Instalación y Configuración

### **1. Clonar/Descargar el Proyecto**
```bash
git clone [url-del-repositorio]
cd aurum_mels
```

### **2. Añadir Recursos Multimedia**
Coloca los archivos multimedia en la carpeta `assets/`:
- `honey-video.mp4`
- `bee-macro.jpg`
- `honey-romero.jpg`
- `honey-roble.jpg`
- `apicultor-hands.jpg`

### **3. Servir la Página**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

### **4. Acceder a la Página**
Abre tu navegador y ve a: `http://localhost:8000`

## 🎨 Personalización

### **Colores**
Los colores principales están definidos en CSS como variables:
```css
--color-black: #111111;
--color-gold: #D4AF37;
--color-cream: #F5F5F5;
```

### **Tipografías**
- **Títulos**: Playfair Display (serif elegante)
- **Texto**: Montserrat (sans-serif moderna)

### **Animaciones**
Todas las animaciones están en `styles.css` y se pueden ajustar:
- Duración de transiciones
- Efectos de hover
- Timing de animaciones de entrada

## 📊 Rendimiento

### **Optimizaciones Implementadas:**
- Lazy loading de imágenes
- CSS optimizado y minificado
- JavaScript modular y eficiente
- Animaciones con `transform` y `opacity` para GPU
- Intersection Observer para animaciones de scroll

### **Métricas Objetivo:**
- **Lighthouse Score**: 90+ en todas las categorías
- **Tiempo de carga**: < 3 segundos
- **First Contentful Paint**: < 1.5 segundos

## 🔧 Funcionalidades Avanzadas

### **Sistema de Carrito:**
- Añadir productos con animaciones
- Contador en tiempo real
- Notificaciones elegantes
- Simulación de checkout

### **Efectos Visuales:**
- Partículas doradas flotantes
- Efectos 3D en productos
- Parallax suave en imágenes
- Cursor personalizado

### **Navegación:**
- Scroll suave entre secciones
- Carrusel horizontal interactivo
- Indicadores de navegación

## 🎯 Próximos Pasos

### **Para Producción:**
1. **Optimizar recursos multimedia**
   - Comprimir video a formatos web (WebM, MP4)
   - Optimizar imágenes con WebP
   - Implementar lazy loading

2. **Añadir funcionalidades de e-commerce**
   - Integración con pasarela de pagos
   - Sistema de inventario
   - Gestión de pedidos

3. **SEO y Analytics**
   - Meta tags optimizados
   - Google Analytics
   - Schema markup

4. **Testing**
   - Cross-browser testing
   - Performance testing
   - User experience testing

## 📞 Soporte

Para cualquier pregunta o personalización adicional, contacta con el equipo de desarrollo.

---

**AURUM MEL** - El Alma de la Colmena 🍯✨ 