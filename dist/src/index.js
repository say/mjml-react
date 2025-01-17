"use strict";

exports.__esModule = true;
exports.MjmlWrapper = exports.MjmlTitle = exports.MjmlText = exports.MjmlTable = exports.MjmlStyle = exports.MjmlSpacer = exports.MjmlSocialElement = exports.MjmlSocial = exports.MjmlSelector = exports.MjmlSection = exports.MjmlRaw = exports.MjmlPreview = exports.MjmlNavbarLink = exports.MjmlNavbar = exports.MjmlImage = exports.MjmlHtmlAttributes = exports.MjmlHtmlAttribute = exports.MjmlHero = exports.MjmlHead = exports.MjmlGroup = exports.MjmlFont = exports.MjmlDivider = exports.MjmlColumn = exports.MjmlClass = exports.MjmlCarouselImage = exports.MjmlCarousel = exports.MjmlButton = exports.MjmlBreakpoint = exports.MjmlBody = exports.MjmlAttributes = exports.MjmlAll = exports.MjmlAccordionTitle = exports.MjmlAccordionText = exports.MjmlAccordionElement = exports.MjmlAccordion = exports.Mjml = void 0;
exports.render = render;
exports.renderToMjml = renderToMjml;

var _server = _interopRequireDefault(require("react-dom/server"));

var _mjml = _interopRequireDefault(require("mjml"));

var _renderToJson = require("./utils/render-to-json");

exports.renderToJSON = _renderToJson.renderToJSON;

var _renderToJson2 = require("./utils/render-to-json2");

exports.renderToJSON2 = _renderToJson2.renderToJSON2;

var _mjml2 = require("./mjml");

exports.Mjml = _mjml2.Mjml;

var _mjmlAccordion = require("./mjml-accordion");

exports.MjmlAccordion = _mjmlAccordion.MjmlAccordion;

var _mjmlAccordionElement = require("./mjml-accordion-element");

exports.MjmlAccordionElement = _mjmlAccordionElement.MjmlAccordionElement;

var _mjmlAccordionText = require("./mjml-accordion-text");

exports.MjmlAccordionText = _mjmlAccordionText.MjmlAccordionText;

var _mjmlAccordionTitle = require("./mjml-accordion-title");

exports.MjmlAccordionTitle = _mjmlAccordionTitle.MjmlAccordionTitle;

var _mjmlAll = require("./mjml-all");

exports.MjmlAll = _mjmlAll.MjmlAll;

var _mjmlAttributes = require("./mjml-attributes");

exports.MjmlAttributes = _mjmlAttributes.MjmlAttributes;

var _mjmlBody = require("./mjml-body");

exports.MjmlBody = _mjmlBody.MjmlBody;

var _mjmlBreakpoint = require("./mjml-breakpoint");

exports.MjmlBreakpoint = _mjmlBreakpoint.MjmlBreakpoint;

var _mjmlButton = require("./mjml-button");

exports.MjmlButton = _mjmlButton.MjmlButton;

var _mjmlCarousel = require("./mjml-carousel");

exports.MjmlCarousel = _mjmlCarousel.MjmlCarousel;

var _mjmlCarouselImage = require("./mjml-carousel-image");

exports.MjmlCarouselImage = _mjmlCarouselImage.MjmlCarouselImage;

var _mjmlClass = require("./mjml-class");

exports.MjmlClass = _mjmlClass.MjmlClass;

var _mjmlColumn = require("./mjml-column");

exports.MjmlColumn = _mjmlColumn.MjmlColumn;

var _mjmlDivider = require("./mjml-divider");

exports.MjmlDivider = _mjmlDivider.MjmlDivider;

var _mjmlFont = require("./mjml-font");

exports.MjmlFont = _mjmlFont.MjmlFont;

var _mjmlGroup = require("./mjml-group");

exports.MjmlGroup = _mjmlGroup.MjmlGroup;

var _mjmlHead = require("./mjml-head");

exports.MjmlHead = _mjmlHead.MjmlHead;

var _mjmlHero = require("./mjml-hero");

exports.MjmlHero = _mjmlHero.MjmlHero;

var _mjmlHtmlAttributes = require("./mjml-html-attributes");

exports.MjmlHtmlAttributes = _mjmlHtmlAttributes.MjmlHtmlAttributes;

var _mjmlHtmlAttribute = require("./mjml-html-attribute");

exports.MjmlHtmlAttribute = _mjmlHtmlAttribute.MjmlHtmlAttribute;

var _mjmlImage = require("./mjml-image");

exports.MjmlImage = _mjmlImage.MjmlImage;

var _mjmlNavbar = require("./mjml-navbar");

exports.MjmlNavbar = _mjmlNavbar.MjmlNavbar;

var _mjmlNavbarLink = require("./mjml-navbar-link");

exports.MjmlNavbarLink = _mjmlNavbarLink.MjmlNavbarLink;

var _mjmlPreview = require("./mjml-preview");

exports.MjmlPreview = _mjmlPreview.MjmlPreview;

var _mjmlRaw = require("./mjml-raw");

exports.MjmlRaw = _mjmlRaw.MjmlRaw;

var _mjmlSection = require("./mjml-section");

exports.MjmlSection = _mjmlSection.MjmlSection;

var _mjmlSelector = require("./mjml-selector");

exports.MjmlSelector = _mjmlSelector.MjmlSelector;

var _mjmlSocial = require("./mjml-social");

exports.MjmlSocial = _mjmlSocial.MjmlSocial;

var _mjmlSocialElement = require("./mjml-social-element");

exports.MjmlSocialElement = _mjmlSocialElement.MjmlSocialElement;

var _mjmlSpacer = require("./mjml-spacer");

exports.MjmlSpacer = _mjmlSpacer.MjmlSpacer;

var _mjmlStyle = require("./mjml-style");

exports.MjmlStyle = _mjmlStyle.MjmlStyle;

var _mjmlTable = require("./mjml-table");

exports.MjmlTable = _mjmlTable.MjmlTable;

var _mjmlText = require("./mjml-text");

exports.MjmlText = _mjmlText.MjmlText;

var _mjmlTitle = require("./mjml-title");

exports.MjmlTitle = _mjmlTitle.MjmlTitle;

var _mjmlWrapper = require("./mjml-wrapper");

exports.MjmlWrapper = _mjmlWrapper.MjmlWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function render(email, options) {
  if (options === void 0) {
    options = {};
  }

  var defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict'
  };
  return (0, _mjml["default"])(renderToMjml(email), _objectSpread(_objectSpread({}, defaults), options));
}

function renderToMjml(email) {
  return _server["default"].renderToStaticMarkup(email);
}