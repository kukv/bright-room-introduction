'use strict'
;(self.webpackChunkbright_room_introduction =
  self.webpackChunkbright_room_introduction || []).push([
  [984],
  {
    './src/components/organisms/social/X.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Template: () => Template,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => X_stories,
        })
      var defineProperty = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        objectDestructuringEmpty = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
        ),
        esm_extends = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        index_es = __webpack_require__(
          './node_modules/@fortawesome/react-fontawesome/index.es.js'
        ),
        free_brands_svg_icons = __webpack_require__(
          './node_modules/@fortawesome/free-brands-svg-icons/index.mjs'
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js'
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js'
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js'
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js'
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        X_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/organisms/social/X.module.scss'
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(X_module.Z, options)
      const social_X_module =
        X_module.Z && X_module.Z.locals ? X_module.Z.locals : void 0
      var _Template$parameters,
        _Template$parameters2,
        __jsx = react.createElement,
        X = function X(_ref) {
          ;(0, esm_extends.Z)({}, ((0, objectDestructuringEmpty.Z)(_ref), _ref))
          return __jsx(
            link_default(),
            { href: 'https://twitter.com/koki_nonaka' },
            __jsx(index_es.G, {
              className: social_X_module.storybookXIcon,
              icon: free_brands_svg_icons.NCc,
              mask: 'circle',
              size: '3x',
              color: '#000000',
            })
          )
        }
      X.displayName = 'X'
      try {
        ;(X.displayName = 'X'),
          (X.__docgenInfo = { description: '', displayName: 'X', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/organisms/social/X.tsx#X'
            ] = {
              docgenInfo: X.__docgenInfo,
              name: 'X',
              path: 'src/components/organisms/social/X.tsx#X',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function ownKeys(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                ;(0, defineProperty.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  )
                })
        }
        return e
      }
      const X_stories = {
        title: 'Social/X',
        component: X,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
        argTypes: {},
      }
      var Template = {}
      Template.parameters = _objectSpread(
        _objectSpread({}, Template.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Template$parameters = Template.parameters) ||
                void 0 === _Template$parameters
                ? void 0
                : _Template$parameters.docs
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: '{}' },
                null === (_Template$parameters2 = Template.parameters) ||
                  void 0 === _Template$parameters2 ||
                  null ===
                    (_Template$parameters2 = _Template$parameters2.docs) ||
                  void 0 === _Template$parameters2
                  ? void 0
                  : _Template$parameters2.source
              ),
            }
          ),
        }
      )
      const __namedExportsOrder = ['Template']
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/organisms/social/X.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js'
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js'
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.X_storybookXIcon__fWhmv{--fa-animation-duration: 0s;--fa-beat-scale: 0}.X_storybookXIcon__fWhmv:hover{--fa-animation-duration: 1s;--fa-beat-scale: 1.5}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/organisms/social/X.module.scss',
            ],
            names: [],
            mappings: 'AAAA,yBACE,2BAAA,CACA,kBAAA,CAEA,+BACE,2BAAA,CACA,oBAAA',
            sourcesContent: [
              '.storybookXIcon {\n  --fa-animation-duration: 0s;\n  --fa-beat-scale: 0;\n\n  &:hover {\n    --fa-animation-duration: 1s;\n    --fa-beat-scale: 1.5;\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            storybookXIcon: 'X_storybookXIcon__fWhmv',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
  },
])
