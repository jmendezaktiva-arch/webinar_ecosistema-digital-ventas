// Archivo de Contenido para el Webinar: Ecosistema Digital Rentable (Versión Palabras Clave)

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus',
    title: 'Ecosistema Digital Rentable',
    content: '<h3>3 Motores para Atraer Clientes</h3>',
    image: 'assets/images/slide-1.png',
    background: '#FFFFFF'
  },

  // Diapositiva 2: ¿Estás aquí?
  {
    layout: 'layout-default',
    title: '¿Estás aquí?',
    content: `<h2><i class="fas fa-keyboard" style="color: var(--primary-color);"></i> Chat:</h2>
              <p style="font-size: 1.5em; margin-top: 40px;">Tu Mayor <strong>Frustración</strong> con Marketing Digital</p>`,
  },

  // Diapositiva 3: La Promesa
  {
    layout: 'layout-split',
    title: 'Mi Promesa para Ti',
    content: `<ul>
                <li><strong>3 Motores</strong> para atraer clientes.</li>
                <li><strong>Plan de acción exacto</strong>.</li>
                <li>Implementación <strong>esta semana</strong>.</li>
              </ul>`,
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Imagen+de+Promesa'
  },

  // Diapositiva 4: El Problema Real
  {
    layout: 'layout-center-focus',
    title: 'El Verdadero Problema',
    content: `<p>El problema NO es tu marketing.</p>
              <p>Es volar un avión <strong>sin motores</strong>.</p>`,
    image: 'https://placehold.co/1000x500/EEEEEE/000000?text=Avión+sin+Motores'
  },

  // Diapositiva 5: La Solución
  {
    layout: 'layout-split',
    title: 'La Solución: El Sistema de 3 Motores',
    content: `<p>Caso "Carlos": <strong>Leads x3</strong>.</p>
              <p>El Secreto: <strong>Sistema, no improvisación</strong>.</p>
              <p>Método Ágil.</p>`,
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Sistema+de+Engranajes'
  },
  
  // Diapositiva 6: Motor #1
  {
    layout: 'layout-center-focus',
    title: 'Motor #1: EL COMBUSTIBLE ⛽',
    content: `<p>Síntoma #1 sin combustible:</p>
              <p>Pagar marketing <strong>"cruzando los dedos"</strong>.</p>`,
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Medidor+de+Combustible'
  },

  // Diapositiva 7: Cita
  {
    layout: 'layout-center-focus',
    title: '',
    content: `<blockquote>"La utilidad es una opinión, el flujo de caja es un hecho."</blockquote>`,
    background: '#F4F4F4'
  },

  // Diapositiva 8: Tu Combustible HOY
  {
    layout: 'layout-default',
    title: 'Calcula tu Combustible HOY',
    content: `<div class="icon-grid" style="margin-top: 50px;">
                <div class="icon-item"><i class="fas fa-bank fa-3x"></i><p>Ingresos Reales</p></div>
                <div class="connector" style="font-size: 3em;">-</div>
                <div class="icon-item"><i class="fas fa-file-invoice-dollar fa-3x"></i><p>Gastos Fijos</p></div>
                <div class="connector" style="font-size: 3em;">=</div>
                <div class="icon-item"><i class="fas fa-gas-pump fa-3x" style="color: var(--secondary-color);"></i><p><strong>Tu Combustible</strong></p></div>
              </div>`
  },

  // Diapositiva 9: Motor #2
  {
    layout: 'layout-center-focus',
    title: 'Motor #2: EL MAPA 🗺️',
    content: `<p>Pregunta Clave: ¿Dónde invertir?</p>
              <p>Nuevo Enfoque: <strong>"Ecosistema de Ventas Digitales"</strong>.</p>`,
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Mapa+Estratégico'
  },

  // Diapositiva 10: Tu Mapa Estratégico
  {
    layout: 'layout-default',
    title: 'Tu Mapa Estratégico',
    content: `<p>6 categorías con propósito, retorno e inversión diferentes.</p>`,
    image: 'https://placehold.co/1000x500/EEEEEE/000000?text=Infografía+de+6+Canales'
  },
  
  // Diapositiva 11: El Filtro de Decisión
  {
    layout: 'layout-center-focus',
    title: 'El Filtro de Decisión',
    content: `<p>Elección por método, no por intuición.</p>
              <h3>3 Filtros Clave</h3>`,
    image: 'https://placehold.co/800x450/EEEEEE/000000?text=Embudo+de+Decisión+(3+Filtros)'
  },
  
  // Diapositiva 12: La Regla de Oro
  {
    layout: 'layout-default',
    title: 'La Regla de Oro',
    content: `<div style="font-size: 8em; font-weight: bold; color: var(--primary-color);">2</div>
              <h2>MÁXIMO 2 CANALES</h2>
              <p>+ Set de 5 Contenidos Fundacionales</p>`
  },

  // Diapositiva 13: Motor #3
  {
    layout: 'layout-center-focus',
    title: 'Motor #3: EL PILOTO 👨‍✈️',
    content: `<p>¿Quién pilota el día a día?</p>
              <p>De "Empleados" a <strong>"Dueños"</strong>.</p>
              <p>De "Tareas" a <strong>"Ownership"</strong>.</p>`,
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Cabina+de+Piloto'
  },
  
  // Diapositiva 14: ¿Empleados o Dueños?
  {
    layout: 'layout-split',
    title: '¿Empleados o Dueños?',
    content: `<div><h3>El de la Tarea:</h3><p>"Ya publiqué."</p></div>
              <hr>
              <div><h3>El Dueño del Resultado:</h3><p>"Publiqué, generé 5 preguntas y agendé 2 llamadas."</p></div>`,
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Tarea+vs+Resultado'
  },

  // Diapositiva 15: El Sistema Completo
  {
    layout: 'layout-center-focus',
    title: 'El Sistema Completo en Acción',
    content: `<p><strong>Combustible + Mapa + Piloto</strong></p>
              <p>Si falta uno, el sistema se cae.</p>`,
    image: 'https://placehold.co/900x450/EEEEEE/000000?text=Combustible+→+Mapa+→+Piloto'
  },
  
  // Diapositiva 16: El "CÓMO"
  {
    layout: 'layout-center-focus',
    title: 'El "CÓMO"',
    content: `<h2>Escribe <strong style="color: var(--accent-color)">"SISTEMA"</strong> en el chat para obtener las herramientas.</h2>`,
    image: 'https://placehold.co/700x400/EEEEEE/000000?text=Caja+de+Herramientas'
  },

  // Diapositiva 17: Taller Intensivo
  {
    layout: 'layout-split',
    title: 'Taller Intensivo: Consolidación 360',
    content: `<p>No es un curso, es un <strong>taller de construcción</strong>.</p>`,
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Taller+de+Construcción'
  },

  // Diapositiva 18: El Plan de Construcción
  {
    layout: 'layout-default',
    title: 'El Plan de Construcción',
    content: `<div class="columns-wrapper">
                <div class="column">
                  <h3><i class="fas fa-user-tie"></i> A: El Piloto</h3>
                  <p>Método de Ownership.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-map-signs"></i> B: El Mapa</h3>
                  <p>Elección matemática de canales.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-gas-pump"></i> C: El Combustible</h3>
                  <p>Dominio del Flujo de Caja.</p>
                </div>
              </div>`
  },

  // Diapositiva 19: La Oferta
  {
    layout: 'layout-default slide-19-custom',
    title: 'Tu Inversión Estratégica',
    content: `<ul class="infographic-list" style="max-width: 60%;">
                <li><i class="fas fa-rocket"></i> <div><strong>Resultados inmediatos</strong></div></li>
                <li><i class="fas fa-chart-line"></i> <div><strong>Aumento de ingresos</strong></div></li>
                <li><i class="fas fa-hands-helping"></i> <div><strong>Soporte personalizado</strong></div></li>
              </ul>
              <h2 style="margin-top: 40px;">Inversión Única: $5000</h2>`
  },

  // Diapositiva 20: Tu Decisión
  {
    layout: 'layout-center-focus',
    title: 'Tu Decisión',
    content: `<h3>Adivinar vs. <strong>Construir un Sistema</strong>.</h3>
              <p style="font-size: 1.8em; font-weight: bold; color: var(--accent-color); margin-top: 40px;">www.dominatunegocio.com</p>`,
    image: 'https://placehold.co/1000x400/EEEEEE/000000?text=Bifurcación'
  },

  // Diapositiva 21: Q&A
  {
    layout: 'layout-center-focus',
    title: '¿Preguntas?',
    content: `<h2>Q&A</h2>`
  }
];

