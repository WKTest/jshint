/**
 * Tests for all formatting-options.
 */

/*jshint boss: true, laxbreak: true, node: true */

var JSHINT = require('../jshint.js').JSHINT,
    helper = require("./testhelper").setup.testhelper,
    assert = require('assert'),
    fs     = require('fs');

/**
 * Braces
 */
exports.format_whitespace = function () {
    var src = fs.readFileSync(__dirname + "/fixtures/format/whitespace.js", "utf8");
    
    helper(JSHINT, src)
        .init(true, {checkformat: false})
        .init(false, {checkformat: true})
        .run()
            .hasError(2, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7' found.")
            .hasError(3, "Expected whitespace '\xB7' between 'return' and '+', but '\xB7\xB7\xB7' found.")
            .hasError(3, "Unexpected whitespace '\xB7\xB7' between '+' and '2'.")
            .hasError(6, "Expected whitespace '\xB7' between 'try' and '{', but '\xB7\xB7' found.")
            .hasError(10, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7\xB7\xB7...' found.")
        .end()
    ;
};
