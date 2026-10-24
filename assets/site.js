(() => {
  const H = 'Habitatge', R = 'Rehabilitació i reforma', E = 'Equipaments', A = 'Activitats', D = 'Direcció d’execució';
  const P = [
    ['Rehabilitació integral d’edifici entre mitgeres', 'Rehabilitació', 'Centre històric de Balaguer', [H, R], 'mitgeres-historic'],
    ['Restaurant La Tagliatella', 'Reforma de local per a restaurant', 'Balaguer', [R, A], 'tagliatella'],
    ['Sala d’actes del Palau Marc', 'Reforma per al Departament de Cultura', 'Barcelona', [R, E], 'palau-marc'],
    ['Sala de vetlles el Segre', 'Equipament', 'Balaguer', [E], 'vetlles'],
    ['Reforma de masia els Clotats', 'Rehabilitació', 'Gerb, Os de Balaguer', [H, R], 'clotats'],
    ['Centre de Serveis', 'Direcció d’execució i coordinació de seguretat i salut', 'La Sentiu de Sió', [E, D], 'sentiu'],
    ['Reforma interior d’habitatge unifamiliar', 'Direcció d’execució', 'Barcelona', [H, R, D], 'escala-barcelona'],
    ['Reforma parcial d’habitatge entre mitgeres', 'Reforma', 'Balaguer', [H, R], 'mitgeres-balaguer'],
    ['Oficines comarcals del Departament d’Agricultura', 'Equipament', 'Balaguer', [E], 'agricultura'],
    ['Reforma d’oficines de Marmoles Alias', 'Reforma de local per a oficines', 'Balaguer', [R, A], 'marmoles-alias'],
    ['Reforma del showroom de Marmoles Alias', 'Reforma de local per a showroom', 'Balaguer', [R, A], 'marmoles-alias-showroom'],
    ['Reforma integral d’habitatge', 'Reforma', 'Balaguer', [H, R], 'reforma-integral-habitatge'],
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
    ['Racó Ibèric', 'Reforma de local comercial', 'Balaguer', [R, A], 'raco-iberic'],
  ].map(([title, type, place, cats, img]) => ({ title, type, place, cats, key: img, src: 'img/projectes/' + img + '.jpg' }));
  /* fotos addicionals per projecte: clau -> llista de fitxers a img/projectes/ */
  const MORE = {
    clotats: ['clotats-1.jpg', 'clotats-2.jpg', 'clotats-3.jpg', 'clotats-4.jpg', 'clotats-5.jpg', 'clotats-6.jpg']
  };
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
    lb.querySelector('img').src = p.src; lb.querySelector('img').alt = p.title;
    lb.querySelector('b').textContent = p.title;
    lb.querySelector('small').textContent = p.type + ' · ' + p.place;
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus();
  };
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; if (last) last.focus(); };
  if (lb) { lb.addEventListener('click', closeLb); addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) closeLb(); }); }

  /* graella de projectes */
  const grid = document.getElementById('grid');
  const renderGrid = (list) => {
    grid.innerHTML = list.map((p, i) => `<button type="button" class="tile" data-i="${i}" aria-label="Amplia ${esc(p.title)}, ${esc(p.type)}, ${esc(p.place)}"><img src="${p.src}" alt="" loading="lazy" decoding="async"><span class="veil"><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></span></button>`).join('');
    grid.querySelectorAll('.tile').forEach((t) => t.addEventListener('click', () => openLb(list[+t.dataset.i], t)));
  };
  if (grid) {
    const filters = document.getElementById('filters');
    if (filters) {
      const cats = ['Tots', H, R, E, A, D];
      let cur = 'Tots';
      const count = document.getElementById('count');
      const draw = () => {
        const list = P.filter((p) => cur === 'Tots' || p.cats.includes(cur));
        const PL = '<svg class="pl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><line class="h" x1="4" y1="12" x2="20" y2="12"/><line class="v" x1="12" y1="4" x2="12" y2="20"/></svg>';
        filters.innerHTML = cats.map((c) => `<button type="button" class="flt" aria-pressed="${c === cur}" aria-label="${esc(c)}">${PL}<span class="fl" aria-hidden="true">${Array.from(c).map((ch, i) => `<span class="lc" style="--i:${i}">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('')}</span></button>`).join('');
        filters.querySelectorAll('button').forEach((b, k) => b.addEventListener('click', () => { cur = cats[k]; draw(); }));
        if (count) count.textContent = list.length + ' projectes · ' + (cur === 'Tots' ? 'tots els encàrrecs' : cur.toLowerCase());
        renderGrid(list);
      };
      draw();
    } else if (grid.dataset.rows) {
      const more = document.getElementById('more');
      let rows = +grid.dataset.rows;
      const cols = () => Math.max(1, getComputedStyle(grid).gridTemplateColumns.split(' ').length);
      let openI = null;
      const closeX = () => { const old = grid.querySelector('.xp'); if (old) old.remove(); grid.querySelectorAll('.tile.on').forEach((t) => { t.classList.remove('on'); t.setAttribute('aria-expanded', 'false'); }); };
      const expand = (i, tile) => {
        if (openI === i) { closeX(); openI = null; return; }
        closeX(); openI = i;
        const p = P[i], c = cols(), tiles = [...grid.querySelectorAll('.tile')];
        const end = Math.min(Math.floor(i / c) * c + c - 1, tiles.length - 1);
        const x = document.createElement('div'); x.className = 'xp'; x.id = 'xp';
        x.innerHTML = `<div class="xp-in"><div class="xp-h"><div><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></div><button type="button" class="iconbtn xp-x" aria-label="Tanca les fotos del projecte">×</button></div><div class="xp-row">${p.photos.map((src, k) => `<button type="button" class="xp-ph" data-k="${k}" aria-label="Amplia la foto ${k + 1} de ${esc(p.title)}"><img src="${src}" alt="" loading="lazy" decoding="async"></button>`).join('')}</div></div>`;
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
        row.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; dr = { x: e.clientX, l: row.scrollLeft }; moved = false; row.classList.add('drag'); });
        addEventListener('pointermove', (e) => { if (!dr) return; const dx = e.clientX - dr.x; if (Math.abs(dx) > 4) moved = true; row.scrollLeft = dr.l - dx; });
        addEventListener('pointerup', () => { dr = null; row.classList.remove('drag'); });
        row.addEventListener('click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
        row.addEventListener('wheel', (e) => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && row.scrollWidth > row.clientWidth) { e.preventDefault(); row.scrollLeft += e.deltaY; } }, { passive: false });
        requestAnimationFrame(() => x.classList.add('open'));
        setTimeout(() => x.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' }), 320);
      };
      const drawHome = () => {
        const n = Math.min(P.length, rows * cols());
        openI = null;
        grid.innerHTML = P.slice(0, n).map((p, i) => `<button type="button" class="tile" data-i="${i}" aria-expanded="false" aria-label="Mostra les fotos de ${esc(p.title)}, ${esc(p.type)}, ${esc(p.place)}"><img src="${p.src}" alt="" loading="lazy" decoding="async"><span class="veil"><b>${esc(p.title)}</b><small>${esc(p.type)} · ${esc(p.place)}</small></span></button>`).join('');
        grid.querySelectorAll('.tile').forEach((t) => t.addEventListener('click', () => expand(+t.dataset.i, t)));
        if (more) more.parentElement.hidden = n >= P.length;
      };
      if (more) more.addEventListener('click', () => { rows += 4; drawHome(); });
      let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(drawHome, 150); });
      drawHome();
    } else renderGrid(P);
  }

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
})();
document.querySelectorAll('.promo-video').forEach((v) => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); } });
/* lletres del botó +: apareixen una a una, com a la portada */
document.querySelectorAll('.btn.plus .lbl').forEach((l) => {
  const t = l.textContent; l.setAttribute('aria-label', t);
  l.innerHTML = Array.from(t).map((c, i) => `<span class="lc" aria-hidden="true" style="--i:${i}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
});
