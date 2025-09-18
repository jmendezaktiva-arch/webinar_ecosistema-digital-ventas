// Archivo de Contenido para el Webinar: Ecosistema Digital Rentable

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus',
    title: 'Ecosistema Digital Rentable',
    content: '<h3>Descubre los 3 motores para atraer clientes de forma predecible.</h3>',
    // RECOMENDACIÓN: Reemplaza esta imagen por una de portada para tu webinar.
    image: 'https://placehold.co/1280x720/005A9C/FFFFFF?text=Ecosistema+Digital+Rentable',
    background: '#FFFFFF'
  },

  // Diapositiva 2: ¿Estás aquí?
  {
    layout: 'layout-default',
    title: '¿Estás aquí?',
    content: `<h2><i class="fas fa-keyboard" style="color: var(--primary-color);"></i> Cuéntame en el chat:</h2>
              <p style="font-size: 1.5em; margin-top: 40px;">¿Cuál es tu mayor <strong>frustración</strong> con el marketing digital AHORA MISMO?</p>`,
  },

  // Diapositiva 3: La Promesa
  {
    layout: 'layout-split',
    title: 'Mi Promesa para Ti',
    content: `<p>En menos de una hora, no solo vas a saber cuáles son los <strong>3 motores</strong> para atraer de manera predecible más clientes...</p>
              <p>...sino que saldrás de aquí con el <strong>plan de acción exacto</strong> para empezar a construirlos ESTA MISMA SEMANA.</p>`,
    // RECOMENDACIÓN: Usa una imagen de una brújula, una llave o un mapa.
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Imagen+de+Promesa'
  },

  // Diapositiva 4: El Problema Real
  {
    layout: 'layout-center-focus',
    title: 'El Verdadero Problema',
    content: `<p>¿Y si te dijera que el problema NO está en tu marketing?</p>
              <p>Puedes tener el mejor anuncio o la mejor web... pero si intentas volar un avión sin los motores correctos, jamás va a despegar.</p>`,
    // RECOMENDACIÓN: Usa una imagen potente de un avión sin motores.
    image: 'https://placehold.co/1000x500/EEEEEE/000000?text=Avión+sin+Motores'
  },

  // Diapositiva 5: La Solución
  {
    layout: 'layout-split',
    title: 'La Solución: El Sistema de 3 Motores',
    content: `<p>Hablamos de mi cliente "Carlos"... <strong>triplicamos sus leads</strong>.</p>
              <p>¿El secreto? No fue un anuncio mágico. Fue que dejamos de improvisar y nos dedicamos a instalar, con un método ágil, los motores que le permitieron encontrar y hacer vínculo con su público objetivo.</p>`,
    // RECOMENDACIÓN: Usa una imagen de engranajes funcionando en armonía.
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Sistema+de+Engranajes'
  },
  
  // Diapositiva 6: Motor #1
  {
    layout: 'layout-center-focus',
    title: 'Motor #1: EL COMBUSTIBLE ⛽',
    content: `<p>¿Alguna vez has pagado una campaña de marketing cruzando los dedos y rezando para que funcione?</p>
              <p>Ese sentimiento es el síntoma N°1 de operar sin combustible.</p>`,
    // RECOMENDACIÓN: Usa un ícono grande de un medidor de combustible.
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Medidor+de+Combustible'
  },

  // Diapositiva 7: Cita
  {
    layout: 'layout-center-focus',
    title: '', // Sin título para centrar la atención en la cita
    content: `<blockquote>"La utilidad es una opinión, el flujo de caja es un hecho."</blockquote>`,
    background: '#F4F4F4'
  },

  // Diapositiva 8: Tu Combustible HOY
  {
    layout: 'layout-default',
    title: 'Calcula tu Combustible HOY',
    content: `<div class="icon-grid" style="margin-top: 50px;">
                <div class="icon-item"><i class="fas fa-bank fa-3x"></i><p>Dinero en Banco (Mes)</p></div>
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
    content: `<p>Ya tenemos combustible. Ahora, ¿cuál es el mejor canal para invertirlo?</p>
              <p>Dejen de pensar en "canales" y empiecen a pensar en un <strong>"Ecosistema de Ventas Digitales"</strong>.</p>`,
    // RECOMENDACIÓN: Usa un ícono grande de un mapa estratégico.
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Mapa+Estratégico'
  },

  // Diapositiva 10: Tu Mapa Estratégico
  {
    layout: 'layout-default',
    title: 'Tu Mapa Estratégico',
    content: `<p>Hay 6 categorías, cada una con un propósito, tiempo de retorno e inversión MUY diferentes.</p>`,
    // RECOMENDACIÓN: Reemplaza esto con una infografía real de los 6 canales.
    image: 'https://placehold.co/1000x500/EEEEEE/000000?text=Infografía+de+6+Canales'
  },
  
  // Diapositiva 11: El Filtro de Decisión
  {
    layout: 'layout-center-focus',
    title: 'El Filtro de Decisión',
    content: `<p>No elijan por intuición, usen un método de 3 filtros:</p>`,
    // RECOMENDACIÓN: Reemplaza esto por una infografía de un embudo.
    image: 'https://placehold.co/800x450/EEEEEE/000000?text=Embudo+de+Decisión+(3+Filtros)'
  },
  
  // Diapositiva 12: La Regla de Oro
  {
    layout: 'layout-default',
    title: 'La Regla de Oro',
    content: `<div style="font-size: 8em; font-weight: bold; color: var(--primary-color);">2</div>
              <h2>¡ELIJAN MÁXIMO 2 CANALES!</h2>
              <p>Luego, vístanlos con el "Set Inicial de 5 Contenidos Fundacionales".</p>`
  },

  // Diapositiva 13: Motor #3
  {
    layout: 'layout-center-focus',
    title: 'Motor #3: EL PILOTO 👨‍✈️',
    content: `<p>Ya tenemos el dinero y un plan enfocado. Pero, ¿quién va a pilotar esto día a día?</p>
              <p>Necesitas pasar de "empleados" a <strong>"dueños"</strong>. De una "Lista de Tareas" a una cultura de <strong>"Ownership"</strong>.</p>`,
    // RECOMENDACIÓN: Usa una imagen de la cabina de un avión.
    image: 'https://placehold.co/800x400/EEEEEE/000000?text=Cabina+de+Piloto'
  },
  
  // Diapositiva 14: ¿Empleados o Dueños?
  {
    layout: 'layout-split',
    title: '¿Empleados o Dueños?',
    content: `<div><h3>El de la Tarea:</h3><p>"Jefe, ya publiqué el post."</p></div>
              <hr>
              <div><h3>El Dueño del Resultado:</h3><p>"Jefe, publiqué el post, generó 5 preguntas... agendé dos llamadas de venta."</p></div>
              <h3>¿Ves la diferencia?</h3>`,
    // RECOMENDACIÓN: Usa una imagen que compare una checklist vs un gráfico de resultados.
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Tarea+vs+Resultado'
  },

  // Diapositiva 15: El Sistema Completo
  {
    layout: 'layout-center-focus',
    title: 'El Sistema Completo en Acción',
    content: `<p>Es un sistema. Necesitas <strong>El Combustible</strong>, <strong>El Mapa</strong> y <strong>El Piloto</strong>. Si te falta uno, el sistema se cae.</p>`,
    // RECOMENDACIÓN: Usa una infografía que conecte los 3 motores.
    image: 'https://placehold.co/900x450/EEEEEE/000000?text=Combustible+→+Mapa+→+Piloto'
  },
  
  // Diapositiva 16: El "CÓMO"
  {
    layout: 'layout-center-focus',
    title: 'El "CÓMO"',
    content: `<h2>Pongan <strong style="color: var(--accent-color)">"SISTEMA"</strong> en el chat si quieren que les entregue las herramientas completas...</h2>`,
    // RECOMENDACIÓN: Usa una imagen de una caja de herramientas o un cofre del tesoro.
    image: 'https://placehold.co/700x400/EEEEEE/000000?text=Caja+de+Herramientas'
  },

  // Diapositiva 17: Taller Intensivo
  {
    layout: 'layout-split',
    title: 'Taller Intensivo: Consolidación 360',
    content: `<p>Hemos creado un programa Intensivo. No es un curso para escuchar, es un <strong>taller de construcción</strong>... para construir en tu negocio.</p>`,
    // RECOMENDACIÓN: Usa una foto de un equipo colaborando en una pizarra.
    image: 'https://placehold.co/600x400/EEEEEE/000000?text=Taller+de+Construcción'
  },

  // Diapositiva 18: El Plan de Construcción
  {
    layout: 'layout-default',
    title: 'El Plan de Construcción',
    content: `<div class="columns-wrapper">
                <div class="column">
                  <h3><i class="fas fa-user-tie"></i> Sesión A: El Piloto</h3>
                  <p>Te doy mi método para crear un equipo con ownership.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-map-signs"></i> Sesión B: El Mapa</h3>
                  <p>Usaremos herramientas como la Matriz de Priorización para que tu elección de canales sea matemática, no intuitiva.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-gas-pump"></i> Sesión C: El Combustible</h3>
                  <p>Sales con tu Flujo de Caja calculado y dominando el método 4+1 para tomar decisiones de inversión.</p>
                </div>
              </div>`
  },

  // Diapositiva 19: La Oferta
  {
    layout: 'layout-default slide-19-custom',
    title: 'Tu Inversión Estratégica',
    content: `<ul class="infographic-list" style="max-width: 60%;">
                <li><i class="fas fa-rocket"></i> <div><strong>Resultados inmediatos</strong><br>Herramientas y planes de acción efectivos.</div></li>
                <li><i class="fas fa-chart-line"></i> <div><strong>Aumento de ingresos, sin adivinanzas</strong><br>Casos de estudio y tácticas probadas.</div></li>
                <li><i class="fas fa-hands-helping"></i> <div><strong>Soporte personalizado</strong><br>Sesión privada de 30 min con nuestros expertos.</div></li>
              </ul>
              <h2 style="margin-top: 40px;">Inversión Única: $5000</h2>`
  },

  // Diapositiva 20: Tu Decisión
  {
    layout: 'layout-center-focus',
    title: 'Tu Decisión',
    content: `<h3>Puedes seguir adivinando, o puedes construir un sistema que te dará el control.</h3>
              <p style="margin-top: 30px; font-size: 1.5em;">El enlace está en la pantalla:</p>
              <p style="font-size: 1.8em; font-weight: bold; color: var(--accent-color);">www.dominatunegocio.com</p>`,
    // RECOMENDACIÓN: Usa una imagen de una bifurcación en el camino.
    image: 'https://placehold.co/1000x400/EEEEEE/000000?text=Bifurcación'
  },

  // Diapositiva 21: Q&A
  {
    layout: 'layout-center-focus',
    title: '¿Preguntas?',
    content: `<h2>Q&A</h2>
              <p style="margin-top: 50px;">Mientras deciden si unirse a la construcción, abro el micrófono.</p>`
  }
];
