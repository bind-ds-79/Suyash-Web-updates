!(function (e) {
  "use strict";
  e(window);
  e(window).on("load", function () {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !1,
      live: !0,
    }).init();
  }),
    // e("body").append(
    //   '<div class="rs-theme-settings-area">\n        <div class="rs-theme-wrapper">\n        <div class="rs-theme-header text-center">\n           <h4 class="rs-theme-header-title">Template Settings</h4>\n        </div>\n        \x3c!--  RTL SETTINGS  mb-20 --\x3e\n        <div class="rs-theme-dir">\n           <label class="rs-theme-dir-main" for="rs-dir-toggler">\n              <span class="rs-theme-dir-rtl"> RTL</span>\n                 <input type="checkbox" id="rs-dir-toggler">\n                 <i class="rs-theme-dir-slide"></i>\n              <span class="rs-theme-dir-ltr"> LTR</span>\n           </label>\n        </div>\n\n        <div class="rs-theme-settings">\n           <div class="rs-theme-settings-wrapper">\n              <div class="rs-theme-settings-open">\n                 <button class="rs-theme-settings-open-btn">\n                    <span class="rs-theme-settings-gear">\n                       <i class="fa-light fa-gear"></i>\n                    </span>\n                    <span class="rs-theme-settings-close">\n                       <i class="fa-regular fa-xmark"></i>\n                    </span>\n                 </button>\n              </div>\n           </div>\n        </div>\n     </div>\n         </div>'
    // ),
    // e(".rs-theme-settings-open-btn").on("click", function () {
    //   e(".rs-theme-settings-area").toggleClass("settings-opened");
    // }),
    e("#rs-dir-toggler").length > 0 &&
      (function () {
        function t(t) {
          localStorage.setItem("rs_dir", t),
            document.documentElement.setAttribute("dir", t),
            "rtl" === t
              ? e("body").addClass("rtl")
              : e("body").removeClass("rtl");
          var a = e("[href='assets/vendor/css/bootstrap.min.css']");
          e(a).attr(
            "href",
            "rtl" === t
              ? "assets/vendor/css/bootstrap.rtl.min.css"
              : "assets/vendor/css/bootstrap.min.css"
          );
        }
        var a;
        e("#rs-dir-toggler").on("change", function () {
          "rtl" === localStorage.getItem("rs_dir") ? t("ltr") : t("rtl"),
            location.reload(!0);
        }),
          t((a = localStorage.getItem("rs_dir")) || "ltr"),
          (document.getElementById("rs-dir-toggler").checked = "rtl" === a);
      })();
  localStorage.getItem("rs_dir");
  e(window).on("load", function (t) {
    e("#pre-load").delay(600).fadeOut(500),
      e(".pre-loader").delay(600).fadeOut(500);
  });
  var t = document.getElementById("year");
  t && (t.innerHTML = new Date().getFullYear()),
    e(".offcanvas-close,.offcanvas-overlay").on("click", function () {
      e(".offcanvas-area").removeClass("info-open"),
        e(".offcanvas-overlay").removeClass("overlay-open");
    }),
    e(".sidebar-toggle").on("click", function () {
      e(".offcanvas-area").addClass("info-open"),
        e(".offcanvas-overlay").addClass("overlay-open");
    }),
    e(".body-overlay").on("click", function () {
      e(".offcanvas-area").removeClass("opened"),
        e(".body-overlay").removeClass("opened");
    }),
    e("[data-background").each(function () {
      e(this).css(
        "background-image",
        "url( " + e(this).attr("data-background") + "  )"
      );
    }),
    e("[data-width]").each(function () {
      e(this).css("width", e(this).attr("data-width"));
    }),
    e("[data-bg-color]").each(function () {
      e(this).css("background-color", e(this).attr("data-bg-color"));
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    jarallax(document.querySelectorAll(".jarallax"), { speed: 0.5 }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e("select").niceSelect(),
    new PureCounter(),
    new PureCounter({ filesizing: !0, selector: ".filesizecount", pulse: 2 }),
    e(".rs-pricing-area").each(function () {
      var t = e(".yearly-plan-btn"),
        a = e(".monthly-plan-btn"),
        n = e(".monthly-pricing"),
        s = e(".yearly-pricing"),
        i = e(".pricing-checkbox");
      e(a).on("click", function () {
        i.prop("checked", !0),
          e(this)
            .addClass("active")
            .parent(".rs-pricing-tab")
            .siblings()
            .children()
            .removeClass("active"),
          n.css("display", "block"),
          s.css("display", "none");
      }),
        e(t).on("click", function () {
          i.prop("checked", !1),
            e(this)
              .addClass("active")
              .parent(".rs-pricing-tab")
              .siblings()
              .children()
              .removeClass("active"),
            n.css("display", "none"),
            s.css("display", "block");
        });
    }),
    e(".odometer").appear(function (t) {
      e(".odometer").each(function () {
        var t = e(this).attr("data-count");
        e(this).html(t);
      });
    }),
    e(".rs-header-search-icon").on("click", function (t) {
      e(".rs-stickys-form").slideToggle("show"),
        e(this).toggleClass("icon-close");
    }),
    document.addEventListener("DOMContentLoaded", function () {
      function e(e) {
        var t = e.clientX,
          a = e.clientY,
          n = e.currentTarget,
          s = n.querySelector(
            ".rs-portfolio-tooltip .rs-portfolio-tooltip-content"
          ),
          i = n.getBoundingClientRect(),
          o = (i.left, i.top, s.getBoundingClientRect()),
          r = i.width,
          l = i.height,
          c = o.width,
          d = o.height,
          p = 200,
          u = r - c + p,
          m = l - d + p,
          h = Math.min(Math.max(t - i.left - c / 2, -200), u),
          v = Math.min(Math.max(a - i.top - d / 2, -200), m);
        (s.style.left = h + "px"), (s.style.top = v + "px");
      }
      document
        .querySelectorAll(".rs-portfolio-tooltip .rs-portfolio-tooltip-item")
        .forEach(function (t) {
          t.addEventListener("mousemove", e);
        });
    }),
    e(document).ready(function () {
      e(".rs-button-wrapper .rs-btn").mouseenter(function () {
        e(this).find(".rs-icon").css("animation", "btnHoverEffect 0.5s");
      }),
        e(".rs-button-wrapper .rs-btn").mouseleave(function () {
          e(this)
            .find(".rs-icon")
            .css("animation", "btnHoverEffectReverse 0.5s");
        }),
        e(".rs-text-circle").length &&
          e(".rs-text-circle").each(function () {
            for (
              var t = e(this).text().replace(/\s+/g, " ").trim(), a = "", n = 0;
              n < t.length;
              n++
            )
              a += "<span>" + t[n] + "</span>";
            e(this).html(a);
            var s = parseInt(e(this).data("rotate-degree"), 10) || 20;
            e(this)
              .find("span")
              .each(function (t) {
                e(this).css("transform", "rotate(" + (t + 1) * s + "deg)");
              });
          }),
        e(".rs-swiper .swiper").each(function (t) {
          var a = e(this),
            n = void 0 === a.data("hover-pause") || a.data("hover-pause"),
            s = void 0 === e(this).data("loop") || e(this).data("loop"),
            i =
              void 0 !== e(this).data("center-mode") &&
              e(this).data("center-mode"),
            o = void 0 === e(this).data("autoplay") || e(this).data("autoplay"),
            r =
              void 0 === e(this).data("dots-dynamic") ||
              e(this).data("dots-dynamic"),
            l =
              "vertical" === e(this).data("direction")
                ? "vertical"
                : "horizontal",
            c =
              void 0 === e(this).data("play-slide") ||
              e(this).data("play-slide"),
            d = e(this).data("effect") || "slide",
            p =
              void 0 !== e(this).data("grab-cursor") &&
              e(this).data("grab-cursor"),
            u = void 0 !== e(this).data("one-way") && e(this).data("one-way"),
            m = e(this).data("start-at"),
            h = e(this).data("item"),
            v = e(this).data("speed"),
            f = !0 === e(this).data("no-gap") ? 0 : 30,
            g = e(this).data("margin") ? e(this).data("margin") : f,
            w = e(this).data("item-xl"),
            b = e(this).data("item-lg"),
            y = e(this).data("item-md"),
            k = e(this).data("item-sm"),
            C = e(this).data("item-xs"),
            x = e(this).data("item-mobile"),
            E = e(this).data("margin-xl") ? e(this).data("margin-xl") : g,
            S = e(this).data("margin-lg") ? e(this).data("margin-lg") : E,
            I = e(this).data("margin-md") ? e(this).data("margin-md") : S,
            B = e(this).data("margin-sm") ? e(this).data("margin-sm") : I,
            T = e(this).data("margin-xs") ? e(this).data("margin-xs") : B,
            L = e(this).data("margin-mobile")
              ? e(this).data("margin-mobile")
              : T,
            D = `rs-nav-prev-${t}`,
            P = `rs-nav-next-${t}`;
          a.closest(".rs-swiper").find(".swiper-button-prev").addClass(D),
            a.closest(".rs-swiper").find(".swiper-button-next").addClass(P);
          var M = `rs-pagination-${t}`;
          a.closest(".rs-swiper").find(".swiper-pagination").addClass(M);
          var q = new Swiper(this, {
            loop: s,
            autoplay: o,
            direction: l,
            effect: d,
            enabled: c,
            grabCursor: p,
            oneWayMovement: u,
            centeredSlides: i,
            initialSlide: m || 0,
            slidesPerView: h || 1,
            spaceBetween: g,
            speed: v || 500,
            pagination: { el: `.${M}`, dynamicBullets: r, clickable: !0 },
            navigation: { nextEl: `.${D}`, prevEl: `.${P}` },
            breakpoints: {
              10: { slidesPerView: x || 1, spaceBetween: L },
              481: { slidesPerView: C || 1, spaceBetween: T },
              576: { slidesPerView: k || 1, spaceBetween: B },
              768: { slidesPerView: y || 1, spaceBetween: I },
              992: { slidesPerView: b || 1, spaceBetween: S },
              1025: { slidesPerView: w || 1, spaceBetween: E },
              1201: { slidesPerView: h || 1, spaceBetween: g },
            },
          });
          n &&
            a
              .on("mouseenter", function () {
                q.autoplay.stop();
              })
              .on("mouseleave", function () {
                q.autoplay.start();
              });
        });
      var t = new Swiper(".product-details-nav", {
        spaceBetween: -20,
        slidesPerView: 4,
        navigation: {
          nextEl: ".product-details-button-next",
          prevEl: ".product-details-button-prev",
        },
      });
      new Swiper(".product-details-active", {
        spaceBetween: 0,
        thumbs: { swiper: t },
        navigation: {
          nextEl: ".product-details-button-next",
          prevEl: ".product-details-button-prev",
        },
      });
      e(".rs-cart-minus").on("click", function () {
        var t = e(this).parent().find("input"),
          a = parseInt(t.val(), 10) - 1;
        return (a = a < 1 ? 1 : a), t.val(a), t.change(), !1;
      }),
        e(".rs-cart-plus").on("click", function () {
          var t = e(this).parent().find("input");
          return t.val(parseInt(t.val(), 10) + 1), t.change(), !1;
        }),
        e(".removeRow").on("click", function () {
          e(this).closest("tr").remove();
        }),
        e(".checkout-login-form-reveal-btn").on("click", function () {
          e("#checkout-coupon").slideToggle(400);
        });
      var a = document.querySelector(".backtotop-wrap path"),
        n = a.getTotalLength();
      (a.style.transition = a.style.WebkitTransition = "none"),
        (a.style.strokeDasharray = n + " " + n),
        (a.style.strokeDashoffset = n),
        a.getBoundingClientRect(),
        (a.style.transition = a.style.WebkitTransition =
          "stroke-dashoffset 10ms linear");
      var s = function () {
        var t = e(window).scrollTop(),
          s = e(document).height() - e(window).height(),
          i = n - (t * n) / s;
        a.style.strokeDashoffset = i;
      };
      s(), e(window).scroll(s);
      e(window).on("scroll", function () {
        e(this).scrollTop() > 150
          ? e(".backtotop-wrap").addClass("active-progress")
          : e(".backtotop-wrap").removeClass("active-progress"),
          e(this).scrollTop() > 250
            ? e("#header-sticky").addClass("rs-sticky")
            : e("#header-sticky").removeClass("rs-sticky");
      }),
        e(".backtotop-wrap").on("click", function (t) {
          return (
            t.preventDefault(),
            e("html, body").animate({ scrollTop: 0 }, parseInt(550, 10)),
            !1
          );
        });
      var i = document.getElementById("slider-range");
      if (e("#slider-range").length) {
        noUiSlider.create(i, {
          start: [0, 1100],
          connect: !0,
          range: { min: 0, max: 2500 },
        });
        var o = document.getElementById("amount");
        i.noUiSlider.on("update", function (e, t) {
          o.value = "$" + e[0] + " - $" + e[1];
        }),
          e("#filter-btn").on("click", function () {
            e(".filter-widget").slideToggle(1e3);
          });
      }
      jQuery(".rs-ripple-item").each(function (e) {
        var t = "rs-ripple-item-" + e;
        jQuery(this).addClass(t);
        var a = jQuery(this).closest(".rs-contact-wrapper"),
          n = a.find(".mobile_item").eq(e);
        jQuery(this).on("click", function () {
          n.hasClass("active")
            ? n.removeClass("active")
            : (a.find(".mobile_item.active").removeClass("active"),
              n.addClass("active"));
        }),
          a.on("click", ".remove-icon", function (e) {
            e.stopPropagation(), n.removeClass("active");
          });
      });
      var r = jQuery(".rs-contact-wrapper .rs-ripple-item"),
        l = 0;
      function c() {
        v = setInterval(function () {
          r.eq(l).removeClass("ripple"),
            (l = (l + 1) % r.length),
            r.eq(l).addClass("ripple");
        }, 1500);
      }
      c(),
        r
          .on("mouseenter", function () {
            clearInterval(v), r.eq(l).removeClass("ripple");
          })
          .on("mouseleave", function () {
            c();
          }),
        e("#pie-chart").length &&
          new Chart(document.getElementById("pie-chart"), {
            type: "pie",
            data: {
              labels: [
                "Sciences & Healthcare",
                "Power Generation",
                "Retail & Consumer",
                "Industrial & Chemical",
                "Oil & Gas Energy",
              ],
              datasets: [
                {
                  backgroundColor: [
                    "#0D80CE",
                    "#5CC8BE",
                    "#3B37FD",
                    "#EE0D08",
                    "#EA5501",
                  ],
                  data: ["16", "36", "46", "56", "76"],
                },
              ],
            },
            options: {
              responsive: !0,
              layout: { padding: 0 },
              plugins: {
                legend: {
                  position: "left",
                  labels: {
                    color: "#1F1F1F",
                    padding: 15,
                    boxWidth: 12,
                    boxHeight: 12,
                    font: { size: 15, weight: 600 },
                  },
                },
              },
            },
          });
      const d = window.location.pathname.split("/").pop();
      function p(t, a) {
        var n = new Date(),
          s = t - (n = Date.parse(n) / 1e3);
        if (s <= 0)
          return (
            clearInterval(m),
            e("#" + a + " [data-unit='days']").html("00<span>Days</span>"),
            e("#" + a + " [data-unit='hours']").html("00<span>Hours</span>"),
            e("#" + a + " [data-unit='minutes']").html(
              "00<span>Minutes</span>"
            ),
            void e("#" + a + " [data-unit='seconds']").html(
              "00<span>Seconds</span>"
            )
          );
        var i = Math.floor(s / 86400),
          o = Math.floor((s - 86400 * i) / 3600),
          r = Math.floor((s - 86400 * i - 3600 * o) / 60),
          l = Math.floor(s - 86400 * i - 3600 * o - 60 * r);
        o < "10" && (o = "0" + o),
          r < "10" && (r = "0" + r),
          l < "10" && (l = "0" + l),
          e("#" + a + " [data-unit='days']").html(i + "<span>Days</span>"),
          e("#" + a + " [data-unit='hours']").html(o + "<span>Hours</span>"),
          e("#" + a + " [data-unit='minutes']").html(
            r + "<span>Minutes</span>"
          ),
          e("#" + a + " [data-unit='seconds']").html(
            l + "<span>Seconds</span>"
          );
      }
      document.querySelectorAll(".multipage-menu a").forEach((e) => {
        const t = e.getAttribute("href");
        if (t === d || ("" === d && "index.html" === t)) {
          e.classList.add("active");
          let t = e.parentElement;
          for (; t; )
            "LI" === t.tagName && t.classList.add("active"),
              (t = t.parentElement);
        }
      }),
        e("#mobile-menu").meanmenu({
          meanMenuContainer: ".mobile-menu",
          meanScreenWidth: "1199",
          meanExpand: ['<i class="fa-regular fa-plus"></i>'],
        }),
        e(".onepage-menu li a").on("click", function () {
          e(".onepage-menu li a.active").removeClass("active"),
            e(this).addClass("active"),
            e(".offcanvas-area").removeClass("info-open"),
            e(".offcanvas-overlay").removeClass("overlay-open");
        });
      var u = new Date("5 August 2025 14:00:00 GMT+06:00");
      u = Date.parse(u) / 1e3;
      var m = setInterval(function () {
        p(u, "countdown1"),
          p(u, "countdown2"),
          p(u, "countdown3"),
          p(u, "countdown4"),
          p(u, "countdown5");
      }, 1e3);
      if (e(".rs-services-tab-wrapper.auto-switch").length) {
        var h,
          v = 5e3;
        function f() {
          var t = e(
            ".rs-services-tab-wrapper.auto-switch .nav-item .nav-link.active"
          )
            .closest(".nav-item")
            .next(".nav-item")
            .find(".nav-link");
          t.length ||
            (t = e(".rs-services-tab-wrapper.auto-switch .nav-item")
              .first()
              .find(".nav-link")),
            t.trigger("click");
        }
        function g() {
          h = setInterval(f, v);
        }
        g(),
          e(".rs-services-tab-wrapper.auto-switch").on(
            "mouseenter",
            function () {
              clearInterval(h);
            }
          ),
          e(".rs-services-tab-wrapper.auto-switch").on(
            "mouseleave",
            function () {
              g();
            }
          );
      }
    }),
    e(".prallax-parent").length &&
      e(".prallax-parent").each(function () {
        var t = e(this).get(0);
        new Parallax(t);
      });
  new Swiper(".rs-marquee-slide", {
    spaceBetween: 0,
    centeredSlides: !0,
    speed: 1e4,
    autoplay: { delay: 1 },
    loop: !0,
    slidesPerView: "auto",
    allowTouchMove: !1,
    disableOnInteraction: !0,
  });
  if (e(".portfolio-load-more").length > 0)
    e(".grid").imagesLoaded(function () {
      var t = e(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: !0,
        masonry: { columnWidth: ".grid-item" },
      });
      e(".rs-portfolio-tab").on("click", "button", function () {
        var a = e(this).attr("data-filter");
        t.isotope({ filter: a });
      }),
        e(".rs-portfolio-tab button").on("click", function (t) {
          e(this).siblings(".active").removeClass("active"),
            e(this).addClass("active"),
            t.preventDefault();
        });
      var a = e(".portfolio-load-more").attr("data-show"),
        n = t.data("isotope");
      function s(a) {
        t.find(".hidden").removeClass("hidden");
        var s = n.filteredItems
          .slice(a, n.filteredItems.length)
          .map(function (e) {
            return e.element;
          });
        e(s).addClass("hidden"), t.isotope("layout");
      }
      s(a),
        e(".rs-portfolio-tab").on("click", function () {
          e(this).data("clicked", !0), s(a);
        });
    });
  else {
    e(".grid").imagesLoaded(function () {
      var t = e(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: !0,
        masonry: { columnWidth: ".grid-item" },
      });
      e(".featured-menu").on("click", "button", function () {
        var a = e(this).attr("data-filter");
        t.isotope({ filter: a });
      }),
        e(".featured-menu button").on("click", function (t) {
          e(this).siblings(".active").removeClass("active"),
            e(this).addClass("active"),
            t.preventDefault();
        });
    });
    var a = e(".featured-load-item-count").attr("data-show");
    e(".featured-load-item").hide(),
      e(".featured-load-item").slice(0, a).show(),
      e("body").on("click touchstart", ".load-more", function (t) {
        t.preventDefault(),
          e(".featured-load-item:hidden").slice(0, a).slideDown(),
          0 == e(".featured-load-item:hidden").length &&
            e(".load-more").css("display", "none");
      });
  }
  const n = document.querySelectorAll(".rs-accordion-item.has-border-active");
  if (
    (n.forEach((e) => {
      e.addEventListener("click", () => {
        n.forEach((e) => e.classList.remove("active")),
          e.classList.add("active");
      });
    }),
    document.addEventListener("mousemove", function (e) {
      let t = e.clientX,
        a = e.clientY,
        n = t / window.innerWidth - 0.5,
        s = a / window.innerHeight - 0.5;
      document.querySelectorAll(".shape-move img").forEach(function (e, t) {
        let a = n * (40 + 2 * t),
          i = s * (40 + 2 * t);
        e.style.transform = `translate(${a}px, ${i}px)`;
      });
    }),
    e(".rs-smoother-yes").length)
  ) {
    const o = new Lenis({
      smoothWheel: !0,
      wheelMultiplier: 1.2,
      duration: 1.5,
      lerp: 0.1,
    });
    function r(e) {
      o.raf(e), requestAnimationFrame(r);
    }
    requestAnimationFrame(r),
      document.querySelectorAll('a[href^="#"]').forEach((e) => {
        e.addEventListener("click", (t) => {
          t.preventDefault();
          const a = e.getAttribute("href")?.slice(1);
          if (!a) return;
          const n = document.getElementById(a);
          n && n.scrollIntoView({ behavior: "smooth" });
        });
      });
  }
  if (e(".rs-scale-item").length) {
    const l = document.querySelectorAll(".rs-scale-item");
    l.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        l.forEach((e) => {
          e.classList.remove("active");
        }),
          e.classList.add("active");
      });
    }),
      l[1].classList.add("active");
  }
  new Swiper(".text-slide-one", {
    loop: !0,
    freemode: !0,
    slidesPerView: 4,
    spaceBetween: 0,
    allowTouchMove: !1,
    speed: 1e4,
    autoplay: { delay: 1, disableOnInteraction: !0 },
  });
  var s = e("#contact-form"),
    i = e("#form-messages");
  e(s).submit(function (t) {
    t.preventDefault();
    var a = e(s).serialize();
    e.ajax({ type: "POST", url: e(s).attr("action"), data: a })
      .done(function (t) {
        e(i).removeClass("error"),
          e(i).addClass("success"),
          e(i).text(t),
          e("#name, #email, #message").val(""),
          e("#phone").length && e("#phone").val(""),
          e("#website").length && e("#website").val(""),
          e("#subject").length && e("#subject").val(""),
          e("#date").length && e("#date").val(""),
          e("#time").length && e("#time").val("");
      })
      .fail(function (t) {
        e(i).removeClass("success"),
          e(i).addClass("error"),
          "" !== t.responseText
            ? e(i).text(t.responseText)
            : e(i).text(
                "Oops! An error occurred and your message could not be sent."
              );
      });
  });
})(jQuery);
