"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resources = (function () {
  function resources() {
  }
  resources.phonecodes = null;
  resources.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i;
  resources.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  resources.url = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  resources.digit = /^\d+$/;
  resources.amount = /^[0-9]{0,15}(?:\.[0-9]{1,3})?$/;
  resources.percentage = /^[1-9][0-9]?$|^100$/;
  resources.digitAndDash = /^[0-9-]*$/;
  resources.digitAndChar = /^\w*\d*$/;
  resources.checkNumber = /^\d{0,8}$/;
  resources.ipv4 = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  resources.ipv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  resources.caPostcode = /^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][ -]?[0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][0-9]$/;
  resources.usPostcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return resources;
}());
exports.resources = resources;
var tel = (function () {
  function tel() {
  }
  tel.isPhone = function (str) {
    if (!str || str.length === 0 || str === '+') {
      return false;
    }
    if (str.charAt(0) !== '+') {
      return isDigitOnly(str);
    }
    else {
      var phoneNumber = str.substring(1);
      if (!resources.phonecodes) {
        return isDigitOnly(phoneNumber);
      }
      else {
        if (isDigitOnly(phoneNumber)) {
          for (var degit = 1; degit <= 3; degit++) {
            var countryCode = phoneNumber.substr(0, degit);
            if (countryCode in resources.phonecodes) {
              return true;
            }
          }
          return false;
        }
        else {
          return false;
        }
      }
    }
  };
  tel.isFax = function (fax) {
    return tel.isPhone(fax);
  };
  return tel;
}());
exports.tel = tel;
function isValidPassword(password) {
  return resources.password.test(password);
}
exports.isValidPassword = isValidPassword;
function isIPv6(ipv6) {
  if (!ipv6 || ipv6.length === 0) {
    return false;
  }
  return resources.ipv6.test(ipv6);
}
exports.isIPv6 = isIPv6;
function isIPv4(ipv4) {
  if (!ipv4 || ipv4.length === 0) {
    return false;
  }
  return resources.ipv4.test(ipv4);
}
exports.isIPv4 = isIPv4;
function isEmpty(str) {
  return (!str || str === '');
}
exports.isEmpty = isEmpty;
function isValidPattern(patternStr, modifier, value) {
  if (!isEmpty(patternStr)) {
    if (!modifier) {
      modifier = 'g';
    }
    var pattern = new RegExp(patternStr, modifier);
    return pattern.test(value);
  }
  else {
    return false;
  }
}
exports.isValidPattern = isValidPattern;
function isUrl(url) {
  return resources.url.test(url);
}
exports.isUrl = isUrl;
function isEmail(email) {
  if (!email || email.length === 0) {
    return false;
  }
  return resources.email.test(email);
}
exports.isEmail = isEmail;
function isPercentage(v) {
  return resources.percentage.test(v);
}
exports.isPercentage = isPercentage;
function isTime4(str) {
  if (!str || str.length !== 4) {
    return false;
  }
  if (isDigitOnly(str) === false) {
    return false;
  }
  var hours = parseInt(str.substring(0, 2), 10);
  var minutes = parseInt(str.substring(2), 10);
  if (hours > 24 || minutes > 59) {
    return false;
  }
  else {
    return true;
  }
}
exports.isTime4 = isTime4;
function isValidCode(str) {
  return resources.digitAndChar.test(str);
}
exports.isValidCode = isValidCode;
function isDashCode(str) {
  if (!str || str.length === 0) {
    return false;
  }
  var len = str.length - 1;
  for (var i = 0; i <= len; i++) {
    var chr = str.charAt(i);
    if (!((chr >= '0' && chr <= '9') || (chr >= 'A' && chr <= 'Z') || (chr >= 'a' && chr <= 'z') || chr === '-')) {
      return false;
    }
  }
  return true;
}
exports.isDashCode = isDashCode;
function isDigitOnly(v) {
  if (!v) {
    return false;
  }
  return resources.digit.test(v);
}
exports.isDigitOnly = isDigitOnly;
function isDashDigit(v) {
  return resources.digitAndDash.test(v);
}
exports.isDashDigit = isDashDigit;
function isCheckNumber(v) {
  return resources.checkNumber.test(v);
}
exports.isCheckNumber = isCheckNumber;
function isAmountNumber(v) {
  return resources.amount.test(v);
}
exports.isAmountNumber = isAmountNumber;
function isUSPostalCode(postcode) {
  return resources.usPostcode.test(postcode);
}
exports.isUSPostalCode = isUSPostalCode;
function isCAPostalCode(postcode) {
  return resources.caPostcode.test(postcode);
}
exports.isCAPostalCode = isCAPostalCode;