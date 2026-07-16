# Plaga Gym

Landing page para Plaga Gym, gimnasio en Uruguay con coach certificado Martín Delgado.

## Spec aplicada

- **Paleta:** blanco `#FFFFFF` + azul premium `#003366` (principal) / `#0056b3` (acentos).
- **Texto:** gris oscuro `#1A1A1A` para máxima legibilidad.
- **Tipografía:** Inter (sans) + Bebas Neue (display).
- **Idioma:** es-UY.

## Estructura (single-page)

```
PlagaGYM/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── next-env.d.ts
├── README.md
└── src/
    ├── app/
    │   ├── layout.tsx        # Layout raíz (Navbar + Footer + SEO + fuentes)
    │   ├── globals.css       # Tailwind + skip-link
    │   └── page.tsx          # Landing (compone todas las secciones)
    └── components/
        ├── Navbar.tsx        # Sticky + menú móvil (links a secciones)
        ├── Footer.tsx        # 3 columnas + copyright
        ├── Hero.tsx          # Título + CTAs + tarjeta visual
        ├── Stats.tsx         # 100 socios / 5 años / horarios / coaching
        ├── Services.tsx      # Kickboxing, Boxeo, Taekwondo, Funcional, Acondicionamiento, Personalizado
        ├── Schedule.tsx      # 8:30-12 y 15-21
        ├── Plans.tsx         # Básico $1500 / Seguimiento $2000 / Personalizado $2500
        ├── About.tsx         # Coach Martín Delgado (27 años)
        ├── Store.tsx         # 6 productos Cibeles con imágenes Unsplash
        └── Contact.tsx       # Mapa Google Maps + botón "Dejar opinión"
```

## Secciones de la landing

| # | Sección | Contenido |
|---|---|---|
| 1 | **Hero** | "Entrená con coaches reales" + CTAs |
| 2 | **Stats** | 100 socios, 5 años, horarios, 1:1 |
| 3 | **Servicios** | Kickboxing, Boxeo, Taekwondo, Funcional, Acondicionamiento, Personalizado |
| 4 | **Horarios** | 8:30–12:00 y 15:00–21:00 |
| 5 | **Planes** | Básico $1500 / Seguimiento $2000 / Personalizado $2500 |
| 6 | **Sobre nosotros** | Martín Delgado (27 años), trayectoria, certificaciones |
| 7 | **Tienda** | 6 productos Cibeles con fotos de Unsplash |
| 8 | **Contacto** | Mapa Google Maps + botón "Dejar opinión" + WhatsApp/email |

## Comandos

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
```

## Notas

- Las imágenes de productos vienen de **Unsplash** (fitness supplements, protein shaker). Si querés imágenes de Cibeles reales, reemplazá las URLs en `src/components/Store.tsx`.
- El número de WhatsApp (`59800000000`) y el email (`hola@plagagym.uy`) son placeholders. Actualizar en `Contact.tsx` y `Footer.tsx` con los reales.
- El iframe de Google Maps ya está configurado al 100% de ancho.
- Las imágenes del coach en `About.tsx` son un placeholder con gradiente azul e iniciales "MD". Reemplazar con foto real.
- Todo es estático (sin backend). Las CTAs hacen scroll a la sección de contacto o son anchors internos.
