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
            .hasError(2, "Expected whitespace '\xB7' between 'function' and 'hello', but '\xB7\xB7' found.")
            .hasError(2, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
            .hasError(3, "Expected whitespace '\xB7' between 'return' and '+', but '\xB7\xB7\xB7' found.")
            .hasError(3, "Unexpected whitespace '\xB7\xB7' between '+' and '2'.")
            .hasError(5, "Expected whitespace '\xB7' between 'function' and '(', but '\xB7\xB7' found.")
            .hasError(5, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
            // try
            .hasError(7, "Expected whitespace '\xB7' between 'try' and '{', but '\xB7\xB7' found.")
            .hasError(8, "Expected whitespace '\xB7' between '}' and 'catch', but '\xB7\xB7' found.")
            .hasError(8, "Expected whitespace '\xB7' between 'catch' and '(', but '\xB7\xB7\xB7' found.")
            .hasError(8, "Unexpected whitespace '\xB7\xB7\xB7\xB7' between '(' and 'ex'.")
            .hasError(8, "Unexpected whitespace '\xB7\xB7\xB7\xB7\xB7' between 'ex' and ')'.")
            .hasError(8, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7\xB7\xB7...' found.")
            .hasError(11, "Expected whitespace '\xB7' between '}' and 'catch', but '' found.")
            // try
            .hasError(14, "Expected whitespace '\xB7' between 'throw' and 'test', but '\xB7\xB7\xB7' found.")
            // while
            .hasError(17, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7' found.")
            .hasError(17, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
            // do
            .hasError(20, "Expected whitespace '\xB7' between 'do' and '{', but '\xB7\xB7' found.")
            .hasError(21, "Expected whitespace '\xB7' between '}' and 'while', but '\xB7\xB7' found.")
            .hasError(21, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7\xB7' found.")
            .hasError(23, "Expected whitespace '\xB7' between '}' and 'while', but '' found.")
            // for
            .hasError(25, "Expected whitespace '\xB7' between 'for' and '(', but '\xB7\xB7' found.")
            .hasError(25, "Unexpected whitespace '\xB7\xB7' between 'i' and ';'.")
            .hasError(25, "Expected whitespace '\xB7' between ';' and 'i', but '\xB7\xB7\xB7' found.")
            .hasError(25, "Expected whitespace '\xB7' between 'i' and '<', but '\xB7\xB7' found.")
            .hasError(25, "Expected whitespace '\xB7' between '<' and '3', but '\xB7\xB7\xB7' found.")
            .hasError(25, "Unexpected whitespace '\xB7\xB7' between '3' and ';'.")
            .hasError(25, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
            .hasError(26, "Expected whitespace '\xB7' between ';' and 'i', but '' found.")
            .hasError(27, "Unexpected whitespace '\xB7\xB7' between ';' and ';'.")
            // var
            .hasError(25, "Expected whitespace '\xB7' between 'var' and 'i', but '\xB7\xB7\xB7' found.")
            .hasError(30, "Expected whitespace '\xB7' between 'var' and 'a', but '\xB7\xB7' found.")
            .hasError(30, "Expected whitespace '\xB7' between 'a' and '=', but '\xB7\xB7\xB7' found.")
            .hasError(30, "Expected whitespace '\xB7' between '=' and '2', but '\xB7\xB7\xB7\xB7' found.")
            .hasError(31, "Expected whitespace '\xB7' between 'c' and '=', but '\xB7\xB7\xB7' found.")
            .hasError(31, "Expected whitespace '\xB7' between '=' and '3', but '\xB7\xB7' found.")
            
        .end()
    ;
};
