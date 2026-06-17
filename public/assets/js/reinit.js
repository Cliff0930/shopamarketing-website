/* shopaReinit — re-initialises Choicy template on Next.js soft navigation */
(function () {

  window.shopaReinit = function () {
    var $ = window.jQuery;
    if (!$ || !window.gsap) return;

    var gsap = window.gsap;
    var ST   = window.ScrollTrigger;

    /* 1 — Kill every existing ScrollTrigger so stale triggers don't stack */
    if (ST) {
      ST.getAll().forEach(function (t) { try { t.kill(); } catch (_) {} });
    }

    /* 2 — Destroy any Swiper instances left on DOM elements */
    document.querySelectorAll('.swiper-container').forEach(function (el) {
      if (el.swiper) { try { el.swiper.destroy(true, true); } catch (_) {} }
    });

    /* 3 — Re-init Swiper sliders present on THIS page */
    if ($('.chy_price_1_active').length) {
      new Swiper('.chy_price_1_active', {
        loop: true, spaceBetween: 0, speed: 800, slidesPerView: 1, effect: 'fade',
        autoplay: { delay: 5000 }, fadeEffect: { crossFade: true },
        pagination: { el: '.chy-price-1-pagination', clickable: true },
        navigation:  { nextEl: '.chy_price_1_next', prevEl: '.chy_price_1_prev' }
      });
    }
    if ($('.chy_project_1_active').length) {
      new Swiper('.chy_project_1_active', {
        slidesPerView: 3, spaceBetween: 0, loop: true, centeredSlides: true,
        grabCursor: true, speed: 800, autoplay: { delay: 5000 },
        navigation: { nextEl: '.chy_project_1_next', prevEl: '.chy_project_1_prev' },
        breakpoints: {
          0:    { slidesPerView: 1 }, 576:  { slidesPerView: 1 },
          768:  { slidesPerView: 1 }, 992:  { slidesPerView: 3 },
          1200: { slidesPerView: 3 }, 1400: { slidesPerView: 3 }, 1600: { slidesPerView: 4 }
        }
      });
    }
    if ($('.chy_team_slider_1_active').length) {
      new Swiper('.chy_team_slider_1_active', {
        loop: true, spaceBetween: 0, speed: 500, slidesPerView: 1, effect: 'fade',
        autoplay: { delay: 5000 }, fadeEffect: { crossFade: true },
        pagination: { el: '.chy-team-slider-1-pagination', clickable: true }
      });
    }

    /* 4 — Re-run GSAP ScrollTrigger animations for new DOM elements */
    gsap.registerPlugin(ST);

    function anim(selector, from, start, end) {
      gsap.utils.toArray(selector).forEach(function (el) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: el, scrub: 1,
            start: start || 'top 90%', end: end || 'bottom 60%',
            toggleActions: 'play none none reverse', markers: false
          }
        });
        tl.set(el, { transformOrigin: 'center center' });
        tl.from(el, Object.assign({ duration: 1, immediateRender: false }, from));
      });
    }

    anim('.asslideupcta',    { y: '+=300' }, 'top 90%', 'top 70%');
    anim('.chy-slideinleft', { x: '-=100' });
    anim('.chy-slideinright',{ x: '+=100' });
    anim('.chy-slideinup',   { y: '+=100' }, 'top 85%', 'bottom 60%');
    anim('.rotatedscal',     { rotateZ: 45, scale: 0.5, y: '+=100' });
    anim('.chy-zoomout',     { scale: 1  }, 'top 85%', 'bottom 60%');
    anim('.chy-zoomout2',    { scale: 2  }, 'top 85%', 'bottom 50%');
    anim('.chy-zoomout3',    { scale: 1.5 }, 'top 85%', 'bottom 50%');

    gsap.utils.toArray('.chy-trusted-1-wrap').forEach(function (el) {
      var tl = gsap.timeline({
        scrollTrigger: { trigger: el, scrub: 1, start: 'top 80%', end: 'bottom 60%',
          toggleActions: 'play none none reverse', markers: false }
      });
      tl.set(el, { transformOrigin: 'center center' });
      tl.from(el, { background: '#fff', scale: 0.8 }, { background: 'inherit', scale: 1, duration: 1, immediateRender: false });
    });

    gsap.utils.toArray('.chy-class-add').forEach(function (img) {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img, scrub: 1, start: 'top 80%', end: 'bottom bottom',
          toggleClass: 'active', toggleActions: 'play none none reverse', once: true
        }
      });
    });

    gsap.utils.toArray('.chy-slideinup.chy-cta-1-area, .chy-slideinup').forEach(function (el) {
      /* already covered by anim() above — skip to avoid duplicates */
    });

    /* 5 — Re-trigger $(window).on('load',...) callbacks: SplitText, hero-2, etc. */
    $(window).trigger('load');

    /* 6 — Re-init WOW.js */
    if (typeof WOW !== 'undefined') { try { new WOW({ mobile: false }).init(); } catch (_) {} }

    /* 7 — Re-init counters */
    if ($.fn.counterUp) {
      $('.counter').counterUp({ delay: 10, time: 3000 });
      setTimeout(function () { $(window).trigger('scroll'); }, 100);
    }

    /* 8 — Re-init magnific popup */
    if ($.fn.magnificPopup) {
      $('.popup-video').magnificPopup({ type: 'iframe' });
      $('.popup_img').magnificPopup({ type: 'image', gallery: { enabled: true } });
    }

    /* 9 — Final ScrollTrigger refresh after layout settles, then sync scroll */
    if (ST) {
      setTimeout(function () {
        try { ST.refresh(); } catch (_) {}
        $(window).trigger('scroll');
      }, 400);
    }
  };

})();
