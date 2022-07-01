exports.__esModule = true;
exports.MjmlWrapper = exports.MjmlTitle = exports.MjmlText = exports.MjmlTable = exports.MjmlStyle = exports.MjmlSpacer = exports.MjmlSocialElement = exports.MjmlSocial = exports.MjmlSelector = exports.MjmlSection = exports.MjmlRaw = exports.MjmlPreview = exports.MjmlNavbarLink = exports.MjmlNavbar = exports.MjmlImage = exports.MjmlHtmlAttributes = exports.MjmlHtmlAttribute = exports.MjmlHero = exports.MjmlHead = exports.MjmlGroup = exports.MjmlFont = exports.MjmlDivider = exports.MjmlColumn = exports.MjmlClass = exports.MjmlCarouselImage = exports.MjmlCarousel = exports.MjmlButton = exports.MjmlBreakpoint = exports.MjmlBody = exports.MjmlAttributes = exports.MjmlAll = exports.MjmlAccordionTitle = exports.MjmlAccordionText = exports.MjmlAccordionElement = exports.MjmlAccordion = exports.Mjml = void 0;
exports.render = render;
exports.renderToMjml = renderToMjml;

const _server = _interopRequireDefault(require('react-dom/server'));

const _mjml = _interopRequireDefault(require('@asayinc/mjml'));

const _renderToJson = require('./utils/render-to-json');

exports.renderToJSON = _renderToJson.renderToJSON;

const _renderToJson2 = require('./utils/render-to-json2');

exports.renderToJSON2 = _renderToJson2.renderToJSON2;

const _mjml2 = require('./mjml');

exports.Mjml = _mjml2.Mjml;

const _mjmlAccordion = require('./mjml-accordion');

exports.MjmlAccordion = _mjmlAccordion.MjmlAccordion;

const _mjmlAccordionElement = require('./mjml-accordion-element');

exports.MjmlAccordionElement = _mjmlAccordionElement.MjmlAccordionElement;

const _mjmlAccordionText = require('./mjml-accordion-text');

exports.MjmlAccordionText = _mjmlAccordionText.MjmlAccordionText;

const _mjmlAccordionTitle = require('./mjml-accordion-title');

exports.MjmlAccordionTitle = _mjmlAccordionTitle.MjmlAccordionTitle;

const _mjmlAll = require('./mjml-all');

exports.MjmlAll = _mjmlAll.MjmlAll;

const _mjmlAttributes = require('./mjml-attributes');

exports.MjmlAttributes = _mjmlAttributes.MjmlAttributes;

const _mjmlBody = require('./mjml-body');

exports.MjmlBody = _mjmlBody.MjmlBody;

const _mjmlBreakpoint = require('./mjml-breakpoint');

exports.MjmlBreakpoint = _mjmlBreakpoint.MjmlBreakpoint;

const _mjmlButton = require('./mjml-button');

exports.MjmlButton = _mjmlButton.MjmlButton;

const _mjmlCarousel = require('./mjml-carousel');

exports.MjmlCarousel = _mjmlCarousel.MjmlCarousel;

const _mjmlCarouselImage = require('./mjml-carousel-image');

exports.MjmlCarouselImage = _mjmlCarouselImage.MjmlCarouselImage;

const _mjmlClass = require('./mjml-class');

exports.MjmlClass = _mjmlClass.MjmlClass;

const _mjmlColumn = require('./mjml-column');

exports.MjmlColumn = _mjmlColumn.MjmlColumn;

const _mjmlDivider = require('./mjml-divider');

exports.MjmlDivider = _mjmlDivider.MjmlDivider;

const _mjmlFont = require('./mjml-font');

exports.MjmlFont = _mjmlFont.MjmlFont;

const _mjmlGroup = require('./mjml-group');

exports.MjmlGroup = _mjmlGroup.MjmlGroup;

const _mjmlHead = require('./mjml-head');

exports.MjmlHead = _mjmlHead.MjmlHead;

const _mjmlHero = require('./mjml-hero');

exports.MjmlHero = _mjmlHero.MjmlHero;

const _mjmlHtmlAttributes = require('./mjml-html-attributes');

exports.MjmlHtmlAttributes = _mjmlHtmlAttributes.MjmlHtmlAttributes;

const _mjmlHtmlAttribute = require('./mjml-html-attribute');

exports.MjmlHtmlAttribute = _mjmlHtmlAttribute.MjmlHtmlAttribute;

const _mjmlImage = require('./mjml-image');

exports.MjmlImage = _mjmlImage.MjmlImage;

const _mjmlNavbar = require('./mjml-navbar');

exports.MjmlNavbar = _mjmlNavbar.MjmlNavbar;

const _mjmlNavbarLink = require('./mjml-navbar-link');

exports.MjmlNavbarLink = _mjmlNavbarLink.MjmlNavbarLink;

const _mjmlPreview = require('./mjml-preview');

exports.MjmlPreview = _mjmlPreview.MjmlPreview;

const _mjmlRaw = require('./mjml-raw');

exports.MjmlRaw = _mjmlRaw.MjmlRaw;

const _mjmlSection = require('./mjml-section');

exports.MjmlSection = _mjmlSection.MjmlSection;

const _mjmlSelector = require('./mjml-selector');

exports.MjmlSelector = _mjmlSelector.MjmlSelector;

const _mjmlSocial = require('./mjml-social');

exports.MjmlSocial = _mjmlSocial.MjmlSocial;

const _mjmlSocialElement = require('./mjml-social-element');

exports.MjmlSocialElement = _mjmlSocialElement.MjmlSocialElement;

const _mjmlSpacer = require('./mjml-spacer');

exports.MjmlSpacer = _mjmlSpacer.MjmlSpacer;

const _mjmlStyle = require('./mjml-style');

exports.MjmlStyle = _mjmlStyle.MjmlStyle;

const _mjmlTable = require('./mjml-table');

exports.MjmlTable = _mjmlTable.MjmlTable;

const _mjmlText = require('./mjml-text');

exports.MjmlText = _mjmlText.MjmlText;

const _mjmlTitle = require('./mjml-title');

exports.MjmlTitle = _mjmlTitle.MjmlTitle;

const _mjmlWrapper = require('./mjml-wrapper');

exports.MjmlWrapper = _mjmlWrapper.MjmlWrapper;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function render(email, options) {
  if (options === void 0) {
    options = {};
  }

  const defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict',
  };
  return (0, _mjml['default'])(
    renderToMjml(email),
    _objectSpread(_objectSpread({}, defaults), options),
  );
}

function renderToMjml(email) {
  return _server['default'].renderToStaticMarkup(email);
}
