"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var _src = require("../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('render()', function () {
  it('should render the HTML', function () {
    var email = /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlTitle, null, "Title")), /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("p", null, "Paragraph"))));

    var _render = (0, _src.render)(email),
        html = _render.html;

    (0, _chai.expect)(html).to.not.be.undefined;
    (0, _chai.expect)(html).to.contain('<!doctype html>');
    (0, _chai.expect)(html).to.contain('<title>Title</title>');
    (0, _chai.expect)(html).to.contain('<p>Paragraph</p>');
  });
  it('should throw an error if invalid markup is given', function () {
    var email = /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement("div", null, "Ooops!")));

    (0, _chai.expect)(function () {
      return (0, _src.render)(email);
    }).to["throw"]("Element div doesn't exist or is not registered");
  });
  it('should not throw an error if soft validation level is passed', function () {
    var email = /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement("div", null, "Ooops!")));

    var _render2 = (0, _src.render)(email, {
      validationLevel: 'soft',
      minify: false
    }),
        errors = _render2.errors;

    (0, _chai.expect)(errors.length).to.equal(1);
    (0, _chai.expect)(errors[0].message).to.contain("Element div doesn't exist or is not registered");
  });
  it('should render html attributes with custom selector', function () {
    var email = /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlHtmlAttributes, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlSelector, {
      path: ".custom div"
    }, /*#__PURE__*/_react["default"].createElement(_src.MjmlHtmlAttribute, {
      name: "data-id"
    }, "42")))), /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlSection, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlText, {
      "css-class": "custom"
    }, "Hello World!")))));

    var _render3 = (0, _src.render)(email, {
      validationLevel: 'soft',
      minify: false
    }),
        html = _render3.html;

    (0, _chai.expect)(html).contains('<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;" data-id="42">Hello World!</div>');
  });
});