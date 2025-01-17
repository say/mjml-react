function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import ReactDOMServer from 'react-dom/server';
import mjml2html from 'mjml';
import { renderToJSON } from './utils/render-to-json';
import { renderToJSON2 } from './utils/render-to-json2';
export { render, renderToMjml, renderToJSON, renderToJSON2 };
export { Mjml } from './mjml';
export { MjmlAccordion } from './mjml-accordion';
export { MjmlAccordionElement } from './mjml-accordion-element';
export { MjmlAccordionText } from './mjml-accordion-text';
export { MjmlAccordionTitle } from './mjml-accordion-title';
export { MjmlAll } from './mjml-all';
export { MjmlAttributes } from './mjml-attributes';
export { MjmlBody } from './mjml-body';
export { MjmlBreakpoint } from './mjml-breakpoint';
export { MjmlButton } from './mjml-button';
export { MjmlCarousel } from './mjml-carousel';
export { MjmlCarouselImage } from './mjml-carousel-image';
export { MjmlClass } from './mjml-class';
export { MjmlColumn } from './mjml-column';
export { MjmlDivider } from './mjml-divider';
export { MjmlFont } from './mjml-font';
export { MjmlGroup } from './mjml-group';
export { MjmlHead } from './mjml-head';
export { MjmlHero } from './mjml-hero';
export { MjmlHtmlAttributes } from './mjml-html-attributes';
export { MjmlHtmlAttribute } from './mjml-html-attribute';
export { MjmlImage } from './mjml-image';
export { MjmlNavbar } from './mjml-navbar';
export { MjmlNavbarLink } from './mjml-navbar-link';
export { MjmlPreview } from './mjml-preview';
export { MjmlRaw } from './mjml-raw';
export { MjmlSection } from './mjml-section';
export { MjmlSelector } from './mjml-selector';
export { MjmlSocial } from './mjml-social';
export { MjmlSocialElement } from './mjml-social-element';
export { MjmlSpacer } from './mjml-spacer';
export { MjmlStyle } from './mjml-style';
export { MjmlTable } from './mjml-table';
export { MjmlText } from './mjml-text';
export { MjmlTitle } from './mjml-title';
export { MjmlWrapper } from './mjml-wrapper';

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
  return mjml2html(renderToMjml(email), _objectSpread(_objectSpread({}, defaults), options));
}

function renderToMjml(email) {
  return ReactDOMServer.renderToStaticMarkup(email);
}