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
            // function
            .hasError(2, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7' found.")
            .hasError(3, "Expected whitespace '\xB7' between 'return' and '+', but '\xB7\xB7\xB7' found.")
            .hasError(3, "Unexpected whitespace '\xB7\xB7' between '+' and '2'.")
            // try
            .hasError(6, "Expected whitespace '\xB7' between 'try' and '{', but '\xB7\xB7' found.")
            .hasError(7, "Expected whitespace '\xB7' between '}' and 'catch', but '\xB7\xB7' found.")
            .hasError(7, "Expected whitespace '\xB7' between 'catch' and '(', but '\xB7\xB7\xB7' found.")
            .hasError(7, "Unexpected whitespace '\xB7\xB7\xB7\xB7' between '(' and 'ex'.")
            .hasError(7, "Unexpected whitespace '\xB7\xB7\xB7\xB7\xB7' between 'ex' and ')'.")
            .hasError(7, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7\xB7\xB7...' found.")
            .hasError(11, "Expected whitespace '\xB7' between '}' and 'catch', but '' found.")
            // while
            .hasError(17, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7' found.")
            .hasError(17, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
            // do
            .hasError(20, "Expected whitespace '\xB7' between 'do' and '{', but '\xB7\xB7' found.")
            .hasError(21, "Expected whitespace '\xB7' between '}' and 'while', but '\xB7\xB7' found.")
            .hasError(21, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7\xB7' found.")
            .hasError(23, "Expected whitespace '\xB7' between '}' and 'while', but '' found.")
         .end()
    ;
};
