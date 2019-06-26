(function () {
    "use strict";

    const EVENT_SCROLL = 'scroll';
    const COMPONENT_ID = 'scrollBar';
    const CSS_STYLE = 'style';
    const CSS_PARAM = 'width:';
    const CSS_PERCENTAGE = '%'; /* Could be used or not */

    var scrollBar = document.getElementById(COMPONENT_ID);

    var body = document.body
    var html = document.documentElement;

    var height = getDocumentHeight();

    window.addEventListener(EVENT_SCROLL, function () {
        var percentage = calculateWidth(height);
        scrollBar.setAttribute(CSS_STYLE, CSS_PARAM + percentage + CSS_PERCENTAGE);
    });

    function getDocumentHeight() {
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

    function calculateWidth() {
        return (html.scrollTop / (height - window.innerHeight)) * 100;
    }
})();
