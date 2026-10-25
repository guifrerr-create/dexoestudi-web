(() => {
  const H = 'Habitatge', R = 'Rehabilitació i reforma', E = 'Equipaments', A = 'Activitats', D = 'Direcció d’execució';
  const P = [
    ['Rehabilitació integral d’edifici entre mitgeres', 'Rehabilitació', 'Centre històric de Balaguer', [H, R], 'mitgeres-historic'],
    ['Restaurant La Tagliatella', 'Reforma de local per a restaurant', 'Balaguer', [R, A], 'tagliatella', 2025],
    ['Sala d’actes del Palau Marc', 'Reforma per al Departament de Cultura', 'Barcelona', [R, E], 'palau-marc', 2024],
    ['Reforma integral d’habitatge', 'Reforma', 'Balaguer', [H, R], 'reforma-integral-habitatge'],
    ['Reforma interior d’habitatge unifamiliar', 'Direcció d’execució', 'Barcelona', [H, R, D], 'escala-barcelona'],
    ['Reforma de masia els Clotats', 'Rehabilitació', 'Gerb, Os de Balaguer', [H, R], 'clotats'],
    ['Rehabilitació de petita masia', 'Rehabilitació', 'Montargull', [H, R], 'montargull', 2025],
    ['Cases modulars Vivmo', 'Habitatge modular prefabricat', 'Balaguer', [H], 'vivmo-portada'],
    ['Sala de vetlles el Segre', 'Equipament', 'Balaguer', [E], 'vetlles'],
    ['Habitatge unifamiliar aïllat', 'Direcció d’execució i coordinació de seguretat i salut', 'Gerb, Os de Balaguer', [H, D], 'gerb-unifamiliar'],
    ['Habitatge unifamiliar', 'Project management, direcció d’execució i coordinació de seguretat i salut', 'Balaguer', [H, D], 'unifamiliar-balaguer'],
    ['Centre de Serveis', 'Direcció d’execució i coordinació de seguretat i salut', 'La Sentiu de Sió', [E, D], 'sentiu'],
    ['Reforma parcial d’habitatge entre mitgeres', 'Reforma', 'Balaguer', [H, R], 'mitgeres-balaguer'],
    ['Oficines comarcals del Departament d’Agricultura', 'Equipament', 'Balaguer', [E], 'agricultura'],
    ['Reforma d’oficines de Marmoles Alias', 'Reforma de local per a oficines', 'Balaguer', [R, A], 'marmoles-alias'],
    ['Reforma del showroom de Marmoles Alias', 'Reforma de local per a showroom', 'Balaguer', [R, A], 'marmoles-alias-showroom'],
    ['Llibreria Nobel', 'Reforma de local comercial', 'Balaguer', [R, A], 'llibreria-nobel'],
    ['Reforma integral d’edifici residencial', 'Rehabilitació', 'Centre històric de Balaguer', [H, R], 'centre-historic'],
    ['Habitatge unifamiliar', 'Direcció d’execució i coordinació de seguretat i salut', 'Vilanova de la Sal', [H, D], 'vilanova-sal'],
    ['Habitatge unifamiliar', 'Direcció d’execució i coordinació de seguretat i salut', 'Tèrmens', [H, D], 'termens'],
    ['Reforma de local per a oficina', 'Reforma de local per a activitat', 'Balaguer', [R, A], 'oficina-balaguer'],
    ['Rehabilitació d’habitatge unifamiliar', 'Rehabilitació', 'Tartareu', [H, R], 'tartareu'],
    ['Edifici plurifamiliar d’habitatges', 'Direcció d’execució i coordinació de seguretat i salut', 'Balaguer', [H, D], 'plurifamiliar'],
    ['Reforma d’entrada d’edifici plurifamiliar', 'Reforma', 'Balaguer', [R], 'entrada'],
    ['Reforma d’habitatge en edifici plurifamiliar', 'Reforma', 'Balaguer', [H, R], 'pis-balaguer'],
    ['Reforma de vestíbul d’edifici plurifamiliar', 'Reforma', 'Balaguer', [R], 'vestibul'],
    ['Bugaderia Happy Lúdic', 'Reforma de local per a bugaderia', 'Balaguer', [R, A], 'bugaderia'],
    ['Escola dominical', 'Reforma de local', 'Balaguer', [R, E], 'escola-dominical'],
    ['Sales de reunions de l’Escola Pia', 'Reforma', 'Balaguer', [R, E], 'escolapia'],
    ['Bar Las Vegas', 'Reforma de local per a bar', 'Balaguer', [R, A], 'lasvegas'],
    ['Bar Lo Tardeo', 'Reforma de local per a bar', 'Balaguer', [R, A], 'lotardeo'],
    ['Bar-restaurant Lo Pecat', 'Reforma de façana de bar-restaurant', 'Balaguer', [R, A], 'lopecat'],
    ['Racó Ibèric', 'Reforma de local comercial', 'Balaguer', [R, A], 'raco-iberic'],
  ].map(([title, type, place, cats, img, year]) => ({ title, type, place: year ? place + ' · ' + year : place, year, cats, key: img, src: 'img/projectes/' + img + '.jpg' }));
  /* fotos addicionals per projecte: clau -> llista de fitxers a img/projectes/ */
  const MORE = {
    tagliatella: ['tagliatella-1.jpg', 'tagliatella-2.jpg', 'tagliatella-3.jpg', 'tagliatella-4.jpg', 'tagliatella-5.jpg', 'tagliatella-6.jpg', 'tagliatella-7.jpg', 'tagliatella-8.jpg', 'tagliatella-9.jpg', 'tagliatella-10.jpg', 'tagliatella-11.jpg'],
    'pis-balaguer': ['pis-balaguer-1.jpg', 'pis-balaguer-2.jpg', 'pis-balaguer-3.jpg', 'pis-balaguer-4.jpg', 'pis-balaguer-5.jpg', 'pis-balaguer-6.jpg'],
    plurifamiliar: ['plurifamiliar-1.jpg', 'plurifamiliar-2.jpg'],
    tartareu: ['tartareu-1.jpg', 'tartareu-2.jpg', 'tartareu-3.jpg', 'tartareu-4.jpg', 'tartareu-7.jpg', 'tartareu-8.jpg', 'tartareu-9.jpg'],
    'mitgeres-historic': ['mitgeres-historic-1.jpg', 'mitgeres-historic-2.jpg', 'mitgeres-historic-3.jpg'],
    'escala-barcelona': ['barcelona-1.jpg', 'barcelona-2.jpg', 'barcelona-3.jpg', 'barcelona-4.jpg', 'barcelona-5.jpg', 'barcelona-6.jpg', 'barcelona-7.jpg', 'barcelona-8.jpg', 'barcelona-9.jpg', 'barcelona-10.jpg', 'barcelona-11.jpg', 'barcelona-12.jpg'],
    'palau-marc': ['palau-marc-1.jpg', 'palau-marc-2.jpg', 'palau-marc-3.jpg', 'palau-marc-4.jpg', 'palau-marc-5.jpg', 'palau-marc-6.jpg', 'palau-marc-7.jpg'],
    sentiu: ['sentiu-2.jpg', 'sentiu-3.jpg', 'sentiu-4.jpg', 'sentiu-5.jpg', 'sentiu-6.jpg', 'sentiu-7.jpg', 'sentiu-8.jpg', 'sentiu-9.jpg', 'sentiu-10.jpg'],
    'gerb-unifamiliar': ['gerb-1.jpg', 'gerb-3.jpg', 'gerb-4.jpg', 'gerb-5.jpg', 'gerb-6.jpg', 'gerb-7.jpg', 'gerb-8.jpg', 'gerb-9.jpg', 'gerb-10.jpg'],
    vetlles: ['vetlles-1.jpg', 'vetlles-2.jpg', 'vetlles-3.jpg', 'vetlles-4.jpg'],
    clotats: ['clotats-1.jpg', 'clotats-2.jpg', 'clotats-3.jpg', 'clotats-4.jpg', 'clotats-5.jpg', 'clotats-6.jpg'],
    'raco-iberic': ['raco-iberic-1.jpg', 'raco-iberic-2.jpg', 'raco-iberic-3.jpg', 'raco-iberic-4.jpg'],
    'llibreria-nobel': ['nobel-1.jpg', 'nobel-2.jpg', 'nobel-3.jpg', 'nobel-4.jpg', 'nobel-5.jpg', 'nobel-6.jpg'],
    'escola-dominical': ['escola-dominical-1.jpg', 'escola-dominical-2.jpg'],
    bugaderia: ['bugaderia-1.jpg', 'bugaderia-2.jpg', 'bugaderia-3.jpg', 'bugaderia-4.jpg'],
    montargull: ['masia-montargull-1.jpg', 'masia-montargull-2.jpg', 'masia-montargull-3.jpg'],
    entrada: ['entrada-1.jpg', 'entrada-2.jpg', 'entrada-3.jpg', 'entrada-4.jpg', 'entrada-5.jpg'],
    'reforma-integral-habitatge': ['reforma-integral-habitatge-1.jpg', 'reforma-integral-habitatge-2.jpg', 'reforma-integral-habitatge-3.jpg', 'reforma-integral-habitatge-4.jpg', 'reforma-integral-habitatge-5.jpg', 'reforma-integral-habitatge-6.jpg', 'reforma-integral-habitatge-7.jpg', 'reforma-integral-habitatge-8.jpg'],
    'marmoles-alias-showroom': ['showroom-1.jpg', 'showroom-2.jpg', 'showroom-3.jpg', 'showroom-4.jpg', 'showroom-5.jpg', 'showroom-6.jpg'],
    'marmoles-alias': ['oficines-alias-1.jpg', 'oficines-alias-2.jpg', 'oficines-alias-3.jpg', 'oficines-alias-4.jpg', 'oficines-alias-5.jpg', 'oficines-alias-6.jpg', 'oficines-alias-7.jpg'],
    'oficina-balaguer': ['oficina-balaguer-1.jpg', 'oficina-balaguer-2.jpg', 'oficina-balaguer-3.jpg'],
    'vivmo-portada': ['vivmo.jpg', 'vivmo-1.jpg', 'vivmo-2.jpg', 'vivmo-3.jpg', 'vivmo-4.jpg'],
    lopecat: ['lopecat-1.jpg', 'lopecat-2.jpg'],
    'vilanova-sal': ['vilanova-sal-1.jpg', 'vilanova-sal-2.jpg']
  };
  const big = (f) => f.replace('img/projectes/', 'img/projectes/w/').replace(/\.jpg$/, '.webp');
  const thumb = (f) => f.replace('img/projectes/', 'img/projectes/t/').replace(/\.jpg$/, '.webp');
  /*ALT*/const ALT = {"mitgeres-historic.jpg": "Façana de l’edifici rehabilitat amb terrasses i portes de fusta a la planta baixa", "mitgeres-historic-1.jpg": "Façana al vespre amb les terrasses il·luminades", "mitgeres-historic-2.jpg": "Vista frontal de la façana il·luminada entre les mitgeres", "mitgeres-historic-3.jpg": "Façana de nit amb la planta baixa de fusta i vidre", "tagliatella.jpg": "Taula parada al menjador, amb arcs il·luminats al fons", "tagliatella-1.jpg": "Sala amb el rètol lluminós L’italianità i sofàs rodons", "tagliatella-2.jpg": "Façana del restaurant amb el rètol de La Tagliatella", "tagliatella-3.jpg": "Menjador amb sostre fosc i llum indirecta", "tagliatella-4.jpg": "Menjador llarg amb el rètol Ti penso sempre al fons", "tagliatella-5.jpg": "Sala amb arcs il·luminats i paviment de pedra", "tagliatella-6.jpg": "Menjador amb murals i parets vermelles", "tagliatella-7.jpg": "Taules en filera al llarg del menjador", "tagliatella-8.jpg": "Taules parades amb tovalles blanques", "tagliatella-9.jpg": "Jardinera amb plantes al costat de l’escala", "tagliatella-10.jpg": "Racó amb font, arcs i banc entapissat", "tagliatella-11.jpg": "Passadís cap als lavabos", "palau-marc.jpg": "Sala d’actes vista des del pati, sota l’arc de pedra", "palau-marc-1.jpg": "Façana de vidre de la sala sota la volta de pedra", "palau-marc-2.jpg": "Cadires negres en files a la sala d’actes", "palau-marc-3.jpg": "Taules en U amb micròfons davant la pantalla", "palau-marc-4.jpg": "Sala preparada per a una jornada amb taules de treball", "reforma-integral-habitatge.jpg": "Rebedor amb revestiment de fusta i mòdul gris amb porta enrasada", "reforma-integral-habitatge-1.jpg": "Cuina gris fosc amb illa i armaris de fusta", "reforma-integral-habitatge-2.jpg": "Pilar de formigó vist davant la cuina", "reforma-integral-habitatge-3.jpg": "Illa de cuina amb taulell negre i placa de gas", "reforma-integral-habitatge-4.jpg": "Aigüera amb aixeta d’extensió i frontal de marbre negre", "reforma-integral-habitatge-5.jpg": "Porta enrasada a la paret de fusta i radiador negre", "reforma-integral-habitatge-6.jpg": "Dutxa amb mampara de vidre i tovalloler negre", "reforma-integral-habitatge-7.jpg": "Dos lavabos de sobre taulell davant un mirall", "reforma-integral-habitatge-8.jpg": "Lavabo blanc amb aixeta negra encastada", "escala-barcelona.jpg": "Vestíbul amb escala i paviment hidràulic", "barcelona-1.jpg": "Escala de cargol vista des de dalt", "barcelona-2.jpg": "Portes vidrieres i paviment hidràulic", "barcelona-3.jpg": "Cuina amb illa d’acer i llums geomètrics", "barcelona-4.jpg": "Sala d’estar amb sofà i llibreria verda", "barcelona-5.jpg": "Bany amb doble lavabo i banyera exempta", "barcelona-6.jpg": "Dormitori blanc amb llums penjants", "barcelona-7.jpg": "Lavabo amb paret fosca i mirall de peces", "barcelona-8.jpg": "Altell amb escala blanca sota coberta", "barcelona-9.jpg": "Dormitori sota coberta amb bigues blanques", "barcelona-10.jpg": "Estudi sota coberta amb finestra en arc", "barcelona-11.jpg": "Camí del jardí al costat de la casa", "barcelona-12.jpg": "Jardí amb la porxada al fons", "clotats.jpg": "Façana de pedra de la masia amb porxo de fusta", "clotats-1.jpg": "Piscina davant la masia", "clotats-2.jpg": "Masia i piscina amb l’arbre al fons", "clotats-3.jpg": "Porxo amb cadires penjades", "clotats-4.jpg": "Sala i menjador amb sostre de bigues de fusta", "clotats-5.jpg": "Cuina de fusta amb finestra a l’exterior", "clotats-6.jpg": "Pati interior amb paviment de rajola", "montargull.jpg": "Planta de dalt amb bigues de fusta i xarxa a l’altell", "masia-montargull-1.jpg": "Façana lateral de pedra de la masia", "masia-montargull-2.jpg": "Sala amb parets de pedra i la xarxa al sostre", "masia-montargull-3.jpg": "Façana de pedra amb el finestral negre", "vetlles.jpg": "Porxo amb paviment de fusta i pati al fons", "vetlles-1.jpg": "Pati interior amb paret de llistons de fusta", "vetlles-2.jpg": "Pati amb tarima i grans finestrals", "vetlles-3.jpg": "Accés amb revestiment de llistons de fusta", "vetlles-4.jpg": "Pati amb plantes i paret de fusta", "gerb-unifamiliar.jpg": "Volums blancs de la casa i tanca fosca", "gerb-1.jpg": "Casa vista des del carrer amb el volum en voladís", "gerb-3.jpg": "Piscina al costat del porxo", "gerb-4.jpg": "Porxo amb paret de pedra i piscina", "gerb-5.jpg": "Sala d’estar amb illa de marbre", "gerb-6.jpg": "Sala oberta al porxo amb grans finestrals", "gerb-7.jpg": "Cuina amb mobles de fusta i illa de marbre", "gerb-8.jpg": "Escala amb barana de vidre i armaris de fusta", "gerb-9.jpg": "Sortida al porxo amb prestatgeria de fusta", "gerb-10.jpg": "Bany amb moble de fusta i lavabo rodó", "sentiu.jpg": "Volums blancs del centre de serveis", "sentiu-2.jpg": "Façana principal amb volums de diferents alçades", "sentiu-3.jpg": "Vista lateral de l’edifici", "sentiu-4.jpg": "Vista aèria de l’edifici", "sentiu-5.jpg": "Vista aèria de les cobertes", "sentiu-6.jpg": "Vista zenital de les cobertes", "sentiu-7.jpg": "Vista aèria des del carrer", "sentiu-8.jpg": "Interior amb claraboia i obertures al pati", "sentiu-9.jpg": "Interior amb sostre de fusta i sortida exterior", "sentiu-10.jpg": "Sala interior amb finestrals", "mitgeres-balaguer.jpg": "Cuina blanca amb illa i escala de fusta", "agricultura.jpg": "Entrada de vidre de les oficines", "marmoles-alias.jpg": "Sala de reunions amb taula de marbre i escala al fons", "oficines-alias-1.jpg": "Escala d’acer vista des del pati, a través del vidre", "oficines-alias-2.jpg": "Taula de marbre al costat de la paret de maó", "oficines-alias-3.jpg": "Passadís amb paret de maó i llum al sòcol", "oficines-alias-4.jpg": "Detall dels cables de l’escala", "oficines-alias-5.jpg": "Paret de maó vist i taula de marbre", "oficines-alias-6.jpg": "Pati amb bambú i graves vist des de dins", "marmoles-alias-showroom.jpg": "Showroom amb paviment de marbre negre i illa blanca", "showroom-1.jpg": "Showroom amb mostres de pedra i armaris foscos", "showroom-2.jpg": "Paret de mostres de pedra i porcellànic", "showroom-3.jpg": "Aigüera i paret de pedra amb el logotip", "showroom-4.jpg": "Aixeta i revestiment de travertí", "showroom-5.jpg": "Paret de travertí amb línies de llum", "showroom-6.jpg": "Moble gris amb taulell blanc davant la pedra", "llibreria-nobel.jpg": "Façana de la llibreria Nobel", "nobel-1.jpg": "Escala de fusta amb prestatgeria blanca", "nobel-2.jpg": "Taulell i prestatgeries de la llibreria", "nobel-3.jpg": "Taula de novetats i prestatges de llibres", "centre-historic.jpg": "Cuina blanca i paviment hidràulic", "vilanova-sal.jpg": "Casa amb la muntanya al fons", "termens.jpg": "Habitatge blanc amb porta de garatge fosca", "oficina-balaguer.jpg": "Volum de fusta a l’interior de l’oficina", "oficina-balaguer-1.jpg": "Volums de fusta i butaca a la zona d’espera", "oficina-balaguer-2.jpg": "Zona d’espera al costat de l’aparador", "oficina-balaguer-3.jpg": "Sala de reunions amb parets de fusta", "tartareu.jpg": "Dormitori amb bigues de fusta i bany de vidre al fons", "tartareu-1.jpg": "Dormitori sota les bigues de fusta", "tartareu-2.jpg": "Sala amb llar de foc i balconera", "tartareu-3.jpg": "Cuina lineal de fusta i porta corredissa", "tartareu-4.jpg": "Escala amb la paret de pedra original", "tartareu-7.jpg": "Escala entre parets de pedra i maó", "tartareu-8.jpg": "Bany amb dos lavabos de pedra", "tartareu-9.jpg": "Línia de llum al costat de la paret de pedra", "plurifamiliar.jpg": "Façana de l’edifici amb planta baixa fosca", "plurifamiliar-1.jpg": "Portal d’entrada amb revestiment de pedra gris", "plurifamiliar-2.jpg": "Vestíbul amb revestiment de fusta i llum indirecta", "entrada.jpg": "Escala amb volta de rajola i revestiment de fusta", "entrada-1.jpg": "Vestíbul amb bústies, escala i porta al carrer", "entrada-2.jpg": "Escala i porta de l’ascensor", "entrada-3.jpg": "Paret de fusta i estora d’entrada", "entrada-4.jpg": "Detall de la volta i el revestiment de fusta", "entrada-5.jpg": "Façana i porta d’entrada de vidre", "pis-balaguer.jpg": "Cuina amb illa i campana", "pis-balaguer-1.jpg": "Illa de cuina amb taulell de marbre", "pis-balaguer-2.jpg": "Sala diàfana amb carril de focus", "pis-balaguer-3.jpg": "Estança buida amb llum lineal", "pis-balaguer-4.jpg": "Bany amb moble de fusta i dutxa", "pis-balaguer-5.jpg": "Bany amb dutxa d’obra", "pis-balaguer-6.jpg": "Dutxa amb mampara de vidre", "vestibul.jpg": "Vestíbul amb bústies de fusta i llum de globus", "bugaderia.jpg": "Rètol lluminós Happy Bubbles i rentadores", "bugaderia-1.jpg": "Vista llarga del local amb rentadores i taulells", "bugaderia-2.jpg": "Taulell de fusta i rentadores al fons", "bugaderia-3.jpg": "Zona de plegar amb banc de fusta", "bugaderia-4.jpg": "Rètol lluminós sobre la paret de rajola blanca", "escola-dominical.jpg": "Sala amb paret verda i línies de llum", "escola-dominical-1.jpg": "Sala de reunions amb pantalla i paret verda", "escola-dominical-2.jpg": "Espai infantil amb taules blaves", "escolapia.jpg": "Sala de reunions vista a través de la porta", "lasvegas.jpg": "Interior del bar amb llums de fibra i taules de marbre", "lotardeo.jpg": "Jardí vertical amb el rètol lluminós del bar", "raco-iberic.jpg": "Sala amb taules de fusta i llums penjants", "raco-iberic-1.jpg": "Barra i prestatgeria de vins", "raco-iberic-2.jpg": "Detall de la llum a la fusta", "raco-iberic-3.jpg": "Detall de la taula de fusta i acer", "raco-iberic-4.jpg": "Vitrina de productes ibèrics", "vivmo.jpg": "Mòdul Vivmo amb revestiment de ciment i gran finestral", "vivmo-1.jpg": "Interior revestit de fusta amb butaca groga", "vivmo-2.jpg": "Finestra emmarcada en fusta amb vistes al camp", "vivmo-3.jpg": "Fotomuntatge del mòdul en un entorn rural", "vivmo-4.jpg": "Transport del mòdul en camió grua", "unifamiliar-balaguer.jpg": "Imatge virtual del nou volum amb façana de vidre davant la casa existent", "lopecat.jpg": "Façana del bar amb llistons de fusta i rètol blanc", "lopecat-1.jpg": "Detall del rètol sobre els llistons de fusta", "lopecat-2.jpg": "Façana de nit amb el rètol il·luminat", "vivmo-portada.jpg": "Imatge del mòdul Vivmo fosc amb gran finestral, enmig del camp", "palau-marc-5.jpg": "Pati del palau amb la sala d’actes il·luminada sota l’arc", "palau-marc-6.jpg": "Sala buida amb focus sobre la paret del fons", "palau-marc-7.jpg": "Detall dels focus al marc negre sota la volta de pedra", "nobel-4.jpg": "Escala de fusta i barana de barres blanques vista des de dalt", "nobel-5.jpg": "Graons de fusta de l’escala metàl·lica blanca", "nobel-6.jpg": "Planta de dalt amb gelosia de lamel·les blanques", "vilanova-sal-1.jpg": "Façana principal amb el garatge i la muntanya al fons", "vilanova-sal-2.jpg": "Casa amb terrassa sobre el garatge i rampa d’accés", "oficines-alias-7.jpg": "Pilar i paret de maó vist amb llum al sòcol de marbre"};/*/ALT*/
  const altOf = (f) => ALT[f.split('/').pop()] || '';
  P.forEach((p) => { p.photos = [p.src].concat((MORE[p.key] || []).map((f) => 'img/projectes/' + f)); });
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
    x.innerHTML = `<div class="xp-in"><div class="xp-row">${p.photos.map((src, k) => `<button type="button" class="xp-ph" data-k="${k}" aria-label="Amplia la foto ${k + 1} de ${esc(p.title)}${altOf(src) ? ': ' + esc(altOf(src)) : ''}"><img src="${thumb(src)}" alt="" loading="lazy" decoding="async"></button>`).join('')}</div><div class="xp-h"><div><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></div><button type="button" class="iconbtn xp-x" aria-label="Tanca les fotos del projecte">×</button></div></div>`;
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
    grid.innerHTML = list.map((p, i) => `<button type="button" class="tile" data-i="${i}" aria-expanded="false" aria-label="Mostra les fotos de ${esc(p.title)}, ${esc(p.type)}, ${esc(p.place)}"><img src="${thumb(p.src)}" alt="" loading="lazy" decoding="async"><span class="veil"><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></span></button>`).join('');
    grid.querySelectorAll('.tile').forEach((t) => t.addEventListener('click', () => expand(+t.dataset.i, t)));
  };
  if (grid) {
    let rt0; addEventListener('resize', () => { clearTimeout(rt0); rt0 = setTimeout(() => { if (openI !== null) { const i = openI; const t = grid.querySelectorAll('.tile')[i]; closeX(); openI = null; if (t) expand(i, t); } }, 200); });
    const filters = document.getElementById('filters');
    const more = document.getElementById('more');
    const ROWS = +(grid.dataset.rows || 0);
    let rows = ROWS, cat = 'Tots';
    const cats = ['Tots', H, R, E, A, D];
    const PL = '<svg class="pl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><line class="h" x1="4" y1="12" x2="20" y2="12"/><line class="v" x1="12" y1="4" x2="12" y2="20"/></svg>';
    const drawGrid = () => {
      const list = P.filter((p) => cat === 'Tots' || p.cats.includes(cat));
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
      cat = 'Tots'; if (filters) drawFilters();
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
    const mailto = (fd) => 'mailto:info@dexoestudi.com?subject=' + encodeURIComponent('Consulta des del web: ' + (fd.get('nom') || '')) + '&body=' + encodeURIComponent(`Nom: ${fd.get('nom') || ''}\nCorreu: ${fd.get('correu') || ''}\nTelèfon: ${fd.get('telefon') || ''}\nMunicipi: ${fd.get('municipi') || ''}\n\n${fd.get('missatge') || ''}`);
    cf.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (cf.querySelector('[name=_honey]').value) return;
      const fd = new FormData(cf);
      btn.disabled = true; cf.classList.add('sending');
      msgBox.hidden = false; msgBox.className = 'cf-msg'; msgBox.textContent = 'Enviant…';
      try {
        const body = new URLSearchParams();
        ['nom', 'correu', 'telefon', 'municipi', 'missatge', '_honey'].forEach((k) => body.append(k, fd.get(k) || ''));
        const r = await fetch(cf.action, { method: 'POST', body });
        const ok = r.ok && (await r.json()).success === true;
        if (!ok) throw new Error('send');
        location.href = 'gracies.html';
      } catch (err) {
        btn.disabled = false; cf.classList.remove('sending');
        msgBox.className = 'cf-msg err';
        msgBox.innerHTML = 'No s’ha pogut enviar des del web. <a href="' + mailto(fd) + '">Envia’l per correu</a> (ja et deixem el missatge escrit) o truca al <a href="tel:+34606750036">606 750 036</a>.';
      }
    });
  }

  /* mapa: només es carrega quan el visitant ho demana (galetes de Google) */
  document.querySelectorAll('.map-off').forEach((m) => {
    m.querySelector('.map-load').addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.title = 'Mapa de l’estudi dexo a Balaguer'; f.src = m.dataset.src.replace(/&amp;/g, '&');
      f.referrerPolicy = 'no-referrer-when-downgrade'; f.allowFullscreen = true;
      m.classList.remove('map-off'); m.innerHTML = ''; m.append(f); f.focus();
    });
  });

  /* portada: Som + paraula */
  const word = document.getElementById('word');
  if (word) {
    const W = ['arquitectura', 'disseny', 'rehabilitació', 'execució', 'seguretat'];
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
    fab.innerHTML = ICON + '<span class="cb-lbl">Pregunta’ns</span>';
    fab.setAttribute('aria-label', 'Obre l’assistent de dexo');
    const box = document.createElement('section');
    box.className = 'cb'; box.id = 'cb'; box.setAttribute('aria-label', 'Assistent de dexo'); box.hidden = true;
    const PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
    const UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    const CHEV = '<svg class="cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10l5 5 5-5"/></svg>';
    const TOPICS = [['Què feu?', 'serveis'], ['Veure projectes', 'projectes'], ['Demanar pressupost', 'budget'], ['Direcció d’execució', 'deo'], ['Seguretat i salut', 'ss'], ['Contacte', 'contacte'], ['On sou?', 'on']];
    box.innerHTML = `<div class="cb-card"><header class="cb-h"><div class="cb-id"><span class="cb-av">d</span><div><b>dexo<i></i></b><small><span class="cb-on"></span>Assistent de l’estudi</small></div></div><button type="button" class="cb-x" aria-label="Tanca l’assistent">${ICON}</button></header>
      <div class="cb-log" role="log" aria-live="polite"></div>
      <div class="cb-chips"></div>
      <form class="cb-in">
        <label class="sr" for="cb-q">Escriu la teva pregunta</label><textarea id="cb-q" rows="1" autocomplete="off" placeholder="Escriu la teva pregunta…" maxlength="300"></textarea>
        <div class="cb-bar">
          <div class="cb-tools">
            <button type="button" class="cb-ib cb-more" aria-label="Temes" aria-haspopup="true" aria-expanded="false">${PLUS}</button>
            <button type="button" class="cb-pill cb-bud">Pressupost ${CHEV}</button>
          </div>
          <button type="submit" class="cb-ib cb-send" aria-label="Envia" disabled>${UP}</button>
        </div>
        <div class="cb-pop" hidden><p>Temes</p>${TOPICS.map(([l, k]) => `<button type="button" data-k="${k}">${esc(l)}</button>`).join('')}</div>
      </form></div>
      <aside class="cb-promo"><span><b>Pressupost sense compromís.</b></span><button type="button" class="cb-go">Demana’l</button></aside>`;
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
    const CATS = [['Habitatge', H], ['Rehabilitació i reforma', R], ['Equipaments', E], ['Locals i activitats', A], ['Direcció d’execució', D]];
    const showCat = (c) => { go(() => api.cat && api.cat(c)); };

    const MENU = () => [
      ['Què feu?', () => answer('serveis')],
      ['Veure projectes', () => answer('projectes')],
      ['Demanar pressupost', () => budget()],
      ['Contacte', () => answer('contacte')],
    ];
    const A_ = {
      hola: () => say('Hola! Sóc l’assistent de <b>dexo</b>. Et puc explicar què fem, ensenyar-te projectes o ajudar-te a demanar pressupost.', MENU()),
      serveis: () => say('Fem <b>projectes d’arquitectura</b> (habitatge nou, reformes i rehabilitació), <b>interiorisme</b>, <b>direcció d’execució</b> d’obra i <b>coordinació de seguretat i salut</b>. També redactem plans d’autoprotecció (PAU) i treballem en BIM.', [['Direcció d’execució', () => answer('deo')], ['Veure projectes', () => answer('projectes')], ['Demanar pressupost', () => budget()]]),
      projectes: () => say('Quin tipus de projecte t’interessa? També pots escriure una paraula, per exemple <i>masia</i>, <i>restaurant</i> o <i>Barcelona</i>.', CATS.map(([l, c]) => [l, () => { showCat(c); say(`Aquí els tens: t’he filtrat els projectes de <b>${esc(l.toLowerCase())}</b>. Clica’n un per veure’n les fotos.`, MENU()); }])),
      preu: () => say('Cada encàrrec és diferent: depèn de la superfície, de l’abast de l’obra i de la fase en què et trobis. Explica’m què vols fer i et preparem un <b>pressupost sense compromís</b>.', [['Demanar pressupost', () => budget()], ['Contacte', () => answer('contacte')]]),
      contacte: () => say('Pots trucar al <a href="tel:+34606750036">606 750 036</a>, escriure a <a href="mailto:info@dexoestudi.com">info@dexoestudi.com</a> o venir a l’estudi, al Ptge. Gaspar de Portolà, 1, 1r 1a, de Balaguer.', [['Demanar pressupost', () => budget()], ['On sou?', () => answer('on')]]),
      on: () => say('Som al <b>Passatge Gaspar de Portolà, 1, 1r 1a, 25600 Balaguer</b>. <a href="https://www.google.com/maps/search/?api=1&query=Passatge+Gaspar+de+Portol%C3%A0+1+25600+Balaguer" target="_blank" rel="noopener">Obre el mapa ↗</a>. Si vens, avisa’ns abans per assegurar que hi som.', [['Contacte', () => answer('contacte')], ['On treballeu?', () => answer('zona')]]),
      zona: () => say('L’estudi és a Balaguer i treballem sobretot a la Noguera i a les comarques de Lleida. També fem encàrrecs a Barcelona.', [['Veure projectes', () => answer('projectes')], ['Demanar pressupost', () => budget()]]),
      deo: () => say('La <b>direcció d’execució</b> vetlla perquè l’obra es construeixi tal com diu el projecte: control de qualitat i de materials, amidaments, certificacions i seguiment del termini i del cost. Ho fem en habitatges, equipaments i locals.', [['Veure’n projectes', () => { showCat(D); say('T’he filtrat els projectes de direcció d’execució.', MENU()); }], ['Seguretat i salut', () => answer('ss')]]),
      ss: () => say('Coordinem la <b>seguretat i salut</b> de les obres en fase de projecte i d’execució: estudis i plans, visites i seguiment. Ho fem també a través de <a href="https://plomada.cat" target="_blank" rel="noopener">Plomada SiS ↗</a>.', [['Demanar pressupost', () => budget()], ['Què més feu?', () => answer('serveis')]]),
      llicencia: () => say('Redactem el projecte i la documentació per tramitar la <b>llicència d’obres</b> o la comunicació prèvia a l’Ajuntament, i en fem el seguiment fins que la tens.', [['Demanar pressupost', () => budget()], ['Contacte', () => answer('contacte')]]),
      reforma: () => say('Fem reformes integrals i parcials d’habitatges i locals, i rehabilitacions d’edificis i masies: des de l’estat actual i el projecte fins a la direcció de l’obra.', [['Veure’n projectes', () => { showCat(R); say('T’he filtrat les rehabilitacions i reformes.', MENU()); }], ['Demanar pressupost', () => budget()]]),
      qui: () => say('<b>dexo</b> és l’estudi d’arquitectura de <b>Guifré Ricart i Real</b>, a Balaguer des del 2011. És especialista en BIM i està acreditat per redactar plans d’autoprotecció (PAU).', [['Què feu?', () => answer('serveis')], ['Contacte', () => answer('contacte')]]),
      gracies: () => say('A tu! Si necessites res més, aquí em tens.', MENU()),
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
      say('Perfecte. Quin tipus d’obra tens al cap?', ['Habitatge nou', 'Reforma o rehabilitació', 'Local o activitat', 'Direcció d’execució', 'Una altra cosa'].map((l) => [l, () => { flow.tipus = l; flow.step = 1; say('On és l’obra? (municipi)', []); q.focus(); }]));
    };
    const flowStep = (txt) => {
      if (flow.step === 1) { flow.municipi = txt; flow.step = 2; say('Explica’m breument què vols fer: superfície aproximada, estat actual, terminis…'); return; }
      if (flow.step === 2) {
        flow.desc = txt; const f = flow; flow = null;
        const msg = `${f.tipus}. ${f.desc}`;
        if (home) {
          const fm = document.querySelector('form.cform');
          if (fm) {
            fm.querySelector('[name=municipi]').value = f.municipi;
            fm.querySelector('[name=missatge]').value = msg;
            say('Fet! T’he omplert el formulari de contacte amb el que m’has explicat. Afegeix-hi el teu nom i correu, accepta la política de privadesa i prem <b>Envia</b>. Et respondrem personalment.', [['Prefereixo trucar', () => answer('contacte')]]);
            setTimeout(() => { closeBox(); fm.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => fm.querySelector('[name=nom]').focus({ preventScroll: true }), 600); }, reduce ? 0 : 2600);
            return;
          }
        }
        const mail = 'mailto:info@dexoestudi.com?subject=' + encodeURIComponent('Pressupost: ' + f.tipus) + '&body=' + encodeURIComponent(`Municipi: ${f.municipi}\n\n${msg}`);
        say(`Gràcies! <a href="${mail}">Envia’ns aquest resum per correu</a> o truca al <a href="tel:+34606750036">606 750 036</a>.`, MENU());
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
      if (found.length) return say(`He trobat ${found.length === 1 ? 'aquest projecte' : 'aquests projectes'}. Clica’n un per veure’n les fotos:<div class="cb-ps">${found.map(projCard).join('')}</div>`, MENU());
      for (const [k, re] of INT) if (re.test(t)) return answer(k);
      say('No t’he acabat d’entendre. Pots preguntar-me per <b>serveis</b>, <b>projectes</b> o <b>pressupost</b>, o escriure directament a l’estudi.', MENU());
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
    const startBudget = () => { if (flow) return; add('Demanar pressupost', 'me'); setChips([]); budget(); };
    box.querySelector('.cb-bud').addEventListener('click', startBudget);
    box.querySelector('.cb-go').addEventListener('click', startBudget);

    /* obrir / tancar */
    let started = false;
    const openBox = () => {
      box.hidden = false; requestAnimationFrame(() => box.classList.add('open'));
      fab.classList.add('on'); fab.setAttribute('aria-expanded', 'true'); fab.setAttribute('aria-label', 'Tanca l’assistent');
      if (!started) { started = true; answer('hola'); }
      setTimeout(() => q.focus({ preventScroll: true }), 50);
    };
    const closeBox = () => {
      box.classList.remove('open'); fab.classList.remove('on'); fab.setAttribute('aria-expanded', 'false'); fab.setAttribute('aria-label', 'Obre l’assistent de dexo');
      setTimeout(() => { if (!box.classList.contains('open')) box.hidden = true; }, reduce ? 0 : 260);
    };
    fab.addEventListener('click', () => (box.classList.contains('open') ? closeBox() : openBox()));
    box.querySelector('.cb-x').addEventListener('click', () => { closeBox(); fab.focus(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && box.classList.contains('open') && !(lb && lb.classList.contains('open'))) { closeBox(); fab.focus(); } });
  })();

})();
document.querySelectorAll('.promo-media').forEach((m) => {
  const v = m.querySelector('video'), btn = m.querySelector('.vid-btn');
  const set = (paused) => { btn.setAttribute('aria-pressed', paused ? 'true' : 'false'); btn.setAttribute('aria-label', paused ? 'Reprodueix el vídeo de presentació' : 'Atura el vídeo de presentació'); m.classList.toggle('paused', paused); };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); set(true); }
  if (btn) btn.addEventListener('click', () => { if (m.classList.contains('paused')) { const r = v.play(); if (r) r.catch(() => {}); set(false); } else { v.pause(); set(true); } });
});
/* lletres del botó +: apareixen una a una, com a la portada */
document.querySelectorAll('.btn.plus .lbl').forEach((l) => {
  const t = l.textContent; l.setAttribute('aria-label', t);
  l.innerHTML = Array.from(t).map((c, i) => `<span class="lc" aria-hidden="true" style="--i:${i}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
});
