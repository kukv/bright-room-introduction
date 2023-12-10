;(self.webpackChunkbright_room_introduction =
  self.webpackChunkbright_room_introduction || []).push([
  [391],
  {
    './node_modules/@babel/runtime/helpers/esm/defineProperty.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function _typeof(o) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (o) {
                  return typeof o
                }
              : function (o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o
                }),
          _typeof(o)
        )
      }
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ('object' !== _typeof(input) || null === input) return input
          var prim = input[Symbol.toPrimitive]
          if (void 0 !== prim) {
            var res = prim.call(input, hint || 'default')
            if ('object' !== _typeof(res)) return res
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === hint ? String : Number)(input)
        })(arg, 'string')
        return 'symbol' === _typeof(key) ? key : String(key)
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = _toPropertyKey(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _defineProperty })
    },
    './node_modules/@babel/runtime/helpers/esm/extends.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key])
                }
                return target
              }),
          _extends.apply(this, arguments)
        )
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _extends })
    },
    './node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function _objectDestructuringEmpty(obj) {
        if (null == obj) throw new TypeError('Cannot destructure ' + obj)
      }
      __webpack_require__.d(__webpack_exports__, {
        Z: () => _objectDestructuringEmpty,
      })
    },
    './node_modules/@fortawesome/free-brands-svg-icons/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { NCc: () => faXTwitter })
      var faXTwitter = {
        prefix: 'fab',
        iconName: 'x-twitter',
        icon: [
          512,
          512,
          [],
          'e61b',
          'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
        ],
      }
    },
    './node_modules/@fortawesome/react-fontawesome/index.es.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { G: () => FontAwesomeIcon })
      var console = __webpack_require__(
        './node_modules/console-browserify/index.js'
      )
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  )
                })
        }
        return target
      }
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj
                }),
          _typeof(obj)
        )
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i]
          ;(descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null == _i) return
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter)
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var noop = function noop() {},
        _WINDOW = {},
        _DOCUMENT = {},
        _MUTATION_OBSERVER = null,
        _PERFORMANCE = { mark: noop, measure: noop }
      try {
        'undefined' != typeof window && (_WINDOW = window),
          'undefined' != typeof document && (_DOCUMENT = document),
          'undefined' != typeof MutationObserver &&
            (_MUTATION_OBSERVER = MutationObserver),
          'undefined' != typeof performance && (_PERFORMANCE = performance)
      } catch (e) {}
      var _familyProxy,
        _familyProxy2,
        _familyProxy3,
        _familyProxy4,
        _familyProxy5,
        _ref$userAgent = (_WINDOW.navigator || {}).userAgent,
        userAgent = void 0 === _ref$userAgent ? '' : _ref$userAgent,
        WINDOW = _WINDOW,
        DOCUMENT = _DOCUMENT,
        MUTATION_OBSERVER = _MUTATION_OBSERVER,
        PERFORMANCE = _PERFORMANCE,
        IS_DOM =
          (WINDOW.document,
          !!DOCUMENT.documentElement &&
            !!DOCUMENT.head &&
            'function' == typeof DOCUMENT.addEventListener &&
            'function' == typeof DOCUMENT.createElement),
        IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/'),
        UNITS_IN_GRID = 16,
        DEFAULT_CSS_PREFIX = 'fa',
        DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa',
        DATA_FA_I2SVG = 'data-fa-i2svg',
        DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element',
        DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending',
        DATA_PREFIX = 'data-prefix',
        DATA_ICON = 'data-icon',
        MUTATION_APPROACH_ASYNC = 'async',
        TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [
          'HTML',
          'HEAD',
          'STYLE',
          'SCRIPT',
        ],
        PRODUCTION = (function () {
          try {
            return !0
          } catch (e) {
            return !1
          }
        })(),
        FAMILY_CLASSIC = 'classic',
        FAMILY_SHARP = 'sharp',
        FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP]
      function familyProxy(obj) {
        return new Proxy(obj, {
          get: function get(target, prop) {
            return prop in target ? target[prop] : target[FAMILY_CLASSIC]
          },
        })
      }
      var PREFIX_TO_STYLE = familyProxy(
          (_defineProperty((_familyProxy = {}), FAMILY_CLASSIC, {
            fa: 'solid',
            fas: 'solid',
            'fa-solid': 'solid',
            far: 'regular',
            'fa-regular': 'regular',
            fal: 'light',
            'fa-light': 'light',
            fat: 'thin',
            'fa-thin': 'thin',
            fad: 'duotone',
            'fa-duotone': 'duotone',
            fab: 'brands',
            'fa-brands': 'brands',
            fak: 'kit',
            fakd: 'kit',
            'fa-kit': 'kit',
            'fa-kit-duotone': 'kit',
          }),
          _defineProperty(_familyProxy, FAMILY_SHARP, {
            fa: 'solid',
            fass: 'solid',
            'fa-solid': 'solid',
            fasr: 'regular',
            'fa-regular': 'regular',
            fasl: 'light',
            'fa-light': 'light',
            fast: 'thin',
            'fa-thin': 'thin',
          }),
          _familyProxy)
        ),
        STYLE_TO_PREFIX = familyProxy(
          (_defineProperty((_familyProxy2 = {}), FAMILY_CLASSIC, {
            solid: 'fas',
            regular: 'far',
            light: 'fal',
            thin: 'fat',
            duotone: 'fad',
            brands: 'fab',
            kit: 'fak',
          }),
          _defineProperty(_familyProxy2, FAMILY_SHARP, {
            solid: 'fass',
            regular: 'fasr',
            light: 'fasl',
            thin: 'fast',
          }),
          _familyProxy2)
        ),
        PREFIX_TO_LONG_STYLE = familyProxy(
          (_defineProperty((_familyProxy3 = {}), FAMILY_CLASSIC, {
            fab: 'fa-brands',
            fad: 'fa-duotone',
            fak: 'fa-kit',
            fal: 'fa-light',
            far: 'fa-regular',
            fas: 'fa-solid',
            fat: 'fa-thin',
          }),
          _defineProperty(_familyProxy3, FAMILY_SHARP, {
            fass: 'fa-solid',
            fasr: 'fa-regular',
            fasl: 'fa-light',
            fast: 'fa-thin',
          }),
          _familyProxy3)
        ),
        LONG_STYLE_TO_PREFIX = familyProxy(
          (_defineProperty((_familyProxy4 = {}), FAMILY_CLASSIC, {
            'fa-brands': 'fab',
            'fa-duotone': 'fad',
            'fa-kit': 'fak',
            'fa-light': 'fal',
            'fa-regular': 'far',
            'fa-solid': 'fas',
            'fa-thin': 'fat',
          }),
          _defineProperty(_familyProxy4, FAMILY_SHARP, {
            'fa-solid': 'fass',
            'fa-regular': 'fasr',
            'fa-light': 'fasl',
            'fa-thin': 'fast',
          }),
          _familyProxy4)
        ),
        ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
        LAYERS_TEXT_CLASSNAME = 'fa-layers-text',
        FONT_FAMILY_PATTERN =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        FONT_WEIGHT_TO_PREFIX = familyProxy(
          (_defineProperty((_familyProxy5 = {}), FAMILY_CLASSIC, {
            900: 'fas',
            400: 'far',
            normal: 'far',
            300: 'fal',
            100: 'fat',
          }),
          _defineProperty(_familyProxy5, FAMILY_SHARP, {
            900: 'fass',
            400: 'fasr',
            300: 'fasl',
            100: 'fast',
          }),
          _familyProxy5)
        ),
        oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        ATTRIBUTES_WATCHED_FOR_MUTATION = [
          'class',
          'data-prefix',
          'data-icon',
          'data-fa-transform',
          'data-fa-mask',
        ],
        DUOTONE_CLASSES = {
          GROUP: 'duotone-group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary',
        },
        prefixes = new Set()
      Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(
        prefixes.add.bind(prefixes)
      ),
        Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(
          prefixes.add.bind(prefixes)
        )
      var RESERVED_CLASSES = []
          .concat(FAMILIES, _toConsumableArray(prefixes), [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            'beat',
            'border',
            'fade',
            'beat-fade',
            'bounce',
            'flip-both',
            'flip-horizontal',
            'flip-vertical',
            'flip',
            'fw',
            'inverse',
            'layers-counter',
            'layers-text',
            'layers',
            'li',
            'pull-left',
            'pull-right',
            'pulse',
            'rotate-180',
            'rotate-270',
            'rotate-90',
            'rotate-by',
            'shake',
            'spin-pulse',
            'spin-reverse',
            'spin',
            'stack-1x',
            'stack-2x',
            'stack',
            'ul',
            DUOTONE_CLASSES.GROUP,
            DUOTONE_CLASSES.SWAP_OPACITY,
            DUOTONE_CLASSES.PRIMARY,
            DUOTONE_CLASSES.SECONDARY,
          ])
          .concat(
            oneToTen.map(function (n) {
              return ''.concat(n, 'x')
            })
          )
          .concat(
            oneToTwenty.map(function (n) {
              return 'w-'.concat(n)
            })
          ),
        initial = WINDOW.FontAwesomeConfig || {}
      if (DOCUMENT && 'function' == typeof DOCUMENT.querySelector) {
        ;[
          ['data-family-prefix', 'familyPrefix'],
          ['data-css-prefix', 'cssPrefix'],
          ['data-family-default', 'familyDefault'],
          ['data-style-default', 'styleDefault'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons'],
        ].forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            attr = _ref2[0],
            key = _ref2[1],
            val = (function coerce(val) {
              return '' === val || ('false' !== val && ('true' === val || val))
            })(
              (function getAttrConfig(attr) {
                var element = DOCUMENT.querySelector('script[' + attr + ']')
                if (element) return element.getAttribute(attr)
              })(attr)
            )
          null != val && (initial[key] = val)
        })
      }
      var _default = {
        styleDefault: 'solid',
        familyDefault: 'classic',
        cssPrefix: DEFAULT_CSS_PREFIX,
        replacementClass: DEFAULT_REPLACEMENT_CLASS,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      }
      initial.familyPrefix && (initial.cssPrefix = initial.familyPrefix)
      var _config = _objectSpread2(_objectSpread2({}, _default), initial)
      _config.autoReplaceSvg || (_config.observeMutations = !1)
      var config = {}
      Object.keys(_default).forEach(function (key) {
        Object.defineProperty(config, key, {
          enumerable: !0,
          set: function set(val) {
            ;(_config[key] = val),
              _onChangeCb.forEach(function (cb) {
                return cb(config)
              })
          },
          get: function get() {
            return _config[key]
          },
        })
      }),
        Object.defineProperty(config, 'familyPrefix', {
          enumerable: !0,
          set: function set(val) {
            ;(_config.cssPrefix = val),
              _onChangeCb.forEach(function (cb) {
                return cb(config)
              })
          },
          get: function get() {
            return _config.cssPrefix
          },
        }),
        (WINDOW.FontAwesomeConfig = config)
      var _onChangeCb = []
      var d = UNITS_IN_GRID,
        meaninglessTransform = {
          size: 16,
          x: 0,
          y: 0,
          rotate: 0,
          flipX: !1,
          flipY: !1,
        }
      var idPool =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      function nextUniqueId() {
        for (var size = 12, id = ''; size-- > 0; )
          id += idPool[(62 * Math.random()) | 0]
        return id
      }
      function toArray(obj) {
        for (var array = [], i = (obj || []).length >>> 0; i--; )
          array[i] = obj[i]
        return array
      }
      function classArray(node) {
        return node.classList
          ? toArray(node.classList)
          : (node.getAttribute('class') || '').split(' ').filter(function (i) {
              return i
            })
      }
      function htmlEscape(str) {
        return ''
          .concat(str)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
      }
      function joinStyles(styles) {
        return Object.keys(styles || {}).reduce(function (acc, styleName) {
          return (
            acc +
            ''.concat(styleName, ': ').concat(styles[styleName].trim(), ';')
          )
        }, '')
      }
      function transformIsMeaningful(transform) {
        return (
          transform.size !== meaninglessTransform.size ||
          transform.x !== meaninglessTransform.x ||
          transform.y !== meaninglessTransform.y ||
          transform.rotate !== meaninglessTransform.rotate ||
          transform.flipX ||
          transform.flipY
        )
      }
      var baseStyles =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}'
      function css() {
        var dcp = DEFAULT_CSS_PREFIX,
          drc = DEFAULT_REPLACEMENT_CLASS,
          fp = config.cssPrefix,
          rc = config.replacementClass,
          s = baseStyles
        if (fp !== dcp || rc !== drc) {
          var dPatt = new RegExp('\\.'.concat(dcp, '\\-'), 'g'),
            customPropPatt = new RegExp('\\--'.concat(dcp, '\\-'), 'g'),
            rPatt = new RegExp('\\.'.concat(drc), 'g')
          s = s
            .replace(dPatt, '.'.concat(fp, '-'))
            .replace(customPropPatt, '--'.concat(fp, '-'))
            .replace(rPatt, '.'.concat(rc))
        }
        return s
      }
      var _cssInserted = !1
      function ensureCss() {
        config.autoAddCss &&
          !_cssInserted &&
          (!(function insertCss(css) {
            if (css && IS_DOM) {
              var style = DOCUMENT.createElement('style')
              style.setAttribute('type', 'text/css'), (style.innerHTML = css)
              for (
                var headChildren = DOCUMENT.head.childNodes,
                  beforeChild = null,
                  i = headChildren.length - 1;
                i > -1;
                i--
              ) {
                var child = headChildren[i],
                  tagName = (child.tagName || '').toUpperCase()
                ;['STYLE', 'LINK'].indexOf(tagName) > -1 &&
                  (beforeChild = child)
              }
              return DOCUMENT.head.insertBefore(style, beforeChild), css
            }
          })(css()),
          (_cssInserted = !0))
      }
      var InjectCSS = {
          mixout: function mixout() {
            return { dom: { css, insertCss: ensureCss } }
          },
          hooks: function hooks() {
            return {
              beforeDOMElementCreation: function beforeDOMElementCreation() {
                ensureCss()
              },
              beforeI2svg: function beforeI2svg() {
                ensureCss()
              },
            }
          },
        },
        w = WINDOW || {}
      w.___FONT_AWESOME___ || (w.___FONT_AWESOME___ = {}),
        w.___FONT_AWESOME___.styles || (w.___FONT_AWESOME___.styles = {}),
        w.___FONT_AWESOME___.hooks || (w.___FONT_AWESOME___.hooks = {}),
        w.___FONT_AWESOME___.shims || (w.___FONT_AWESOME___.shims = [])
      var namespace = w.___FONT_AWESOME___,
        functions = [],
        loaded = !1
      function toHtml(abstractNodes) {
        var tag = abstractNodes.tag,
          _abstractNodes$attrib = abstractNodes.attributes,
          attributes =
            void 0 === _abstractNodes$attrib ? {} : _abstractNodes$attrib,
          _abstractNodes$childr = abstractNodes.children,
          children =
            void 0 === _abstractNodes$childr ? [] : _abstractNodes$childr
        return 'string' == typeof abstractNodes
          ? htmlEscape(abstractNodes)
          : '<'
              .concat(tag, ' ')
              .concat(
                (function joinAttributes(attributes) {
                  return Object.keys(attributes || {})
                    .reduce(function (acc, attributeName) {
                      return (
                        acc +
                        ''
                          .concat(attributeName, '="')
                          .concat(htmlEscape(attributes[attributeName]), '" ')
                      )
                    }, '')
                    .trim()
                })(attributes),
                '>'
              )
              .concat(children.map(toHtml).join(''), '</')
              .concat(tag, '>')
      }
      function iconFromMapping(mapping, prefix, iconName) {
        if (mapping && mapping[prefix] && mapping[prefix][iconName])
          return { prefix, iconName, icon: mapping[prefix][iconName] }
      }
      IS_DOM &&
        ((loaded = (
          DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(DOCUMENT.readyState)) ||
          DOCUMENT.addEventListener('DOMContentLoaded', function listener() {
            DOCUMENT.removeEventListener('DOMContentLoaded', listener),
              (loaded = 1),
              functions.map(function (fn) {
                return fn()
              })
          }))
      var reduce = function fastReduceObject(
        subject,
        fn,
        initialValue,
        thisContext
      ) {
        var i,
          key,
          result,
          keys = Object.keys(subject),
          length = keys.length,
          iterator =
            void 0 !== thisContext
              ? (function bindInternal4(func, thisContext) {
                  return function (a, b, c, d) {
                    return func.call(thisContext, a, b, c, d)
                  }
                })(fn, thisContext)
              : fn
        for (
          void 0 === initialValue
            ? ((i = 1), (result = subject[keys[0]]))
            : ((i = 0), (result = initialValue));
          i < length;
          i++
        )
          result = iterator(result, subject[(key = keys[i])], key, subject)
        return result
      }
      function toHex(unicode) {
        var decoded = (function ucs2decode(string) {
          for (
            var output = [], counter = 0, length = string.length;
            counter < length;

          ) {
            var value = string.charCodeAt(counter++)
            if (value >= 55296 && value <= 56319 && counter < length) {
              var extra = string.charCodeAt(counter++)
              56320 == (64512 & extra)
                ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536)
                : (output.push(value), counter--)
            } else output.push(value)
          }
          return output
        })(unicode)
        return 1 === decoded.length ? decoded[0].toString(16) : null
      }
      function normalizeIcons(icons) {
        return Object.keys(icons).reduce(function (acc, iconName) {
          var icon = icons[iconName]
          return (
            !!icon.icon
              ? (acc[icon.iconName] = icon.icon)
              : (acc[iconName] = icon),
            acc
          )
        }, {})
      }
      function defineIcons(prefix, icons) {
        var _params$skipHooks = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).skipHooks,
          skipHooks = void 0 !== _params$skipHooks && _params$skipHooks,
          normalized = normalizeIcons(icons)
        'function' != typeof namespace.hooks.addPack || skipHooks
          ? (namespace.styles[prefix] = _objectSpread2(
              _objectSpread2({}, namespace.styles[prefix] || {}),
              normalized
            ))
          : namespace.hooks.addPack(prefix, normalizeIcons(icons)),
          'fas' === prefix && defineIcons('fa', icons)
      }
      var _LONG_STYLE,
        _PREFIXES,
        _PREFIXES_FOR_FAMILY,
        styles = namespace.styles,
        shims = namespace.shims,
        LONG_STYLE =
          (_defineProperty(
            (_LONG_STYLE = {}),
            FAMILY_CLASSIC,
            Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])
          ),
          _defineProperty(
            _LONG_STYLE,
            FAMILY_SHARP,
            Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])
          ),
          _LONG_STYLE),
        _defaultUsablePrefix = null,
        _byUnicode = {},
        _byLigature = {},
        _byOldName = {},
        _byOldUnicode = {},
        _byAlias = {},
        PREFIXES =
          (_defineProperty(
            (_PREFIXES = {}),
            FAMILY_CLASSIC,
            Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])
          ),
          _defineProperty(
            _PREFIXES,
            FAMILY_SHARP,
            Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])
          ),
          _PREFIXES)
      function getIconName(cssPrefix, cls) {
        var parts = cls.split('-'),
          prefix = parts[0],
          iconName = parts.slice(1).join('-')
        return prefix !== cssPrefix ||
          '' === iconName ||
          (function isReserved(name) {
            return ~RESERVED_CLASSES.indexOf(name)
          })(iconName)
          ? null
          : iconName
      }
      var build = function build() {
        var lookup = function lookup(reducer) {
          return reduce(
            styles,
            function (o, style, prefix) {
              return (o[prefix] = reduce(style, reducer, {})), o
            },
            {}
          )
        }
        ;(_byUnicode = lookup(function (acc, icon, iconName) {
          ;(icon[3] && (acc[icon[3]] = iconName), icon[2]) &&
            icon[2]
              .filter(function (a) {
                return 'number' == typeof a
              })
              .forEach(function (alias) {
                acc[alias.toString(16)] = iconName
              })
          return acc
        })),
          (_byLigature = lookup(function (acc, icon, iconName) {
            ;((acc[iconName] = iconName), icon[2]) &&
              icon[2]
                .filter(function (a) {
                  return 'string' == typeof a
                })
                .forEach(function (alias) {
                  acc[alias] = iconName
                })
            return acc
          })),
          (_byAlias = lookup(function (acc, icon, iconName) {
            var aliases = icon[2]
            return (
              (acc[iconName] = iconName),
              aliases.forEach(function (alias) {
                acc[alias] = iconName
              }),
              acc
            )
          }))
        var hasRegular = 'far' in styles || config.autoFetchSvg,
          shimLookups = reduce(
            shims,
            function (acc, shim) {
              var maybeNameMaybeUnicode = shim[0],
                prefix = shim[1],
                iconName = shim[2]
              return (
                'far' !== prefix || hasRegular || (prefix = 'fas'),
                'string' == typeof maybeNameMaybeUnicode &&
                  (acc.names[maybeNameMaybeUnicode] = { prefix, iconName }),
                'number' == typeof maybeNameMaybeUnicode &&
                  (acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
                    prefix,
                    iconName,
                  }),
                acc
              )
            },
            { names: {}, unicodes: {} }
          )
        ;(_byOldName = shimLookups.names),
          (_byOldUnicode = shimLookups.unicodes),
          (_defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
            family: config.familyDefault,
          }))
      }
      function byUnicode(prefix, unicode) {
        return (_byUnicode[prefix] || {})[unicode]
      }
      function byAlias(prefix, alias) {
        return (_byAlias[prefix] || {})[alias]
      }
      function byOldName(name) {
        return _byOldName[name] || { prefix: null, iconName: null }
      }
      function getDefaultUsablePrefix() {
        return _defaultUsablePrefix
      }
      !(function onChange(cb) {
        return (
          _onChangeCb.push(cb),
          function () {
            _onChangeCb.splice(_onChangeCb.indexOf(cb), 1)
          }
        )
      })(function (c) {
        _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
          family: config.familyDefault,
        })
      }),
        build()
      var emptyCanonicalIcon = function emptyCanonicalIcon() {
        return { prefix: null, iconName: null, rest: [] }
      }
      function getCanonicalPrefix(styleOrPrefix) {
        var _params$family = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).family,
          family = void 0 === _params$family ? FAMILY_CLASSIC : _params$family,
          style = PREFIX_TO_STYLE[family][styleOrPrefix],
          prefix =
            STYLE_TO_PREFIX[family][styleOrPrefix] ||
            STYLE_TO_PREFIX[family][style],
          defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null
        return prefix || defined || null
      }
      var PREFIXES_FOR_FAMILY =
        (_defineProperty(
          (_PREFIXES_FOR_FAMILY = {}),
          FAMILY_CLASSIC,
          Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])
        ),
        _defineProperty(
          _PREFIXES_FOR_FAMILY,
          FAMILY_SHARP,
          Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])
        ),
        _PREFIXES_FOR_FAMILY)
      function getCanonicalIcon(values) {
        var _famProps,
          _params$skipLookups = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).skipLookups,
          skipLookups = void 0 !== _params$skipLookups && _params$skipLookups,
          famProps =
            (_defineProperty(
              (_famProps = {}),
              FAMILY_CLASSIC,
              ''.concat(config.cssPrefix, '-').concat(FAMILY_CLASSIC)
            ),
            _defineProperty(
              _famProps,
              FAMILY_SHARP,
              ''.concat(config.cssPrefix, '-').concat(FAMILY_SHARP)
            ),
            _famProps),
          givenPrefix = null,
          family = FAMILY_CLASSIC
        ;(values.includes(famProps[FAMILY_CLASSIC]) ||
          values.some(function (v) {
            return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v)
          })) &&
          (family = FAMILY_CLASSIC),
          (values.includes(famProps[FAMILY_SHARP]) ||
            values.some(function (v) {
              return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v)
            })) &&
            (family = FAMILY_SHARP)
        var canonical = values.reduce(function (acc, cls) {
          var iconName = getIconName(config.cssPrefix, cls)
          if (
            (styles[cls]
              ? ((cls = LONG_STYLE[family].includes(cls)
                  ? LONG_STYLE_TO_PREFIX[family][cls]
                  : cls),
                (givenPrefix = cls),
                (acc.prefix = cls))
              : PREFIXES[family].indexOf(cls) > -1
                ? ((givenPrefix = cls),
                  (acc.prefix = getCanonicalPrefix(cls, { family })))
                : iconName
                  ? (acc.iconName = iconName)
                  : cls !== config.replacementClass &&
                    cls !== famProps[FAMILY_CLASSIC] &&
                    cls !== famProps[FAMILY_SHARP] &&
                    acc.rest.push(cls),
            !skipLookups && acc.prefix && acc.iconName)
          ) {
            var shim = 'fa' === givenPrefix ? byOldName(acc.iconName) : {},
              aliasIconName = byAlias(acc.prefix, acc.iconName)
            shim.prefix && (givenPrefix = null),
              (acc.iconName = shim.iconName || aliasIconName || acc.iconName),
              (acc.prefix = shim.prefix || acc.prefix),
              'far' !== acc.prefix ||
                styles.far ||
                !styles.fas ||
                config.autoFetchSvg ||
                (acc.prefix = 'fas')
          }
          return acc
        }, emptyCanonicalIcon())
        return (
          (values.includes('fa-brands') || values.includes('fab')) &&
            (canonical.prefix = 'fab'),
          (values.includes('fa-duotone') || values.includes('fad')) &&
            (canonical.prefix = 'fad'),
          canonical.prefix ||
            family !== FAMILY_SHARP ||
            (!styles.fass && !config.autoFetchSvg) ||
            ((canonical.prefix = 'fass'),
            (canonical.iconName =
              byAlias(canonical.prefix, canonical.iconName) ||
              canonical.iconName)),
          ('fa' !== canonical.prefix && 'fa' !== givenPrefix) ||
            (canonical.prefix = getDefaultUsablePrefix() || 'fas'),
          canonical
        )
      }
      var Library = (function () {
          function Library() {
            !(function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function')
            })(this, Library),
              (this.definitions = {})
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Object.defineProperty(Constructor, 'prototype', {
                  writable: !1,
                }),
                Constructor
              )
            })(Library, [
              {
                key: 'add',
                value: function add() {
                  for (
                    var _this = this,
                      _len = arguments.length,
                      definitions = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  )
                    definitions[_key] = arguments[_key]
                  var additions = definitions.reduce(this._pullDefinitions, {})
                  Object.keys(additions).forEach(function (key) {
                    ;(_this.definitions[key] = _objectSpread2(
                      _objectSpread2({}, _this.definitions[key] || {}),
                      additions[key]
                    )),
                      defineIcons(key, additions[key])
                    var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key]
                    longPrefix && defineIcons(longPrefix, additions[key]),
                      build()
                  })
                },
              },
              {
                key: 'reset',
                value: function reset() {
                  this.definitions = {}
                },
              },
              {
                key: '_pullDefinitions',
                value: function _pullDefinitions(additions, definition) {
                  var normalized =
                    definition.prefix && definition.iconName && definition.icon
                      ? { 0: definition }
                      : definition
                  return (
                    Object.keys(normalized).map(function (key) {
                      var _normalized$key = normalized[key],
                        prefix = _normalized$key.prefix,
                        iconName = _normalized$key.iconName,
                        icon = _normalized$key.icon,
                        aliases = icon[2]
                      additions[prefix] || (additions[prefix] = {}),
                        aliases.length > 0 &&
                          aliases.forEach(function (alias) {
                            'string' == typeof alias &&
                              (additions[prefix][alias] = icon)
                          }),
                        (additions[prefix][iconName] = icon)
                    }),
                    additions
                  )
                },
              },
            ]),
            Library
          )
        })(),
        _plugins = [],
        _hooks = {},
        providers = {},
        defaultProviderKeys = Object.keys(providers)
      function chainHooks(hook, accumulator) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
          _key < _len;
          _key++
        )
          args[_key - 2] = arguments[_key]
        return (
          (_hooks[hook] || []).forEach(function (hookFn) {
            accumulator = hookFn.apply(null, [accumulator].concat(args))
          }),
          accumulator
        )
      }
      function callHooks(hook) {
        for (
          var _len2 = arguments.length,
            args = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        )
          args[_key2 - 1] = arguments[_key2]
        ;(_hooks[hook] || []).forEach(function (hookFn) {
          hookFn.apply(null, args)
        })
      }
      function callProvided() {
        var hook = arguments[0],
          args = Array.prototype.slice.call(arguments, 1)
        return providers[hook] ? providers[hook].apply(null, args) : void 0
      }
      function findIconDefinition(iconLookup) {
        'fa' === iconLookup.prefix && (iconLookup.prefix = 'fas')
        var iconName = iconLookup.iconName,
          prefix = iconLookup.prefix || getDefaultUsablePrefix()
        if (iconName)
          return (
            (iconName = byAlias(prefix, iconName) || iconName),
            iconFromMapping(library.definitions, prefix, iconName) ||
              iconFromMapping(namespace.styles, prefix, iconName)
          )
      }
      var library = new Library(),
        dom = {
          i2svg: function i2svg() {
            var params =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            return IS_DOM
              ? (callHooks('beforeI2svg', params),
                callProvided('pseudoElements2svg', params),
                callProvided('i2svg', params))
              : Promise.reject('Operation requires a DOM of some kind.')
          },
          watch: function watch() {
            var params =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              autoReplaceSvgRoot = params.autoReplaceSvgRoot
            !1 === config.autoReplaceSvg && (config.autoReplaceSvg = !0),
              (config.observeMutations = !0),
              (function domready(fn) {
                IS_DOM && (loaded ? setTimeout(fn, 0) : functions.push(fn))
              })(function () {
                autoReplace({ autoReplaceSvgRoot }), callHooks('watch', params)
              })
          },
        },
        api = {
          noAuto: function noAuto() {
            ;(config.autoReplaceSvg = !1),
              (config.observeMutations = !1),
              callHooks('noAuto')
          },
          config,
          dom,
          parse: {
            icon: function icon(_icon) {
              if (null === _icon) return null
              if ('object' === _typeof(_icon) && _icon.prefix && _icon.iconName)
                return {
                  prefix: _icon.prefix,
                  iconName:
                    byAlias(_icon.prefix, _icon.iconName) || _icon.iconName,
                }
              if (Array.isArray(_icon) && 2 === _icon.length) {
                var iconName =
                    0 === _icon[1].indexOf('fa-')
                      ? _icon[1].slice(3)
                      : _icon[1],
                  prefix = getCanonicalPrefix(_icon[0])
                return {
                  prefix,
                  iconName: byAlias(prefix, iconName) || iconName,
                }
              }
              if (
                'string' == typeof _icon &&
                (_icon.indexOf(''.concat(config.cssPrefix, '-')) > -1 ||
                  _icon.match(ICON_SELECTION_SYNTAX_PATTERN))
              ) {
                var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
                  skipLookups: !0,
                })
                return {
                  prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
                  iconName:
                    byAlias(canonicalIcon.prefix, canonicalIcon.iconName) ||
                    canonicalIcon.iconName,
                }
              }
              if ('string' == typeof _icon) {
                var _prefix = getDefaultUsablePrefix()
                return {
                  prefix: _prefix,
                  iconName: byAlias(_prefix, _icon) || _icon,
                }
              }
            },
          },
          library,
          findIconDefinition,
          toHtml,
        },
        autoReplace = function autoReplace() {
          var _params$autoReplaceSv = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).autoReplaceSvgRoot,
            autoReplaceSvgRoot =
              void 0 === _params$autoReplaceSv
                ? DOCUMENT
                : _params$autoReplaceSv
          ;(Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) &&
            IS_DOM &&
            config.autoReplaceSvg &&
            api.dom.i2svg({ node: autoReplaceSvgRoot })
        }
      function domVariants(val, abstractCreator) {
        return (
          Object.defineProperty(val, 'abstract', { get: abstractCreator }),
          Object.defineProperty(val, 'html', {
            get: function get() {
              return val.abstract.map(function (a) {
                return toHtml(a)
              })
            },
          }),
          Object.defineProperty(val, 'node', {
            get: function get() {
              if (IS_DOM) {
                var container = DOCUMENT.createElement('div')
                return (container.innerHTML = val.html), container.children
              }
            },
          }),
          val
        )
      }
      function makeInlineSvgAbstract(params) {
        var _params$icons = params.icons,
          main = _params$icons.main,
          mask = _params$icons.mask,
          prefix = params.prefix,
          iconName = params.iconName,
          transform = params.transform,
          symbol = params.symbol,
          title = params.title,
          maskId = params.maskId,
          titleId = params.titleId,
          extra = params.extra,
          _params$watchable = params.watchable,
          watchable = void 0 !== _params$watchable && _params$watchable,
          _ref = mask.found ? mask : main,
          width = _ref.width,
          height = _ref.height,
          isUploadedIcon = 'fak' === prefix,
          attrClass = [
            config.replacementClass,
            iconName ? ''.concat(config.cssPrefix, '-').concat(iconName) : '',
          ]
            .filter(function (c) {
              return -1 === extra.classes.indexOf(c)
            })
            .filter(function (c) {
              return '' !== c || !!c
            })
            .concat(extra.classes)
            .join(' '),
          content = {
            children: [],
            attributes: _objectSpread2(
              _objectSpread2({}, extra.attributes),
              {},
              {
                'data-prefix': prefix,
                'data-icon': iconName,
                class: attrClass,
                role: extra.attributes.role || 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 '.concat(width, ' ').concat(height),
              }
            ),
          },
          uploadedIconWidthStyle =
            isUploadedIcon && !~extra.classes.indexOf('fa-fw')
              ? { width: ''.concat((width / height) * 16 * 0.0625, 'em') }
              : {}
        watchable && (content.attributes[DATA_FA_I2SVG] = ''),
          title &&
            (content.children.push({
              tag: 'title',
              attributes: {
                id:
                  content.attributes['aria-labelledby'] ||
                  'title-'.concat(titleId || nextUniqueId()),
              },
              children: [title],
            }),
            delete content.attributes.title)
        var args = _objectSpread2(
            _objectSpread2({}, content),
            {},
            {
              prefix,
              iconName,
              main,
              mask,
              maskId,
              transform,
              symbol,
              styles: _objectSpread2(
                _objectSpread2({}, uploadedIconWidthStyle),
                extra.styles
              ),
            }
          ),
          _ref2 =
            mask.found && main.found
              ? callProvided('generateAbstractMask', args) || {
                  children: [],
                  attributes: {},
                }
              : callProvided('generateAbstractIcon', args) || {
                  children: [],
                  attributes: {},
                },
          children = _ref2.children,
          attributes = _ref2.attributes
        return (
          (args.children = children),
          (args.attributes = attributes),
          symbol
            ? (function asSymbol(_ref) {
                var prefix = _ref.prefix,
                  iconName = _ref.iconName,
                  children = _ref.children,
                  attributes = _ref.attributes,
                  symbol = _ref.symbol,
                  id =
                    !0 === symbol
                      ? ''
                          .concat(prefix, '-')
                          .concat(config.cssPrefix, '-')
                          .concat(iconName)
                      : symbol
                return [
                  {
                    tag: 'svg',
                    attributes: { style: 'display: none;' },
                    children: [
                      {
                        tag: 'symbol',
                        attributes: _objectSpread2(
                          _objectSpread2({}, attributes),
                          {},
                          { id }
                        ),
                        children,
                      },
                    ],
                  },
                ]
              })(args)
            : (function asIcon(_ref) {
                var children = _ref.children,
                  main = _ref.main,
                  mask = _ref.mask,
                  attributes = _ref.attributes,
                  styles = _ref.styles,
                  transform = _ref.transform
                if (
                  transformIsMeaningful(transform) &&
                  main.found &&
                  !mask.found
                ) {
                  var offset = { x: main.width / main.height / 2, y: 0.5 }
                  attributes.style = joinStyles(
                    _objectSpread2(
                      _objectSpread2({}, styles),
                      {},
                      {
                        'transform-origin': ''
                          .concat(offset.x + transform.x / 16, 'em ')
                          .concat(offset.y + transform.y / 16, 'em'),
                      }
                    )
                  )
                }
                return [{ tag: 'svg', attributes, children }]
              })(args)
        )
      }
      function makeLayersTextAbstract(params) {
        var content = params.content,
          width = params.width,
          height = params.height,
          transform = params.transform,
          title = params.title,
          extra = params.extra,
          _params$watchable2 = params.watchable,
          watchable = void 0 !== _params$watchable2 && _params$watchable2,
          attributes = _objectSpread2(
            _objectSpread2(
              _objectSpread2({}, extra.attributes),
              title ? { title } : {}
            ),
            {},
            { class: extra.classes.join(' ') }
          )
        watchable && (attributes[DATA_FA_I2SVG] = '')
        var styles = _objectSpread2({}, extra.styles)
        transformIsMeaningful(transform) &&
          ((styles.transform = (function transformForCss(_ref2) {
            var transform = _ref2.transform,
              _ref2$width = _ref2.width,
              width = void 0 === _ref2$width ? UNITS_IN_GRID : _ref2$width,
              _ref2$height = _ref2.height,
              height = void 0 === _ref2$height ? UNITS_IN_GRID : _ref2$height,
              _ref2$startCentered = _ref2.startCentered,
              startCentered =
                void 0 !== _ref2$startCentered && _ref2$startCentered,
              val = ''
            return (
              (val +=
                startCentered && IS_IE
                  ? 'translate('
                      .concat(transform.x / d - width / 2, 'em, ')
                      .concat(transform.y / d - height / 2, 'em) ')
                  : startCentered
                    ? 'translate(calc(-50% + '
                        .concat(transform.x / d, 'em), calc(-50% + ')
                        .concat(transform.y / d, 'em)) ')
                    : 'translate('
                        .concat(transform.x / d, 'em, ')
                        .concat(transform.y / d, 'em) ')),
              (val += 'scale('
                .concat((transform.size / d) * (transform.flipX ? -1 : 1), ', ')
                .concat(
                  (transform.size / d) * (transform.flipY ? -1 : 1),
                  ') '
                )),
              val + 'rotate('.concat(transform.rotate, 'deg) ')
            )
          })({ transform, startCentered: !0, width, height })),
          (styles['-webkit-transform'] = styles.transform))
        var styleString = joinStyles(styles)
        styleString.length > 0 && (attributes.style = styleString)
        var val = []
        return (
          val.push({ tag: 'span', attributes, children: [content] }),
          title &&
            val.push({
              tag: 'span',
              attributes: { class: 'sr-only' },
              children: [title],
            }),
          val
        )
      }
      var styles$1 = namespace.styles
      function asFoundIcon(icon) {
        var width = icon[0],
          height = icon[1],
          vectorData = _slicedToArray(icon.slice(4), 1)[0]
        return {
          found: !0,
          width,
          height,
          icon: Array.isArray(vectorData)
            ? {
                tag: 'g',
                attributes: {
                  class: ''
                    .concat(config.cssPrefix, '-')
                    .concat(DUOTONE_CLASSES.GROUP),
                },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''
                        .concat(config.cssPrefix, '-')
                        .concat(DUOTONE_CLASSES.SECONDARY),
                      fill: 'currentColor',
                      d: vectorData[0],
                    },
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''
                        .concat(config.cssPrefix, '-')
                        .concat(DUOTONE_CLASSES.PRIMARY),
                      fill: 'currentColor',
                      d: vectorData[1],
                    },
                  },
                ],
              }
            : {
                tag: 'path',
                attributes: { fill: 'currentColor', d: vectorData },
              },
        }
      }
      var missingIconResolutionMixin = { found: !1, width: 512, height: 512 }
      function findIcon(iconName, prefix) {
        var givenPrefix = prefix
        return (
          'fa' === prefix &&
            null !== config.styleDefault &&
            (prefix = getDefaultUsablePrefix()),
          new Promise(function (resolve, reject) {
            callProvided('missingIconAbstract')
            if ('fa' === givenPrefix) {
              var shim = byOldName(iconName) || {}
              ;(iconName = shim.iconName || iconName),
                (prefix = shim.prefix || prefix)
            }
            if (
              iconName &&
              prefix &&
              styles$1[prefix] &&
              styles$1[prefix][iconName]
            )
              return resolve(asFoundIcon(styles$1[prefix][iconName]))
            !(function maybeNotifyMissing(iconName, prefix) {
              PRODUCTION ||
                config.showMissingIcons ||
                !iconName ||
                console.error(
                  'Icon with name "'
                    .concat(iconName, '" and prefix "')
                    .concat(prefix, '" is missing.')
                )
            })(iconName, prefix),
              resolve(
                _objectSpread2(
                  _objectSpread2({}, missingIconResolutionMixin),
                  {},
                  {
                    icon:
                      (config.showMissingIcons &&
                        iconName &&
                        callProvided('missingIconAbstract')) ||
                      {},
                  }
                )
              )
          })
        )
      }
      var noop$1 = function noop() {},
        p =
          config.measurePerformance &&
          PERFORMANCE &&
          PERFORMANCE.mark &&
          PERFORMANCE.measure
            ? PERFORMANCE
            : { mark: noop$1, measure: noop$1 },
        end = function end(name) {
          p.mark(''.concat('FA "6.5.1"', ' ').concat(name, ' ends')),
            p.measure(
              ''.concat('FA "6.5.1"', ' ').concat(name),
              ''.concat('FA "6.5.1"', ' ').concat(name, ' begins'),
              ''.concat('FA "6.5.1"', ' ').concat(name, ' ends')
            )
        },
        perf = {
          begin: function begin(name) {
            return (
              p.mark(''.concat('FA "6.5.1"', ' ').concat(name, ' begins')),
              function () {
                return end(name)
              }
            )
          },
          end,
        },
        noop$2 = function noop() {}
      function isWatched(node) {
        return (
          'string' ==
          typeof (node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null)
        )
      }
      function createElementNS(tag) {
        return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag)
      }
      function createElement(tag) {
        return DOCUMENT.createElement(tag)
      }
      function convertSVG(abstractObj) {
        var _params$ceFn = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).ceFn,
          ceFn =
            void 0 === _params$ceFn
              ? 'svg' === abstractObj.tag
                ? createElementNS
                : createElement
              : _params$ceFn
        if ('string' == typeof abstractObj)
          return DOCUMENT.createTextNode(abstractObj)
        var tag = ceFn(abstractObj.tag)
        return (
          Object.keys(abstractObj.attributes || []).forEach(function (key) {
            tag.setAttribute(key, abstractObj.attributes[key])
          }),
          (abstractObj.children || []).forEach(function (child) {
            tag.appendChild(convertSVG(child, { ceFn }))
          }),
          tag
        )
      }
      var mutators = {
        replace: function replace(mutation) {
          var node = mutation[0]
          if (node.parentNode)
            if (
              (mutation[1].forEach(function (_abstract) {
                node.parentNode.insertBefore(convertSVG(_abstract), node)
              }),
              null === node.getAttribute(DATA_FA_I2SVG) &&
                config.keepOriginalSource)
            ) {
              var comment = DOCUMENT.createComment(
                (function nodeAsComment(node) {
                  var comment = ' '.concat(node.outerHTML, ' ')
                  return ''.concat(comment, 'Font Awesome fontawesome.com ')
                })(node)
              )
              node.parentNode.replaceChild(comment, node)
            } else node.remove()
        },
        nest: function nest(mutation) {
          var node = mutation[0],
            _abstract2 = mutation[1]
          if (~classArray(node).indexOf(config.replacementClass))
            return mutators.replace(mutation)
          var forSvg = new RegExp(''.concat(config.cssPrefix, '-.*'))
          if (
            (delete _abstract2[0].attributes.id, _abstract2[0].attributes.class)
          ) {
            var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(
              function (acc, cls) {
                return (
                  cls === config.replacementClass || cls.match(forSvg)
                    ? acc.toSvg.push(cls)
                    : acc.toNode.push(cls),
                  acc
                )
              },
              { toNode: [], toSvg: [] }
            )
            ;(_abstract2[0].attributes.class = splitClasses.toSvg.join(' ')),
              0 === splitClasses.toNode.length
                ? node.removeAttribute('class')
                : node.setAttribute('class', splitClasses.toNode.join(' '))
          }
          var newInnerHTML = _abstract2
            .map(function (a) {
              return toHtml(a)
            })
            .join('\n')
          node.setAttribute(DATA_FA_I2SVG, ''), (node.innerHTML = newInnerHTML)
        },
      }
      function performOperationSync(op) {
        op()
      }
      function perform(mutations, callback) {
        var callbackFunction = 'function' == typeof callback ? callback : noop$2
        if (0 === mutations.length) callbackFunction()
        else {
          var frame = performOperationSync
          config.mutateApproach === MUTATION_APPROACH_ASYNC &&
            (frame = WINDOW.requestAnimationFrame || performOperationSync),
            frame(function () {
              var mutator = (function getMutator() {
                  return !0 === config.autoReplaceSvg
                    ? mutators.replace
                    : mutators[config.autoReplaceSvg] || mutators.replace
                })(),
                mark = perf.begin('mutate')
              mutations.map(mutator), mark(), callbackFunction()
            })
        }
      }
      var disabled = !1
      function disableObservation() {
        disabled = !0
      }
      function enableObservation() {
        disabled = !1
      }
      var mo = null
      function observe(options) {
        if (MUTATION_OBSERVER && config.observeMutations) {
          var _options$treeCallback = options.treeCallback,
            treeCallback =
              void 0 === _options$treeCallback ? noop$2 : _options$treeCallback,
            _options$nodeCallback = options.nodeCallback,
            nodeCallback =
              void 0 === _options$nodeCallback ? noop$2 : _options$nodeCallback,
            _options$pseudoElemen = options.pseudoElementsCallback,
            pseudoElementsCallback =
              void 0 === _options$pseudoElemen ? noop$2 : _options$pseudoElemen,
            _options$observeMutat = options.observeMutationsRoot,
            observeMutationsRoot =
              void 0 === _options$observeMutat
                ? DOCUMENT
                : _options$observeMutat
          ;(mo = new MUTATION_OBSERVER(function (objects) {
            if (!disabled) {
              var defaultPrefix = getDefaultUsablePrefix()
              toArray(objects).forEach(function (mutationRecord) {
                if (
                  ('childList' === mutationRecord.type &&
                    mutationRecord.addedNodes.length > 0 &&
                    !isWatched(mutationRecord.addedNodes[0]) &&
                    (config.searchPseudoElements &&
                      pseudoElementsCallback(mutationRecord.target),
                    treeCallback(mutationRecord.target)),
                  'attributes' === mutationRecord.type &&
                    mutationRecord.target.parentNode &&
                    config.searchPseudoElements &&
                    pseudoElementsCallback(mutationRecord.target.parentNode),
                  'attributes' === mutationRecord.type &&
                    isWatched(mutationRecord.target) &&
                    ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(
                      mutationRecord.attributeName
                    ))
                )
                  if (
                    'class' === mutationRecord.attributeName &&
                    (function hasPrefixAndIcon(node) {
                      var prefix = node.getAttribute
                          ? node.getAttribute(DATA_PREFIX)
                          : null,
                        icon = node.getAttribute
                          ? node.getAttribute(DATA_ICON)
                          : null
                      return prefix && icon
                    })(mutationRecord.target)
                  ) {
                    var _getCanonicalIcon = getCanonicalIcon(
                        classArray(mutationRecord.target)
                      ),
                      prefix = _getCanonicalIcon.prefix,
                      iconName = _getCanonicalIcon.iconName
                    mutationRecord.target.setAttribute(
                      DATA_PREFIX,
                      prefix || defaultPrefix
                    ),
                      iconName &&
                        mutationRecord.target.setAttribute(DATA_ICON, iconName)
                  } else
                    (function hasBeenReplaced(node) {
                      return (
                        node &&
                        node.classList &&
                        node.classList.contains &&
                        node.classList.contains(config.replacementClass)
                      )
                    })(mutationRecord.target) &&
                      nodeCallback(mutationRecord.target)
              })
            }
          })),
            IS_DOM &&
              mo.observe(observeMutationsRoot, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              })
        }
      }
      function classParser(node) {
        var existingPrefix = node.getAttribute('data-prefix'),
          existingIconName = node.getAttribute('data-icon'),
          innerText = void 0 !== node.innerText ? node.innerText.trim() : '',
          val = getCanonicalIcon(classArray(node))
        return (
          val.prefix || (val.prefix = getDefaultUsablePrefix()),
          existingPrefix &&
            existingIconName &&
            ((val.prefix = existingPrefix), (val.iconName = existingIconName)),
          (val.iconName && val.prefix) ||
            (val.prefix &&
              innerText.length > 0 &&
              (val.iconName =
                (function byLigature(prefix, ligature) {
                  return (_byLigature[prefix] || {})[ligature]
                })(val.prefix, node.innerText) ||
                byUnicode(val.prefix, toHex(node.innerText))),
            !val.iconName &&
              config.autoFetchSvg &&
              node.firstChild &&
              node.firstChild.nodeType === Node.TEXT_NODE &&
              (val.iconName = node.firstChild.data)),
          val
        )
      }
      function parseMeta(node) {
        var parser =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          _classParser = classParser(node),
          iconName = _classParser.iconName,
          prefix = _classParser.prefix,
          extraClasses = _classParser.rest,
          extraAttributes = (function attributesParser(node) {
            var extraAttributes = toArray(node.attributes).reduce(function (
                acc,
                attr
              ) {
                return (
                  'class' !== acc.name &&
                    'style' !== acc.name &&
                    (acc[attr.name] = attr.value),
                  acc
                )
              }, {}),
              title = node.getAttribute('title'),
              titleId = node.getAttribute('data-fa-title-id')
            return (
              config.autoA11y &&
                (title
                  ? (extraAttributes['aria-labelledby'] = ''
                      .concat(config.replacementClass, '-title-')
                      .concat(titleId || nextUniqueId()))
                  : ((extraAttributes['aria-hidden'] = 'true'),
                    (extraAttributes.focusable = 'false'))),
              extraAttributes
            )
          })(node),
          pluginMeta = chainHooks('parseNodeAttributes', {}, node),
          extraStyles = parser.styleParser
            ? (function styleParser(node) {
                var style = node.getAttribute('style'),
                  val = []
                return (
                  style &&
                    (val = style.split(';').reduce(function (acc, style) {
                      var styles = style.split(':'),
                        prop = styles[0],
                        value = styles.slice(1)
                      return (
                        prop &&
                          value.length > 0 &&
                          (acc[prop] = value.join(':').trim()),
                        acc
                      )
                    }, {})),
                  val
                )
              })(node)
            : []
        return _objectSpread2(
          {
            iconName,
            title: node.getAttribute('title'),
            titleId: node.getAttribute('data-fa-title-id'),
            prefix,
            transform: meaninglessTransform,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: {
              classes: extraClasses,
              styles: extraStyles,
              attributes: extraAttributes,
            },
          },
          pluginMeta
        )
      }
      var styles$2 = namespace.styles
      function generateMutation(node) {
        var nodeMeta =
          'nest' === config.autoReplaceSvg
            ? parseMeta(node, { styleParser: !1 })
            : parseMeta(node)
        return ~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)
          ? callProvided('generateLayersText', node, nodeMeta)
          : callProvided('generateSvgReplacementMutation', node, nodeMeta)
      }
      var knownPrefixes = new Set()
      function onTree(root) {
        var callback =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        if (!IS_DOM) return Promise.resolve()
        var htmlClassList = DOCUMENT.documentElement.classList,
          hclAdd = function hclAdd(suffix) {
            return htmlClassList.add(
              ''.concat('fontawesome-i2svg', '-').concat(suffix)
            )
          },
          hclRemove = function hclRemove(suffix) {
            return htmlClassList.remove(
              ''.concat('fontawesome-i2svg', '-').concat(suffix)
            )
          },
          prefixes = config.autoFetchSvg
            ? knownPrefixes
            : FAMILIES.map(function (f) {
                return 'fa-'.concat(f)
              }).concat(Object.keys(styles$2))
        prefixes.includes('fa') || prefixes.push('fa')
        var prefixesDomQuery = [
          '.'
            .concat(LAYERS_TEXT_CLASSNAME, ':not([')
            .concat(DATA_FA_I2SVG, '])'),
        ]
          .concat(
            prefixes.map(function (p) {
              return '.'.concat(p, ':not([').concat(DATA_FA_I2SVG, '])')
            })
          )
          .join(', ')
        if (0 === prefixesDomQuery.length) return Promise.resolve()
        var candidates = []
        try {
          candidates = toArray(root.querySelectorAll(prefixesDomQuery))
        } catch (e) {}
        if (!(candidates.length > 0)) return Promise.resolve()
        hclAdd('pending'), hclRemove('complete')
        var mark = perf.begin('onTree'),
          mutations = candidates.reduce(function (acc, node) {
            try {
              var mutation = generateMutation(node)
              mutation && acc.push(mutation)
            } catch (e) {
              PRODUCTION || ('MissingIcon' === e.name && console.error(e))
            }
            return acc
          }, [])
        return new Promise(function (resolve, reject) {
          Promise.all(mutations)
            .then(function (resolvedMutations) {
              perform(resolvedMutations, function () {
                hclAdd('active'),
                  hclAdd('complete'),
                  hclRemove('pending'),
                  'function' == typeof callback && callback(),
                  mark(),
                  resolve()
              })
            })
            .catch(function (e) {
              mark(), reject(e)
            })
        })
      }
      function onNode(node) {
        var callback =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        generateMutation(node).then(function (mutation) {
          mutation && perform([mutation], callback)
        })
      }
      FAMILIES.map(function (family) {
        knownPrefixes.add('fa-'.concat(family))
      }),
        Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(
          knownPrefixes.add.bind(knownPrefixes)
        ),
        Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(
          knownPrefixes.add.bind(knownPrefixes)
        ),
        (knownPrefixes = _toConsumableArray(knownPrefixes))
      var render = function render(iconDefinition) {
          var params =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            _params$transform = params.transform,
            transform =
              void 0 === _params$transform
                ? meaninglessTransform
                : _params$transform,
            _params$symbol = params.symbol,
            symbol = void 0 !== _params$symbol && _params$symbol,
            _params$mask = params.mask,
            mask = void 0 === _params$mask ? null : _params$mask,
            _params$maskId = params.maskId,
            maskId = void 0 === _params$maskId ? null : _params$maskId,
            _params$title = params.title,
            title = void 0 === _params$title ? null : _params$title,
            _params$titleId = params.titleId,
            titleId = void 0 === _params$titleId ? null : _params$titleId,
            _params$classes = params.classes,
            classes = void 0 === _params$classes ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes =
              void 0 === _params$attributes ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = void 0 === _params$styles ? {} : _params$styles
          if (iconDefinition) {
            var prefix = iconDefinition.prefix,
              iconName = iconDefinition.iconName,
              icon = iconDefinition.icon
            return domVariants(
              _objectSpread2({ type: 'icon' }, iconDefinition),
              function () {
                return (
                  callHooks('beforeDOMElementCreation', {
                    iconDefinition,
                    params,
                  }),
                  config.autoA11y &&
                    (title
                      ? (attributes['aria-labelledby'] = ''
                          .concat(config.replacementClass, '-title-')
                          .concat(titleId || nextUniqueId()))
                      : ((attributes['aria-hidden'] = 'true'),
                        (attributes.focusable = 'false'))),
                  makeInlineSvgAbstract({
                    icons: {
                      main: asFoundIcon(icon),
                      mask: mask
                        ? asFoundIcon(mask.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix,
                    iconName,
                    transform: _objectSpread2(
                      _objectSpread2({}, meaninglessTransform),
                      transform
                    ),
                    symbol,
                    title,
                    maskId,
                    titleId,
                    extra: { attributes, styles, classes },
                  })
                )
              }
            )
          }
        },
        ReplaceElements = {
          mixout: function mixout() {
            return {
              icon:
                ((next = render),
                function (maybeIconDefinition) {
                  var params =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    iconDefinition = (maybeIconDefinition || {}).icon
                      ? maybeIconDefinition
                      : findIconDefinition(maybeIconDefinition || {}),
                    mask = params.mask
                  return (
                    mask &&
                      (mask = (mask || {}).icon
                        ? mask
                        : findIconDefinition(mask || {})),
                    next(
                      iconDefinition,
                      _objectSpread2(_objectSpread2({}, params), {}, { mask })
                    )
                  )
                }),
            }
            var next
          },
          hooks: function hooks() {
            return {
              mutationObserverCallbacks: function mutationObserverCallbacks(
                accumulator
              ) {
                return (
                  (accumulator.treeCallback = onTree),
                  (accumulator.nodeCallback = onNode),
                  accumulator
                )
              },
            }
          },
          provides: function provides(providers$$1) {
            ;(providers$$1.i2svg = function (params) {
              var _params$node = params.node,
                node = void 0 === _params$node ? DOCUMENT : _params$node,
                _params$callback = params.callback
              return onTree(
                node,
                void 0 === _params$callback ? function () {} : _params$callback
              )
            }),
              (providers$$1.generateSvgReplacementMutation = function (
                node,
                nodeMeta
              ) {
                var iconName = nodeMeta.iconName,
                  title = nodeMeta.title,
                  titleId = nodeMeta.titleId,
                  prefix = nodeMeta.prefix,
                  transform = nodeMeta.transform,
                  symbol = nodeMeta.symbol,
                  mask = nodeMeta.mask,
                  maskId = nodeMeta.maskId,
                  extra = nodeMeta.extra
                return new Promise(function (resolve, reject) {
                  Promise.all([
                    findIcon(iconName, prefix),
                    mask.iconName
                      ? findIcon(mask.iconName, mask.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                        main = _ref2[0],
                        mask = _ref2[1]
                      resolve([
                        node,
                        makeInlineSvgAbstract({
                          icons: { main, mask },
                          prefix,
                          iconName,
                          transform,
                          symbol,
                          maskId,
                          title,
                          titleId,
                          extra,
                          watchable: !0,
                        }),
                      ])
                    })
                    .catch(reject)
                })
              }),
              (providers$$1.generateAbstractIcon = function (_ref3) {
                var nextChild,
                  children = _ref3.children,
                  attributes = _ref3.attributes,
                  main = _ref3.main,
                  transform = _ref3.transform,
                  styleString = joinStyles(_ref3.styles)
                return (
                  styleString.length > 0 && (attributes.style = styleString),
                  transformIsMeaningful(transform) &&
                    (nextChild = callProvided(
                      'generateAbstractTransformGrouping',
                      {
                        main,
                        transform,
                        containerWidth: main.width,
                        iconWidth: main.width,
                      }
                    )),
                  children.push(nextChild || main.icon),
                  { children, attributes }
                )
              })
          },
        },
        Layers = {
          mixout: function mixout() {
            return {
              layer: function layer(assembler) {
                var params =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  _params$classes = params.classes,
                  classes = void 0 === _params$classes ? [] : _params$classes
                return domVariants({ type: 'layer' }, function () {
                  callHooks('beforeDOMElementCreation', { assembler, params })
                  var children = []
                  return (
                    assembler(function (args) {
                      Array.isArray(args)
                        ? args.map(function (a) {
                            children = children.concat(a.abstract)
                          })
                        : (children = children.concat(args.abstract))
                    }),
                    [
                      {
                        tag: 'span',
                        attributes: {
                          class: [''.concat(config.cssPrefix, '-layers')]
                            .concat(_toConsumableArray(classes))
                            .join(' '),
                        },
                        children,
                      },
                    ]
                  )
                })
              },
            }
          },
        },
        LayersCounter = {
          mixout: function mixout() {
            return {
              counter: function counter(content) {
                var params =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  _params$title = params.title,
                  title = void 0 === _params$title ? null : _params$title,
                  _params$classes = params.classes,
                  classes = void 0 === _params$classes ? [] : _params$classes,
                  _params$attributes = params.attributes,
                  attributes =
                    void 0 === _params$attributes ? {} : _params$attributes,
                  _params$styles = params.styles,
                  styles = void 0 === _params$styles ? {} : _params$styles
                return domVariants({ type: 'counter', content }, function () {
                  return (
                    callHooks('beforeDOMElementCreation', { content, params }),
                    (function makeLayersCounterAbstract(params) {
                      var content = params.content,
                        title = params.title,
                        extra = params.extra,
                        attributes = _objectSpread2(
                          _objectSpread2(
                            _objectSpread2({}, extra.attributes),
                            title ? { title } : {}
                          ),
                          {},
                          { class: extra.classes.join(' ') }
                        ),
                        styleString = joinStyles(extra.styles)
                      styleString.length > 0 && (attributes.style = styleString)
                      var val = []
                      return (
                        val.push({
                          tag: 'span',
                          attributes,
                          children: [content],
                        }),
                        title &&
                          val.push({
                            tag: 'span',
                            attributes: { class: 'sr-only' },
                            children: [title],
                          }),
                        val
                      )
                    })({
                      content: content.toString(),
                      title,
                      extra: {
                        attributes,
                        styles,
                        classes: [
                          ''.concat(config.cssPrefix, '-layers-counter'),
                        ].concat(_toConsumableArray(classes)),
                      },
                    })
                  )
                })
              },
            }
          },
        },
        LayersText = {
          mixout: function mixout() {
            return {
              text: function text(content) {
                var params =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  _params$transform = params.transform,
                  transform =
                    void 0 === _params$transform
                      ? meaninglessTransform
                      : _params$transform,
                  _params$title = params.title,
                  title = void 0 === _params$title ? null : _params$title,
                  _params$classes = params.classes,
                  classes = void 0 === _params$classes ? [] : _params$classes,
                  _params$attributes = params.attributes,
                  attributes =
                    void 0 === _params$attributes ? {} : _params$attributes,
                  _params$styles = params.styles,
                  styles = void 0 === _params$styles ? {} : _params$styles
                return domVariants({ type: 'text', content }, function () {
                  return (
                    callHooks('beforeDOMElementCreation', { content, params }),
                    makeLayersTextAbstract({
                      content,
                      transform: _objectSpread2(
                        _objectSpread2({}, meaninglessTransform),
                        transform
                      ),
                      title,
                      extra: {
                        attributes,
                        styles,
                        classes: [
                          ''.concat(config.cssPrefix, '-layers-text'),
                        ].concat(_toConsumableArray(classes)),
                      },
                    })
                  )
                })
              },
            }
          },
          provides: function provides(providers$$1) {
            providers$$1.generateLayersText = function (node, nodeMeta) {
              var title = nodeMeta.title,
                transform = nodeMeta.transform,
                extra = nodeMeta.extra,
                width = null,
                height = null
              if (IS_IE) {
                var computedFontSize = parseInt(
                    getComputedStyle(node).fontSize,
                    10
                  ),
                  boundingClientRect = node.getBoundingClientRect()
                ;(width = boundingClientRect.width / computedFontSize),
                  (height = boundingClientRect.height / computedFontSize)
              }
              return (
                config.autoA11y &&
                  !title &&
                  (extra.attributes['aria-hidden'] = 'true'),
                Promise.resolve([
                  node,
                  makeLayersTextAbstract({
                    content: node.innerHTML,
                    width,
                    height,
                    transform,
                    title,
                    extra,
                    watchable: !0,
                  }),
                ])
              )
            }
          },
        },
        CLEAN_CONTENT_PATTERN = new RegExp('"', 'ug'),
        SECONDARY_UNICODE_RANGE = [1105920, 1112319]
      function replaceForPosition(node, position) {
        var pendingAttribute = ''
          .concat(DATA_FA_PSEUDO_ELEMENT_PENDING)
          .concat(position.replace(':', '-'))
        return new Promise(function (resolve, reject) {
          if (null !== node.getAttribute(pendingAttribute)) return resolve()
          var alreadyProcessedPseudoElement = toArray(node.children).filter(
              function (c) {
                return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position
              }
            )[0],
            styles = WINDOW.getComputedStyle(node, position),
            fontFamily = styles
              .getPropertyValue('font-family')
              .match(FONT_FAMILY_PATTERN),
            fontWeight = styles.getPropertyValue('font-weight'),
            content = styles.getPropertyValue('content')
          if (alreadyProcessedPseudoElement && !fontFamily)
            return node.removeChild(alreadyProcessedPseudoElement), resolve()
          if (fontFamily && 'none' !== content && '' !== content) {
            var _content = styles.getPropertyValue('content'),
              family = ~['Sharp'].indexOf(fontFamily[2])
                ? FAMILY_SHARP
                : FAMILY_CLASSIC,
              prefix = ~[
                'Solid',
                'Regular',
                'Light',
                'Thin',
                'Duotone',
                'Brands',
                'Kit',
              ].indexOf(fontFamily[2])
                ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()]
                : FONT_WEIGHT_TO_PREFIX[family][fontWeight],
              _hexValueFromContent = (function hexValueFromContent(content) {
                var cleaned = content.replace(CLEAN_CONTENT_PATTERN, ''),
                  codePoint = (function codePointAt(string, index) {
                    var second,
                      size = string.length,
                      first = string.charCodeAt(index)
                    return first >= 55296 &&
                      first <= 56319 &&
                      size > index + 1 &&
                      (second = string.charCodeAt(index + 1)) >= 56320 &&
                      second <= 57343
                      ? 1024 * (first - 55296) + second - 56320 + 65536
                      : first
                  })(cleaned, 0),
                  isPrependTen =
                    codePoint >= SECONDARY_UNICODE_RANGE[0] &&
                    codePoint <= SECONDARY_UNICODE_RANGE[1],
                  isDoubled = 2 === cleaned.length && cleaned[0] === cleaned[1]
                return {
                  value: toHex(isDoubled ? cleaned[0] : cleaned),
                  isSecondary: isPrependTen || isDoubled,
                }
              })(_content),
              hexValue = _hexValueFromContent.value,
              isSecondary = _hexValueFromContent.isSecondary,
              isV4 = fontFamily[0].startsWith('FontAwesome'),
              iconName = byUnicode(prefix, hexValue),
              iconIdentifier = iconName
            if (isV4) {
              var iconName4 = (function byOldUnicode(unicode) {
                var oldUnicode = _byOldUnicode[unicode],
                  newUnicode = byUnicode('fas', unicode)
                return (
                  oldUnicode ||
                  (newUnicode
                    ? { prefix: 'fas', iconName: newUnicode }
                    : null) || { prefix: null, iconName: null }
                )
              })(hexValue)
              iconName4.iconName &&
                iconName4.prefix &&
                ((iconName = iconName4.iconName), (prefix = iconName4.prefix))
            }
            if (
              !iconName ||
              isSecondary ||
              (alreadyProcessedPseudoElement &&
                alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) ===
                  prefix &&
                alreadyProcessedPseudoElement.getAttribute(DATA_ICON) ===
                  iconIdentifier)
            )
              resolve()
            else {
              node.setAttribute(pendingAttribute, iconIdentifier),
                alreadyProcessedPseudoElement &&
                  node.removeChild(alreadyProcessedPseudoElement)
              var meta = (function blankMeta() {
                  return {
                    iconName: null,
                    title: null,
                    titleId: null,
                    prefix: null,
                    transform: meaninglessTransform,
                    symbol: !1,
                    mask: { iconName: null, prefix: null, rest: [] },
                    maskId: null,
                    extra: { classes: [], styles: {}, attributes: {} },
                  }
                })(),
                extra = meta.extra
              ;(extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position),
                findIcon(iconName, prefix)
                  .then(function (main) {
                    var _abstract = makeInlineSvgAbstract(
                        _objectSpread2(
                          _objectSpread2({}, meta),
                          {},
                          {
                            icons: { main, mask: emptyCanonicalIcon() },
                            prefix,
                            iconName: iconIdentifier,
                            extra,
                            watchable: !0,
                          }
                        )
                      ),
                      element = DOCUMENT.createElementNS(
                        'http://www.w3.org/2000/svg',
                        'svg'
                      )
                    '::before' === position
                      ? node.insertBefore(element, node.firstChild)
                      : node.appendChild(element),
                      (element.outerHTML = _abstract
                        .map(function (a) {
                          return toHtml(a)
                        })
                        .join('\n')),
                      node.removeAttribute(pendingAttribute),
                      resolve()
                  })
                  .catch(reject)
            }
          } else resolve()
        })
      }
      function replace(node) {
        return Promise.all([
          replaceForPosition(node, '::before'),
          replaceForPosition(node, '::after'),
        ])
      }
      function processable(node) {
        return !(
          node.parentNode === document.head ||
          ~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(
            node.tagName.toUpperCase()
          ) ||
          node.getAttribute(DATA_FA_PSEUDO_ELEMENT) ||
          (node.parentNode && 'svg' === node.parentNode.tagName)
        )
      }
      function searchPseudoElements(root) {
        if (IS_DOM)
          return new Promise(function (resolve, reject) {
            var operations = toArray(root.querySelectorAll('*'))
                .filter(processable)
                .map(replace),
              end = perf.begin('searchPseudoElements')
            disableObservation(),
              Promise.all(operations)
                .then(function () {
                  end(), enableObservation(), resolve()
                })
                .catch(function () {
                  end(), enableObservation(), reject()
                })
          })
      }
      var _unwatched = !1,
        parseTransformString = function parseTransformString(transformString) {
          return transformString
            .toLowerCase()
            .split(' ')
            .reduce(
              function (acc, n) {
                var parts = n.toLowerCase().split('-'),
                  first = parts[0],
                  rest = parts.slice(1).join('-')
                if (first && 'h' === rest) return (acc.flipX = !0), acc
                if (first && 'v' === rest) return (acc.flipY = !0), acc
                if (((rest = parseFloat(rest)), isNaN(rest))) return acc
                switch (first) {
                  case 'grow':
                    acc.size = acc.size + rest
                    break
                  case 'shrink':
                    acc.size = acc.size - rest
                    break
                  case 'left':
                    acc.x = acc.x - rest
                    break
                  case 'right':
                    acc.x = acc.x + rest
                    break
                  case 'up':
                    acc.y = acc.y - rest
                    break
                  case 'down':
                    acc.y = acc.y + rest
                    break
                  case 'rotate':
                    acc.rotate = acc.rotate + rest
                }
                return acc
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
            )
        },
        PowerTransforms = {
          mixout: function mixout() {
            return {
              parse: {
                transform: function transform(transformString) {
                  return parseTransformString(transformString)
                },
              },
            }
          },
          hooks: function hooks() {
            return {
              parseNodeAttributes: function parseNodeAttributes(
                accumulator,
                node
              ) {
                var transformString = node.getAttribute('data-fa-transform')
                return (
                  transformString &&
                    (accumulator.transform =
                      parseTransformString(transformString)),
                  accumulator
                )
              },
            }
          },
          provides: function provides(providers) {
            providers.generateAbstractTransformGrouping = function (_ref) {
              var main = _ref.main,
                transform = _ref.transform,
                containerWidth = _ref.containerWidth,
                iconWidth = _ref.iconWidth,
                outer = {
                  transform: 'translate('.concat(containerWidth / 2, ' 256)'),
                },
                innerTranslate = 'translate('
                  .concat(32 * transform.x, ', ')
                  .concat(32 * transform.y, ') '),
                innerScale = 'scale('
                  .concat(
                    (transform.size / 16) * (transform.flipX ? -1 : 1),
                    ', '
                  )
                  .concat(
                    (transform.size / 16) * (transform.flipY ? -1 : 1),
                    ') '
                  ),
                innerRotate = 'rotate('.concat(transform.rotate, ' 0 0)'),
                operations = {
                  outer,
                  inner: {
                    transform: ''
                      .concat(innerTranslate, ' ')
                      .concat(innerScale, ' ')
                      .concat(innerRotate),
                  },
                  path: {
                    transform: 'translate('.concat(
                      (iconWidth / 2) * -1,
                      ' -256)'
                    ),
                  },
                }
              return {
                tag: 'g',
                attributes: _objectSpread2({}, operations.outer),
                children: [
                  {
                    tag: 'g',
                    attributes: _objectSpread2({}, operations.inner),
                    children: [
                      {
                        tag: main.icon.tag,
                        children: main.icon.children,
                        attributes: _objectSpread2(
                          _objectSpread2({}, main.icon.attributes),
                          operations.path
                        ),
                      },
                    ],
                  },
                ],
              }
            }
          },
        },
        ALL_SPACE = { x: 0, y: 0, width: '100%', height: '100%' }
      function fillBlack(_abstract) {
        var force =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        return (
          _abstract.attributes &&
            (_abstract.attributes.fill || force) &&
            (_abstract.attributes.fill = 'black'),
          _abstract
        )
      }
      var Masks = {
          hooks: function hooks() {
            return {
              parseNodeAttributes: function parseNodeAttributes(
                accumulator,
                node
              ) {
                var maskData = node.getAttribute('data-fa-mask'),
                  mask = maskData
                    ? getCanonicalIcon(
                        maskData.split(' ').map(function (i) {
                          return i.trim()
                        })
                      )
                    : emptyCanonicalIcon()
                return (
                  mask.prefix || (mask.prefix = getDefaultUsablePrefix()),
                  (accumulator.mask = mask),
                  (accumulator.maskId = node.getAttribute('data-fa-mask-id')),
                  accumulator
                )
              },
            }
          },
          provides: function provides(providers) {
            providers.generateAbstractMask = function (_ref) {
              var _abstract2,
                children = _ref.children,
                attributes = _ref.attributes,
                main = _ref.main,
                mask = _ref.mask,
                explicitMaskId = _ref.maskId,
                transform = _ref.transform,
                mainWidth = main.width,
                mainPath = main.icon,
                maskWidth = mask.width,
                maskPath = mask.icon,
                trans = (function transformForSvg(_ref) {
                  var transform = _ref.transform,
                    containerWidth = _ref.containerWidth,
                    iconWidth = _ref.iconWidth,
                    outer = {
                      transform: 'translate('.concat(
                        containerWidth / 2,
                        ' 256)'
                      ),
                    },
                    innerTranslate = 'translate('
                      .concat(32 * transform.x, ', ')
                      .concat(32 * transform.y, ') '),
                    innerScale = 'scale('
                      .concat(
                        (transform.size / 16) * (transform.flipX ? -1 : 1),
                        ', '
                      )
                      .concat(
                        (transform.size / 16) * (transform.flipY ? -1 : 1),
                        ') '
                      ),
                    innerRotate = 'rotate('.concat(transform.rotate, ' 0 0)')
                  return {
                    outer,
                    inner: {
                      transform: ''
                        .concat(innerTranslate, ' ')
                        .concat(innerScale, ' ')
                        .concat(innerRotate),
                    },
                    path: {
                      transform: 'translate('.concat(
                        (iconWidth / 2) * -1,
                        ' -256)'
                      ),
                    },
                  }
                })({
                  transform,
                  containerWidth: maskWidth,
                  iconWidth: mainWidth,
                }),
                maskRect = {
                  tag: 'rect',
                  attributes: _objectSpread2(
                    _objectSpread2({}, ALL_SPACE),
                    {},
                    { fill: 'white' }
                  ),
                },
                maskInnerGroupChildrenMixin = mainPath.children
                  ? { children: mainPath.children.map(fillBlack) }
                  : {},
                maskInnerGroup = {
                  tag: 'g',
                  attributes: _objectSpread2({}, trans.inner),
                  children: [
                    fillBlack(
                      _objectSpread2(
                        {
                          tag: mainPath.tag,
                          attributes: _objectSpread2(
                            _objectSpread2({}, mainPath.attributes),
                            trans.path
                          ),
                        },
                        maskInnerGroupChildrenMixin
                      )
                    ),
                  ],
                },
                maskOuterGroup = {
                  tag: 'g',
                  attributes: _objectSpread2({}, trans.outer),
                  children: [maskInnerGroup],
                },
                maskId = 'mask-'.concat(explicitMaskId || nextUniqueId()),
                clipId = 'clip-'.concat(explicitMaskId || nextUniqueId()),
                maskTag = {
                  tag: 'mask',
                  attributes: _objectSpread2(
                    _objectSpread2({}, ALL_SPACE),
                    {},
                    {
                      id: maskId,
                      maskUnits: 'userSpaceOnUse',
                      maskContentUnits: 'userSpaceOnUse',
                    }
                  ),
                  children: [maskRect, maskOuterGroup],
                },
                defs = {
                  tag: 'defs',
                  children: [
                    {
                      tag: 'clipPath',
                      attributes: { id: clipId },
                      children:
                        ((_abstract2 = maskPath),
                        'g' === _abstract2.tag
                          ? _abstract2.children
                          : [_abstract2]),
                    },
                    maskTag,
                  ],
                }
              return (
                children.push(defs, {
                  tag: 'rect',
                  attributes: _objectSpread2(
                    {
                      fill: 'currentColor',
                      'clip-path': 'url(#'.concat(clipId, ')'),
                      mask: 'url(#'.concat(maskId, ')'),
                    },
                    ALL_SPACE
                  ),
                }),
                { children, attributes }
              )
            }
          },
        },
        MissingIconIndicator = {
          provides: function provides(providers) {
            var reduceMotion = !1
            WINDOW.matchMedia &&
              (reduceMotion = WINDOW.matchMedia(
                '(prefers-reduced-motion: reduce)'
              ).matches),
              (providers.missingIconAbstract = function () {
                var gChildren = [],
                  FILL = { fill: 'currentColor' },
                  ANIMATION_BASE = {
                    attributeType: 'XML',
                    repeatCount: 'indefinite',
                    dur: '2s',
                  }
                gChildren.push({
                  tag: 'path',
                  attributes: _objectSpread2(
                    _objectSpread2({}, FILL),
                    {},
                    {
                      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                    }
                  ),
                })
                var OPACITY_ANIMATE = _objectSpread2(
                    _objectSpread2({}, ANIMATION_BASE),
                    {},
                    { attributeName: 'opacity' }
                  ),
                  dot = {
                    tag: 'circle',
                    attributes: _objectSpread2(
                      _objectSpread2({}, FILL),
                      {},
                      { cx: '256', cy: '364', r: '28' }
                    ),
                    children: [],
                  }
                return (
                  reduceMotion ||
                    dot.children.push(
                      {
                        tag: 'animate',
                        attributes: _objectSpread2(
                          _objectSpread2({}, ANIMATION_BASE),
                          {},
                          { attributeName: 'r', values: '28;14;28;28;14;28;' }
                        ),
                      },
                      {
                        tag: 'animate',
                        attributes: _objectSpread2(
                          _objectSpread2({}, OPACITY_ANIMATE),
                          {},
                          { values: '1;0;1;1;0;1;' }
                        ),
                      }
                    ),
                  gChildren.push(dot),
                  gChildren.push({
                    tag: 'path',
                    attributes: _objectSpread2(
                      _objectSpread2({}, FILL),
                      {},
                      {
                        opacity: '1',
                        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                      }
                    ),
                    children: reduceMotion
                      ? []
                      : [
                          {
                            tag: 'animate',
                            attributes: _objectSpread2(
                              _objectSpread2({}, OPACITY_ANIMATE),
                              {},
                              { values: '1;0;0;0;0;1;' }
                            ),
                          },
                        ],
                  }),
                  reduceMotion ||
                    gChildren.push({
                      tag: 'path',
                      attributes: _objectSpread2(
                        _objectSpread2({}, FILL),
                        {},
                        {
                          opacity: '0',
                          d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                        }
                      ),
                      children: [
                        {
                          tag: 'animate',
                          attributes: _objectSpread2(
                            _objectSpread2({}, OPACITY_ANIMATE),
                            {},
                            { values: '0;0;1;1;0;0;' }
                          ),
                        },
                      ],
                    }),
                  {
                    tag: 'g',
                    attributes: { class: 'missing' },
                    children: gChildren,
                  }
                )
              })
          },
        }
      !(function registerPlugins(nextPlugins, _ref) {
        var obj = _ref.mixoutsTo
        return (
          (_plugins = nextPlugins),
          (_hooks = {}),
          Object.keys(providers).forEach(function (k) {
            ;-1 === defaultProviderKeys.indexOf(k) && delete providers[k]
          }),
          _plugins.forEach(function (plugin) {
            var mixout = plugin.mixout ? plugin.mixout() : {}
            if (
              (Object.keys(mixout).forEach(function (tk) {
                'function' == typeof mixout[tk] && (obj[tk] = mixout[tk]),
                  'object' === _typeof(mixout[tk]) &&
                    Object.keys(mixout[tk]).forEach(function (sk) {
                      obj[tk] || (obj[tk] = {}), (obj[tk][sk] = mixout[tk][sk])
                    })
              }),
              plugin.hooks)
            ) {
              var hooks = plugin.hooks()
              Object.keys(hooks).forEach(function (hook) {
                _hooks[hook] || (_hooks[hook] = []),
                  _hooks[hook].push(hooks[hook])
              })
            }
            plugin.provides && plugin.provides(providers)
          }),
          obj
        )
      })(
        [
          InjectCSS,
          ReplaceElements,
          Layers,
          LayersCounter,
          LayersText,
          {
            hooks: function hooks() {
              return {
                mutationObserverCallbacks: function mutationObserverCallbacks(
                  accumulator
                ) {
                  return (
                    (accumulator.pseudoElementsCallback = searchPseudoElements),
                    accumulator
                  )
                },
              }
            },
            provides: function provides(providers$$1) {
              providers$$1.pseudoElements2svg = function (params) {
                var _params$node = params.node,
                  node = void 0 === _params$node ? DOCUMENT : _params$node
                config.searchPseudoElements && searchPseudoElements(node)
              }
            },
          },
          {
            mixout: function mixout() {
              return {
                dom: {
                  unwatch: function unwatch() {
                    disableObservation(), (_unwatched = !0)
                  },
                },
              }
            },
            hooks: function hooks() {
              return {
                bootstrap: function bootstrap() {
                  observe(chainHooks('mutationObserverCallbacks', {}))
                },
                noAuto: function noAuto() {
                  !(function disconnect() {
                    mo && mo.disconnect()
                  })()
                },
                watch: function watch(params) {
                  var observeMutationsRoot = params.observeMutationsRoot
                  _unwatched
                    ? enableObservation()
                    : observe(
                        chainHooks('mutationObserverCallbacks', {
                          observeMutationsRoot,
                        })
                      )
                },
              }
            },
          },
          PowerTransforms,
          Masks,
          MissingIconIndicator,
          {
            hooks: function hooks() {
              return {
                parseNodeAttributes: function parseNodeAttributes(
                  accumulator,
                  node
                ) {
                  var symbolData = node.getAttribute('data-fa-symbol'),
                    symbol =
                      null !== symbolData && ('' === symbolData || symbolData)
                  return (accumulator.symbol = symbol), accumulator
                },
              }
            },
          },
        ],
        { mixoutsTo: api }
      )
      var parse$1 = api.parse,
        icon = api.icon,
        prop_types = __webpack_require__('./node_modules/prop-types/index.js'),
        prop_types_default = __webpack_require__.n(prop_types),
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        index_es_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
      function index_es_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function index_es_objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? index_es_ownKeys(Object(source), !0).forEach(function (key) {
                index_es_defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : index_es_ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  )
                })
        }
        return target
      }
      function index_es_typeof(obj) {
        return (
          (index_es_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj
                }),
          index_es_typeof(obj)
        )
      }
      function index_es_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      function index_es_toConsumableArray(arr) {
        return (
          (function index_es_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return index_es_arrayLikeToArray(arr)
          })(arr) ||
          (function index_es_iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter)
          })(arr) ||
          (function index_es_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o)
              return index_es_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return index_es_arrayLikeToArray(o, minLen)
          })(arr) ||
          (function index_es_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function index_es_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function camelize(string) {
        return (function _isNumerical(obj) {
          return (obj -= 0) == obj
        })(string)
          ? string
          : (string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
              return chr ? chr.toUpperCase() : ''
            }))
              .substr(0, 1)
              .toLowerCase() + string.substr(1)
      }
      var _excluded = ['style']
      var index_es_PRODUCTION = !1
      try {
        index_es_PRODUCTION = !0
      } catch (e) {}
      function normalizeIconArgs(icon) {
        return icon &&
          'object' === index_es_typeof(icon) &&
          icon.prefix &&
          icon.iconName &&
          icon.icon
          ? icon
          : parse$1.icon
            ? parse$1.icon(icon)
            : null === icon
              ? null
              : icon &&
                  'object' === index_es_typeof(icon) &&
                  icon.prefix &&
                  icon.iconName
                ? icon
                : Array.isArray(icon) && 2 === icon.length
                  ? { prefix: icon[0], iconName: icon[1] }
                  : 'string' == typeof icon
                    ? { prefix: 'fas', iconName: icon }
                    : void 0
      }
      function objectWithKey(key, value) {
        return (Array.isArray(value) && value.length > 0) ||
          (!Array.isArray(value) && value)
          ? index_es_defineProperty({}, key, value)
          : {}
      }
      var FontAwesomeIcon = react.forwardRef(function (props, ref) {
        var iconArgs = props.icon,
          maskArgs = props.mask,
          symbol = props.symbol,
          className = props.className,
          title = props.title,
          titleId = props.titleId,
          maskId = props.maskId,
          iconLookup = normalizeIconArgs(iconArgs),
          classes = objectWithKey(
            'classes',
            [].concat(
              index_es_toConsumableArray(
                (function classList(props) {
                  var _classes,
                    beat = props.beat,
                    fade = props.fade,
                    beatFade = props.beatFade,
                    bounce = props.bounce,
                    shake = props.shake,
                    flash = props.flash,
                    spin = props.spin,
                    spinPulse = props.spinPulse,
                    spinReverse = props.spinReverse,
                    pulse = props.pulse,
                    fixedWidth = props.fixedWidth,
                    inverse = props.inverse,
                    border = props.border,
                    listItem = props.listItem,
                    flip = props.flip,
                    size = props.size,
                    rotation = props.rotation,
                    pull = props.pull,
                    classes =
                      (index_es_defineProperty(
                        (_classes = {
                          'fa-beat': beat,
                          'fa-fade': fade,
                          'fa-beat-fade': beatFade,
                          'fa-bounce': bounce,
                          'fa-shake': shake,
                          'fa-flash': flash,
                          'fa-spin': spin,
                          'fa-spin-reverse': spinReverse,
                          'fa-spin-pulse': spinPulse,
                          'fa-pulse': pulse,
                          'fa-fw': fixedWidth,
                          'fa-inverse': inverse,
                          'fa-border': border,
                          'fa-li': listItem,
                          'fa-flip': !0 === flip,
                          'fa-flip-horizontal':
                            'horizontal' === flip || 'both' === flip,
                          'fa-flip-vertical':
                            'vertical' === flip || 'both' === flip,
                        }),
                        'fa-'.concat(size),
                        null != size
                      ),
                      index_es_defineProperty(
                        _classes,
                        'fa-rotate-'.concat(rotation),
                        null != rotation && 0 !== rotation
                      ),
                      index_es_defineProperty(
                        _classes,
                        'fa-pull-'.concat(pull),
                        null != pull
                      ),
                      index_es_defineProperty(
                        _classes,
                        'fa-swap-opacity',
                        props.swapOpacity
                      ),
                      _classes)
                  return Object.keys(classes)
                    .map(function (key) {
                      return classes[key] ? key : null
                    })
                    .filter(function (key) {
                      return key
                    })
                })(props)
              ),
              index_es_toConsumableArray(className.split(' '))
            )
          ),
          transform = objectWithKey(
            'transform',
            'string' == typeof props.transform
              ? parse$1.transform(props.transform)
              : props.transform
          ),
          mask = objectWithKey('mask', normalizeIconArgs(maskArgs)),
          renderedIcon = icon(
            iconLookup,
            index_es_objectSpread2(
              index_es_objectSpread2(
                index_es_objectSpread2(
                  index_es_objectSpread2({}, classes),
                  transform
                ),
                mask
              ),
              {},
              { symbol, title, titleId, maskId }
            )
          )
        if (!renderedIcon)
          return (
            (function log() {
              var _console
              !index_es_PRODUCTION &&
                index_es_console &&
                'function' == typeof index_es_console.error &&
                (_console = index_es_console).error.apply(_console, arguments)
            })('Could not find icon', iconLookup),
            null
          )
        var abstract = renderedIcon.abstract,
          extraProps = { ref }
        return (
          Object.keys(props).forEach(function (key) {
            FontAwesomeIcon.defaultProps.hasOwnProperty(key) ||
              (extraProps[key] = props[key])
          }),
          convertCurry(abstract[0], extraProps)
        )
      })
      ;(FontAwesomeIcon.displayName = 'FontAwesomeIcon'),
        (FontAwesomeIcon.propTypes = {
          beat: prop_types_default().bool,
          border: prop_types_default().bool,
          beatFade: prop_types_default().bool,
          bounce: prop_types_default().bool,
          className: prop_types_default().string,
          fade: prop_types_default().bool,
          flash: prop_types_default().bool,
          mask: prop_types_default().oneOfType([
            prop_types_default().object,
            prop_types_default().array,
            prop_types_default().string,
          ]),
          maskId: prop_types_default().string,
          fixedWidth: prop_types_default().bool,
          inverse: prop_types_default().bool,
          flip: prop_types_default().oneOf([
            !0,
            !1,
            'horizontal',
            'vertical',
            'both',
          ]),
          icon: prop_types_default().oneOfType([
            prop_types_default().object,
            prop_types_default().array,
            prop_types_default().string,
          ]),
          listItem: prop_types_default().bool,
          pull: prop_types_default().oneOf(['right', 'left']),
          pulse: prop_types_default().bool,
          rotation: prop_types_default().oneOf([0, 90, 180, 270]),
          shake: prop_types_default().bool,
          size: prop_types_default().oneOf([
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ]),
          spin: prop_types_default().bool,
          spinPulse: prop_types_default().bool,
          spinReverse: prop_types_default().bool,
          symbol: prop_types_default().oneOfType([
            prop_types_default().bool,
            prop_types_default().string,
          ]),
          title: prop_types_default().string,
          titleId: prop_types_default().string,
          transform: prop_types_default().oneOfType([
            prop_types_default().string,
            prop_types_default().object,
          ]),
          swapOpacity: prop_types_default().bool,
        }),
        (FontAwesomeIcon.defaultProps = {
          border: !1,
          className: '',
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: '',
          titleId: null,
          transform: null,
          swapOpacity: !1,
        })
      var convertCurry = function convert(createElement, element) {
        var extraProps =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if ('string' == typeof element) return element
        var children = (element.children || []).map(function (child) {
            return convert(createElement, child)
          }),
          mixins = Object.keys(element.attributes || {}).reduce(
            function (acc, key) {
              var val = element.attributes[key]
              switch (key) {
                case 'class':
                  ;(acc.attrs.className = val), delete element.attributes.class
                  break
                case 'style':
                  acc.attrs.style = (function styleToObject(style) {
                    return style
                      .split(';')
                      .map(function (s) {
                        return s.trim()
                      })
                      .filter(function (s) {
                        return s
                      })
                      .reduce(function (acc, pair) {
                        var i = pair.indexOf(':'),
                          prop = camelize(pair.slice(0, i)),
                          value = pair.slice(i + 1).trim()
                        return (
                          prop.startsWith('webkit')
                            ? (acc[
                                (function capitalize(val) {
                                  return (
                                    val.charAt(0).toUpperCase() + val.slice(1)
                                  )
                                })(prop)
                              ] = value)
                            : (acc[prop] = value),
                          acc
                        )
                      }, {})
                  })(val)
                  break
                default:
                  0 === key.indexOf('aria-') || 0 === key.indexOf('data-')
                    ? (acc.attrs[key.toLowerCase()] = val)
                    : (acc.attrs[camelize(key)] = val)
              }
              return acc
            },
            { attrs: {} }
          ),
          _extraProps$style = extraProps.style,
          existingStyle = void 0 === _extraProps$style ? {} : _extraProps$style,
          remaining = _objectWithoutProperties(extraProps, _excluded)
        return (
          (mixins.attrs.style = index_es_objectSpread2(
            index_es_objectSpread2({}, mixins.attrs.style),
            existingStyle
          )),
          createElement.apply(
            void 0,
            [
              element.tag,
              index_es_objectSpread2(
                index_es_objectSpread2({}, mixins.attrs),
                remaining
              ),
            ].concat(index_es_toConsumableArray(children))
          )
        )
      }.bind(null, react.createElement)
    },
    './node_modules/css-loader/dist/runtime/api.js': (module) => {
      'use strict'
      module.exports = function (cssWithMappingToString) {
        var list = []
        return (
          (list.toString = function toString() {
            return this.map(function (item) {
              var content = '',
                needLayer = void 0 !== item[5]
              return (
                item[4] && (content += '@supports ('.concat(item[4], ') {')),
                item[2] && (content += '@media '.concat(item[2], ' {')),
                needLayer &&
                  (content += '@layer'.concat(
                    item[5].length > 0 ? ' '.concat(item[5]) : '',
                    ' {'
                  )),
                (content += cssWithMappingToString(item)),
                needLayer && (content += '}'),
                item[2] && (content += '}'),
                item[4] && (content += '}'),
                content
              )
            }).join('')
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            'string' == typeof modules && (modules = [[null, modules, void 0]])
            var alreadyImportedModules = {}
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0]
                null != id && (alreadyImportedModules[id] = !0)
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k])
              ;(dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = '@layer'
                      .concat(
                        item[5].length > 0 ? ' '.concat(item[5]) : '',
                        ' {'
                      )
                      .concat(item[1], '}')),
                  (item[5] = layer)),
                media &&
                  (item[2]
                    ? ((item[1] = '@media '
                        .concat(item[2], ' {')
                        .concat(item[1], '}')),
                      (item[2] = media))
                    : (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = '@supports ('
                        .concat(item[4], ') {')
                        .concat(item[1], '}')),
                      (item[4] = supports))
                    : (item[4] = ''.concat(supports))),
                list.push(item))
            }
          }),
          list
        )
      }
    },
    './node_modules/css-loader/dist/runtime/sourceMaps.js': (module) => {
      'use strict'
      module.exports = function (item) {
        var content = item[1],
          cssMapping = item[3]
        if (!cssMapping) return content
        if ('function' == typeof btoa) {
          var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            ),
            data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64
              ),
            sourceMapping = '/*# '.concat(data, ' */')
          return [content].concat([sourceMapping]).join('\n')
        }
        return [content].join('\n')
      }
    },
    './node_modules/next/dist/client/add-base-path.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'addBasePath', {
          enumerable: !0,
          get: function () {
            return addBasePath
          },
        })
      const _addpathprefix = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js'
        ),
        _normalizetrailingslash = __webpack_require__(
          './node_modules/next/dist/client/normalize-trailing-slash.js'
        ),
        basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
      function addBasePath(path, required) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(
          process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required
            ? path
            : (0, _addpathprefix.addPathPrefix)(path, basePath)
        )
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/add-locale.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'addLocale', {
          enumerable: !0,
          get: function () {
            return addLocale
          },
        })
      const _normalizetrailingslash = __webpack_require__(
          './node_modules/next/dist/client/normalize-trailing-slash.js'
        ),
        addLocale = function (path) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key]
          return process.env.__NEXT_I18N_SUPPORT
            ? (0, _normalizetrailingslash.normalizePathTrailingSlash)(
                __webpack_require__(
                  './node_modules/next/dist/shared/lib/router/utils/add-locale.js'
                ).b(path, ...args)
              )
            : path
        }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/components/router-reducer/router-reducer-types.js':
      (module, exports) => {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (function _export(target, all) {
            for (var name in all)
              Object.defineProperty(target, name, {
                enumerable: !0,
                get: all[name],
              })
          })(exports, {
            PrefetchKind: function () {
              return PrefetchKind
            },
            ACTION_REFRESH: function () {
              return ACTION_REFRESH
            },
            ACTION_NAVIGATE: function () {
              return ACTION_NAVIGATE
            },
            ACTION_RESTORE: function () {
              return ACTION_RESTORE
            },
            ACTION_SERVER_PATCH: function () {
              return ACTION_SERVER_PATCH
            },
            ACTION_PREFETCH: function () {
              return ACTION_PREFETCH
            },
            ACTION_FAST_REFRESH: function () {
              return ACTION_FAST_REFRESH
            },
            ACTION_SERVER_ACTION: function () {
              return ACTION_SERVER_ACTION
            },
            isThenable: function () {
              return isThenable
            },
          })
        const ACTION_REFRESH = 'refresh',
          ACTION_NAVIGATE = 'navigate',
          ACTION_RESTORE = 'restore',
          ACTION_SERVER_PATCH = 'server-patch',
          ACTION_PREFETCH = 'prefetch',
          ACTION_FAST_REFRESH = 'fast-refresh',
          ACTION_SERVER_ACTION = 'server-action'
        var PrefetchKind
        function isThenable(value) {
          return (
            value &&
            ('object' == typeof value || 'function' == typeof value) &&
            'function' == typeof value.then
          )
        }
        !(function (PrefetchKind) {
          ;(PrefetchKind.AUTO = 'auto'),
            (PrefetchKind.FULL = 'full'),
            (PrefetchKind.TEMPORARY = 'temporary')
        })(PrefetchKind || (PrefetchKind = {})),
          ('function' == typeof exports.default ||
            ('object' == typeof exports.default && null !== exports.default)) &&
            void 0 === exports.default.__esModule &&
            (Object.defineProperty(exports.default, '__esModule', {
              value: !0,
            }),
            Object.assign(exports.default, exports),
            (module.exports = exports.default))
      },
    './node_modules/next/dist/client/detect-domain-locale.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'detectDomainLocale', {
          enumerable: !0,
          get: function () {
            return detectDomainLocale
          },
        })
      const detectDomainLocale = function () {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          args[_key] = arguments[_key]
        if (process.env.__NEXT_I18N_SUPPORT)
          return __webpack_require__(
            './node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js'
          ).D(...args)
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/get-domain-locale.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return getDomainLocale
          },
        })
      const _normalizetrailingslash = __webpack_require__(
          './node_modules/next/dist/client/normalize-trailing-slash.js'
        ),
        basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
      function getDomainLocale(path, locale, locales, domainLocales) {
        if (process.env.__NEXT_I18N_SUPPORT) {
          const normalizeLocalePath = __webpack_require__(
              './node_modules/next/dist/client/normalize-locale-path.js'
            ).normalizeLocalePath,
            detectDomainLocale = __webpack_require__(
              './node_modules/next/dist/client/detect-domain-locale.js'
            ).detectDomainLocale,
            target =
              locale || normalizeLocalePath(path, locales).detectedLocale,
            domain = detectDomainLocale(domainLocales, void 0, target)
          if (domain) {
            const proto = 'http' + (domain.http ? '' : 's') + '://',
              finalLocale = target === domain.defaultLocale ? '' : '/' + target
            return (
              '' +
              proto +
              domain.domain +
              (0, _normalizetrailingslash.normalizePathTrailingSlash)(
                '' + basePath + finalLocale + path
              )
            )
          }
          return !1
        }
        return !1
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/has-base-path.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'hasBasePath', {
          enumerable: !0,
          get: function () {
            return hasBasePath
          },
        })
      const _pathhasprefix = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js'
        ),
        basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
      function hasBasePath(path) {
        return (0, _pathhasprefix.pathHasPrefix)(path, basePath)
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/link.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'default', {
          enumerable: !0,
          get: function () {
            return _default
          },
        })
      const _react = __webpack_require__(
          './node_modules/@swc/helpers/cjs/_interop_require_default.cjs'
        )._(
          __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          )
        ),
        _resolvehref = __webpack_require__(
          './node_modules/next/dist/client/resolve-href.js'
        ),
        _islocalurl = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/is-local-url.js'
        ),
        _formaturl = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/format-url.js'
        ),
        _utils = __webpack_require__(
          './node_modules/next/dist/shared/lib/utils.js'
        ),
        _addlocale = __webpack_require__(
          './node_modules/next/dist/client/add-locale.js'
        ),
        _routercontextsharedruntime = __webpack_require__(
          './node_modules/next/dist/shared/lib/router-context.shared-runtime.js'
        ),
        _approutercontextsharedruntime = __webpack_require__(
          './node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js'
        ),
        _useintersection = __webpack_require__(
          './node_modules/next/dist/client/use-intersection.js'
        ),
        _getdomainlocale = __webpack_require__(
          './node_modules/next/dist/client/get-domain-locale.js'
        ),
        _addbasepath = __webpack_require__(
          './node_modules/next/dist/client/add-base-path.js'
        ),
        _routerreducertypes = __webpack_require__(
          './node_modules/next/dist/client/components/router-reducer/router-reducer-types.js'
        ),
        prefetched = new Set()
      function prefetch(router, href, as, options, appOptions, isAppRouter) {
        if ('undefined' == typeof window) return
        if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) return
        if (!options.bypassPrefetchedCheck) {
          const prefetchedKey =
            href +
            '%' +
            as +
            '%' +
            (void 0 !== options.locale
              ? options.locale
              : 'locale' in router
                ? router.locale
                : void 0)
          if (prefetched.has(prefetchedKey)) return
          prefetched.add(prefetchedKey)
        }
        const prefetchPromise = isAppRouter
          ? router.prefetch(href, appOptions)
          : router.prefetch(href, as, options)
        Promise.resolve(prefetchPromise).catch((err) => {
          0
        })
      }
      function formatStringOrUrl(urlObjOrString) {
        return 'string' == typeof urlObjOrString
          ? urlObjOrString
          : (0, _formaturl.formatUrl)(urlObjOrString)
      }
      const _default = _react.default.forwardRef(
        function LinkComponent(props, forwardedRef) {
          let children
          const {
            href: hrefProp,
            as: asProp,
            children: childrenProp,
            prefetch: prefetchProp = null,
            passHref,
            replace,
            shallow,
            scroll,
            locale,
            onClick,
            onMouseEnter: onMouseEnterProp,
            onTouchStart: onTouchStartProp,
            legacyBehavior = !1,
            ...restProps
          } = props
          ;(children = childrenProp),
            !legacyBehavior ||
              ('string' != typeof children && 'number' != typeof children) ||
              (children = _react.default.createElement('a', null, children))
          const pagesRouter = _react.default.useContext(
              _routercontextsharedruntime.RouterContext
            ),
            appRouter = _react.default.useContext(
              _approutercontextsharedruntime.AppRouterContext
            ),
            router = null != pagesRouter ? pagesRouter : appRouter,
            isAppRouter = !pagesRouter,
            prefetchEnabled = !1 !== prefetchProp,
            appPrefetchKind =
              null === prefetchProp
                ? _routerreducertypes.PrefetchKind.AUTO
                : _routerreducertypes.PrefetchKind.FULL
          const { href, as } = _react.default.useMemo(() => {
              if (!pagesRouter) {
                const resolvedHref = formatStringOrUrl(hrefProp)
                return {
                  href: resolvedHref,
                  as: asProp ? formatStringOrUrl(asProp) : resolvedHref,
                }
              }
              const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(
                pagesRouter,
                hrefProp,
                !0
              )
              return {
                href: resolvedHref,
                as: asProp
                  ? (0, _resolvehref.resolveHref)(pagesRouter, asProp)
                  : resolvedAs || resolvedHref,
              }
            }, [pagesRouter, hrefProp, asProp]),
            previousHref = _react.default.useRef(href),
            previousAs = _react.default.useRef(as)
          let child
          legacyBehavior && (child = _react.default.Children.only(children))
          const childRef = legacyBehavior
              ? child && 'object' == typeof child && child.ref
              : forwardedRef,
            [setIntersectionRef, isVisible, resetVisible] = (0,
            _useintersection.useIntersection)({ rootMargin: '200px' }),
            setRef = _react.default.useCallback(
              (el) => {
                ;(previousAs.current === as && previousHref.current === href) ||
                  (resetVisible(),
                  (previousAs.current = as),
                  (previousHref.current = href)),
                  setIntersectionRef(el),
                  childRef &&
                    ('function' == typeof childRef
                      ? childRef(el)
                      : 'object' == typeof childRef && (childRef.current = el))
              },
              [as, childRef, href, resetVisible, setIntersectionRef]
            )
          _react.default.useEffect(() => {
            router &&
              isVisible &&
              prefetchEnabled &&
              prefetch(
                router,
                href,
                as,
                { locale },
                { kind: appPrefetchKind },
                isAppRouter
              )
          }, [
            as,
            href,
            isVisible,
            locale,
            prefetchEnabled,
            null == pagesRouter ? void 0 : pagesRouter.locale,
            router,
            isAppRouter,
            appPrefetchKind,
          ])
          const childProps = {
            ref: setRef,
            onClick(e) {
              legacyBehavior || 'function' != typeof onClick || onClick(e),
                legacyBehavior &&
                  child.props &&
                  'function' == typeof child.props.onClick &&
                  child.props.onClick(e),
                router &&
                  (e.defaultPrevented ||
                    (function linkClicked(
                      e,
                      router,
                      href,
                      as,
                      replace,
                      shallow,
                      scroll,
                      locale,
                      isAppRouter
                    ) {
                      const { nodeName } = e.currentTarget
                      if (
                        'A' === nodeName.toUpperCase() &&
                        ((function isModifiedEvent(event) {
                          const target =
                            event.currentTarget.getAttribute('target')
                          return (
                            (target && '_self' !== target) ||
                            event.metaKey ||
                            event.ctrlKey ||
                            event.shiftKey ||
                            event.altKey ||
                            (event.nativeEvent && 2 === event.nativeEvent.which)
                          )
                        })(e) ||
                          (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)))
                      )
                        return
                      e.preventDefault()
                      const navigate = () => {
                        const routerScroll = null == scroll || scroll
                        'beforePopState' in router
                          ? router[replace ? 'replace' : 'push'](href, as, {
                              shallow,
                              locale,
                              scroll: routerScroll,
                            })
                          : router[replace ? 'replace' : 'push'](as || href, {
                              scroll: routerScroll,
                            })
                      }
                      isAppRouter
                        ? _react.default.startTransition(navigate)
                        : navigate()
                    })(
                      e,
                      router,
                      href,
                      as,
                      replace,
                      shallow,
                      scroll,
                      locale,
                      isAppRouter
                    ))
            },
            onMouseEnter(e) {
              legacyBehavior ||
                'function' != typeof onMouseEnterProp ||
                onMouseEnterProp(e),
                legacyBehavior &&
                  child.props &&
                  'function' == typeof child.props.onMouseEnter &&
                  child.props.onMouseEnter(e),
                router &&
                  ((!prefetchEnabled && isAppRouter) ||
                    prefetch(
                      router,
                      href,
                      as,
                      { locale, priority: !0, bypassPrefetchedCheck: !0 },
                      { kind: appPrefetchKind },
                      isAppRouter
                    ))
            },
            onTouchStart(e) {
              legacyBehavior ||
                'function' != typeof onTouchStartProp ||
                onTouchStartProp(e),
                legacyBehavior &&
                  child.props &&
                  'function' == typeof child.props.onTouchStart &&
                  child.props.onTouchStart(e),
                router &&
                  ((!prefetchEnabled && isAppRouter) ||
                    prefetch(
                      router,
                      href,
                      as,
                      { locale, priority: !0, bypassPrefetchedCheck: !0 },
                      { kind: appPrefetchKind },
                      isAppRouter
                    ))
            },
          }
          if ((0, _utils.isAbsoluteUrl)(as)) childProps.href = as
          else if (
            !legacyBehavior ||
            passHref ||
            ('a' === child.type && !('href' in child.props))
          ) {
            const curLocale =
                void 0 !== locale
                  ? locale
                  : null == pagesRouter
                    ? void 0
                    : pagesRouter.locale,
              localeDomain =
                (null == pagesRouter ? void 0 : pagesRouter.isLocaleDomain) &&
                (0, _getdomainlocale.getDomainLocale)(
                  as,
                  curLocale,
                  null == pagesRouter ? void 0 : pagesRouter.locales,
                  null == pagesRouter ? void 0 : pagesRouter.domainLocales
                )
            childProps.href =
              localeDomain ||
              (0, _addbasepath.addBasePath)(
                (0, _addlocale.addLocale)(
                  as,
                  curLocale,
                  null == pagesRouter ? void 0 : pagesRouter.defaultLocale
                )
              )
          }
          return legacyBehavior
            ? _react.default.cloneElement(child, childProps)
            : _react.default.createElement(
                'a',
                { ...restProps, ...childProps },
                children
              )
        }
      )
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/normalize-locale-path.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'normalizeLocalePath', {
          enumerable: !0,
          get: function () {
            return normalizeLocalePath
          },
        })
      const normalizeLocalePath = (pathname, locales) =>
        process.env.__NEXT_I18N_SUPPORT
          ? __webpack_require__(
              './node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js'
            ).h(pathname, locales)
          : { pathname, detectedLocale: void 0 }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/normalize-trailing-slash.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var process = __webpack_require__('./node_modules/process/browser.js')
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'normalizePathTrailingSlash', {
          enumerable: !0,
          get: function () {
            return normalizePathTrailingSlash
          },
        })
      const _removetrailingslash = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js'
        ),
        _parsepath = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/parse-path.js'
        ),
        normalizePathTrailingSlash = (path) => {
          if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH)
            return path
          const { pathname, query, hash } = (0, _parsepath.parsePath)(path)
          return process.env.__NEXT_TRAILING_SLASH
            ? /\.[^/]+\/?$/.test(pathname)
              ? '' +
                (0, _removetrailingslash.removeTrailingSlash)(pathname) +
                query +
                hash
              : pathname.endsWith('/')
                ? '' + pathname + query + hash
                : pathname + '/' + query + hash
            : '' +
                (0, _removetrailingslash.removeTrailingSlash)(pathname) +
                query +
                hash
        }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/request-idle-callback.js': (
      module,
      exports
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          requestIdleCallback: function () {
            return requestIdleCallback
          },
          cancelIdleCallback: function () {
            return cancelIdleCallback
          },
        })
      const requestIdleCallback =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (cb) {
            let start = Date.now()
            return self.setTimeout(function () {
              cb({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - start))
                },
              })
            }, 1)
          },
        cancelIdleCallback =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (id) {
            return clearTimeout(id)
          }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/resolve-href.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      var console = __webpack_require__(
        './node_modules/console-browserify/index.js'
      )
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return resolveHref
          },
        })
      const _querystring = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/querystring.js'
        ),
        _formaturl = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/format-url.js'
        ),
        _omit = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/omit.js'
        ),
        _utils = __webpack_require__(
          './node_modules/next/dist/shared/lib/utils.js'
        ),
        _normalizetrailingslash = __webpack_require__(
          './node_modules/next/dist/client/normalize-trailing-slash.js'
        ),
        _islocalurl = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/is-local-url.js'
        ),
        _utils1 = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/index.js'
        ),
        _interpolateas = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/interpolate-as.js'
        )
      function resolveHref(router, href, resolveAs) {
        let base,
          urlAsString =
            'string' == typeof href
              ? href
              : (0, _formaturl.formatWithValidation)(href)
        const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//),
          urlAsStringNoProto = urlProtoMatch
            ? urlAsString.slice(urlProtoMatch[0].length)
            : urlAsString
        if ((urlAsStringNoProto.split('?', 1)[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              urlAsString +
              "' passed to next/router in page: '" +
              router.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          )
          const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(
            urlAsStringNoProto
          )
          urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl
        }
        if (!(0, _islocalurl.isLocalURL)(urlAsString))
          return resolveAs ? [urlAsString] : urlAsString
        try {
          base = new URL(
            urlAsString.startsWith('#') ? router.asPath : router.pathname,
            'http://n'
          )
        } catch (_) {
          base = new URL('/', 'http://n')
        }
        try {
          const finalUrl = new URL(urlAsString, base)
          finalUrl.pathname = (0,
          _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname)
          let interpolatedAs = ''
          if (
            (0, _utils1.isDynamicRoute)(finalUrl.pathname) &&
            finalUrl.searchParams &&
            resolveAs
          ) {
            const query = (0, _querystring.searchParamsToUrlQuery)(
                finalUrl.searchParams
              ),
              { result, params } = (0, _interpolateas.interpolateAs)(
                finalUrl.pathname,
                finalUrl.pathname,
                query
              )
            result &&
              (interpolatedAs = (0, _formaturl.formatWithValidation)({
                pathname: result,
                hash: finalUrl.hash,
                query: (0, _omit.omit)(query, params),
              }))
          }
          const resolvedHref =
            finalUrl.origin === base.origin
              ? finalUrl.href.slice(finalUrl.origin.length)
              : finalUrl.href
          return resolveAs
            ? [resolvedHref, interpolatedAs || resolvedHref]
            : resolvedHref
        } catch (_) {
          return resolveAs ? [urlAsString] : urlAsString
        }
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/client/use-intersection.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return useIntersection
          },
        })
      const _react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _requestidlecallback = __webpack_require__(
          './node_modules/next/dist/client/request-idle-callback.js'
        ),
        hasIntersectionObserver = 'function' == typeof IntersectionObserver,
        observers = new Map(),
        idList = []
      function observe(element, callback, options) {
        const { id, observer, elements } = (function createObserver(options) {
          const id = {
              root: options.root || null,
              margin: options.rootMargin || '',
            },
            existing = idList.find(
              (obj) => obj.root === id.root && obj.margin === id.margin
            )
          let instance
          if (existing && ((instance = observers.get(existing)), instance))
            return instance
          const elements = new Map(),
            observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                const callback = elements.get(entry.target),
                  isVisible =
                    entry.isIntersecting || entry.intersectionRatio > 0
                callback && isVisible && callback(isVisible)
              })
            }, options)
          return (
            (instance = { id, observer, elements }),
            idList.push(id),
            observers.set(id, instance),
            instance
          )
        })(options)
        return (
          elements.set(element, callback),
          observer.observe(element),
          function unobserve() {
            if (
              (elements.delete(element),
              observer.unobserve(element),
              0 === elements.size)
            ) {
              observer.disconnect(), observers.delete(id)
              const index = idList.findIndex(
                (obj) => obj.root === id.root && obj.margin === id.margin
              )
              index > -1 && idList.splice(index, 1)
            }
          }
        )
      }
      function useIntersection(param) {
        let { rootRef, rootMargin, disabled } = param
        const isDisabled = disabled || !hasIntersectionObserver,
          [visible, setVisible] = (0, _react.useState)(!1),
          elementRef = (0, _react.useRef)(null),
          setElement = (0, _react.useCallback)((element) => {
            elementRef.current = element
          }, [])
        ;(0, _react.useEffect)(() => {
          if (hasIntersectionObserver) {
            if (isDisabled || visible) return
            const element = elementRef.current
            if (element && element.tagName) {
              return observe(
                element,
                (isVisible) => isVisible && setVisible(isVisible),
                { root: null == rootRef ? void 0 : rootRef.current, rootMargin }
              )
            }
          } else if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(
              () => setVisible(!0)
            )
            return () =>
              (0, _requestidlecallback.cancelIdleCallback)(idleCallback)
          }
        }, [isDisabled, rootMargin, rootRef, visible, elementRef.current])
        const resetVisible = (0, _react.useCallback)(() => {
          setVisible(!1)
        }, [])
        return [setElement, visible, resetVisible]
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/server/future/helpers/interception-routes.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          INTERCEPTION_ROUTE_MARKERS: function () {
            return INTERCEPTION_ROUTE_MARKERS
          },
          isInterceptionRouteAppPath: function () {
            return isInterceptionRouteAppPath
          },
          extractInterceptionRouteInformation: function () {
            return extractInterceptionRouteInformation
          },
        })
      const _apppaths = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/app-paths.js'
        ),
        INTERCEPTION_ROUTE_MARKERS = ['(..)(..)', '(.)', '(..)', '(...)']
      function isInterceptionRouteAppPath(path) {
        return (
          void 0 !==
          path
            .split('/')
            .find((segment) =>
              INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))
            )
        )
      }
      function extractInterceptionRouteInformation(path) {
        let interceptingRoute, marker, interceptedRoute
        for (const segment of path.split('/'))
          if (
            ((marker = INTERCEPTION_ROUTE_MARKERS.find((m) =>
              segment.startsWith(m)
            )),
            marker)
          ) {
            ;[interceptingRoute, interceptedRoute] = path.split(marker, 2)
            break
          }
        if (!interceptingRoute || !marker || !interceptedRoute)
          throw new Error(
            `Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`
          )
        switch (
          ((interceptingRoute = (0, _apppaths.normalizeAppPath)(
            interceptingRoute
          )),
          marker)
        ) {
          case '(.)':
            interceptedRoute =
              '/' === interceptingRoute
                ? `/${interceptedRoute}`
                : interceptingRoute + '/' + interceptedRoute
            break
          case '(..)':
            if ('/' === interceptingRoute)
              throw new Error(
                `Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`
              )
            interceptedRoute = interceptingRoute
              .split('/')
              .slice(0, -1)
              .concat(interceptedRoute)
              .join('/')
            break
          case '(...)':
            interceptedRoute = '/' + interceptedRoute
            break
          case '(..)(..)':
            const splitInterceptingRoute = interceptingRoute.split('/')
            if (splitInterceptingRoute.length <= 2)
              throw new Error(
                `Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`
              )
            interceptedRoute = splitInterceptingRoute
              .slice(0, -2)
              .concat(interceptedRoute)
              .join('/')
            break
          default:
            throw new Error('Invariant: unexpected marker')
        }
        return { interceptingRoute, interceptedRoute }
      }
    },
    './node_modules/next/dist/shared/lib/escape-regexp.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return escapeStringRegexp
          },
        })
      const reHasRegExp = /[|\\{}()[\]^$+*?.-]/,
        reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g
      function escapeStringRegexp(str) {
        return reHasRegExp.test(str)
          ? str.replace(reReplaceRegExp, '\\$&')
          : str
      }
    },
    './node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function detectDomainLocale(domainItems, hostname, detectedLocale) {
        if (domainItems) {
          detectedLocale && (detectedLocale = detectedLocale.toLowerCase())
          for (const item of domainItems) {
            var _item_domain, _item_locales
            if (
              hostname ===
                (null == (_item_domain = item.domain)
                  ? void 0
                  : _item_domain.split(':', 1)[0].toLowerCase()) ||
              detectedLocale === item.defaultLocale.toLowerCase() ||
              (null == (_item_locales = item.locales)
                ? void 0
                : _item_locales.some(
                    (locale) => locale.toLowerCase() === detectedLocale
                  ))
            )
              return item
          }
        }
      }
      Object.defineProperty(exports, 'D', {
        enumerable: !0,
        get: function () {
          return detectDomainLocale
        },
      })
    },
    './node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function normalizeLocalePath(pathname, locales) {
        let detectedLocale
        const pathnameParts = pathname.split('/')
        return (
          (locales || []).some(
            (locale) =>
              !(
                !pathnameParts[1] ||
                pathnameParts[1].toLowerCase() !== locale.toLowerCase()
              ) &&
              ((detectedLocale = locale),
              pathnameParts.splice(1, 1),
              (pathname = pathnameParts.join('/') || '/'),
              !0)
          ),
          { pathname, detectedLocale }
        )
      }
      Object.defineProperty(exports, 'h', {
        enumerable: !0,
        get: function () {
          return normalizeLocalePath
        },
      })
    },
    './node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function ensureLeadingSlash(path) {
        return path.startsWith('/') ? path : '/' + path
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'ensureLeadingSlash', {
          enumerable: !0,
          get: function () {
            return ensureLeadingSlash
          },
        })
    },
    './node_modules/next/dist/shared/lib/router/utils/add-locale.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, 'b', {
        enumerable: !0,
        get: function () {
          return addLocale
        },
      })
      const _addpathprefix = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js'
        ),
        _pathhasprefix = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js'
        )
      function addLocale(path, locale, defaultLocale, ignorePrefix) {
        if (!locale || locale === defaultLocale) return path
        const lower = path.toLowerCase()
        if (!ignorePrefix) {
          if ((0, _pathhasprefix.pathHasPrefix)(lower, '/api')) return path
          if (
            (0, _pathhasprefix.pathHasPrefix)(lower, '/' + locale.toLowerCase())
          )
            return path
        }
        return (0, _addpathprefix.addPathPrefix)(path, '/' + locale)
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'addPathPrefix', {
          enumerable: !0,
          get: function () {
            return addPathPrefix
          },
        })
      const _parsepath = __webpack_require__(
        './node_modules/next/dist/shared/lib/router/utils/parse-path.js'
      )
      function addPathPrefix(path, prefix) {
        if (!path.startsWith('/') || !prefix) return path
        const { pathname, query, hash } = (0, _parsepath.parsePath)(path)
        return '' + prefix + pathname + query + hash
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/app-paths.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          normalizeAppPath: function () {
            return normalizeAppPath
          },
          normalizeRscURL: function () {
            return normalizeRscURL
          },
        })
      const _ensureleadingslash = __webpack_require__(
          './node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js'
        ),
        _segment = __webpack_require__(
          './node_modules/next/dist/shared/lib/segment.js'
        )
      function normalizeAppPath(route) {
        return (0, _ensureleadingslash.ensureLeadingSlash)(
          route
            .split('/')
            .reduce(
              (pathname, segment, index, segments) =>
                segment
                  ? (0, _segment.isGroupSegment)(segment) || '@' === segment[0]
                    ? pathname
                    : ('page' !== segment && 'route' !== segment) ||
                        index !== segments.length - 1
                      ? pathname + '/' + segment
                      : pathname
                  : pathname,
              ''
            )
        )
      }
      function normalizeRscURL(url) {
        return url.replace(/\.rsc($|\?)/, '$1')
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/format-url.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          formatUrl: function () {
            return formatUrl
          },
          urlObjectKeys: function () {
            return urlObjectKeys
          },
          formatWithValidation: function () {
            return formatWithValidation
          },
        })
      const _querystring = __webpack_require__(
          './node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs'
        )._(
          __webpack_require__(
            './node_modules/next/dist/shared/lib/router/utils/querystring.js'
          )
        ),
        slashedProtocols = /https?|ftp|gopher|file/
      function formatUrl(urlObj) {
        let { auth, hostname } = urlObj,
          protocol = urlObj.protocol || '',
          pathname = urlObj.pathname || '',
          hash = urlObj.hash || '',
          query = urlObj.query || '',
          host = !1
        ;(auth = auth
          ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@'
          : ''),
          urlObj.host
            ? (host = auth + urlObj.host)
            : hostname &&
              ((host =
                auth +
                (~hostname.indexOf(':') ? '[' + hostname + ']' : hostname)),
              urlObj.port && (host += ':' + urlObj.port)),
          query &&
            'object' == typeof query &&
            (query = String(_querystring.urlQueryToSearchParams(query)))
        let search = urlObj.search || (query && '?' + query) || ''
        return (
          protocol && !protocol.endsWith(':') && (protocol += ':'),
          urlObj.slashes ||
          ((!protocol || slashedProtocols.test(protocol)) && !1 !== host)
            ? ((host = '//' + (host || '')),
              pathname && '/' !== pathname[0] && (pathname = '/' + pathname))
            : host || (host = ''),
          hash && '#' !== hash[0] && (hash = '#' + hash),
          search && '?' !== search[0] && (search = '?' + search),
          (pathname = pathname.replace(/[?#]/g, encodeURIComponent)),
          (search = search.replace('#', '%23')),
          '' + protocol + host + pathname + search + hash
        )
      }
      const urlObjectKeys = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ]
      function formatWithValidation(url) {
        return formatUrl(url)
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/index.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          getSortedRoutes: function () {
            return _sortedroutes.getSortedRoutes
          },
          isDynamicRoute: function () {
            return _isdynamic.isDynamicRoute
          },
        })
      const _sortedroutes = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/sorted-routes.js'
        ),
        _isdynamic = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/is-dynamic.js'
        )
    },
    './node_modules/next/dist/shared/lib/router/utils/interpolate-as.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return interpolateAs
          },
        })
      const _routematcher = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/route-matcher.js'
        ),
        _routeregex = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/route-regex.js'
        )
      function interpolateAs(route, asPathname, query) {
        let interpolatedRoute = ''
        const dynamicRegex = (0, _routeregex.getRouteRegex)(route),
          dynamicGroups = dynamicRegex.groups,
          dynamicMatches =
            (asPathname !== route
              ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname)
              : '') || query
        interpolatedRoute = route
        const params = Object.keys(dynamicGroups)
        return (
          params.every((param) => {
            let value = dynamicMatches[param] || ''
            const { repeat, optional } = dynamicGroups[param]
            let replaced = '[' + (repeat ? '...' : '') + param + ']'
            return (
              optional &&
                (replaced = (value ? '' : '/') + '[' + replaced + ']'),
              repeat && !Array.isArray(value) && (value = [value]),
              (optional || param in dynamicMatches) &&
                (interpolatedRoute =
                  interpolatedRoute.replace(
                    replaced,
                    repeat
                      ? value
                          .map((segment) => encodeURIComponent(segment))
                          .join('/')
                      : encodeURIComponent(value)
                  ) || '/')
            )
          }) || (interpolatedRoute = ''),
          { params, result: interpolatedRoute }
        )
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/is-dynamic.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return isDynamicRoute
          },
        })
      const _interceptionroutes = __webpack_require__(
          './node_modules/next/dist/server/future/helpers/interception-routes.js'
        ),
        TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/
      function isDynamicRoute(route) {
        return (
          (0, _interceptionroutes.isInterceptionRouteAppPath)(route) &&
            (route = (0,
            _interceptionroutes.extractInterceptionRouteInformation)(
              route
            ).interceptedRoute),
          TEST_ROUTE.test(route)
        )
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/is-local-url.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return isLocalURL
          },
        })
      const _utils = __webpack_require__(
          './node_modules/next/dist/shared/lib/utils.js'
        ),
        _hasbasepath = __webpack_require__(
          './node_modules/next/dist/client/has-base-path.js'
        )
      function isLocalURL(url) {
        if (!(0, _utils.isAbsoluteUrl)(url)) return !0
        try {
          const locationOrigin = (0, _utils.getLocationOrigin)(),
            resolved = new URL(url, locationOrigin)
          return (
            resolved.origin === locationOrigin &&
            (0, _hasbasepath.hasBasePath)(resolved.pathname)
          )
        } catch (_) {
          return !1
        }
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/omit.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function omit(object, keys) {
        const omitted = {}
        return (
          Object.keys(object).forEach((key) => {
            keys.includes(key) || (omitted[key] = object[key])
          }),
          omitted
        )
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'omit', {
          enumerable: !0,
          get: function () {
            return omit
          },
        })
    },
    './node_modules/next/dist/shared/lib/router/utils/parse-path.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function parsePath(path) {
        const hashIndex = path.indexOf('#'),
          queryIndex = path.indexOf('?'),
          hasQuery =
            queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex)
        return hasQuery || hashIndex > -1
          ? {
              pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
              query: hasQuery
                ? path.substring(
                    queryIndex,
                    hashIndex > -1 ? hashIndex : void 0
                  )
                : '',
              hash: hashIndex > -1 ? path.slice(hashIndex) : '',
            }
          : { pathname: path, query: '', hash: '' }
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'parsePath', {
          enumerable: !0,
          get: function () {
            return parsePath
          },
        })
    },
    './node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'pathHasPrefix', {
          enumerable: !0,
          get: function () {
            return pathHasPrefix
          },
        })
      const _parsepath = __webpack_require__(
        './node_modules/next/dist/shared/lib/router/utils/parse-path.js'
      )
      function pathHasPrefix(path, prefix) {
        if ('string' != typeof path) return !1
        const { pathname } = (0, _parsepath.parsePath)(path)
        return pathname === prefix || pathname.startsWith(prefix + '/')
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/querystring.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function searchParamsToUrlQuery(searchParams) {
        const query = {}
        return (
          searchParams.forEach((value, key) => {
            void 0 === query[key]
              ? (query[key] = value)
              : Array.isArray(query[key])
                ? query[key].push(value)
                : (query[key] = [query[key], value])
          }),
          query
        )
      }
      function stringifyUrlQueryParam(param) {
        return 'string' == typeof param ||
          ('number' == typeof param && !isNaN(param)) ||
          'boolean' == typeof param
          ? String(param)
          : ''
      }
      function urlQueryToSearchParams(urlQuery) {
        const result = new URLSearchParams()
        return (
          Object.entries(urlQuery).forEach((param) => {
            let [key, value] = param
            Array.isArray(value)
              ? value.forEach((item) =>
                  result.append(key, stringifyUrlQueryParam(item))
                )
              : result.set(key, stringifyUrlQueryParam(value))
          }),
          result
        )
      }
      function assign(target) {
        for (
          var _len = arguments.length,
            searchParamsList = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        )
          searchParamsList[_key - 1] = arguments[_key]
        return (
          searchParamsList.forEach((searchParams) => {
            Array.from(searchParams.keys()).forEach((key) =>
              target.delete(key)
            ),
              searchParams.forEach((value, key) => target.append(key, value))
          }),
          target
        )
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          searchParamsToUrlQuery: function () {
            return searchParamsToUrlQuery
          },
          urlQueryToSearchParams: function () {
            return urlQueryToSearchParams
          },
          assign: function () {
            return assign
          },
        })
    },
    './node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js':
      (__unused_webpack_module, exports) => {
        'use strict'
        function removeTrailingSlash(route) {
          return route.replace(/\/$/, '') || '/'
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'removeTrailingSlash', {
            enumerable: !0,
            get: function () {
              return removeTrailingSlash
            },
          })
      },
    './node_modules/next/dist/shared/lib/router/utils/route-matcher.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return getRouteMatcher
          },
        })
      const _utils = __webpack_require__(
        './node_modules/next/dist/shared/lib/utils.js'
      )
      function getRouteMatcher(param) {
        let { re, groups } = param
        return (pathname) => {
          const routeMatch = re.exec(pathname)
          if (!routeMatch) return !1
          const decode = (param) => {
              try {
                return decodeURIComponent(param)
              } catch (_) {
                throw new _utils.DecodeError('failed to decode param')
              }
            },
            params = {}
          return (
            Object.keys(groups).forEach((slugName) => {
              const g = groups[slugName],
                m = routeMatch[g.pos]
              void 0 !== m &&
                (params[slugName] = ~m.indexOf('/')
                  ? m.split('/').map((entry) => decode(entry))
                  : g.repeat
                    ? [decode(m)]
                    : decode(m))
            }),
            params
          )
        }
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/route-regex.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          getRouteRegex: function () {
            return getRouteRegex
          },
          getNamedRouteRegex: function () {
            return getNamedRouteRegex
          },
          getNamedMiddlewareRegex: function () {
            return getNamedMiddlewareRegex
          },
        })
      const _interceptionroutes = __webpack_require__(
          './node_modules/next/dist/server/future/helpers/interception-routes.js'
        ),
        _escaperegexp = __webpack_require__(
          './node_modules/next/dist/shared/lib/escape-regexp.js'
        ),
        _removetrailingslash = __webpack_require__(
          './node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js'
        ),
        NEXT_QUERY_PARAM_PREFIX = 'nxtP',
        NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI'
      function parseParameter(param) {
        const optional = param.startsWith('[') && param.endsWith(']')
        optional && (param = param.slice(1, -1))
        const repeat = param.startsWith('...')
        return (
          repeat && (param = param.slice(3)), { key: param, repeat, optional }
        )
      }
      function getParametrizedRoute(route) {
        const segments = (0, _removetrailingslash.removeTrailingSlash)(route)
            .slice(1)
            .split('/'),
          groups = {}
        let groupIndex = 1
        return {
          parameterizedRoute: segments
            .map((segment) => {
              const markerMatch =
                  _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) =>
                    segment.startsWith(m)
                  ),
                paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/)
              if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(
                  paramMatches[1]
                )
                return (
                  (groups[key] = { pos: groupIndex++, repeat, optional }),
                  '/' +
                    (0, _escaperegexp.escapeStringRegexp)(markerMatch) +
                    '([^/]+?)'
                )
              }
              if (paramMatches) {
                const { key, repeat, optional } = parseParameter(
                  paramMatches[1]
                )
                return (
                  (groups[key] = { pos: groupIndex++, repeat, optional }),
                  repeat ? (optional ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                )
              }
              return '/' + (0, _escaperegexp.escapeStringRegexp)(segment)
            })
            .join(''),
          groups,
        }
      }
      function getRouteRegex(normalizedRoute) {
        const { parameterizedRoute, groups } =
          getParametrizedRoute(normalizedRoute)
        return { re: new RegExp('^' + parameterizedRoute + '(?:/)?$'), groups }
      }
      function getSafeKeyFromSegment(param) {
        let { getSafeRouteKey, segment, routeKeys, keyPrefix } = param
        const { key, optional, repeat } = parseParameter(segment)
        let cleanedKey = key.replace(/\W/g, '')
        keyPrefix && (cleanedKey = '' + keyPrefix + cleanedKey)
        let invalidKey = !1
        return (
          (0 === cleanedKey.length || cleanedKey.length > 30) &&
            (invalidKey = !0),
          isNaN(parseInt(cleanedKey.slice(0, 1))) || (invalidKey = !0),
          invalidKey && (cleanedKey = getSafeRouteKey()),
          (routeKeys[cleanedKey] = keyPrefix ? '' + keyPrefix + key : '' + key),
          repeat
            ? optional
              ? '(?:/(?<' + cleanedKey + '>.+?))?'
              : '/(?<' + cleanedKey + '>.+?)'
            : '/(?<' + cleanedKey + '>[^/]+?)'
        )
      }
      function getNamedParametrizedRoute(route, prefixRouteKeys) {
        const segments = (0, _removetrailingslash.removeTrailingSlash)(route)
            .slice(1)
            .split('/'),
          getSafeRouteKey = (function buildGetSafeRouteKey() {
            let i = 0
            return () => {
              let routeKey = '',
                j = ++i
              for (; j > 0; )
                (routeKey += String.fromCharCode(97 + ((j - 1) % 26))),
                  (j = Math.floor((j - 1) / 26))
              return routeKey
            }
          })(),
          routeKeys = {}
        return {
          namedParameterizedRoute: segments
            .map((segment) => {
              const hasInterceptionMarker =
                  _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) =>
                    segment.startsWith(m)
                  ),
                paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/)
              return hasInterceptionMarker && paramMatches
                ? getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys
                      ? NEXT_INTERCEPTION_MARKER_PREFIX
                      : void 0,
                  })
                : paramMatches
                  ? getSafeKeyFromSegment({
                      getSafeRouteKey,
                      segment: paramMatches[1],
                      routeKeys,
                      keyPrefix: prefixRouteKeys
                        ? NEXT_QUERY_PARAM_PREFIX
                        : void 0,
                    })
                  : '/' + (0, _escaperegexp.escapeStringRegexp)(segment)
            })
            .join(''),
          routeKeys,
        }
      }
      function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
        const result = getNamedParametrizedRoute(
          normalizedRoute,
          prefixRouteKey
        )
        return {
          ...getRouteRegex(normalizedRoute),
          namedRegex: '^' + result.namedParameterizedRoute + '(?:/)?$',
          routeKeys: result.routeKeys,
        }
      }
      function getNamedMiddlewareRegex(normalizedRoute, options) {
        const { parameterizedRoute } = getParametrizedRoute(normalizedRoute),
          { catchAll = !0 } = options
        if ('/' === parameterizedRoute) {
          return { namedRegex: '^/' + (catchAll ? '.*' : '') + '$' }
        }
        const { namedParameterizedRoute } = getNamedParametrizedRoute(
          normalizedRoute,
          !1
        )
        return {
          namedRegex:
            '^' +
            namedParameterizedRoute +
            (catchAll ? '(?:(/.*)?)' : '') +
            '$',
        }
      }
    },
    './node_modules/next/dist/shared/lib/router/utils/sorted-routes.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'getSortedRoutes', {
          enumerable: !0,
          get: function () {
            return getSortedRoutes
          },
        })
      class UrlNode {
        insert(urlPath) {
          this._insert(urlPath.split('/').filter(Boolean), [], !1)
        }
        smoosh() {
          return this._smoosh()
        }
        _smoosh(prefix) {
          void 0 === prefix && (prefix = '/')
          const childrenPaths = [...this.children.keys()].sort()
          null !== this.slugName &&
            childrenPaths.splice(childrenPaths.indexOf('[]'), 1),
            null !== this.restSlugName &&
              childrenPaths.splice(childrenPaths.indexOf('[...]'), 1),
            null !== this.optionalRestSlugName &&
              childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1)
          const routes = childrenPaths
            .map((c) => this.children.get(c)._smoosh('' + prefix + c + '/'))
            .reduce((prev, curr) => [...prev, ...curr], [])
          if (
            (null !== this.slugName &&
              routes.push(
                ...this.children
                  .get('[]')
                  ._smoosh(prefix + '[' + this.slugName + ']/')
              ),
            !this.placeholder)
          ) {
            const r = '/' === prefix ? '/' : prefix.slice(0, -1)
            if (null != this.optionalRestSlugName)
              throw new Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  r +
                  '" and "' +
                  r +
                  '[[...' +
                  this.optionalRestSlugName +
                  ']]").'
              )
            routes.unshift(r)
          }
          return (
            null !== this.restSlugName &&
              routes.push(
                ...this.children
                  .get('[...]')
                  ._smoosh(prefix + '[...' + this.restSlugName + ']/')
              ),
            null !== this.optionalRestSlugName &&
              routes.push(
                ...this.children
                  .get('[[...]]')
                  ._smoosh(prefix + '[[...' + this.optionalRestSlugName + ']]/')
              ),
            routes
          )
        }
        _insert(urlPaths, slugNames, isCatchAll) {
          if (0 === urlPaths.length) return void (this.placeholder = !1)
          if (isCatchAll)
            throw new Error('Catch-all must be the last part of the URL.')
          let nextSegment = urlPaths[0]
          if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
            let segmentName = nextSegment.slice(1, -1),
              isOptional = !1
            if (
              (segmentName.startsWith('[') &&
                segmentName.endsWith(']') &&
                ((segmentName = segmentName.slice(1, -1)), (isOptional = !0)),
              segmentName.startsWith('...') &&
                ((segmentName = segmentName.substring(3)), (isCatchAll = !0)),
              segmentName.startsWith('[') || segmentName.endsWith(']'))
            )
              throw new Error(
                "Segment names may not start or end with extra brackets ('" +
                  segmentName +
                  "')."
              )
            if (segmentName.startsWith('.'))
              throw new Error(
                "Segment names may not start with erroneous periods ('" +
                  segmentName +
                  "')."
              )
            function handleSlug(previousSlug, nextSlug) {
              if (null !== previousSlug && previousSlug !== nextSlug)
                throw new Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    previousSlug +
                    "' !== '" +
                    nextSlug +
                    "')."
                )
              slugNames.forEach((slug) => {
                if (slug === nextSlug)
                  throw new Error(
                    'You cannot have the same slug name "' +
                      nextSlug +
                      '" repeat within a single dynamic path'
                  )
                if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, ''))
                  throw new Error(
                    'You cannot have the slug names "' +
                      slug +
                      '" and "' +
                      nextSlug +
                      '" differ only by non-word symbols within a single dynamic path'
                  )
              }),
                slugNames.push(nextSlug)
            }
            if (isCatchAll)
              if (isOptional) {
                if (null != this.restSlugName)
                  throw new Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      urlPaths[0] +
                      '" ).'
                  )
                handleSlug(this.optionalRestSlugName, segmentName),
                  (this.optionalRestSlugName = segmentName),
                  (nextSegment = '[[...]]')
              } else {
                if (null != this.optionalRestSlugName)
                  throw new Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      urlPaths[0] +
                      '").'
                  )
                handleSlug(this.restSlugName, segmentName),
                  (this.restSlugName = segmentName),
                  (nextSegment = '[...]')
              }
            else {
              if (isOptional)
                throw new Error(
                  'Optional route parameters are not yet supported ("' +
                    urlPaths[0] +
                    '").'
                )
              handleSlug(this.slugName, segmentName),
                (this.slugName = segmentName),
                (nextSegment = '[]')
            }
          }
          this.children.has(nextSegment) ||
            this.children.set(nextSegment, new UrlNode()),
            this.children
              .get(nextSegment)
              ._insert(urlPaths.slice(1), slugNames, isCatchAll)
        }
        constructor() {
          ;(this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null)
        }
      }
      function getSortedRoutes(normalizedPages) {
        const root = new UrlNode()
        return (
          normalizedPages.forEach((pagePath) => root.insert(pagePath)),
          root.smoosh()
        )
      }
    },
    './node_modules/next/dist/shared/lib/segment.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function isGroupSegment(segment) {
        return '(' === segment[0] && segment.endsWith(')')
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'isGroupSegment', {
          enumerable: !0,
          get: function () {
            return isGroupSegment
          },
        })
    },
    './node_modules/next/dist/shared/lib/utils.js': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            })
        })(exports, {
          WEB_VITALS: function () {
            return WEB_VITALS
          },
          execOnce: function () {
            return execOnce
          },
          isAbsoluteUrl: function () {
            return isAbsoluteUrl
          },
          getLocationOrigin: function () {
            return getLocationOrigin
          },
          getURL: function () {
            return getURL
          },
          getDisplayName: function () {
            return getDisplayName
          },
          isResSent: function () {
            return isResSent
          },
          normalizeRepeatedSlashes: function () {
            return normalizeRepeatedSlashes
          },
          loadGetInitialProps: function () {
            return loadGetInitialProps
          },
          SP: function () {
            return SP
          },
          ST: function () {
            return ST
          },
          DecodeError: function () {
            return DecodeError
          },
          NormalizeError: function () {
            return NormalizeError
          },
          PageNotFoundError: function () {
            return PageNotFoundError
          },
          MissingStaticPage: function () {
            return MissingStaticPage
          },
          MiddlewareNotFoundError: function () {
            return MiddlewareNotFoundError
          },
          stringifyError: function () {
            return stringifyError
          },
        })
      const WEB_VITALS = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']
      function execOnce(fn) {
        let result,
          used = !1
        return function () {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key]
          return used || ((used = !0), (result = fn(...args))), result
        }
      }
      const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url)
      function getLocationOrigin() {
        const { protocol, hostname, port } = window.location
        return protocol + '//' + hostname + (port ? ':' + port : '')
      }
      function getURL() {
        const { href } = window.location,
          origin = getLocationOrigin()
        return href.substring(origin.length)
      }
      function getDisplayName(Component) {
        return 'string' == typeof Component
          ? Component
          : Component.displayName || Component.name || 'Unknown'
      }
      function isResSent(res) {
        return res.finished || res.headersSent
      }
      function normalizeRepeatedSlashes(url) {
        const urlParts = url.split('?')
        return (
          urlParts[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (urlParts[1] ? '?' + urlParts.slice(1).join('?') : '')
        )
      }
      async function loadGetInitialProps(App, ctx) {
        const res = ctx.res || (ctx.ctx && ctx.ctx.res)
        if (!App.getInitialProps)
          return ctx.ctx && ctx.Component
            ? { pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx) }
            : {}
        const props = await App.getInitialProps(ctx)
        if (res && isResSent(res)) return props
        if (!props) {
          const message =
            '"' +
            getDisplayName(App) +
            '.getInitialProps()" should resolve to an object. But found "' +
            props +
            '" instead.'
          throw new Error(message)
        }
        return props
      }
      const SP = 'undefined' != typeof performance,
        ST =
          SP &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (method) => 'function' == typeof performance[method]
          )
      class DecodeError extends Error {}
      class NormalizeError extends Error {}
      class PageNotFoundError extends Error {
        constructor(page) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + page)
        }
      }
      class MissingStaticPage extends Error {
        constructor(page, message) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + page + ' ' + message)
        }
      }
      class MiddlewareNotFoundError extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module')
        }
      }
      function stringifyError(error) {
        return JSON.stringify({ message: error.message, stack: error.stack })
      }
    },
    './node_modules/next/link.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__(
        './node_modules/next/dist/client/link.js'
      )
    },
    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': (
      module
    ) => {
      'use strict'
      var stylesInDOM = []
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i
            break
          }
        return result
      }
      function modulesToDom(list, options) {
        for (
          var idCountMap = {}, identifiers = [], i = 0;
          i < list.length;
          i++
        ) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = ''.concat(id, ' ').concat(count)
          idCountMap[id] = count + 1
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            }
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++,
              stylesInDOM[indexByIdentifier].updater(obj)
          else {
            var updater = addElementStyle(obj, options)
            ;(options.byIndex = i),
              stylesInDOM.splice(i, 0, { identifier, updater, references: 1 })
          }
          identifiers.push(identifier)
        }
        return identifiers
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options)
        api.update(obj)
        return function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            )
              return
            api.update((obj = newObj))
          } else api.remove()
        }
      }
      module.exports = function (list, options) {
        var lastIdentifiers = modulesToDom(
          (list = list || []),
          (options = options || {})
        )
        return function update(newList) {
          newList = newList || []
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i])
            stylesInDOM[index].references--
          }
          for (
            var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
            _i < lastIdentifiers.length;
            _i++
          ) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i])
            0 === stylesInDOM[_index].references &&
              (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1))
          }
          lastIdentifiers = newLastIdentifiers
        }
      }
    },
    './node_modules/style-loader/dist/runtime/insertBySelector.js': (
      module
    ) => {
      'use strict'
      var memo = {}
      module.exports = function insertBySelector(insert, style) {
        var target = (function getTarget(target) {
          if (void 0 === memo[target]) {
            var styleTarget = document.querySelector(target)
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            )
              try {
                styleTarget = styleTarget.contentDocument.head
              } catch (e) {
                styleTarget = null
              }
            memo[target] = styleTarget
          }
          return memo[target]
        })(insert)
        if (!target)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          )
        target.appendChild(style)
      }
    },
    './node_modules/style-loader/dist/runtime/insertStyleElement.js': (
      module
    ) => {
      'use strict'
      module.exports = function insertStyleElement(options) {
        var element = document.createElement('style')
        return (
          options.setAttributes(element, options.attributes),
          options.insert(element, options.options),
          element
        )
      }
    },
    './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict'
        module.exports = function setAttributesWithoutAttributes(styleElement) {
          var nonce = __webpack_require__.nc
          nonce && styleElement.setAttribute('nonce', nonce)
        }
      },
    './node_modules/style-loader/dist/runtime/styleDomAPI.js': (module) => {
      'use strict'
      module.exports = function domAPI(options) {
        if ('undefined' == typeof document)
          return { update: function update() {}, remove: function remove() {} }
        var styleElement = options.insertStyleElement(options)
        return {
          update: function update(obj) {
            !(function apply(styleElement, options, obj) {
              var css = ''
              obj.supports &&
                (css += '@supports ('.concat(obj.supports, ') {')),
                obj.media && (css += '@media '.concat(obj.media, ' {'))
              var needLayer = void 0 !== obj.layer
              needLayer &&
                (css += '@layer'.concat(
                  obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                  ' {'
                )),
                (css += obj.css),
                needLayer && (css += '}'),
                obj.media && (css += '}'),
                obj.supports && (css += '}')
              var sourceMap = obj.sourceMap
              sourceMap &&
                'undefined' != typeof btoa &&
                (css +=
                  '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(
                      unescape(encodeURIComponent(JSON.stringify(sourceMap)))
                    ),
                    ' */'
                  )),
                options.styleTagTransform(css, styleElement, options.options)
            })(styleElement, options, obj)
          },
          remove: function remove() {
            !(function removeStyleElement(styleElement) {
              if (null === styleElement.parentNode) return !1
              styleElement.parentNode.removeChild(styleElement)
            })(styleElement)
          },
        }
      }
    },
    './node_modules/style-loader/dist/runtime/styleTagTransform.js': (
      module
    ) => {
      'use strict'
      module.exports = function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css
        else {
          for (; styleElement.firstChild; )
            styleElement.removeChild(styleElement.firstChild)
          styleElement.appendChild(document.createTextNode(css))
        }
      }
    },
    './node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs': (
      __unused_webpack_module,
      exports
    ) => {
      'use strict'
      function _getRequireWildcardCache(nodeInterop) {
        if ('function' != typeof WeakMap) return null
        var cacheBabelInterop = new WeakMap(),
          cacheNodeInterop = new WeakMap()
        return (_getRequireWildcardCache = function (nodeInterop) {
          return nodeInterop ? cacheNodeInterop : cacheBabelInterop
        })(nodeInterop)
      }
      exports._ = exports._interop_require_wildcard =
        function _interop_require_wildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) return obj
          if (
            null === obj ||
            ('object' != typeof obj && 'function' != typeof obj)
          )
            return { default: obj }
          var cache = _getRequireWildcardCache(nodeInterop)
          if (cache && cache.has(obj)) return cache.get(obj)
          var newObj = {},
            hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var key in obj)
            if (
              'default' !== key &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null
              desc && (desc.get || desc.set)
                ? Object.defineProperty(newObj, key, desc)
                : (newObj[key] = obj[key])
            }
          ;(newObj.default = obj), cache && cache.set(obj, newObj)
          return newObj
        }
    },
  },
])
