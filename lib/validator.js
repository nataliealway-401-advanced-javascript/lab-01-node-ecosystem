'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * Is this a array?
 */
validator.isArray = (input) => {
  return typeof input === 'array';
};

/**
 * Is this a object?
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is this a function?
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * Is this a boolean?
 */
validator.isArray = (input) => {
  return typeof input === 'boolean';
};





