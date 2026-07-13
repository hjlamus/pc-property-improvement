# 📋 Análisis del Borrador del Cliente — Cambios Solicitados

Este documento resume los cambios que el cliente (Franklin) solicita en `borrador.docx`, comparados contra el estado actual de la web.

---

## 🔴 Cambio 1: Eliminar la palabra "FONTANERÍA"

> **Indicación del cliente:** *"Quitar palabra FONTANERÍA, usar técnico de mantenimiento, todero, servicios de reparación y mantenimiento (cualquiera). En inglés es HANDYMAN."*

### Impacto en el código

| Archivo | Línea actual | Cambio requerido |
| :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L95) | `"hero-desc": "...drywall hasta estructuras de madera y fontanería..."` | Cambiar **"fontanería"** → **"servicios de reparación y mantenimiento"** |
| [app.js](file:///C:/dev/Franklin/app.js#L10) | `"hero-desc": "...drywall to full framing and tiling..."` | Cambiar a algo como **"...framing and handyman services..."** |
| [app.js](file:///C:/dev/Franklin/app.js#L120) | `"srv-plumbing-title": "Plomería y Fontanería"` | Cambiar → **"Plomería"** (solo quitar "y Fontanería") |
| [index.html](file:///C:/dev/Franklin/index.html#L152) | `<h3>Plumbing Services</h3>` | Se mantiene (el cliente NO pidió quitar Plomería/Plumbing, solo "Fontanería") |

---

## 🟢 Cambio 2: Pintura — OK tal cual

> **Indicación del cliente:** *"PINTURA (INTERIOR Y EXTERIOR) dejar así, está bien"*

✅ **No requiere cambios.** Los textos actuales están correctos.

---

## 🟡 Cambio 3: Drywall — Ampliar descripción

> **Indicación del cliente:**
> - ES: *"Instalación y acabado de drywall (Sheetrock): Instalación de paneles de drywall en paredes y techos, instalación de zócalos, molduras y puertas interiores y exteriores."*
> - EN: *"Sheetrock Installation & Finishing: Installation of drywall on walls and ceilings, baseboards, trim, and interior and exterior doors."*

### Cambios requeridos

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L25) | `srv-drywall-title` (EN) | `"Drywall & Plastering"` | `"Sheetrock Installation & Finishing"` |
| [app.js](file:///C:/dev/Franklin/app.js#L26) | `srv-drywall-desc` (EN) | `"Expert wall and ceiling repairs..."` | `"Installation of drywall on walls and ceilings, baseboards, trim, and interior and exterior doors."` |
| [app.js](file:///C:/dev/Franklin/app.js#L110) | `srv-drywall-title` (ES) | `"Drywall y Techos"` | `"Drywall y Techos (Sheetrock)"` |
| [app.js](file:///C:/dev/Franklin/app.js#L111) | `srv-drywall-desc` (ES) | `"Instalación y reparación experta..."` | `"Instalación de paneles de drywall en paredes y techos, instalación de zócalos, molduras y puertas interiores y exteriores."` |

---

## 🟡 Cambio 4: Framer — Solo cambiar inglés

> **Indicación del cliente:**
> - ES: *"está bien"*
> - EN: *"Wood Framing: Framing for new construction, home additions, garages, sheds, and attic finishing."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L27) | `srv-framer-title` (EN) | `"Framing & Attics"` | `"Wood Framing"` |
| [app.js](file:///C:/dev/Franklin/app.js#L28) | `srv-framer-desc` (EN) | `"Timber framing for new constructions..."` | `"Framing for new construction, home additions, garages, sheds, and attic finishing."` |

---

## 🟡 Cambio 5: Decks — Actualizar ambos idiomas

> **Indicación del cliente:**
> - ES: *"Diseño y construcción de decks, instalación de barandales (barandillas), reparación de estructuras de madera, mantenimiento y aplicación de tinte o sellador para proteger la madera."*
> - EN: *"Decks & Outdoor Structures: Custom deck design and construction, railing installation, structural wood repairs, and wood staining and sealing."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L31) | `srv-deck-title` (EN) | `"Decks & Patios"` | `"Decks & Outdoor Structures"` |
| [app.js](file:///C:/dev/Franklin/app.js#L32) | `srv-deck-desc` (EN) | `"Custom deck building..."` | `"Custom deck design and construction, railing installation, structural wood repairs, and wood staining and sealing."` |
| [app.js](file:///C:/dev/Franklin/app.js#L117) | `srv-deck-desc` (ES) | `"Diseño y construcción de terrazas a medida..."` | `"Diseño y construcción de decks, instalación de barandales (barandillas), reparación de estructuras de madera, mantenimiento y aplicación de tinte o sellador para proteger la madera."` |

---

## 🟢 Cambio 6: Fences — Solo cambiar inglés

> - ES: *"bien en español"*
> - EN: *"Fences & Gates: Installation and repair of wood, vinyl, and metal fences and gates for security and property boundaries."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L30) | `srv-fences-desc` (EN) | `"Installation and repair of wood, vinyl, and metal fences for security and property borders."` | `"Installation and repair of wood, vinyl, and metal fences and gates for security and property boundaries."` |

---

## 🟡 Cambio 7: Trash Out — Solo cambiar inglés

> - ES: *"bien en español"*
> - EN: *"Trash-Out & Cleanout Services: Fast property cleanouts, junk removal, garage cleanouts, and post-eviction cleanups."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L33) | `srv-trash-title` (EN) | `"Trash Out & Evictions"` | `"Trash-Out & Cleanout Services"` |
| [app.js](file:///C:/dev/Franklin/app.js#L34) | `srv-trash-desc` (EN) | `"Fast trash outs for evicted properties..."` | `"Fast property cleanouts, junk removal, garage cleanouts, and post-eviction cleanups."` |

---

## 🟡 Cambio 8: Plomería — Ampliar descripciones

> - ES: *"Reparación de fugas de agua, instalación y cambio de inodoros, lavamanos, grifos (llaves de agua), destape de desagües y mantenimiento de tuberías."*
> - EN: *"Plumbing Services: Leak repairs, toilet, sink and faucet installation, drain cleaning, and pipe repair and maintenance."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L36) | `srv-plumbing-desc` (EN) | `"Fixing leaks, water line installations..."` | `"Leak repairs, toilet, sink and faucet installation, drain cleaning, and pipe repair and maintenance."` |
| [app.js](file:///C:/dev/Franklin/app.js#L121) | `srv-plumbing-desc` (ES) | `"Reparación de fugas, instalaciones sanitarias..."` | `"Reparación de fugas de agua, instalación y cambio de inodoros, lavamanos, grifos (llaves de agua), destape de desagües y mantenimiento de tuberías."` |

---

## 🟡 Cambio 9: Tiles — Ampliar descripciones

> - ES: *"Pisos y Cerámicas (Tile): Instalación de pisos de cerámica y porcelanato, revestimiento de baños, duchas, paredes y salpicaderos de cocina (backsplash), además de reparación y reemplazo de losetas."*
> - EN: *"Tile Installation: Floor tile installation, bathroom and shower tile, kitchen backsplashes, tile repairs, and tile replacement."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L37) | `srv-tiles-title` (EN) | `"Tiles & Backsplashes"` | `"Tile Installation"` |
| [app.js](file:///C:/dev/Franklin/app.js#L38) | `srv-tiles-desc` (EN) | `"Complete kitchen and bathroom tiling..."` | `"Floor tile installation, bathroom and shower tile, kitchen backsplashes, tile repairs, and tile replacement."` |
| [app.js](file:///C:/dev/Franklin/app.js#L122) | `srv-tiles-title` (ES) | `"Baldosas y Cerámicas (Tiles)"` | `"Pisos y Cerámicas (Tile)"` |
| [app.js](file:///C:/dev/Franklin/app.js#L123) | `srv-tiles-desc` (ES) | `"Enchapado de baños..."` | `"Instalación de pisos de cerámica y porcelanato, revestimiento de baños, duchas, paredes y salpicaderos de cocina (backsplash), además de reparación y reemplazo de losetas."` |

---

## 🟡 Cambio 10: Flooring — Ampliar descripciones

> - ES: *"Instalación de pisos laminados, LVP (Luxury Vinyl Plank), madera (hardwood) y reemplazo o reparación de pisos."*
> - EN: *"Flooring Installation: Laminate, LVP (Luxury Vinyl Plank), hardwood flooring installation, and floor repair and replacement."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L40) | `srv-floor-desc` (EN) | `"Installation of high-quality hardwood..."` | `"Laminate, LVP (Luxury Vinyl Plank), hardwood flooring installation, and floor repair and replacement."` |
| [app.js](file:///C:/dev/Franklin/app.js#L125) | `srv-floor-desc` (ES) | `"Colocación de pisos laminados..."` | `"Instalación de pisos laminados, LVP (Luxury Vinyl Plank), madera (hardwood) y reemplazo o reparación de pisos."` |

---

## 🟡 Cambio 11: Pressure Washing — Ampliar descripciones

> - ES: *"Lavado de entradas de vehículos (driveways), aceras, patios, decks, paredes exteriores de la casa y áreas comerciales."*
> - EN: *"Driveways, sidewalks, patios, decks, house exteriors, and commercial property pressure washing."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L42) | `srv-washing-desc` (EN) | `"Deep cleaning of driveways, siding..."` | `"Driveways, sidewalks, patios, decks, house exteriors, and commercial property pressure washing."` |
| [app.js](file:///C:/dev/Franklin/app.js#L127) | `srv-washing-desc` (ES) | `"Limpieza profunda de calzadas..."` | `"Lavado de entradas de vehículos (driveways), aceras, patios, decks, paredes exteriores de la casa y áreas comerciales."` |

---

## 🟢 Cambio 12: Cabinets — Solo inglés

> - ES: *"Español bien"*
> - EN: *"Cabinet Services: Cabinet installation, cabinet painting, cabinet repairs, and hardware replacement (handles and knobs)."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L43) | `srv-cabinet-title` (EN) | `"Cabinets Refinishing"` | `"Cabinet Services"` |
| [app.js](file:///C:/dev/Franklin/app.js#L44) | `srv-cabinet-desc` (EN) | `"Cabinet installations, painting..."` | `"Cabinet installation, cabinet painting, cabinet repairs, and hardware replacement (handles and knobs)."` |

---

## 🟡 Cambio 13: Roofing — Ampliar descripciones significativamente

> - ES: *"Reparación de goteras, cambio y reparación de shingles (tejas asfálticas), reparación de cielos interiores (drywall de techos) dañados por filtraciones, daños por tormentas y mantenimiento general del techo."*
> - EN: *"Roofing Services: Roof leak repairs, shingle repair and replacement, interior ceiling drywall repair from water damage, storm damage repairs, and general roof maintenance."*

| Archivo | Key | Texto actual | Texto nuevo |
| :--- | :--- | :--- | :--- |
| [app.js](file:///C:/dev/Franklin/app.js#L45) | `srv-roof-title` (EN) | `"Roofing & Shingles"` | `"Roofing Services"` |
| [app.js](file:///C:/dev/Franklin/app.js#L46) | `srv-roof-desc` (EN) | `"Roof leak repairs, structural roof maintenance..."` | `"Roof leak repairs, shingle repair and replacement, interior ceiling drywall repair from water damage, storm damage repairs, and general roof maintenance."` |
| [app.js](file:///C:/dev/Franklin/app.js#L130) | `srv-roof-title` (ES) | `"Tejados y Reparaciones (Roofing)"` | `"Techos y Reparaciones (Roofing)"` |
| [app.js](file:///C:/dev/Franklin/app.js#L131) | `srv-roof-desc` (ES) | `"Reparación de goteras en techos..."` | `"Reparación de goteras, cambio y reparación de shingles (tejas asfálticas), reparación de cielos interiores (drywall de techos) dañados por filtraciones, daños por tormentas y mantenimiento general del techo."` |

---

## 🟢 Cambio 14 y 15: Siding/Fascia y Limpieza — OK

> El cliente confirma: *"SIDING, SOFFIT Y FASCIA: bien en español e inglés"* y *"LIMPIEZA COMERCIAL Y RESIDENCIAL: bien en español e inglés"*

✅ **No requieren cambios.**

---

## 🔴 Cambio 16: Pregunta sobre el Panel Admin / Tech Panel

Franklin quiere entender el flujo del panel de técnicos antes de aprobarlo.

### Acción requerida
Se necesita **responder al cliente** explicando que:
1. El panel es **para uso interno de Franklin** (no para clientes/gerentes).
2. Franklin llena los datos del trabajo → genera un enlace → se lo envía al técnico/empleado por WhatsApp.
3. El técnico abre el enlace en su celular y ve: dirección, descripción, pago, y puede subir fotos cuando termine.
4. Considerar agregar la funcionalidad de que al completar el trabajo, **las fotos se reenvíen automáticamente a Franklin y a Adriana por email** para facilitar la facturación.
