import React from 'react';
import { expect } from 'chai';
import { render, Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlRaw, MjmlSection, MjmlHtmlAttribute, MjmlHtmlAttributes, MjmlSelector, MjmlColumn, MjmlText } from '../src';
describe('render()', function () {
  it('should render the HTML', function () {
    var email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlHead, null, /*#__PURE__*/React.createElement(MjmlTitle, null, "Title")), /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("p", null, "Paragraph"))));

    var _render = render(email),
        html = _render.html;

    expect(html).to.not.be.undefined;
    expect(html).to.contain('<!doctype html>');
    expect(html).to.contain('<title>Title</title>');
    expect(html).to.contain('<p>Paragraph</p>');
  });
  it('should throw an error if invalid markup is given', function () {
    var email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement("div", null, "Ooops!")));
    expect(function () {
      return render(email);
    }).to["throw"]("Element div doesn't exist or is not registered");
  });
  it('should not throw an error if soft validation level is passed', function () {
    var email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement("div", null, "Ooops!")));

    var _render2 = render(email, {
      validationLevel: 'soft',
      minify: false
    }),
        errors = _render2.errors;

    expect(errors.length).to.equal(1);
    expect(errors[0].message).to.contain("Element div doesn't exist or is not registered");
  });
  it('should render html attributes with custom selector', function () {
    var email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlHead, null, /*#__PURE__*/React.createElement(MjmlHtmlAttributes, null, /*#__PURE__*/React.createElement(MjmlSelector, {
      path: ".custom div"
    }, /*#__PURE__*/React.createElement(MjmlHtmlAttribute, {
      name: "data-id"
    }, "42")))), /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlSection, null, /*#__PURE__*/React.createElement(MjmlColumn, null, /*#__PURE__*/React.createElement(MjmlText, {
      "css-class": "custom"
    }, "Hello World!")))));

    var _render3 = render(email, {
      validationLevel: 'soft',
      minify: false
    }),
        html = _render3.html;

    expect(html).contains('<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;" data-id="42">Hello World!</div>');
  });
});