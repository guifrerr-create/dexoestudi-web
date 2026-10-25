(() => {
  const H = 'Vivienda', R = 'Rehabilitación y reforma', E = 'Equipamientos', A = 'Actividades', D = 'Dirección de ejecución';
  const P = [
    ['Rehabilitación integral de edificio entre medianeras', 'Rehabilitación', 'Centro histórico de Balaguer', [H, R], 'mitgeres-historic'],
    ['Restaurante La Tagliatella', 'Reforma de local para restaurante', 'Balaguer', [R, A], 'tagliatella', 2025],
    ['Sala de actos del Palau Marc', 'Reforma para el Departamento de Cultura', 'Barcelona', [R, E], 'palau-marc', 2024],
    ['Reforma integral de vivienda', 'Reforma', 'Balaguer', [H, R], 'reforma-integral-habitatge'],
    ['Reforma interior de vivienda unifamiliar', 'Dirección de ejecución', 'Barcelona', [H, R, D], 'escala-barcelona'],
    ['Reforma de la masía els Clotats', 'Rehabilitación', 'Gerb, Os de Balaguer', [H, R], 'clotats'],
    ['Rehabilitación de pequeña masía', 'Rehabilitación', 'Montargull', [H, R], 'montargull', 2025],
    ['Casas modulares Vivmo', 'Vivienda modular prefabricada', 'Balaguer', [H], 'vivmo'],
    ['Sala de velatorio El Segre', 'Equipamiento', 'Balaguer', [E], 'vetlles'],
    ['Vivienda unifamiliar aislada', 'Dirección de ejecución y coordinación de seguridad y salud', 'Gerb, Os de Balaguer', [H, D], 'gerb-unifamiliar'],
    ['Vivienda unifamiliar', 'Project management, dirección de ejecución y coordinación de seguridad y salud', 'Balaguer', [H, D], 'unifamiliar-balaguer'],
    ['Centro de Servicios', 'Dirección de ejecución y coordinación de seguridad y salud', 'La Sentiu de Sió', [E, D], 'sentiu'],
    ['Reforma parcial de vivienda entre medianeras', 'Reforma', 'Balaguer', [H, R], 'mitgeres-balaguer'],
    ['Oficinas comarcales del Departamento de Agricultura', 'Equipamiento', 'Balaguer', [E], 'agricultura'],
    ['Reforma de las oficinas de Marmoles Alias', 'Reforma de local para oficinas', 'Balaguer', [R, A], 'marmoles-alias'],
    ['Reforma del showroom de Marmoles Alias', 'Reforma de local para showroom', 'Balaguer', [R, A], 'marmoles-alias-showroom'],
    ['Librería Nobel', 'Reforma de local comercial', 'Balaguer', [R, A], 'llibreria-nobel'],
    ['Reforma integral de edificio residencial', 'Rehabilitación', 'Centro histórico de Balaguer', [H, R], 'centre-historic'],
    ['Vivienda unifamiliar', 'Dirección de ejecución y coordinación de seguridad y salud', 'Vilanova de la Sal', [H, D], 'vilanova-sal'],
    ['Vivienda unifamiliar', 'Dirección de ejecución y coordinación de seguridad y salud', 'Tèrmens', [H, D], 'termens'],
    ['Reforma de local para oficina', 'Reforma de local para actividad', 'Balaguer', [R, A], 'oficina-balaguer'],
    ['Rehabilitación de vivienda unifamiliar', 'Rehabilitación', 'Tartareu', [H, R], 'tartareu'],
    ['Edificio plurifamiliar de viviendas', 'Dirección de ejecución y coordinación de seguridad y salud', 'Balaguer', [H, D], 'plurifamiliar'],
    ['Reforma de la entrada de un edificio plurifamiliar', 'Reforma', 'Balaguer', [R], 'entrada'],
    ['Reforma de vivienda en edificio plurifamiliar', 'Reforma', 'Balaguer', [H, R], 'pis-balaguer'],
    ['Reforma del vestíbulo de un edificio plurifamiliar', 'Reforma', 'Balaguer', [R], 'vestibul'],
    ['Lavandería Happy Lúdic', 'Reforma de local para lavandería', 'Balaguer', [R, A], 'bugaderia'],
    ['Escuela dominical', 'Reforma de local', 'Balaguer', [R, E], 'escola-dominical'],
    ['Salas de reuniones de l’Escola Pia', 'Reforma', 'Balaguer', [R, E], 'escolapia'],
    ['Bar Las Vegas', 'Reforma de local para bar', 'Balaguer', [R, A], 'lasvegas'],
    ['Bar Lo Tardeo', 'Reforma de local para bar', 'Balaguer', [R, A], 'lotardeo'],
    ['Racó Ibèric', 'Reforma de local comercial', 'Balaguer', [R, A], 'raco-iberic'],
  ].map(([title, type, place, cats, img, year]) => ({ title, type, place: year ? place + ' · ' + year : place, year, cats, key: img, src: '../img/projectes/' + img + '.jpg' }));
  /* fotos addicionals per projecte: clau -> llista de fitxers a img/projectes/ */
  const MORE = {
    tagliatella: ['tagliatella-1.jpg', 'tagliatella-2.jpg', 'tagliatella-3.jpg', 'tagliatella-4.jpg', 'tagliatella-5.jpg', 'tagliatella-6.jpg', 'tagliatella-7.jpg', 'tagliatella-8.jpg', 'tagliatella-9.jpg', 'tagliatella-10.jpg', 'tagliatella-11.jpg'],
    'pis-balaguer': ['pis-balaguer-1.jpg', 'pis-balaguer-2.jpg', 'pis-balaguer-3.jpg', 'pis-balaguer-4.jpg', 'pis-balaguer-5.jpg', 'pis-balaguer-6.jpg'],
    plurifamiliar: ['plurifamiliar-1.jpg', 'plurifamiliar-2.jpg'],
    tartareu: ['tartareu-1.jpg', 'tartareu-2.jpg', 'tartareu-3.jpg', 'tartareu-4.jpg', 'tartareu-7.jpg', 'tartareu-8.jpg', 'tartareu-9.jpg'],
    'mitgeres-historic': ['mitgeres-historic-1.jpg', 'mitgeres-historic-2.jpg', 'mitgeres-historic-3.jpg'],
    'escala-barcelona': ['barcelona-1.jpg', 'barcelona-2.jpg', 'barcelona-3.jpg', 'barcelona-4.jpg', 'barcelona-5.jpg', 'barcelona-6.jpg', 'barcelona-7.jpg', 'barcelona-8.jpg', 'barcelona-9.jpg', 'barcelona-10.jpg', 'barcelona-11.jpg', 'barcelona-12.jpg'],
    'palau-marc': ['palau-marc-1.jpg', 'palau-marc-2.jpg', 'palau-marc-3.jpg', 'palau-marc-4.jpg'],
    sentiu: ['sentiu-2.jpg', 'sentiu-3.jpg', 'sentiu-4.jpg', 'sentiu-5.jpg', 'sentiu-6.jpg', 'sentiu-7.jpg', 'sentiu-8.jpg', 'sentiu-9.jpg', 'sentiu-10.jpg'],
    'gerb-unifamiliar': ['gerb-1.jpg', 'gerb-3.jpg', 'gerb-4.jpg', 'gerb-5.jpg', 'gerb-6.jpg', 'gerb-7.jpg', 'gerb-8.jpg', 'gerb-9.jpg', 'gerb-10.jpg'],
    vetlles: ['vetlles-1.jpg', 'vetlles-2.jpg', 'vetlles-3.jpg', 'vetlles-4.jpg'],
    clotats: ['clotats-1.jpg', 'clotats-2.jpg', 'clotats-3.jpg', 'clotats-4.jpg', 'clotats-5.jpg', 'clotats-6.jpg'],
    'raco-iberic': ['raco-iberic-1.jpg', 'raco-iberic-2.jpg', 'raco-iberic-3.jpg', 'raco-iberic-4.jpg'],
    'llibreria-nobel': ['nobel-1.jpg', 'nobel-2.jpg', 'nobel-3.jpg'],
    'escola-dominical': ['escola-dominical-1.jpg', 'escola-dominical-2.jpg'],
    bugaderia: ['bugaderia-1.jpg', 'bugaderia-2.jpg', 'bugaderia-3.jpg', 'bugaderia-4.jpg'],
    montargull: ['masia-montargull-1.jpg', 'masia-montargull-2.jpg', 'masia-montargull-3.jpg'],
    entrada: ['entrada-1.jpg', 'entrada-2.jpg', 'entrada-3.jpg', 'entrada-4.jpg', 'entrada-5.jpg'],
    'reforma-integral-habitatge': ['reforma-integral-habitatge-1.jpg', 'reforma-integral-habitatge-2.jpg', 'reforma-integral-habitatge-3.jpg', 'reforma-integral-habitatge-4.jpg', 'reforma-integral-habitatge-5.jpg', 'reforma-integral-habitatge-6.jpg', 'reforma-integral-habitatge-7.jpg', 'reforma-integral-habitatge-8.jpg'],
    'marmoles-alias-showroom': ['showroom-1.jpg', 'showroom-2.jpg', 'showroom-3.jpg', 'showroom-4.jpg', 'showroom-5.jpg', 'showroom-6.jpg'],
    'marmoles-alias': ['oficines-alias-1.jpg', 'oficines-alias-2.jpg', 'oficines-alias-3.jpg', 'oficines-alias-4.jpg', 'oficines-alias-5.jpg', 'oficines-alias-6.jpg'],
    'oficina-balaguer': ['oficina-balaguer-1.jpg', 'oficina-balaguer-2.jpg', 'oficina-balaguer-3.jpg'],
    vivmo: ['vivmo-1.jpg', 'vivmo-2.jpg', 'vivmo-3.jpg', 'vivmo-4.jpg']
  };
  const big = (f) => f.replace('img/projectes/', 'img/projectes/w/').replace(/\.jpg$/, '.webp');
  const thumb = (f) => f.replace('img/projectes/', 'img/projectes/t/').replace(/\.jpg$/, '.webp');
  /*ALT*/const ALT = {"mitgeres-historic.jpg": "Fachada del edificio rehabilitado con terrazas y puertas de madera en la planta baja", "mitgeres-historic-1.jpg": "Fachada al anochecer con las terrazas iluminadas", "mitgeres-historic-2.jpg": "Vista frontal de la fachada iluminada entre medianeras", "mitgeres-historic-3.jpg": "Fachada de noche con la planta baja de madera y vidrio", "tagliatella.jpg": "Mesa puesta en el comedor, con arcos iluminados al fondo", "tagliatella-1.jpg": "Sala con el rótulo luminoso L’italianità y sofás redondos", "tagliatella-2.jpg": "Fachada del restaurante con el rótulo de La Tagliatella", "tagliatella-3.jpg": "Comedor con techo oscuro y luz indirecta", "tagliatella-4.jpg": "Comedor alargado con el rótulo Ti penso sempre al fondo", "tagliatella-5.jpg": "Sala con arcos iluminados y pavimento de piedra", "tagliatella-6.jpg": "Comedor con murales y paredes rojas", "tagliatella-7.jpg": "Mesas en hilera a lo largo del comedor", "tagliatella-8.jpg": "Mesas puestas con manteles blancos", "tagliatella-9.jpg": "Jardinera con plantas junto a la escalera", "tagliatella-10.jpg": "Rincón con fuente, arcos y banco tapizado", "tagliatella-11.jpg": "Pasillo hacia los aseos", "palau-marc.jpg": "Sala de actos vista desde el patio, bajo el arco de piedra", "palau-marc-1.jpg": "Fachada de vidrio de la sala bajo la bóveda de piedra", "palau-marc-2.jpg": "Sillas negras en filas en la sala de actos", "palau-marc-3.jpg": "Mesas en U con micrófonos ante la pantalla", "palau-marc-4.jpg": "Sala preparada para una jornada con mesas de trabajo", "reforma-integral-habitatge.jpg": "Recibidor con revestimiento de madera y módulo gris con puerta enrasada", "reforma-integral-habitatge-1.jpg": "Cocina gris oscuro con isla y armarios de madera", "reforma-integral-habitatge-2.jpg": "Pilar de hormigón visto ante la cocina", "reforma-integral-habitatge-3.jpg": "Isla de cocina con encimera negra y placa de gas", "reforma-integral-habitatge-4.jpg": "Fregadero con grifo extraíble y frontal de mármol negro", "reforma-integral-habitatge-5.jpg": "Puerta enrasada en la pared de madera y radiador negro", "reforma-integral-habitatge-6.jpg": "Ducha con mampara de vidrio y toallero negro", "reforma-integral-habitatge-7.jpg": "Dos lavabos sobre encimera ante un espejo", "reforma-integral-habitatge-8.jpg": "Lavabo blanco con grifo negro empotrado", "escala-barcelona.jpg": "Vestíbulo con escalera y pavimento hidráulico", "barcelona-1.jpg": "Escalera de caracol vista desde arriba", "barcelona-2.jpg": "Puertas vidrieras y pavimento hidráulico", "barcelona-3.jpg": "Cocina con isla de acero y lámparas geométricas", "barcelona-4.jpg": "Sala de estar con sofá y librería verde", "barcelona-5.jpg": "Baño con doble lavabo y bañera exenta", "barcelona-6.jpg": "Dormitorio blanco con lámparas colgantes", "barcelona-7.jpg": "Aseo con pared oscura y espejo de piezas", "barcelona-8.jpg": "Altillo con escalera blanca bajo cubierta", "barcelona-9.jpg": "Dormitorio bajo cubierta con vigas blancas", "barcelona-10.jpg": "Estudio bajo cubierta con ventana en arco", "barcelona-11.jpg": "Camino del jardín junto a la casa", "barcelona-12.jpg": "Jardín con el porche al fondo", "clotats.jpg": "Fachada de piedra de la masía con porche de madera", "clotats-1.jpg": "Piscina delante de la masía", "clotats-2.jpg": "Masía y piscina con el árbol al fondo", "clotats-3.jpg": "Porche con sillas colgantes", "clotats-4.jpg": "Sala y comedor con techo de vigas de madera", "clotats-5.jpg": "Cocina de madera con ventana al exterior", "clotats-6.jpg": "Patio interior con pavimento de baldosa", "montargull.jpg": "Planta superior con vigas de madera y red en el altillo", "masia-montargull-1.jpg": "Fachada lateral de piedra de la masía", "masia-montargull-2.jpg": "Sala con paredes de piedra y la red en el techo", "masia-montargull-3.jpg": "Fachada de piedra con el ventanal negro", "vetlles.jpg": "Porche con pavimento de madera y patio al fondo", "vetlles-1.jpg": "Patio interior con pared de listones de madera", "vetlles-2.jpg": "Patio con tarima y grandes ventanales", "vetlles-3.jpg": "Acceso con revestimiento de listones de madera", "vetlles-4.jpg": "Patio con plantas y pared de madera", "gerb-unifamiliar.jpg": "Volúmenes blancos de la casa y valla oscura", "gerb-1.jpg": "Casa vista desde la calle con el volumen en voladizo", "gerb-3.jpg": "Piscina junto al porche", "gerb-4.jpg": "Porche con pared de piedra y piscina", "gerb-5.jpg": "Sala de estar con isla de mármol", "gerb-6.jpg": "Sala abierta al porche con grandes ventanales", "gerb-7.jpg": "Cocina con muebles de madera e isla de mármol", "gerb-8.jpg": "Escalera con barandilla de vidrio y armarios de madera", "gerb-9.jpg": "Salida al porche con estantería de madera", "gerb-10.jpg": "Baño con mueble de madera y lavabo redondo", "sentiu.jpg": "Volúmenes blancos del centro de servicios", "sentiu-2.jpg": "Fachada principal con volúmenes de distintas alturas", "sentiu-3.jpg": "Vista lateral del edificio", "sentiu-4.jpg": "Vista aérea del edificio", "sentiu-5.jpg": "Vista aérea de las cubiertas", "sentiu-6.jpg": "Vista cenital de las cubiertas", "sentiu-7.jpg": "Vista aérea desde la calle", "sentiu-8.jpg": "Interior con lucernario y aberturas al patio", "sentiu-9.jpg": "Interior con techo de madera y salida al exterior", "sentiu-10.jpg": "Sala interior con ventanales", "mitgeres-balaguer.jpg": "Cocina blanca con isla y escalera de madera", "agricultura.jpg": "Entrada de vidrio de las oficinas", "marmoles-alias.jpg": "Sala de reuniones con mesa de mármol y escalera al fondo", "oficines-alias-1.jpg": "Escalera de acero vista desde el patio, a través del vidrio", "oficines-alias-2.jpg": "Mesa de mármol junto a la pared de ladrillo", "oficines-alias-3.jpg": "Pasillo con pared de ladrillo y luz en el zócalo", "oficines-alias-4.jpg": "Detalle de los cables de la escalera", "oficines-alias-5.jpg": "Pared de ladrillo visto y mesa de mármol", "oficines-alias-6.jpg": "Patio con bambú y grava visto desde dentro", "marmoles-alias-showroom.jpg": "Showroom con pavimento de mármol negro e isla blanca", "showroom-1.jpg": "Showroom con muestras de piedra y armarios oscuros", "showroom-2.jpg": "Pared de muestras de piedra y porcelánico", "showroom-3.jpg": "Fregadero y pared de piedra con el logotipo", "showroom-4.jpg": "Grifo y revestimiento de travertino", "showroom-5.jpg": "Pared de travertino con líneas de luz", "showroom-6.jpg": "Mueble gris con encimera blanca ante la piedra", "llibreria-nobel.jpg": "Fachada de la librería Nobel", "nobel-1.jpg": "Escalera de madera con estantería blanca", "nobel-2.jpg": "Mostrador y estanterías de la librería", "nobel-3.jpg": "Mesa de novedades y estantes de libros", "centre-historic.jpg": "Cocina blanca y pavimento hidráulico", "vilanova-sal.jpg": "Casa con la montaña al fondo", "termens.jpg": "Vivienda blanca con puerta de garaje oscura", "oficina-balaguer.jpg": "Volumen de madera en el interior de la oficina", "oficina-balaguer-1.jpg": "Volúmenes de madera y butaca en la zona de espera", "oficina-balaguer-2.jpg": "Zona de espera junto al escaparate", "oficina-balaguer-3.jpg": "Sala de reuniones con paredes de madera", "tartareu.jpg": "Dormitorio con vigas de madera y baño de vidrio al fondo", "tartareu-1.jpg": "Dormitorio bajo las vigas de madera", "tartareu-2.jpg": "Sala con chimenea y balconera", "tartareu-3.jpg": "Cocina lineal de madera y puerta corredera", "tartareu-4.jpg": "Escalera con la pared de piedra original", "tartareu-7.jpg": "Escalera entre paredes de piedra y ladrillo", "tartareu-8.jpg": "Baño con dos lavabos de piedra", "tartareu-9.jpg": "Línea de luz junto a la pared de piedra", "plurifamiliar.jpg": "Fachada del edificio con planta baja oscura", "plurifamiliar-1.jpg": "Portal de entrada con revestimiento de piedra gris", "plurifamiliar-2.jpg": "Vestíbulo con revestimiento de madera y luz indirecta", "entrada.jpg": "Escalera con bóveda de baldosa y revestimiento de madera", "entrada-1.jpg": "Vestíbulo con buzones, escalera y puerta a la calle", "entrada-2.jpg": "Escalera y puerta del ascensor", "entrada-3.jpg": "Pared de madera y felpudo de entrada", "entrada-4.jpg": "Detalle de la bóveda y el revestimiento de madera", "entrada-5.jpg": "Fachada y puerta de entrada de vidrio", "pis-balaguer.jpg": "Cocina con isla y campana", "pis-balaguer-1.jpg": "Isla de cocina con encimera de mármol", "pis-balaguer-2.jpg": "Sala diáfana con carril de focos", "pis-balaguer-3.jpg": "Estancia vacía con luz lineal", "pis-balaguer-4.jpg": "Baño con mueble de madera y ducha", "pis-balaguer-5.jpg": "Baño con ducha de obra", "pis-balaguer-6.jpg": "Ducha con mampara de vidrio", "vestibul.jpg": "Vestíbulo con buzones de madera y lámpara de globo", "bugaderia.jpg": "Rótulo luminoso Happy Bubbles y lavadoras", "bugaderia-1.jpg": "Vista alargada del local con lavadoras y mostradores", "bugaderia-2.jpg": "Mostrador de madera y lavadoras al fondo", "bugaderia-3.jpg": "Zona de doblar con banco de madera", "bugaderia-4.jpg": "Rótulo luminoso sobre la pared de azulejo blanco", "escola-dominical.jpg": "Sala con pared verde y líneas de luz", "escola-dominical-1.jpg": "Sala de reuniones con pantalla y pared verde", "escola-dominical-2.jpg": "Espacio infantil con mesas azules", "escolapia.jpg": "Sala de reuniones vista a través de la puerta", "lasvegas.jpg": "Interior del bar con lámparas de fibra y mesas de mármol", "lotardeo.jpg": "Jardín vertical con el rótulo luminoso del bar", "raco-iberic.jpg": "Sala con mesas de madera y lámparas colgantes", "raco-iberic-1.jpg": "Barra y estantería de vinos", "raco-iberic-2.jpg": "Detalle de la luz en la madera", "raco-iberic-3.jpg": "Detalle de la mesa de madera y acero", "raco-iberic-4.jpg": "Vitrina de productos ibéricos", "vivmo.jpg": "Módulo Vivmo con revestimiento de cemento y gran ventanal", "vivmo-1.jpg": "Interior revestido de madera con butaca amarilla", "vivmo-2.jpg": "Ventana enmarcada en madera con vistas al campo", "vivmo-3.jpg": "Fotomontaje del módulo en un entorno rural", "vivmo-4.jpg": "Transporte del módulo en camión grúa", "unifamiliar-balaguer.jpg": "Imagen virtual del nuevo volumen con fachada de vidrio ante la casa existente"};/*/ALT*/
  const altOf = (f) => ALT[f.split('/').pop()] || '';
  P.forEach((p) => { p.photos = [p.src].concat((MORE[p.key] || []).map((f) => '../img/projectes/' + f)); });
  const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* menú */
  const menu = document.getElementById('menu');
  document.querySelectorAll('[data-menu-open]').forEach((b) => b.addEventListener('click', () => { menu.classList.add('open'); b.setAttribute('aria-expanded', 'true'); menu.querySelector('button').focus(); }));
  if (menu) {
    menu.querySelector('[data-menu-close]').addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  /* ampliació */
  const lb = document.getElementById('lb');
  let last = null;
  const openLb = (p, from) => {
    last = from;
    lb.querySelector('img').src = big(p.src); lb.querySelector('img').alt = altOf(p.src) || p.title;
    lb.querySelector('b').textContent = p.title;
    lb.querySelector('small').textContent = p.type + ' · ' + p.place;
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus();
  };
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; if (last) last.focus(); };
  if (lb) { lb.addEventListener('click', closeLb); addEventListener('keydown', (e) => { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') closeLb(); else if (e.key === 'Tab') { e.preventDefault(); lb.querySelector('.x').focus(); } }); }

  const api = {};
  /* graella de projectes: clic -> fila amb les fotos del projecte */
  const grid = document.getElementById('grid');
  let cur = [];
  const cols = () => Math.max(1, getComputedStyle(grid).gridTemplateColumns.split(' ').length);
  let openI = null;
  const closeX = () => { const old = grid.querySelector('.xp'); if (old) old.remove(); grid.querySelectorAll('.tile.on').forEach((t) => { t.classList.remove('on'); t.setAttribute('aria-expanded', 'false'); }); };
  const expand = (i, tile) => {
    if (openI === i) { closeX(); openI = null; return; }
    closeX(); openI = i;
    const p = cur[i], c = cols(), tiles = [...grid.querySelectorAll('.tile')];
    const end = Math.min(Math.floor(i / c) * c + c - 1, tiles.length - 1);
    const x = document.createElement('div'); x.className = 'xp'; x.id = 'xp';
    x.innerHTML = `<div class="xp-in"><div class="xp-row">${p.photos.map((src, k) => `<button type="button" class="xp-ph" data-k="${k}" aria-label="Amplía la foto ${k + 1} de ${esc(p.title)}${altOf(src) ? ': ' + esc(altOf(src)) : ''}"><img src="${thumb(src)}" alt="" loading="lazy" decoding="async"></button>`).join('')}</div><div class="xp-h"><div><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></div><button type="button" class="iconbtn xp-x" aria-label="Cerrar las fotos del proyecto">×</button></div></div>`;
    tiles[end].after(x);
    tile.classList.add('on'); tile.setAttribute('aria-expanded', 'true'); tile.setAttribute('aria-controls', 'xp');
    x.querySelector('.xp-x').addEventListener('click', () => { closeX(); openI = null; tile.focus(); });
    x.querySelectorAll('.xp-ph').forEach((b) => b.addEventListener('click', () => openLb({ ...p, src: p.photos[+b.dataset.k] }, b)));
    /* barra de desplaçament minimalista + arrossegar amb el ratolí */
    const row = x.querySelector('.xp-row');
    const bar = document.createElement('div'); bar.className = 'xp-bar'; bar.innerHTML = '<span></span>';
    row.after(bar); const th = bar.firstChild;
    const upd = () => { const r = row.clientWidth / row.scrollWidth; bar.hidden = r >= 0.999; th.style.width = (r * 100) + '%'; th.style.transform = `translateX(${(row.scrollLeft / Math.max(1, row.scrollWidth - row.clientWidth)) * (1 / r - 1) * 100}%)`; };
    row.addEventListener('scroll', upd, { passive: true }); row.querySelectorAll('img').forEach((im) => im.addEventListener('load', upd)); setTimeout(upd, 60);
    let dr = null, moved = false;
    row.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; dr = { x: e.clientX, l: row.scrollLeft }; moved = false; });
    addEventListener('pointermove', (e) => { if (!dr) return; const dx = e.clientX - dr.x; if (Math.abs(dx) > 4 && !moved) { moved = true; row.classList.add('drag'); } row.scrollLeft = dr.l - dx; });
    addEventListener('pointerup', () => { dr = null; row.classList.remove('drag'); });
    row.addEventListener('click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    row.addEventListener('wheel', (e) => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && row.scrollWidth > row.clientWidth) { e.preventDefault(); row.scrollLeft += e.deltaY; } }, { passive: false });
    requestAnimationFrame(() => x.classList.add('open'));
    setTimeout(() => x.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' }), 320);
  };
  const renderGrid = (list) => {
    cur = list; openI = null;
    grid.innerHTML = list.map((p, i) => `<button type="button" class="tile" data-i="${i}" aria-expanded="false" aria-label="Muestra las fotos de ${esc(p.title)}, ${esc(p.type)}, ${esc(p.place)}"><img src="${thumb(p.src)}" alt="" loading="lazy" decoding="async"><span class="veil"><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></span></button>`).join('');
    grid.querySelectorAll('.tile').forEach((t) => t.addEventListener('click', () => expand(+t.dataset.i, t)));
  };
  if (grid) {
    let rt0; addEventListener('resize', () => { clearTimeout(rt0); rt0 = setTimeout(() => { if (openI !== null) { const i = openI; const t = grid.querySelectorAll('.tile')[i]; closeX(); openI = null; if (t) expand(i, t); } }, 200); });
    const filters = document.getElementById('filters');
    const more = document.getElementById('more');
    const ROWS = +(grid.dataset.rows || 0);
    let rows = ROWS, cat = 'Todos';
    const cats = ['Todos', H, R, E, A, D];
    const PL = '<svg class="pl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><line class="h" x1="4" y1="12" x2="20" y2="12"/><line class="v" x1="12" y1="4" x2="12" y2="20"/></svg>';
    const drawGrid = () => {
      const list = P.filter((p) => cat === 'Todos' || p.cats.includes(cat));
      const n = ROWS ? Math.min(list.length, rows * cols()) : list.length;
      renderGrid(list.slice(0, n));
      if (more) more.parentElement.hidden = n >= list.length;
    };
    const drawFilters = () => {
      filters.innerHTML = cats.map((c) => `<button type="button" class="flt" aria-pressed="${c === cat}" aria-label="${esc(c)}">${PL}<span class="fl" aria-hidden="true">${Array.from(c).map((ch, i) => `<span class="lc" style="--i:${i}">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('')}</span></button>`).join('');
      filters.querySelectorAll('button').forEach((b, k) => b.addEventListener('click', () => { if (cat === cats[k]) return; cat = cats[k]; rows = ROWS; drawFilters(); drawGrid(); }));
    };
    if (filters) drawFilters();
    api.cat = (c) => { cat = c; rows = ROWS; if (filters) drawFilters(); closeX(); drawGrid(); grid.parentElement.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); };
    api.show = (key) => {
      cat = 'Todos'; if (filters) drawFilters();
      const idx = P.findIndex((p) => p.key === key); if (idx < 0) return;
      if (ROWS) rows = Math.max(ROWS, Math.ceil((idx + 1) / cols()));
      drawGrid();
      const t = grid.querySelectorAll('.tile')[idx];
      if (t) { t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => expand(idx, t), reduce ? 0 : 450); }
    };
    if (more) more.addEventListener('click', () => { rows += 4; drawGrid(); });
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (openI === null) drawGrid(); }, 150); });
    drawGrid();
  }

  /* formulari de contacte: enviament sense sortir de la pàgina, amb correu de reserva */
  const cf = document.querySelector('form.cform');
  if (cf) {
    const msgBox = document.createElement('p'); msgBox.className = 'cf-msg'; msgBox.setAttribute('role', 'status'); msgBox.hidden = true;
    cf.append(msgBox);
    const btn = cf.querySelector('button[type=submit]');
    const mailto = (fd) => 'mailto:info@dexoestudi.com?subject=' + encodeURIComponent('Consulta desde la web: ' + (fd.get('nom') || '')) + '&body=' + encodeURIComponent(`Nombre: ${fd.get('nom') || ''}\nCorreo: ${fd.get('correu') || ''}\nTeléfono: ${fd.get('telefon') || ''}\nMunicipio: ${fd.get('municipi') || ''}\n\n${fd.get('missatge') || ''}`);
    cf.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (cf.querySelector('[name=_honey]').value) return;
      const fd = new FormData(cf);
      btn.disabled = true; cf.classList.add('sending');
      msgBox.hidden = false; msgBox.className = 'cf-msg'; msgBox.textContent = 'Enviando…';
      try {
        const body = new URLSearchParams();
        ['nom', 'correu', 'telefon', 'municipi', 'missatge', '_honey'].forEach((k) => body.append(k, fd.get(k) || ''));
        const r = await fetch(cf.action, { method: 'POST', body });
        const ok = r.ok && (await r.json()).success === true;
        if (!ok) throw new Error('send');
        location.href = 'gracias.html';
      } catch (err) {
        btn.disabled = false; cf.classList.remove('sending');
        msgBox.className = 'cf-msg err';
        msgBox.innerHTML = 'No se ha podido enviar desde la web. <a href="' + mailto(fd) + '">Envíalo por correo</a> (ya te dejamos el mensaje escrito) o llama al <a href="tel:+34606750036">606 750 036</a>.';
      }
    });
  }

  /* mapa: només es carrega quan el visitant ho demana (galetes de Google) */
  document.querySelectorAll('.map-off').forEach((m) => {
    m.querySelector('.map-load').addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.title = 'Mapa del estudio dexo en Balaguer'; f.src = m.dataset.src.replace(/&amp;/g, '&');
      f.referrerPolicy = 'no-referrer-when-downgrade'; f.allowFullscreen = true;
      m.classList.remove('map-off'); m.innerHTML = ''; m.append(f); f.focus();
    });
  });

  /* portada: Som + paraula */
  const word = document.getElementById('word');
  if (word) {
    const W = ['arquitectura', 'diseño', 'rehabilitación', 'ejecución', 'seguridad'];
    let i = 0;
    const show = () => {
      const w = W[i % W.length];
      word.classList.remove('out');
      word.innerHTML = Array.from(w).map((c, n) => `<span class="ch" style="animation-delay:${n * 30}ms">${c}</span>`).join('');
    };
    const fit = () => {
      const m = document.createElement('span'); m.className = 'word'; m.style.cssText = 'position:absolute;visibility:hidden;left:-9999px';
      word.parentElement.appendChild(m);
      word.style.width = Math.ceil(Math.max(...W.map((w) => { m.textContent = w; return m.getBoundingClientRect().width; }))) + 'px';
      m.remove();
    };
    fit(); if (document.fonts) document.fonts.ready.then(fit); addEventListener('resize', fit);
    show();
    if (!reduce) setInterval(() => { word.classList.add('out'); setTimeout(() => { i++; show(); }, 300); }, 2500);
  }

  /* carrusel de l'estudi */
  const track = document.getElementById('track');
  if (track) {
    const n = track.children.length; let k = 0;
    const go = (j) => { const max = Math.max(0, Math.ceil((track.scrollWidth - track.parentElement.clientWidth) / 272)); k = j > max ? 0 : j < 0 ? max : j; track.style.transform = `translateX(${-k * 272}px)`; };
    document.getElementById('prev').addEventListener('click', () => go(k - 1));
    document.getElementById('next').addEventListener('click', () => go(k + 1));
    if (!reduce) setInterval(() => go(k + 1), 4000);
  }

  /* assistent: xat minimalista sense servidor */
  (() => {
    const home = !!document.getElementById('grid');
    const norm = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'`]/g, ' ').replace(/[^a-z0-9@.+ ]/g, ' ').replace(/\s+/g, ' ').trim();
    const ICON = '<svg class="ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg><svg class="ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';
    const SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    const fab = document.createElement('button');
    fab.type = 'button'; fab.className = 'cb-fab'; fab.setAttribute('aria-expanded', 'false'); fab.setAttribute('aria-controls', 'cb');
    fab.innerHTML = ICON + '<span class="cb-lbl">Pregúntanos</span>';
    fab.setAttribute('aria-label', 'Abrir el asistente de dexo');
    const box = document.createElement('section');
    box.className = 'cb'; box.id = 'cb'; box.setAttribute('aria-label', 'Asistente de dexo'); box.hidden = true;
    const PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
    const UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    const CHEV = '<svg class="cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10l5 5 5-5"/></svg>';
    const TOPICS = [['¿Qué hacéis?', 'serveis'], ['Ver proyectos', 'projectes'], ['Pedir presupuesto', 'budget'], ['Dirección de ejecución', 'deo'], ['Seguridad y salud', 'ss'], ['Contacto', 'contacte'], ['¿Dónde estáis?', 'on']];
    box.innerHTML = `<div class="cb-card"><header class="cb-h"><div class="cb-id"><span class="cb-av">d</span><div><b>dexo<i></i></b><small><span class="cb-on"></span>Asistente del estudio</small></div></div><button type="button" class="cb-x" aria-label="Cerrar el asistente">${ICON}</button></header>
      <div class="cb-log" role="log" aria-live="polite"></div>
      <div class="cb-chips"></div>
      <form class="cb-in">
        <label class="sr" for="cb-q">Escribe tu pregunta</label><textarea id="cb-q" rows="1" autocomplete="off" placeholder="Escribe tu pregunta…" maxlength="300"></textarea>
        <div class="cb-bar">
          <div class="cb-tools">
            <button type="button" class="cb-ib cb-more" aria-label="Temas" aria-haspopup="true" aria-expanded="false">${PLUS}</button>
            <button type="button" class="cb-pill cb-bud">Presupuesto ${CHEV}</button>
          </div>
          <button type="submit" class="cb-ib cb-send" aria-label="Enviar" disabled>${UP}</button>
        </div>
        <div class="cb-pop" hidden><p>Temas</p>${TOPICS.map(([l, k]) => `<button type="button" data-k="${k}">${esc(l)}</button>`).join('')}</div>
      </form></div>
      <aside class="cb-promo"><span><b>Presupuesto sin compromiso.</b></span><button type="button" class="cb-go">Pídelo</button></aside>`;
    document.body.append(box, fab);
    const log = box.querySelector('.cb-log'), chipsEl = box.querySelector('.cb-chips'), form = box.querySelector('.cb-in'), q = box.querySelector('#cb-q'), send = box.querySelector('.cb-send'), pop = box.querySelector('.cb-pop'), moreB = box.querySelector('.cb-more');

    const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
    const scroll = () => { log.scrollTop = log.scrollHeight; };
    const add = (html, who) => { const m = document.createElement('div'); m.className = 'cb-m ' + who; m.innerHTML = html; log.append(m); scroll(); return m; };
    let busy = Promise.resolve();
    const say = (html, chips) => {
      busy = busy.then(async () => {
        const t = add('<span class="cb-dots"><i></i><i></i><i></i></span>', 'bot typing');
        await wait(Math.min(1100, 380 + html.replace(/<[^>]+>/g, '').length * 6));
        t.classList.remove('typing'); t.innerHTML = html; scroll();
        setChips(chips || []);
      });
      return busy;
    };
    const setChips = (list) => {
      chipsEl.innerHTML = '';
      list.forEach((c, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'cb-chip'; b.style.setProperty('--i', i); b.textContent = c[0];
        b.addEventListener('click', () => { add(esc(c[0]), 'me'); setChips([]); c[1](); });
        chipsEl.append(b);
      });
      scroll();
    };

    /* accions */
    const go = (fn) => { if (home) fn(); else location.href = 'index.html#projectes'; };
    const projCard = (p) => `<button type="button" class="cb-p" data-k="${p.key}"><img src="${thumb(p.src)}" alt="" loading="lazy"><span><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></span></button>`;
    log.addEventListener('click', (e) => {
      const b = e.target.closest('.cb-p'); if (!b) return;
      if (matchMedia('(max-width:600px)').matches) closeBox();
      go(() => api.show && api.show(b.dataset.k));
    });
    const CATS = [['Vivienda', H], ['Rehabilitación y reforma', R], ['Equipamientos', E], ['Locales y actividades', A], ['Dirección de ejecución', D]];
    const showCat = (c) => { go(() => api.cat && api.cat(c)); };

    const MENU = () => [
      ['¿Qué hacéis?', () => answer('serveis')],
      ['Ver proyectos', () => answer('projectes')],
      ['Pedir presupuesto', () => budget()],
      ['Contacto', () => answer('contacte')],
    ];
    const A_ = {
      hola: () => say('¡Hola! Soy el asistente de <b>dexo</b>. Puedo explicarte qué hacemos, enseñarte proyectos o ayudarte a pedir presupuesto.', MENU()),
      serveis: () => say('Hacemos <b>proyectos de arquitectura</b> (vivienda nueva, reformas y rehabilitación), <b>interiorismo</b>, <b>dirección de ejecución</b> de obra y <b>coordinación de seguridad y salud</b>. También redactamos planes de autoprotección (PAU) y trabajamos en BIM.', [['Dirección de ejecución', () => answer('deo')], ['Ver proyectos', () => answer('projectes')], ['Pedir presupuesto', () => budget()]]),
      projectes: () => say('¿Qué tipo de proyecto te interesa? También puedes escribir una palabra, por ejemplo <i>masía</i>, <i>restaurante</i> o <i>Barcelona</i>.', CATS.map(([l, c]) => [l, () => { showCat(c); say(`Aquí los tienes: te he filtrado los proyectos de <b>${esc(l.toLowerCase())}</b>. Haz clic en uno para ver sus fotos.`, MENU()); }])),
      preu: () => say('Cada encargo es diferente: depende de la superficie, del alcance de la obra y de la fase en la que te encuentres. Cuéntame qué quieres hacer y te preparamos un <b>presupuesto sin compromiso</b>.', [['Pedir presupuesto', () => budget()], ['Contacto', () => answer('contacte')]]),
      contacte: () => say('Puedes llamar al <a href="tel:+34606750036">606 750 036</a>, escribir a <a href="mailto:info@dexoestudi.com">info@dexoestudi.com</a> o venir al estudio, en el Ptge. Gaspar de Portolà, 1, 1.º 1.ª, de Balaguer.', [['Pedir presupuesto', () => budget()], ['¿Dónde estáis?', () => answer('on')]]),
      on: () => say('Estamos en el <b>Passatge Gaspar de Portolà, 1, 1.º 1.ª, 25600 Balaguer</b>. <a href="https://www.google.com/maps/search/?api=1&query=Passatge+Gaspar+de+Portol%C3%A0+1+25600+Balaguer" target="_blank" rel="noopener">Abrir el mapa ↗</a>. Si vienes, avísanos antes para asegurarte de que estamos.', [['Contacto', () => answer('contacte')], ['¿Dónde trabajáis?', () => answer('zona')]]),
      zona: () => say('El estudio está en Balaguer y trabajamos sobre todo en la Noguera y en las comarcas de Lleida. También hacemos encargos en Barcelona.', [['Ver proyectos', () => answer('projectes')], ['Pedir presupuesto', () => budget()]]),
      deo: () => say('La <b>dirección de ejecución</b> vela para que la obra se construya tal como dice el proyecto: control de calidad y de materiales, mediciones, certificaciones y seguimiento del plazo y del coste. Lo hacemos en viviendas, equipamientos y locales.', [['Ver proyectos', () => { showCat(D); say('Te he filtrado los proyectos de dirección de ejecución.', MENU()); }], ['Seguridad y salud', () => answer('ss')]]),
      ss: () => say('Coordinamos la <b>seguridad y salud</b> de las obras en fase de proyecto y de ejecución: estudios y planes, visitas y seguimiento. También lo hacemos a través de <a href="https://plomada.cat" target="_blank" rel="noopener">Plomada SiS ↗</a>.', [['Pedir presupuesto', () => budget()], ['¿Qué más hacéis?', () => answer('serveis')]]),
      llicencia: () => say('Redactamos el proyecto y la documentación para tramitar la <b>licencia de obras</b> o la comunicación previa al Ayuntamiento, y hacemos el seguimiento hasta que la tienes.', [['Pedir presupuesto', () => budget()], ['Contacto', () => answer('contacte')]]),
      reforma: () => say('Hacemos reformas integrales y parciales de viviendas y locales, y rehabilitaciones de edificios y masías: desde el estado actual y el proyecto hasta la dirección de la obra.', [['Ver proyectos', () => { showCat(R); say('Te he filtrado las rehabilitaciones y reformas.', MENU()); }], ['Pedir presupuesto', () => budget()]]),
      qui: () => say('<b>dexo</b> es el estudio de arquitectura de <b>Guifré Ricart i Real</b>, en Balaguer desde 2011. Es especialista en BIM y está acreditado para redactar planes de autoprotección (PAU).', [['¿Qué hacéis?', () => answer('serveis')], ['Contacto', () => answer('contacte')]]),
      gracies: () => say('¡A ti! Si necesitas algo más, aquí me tienes.', MENU()),
    };
    const answer = (k) => A_[k]();

    /* intents per paraules clau */
    const INT = [
      ['preu', /\b(preu|preus|cost|costa|costaria|quant|pressupost|presupuesto|precio|tarifa|honoraris|euros?|cuanto|cuesta|costaria|presupuestos|precios)\b/],
      ['contacte', /\b(contacte|contactar|telefon|trucar|correu|email|mail|whatsapp|parlar|llamar|telefono|contacto|contactar|correo|hablar)\b/],
      ['on', /\b(on sou|adreca|direccio de l estudi|ubicacio|mapa|com arribar|on esta|donde|direccion|ubicacion|como llegar)\b/],
      ['zona', /\b(zona|on treballeu|treballeu a|comarca|comarques|lleida|noguera|fora de balaguer|donde trabajais|provincia)\b/],
      ['deo', /\b(direccio d execucio|direccio de l obra|deo|direccio facultativa|aparellador|arquitecte tecnic|seguiment d obra|certificacio|direccion de obra|direccion de ejecucion|aparejador|arquitecto tecnico|certificacion)\b/],
      ['ss', /\b(seguretat|salut|coordinacio|plomada|pla de seguretat|ess|ebss|seguridad|plan de seguridad|coordinacion)\b/],
      ['llicencia', /\b(llicencia|licencia|permis|permisos|comunicacio previa|ajuntament|tramit|tramits|permiso|ayuntamiento|tramite|tramites)\b/],
      ['qui', /\b(qui sou|qui es|guifre|arquitecte|fundador|estudi dexo|dexo es|equip|quien|quienes sois|arquitecto|equipo)\b/],
      ['serveis', /\b(servei|serveis|que feu|que fas|ofereix|oferiu|interiorisme|bim|pau|autoproteccio|projecte basic|projecte executiu|servicio|servicios|que haceis|ofreceis|interiorismo|autoproteccion|proyecto basico)\b/],
      ['reforma', /\b(reforma|reformar|rehabilitar|rehabilitacio|reformes|obra nova|ampliacio|rehabilitacion|reformas|obra nueva|ampliacion)\b/],
      ['projectes', /\b(projectes|obres|treballs|portafoli|exemples|fotos|feina feta|proyectos|obras|trabajos|ejemplos)\b/],
      ['gracies', /\b(gracies|merci|gracias|perfecte|genial|adeu|fins aviat|perfecto|adios|hasta luego)\b/],
      ['hola', /^(hola|bon dia|bona tarda|bona nit|ei|hey|hello|buenas|buenos dias|buenas tardes)\b/],
    ];
    const STOP = new Set(norm('de del dels la les el els un una uns unes i a al als en per amb que com hi ha teniu tens algun alguna algun projecte projectes obra obres fet fets feu fet vull veure ensenya ensenyam mostra mostram busco sobre on es reforma reformes local locals d de l habitatge los las y con hay teneis tienes algunos proyecto proyectos obras hecho quiero ver ensename muestrame busco sobre donde vivienda reformas').split(' '));
    const findProjects = (t) => {
      const words = t.split(' ').filter((w) => w.length > 2 && !STOP.has(w));
      if (!words.length) return [];
      return P.map((p) => {
        const hay = norm([p.title, p.type, p.place, p.cats.join(' '), p.key.replace(/-/g, ' ')].join(' '));
        const sc = words.reduce((s, w) => { const st = w.replace(/s$/, ''); return s + (new RegExp('\\b' + st + '(s|es)?\\b').test(hay) ? 3 : new RegExp('\\b' + st.slice(0, Math.max(3, st.length - 2))).test(hay) ? 1 : 0); }, 0);
        return [sc, p];
      }).filter(([sc]) => sc > 0).sort((a, b) => b[0] - a[0]).filter(([sc], _, arr) => sc === arr[0][0]).slice(0, 4).map(([, p]) => p);
    };

    /* pressupost guiat */
    let flow = null;
    const budget = () => {
      flow = { step: 0 };
      say('Perfecto. ¿Qué tipo de obra tienes en mente?', ['Vivienda nueva', 'Reforma o rehabilitación', 'Local o actividad', 'Dirección de ejecución', 'Otra cosa'].map((l) => [l, () => { flow.tipus = l; flow.step = 1; say('¿Dónde está la obra? (municipio)', []); q.focus(); }]));
    };
    const flowStep = (txt) => {
      if (flow.step === 1) { flow.municipi = txt; flow.step = 2; say('Cuéntame brevemente qué quieres hacer: superficie aproximada, estado actual, plazos…'); return; }
      if (flow.step === 2) {
        flow.desc = txt; const f = flow; flow = null;
        const msg = `${f.tipus}. ${f.desc}`;
        if (home) {
          const fm = document.querySelector('form.cform');
          if (fm) {
            fm.querySelector('[name=municipi]').value = f.municipi;
            fm.querySelector('[name=missatge]').value = msg;
            say('¡Hecho! Te he rellenado el formulario de contacto con lo que me has contado. Añade tu nombre y correo, acepta la política de privacidad y pulsa <b>Enviar</b>. Te responderemos personalmente.', [['Prefiero llamar', () => answer('contacte')]]);
            setTimeout(() => { closeBox(); fm.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => fm.querySelector('[name=nom]').focus({ preventScroll: true }), 600); }, reduce ? 0 : 2600);
            return;
          }
        }
        const mail = 'mailto:info@dexoestudi.com?subject=' + encodeURIComponent('Presupuesto: ' + f.tipus) + '&body=' + encodeURIComponent(`Municipio: ${f.municipi}\n\n${msg}`);
        say(`¡Gracias! <a href="${mail}">Envíanos este resumen por correo</a> o llama al <a href="tel:+34606750036">606 750 036</a>.`, MENU());
      }
    };

    const reply = (raw) => {
      const t = norm(raw); if (!t) return;
      if (flow) return flowStep(raw.trim());
      for (const [k, re] of INT) {
        if (k === 'reforma' || k === 'projectes') break;
        if (re.test(t)) return answer(k);
      }
      const found = findProjects(t);
      if (found.length) return say(`He encontrado ${found.length === 1 ? 'este proyecto' : 'estos proyectos'}. Haz clic en uno para ver sus fotos:<div class="cb-ps">${found.map(projCard).join('')}</div>`, MENU());
      for (const [k, re] of INT) if (re.test(t)) return answer(k);
      say('No te he acabado de entender. Puedes preguntarme por <b>servicios</b>, <b>proyectos</b> o <b>presupuesto</b>, o escribir directamente al estudio.', MENU());
    };
    const fit = () => { q.style.height = 'auto'; q.style.height = Math.min(q.scrollHeight, 120) + 'px'; send.disabled = !q.value.trim(); };
    q.addEventListener('input', fit);
    q.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = q.value.trim(); if (!v) return;
      add(esc(v), 'me'); q.value = ''; fit(); setChips([]); togglePop(false); reply(v);
    });
    const togglePop = (on) => { pop.hidden = !on; moreB.setAttribute('aria-expanded', String(on)); moreB.classList.toggle('on', on); };
    moreB.addEventListener('click', () => togglePop(pop.hidden));
    pop.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      togglePop(false); add(esc(b.textContent), 'me'); setChips([]);
      b.dataset.k === 'budget' ? budget() : answer(b.dataset.k);
    });
    document.addEventListener('click', (e) => { if (!pop.hidden && !e.target.closest('.cb-pop, .cb-more')) togglePop(false); });
    const startBudget = () => { if (flow) return; add('Pedir presupuesto', 'me'); setChips([]); budget(); };
    box.querySelector('.cb-bud').addEventListener('click', startBudget);
    box.querySelector('.cb-go').addEventListener('click', startBudget);

    /* obrir / tancar */
    let started = false;
    const openBox = () => {
      box.hidden = false; requestAnimationFrame(() => box.classList.add('open'));
      fab.classList.add('on'); fab.setAttribute('aria-expanded', 'true'); fab.setAttribute('aria-label', 'Cerrar el asistente');
      if (!started) { started = true; answer('hola'); }
      setTimeout(() => q.focus({ preventScroll: true }), 50);
    };
    const closeBox = () => {
      box.classList.remove('open'); fab.classList.remove('on'); fab.setAttribute('aria-expanded', 'false'); fab.setAttribute('aria-label', 'Abrir el asistente de dexo');
      setTimeout(() => { if (!box.classList.contains('open')) box.hidden = true; }, reduce ? 0 : 260);
    };
    fab.addEventListener('click', () => (box.classList.contains('open') ? closeBox() : openBox()));
    box.querySelector('.cb-x').addEventListener('click', () => { closeBox(); fab.focus(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && box.classList.contains('open') && !(lb && lb.classList.contains('open'))) { closeBox(); fab.focus(); } });
  })();

})();
document.querySelectorAll('.promo-media').forEach((m) => {
  const v = m.querySelector('video'), btn = m.querySelector('.vid-btn');
  const set = (paused) => { btn.setAttribute('aria-pressed', paused ? 'true' : 'false'); btn.setAttribute('aria-label', paused ? 'Reproducir el vídeo de presentación' : 'Detener el vídeo de presentación'); m.classList.toggle('paused', paused); };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); set(true); }
  if (btn) btn.addEventListener('click', () => { if (m.classList.contains('paused')) { const r = v.play(); if (r) r.catch(() => {}); set(false); } else { v.pause(); set(true); } });
});
/* lletres del botó +: apareixen una a una, com a la portada */
document.querySelectorAll('.btn.plus .lbl').forEach((l) => {
  const t = l.textContent; l.setAttribute('aria-label', t);
  l.innerHTML = Array.from(t).map((c, i) => `<span class="lc" aria-hidden="true" style="--i:${i}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
});
