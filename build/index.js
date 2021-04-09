'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var px2rem = function (px) { return px / 16 + "rem"; };

var StyledButton = styled__default['default'].button(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background: #333;\n  color: #fff;\n  font-size: 20px;\n  border: none;\n  padding: 10px 20px;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  background: #333;\n  color: #fff;\n  font-size: 20px;\n  border: none;\n  padding: 10px 20px;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius && "border-radius: " + borderRadius + "px;";
}, function (_a) {
    var background = _a.background;
    return background && "background: " + background + ";";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize && "font-size: " + px2rem(fontSize) + ";";
}, function (_a) {
    var padding = _a.padding;
    return padding && "padding: " + padding + ";";
});
var Button = function (_a) {
    var text = _a.text, borderRadius = _a.borderRadius, background = _a.background, fontSize = _a.fontSize, padding = _a.padding;
    return (React__default['default'].createElement(StyledButton, { role: "button", borderRadius: borderRadius, background: background, fontSize: fontSize, padding: padding, "data-testid": "button" }, text));
};
var templateObject_1$8;

var StyledUIImage = styled__default['default'].img(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n    ", "\n    ", "\n"], ["\n    ", "\n    ", "\n"])), function (_a) {
    var width = _a.width;
    return width && "width: " + width + ";";
}, function (_a) {
    var height = _a.height;
    return height && "height: " + height + ";";
});
var UIImage = function (_a) {
    var url = _a.url, width = _a.width, height = _a.height;
    return React__default['default'].createElement(StyledUIImage, { width: width, height: height, src: url, alt: "image" });
};
var templateObject_1$7;

var getWindowDimensions = function () {
    var width = window.innerWidth, height = window.innerHeight;
    return {
        width: width,
        height: height
    };
};
var useWindowDimensions = function () {
    var _a = React.useState(getWindowDimensions()), windowDimensions = _a[0], setWindowDimensions = _a[1];
    React.useEffect(function () {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowDimensions;
};

var size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};
var device = {
    mobileS: "(min-width: " + size.mobileS + ")",
    mobileM: "(min-width: " + size.mobileM + ")",
    mobileL: "(min-width: " + size.mobileL + ")",
    tablet: "(min-width: " + size.tablet + ")",
    laptop: "(min-width: " + size.laptop + ")",
    laptopL: "(min-width: " + size.laptopL + ")",
    desktop: "(min-width: " + size.desktop + ")",
    desktopL: "(min-width: " + size.desktop + ")",
};
var isMobile = function () {
    var isMobile = useWindowDimensions().width <= 600;
    return isMobile;
};

var StyledContainer = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  @media ", " {\n    ", ";\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  @media ", " {\n    ", ";\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return padding && "padding: " + px2rem(padding) + ";";
}, function (_a) {
    var paddingLeft = _a.paddingLeft;
    return paddingLeft && "padding-left: " + px2rem(paddingLeft) + ";";
}, function (_a) {
    var paddingRight = _a.paddingRight;
    return paddingRight && "padding-right: " + px2rem(paddingRight) + ";";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor && "background-color: " + backgroundColor + ";";
}, function (_a) {
    var color = _a.color;
    return color && "color: " + color + ";";
}, function (_a) {
    var width = _a.width;
    return width && "width: " + width + ";";
}, function (_a) {
    var height = _a.height;
    return height && "height: " + height + ";";
}, function (_a) {
    var boxShadow = _a.boxShadow;
    return boxShadow && "box-shadow: -2px 5px 15px -2px #999;";
}, function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily && "font-family: " + fontFamily + ";";
}, function (_a) {
    var center = _a.center;
    return center && "display: flex; justify-content: center; align-items: center;";
}, function (_a) {
    var centerHorizontal = _a.centerHorizontal;
    return centerHorizontal && "display: flex; justify-content: center;";
}, function (_a) {
    var centerVertical = _a.centerVertical;
    return centerVertical && "display: flex; align-items: center;";
}, function (_a) {
    var border = _a.border;
    return border === "small" && "border: solid 1px;";
}, function (_a) {
    var border = _a.border;
    return border === "medium" && "border: solid 5px;";
}, function (_a) {
    var border = _a.border;
    return border === "large" && "border: solid 10px;";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius && "border-radius: " + borderRadius + "px;";
}, function (_a) {
    var borderColor = _a.borderColor;
    return borderColor && "border-color: " + borderColor + ";";
}, function (_a) {
    var horizontalCenterMobile = _a.horizontalCenterMobile;
    return horizontalCenterMobile && "display: flex; justify-content: center;";
}, function (_a) {
    var minHeight = _a.minHeight;
    return minHeight && "min-height: " + minHeight + ";";
}, device.tablet, function (_a) {
    var horizontalCenterMobile = _a.horizontalCenterMobile;
    return horizontalCenterMobile && "display: flex; justify-content: initial;";
});
var Container = function (_a) {
    var padding = _a.padding, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, children = _a.children, backgroundColor = _a.backgroundColor, color = _a.color, width = _a.width, height = _a.height, boxShadow = _a.boxShadow, fontFamily = _a.fontFamily, center = _a.center, centerHorizontal = _a.centerHorizontal, centerVertical = _a.centerVertical, borderRadius = _a.borderRadius, border = _a.border, borderColor = _a.borderColor, horizontalCenterMobile = _a.horizontalCenterMobile, minHeight = _a.minHeight;
    return (React__default['default'].createElement(StyledContainer, { padding: padding, paddingLeft: paddingLeft, paddingRight: paddingRight, backgroundColor: backgroundColor, color: color, width: width, height: height, boxShadow: boxShadow, fontFamily: fontFamily, center: center, centerHorizontal: centerHorizontal, centerVertical: centerVertical, border: border, borderRadius: borderRadius, borderColor: borderColor, horizontalCenterMobile: horizontalCenterMobile, minHeight: minHeight, "data-testid": "container" }, children));
};
var templateObject_1$6;

var StyledCopy = styled__default['default'].p(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily && "font-family: " + fontFamily + ";";
}, function (_a) {
    var color = _a.color;
    return color && "color: " + color + ";";
}, function (_a) {
    var italic = _a.italic;
    return italic && "font-style: italic;";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight && "font-weight: " + fontWeight + ";";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize && "font-size: " + px2rem(fontSize) + ";";
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight && "line-height: " + px2rem(lineHeight) + ";";
}, function (_a) {
    var letterSpacing = _a.letterSpacing;
    return letterSpacing && "letter-spacing: " + px2rem(letterSpacing) + ";";
});
var Copy = function (_a) {
    var children = _a.children, fontFamily = _a.fontFamily, color = _a.color, italic = _a.italic, fontWeight = _a.fontWeight, fontSize = _a.fontSize, letterSpacing = _a.letterSpacing, lineHeight = _a.lineHeight;
    return (React__default['default'].createElement(StyledCopy, { fontFamily: fontFamily, color: color, italic: italic, fontWeight: fontWeight, fontSize: fontSize, letterSpacing: letterSpacing, lineHeight: lineHeight, "data-testid": "copyContent" }, children));
};
var templateObject_1$5;

var StyledHeader = styled__default['default'].span(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  font-weight: normal;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  @media ", " {\n    ", "\n  }\n"], ["\n  font-weight: normal;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  @media ", " {\n    ", "\n  }\n"])), function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily && "font-family: " + fontFamily + ";";
}, function (_a) {
    var color = _a.color;
    return color && "color: " + color + ";";
}, function (_a) {
    var italic = _a.italic;
    return italic && "font-style: italic;";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight && "font-weight: " + fontWeight + ";";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize && "font-size: " + px2rem(fontSize) + ";";
}, function (_a) {
    var mobileFontSize = _a.mobileFontSize;
    return mobileFontSize && "font-size: " + px2rem(mobileFontSize) + ";";
}, function (_a) {
    var letterSpacing = _a.letterSpacing;
    return letterSpacing && "letter-spacing: " + px2rem(letterSpacing) + ";";
}, device.mobileL, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize && "font-size: " + px2rem(fontSize) + ";";
});
var BaseHeader = function (_a) {
    var level = _a.level, children = _a.children;
    return React.createElement("h" + level, {
        "data-testid": "header",
    }, children);
};
var UIHeader = function (_a) {
    var level = _a.level, children = _a.children, fontFamily = _a.fontFamily, color = _a.color, italic = _a.italic, fontWeight = _a.fontWeight, fontSize = _a.fontSize, mobileFontSize = _a.mobileFontSize, letterSpacing = _a.letterSpacing;
    return (React__default['default'].createElement(BaseHeader, { level: level || 1 },
        React__default['default'].createElement(StyledHeader, { fontFamily: fontFamily, color: color, italic: italic, fontWeight: fontWeight, fontSize: fontSize, mobileFontSize: mobileFontSize, letterSpacing: letterSpacing, "data-testid": "headerContent" }, children)));
};
var templateObject_1$4;

var AVConcertCard = function (_a) {
    var title = _a.title, text = _a.text, image = _a.image, font = _a.font, color = _a.color;
    return (React__default['default'].createElement(Container, { width: isMobile() ? '85vw' : '500px' },
        React__default['default'].createElement(UIHeader, { level: 3, fontFamily: font, color: color }, title),
        React__default['default'].createElement(UIImage, { width: "100%", height: "initial", url: image }),
        React__default['default'].createElement(Copy, { fontFamily: font, color: color }, text)));
};

var GridContainer$1 = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), function (_a) {
    var wrap = _a.wrap;
    return wrap && "flex-wrap: wrap;";
});
var GridCol = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex-basis: 100%;\n  ", ";\n  ", ";\n  \n\n  @media ", " {\n    ", ";\n    ", ";\n  }\n"], ["\n  flex-basis: 100%;\n  ", ";\n  ", ";\n  \n\n  @media ", " {\n    ", ";\n    ", ";\n  }\n"])), function (_a) {
    var mobileColumns = _a.mobileColumns;
    return mobileColumns && "flex-basis: " + getFlexBasis(mobileColumns) + "%;";
}, function (_a) {
    var order = _a.order;
    return order && "order: " + order;
}, device.tablet, function (_a) {
    var columns = _a.columns;
    return columns && "flex-basis: " + getFlexBasis(columns) + "%;";
}, function (_a) {
    var flexBasis = _a.flexBasis;
    return flexBasis && "flex-basis: " + flexBasis + "%;";
});
var getFlexBasis = function (columns) {
    return 100 / columns;
};
var Grid = function (_a) {
    var children = _a.children, columns = _a.columns, mobileColumns = _a.mobileColumns, wrap = _a.wrap;
    if (!children)
        return null;
    return (React__default['default'].createElement(GridContainer$1, { wrap: wrap, "data-testid": "grid" }, React__default['default'].Children.map(children, function (Child, i) {
        var _a, _b;
        var order = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.props['order'];
        var flexBasis = (_b = children[i]) === null || _b === void 0 ? void 0 : _b.props['flexBasis'];
        return (React__default['default'].createElement(GridCol, { columns: columns, mobileColumns: mobileColumns, order: order && order, flexBasis: flexBasis, "data-testid": "gridColumn" }, Child));
    })));
};
var templateObject_1$3, templateObject_2$1;

var StyledGridContainer = styled__default['default'](Container)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), function (_a) {
    var order = _a.order;
    return order && "order: " + order + ";";
});
var GridContainer = function (_a) {
    var children = _a.children, order = _a.order, flexBasis = _a.flexBasis, font = _a.font;
    return React__default['default'].createElement(StyledGridContainer, { fontFamily: font, order: order, flexBasis: flexBasis }, children);
};
var templateObject_1$2;

var StyledImage = styled__default['default'].img(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n\n  @media ", " {\n    ", "\n  }\n"], ["\n  ", "\n\n  @media ", " {\n    ", "\n  }\n"])), function (_a) {
    var mobileImageHeight = _a.mobileImageHeight;
    return mobileImageHeight && "height: " + mobileImageHeight + "; width: auto;";
}, device.tablet, function (_a) {
    var imageHeight = _a.imageHeight;
    return imageHeight && "height: " + imageHeight + "; width: auto;";
});
var StyledTwoColumnLayout = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var TwoColumnLayout = function (_a) {
    var title = _a.title, children = _a.children, image = _a.image, leftFlexBasis = _a.leftFlexBasis, rightFlexBasis = _a.rightFlexBasis, headerFontSize = _a.headerFontSize, mobileHeaderFontSize = _a.mobileHeaderFontSize, mobileImage = _a.mobileImage, font = _a.font, imageHeight = _a.imageHeight, mobileImageHeight = _a.mobileImageHeight, titleColor = _a.titleColor, titleLetterSpacing = _a.titleLetterSpacing, titleFontWeight = _a.titleFontWeight;
    var _b = React.useState(image), renderedImage = _b[0], setRenderedImage = _b[1];
    React.useEffect(function () {
        if (window.innerWidth < 601) {
            setRenderedImage(mobileImage);
        }
        else {
            setRenderedImage(image);
        }
    }, [window]);
    return (React__default['default'].createElement(StyledTwoColumnLayout, null,
        React__default['default'].createElement(Grid, { columns: 2, wrap: true },
            React__default['default'].createElement(GridContainer, { flexBasis: leftFlexBasis, font: font },
                title && React__default['default'].createElement(UIHeader, { fontSize: headerFontSize, mobileFontSize: mobileHeaderFontSize, color: titleColor, fontFamily: font, letterSpacing: titleLetterSpacing, fontWeight: titleFontWeight }, title),
                image && React__default['default'].createElement(StyledImage, { src: renderedImage, imageHeight: imageHeight, mobileImageHeight: mobileImageHeight, alt: "image" })),
            React__default['default'].createElement(GridContainer, { flexBasis: rightFlexBasis, font: font }, children))));
};
var templateObject_1$1, templateObject_2;

var StyledSpacer = styled__default['default'].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var height = _a.height;
    return height && "margin-bottom: " + height + "px;";
});
var Spacer = function (_a) {
    var height = _a.height;
    return React__default['default'].createElement(StyledSpacer, { height: height, "data-testid": "spacer" });
};
var templateObject_1;

exports.AVConcertCard = AVConcertCard;
exports.Button = Button;
exports.Container = Container;
exports.Copy = Copy;
exports.Grid = Grid;
exports.GridContainer = GridContainer;
exports.Spacer = Spacer;
exports.TwoColumnLayout = TwoColumnLayout;
exports.UIHeader = UIHeader;
exports.UIImage = UIImage;
exports.isMobile = isMobile;
//# sourceMappingURL=index.js.map
