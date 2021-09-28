(function (t) {
  function e(e) {
    for (
      var a, o, c = e[0], n = e[1], i = e[2], u = 0, f = [];
      u < c.length;
      u++
    )
      (o = c[u]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
        (r[o] = 0);
    for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    _ && _(e);
    while (f.length) f.shift()();
    return l.push.apply(l, i || []), s();
  }
  function s() {
    for (var t, e = 0; e < l.length; e++) {
      for (var s = l[e], a = !0, c = 1; c < s.length; c++) {
        var n = s[c];
        0 !== r[n] && (a = !1);
      }
      a && (l.splice(e--, 1), (t = o((o.s = s[0]))));
    }
    return t;
  }
  var a = {},
    r = { app: 0 },
    l = [];
  function o(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = t),
    (o.c = a),
    (o.d = function (t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          o.d(
            s,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "clothing_store_vue_cli_vuex/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    n = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var i = 0; i < c.length; i++) e(c[i]);
  var _ = n;
  l.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var a = s("2b0e"),
      r = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "app" } },
          [s("Header"), s("router-view"), s("Footer"), s("Copyright")],
          1
        );
      },
      l = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "header" }, [
          s("ul", { staticClass: "header_menu" }, [
            t._m(0),
            t._m(1),
            t._m(2),
            s(
              "li",
              { staticClass: "header_menu_el" },
              [
                s("router-link", { attrs: { to: "/" } }, [
                  s("img", { attrs: { src: "img/logo.png", alt: "logo" } }),
                ]),
              ],
              1
            ),
            t._m(3),
            t._m(4),
            s(
              "li",
              { staticClass: "header_menu_el" },
              [
                s(
                  "router-link",
                  {
                    staticClass: "header_menu_el_basket",
                    staticStyle: {
                      "text-decoration": "none",
                      color: "inherit",
                    },
                    attrs: { to: "/Cart" },
                  },
                  [
                    s(
                      "svg",
                      {
                        attrs: {
                          width: "20",
                          height: "26",
                          viewBox: "0 0 30 28",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        s("path", {
                          staticClass: "header_menu_el_basket_svg",
                          attrs: {
                            d: "M22.2936 10.4909L16.2385 1.40831C15.9632 1.13308 15.5505 0.857849 15.1376 0.857849C14.7248 0.857849 14.3119 0.995464 14.0367 1.40831L7.98165 10.4909H1.37615C0.550459 10.4909 0 11.0413 0 11.867C0 12.0046 0 12.1423 0 12.2799L3.44037 25.078C3.7156 26.179 4.81651 27.1423 6.05505 27.1423H23.945C25.1835 27.1423 26.2844 26.3166 26.5596 25.078L30 12.2799C30 12.1423 30 12.0046 30 11.867C30 11.0413 29.4495 10.4909 28.6239 10.4909H22.2936ZM11.0092 10.4909L15.1376 4.43583L19.2661 10.4909H11.0092ZM15.1376 21.5001C13.6239 21.5001 12.3853 20.2615 12.3853 18.7478C12.3853 17.234 13.6239 15.9955 15.1376 15.9955C16.6514 15.9955 17.8899 17.234 17.8899 18.7478C17.8899 20.2615 16.6514 21.5001 15.1376 21.5001Z",
                            fill: "black",
                          },
                        }),
                      ]
                    ),
                    s("span", { staticClass: "counter" }, [
                      t._v(t._s(t.counter)),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      c = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", { staticClass: "header_menu_el" }, [
            s("a", [t._v("Для мужчин")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", { staticClass: "header_menu_el" }, [
            s("a", [t._v("Для женщин")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", { staticClass: "header_menu_el" }, [
            s("a", [t._v("Для детей")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", { staticClass: "header_menu_el" }, [
            s("a", [t._v("Оплата")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", { staticClass: "header_menu_el" }, [
            s("a", [t._v("Доставка")]),
          ]);
        },
      ],
      n = {
        name: "Header",
        computed: {
          counter: function () {
            return this.$store.getters.getCart.reduce(function (t, e) {
              return t + e.count;
            }, 0);
          },
        },
      },
      i = n,
      _ = s("2877"),
      u = Object(_["a"])(i, o, c, !1, null, null, null),
      f = u.exports,
      p = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      m = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "footer" }, [
            s("div", { staticClass: "footer_block" }, [
              s("div", { staticClass: "footer_block_text" }, [
                s("a", [
                  s("img", { attrs: { src: "img/logo2.png", alt: "logo2" } }),
                ]),
                s("span", { staticClass: "footer_block_text_txt" }, [
                  t._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut."
                  ),
                ]),
              ]),
              s("div", { staticClass: "footer_block_links" }, [
                s("ul", { staticClass: "footer_block_list" }, [
                  s("span", { staticClass: "footer_block_title" }, [
                    t._v("Основные ссылки"),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("О компании")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Каталог")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Доставка")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Оплата")]),
                  ]),
                ]),
                s("ul", { staticClass: "footer_block_list" }, [
                  s("span", { staticClass: "footer_block_title" }, [
                    t._v("Категории"),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Мужская одежда")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Женская одежда")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Детская одежда")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Для животных")]),
                  ]),
                ]),
                s("ul", { staticClass: "footer_block_list" }, [
                  s("span", { staticClass: "footer_block_title" }, [
                    t._v("Полезные ссылки"),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Таблица размеров")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Блог о моде")]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [t._v("Наша миссия")]),
                  ]),
                ]),
                s("ul", { staticClass: "footer_block_list" }, [
                  s("span", { staticClass: "footer_block_title" }, [
                    t._v("Соц сети"),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [
                      s("i", {
                        staticClass: "fab fa-vk footer_block_list_el_icon",
                      }),
                      t._v(" VK.com"),
                    ]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [
                      s("i", {
                        staticClass:
                          "fab fa-facebook-square footer_block_list_el_icon",
                      }),
                      t._v(" Facebook"),
                    ]),
                  ]),
                  s("li", { staticClass: "footer_block_list_el" }, [
                    s("a", [
                      s("i", {
                        staticClass:
                          "fab fa-instagram footer_block_list_el_icon",
                      }),
                      t._v(" Instagram"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      d = { name: "Footer" },
      v = d,
      C = Object(_["a"])(v, p, m, !1, null, null, null),
      h = C.exports,
      b = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      k = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "copyright" }, [
            s("span", { staticClass: "copyright_item" }, [
              t._v("Copyright © 2019. Все права защищены"),
            ]),
            s("span", { staticClass: "copyright_item" }, [
              t._v("Политика приватности"),
            ]),
          ]);
        },
      ],
      g = { name: "Copyright" },
      O = g,
      $ = Object(_["a"])(O, b, k, !1, null, null, null),
      y = $.exports,
      x = {
        components: { Copyright: y, Footer: h, Header: f },
        data: function () {
          return {};
        },
        mounted: function () {
          this.$store.dispatch("loadCatalog");
        },
      },
      j = x,
      E = Object(_["a"])(j, r, l, !1, null, null, null),
      w = E.exports,
      I = s("8c4f"),
      P = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [s("Header_block"), s("Products")], 1);
      },
      H = [],
      S = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      B = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", [
            s("header", { staticClass: "container" }, [
              s("div", { staticClass: "header_block" }, [
                s("h2", { staticClass: "header_block_title" }, [
                  t._v("Зимняя распродажа"),
                ]),
                s("h1", { staticClass: "header_block_link" }, [
                  t._v("скидки до 90%"),
                ]),
                s("button", { staticClass: "header_block_button" }, [
                  t._v("Смотреть модели"),
                ]),
              ]),
            ]),
            s("div", { staticClass: "reclame" }, [
              s("h2", { staticClass: "reclame_title" }, [
                t._v("Бесплатная доставка от 3000р"),
              ]),
              s("h3", { staticClass: "reclame_text" }, [
                t._v("Сделайте заказ и получите подарок!"),
              ]),
            ]),
          ]);
        },
      ],
      M = { name: "Header_block" },
      F = M,
      L = Object(_["a"])(F, S, B, !1, null, null, null),
      T = L.exports,
      D = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "catalog container" },
          t._l(t.products, function (t) {
            return s("Product", { key: t.id, attrs: { product: t } });
          }),
          1
        );
      },
      N = [],
      V = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "catalog_cart" }, [
          s("img", {
            staticClass: "catalog_cart_img",
            attrs: {
              src: t.product.img,
              width: "250",
              height: "270",
              alt: "photo",
            },
          }),
          s("h3", { staticClass: "catalog_cart_title" }, [
            t._v(t._s(t.product.title)),
          ]),
          s("span", { staticClass: "catalog_cart_price" }, [
            s("span", [t._v(t._s(t.product.price))]),
            t._v("рублей"),
          ]),
          s(
            "button",
            { staticClass: "catalog_cart_button", on: { click: t.addToCart } },
            [t._v(" Добавить в корзину ")]
          ),
        ]);
      },
      Z = [],
      A = {
        name: "Product",
        props: ["product"],
        methods: {
          addToCart: function () {
            this.$store.commit("addToCart", this.product),
              console.log(this.$store.state.cartItems);
          },
        },
      },
      J = A,
      R = Object(_["a"])(J, V, Z, !1, null, null, null),
      U = R.exports,
      q = {
        name: "Products",
        components: { Product: U },
        computed: {
          products: function () {
            return this.$store.getters.getCatalog;
          },
        },
      },
      K = q,
      Y = Object(_["a"])(K, D, N, !1, null, null, null),
      z = Y.exports,
      G = { name: "Home", components: { Products: z, Header_block: T } },
      Q = G,
      W = Object(_["a"])(Q, P, H, !1, null, null, null),
      X = W.exports,
      tt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [s("Basket"), s("Header_block"), s("Products")], 1);
      },
      et = [],
      st = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "basket" },
          [
            s("h3", { staticClass: "basket_title" }, [t._v("Ваша корзина")]),
            t._m(0),
            s("router-link", { attrs: { to: "/" } }, [
              s("i", { staticClass: "far fa-times-circle closeBtn" }),
            ]),
            t._l(t.basket, function (t) {
              return s("BasketItem", { key: t.id, attrs: { cartItem: t } });
            }),
            s("div", { staticClass: "cart_summ" }, [
              s("span", [
                t._v("Товаров в корзине на сумму:"),
                s("span", { staticClass: "basket_summ" }, [
                  t._v(" " + t._s(t.totalSumm) + " "),
                ]),
                t._v(" рублей"),
              ]),
            ]),
          ],
          2
        );
      },
      at = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "basket_parametrs" }, [
            s("span", { staticClass: "basket_part" }, [
              t._v("Название товара"),
            ]),
            s("span", { staticClass: "basket_part" }, [t._v("Количество")]),
            s("span", { staticClass: "basket_part" }, [t._v("Цена за шт.")]),
            s("span", { staticClass: "basket_part" }, [t._v("Итого")]),
            s("span", { staticClass: "basket_part" }),
          ]);
        },
      ],
      rt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "newProducts" }, [
          s("div", { staticClass: "basket_item" }, [
            s("span", { staticClass: "basket_part" }, [
              t._v(t._s(t.cartItem.title)),
            ]),
            s("span", { staticClass: "basket_part" }, [
              s("span", { staticClass: "product_number" }, [
                t._v(t._s(t.cartItem.count)),
              ]),
              t._v(" шт."),
            ]),
            s("span", { staticClass: "basket_part" }, [
              s("span", { staticClass: "product_price" }, [
                t._v(t._s(t.cartItem.price)),
              ]),
              t._v(" руб."),
            ]),
            s("span", { staticClass: "basket_part" }, [
              s("span", { staticClass: "summOfRow" }, [
                t._v(t._s(t.cartItem.finishprice)),
              ]),
              t._v(" руб."),
            ]),
            s(
              "button",
              {
                staticClass: "basket_item_delete",
                on: { click: t.deleteFromBasket },
              },
              [t._v(" Удалить товар ")]
            ),
          ]),
        ]);
      },
      lt = [],
      ot = {
        name: "BasketItem",
        props: ["cartItem"],
        methods: {
          deleteFromBasket: function () {
            this.$store.commit("deleteFromCart", this.cartItem),
              console.log(this.$store.state.cartItems);
          },
        },
      },
      ct = ot,
      nt = Object(_["a"])(ct, rt, lt, !1, null, null, null),
      it = nt.exports,
      _t = {
        name: "Basket",
        components: { BasketItem: it },
        data: function () {
          return { cartItems: [] };
        },
        computed: {
          basket: function () {
            return this.$store.getters.getCart;
          },
          totalSumm: function () {
            return this.$store.getters.getCart.reduce(function (t, e) {
              return t + e.finishprice;
            }, 0);
          },
        },
      },
      ut = _t,
      ft = (s("d960"), Object(_["a"])(ut, st, at, !1, null, null, null)),
      pt = ft.exports,
      mt = {
        name: "Cart",
        components: { Basket: pt, Products: z, Header_block: T },
      },
      dt = mt,
      vt = Object(_["a"])(dt, tt, et, !1, null, null, null),
      Ct = vt.exports;
    a["a"].use(I["a"]);
    var ht = [
        { path: "/", name: "Home", component: X },
        { path: "/Cart", name: "Cart", component: Ct },
      ],
      bt = new I["a"]({
        mode: "history",
        base:
          "production" ===
          Object({
            NODE_ENV: "production",
            BASE_URL: "clothing_store_vue_cli_vuex/",
          }).VUE_APP_MODE
            ? "./"
            : "/clothing_store_vue_cli_vuex/",
        routes: ht,
      }),
      kt = bt,
      gt = s("2909"),
      Ot = (s("99af"), s("7db0"), s("a434"), s("d3b7"), s("2f62"));
    a["a"].use(Ot["a"]);
    var $t = new Ot["a"].Store({
      state: { products: [], cartItems: [] },
      getters: {
        getCatalog: function (t) {
          return t.products;
        },
        getCart: function (t) {
          return t.cartItems;
        },
      },
      mutations: {
        setCatalog: function (t, e) {
          t.products = [].concat(
            Object(gt["a"])(t.products),
            Object(gt["a"])(e)
          );
        },
        addToCart: function (t, e) {
          var s = t.cartItems.find(function (t) {
            return t.id_product === e.id_product;
          });
          if (s)
            s.count++,
              (s.finishprice = s.count * s.price),
              console.log(t.cartItems);
          else {
            var a = Object.assign({ count: 1, finishprice: e.price }, e);
            t.cartItems.push(a), console.log(t.cartItems);
          }
        },
        deleteFromCart: function (t, e) {
          if (e.count > 1)
            e.count--,
              (e.finishprice = e.count * e.price),
              (this.totalSumm -= e.price);
          else {
            var s = t.cartItems.find(function (t) {
              return t.id_product === e.id_product;
            });
            this.state.cartItems.splice(t.cartItems.indexOf(s), 1),
              console.log(t.cartItems),
              (this.totalSumm -= e.price);
          }
        },
      },
      actions: {
        loadCatalog: function (t) {
          var e = t.commit;
          return fetch(
            "https://raw.githubusercontent.com/YuliyaMikhaleva/clothing_store_api/master/response/catalogData.json"
          )
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              console.log(t), e("setCatalog", t);
            });
        },
      },
      modules: {},
    });
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: kt,
        store: $t,
        render: function (t) {
          return t(w);
        },
      }).$mount("#app");
  },
  c812: function (t, e, s) {},
  d960: function (t, e, s) {
    "use strict";
    s("c812");
  },
});
//# sourceMappingURL=app.f168045a.js.map
