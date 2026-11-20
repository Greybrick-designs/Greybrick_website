/* ==========================================================================
   GreyBrick Designs — Interactive Architecture & Walkthrough Engine
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Data Models (Synced with Local Assets & greybrickdesigns.com)
     ------------------------------------------------------------------------ */
  const TOTAL_FRAMES = 160;
  const FRAMES_PER_CLIP = 20;

  const WALKTHROUGH_CHAPTERS = [
    {
      idx: '01 / 08 · EXTERIOR APPROACH',
      name: 'The Approach',
      desc: 'Cantilevered concrete planes, warm timber soffits, and lush Kerala foliage compose a poised contemporary arrival.',
      materials: ['Board-Formed Concrete', 'Anodized Steel', 'Tropical Landscaping'],
      poster: './assets/posters/scene-01.jpg',
      video: './assets/videos/Modern_house_entrance_tracking_shot_202607111746.mp4',
    },
    {
      idx: '02 / 08 · TIMBER THRESHOLD',
      name: 'Timber Entry Recess',
      desc: 'Vertical teak batten cladding and recessed linear light draw visitors along a sheltered architectural gallery.',
      materials: ['Fluted Teak Timber', 'Linear Cove LED', 'Honed Marble'],
      poster: './assets/posters/scene-02.jpg',
      video: './assets/videos/Push_up_toward_entry_recess_202607111747.mp4',
    },
    {
      idx: '03 / 08 · THE FOYER',
      name: 'Foyer & Garden Axis',
      desc: 'Black-framed pivot glass doors dissolve the boundary between the sculptural foyer and the courtyard beyond.',
      materials: ['Slimline Black Steel', 'Veined Italian Marble', 'Floating Console'],
      poster: './assets/posters/scene-03.jpg',
      video: './assets/videos/Forward_push_through_timber_entry_202607111752.mp4',
    },
    {
      idx: '04 / 08 · LIVING & CULINARY',
      name: 'Pavilion Living & Kitchen',
      desc: 'Double-height glazing floods the monolithic dark marble island and solid timber dining gallery with tropical daylight.',
      materials: ['Nero Marquina Island', 'Slatted Timber Ceiling', 'Full-Height Glazing'],
      poster: './assets/posters/scene-04.jpg',
      video: './assets/videos/Glide_into_foyer_garden_view_202607111752.mp4',
    },
    {
      idx: '05 / 08 · VERTICAL CIRCULATION',
      name: 'Floating Walnut Staircase',
      desc: 'Cantilevered walnut treads and minimalist glass balustrades rise beside honed limestone overlooking a fern court.',
      materials: ['Floating Walnut Treads', 'Honed Limestone Wall', 'Frameless Glass'],
      poster: './assets/posters/scene-05.jpg',
      video: './assets/videos/Floating_walnut_staircase_202607111811.mp4',
    },
    {
      idx: '06 / 08 · PRIVATE QUARTERS',
      name: 'Garden Master Suite',
      desc: 'Acoustic vertical walnut paneling, soft linen tones, and floor-to-ceiling greenery craft a restorative sanctuary.',
      materials: ['Walnut Acoustic Slats', 'Brushed Brass Lamps', 'Sheer Drapery'],
      poster: './assets/posters/scene-06.jpg',
      video: './assets/videos/Bedroom_push_toward_garden_glazing_202607111754.mp4',
    },
    {
      idx: '07 / 08 · SPA BATH',
      name: 'Sanctuary Ensuite',
      desc: 'Monolithic limestone surfaces and a frameless rain shower open directly onto a private botanical garden.',
      materials: ['Natural Limestone', 'Floating Walnut Vanity', 'Botanical Courtyard'],
      poster: './assets/posters/scene-07.jpg',
      video: './assets/videos/Forward_glide_into_ensuite_1080p_202607111756.mp4',
    },
    {
      idx: '08 / 08 · OUTDOOR LIVING',
      name: 'Covered Verandah & Lawn',
      desc: 'Pocket glass walls retract completely onto a timber-clad outdoor dining terrace immersed in lush South Kerala canopy.',
      materials: ['Outdoor Timber Soffit', 'Retractable Glazing', 'Landscape Terrace'],
      poster: './assets/posters/scene-08.jpg',
      video: './assets/videos/Move_onto_covered_terrace_1080p_202607111757.mp4',
    },
  ];

  const SERVICES_META = [
    { code: 'DISCIPLINE 01 / 06', title: 'Architecture', scope: 'Crafting functional and aesthetic spaces.' },
    { code: 'DISCIPLINE 02 / 06', title: 'Interior Design', scope: 'Transforming interiors into elegant, comfortable, and inspiring spaces.' },
    { code: 'DISCIPLINE 03 / 06', title: '3D Visualizer', scope: 'Bringing ideas to life with immersive and realistic 3D visualizations.' },
    { code: 'DISCIPLINE 04 / 06', title: 'MEP', scope: 'Seamless mechanical, electrical & plumbing solutions.' },
    { code: 'DISCIPLINE 05 / 06', title: 'Contracting', scope: 'Reliable execution of construction projects with precision and efficiency.' },
    { code: 'DISCIPLINE 06 / 06', title: 'Consulting', scope: 'Expert guidance to turn your vision into a successful project.' },
  ];

  const PORTFOLIO_ITEMS = [
    {
      id: 1,
      src: './assets/images/img-1.png',
      title: 'Twilight Facade & Elevation',
      category: 'exterior',
      categoryLabel: 'Exterior & Landscape',
      layout: 'wide',
      desc: 'Sculptural multi-level Kerala residence balancing crisp white cantilevered slabs, deep charcoal framing, warm soffit downlights, and minimalist steel carport.',
      tags: ['Architecture', 'Exterior Lighting', 'Cantilever'],
    },
    {
      id: 2,
      src: './assets/images/img-2.png',
      title: 'Monsoon Courtyard Entry',
      category: 'exterior',
      categoryLabel: 'Exterior & Landscape',
      layout: 'std',
      desc: 'Rain-kissed stone stepping pavers set in manicured lawn, flanked by uplighted golden bamboo groves and warm symmetrical entry glazing.',
      tags: ['Landscaping', 'Pathway Lighting', 'Entry'],
    },
    {
      id: 3,
      src: './assets/images/img-3.png',
      title: 'The Teak Threshold',
      category: 'lighting',
      categoryLabel: 'Lighting & Detail',
      layout: 'std',
      desc: 'Solid horizontal-grooved teak entrance door framed by textured lime plaster, granite entry steps, and warm tropical bird-of-paradise uplighting.',
      tags: ['Custom Joinery', 'Architectural Uplight', 'Threshold'],
    },
    {
      id: 4,
      src: './assets/images/img-4.png',
      title: 'Grand Marble Foyer',
      category: 'living',
      categoryLabel: 'Living & Foyer',
      layout: 'wide',
      desc: 'Book-matched Italian marble flooring meets a deep charcoal feature wall with floating walnut console, art spotlighting, and sunlit vista into the lounge.',
      tags: ['Interior Design', 'Italian Marble', 'Custom Millwork'],
    },
    {
      id: 5,
      src: './assets/images/img-5.png',
      title: 'Evening Living Lounge',
      category: 'living',
      categoryLabel: 'Living & Foyer',
      layout: 'half',
      desc: 'Layered timber cove ceilings, backlit dark stone and fluted wood media wall, tailored neutral upholstery, and panoramic garden glazing.',
      tags: ['Living Space', 'Cove Lighting', 'Garden View'],
    },
    {
      id: 6,
      src: './assets/images/img-6.png',
      title: 'Culinary & Dining Atelier',
      category: 'kitchen',
      categoryLabel: 'Kitchen & Dining',
      layout: 'half',
      desc: 'Handleless matte ivory cabinetry paired with backlit walnut niches, brushed brass island pendants, and an eight-seat walnut dining suite.',
      tags: ['Modular Kitchen', 'Brass Pendants', 'Dining'],
    },
    {
      id: 7,
      src: './assets/images/img-7.png',
      title: 'Walnut Master Suite',
      category: 'suites',
      categoryLabel: 'Private Suites',
      layout: 'std',
      desc: 'Full-width horizontal teak slat headboard wall bathed in warm linear grazing light, brass drop pendants, and wide balcony doors opening onto twilight foliage.',
      tags: ['Master Bedroom', 'Timber Slats', 'Balcony Suite'],
    },
    {
      id: 8,
      src: './assets/images/img-8.png',
      title: 'Calacatta Spa Ensuite',
      category: 'suites',
      categoryLabel: 'Private Suites',
      layout: 'std',
      desc: 'Floor-to-ceiling Calacatta marble enclosure with frameless brushed-brass rain shower, backlit floating vanity mirror, and recessed architectural niches.',
      tags: ['MEP Precision', 'Spa Bath', 'Brushed Brass'],
    },
    {
      id: 9,
      src: './assets/images/img-9.png',
      title: 'Sculptural Double-Height Stair',
      category: 'lighting',
      categoryLabel: 'Lighting & Detail',
      layout: 'std',
      desc: 'Floating solid walnut treads with glass balustrade, recessed tread markers, dramatic vertical architectural LED channels, and cascading globe pendants.',
      tags: ['Lighting Design', 'Double Height', 'Floating Stair'],
    },
    {
      id: 10,
      src: './assets/images/img-10.png',
      title: 'Sunset Palm Terrace',
      category: 'exterior',
      categoryLabel: 'Exterior & Landscape',
      layout: 'wide',
      desc: 'Upper covered verandah framed by architectural white vertical louvres and glass balustrades looking out across golden Kerala sunset palms.',
      tags: ['Outdoor Terrace', 'Louvre Screen', 'Kerala Canopy'],
    },
  ];

  /* ------------------------------------------------------------------------
     2. Smooth Scroll Setup (Lenis with Safe Native Fallback)
     ------------------------------------------------------------------------ */
  let lenis = null;
  if (typeof window.Lenis !== 'undefined') {
    lenis = new window.Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.5,
    });
    const rafLenis = (t) => {
      lenis.raf(t);
      requestAnimationFrame(rafLenis);
    };
    requestAnimationFrame(rafLenis);
  }

  function smoothScrollTo(target, offset = -12) {
    if (typeof target === 'number') {
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2 });
      } else {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
      return;
    }
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  /* ------------------------------------------------------------------------
     3. Architectural Editorial Hero (hero-bg.png + Interactive Zone Focus)
     ------------------------------------------------------------------------ */
  const scrollProgressEl = document.getElementById('scroll-progress');
  const heroStage = document.getElementById('hero-stage');
  const heroBgImg = document.getElementById('hero-bg-img');
  const heroSceneBtns = Array.from(document.querySelectorAll('.hero-scene'));
  const heroSpecTitle = document.getElementById('hero-spec-title');
  const heroSpecMeta = document.getElementById('hero-spec-meta');
  const heroSpecIndex = document.getElementById('hero-spec-index');

  const HERO_ZONES = [
    {
      title: '2,886 sq. ft. Residence',
      meta: 'Ground Floor 1,825 sq. ft. · Courtyard & Double-Height Living',
      index: '01 / 04',
      pos: 'center 46%',
      scale: 1,
    },
    {
      title: 'Living & Foyer Axis',
      meta: 'Double-Height Living Room, Sitout Steps & Grand Entry Foyer',
      index: '02 / 04',
      pos: '24% 58%',
      scale: 1.18,
    },
    {
      title: 'Courtyard & Dining',
      meta: 'Family Lounge, Open & Working Kitchens & Illuminated Water Feature',
      index: '03 / 04',
      pos: '70% 54%',
      scale: 1.18,
    },
    {
      title: 'Private Suites & Prayer',
      meta: 'Master Suite with Walk-in Wardrobe, Prayer Room & Dual Guest Suites',
      index: '04 / 04',
      pos: '48% 18%',
      scale: 1.18,
    },
  ];

  function setHeroZone(index) {
    const safeIdx = (index + HERO_ZONES.length) % HERO_ZONES.length;
    const zone = HERO_ZONES[safeIdx];

    if (heroBgImg) {
      heroBgImg.style.objectPosition = zone.pos;
      heroBgImg.style.transform = `scale(${zone.scale})`;
    }

    heroSceneBtns.forEach((btn, i) => {
      const isActive = i === safeIdx;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    heroSpecTitle.textContent = zone.title;
    heroSpecMeta.textContent = zone.meta;
    heroSpecIndex.textContent = zone.index;
  }

  heroSceneBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => setHeroZone(i));
  });

  // Subtle optical parallax on desktop pointer movement
  const heroSection = document.getElementById('top');
  let pxTarget = 0;
  let pyTarget = 0;
  let pxCurr = 0;
  let pyCurr = 0;

  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      pxTarget = -nx * 18;
      pyTarget = -ny * 12;
    });
    heroSection.addEventListener('mouseleave', () => {
      pxTarget = 0;
      pyTarget = 0;
    });

    (function tickHeroParallax() {
      pxCurr += (pxTarget - pxCurr) * 0.08;
      pyCurr += (pyTarget - pyCurr) * 0.08;
      if (Math.abs(pxCurr) > 0.02 || Math.abs(pyCurr) > 0.02) {
        heroStage.style.transform = `translate3d(${pxCurr.toFixed(2)}px, ${pyCurr.toFixed(2)}px, 0)`;
      }
      requestAnimationFrame(tickHeroParallax);
    })();
  }

  setHeroZone(0);

  /* ------------------------------------------------------------------------
     4. Navbar, Active Section Highlighting, Mobile Drawer & Floating Dock
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const floatingDock = document.getElementById('floating-dock');
  const backToTopBtn = document.getElementById('back-to-top');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[data-section]'));
  const sections = ['top', 'studio', 'services', 'films', 'gallery', 'vision', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function onGlobalScroll() {
    const y = window.scrollY;
    const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollProgressEl.style.width = `${Math.min(100, (y / docHeight) * 100)}%`;

    navbar.classList.toggle('scrolled', y > 60);
    floatingDock.classList.toggle('visible', y > window.innerHeight * 0.72);

    // Highlight active nav link
    let activeId = 'top';
    const probe = y + window.innerHeight * 0.35;
    for (const sec of sections) {
      if (sec.offsetTop <= probe) {
        activeId = sec.id;
      }
    }
    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.dataset.section === activeId);
    });
  }

  window.addEventListener('scroll', onGlobalScroll, { passive: true });
  onGlobalScroll();

  backToTopBtn.addEventListener('click', () => {
    smoothScrollTo(0);
  });

  function setDrawer(open) {
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileDrawer.classList.toggle('open', open);
    mobileDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setDrawer(!isOpen);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      setDrawer(false);
    }
  });

  // Smooth anchor scrolling for all internal hash links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      setDrawer(false);
      smoothScrollTo(target, href === '#top' ? 0 : -20);
    });
  });

  /* ------------------------------------------------------------------------
     5. Interactive Daylight ↔ Twilight Comparator
     ------------------------------------------------------------------------ */
  const comparator = document.getElementById('comparator');
  const compBefore = document.getElementById('comparator-before');
  const compDivider = document.getElementById('comparator-divider');
  const compPctLabel = document.getElementById('comparator-pct');

  let compPct = 50;
  let draggingComp = false;

  function applyComparator(pct) {
    compPct = Math.max(4, Math.min(96, pct));
    compBefore.style.clipPath = `inset(0 ${100 - compPct}% 0 0)`;
    compDivider.style.left = `${compPct}%`;
    comparator.setAttribute('aria-valuenow', String(Math.round(compPct)));
    compPctLabel.textContent = `${Math.round(compPct)}% DAY / ${Math.round(100 - compPct)}% TWILIGHT`;
  }

  function updateComparatorFromClientX(clientX) {
    const rect = comparator.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    applyComparator(pct);
  }

  comparator.addEventListener('pointerdown', (e) => {
    draggingComp = true;
    comparator.setPointerCapture(e.pointerId);
    updateComparatorFromClientX(e.clientX);
  });

  comparator.addEventListener('pointermove', (e) => {
    if (!draggingComp) return;
    updateComparatorFromClientX(e.clientX);
  });

  comparator.addEventListener('pointerup', () => {
    draggingComp = false;
  });

  comparator.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      applyComparator(compPct - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      applyComparator(compPct + 5);
    }
  });

  applyComparator(50);

  /* ------------------------------------------------------------------------
     6. Interactive Services Accordion & Visual Stage
     ------------------------------------------------------------------------ */
  const serviceItems = Array.from(document.querySelectorAll('.service-item'));
  const stageImgs = Array.from(document.querySelectorAll('.service-stage__img'));
  const stageCode = document.getElementById('stage-code');
  const stageTitle = document.getElementById('stage-title');
  const stageScope = document.getElementById('stage-scope');

  function activateService(index) {
    serviceItems.forEach((item, i) => {
      const isActive = i === index;
      item.classList.toggle('active', isActive);
      const trigger = item.querySelector('.service-item__trigger');
      if (trigger) trigger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
    stageImgs.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    const meta = SERVICES_META[index];
    if (meta) {
      stageCode.textContent = meta.code;
      stageTitle.textContent = meta.title;
      stageScope.textContent = meta.scope;
    }
  }

  serviceItems.forEach((item, i) => {
    const trigger = item.querySelector('.service-item__trigger');
    trigger.addEventListener('click', () => activateService(i));
  });

  // Footer jump-to-service links
  document.querySelectorAll('[data-jump-service]').forEach((link) => {
    link.addEventListener('click', () => {
      activateService(Number(link.dataset.jumpService));
    });
  });

  /* ------------------------------------------------------------------------
     7. Interactive 3D Walkthrough Studio (8 MP4 Films + 160-Frame Scrubber)
     ------------------------------------------------------------------------ */
  const modeFilmsBtn = document.getElementById('mode-films');
  const modeScrubberBtn = document.getElementById('mode-scrubber');
  const modeHint = document.getElementById('theater-mode-hint');

  const theaterStage = document.getElementById('theater-stage');
  const theaterVideo = document.getElementById('theater-video');
  const theaterCounter = document.getElementById('theater-counter');
  const theaterTitle = document.getElementById('theater-room-title');
  const theaterMaterials = document.getElementById('theater-materials');
  const theaterCenterPlay = document.getElementById('theater-center-play');
  const theaterPlayPause = document.getElementById('theater-playpause');
  const theaterPrev = document.getElementById('theater-prev');
  const theaterNext = document.getElementById('theater-next');
  const theaterAutoNextBtn = document.getElementById('theater-autonext');
  const theaterProgress = document.getElementById('theater-progress');
  const theaterProgressFill = document.getElementById('theater-progress-fill');
  const theaterStrip = document.getElementById('theater-strip');

  // Interactive 160-Frame Scrubber Elements
  const scrubberStage = document.getElementById('scrubber-stage');
  const scrubberViewport = document.getElementById('scrubber-viewport');
  const scrubberCanvas = document.getElementById('scrubber-canvas');
  const scrubberCtx = scrubberCanvas.getContext('2d', { alpha: false });
  const scrubberStatus = document.getElementById('scrubber-status');
  const scrubberRoomIdx = document.getElementById('scrubber-room-idx');
  const scrubberRoomTitle = document.getElementById('scrubber-room-title');
  const scrubberReadout = document.getElementById('scrubber-frame-readout');
  const scrubberRange = document.getElementById('scrubber-range');
  const scrubberAutoBtn = document.getElementById('scrubber-autoplay');

  let activeWalkMode = 'films';
  let activeFilmIdx = 0;
  let theaterAutoAdvance = true;

  // Build 8 interactive poster buttons (shared by both Film & Frame Walk modes)
  WALKTHROUGH_CHAPTERS.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `film-thumb${idx === 0 ? ' active' : ''}`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    btn.innerHTML = `
      <div class="film-thumb__img"><img src="${ch.poster}" alt="${ch.name}" loading="lazy" /></div>
      <div class="film-thumb__idx">${String(idx + 1).padStart(2, '0')}</div>
      <div class="film-thumb__name">${ch.name}</div>
    `;
    btn.addEventListener('click', () => {
      if (activeWalkMode === 'films') {
        selectFilm(idx, true);
      } else {
        jumpScrubberToChapter(idx);
      }
    });
    theaterStrip.appendChild(btn);
  });

  const filmThumbBtns = Array.from(theaterStrip.querySelectorAll('.film-thumb'));

  function setStripActive(idx) {
    filmThumbBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
      btn.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
  }

  function selectFilm(idx, autoPlay = false) {
    activeFilmIdx = (idx + WALKTHROUGH_CHAPTERS.length) % WALKTHROUGH_CHAPTERS.length;
    const ch = WALKTHROUGH_CHAPTERS[activeFilmIdx];

    theaterVideo.pause();
    theaterVideo.poster = ch.poster;
    theaterVideo.src = ch.video;
    theaterVideo.load();

    theaterCounter.textContent = `CHAPTER ${String(activeFilmIdx + 1).padStart(2, '0')} / 08 · 1080P WALKTHROUGH`;
    theaterTitle.textContent = `${String(activeFilmIdx + 1).padStart(2, '0')} · ${ch.name}`;
    theaterMaterials.innerHTML = ch.materials.map((m) => `<span>${m}</span>`).join('');
    theaterProgressFill.style.width = '0%';
    setStripActive(activeFilmIdx);

    if (autoPlay) {
      theaterVideo.play().catch(() => {});
    }
  }

  function toggleTheaterPlayback() {
    if (theaterVideo.paused) {
      theaterVideo.play().catch(() => {});
    } else {
      theaterVideo.pause();
    }
  }

  theaterCenterPlay.addEventListener('click', toggleTheaterPlayback);
  theaterPlayPause.addEventListener('click', toggleTheaterPlayback);
  theaterVideo.addEventListener('click', toggleTheaterPlayback);
  theaterPrev.addEventListener('click', () => selectFilm(activeFilmIdx - 1, true));
  theaterNext.addEventListener('click', () => selectFilm(activeFilmIdx + 1, true));

  theaterAutoNextBtn.addEventListener('click', () => {
    theaterAutoAdvance = !theaterAutoAdvance;
    theaterAutoNextBtn.classList.toggle('active', theaterAutoAdvance);
    theaterAutoNextBtn.setAttribute('aria-pressed', theaterAutoAdvance ? 'true' : 'false');
    theaterAutoNextBtn.querySelector('span').textContent = `Auto-Advance: ${theaterAutoAdvance ? 'ON' : 'OFF'}`;
  });

  theaterVideo.addEventListener('play', () => {
    theaterStage.classList.add('is-playing');
    theaterPlayPause.textContent = 'Pause';
  });

  theaterVideo.addEventListener('pause', () => {
    theaterStage.classList.remove('is-playing');
    theaterPlayPause.textContent = 'Play';
  });

  theaterVideo.addEventListener('timeupdate', () => {
    if (!theaterVideo.duration) return;
    const pct = (theaterVideo.currentTime / theaterVideo.duration) * 100;
    theaterProgressFill.style.width = `${pct}%`;
    theaterProgress.setAttribute('aria-valuenow', String(Math.round(pct)));
  });

  theaterVideo.addEventListener('ended', () => {
    if (theaterAutoAdvance) {
      selectFilm(activeFilmIdx + 1, true);
    }
  });

  theaterProgress.addEventListener('click', (e) => {
    if (!theaterVideo.duration) return;
    const rect = theaterProgress.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    theaterVideo.currentTime = ratio * theaterVideo.duration;
  });

  /* --- Interactive 160-Frame Drag-to-Walk Canvas (Lazy-loaded on demand) --- */
  const scrubFrames = new Array(TOTAL_FRAMES);
  const scrubReady = new Array(TOTAL_FRAMES).fill(false);
  let scrubLoadingStarted = false;
  let scrubCurrent = 0;
  let scrubTarget = 0;
  let scrubAutoGlide = false;
  let scrubRafRunning = false;
  let scrubDragging = false;
  let scrubDragStartX = 0;
  let scrubDragStartFrame = 0;

  const scrubFrameUrl = (i) => `./assets/frames/frame-${String(i + 1).padStart(3, '0')}.jpg`;

  function sizeScrubberCanvas() {
    const rect = scrubberViewport.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    scrubberCanvas.width = Math.round(rect.width * dpr);
    scrubberCanvas.height = Math.round(rect.height * dpr);
    scrubberCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function nearestScrubFrame(idx) {
    if (scrubReady[idx]) return idx;
    for (let d = 1; d < TOTAL_FRAMES; d++) {
      if (idx - d >= 0 && scrubReady[idx - d]) return idx - d;
      if (idx + d < TOTAL_FRAMES && scrubReady[idx + d]) return idx + d;
    }
    return -1;
  }

  function drawScrubCover(img, alpha) {
    if (!img || !img.complete || !img.naturalWidth) return;
    const cw = scrubberViewport.clientWidth;
    const ch = scrubberViewport.clientHeight;
    if (!cw || !ch) return;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    const overscan = 1.07;
    let w, h;
    if (cr > ir) {
      w = cw * overscan;
      h = w / ir;
    } else {
      h = ch * overscan;
      w = h * ir;
    }
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;
    scrubberCtx.globalAlpha = alpha;
    scrubberCtx.drawImage(img, x, y, w, h);
  }

  function renderScrubberFrame(f) {
    const i0 = Math.floor(f);
    const frac = f - i0;
    const i1 = Math.min(i0 + 1, TOTAL_FRAMES - 1);
    const s0 = nearestScrubFrame(Math.max(0, Math.min(i0, TOTAL_FRAMES - 1)));
    const s1 = nearestScrubFrame(i1);

    scrubberCtx.globalAlpha = 1;
    scrubberCtx.fillStyle = '#070a0f';
    scrubberCtx.fillRect(0, 0, scrubberViewport.clientWidth, scrubberViewport.clientHeight);
    if (s0 !== -1) {
      drawScrubCover(scrubFrames[s0], 1);
      if (frac > 0.01 && s1 !== -1 && s1 !== s0) {
        drawScrubCover(scrubFrames[s1], frac);
      }
    }
    scrubberCtx.globalAlpha = 1;

    const rounded = Math.round(f);
    const chIdx = Math.min(WALKTHROUGH_CHAPTERS.length - 1, Math.floor(rounded / FRAMES_PER_CLIP));
    const ch = WALKTHROUGH_CHAPTERS[chIdx];
    scrubberRoomIdx.textContent = ch.idx;
    scrubberRoomTitle.textContent = ch.name;
    const frameLabel = `${String(rounded + 1).padStart(3, '0')} / ${TOTAL_FRAMES}`;
    scrubberReadout.textContent = frameLabel;
    scrubberStatus.textContent = `DRAG OR SCRUB · FRAME ${frameLabel}`;
    scrubberRange.value = String(rounded);
    setStripActive(chIdx);
  }

  function initScrubberFrames() {
    if (scrubLoadingStarted) return;
    scrubLoadingStarted = true;

    const loadOne = (idx, cb) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        scrubReady[idx] = true;
        if (idx === Math.round(scrubCurrent)) renderScrubberFrame(scrubCurrent);
        if (cb) cb();
      };
      img.onerror = () => cb && cb();
      img.src = scrubFrameUrl(idx);
      scrubFrames[idx] = img;
    };

    // Priority stride first, then fill intermediate frames in batches
    const priority = [];
    const rest = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      (i % 4 === 0 ? priority : rest).push(i);
    }

    let pLeft = priority.length;
    priority.forEach((idx) => {
      loadOne(idx, () => {
        pLeft--;
        if (pLeft === 0) {
          let c = 0;
          const nextBatch = () => {
            if (c >= rest.length) return;
            const batch = rest.slice(c, c + 8);
            c += 8;
            let bLeft = batch.length;
            batch.forEach((bi) => loadOne(bi, () => {
              bLeft--;
              if (bLeft === 0) setTimeout(nextBatch, 20);
            }));
          };
          nextBatch();
        }
      });
    });
  }

  let lastScrubTs = performance.now();
  function tickScrubber(now) {
    if (activeWalkMode !== 'scrubber') {
      scrubRafRunning = false;
      return;
    }
    const dt = Math.min((now - lastScrubTs) / 1000, 0.05);
    lastScrubTs = now;

    if (scrubAutoGlide) {
      scrubTarget += dt * 11;
      if (scrubTarget >= TOTAL_FRAMES - 1) scrubTarget = 0;
    }

    scrubCurrent += (scrubTarget - scrubCurrent) * 0.25;
    if (Math.abs(scrubTarget - scrubCurrent) < 0.01) scrubCurrent = scrubTarget;
    renderScrubberFrame(scrubCurrent);
    requestAnimationFrame(tickScrubber);
  }

  function jumpScrubberToChapter(chIdx) {
    scrubAutoGlide = false;
    scrubberAutoBtn.classList.remove('active');
    scrubberAutoBtn.setAttribute('aria-pressed', 'false');
    scrubberAutoBtn.querySelector('span').textContent = 'Auto-Glide';
    scrubTarget = chIdx * FRAMES_PER_CLIP + 2;
  }

  scrubberRange.addEventListener('input', () => {
    scrubAutoGlide = false;
    scrubberAutoBtn.classList.remove('active');
    scrubberAutoBtn.setAttribute('aria-pressed', 'false');
    scrubberAutoBtn.querySelector('span').textContent = 'Auto-Glide';
    scrubTarget = Number(scrubberRange.value);
  });

  scrubberAutoBtn.addEventListener('click', () => {
    scrubAutoGlide = !scrubAutoGlide;
    scrubberAutoBtn.classList.toggle('active', scrubAutoGlide);
    scrubberAutoBtn.setAttribute('aria-pressed', scrubAutoGlide ? 'true' : 'false');
    scrubberAutoBtn.querySelector('span').textContent = scrubAutoGlide ? 'Pause Glide' : 'Auto-Glide';
  });

  scrubberViewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button, input')) return;
    scrubDragging = true;
    scrubAutoGlide = false;
    scrubberAutoBtn.classList.remove('active');
    scrubberAutoBtn.setAttribute('aria-pressed', 'false');
    scrubberAutoBtn.querySelector('span').textContent = 'Auto-Glide';
    scrubDragStartX = e.clientX;
    scrubDragStartFrame = scrubTarget;
    scrubberViewport.setPointerCapture(e.pointerId);
  });

  scrubberViewport.addEventListener('pointermove', (e) => {
    if (!scrubDragging) return;
    const dx = e.clientX - scrubDragStartX;
    const deltaFrames = (dx / Math.max(260, scrubberViewport.clientWidth)) * (TOTAL_FRAMES * 0.85);
    scrubTarget = Math.max(0, Math.min(TOTAL_FRAMES - 1, scrubDragStartFrame + deltaFrames));
  });

  const endScrubDrag = () => {
    scrubDragging = false;
  };
  scrubberViewport.addEventListener('pointerup', endScrubDrag);
  scrubberViewport.addEventListener('pointercancel', endScrubDrag);

  function setWalkMode(mode) {
    activeWalkMode = mode;
    const isFilms = mode === 'films';
    modeFilmsBtn.classList.toggle('active', isFilms);
    modeFilmsBtn.setAttribute('aria-selected', isFilms ? 'true' : 'false');
    modeScrubberBtn.classList.toggle('active', !isFilms);
    modeScrubberBtn.setAttribute('aria-selected', !isFilms ? 'true' : 'false');

    theaterStage.classList.toggle('is-hidden', !isFilms);
    scrubberStage.classList.toggle('is-hidden', isFilms);
    modeHint.textContent = isFilms
      ? 'CLICK ANY ROOM BELOW TO PLAY 1080P FILM'
      : 'DRAG ACROSS CANVAS OR USE SLIDER TO WALK 160 FRAMES';

    if (isFilms) {
      scrubAutoGlide = false;
      setStripActive(activeFilmIdx);
    } else {
      theaterVideo.pause();
      initScrubberFrames();
      sizeScrubberCanvas();
      renderScrubberFrame(scrubCurrent);
      if (!scrubRafRunning) {
        scrubRafRunning = true;
        lastScrubTs = performance.now();
        requestAnimationFrame(tickScrubber);
      }
    }
  }

  modeFilmsBtn.addEventListener('click', () => setWalkMode('films'));
  modeScrubberBtn.addEventListener('click', () => setWalkMode('scrubber'));
  window.addEventListener('resize', () => {
    if (activeWalkMode === 'scrubber') {
      sizeScrubberCanvas();
      renderScrubberFrame(scrubCurrent);
    }
  });

  /* ------------------------------------------------------------------------
     8. Filterable Portfolio Gallery + Architectural Lightbox (10 Renders)
     ------------------------------------------------------------------------ */
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = Array.from(document.querySelectorAll('#gallery-filters .filter-pill'));
  const galleryCount = document.getElementById('gallery-count');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxTags = document.getElementById('lightbox-tags');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentFilter = 'all';
  let lightboxItems = PORTFOLIO_ITEMS.slice();
  let lightboxIndex = 0;

  function buildGallery() {
    galleryGrid.innerHTML = '';
    PORTFOLIO_ITEMS.forEach((item) => {
      const card = document.createElement('article');
      const layoutClass =
        item.layout === 'wide'
          ? ' gallery-card--wide'
          : item.layout === 'half'
          ? ' gallery-card--half'
          : '';
      card.className = `gallery-card${layoutClass}`;
      card.dataset.category = item.category;
      card.dataset.id = String(item.id);
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Inspect ${item.title}`);

      card.innerHTML = `
        <img class="gallery-card__img" src="${item.src}" alt="${item.title} — GreyBrick Designs" loading="lazy" />
        <div class="gallery-card__overlay">
          <div class="gallery-card__top">
            <span class="gallery-card__idx num">${String(item.id).padStart(2, '0')}</span>
            <span class="gallery-card__expand" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </span>
          </div>
          <div>
            <div class="gallery-card__cat">${item.categoryLabel}</div>
            <h3 class="gallery-card__title">${item.title}</h3>
          </div>
        </div>
      `;

      const openThis = () => openLightboxById(item.id);
      card.addEventListener('click', openThis);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openThis();
        }
      });
      galleryGrid.appendChild(card);
    });
  }

  function applyGalleryFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    const cards = Array.from(galleryGrid.querySelectorAll('.gallery-card'));
    let visible = 0;
    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
      if (match) visible++;
    });

    galleryCount.textContent = `SHOWING ${visible} OF ${PORTFOLIO_ITEMS.length} SPACES`;
    lightboxItems =
      filter === 'all'
        ? PORTFOLIO_ITEMS.slice()
        : PORTFOLIO_ITEMS.filter((it) => it.category === filter);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyGalleryFilter(btn.dataset.filter));
  });

  function renderLightbox() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = `${item.title} — GreyBrick Designs`;
    lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(lightboxItems.length).padStart(2, '0')}`;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxTags.innerHTML = item.tags.map((t) => `<span>${t}</span>`).join('');
  }

  function openLightboxById(id) {
    const idx = lightboxItems.findIndex((it) => it.id === id);
    lightboxIndex = idx >= 0 ? idx : 0;
    renderLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lenis) lenis.start();
  }

  function stepLightbox(delta) {
    lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
    renderLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => stepLightbox(-1));
  lightboxNext.addEventListener('click', () => stepLightbox(1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  // Touch swipe in Lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 48) {
      stepLightbox(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

  buildGallery();

  /* ------------------------------------------------------------------------
     9. Interactive Architectural Commission Studio (3-Step Brief Builder)
     ------------------------------------------------------------------------ */
  const briefStepBtns = Array.from(document.querySelectorAll('.brief-step'));
  const briefPanels = Array.from(document.querySelectorAll('.brief-panel'));
  const briefStepCounter = document.getElementById('brief-step-counter');
  const briefProgressFill = document.getElementById('brief-progress-fill');

  const liveTypology = document.getElementById('live-typology');
  const liveArea = document.getElementById('live-area');
  const liveServices = document.getElementById('live-services');
  const briefPreviewText = document.getElementById('brief-preview-text');

  const typologyBtns = Array.from(document.querySelectorAll('#typology-choices .typology-card'));
  const timelineBtns = Array.from(document.querySelectorAll('#timeline-choices .choice-btn'));
  const serviceChoiceBtns = Array.from(document.querySelectorAll('#service-choices .discipline-tile'));
  const areaSlider = document.getElementById('area-slider');
  const areaValue = document.getElementById('area-value');
  const areaTier = document.getElementById('area-tier');
  const areaPresetBtns = Array.from(document.querySelectorAll('#area-presets .area-preset'));

  const clientName = document.getElementById('client-name');
  const clientLocation = document.getElementById('client-location');
  const clientNotes = document.getElementById('client-notes');
  const consultationForm = document.getElementById('consultation-form');
  const submitEmailBtn = document.getElementById('submit-email');
  const copyBriefBtn = document.getElementById('copy-brief');
  const formStatus = document.getElementById('form-status');

  let activeBriefStep = 0;

  function setBriefStep(step) {
    activeBriefStep = Math.max(0, Math.min(2, step));
    briefPanels.forEach((panel, i) => {
      panel.classList.toggle('active', i === activeBriefStep);
    });
    briefStepBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === activeBriefStep);
      btn.classList.toggle('completed', i < activeBriefStep);
      btn.setAttribute('aria-selected', i === activeBriefStep ? 'true' : 'false');
    });
    briefStepCounter.textContent = `STEP 0${activeBriefStep + 1} / 03`;
    briefProgressFill.style.width = `${((activeBriefStep + 1) / 3) * 100}%`;
    refreshLiveSummary();
  }

  briefStepBtns.forEach((btn) => {
    btn.addEventListener('click', () => setBriefStep(Number(btn.dataset.step)));
  });

  document.querySelectorAll('[data-next-step]').forEach((btn) => {
    btn.addEventListener('click', () => setBriefStep(Number(btn.dataset.nextStep)));
  });

  document.querySelectorAll('[data-prev-step]').forEach((btn) => {
    btn.addEventListener('click', () => setBriefStep(Number(btn.dataset.prevStep)));
  });

  // Typology single select
  typologyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      typologyBtns.forEach((b) => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');
      refreshLiveSummary();
    });
  });

  // Timeline single select
  timelineBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      refreshLiveSummary();
    });
  });

  // Services multi-select tiles
  serviceChoiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = !btn.classList.contains('selected');
      btn.classList.toggle('selected', next);
      btn.setAttribute('aria-pressed', next ? 'true' : 'false');
      refreshLiveSummary();
    });
  });

  // Prefill from "Enquire about [Service]" links inside Services section
  document.querySelectorAll('[data-prefill-service]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetService = link.dataset.prefillService;
      serviceChoiceBtns.forEach((btn) => {
        if (btn.dataset.value === targetService) {
          btn.classList.add('selected');
          btn.setAttribute('aria-pressed', 'true');
        }
      });
      setBriefStep(1);
      formStatus.textContent = `Added "${targetService}" to your commission brief.`;
    });
  });

  // Area slider formatting, dynamic filled track & scale tier
  function getAreaTier(val) {
    if (val <= 2000) return 'Boutique Residence / Studio Interior';
    if (val <= 4400) return 'Signature Family Residence';
    if (val <= 8000) return 'Luxury Villa / Commercial Floorplate';
    return 'Grand Estate / Turnkey Commercial Development';
  }

  function updateAreaReadout() {
    const val = Number(areaSlider.value);
    const min = Number(areaSlider.min);
    const max = Number(areaSlider.max);
    const pct = ((val - min) / (max - min)) * 100;

    areaSlider.style.background = `linear-gradient(90deg, var(--brass) ${pct}%, rgba(224, 234, 246, 0.18) ${pct}%)`;
    areaValue.textContent = val >= 15000 ? '15,000+ sq. ft.' : `${val.toLocaleString()} sq. ft.`;
    areaTier.textContent = getAreaTier(val);

    areaPresetBtns.forEach((btn) => {
      btn.classList.toggle('active', Number(btn.dataset.area) === val);
    });
    refreshLiveSummary();
  }

  areaSlider.addEventListener('input', updateAreaReadout);
  areaPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      areaSlider.value = btn.dataset.area;
      updateAreaReadout();
    });
  });

  function composeBriefText() {
    const typology =
      typologyBtns.find((b) => b.classList.contains('selected'))?.dataset.value || 'Luxury Residence';
    const timeline =
      timelineBtns.find((b) => b.classList.contains('selected'))?.dataset.value || 'Immediate';
    const services = serviceChoiceBtns
      .filter((b) => b.classList.contains('selected'))
      .map((b) => b.dataset.value);
    const area = areaValue.textContent;
    const name = clientName.value.trim() || 'Prospective Client';
    const loc = clientLocation.value.trim() || 'Kerala';
    const notes = clientNotes.value.trim();

    const lines = [
      `Hi Hashim & GreyBrick Designs Team,`,
      ``,
      `I would like to schedule a studio consultation:`,
      `• Name: ${name}`,
      `• Typology: ${typology}`,
      `• Disciplines: ${services.length ? services.join(', ') : 'General Consultation'}`,
      `• Estimated Scale: ${area}`,
      `• Target Start: ${timeline}`,
      `• Site Location: ${loc}`,
    ];
    if (notes) {
      lines.push(`• Vision / Notes: ${notes}`);
    }
    return lines.join('\n');
  }

  function refreshLiveSummary() {
    const typology =
      typologyBtns.find((b) => b.classList.contains('selected'))?.dataset.value || 'Luxury Residence';
    const selectedCount = serviceChoiceBtns.filter((b) => b.classList.contains('selected')).length;

    liveTypology.textContent = typology;
    liveArea.textContent = areaValue.textContent;
    liveServices.textContent = `${selectedCount} Selected`;
    if (briefPreviewText) {
      briefPreviewText.textContent = composeBriefText();
    }
  }

  [clientName, clientLocation, clientNotes].forEach((input) => {
    input.addEventListener('input', refreshLiveSummary);
  });

  updateAreaReadout();

  consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const brief = composeBriefText();
    const url = `https://wa.me/918089335336?text=${encodeURIComponent(brief)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    formStatus.textContent = 'Opening WhatsApp with your structured commission brief...';
  });

  submitEmailBtn.addEventListener('click', () => {
    const brief = composeBriefText();
    const subject = `Project Consultation Enquiry — ${clientName.value.trim() || 'GreyBrick Designs'}`;
    const url = `mailto:greybrickd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
    window.location.href = url;
    formStatus.textContent = 'Launching your email client addressed to greybrickd@gmail.com...';
  });

  copyBriefBtn.addEventListener('click', async () => {
    const brief = composeBriefText();
    try {
      await navigator.clipboard.writeText(brief);
      copyBriefBtn.textContent = 'Copied ✓';
      formStatus.textContent = 'Commission brief copied to clipboard.';
      setTimeout(() => {
        copyBriefBtn.textContent = 'Copy Brief';
      }, 2200);
    } catch {
      formStatus.textContent = 'Ready — use WhatsApp or Email to send your brief.';
    }
  });

  /* ------------------------------------------------------------------------
     10. Scroll Reveal & Animated Numeric Counters
     ------------------------------------------------------------------------ */
  function animateCounter(el) {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const t0 = performance.now();

    function frame(t) {
      const k = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      const val = Math.round(target * eased);
      el.innerHTML = `${prefix}${val}${suffix ? `<em>${suffix}</em>` : ''}`;
      if (k < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        const counter = entry.target.querySelector('[data-count]');
        if (counter && !counter.dataset.counted) {
          counter.dataset.counted = '1';
          animateCounter(counter);
        }
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Set current year cleanly
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
