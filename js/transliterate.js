/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var consonants = /[\u05D0-\u05F2,\uFB20-\uFB4F]/;
var ligature = /[\u05C1-\u05C2]/;
var dagesh = /[\u05BC,\u05BF]/; // includes rafe
var vowels = /[\u05B0-\u05BB,\u05C7]/;
var accents = /[\u0590-\u05AF,\u05BD-\u05BE,\u05C0,\u05C3]/;
var Char = /** @class */ (function () {
    function Char(char) {
        this.char = char;
        this.posIndex = this.findPos(this.char);
    }
    Char.prototype.findPos = function (char) {
        if (consonants.test(char)) {
            return 0;
        }
        if (ligature.test(char)) {
            return 1;
        }
        if (dagesh.test(char)) {
            return 2;
        }
        if (vowels.test(char)) {
            return 3;
        }
        if (accents.test(char)) {
            return 4;
        }
        return 10;
    };
    return Char;
}());
exports.sequence = function (text) {
    var splits = /(?=[\u05D0-\u05F2, \uFB20-\uFB4F])/;
    var charClusters = text.split(splits);
    var mapClusters = charClusters.map(function (cluster) {
        return __spread(cluster).map(function (char) { return new Char(char); });
    });
    var sortClusters = mapClusters.map(function (cluster) { return cluster.sort(function (a, b) { return a.posIndex - b.posIndex; }); });
    var redClusters = sortClusters.map(function (cluster) { return cluster.reduce(function (a, c) { return a + c.char; }, ""); });
    var seqText = redClusters.reduce(function (a, c) { return a + c; });
    return seqText;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterateMap = {
    // # consonants
    // ## BMP
    א: "ʾ",
    ב: "b",
    ג: "g",
    ד: "d",
    ה: "h",
    ו: "w",
    ז: "z",
    ח: "ḥ",
    ט: "ṭ",
    י: "y",
    כ: "k",
    ך: "k",
    ל: "l",
    מ: "m",
    ם: "m",
    נ: "n",
    ן: "n",
    ס: "s",
    ע: "ʿ",
    פ: "p",
    ף: "p",
    צ: "ṣ",
    ץ: "ṣ",
    ק: "q",
    ר: "r",
    ש: "š",
    ת: "t",
    // ## Alphabetic Presentation Block
    ﬠ: "ʿ",
    ﬡ: "ʾ",
    ﬢ: "d",
    ﬣ: "h",
    ﬤ: "k",
    ﬥ: "l",
    ﬦ: "m",
    ﬧ: "r",
    ﬨ: "t",
    אַ: "ʾa",
    אָ: "ʾā",
    אּ: "\u02BE\u05BC",
    בּ: "b\u05BC",
    בֿ: "b",
    גּ: "g\u05BC",
    דּ: "d\u05BC",
    הּ: "h\u05BC",
    וּ: "w\u05BC",
    וֹ: "wō",
    זּ: "z\u05BC",
    טּ: "\u1E6D\u05BC",
    יּ: "y\u05BC",
    כּ: "k\u05BC",
    כֿ: "k",
    ךּ: "k\u05BC",
    לּ: "l\u05BC",
    מּ: "m\u05BC",
    נּ: "n\u05BC",
    סּ: "s\u05BC",
    פּ: "p\u05BC",
    פֿ: "p",
    ףּ: "p\u05BC",
    צּ: "\u1E63\u05BC",
    קּ: "q\u05BC",
    רּ: "r\u05BC",
    // '\u05C1':'8',
    // '\u05C2':'7',
    שּ: "\u0161\u05BC",
    שׁ: "š",
    שּׁ: "\u0161\u05BC",
    שׂ: "ś",
    שּׂ: "\u015B\u05BC",
    תּ: "t\u05BC",
    // # vowels
    "\u05B0": "ǝ",
    "\u05B1": "ĕ",
    "\u05B2": "ă",
    "\u05B3": "ŏ",
    "\u05B4": "i",
    "\u05B5": "ē",
    "\u05B6": "e",
    "\u05B7": "a",
    "\u05B8": "ā",
    "\u05B9": "ō",
    "\u05BA": "ō",
    "\u05BB": "u",
    // '\u05BC': '9', // dagesh
    //   "\u05BD": "", // metheg
    "\u05BE": "-",
    "\u05BF": "",
    "\u05C7": "o",
    // # extra marks and cantillations
    "\u0591": "",
    "\u0592": "",
    "\u0593": "",
    "\u0594": "",
    "\u0595": "",
    "\u0596": "",
    "\u0597": "",
    "\u0598": "",
    "\u0599": "",
    "\u059A": "",
    "\u059B": "",
    "\u059C": "",
    "\u059D": "",
    "\u059E": "",
    "\u059F": "",
    "\u05A0": "",
    "\u05A1": "",
    "\u05A2": "",
    "\u05A3": "",
    "\u05A4": "",
    "\u05A5": "",
    "\u05A6": "",
    "\u05A7": "",
    "\u05A8": "",
    "\u05A9": "",
    "\u05AA": "",
    "\u05AB": "",
    "\u05AC": "",
    "\u05AD": "",
    "\u05AE": "",
    "\u05AF": "",
    "\u05C0": "",
    "\u05C1": "",
    "\u05C3": "",
    "\u05C4": "",
    "\u05C5": ""
};
exports.removeVowels = {
    // alphabetic presentation block
    שּׁ: "\uFB2A",
    שּׂ: "\uFB2B",
    אּ: "א",
    בּ: "ב",
    גּ: "ג",
    דּ: "ד",
    הּ: "ה",
    וּ: "ו",
    זּ: "ז",
    טּ: "ט",
    יּ: "י",
    ךּ: "ך",
    כּ: "כ",
    לּ: "ל",
    מּ: "מ",
    הּ0: "נ",
    הּ1: "ס",
    הּ3: "ף",
    הּ4: "פ",
    הּ6: "צ",
    הּ7: "ק",
    הּ8: "ר",
    הּ9: "ש",
    הּA: "ת",
    הּB: "ו",
    הּC: "ב",
    הּD: "כ",
    הּE: "פ",
    // vowels
    "\u05B0": "",
    "\u05B1": "",
    "\u05B2": "",
    "\u05B3": "",
    "\u05B4": "",
    "\u05B5": "",
    "\u05B6": "",
    "\u05B7": "",
    "\u05B8": "",
    "\u05B9": "",
    "\u05BA": "",
    "\u05BB": "",
    "\u05BC": "",
    "\u05BD": "",
    // '\u05BE':'\u05BE', // maqqef
    "\u05BF": "\u05BF",
    "\u05C7": "",
    // extra marks and cantillations
    "\u0591": "",
    "\u0592": "",
    "\u0593": "",
    "\u0594": "",
    "\u0595": "",
    "\u0596": "",
    "\u0597": "",
    "\u0598": "",
    "\u0599": "",
    "\u059A": "",
    "\u059B": "",
    "\u059C": "",
    "\u059D": "",
    "\u059E": "",
    "\u059F": "",
    "\u05A0": "",
    "\u05A1": "",
    "\u05A2": "",
    "\u05A3": "",
    "\u05A4": "",
    "\u05A5": "",
    "\u05A6": "",
    "\u05A7": "",
    "\u05A8": "",
    "\u05A9": "",
    "\u05AA": "",
    "\u05AB": "",
    "\u05AC": "",
    "\u05AD": "",
    "\u05AE": "",
    "\u05AF": "",
    "\u05C0": "",
    "\u05C1": "",
    "\u05C2": "",
    "\u05C3": "",
    "\u05C4": "",
    "\u05C5": "",
    "\u05F3": "",
    "\u05F4": "" //gereshayim
};
exports.removeCantillation = {
    // extra marks and cantillations
    "\u0591": "",
    "\u0592": "",
    "\u0593": "",
    "\u0594": "",
    "\u0595": "",
    "\u0596": "",
    "\u0597": "",
    "\u0598": "",
    "\u0599": "",
    "\u059A": "",
    "\u059B": "",
    "\u059C": "",
    "\u059D": "",
    "\u059E": "",
    "\u059F": "",
    "\u05A0": "",
    "\u05A1": "",
    "\u05A2": "",
    "\u05A3": "",
    "\u05A4": "",
    "\u05A5": "",
    "\u05A6": "",
    "\u05A7": "",
    "\u05A8": "",
    "\u05A9": "",
    "\u05AA": "",
    "\u05AB": "",
    "\u05AC": "",
    "\u05AD": "",
    "\u05AE": "",
    "\u05AF": "",
    "\u05C0": "",
    "\u05C3": "",
    "\u05C4": "",
    "\u05C5": "",
    "\u05F3": "",
    "\u05F4": "" //gereshayim
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transliterate_1 = __webpack_require__(3);
exports.transliterate = transliterate_1.transliterate;
var sequence_1 = __webpack_require__(0);
exports.sequence = sequence_1.sequence;
var remove_1 = __webpack_require__(6);
exports.remove = remove_1.remove;


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sequence_1 = __webpack_require__(0);
var titForTat_1 = __webpack_require__(4);
var testEach_1 = __webpack_require__(5);
exports.transliterate = function (text, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isSequenced, isSequenced = _c === void 0 ? true : _c, _d = _b.qametsQatan, qametsQatan = _d === void 0 ? false : _d, _e = _b.isSimple, isSimple = _e === void 0 ? false : _e;
    var newSeq = isSequenced ? sequence_1.sequence(text) : text;
    var titTat = titForTat_1.titForTat(newSeq);
    var array = titTat.split(" ");
    var modArray = testEach_1.testEach(array, { qametsQatan: qametsQatan, isSimple: isSimple });
    var transliteration = modArray.join(" ");
    return transliteration;
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hebCharsTrans_1 = __webpack_require__(1);
exports.titForTat = function (text) {
    return __spread(text).map(function (char) { return (char in hebCharsTrans_1.transliterateMap ? hebCharsTrans_1.transliterateMap[char] : char); }).reduce(function (a, c) { return a + c; });
};


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var inputBtn = document.querySelector('#input_button');
var input = document.querySelector('#input');
var output = document.querySelector('#output');
var simpleBtn = document.querySelector('#isSimple');
var qametsBtn = document.querySelector('#qametsQatan');
var qametsInfo = document.querySelector('#qametsInfo');
var heb = __webpack_require__(2);
var transliterate = heb.transliterate;

simpleBtn.addEventListener('change', function (e) {
    if (e.target.checked) {
        output.placeholder = 'ivrit';
    } else {
        output.placeholder = 'ʿibrît';
    }
});

// start off hidden
qametsInfo.hidden = true;
qametsBtn.addEventListener('change', function (e) {
    if (e.target.checked) {
        qametsInfo.hidden = false;
    } else {
        qametsInfo.hidden = true;
    }
});

inputBtn.addEventListener('click', function () {
    var qametsQatanVal = qametsBtn.checked;
    var isSimpleVal = simpleBtn.checked;
    var hebText = input.value;
    var transText = transliterate(hebText, { isSequenced: true, qametsQatan: qametsQatanVal, isSimple: isSimpleVal });
    output.value = transText;
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var changeElementSplit = function (input, split, join) { return input.split(split).join(join); };
var changeElementSubstr = function (input, index, join) {
    return input.substring(0, index) + join + input.substring(index + 1);
};
var qametsQatanDict = {
    // for certain inflected and contextual occurences
    ḥāqǝkā: "ḥoqkā",
    ḥāqǝkem: "ḥoqkem",
    wayּāqām: "wayyāqom",
    wayּāqāֽm: "wayyāqom",
    watּāqām: "wattāqom",
    watּāqāֽm: "wattāqom",
    tּākǝniyt: "toknît",
    hadּārǝbāֽn: "haddorbān",
    lǝʾākǝlāֽh: "lǝʾoklāh",
    haqּārǝbāֽn: "haqqorbān",
    ḥāpǝniy: "ḥopnî",
    ʿārǝpּāh: "ʿorpāh",
    ḥāpǝraʿ: "ḥopraʿ"
};
var academicRules = function (array, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.qametsQatan, qametsQatan = _c === void 0 ? false : _c, _d = _b.isSimple, isSimple = _d === void 0 ? false : _d;
    return array.map(function (element) {
        // eval("console").log(element);
        // tests for Qamets qatan vs gadol
        if (qametsQatan) {
            // tests kol
            if (/k\u05BCāl-/.test(element)) {
                element = changeElementSplit(element, /k\u05BCāl-/, "k\u05BCol-");
            }
            else if (/kāl-/.test(element)) {
                element = changeElementSplit(element, /kāl-/, "kol-");
            }
            if (qametsQatanDict[element]) {
                element = qametsQatanDict[element];
            }
            else if (/ḥāq-/.test(element)) {
                element = changeElementSplit(element, /ḥāq-/, "ḥoq-");
            }
            else if (/ḥākǝmāh$/m.test(element)) {
                element = changeElementSplit(element, /ḥākǝmāh$/m, "ḥokmāh");
            }
            else if (/ḥākǝmāt/.test(element)) {
                element = changeElementSplit(element, /ḥākǝmāt/, "ḥokmāt");
            }
            else if (/ḥākǝmat/.test(element)) {
                element = changeElementSplit(element, /ḥākǝmat/, "ḥokmat");
            }
            else if (/ʾāzǝn/.test(element)) {
                element = changeElementSplit(element, /ʾāzǝn/, "ʾozn");
            }
            else if (/tּākǝniֽyt/.test(element)) {
                // only for Ezk 43:10!
                element = changeElementSplit(element, /tּākǝniֽyt/, "toknît");
            }
            else if (/ḥānּēniy/.test(element)) {
                element = changeElementSplit(element, /ḥānּēniy/, "ḥonnēnî");
            }
            else if (/ʾākǝl/.test(element)) {
                element = changeElementSplit(element, /ʾākǝl/, "ʾokl");
            }
            else if (/qārǝb\u05BCān/.test(element)) {
                element = changeElementSplit(element, /qārǝb\u05BCān/, "qorbān");
            }
            else if (/qārǝb\u05BCan/.test(element)) {
                element = changeElementSplit(element, /qārǝb\u05BCan/, "qorban");
            }
            else if (/qārǝb\u05BCǝn/.test(element)) {
                element = changeElementSplit(element, /qārǝb\u05BCǝn/, "qorbǝn");
            }
            else if (/dārǝbān/.test(element)) {
                // in case this word out of context is used
                element = changeElementSplit(element, /dārǝbān/, "dorbān");
            }
            else if (/qādǝqōd/.test(element)) {
                element = changeElementSplit(element, /qādǝqōd/, "qodqōd");
            }
            else if (/qādǝqŏd/.test(element)) {
                element = changeElementSplit(element, /qādǝqŏd/, "qodqŏd");
            }
            else if (/qādǝš/.test(element)) {
                element = changeElementSplit(element, /qādǝš/, "qodš");
            }
            else if (/šārǝš/.test(element)) {
                element = changeElementSplit(element, /šārǝš/, "šorš");
            }
            else if (/šārāš/.test(element)) {
                element = changeElementSplit(element, /šārāš/, "šorāš");
            }
            else if (/š\u05BCārāš/.test(element)) {
                element = changeElementSplit(element, /š\u05BCārāš/, "ššorāš");
            }
            else if (/ʾābǝdan/.test(element)) {
                element = changeElementSplit(element, /ʾābǝdan/, "ʾobdan");
            }
            else if (/ʾābǝn/.test(element)) {
                element = changeElementSplit(element, /ʾābǝn/, "ʾobn");
            }
            else if (/ʾāpǝn/.test(element)) {
                element = changeElementSplit(element, /ʾāpǝn/, "ʾopn");
            }
            else if (/ʿāpǝniy/.test(element)) {
                element = changeElementSplit(element, /ʿāpǝniy/, "ʿopnî");
            }
            else if (/ʿāpǝrāh/.test(element)) {
                element = changeElementSplit(element, /ʿāpǝrāh/, "ʿoprāh");
            }
            else if (/ʿāpǝrāt/.test(element)) {
                element = changeElementSplit(element, /ʿāpǝrāt/, "ʿoprāt");
            }
            else if (/ḥāpǝšiy/.test(element)) {
                element = changeElementSplit(element, /ḥāpǝšiy/, "ḥopšî");
            }
            else if (/ḥāpǝn/.test(element)) {
                element = changeElementSplit(element, /ḥāpǝn/, "ḥopn");
            }
            else if (/ḥāpǝšiyt/.test(element)) {
                element = changeElementSplit(element, /ḥāpǝšiyt/, "ḥopšît");
            }
            else if (/ŏ/.test(element)) {
                // tests for certain rules
                var pos = element.indexOf("ŏ");
                if (element.charAt(pos - 2) === "ā") {
                    element = changeElementSubstr(element, pos - 2, "o");
                }
            }
        }
        // remove metheg that is left in for checking qamets qatan vs gadol
        if (/\u05BD/.test(element)) {
            element = changeElementSplit(element, /\u05BD/, "");
        }
        // Tests for shin non-ligatures
        if (element.includes("\u05C1")) {
            element = changeElementSplit(element, /\u05C1/, "");
        }
        // Tests for sin non-ligatures
        if (element.includes("\u05C2")) {
            element = changeElementSplit(element, /š\u05C2/, "ś");
        }
        // Tests for hiriq-yod mater
        if (/iy(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/.test(element)) {
            element = changeElementSplit(element, /iy(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/, "î");
        }
        // Tests for tsere-yod mater
        if (/ēy(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/.test(element)) {
            element = changeElementSplit(element, /ēy(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/, "ê");
        }
        // Tests for seghol-yod mater
        if (/ey(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/.test(element)) {
            element = changeElementSplit(element, /ey(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|ō|u|\u05BC)/, "ê");
        }
        // Tests for waw as a holem-mater
        if (/wō/.test(element)) {
            // this is a workaround for lack of lookbehind support
            var rev = __spread(element).reverse().reduce(function (a, c) { return a + c; });
            if (/ōw(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|u)/.test(rev)) {
                rev = changeElementSplit(rev, /ōw(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|u)/, "ô");
            }
            element = __spread(rev).reverse().reduce(function (a, c) { return a + c; });
        }
        // Tests for waw as a holem-mater
        // this will catch a waw as a consonant like - C+ō+w+V+C > CōwVC
        if (/ōw(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|u|\u05BC)/.test(element)) {
            element = changeElementSplit(element, /ōw(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|u|\u05BC)/, "ô");
        }
        // Tests for waw as a shureq-mater
        if (/w\u05BC(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|â|o|ô|u|û)/.test(element)) {
            element = changeElementSplit(element, /w\u05BC(?!ǝ|ĕ|ă|ŏ|i|ē|e|a|ā|â|o|ô|u|û)/, "û");
        }
        // Tests for He as a final mater
        /* if using simple version, ēh remains so that it is passed into simpleRules
        if not, then there would be now way to distinguish between ê from tsere-yod vs he-mater */
        if (!isSimple) {
            if (/āh(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /āh(?=$|-)/m, "â");
            }
            else if (/ēh(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /ēh(?=$|-)/m, "ê");
            }
            else if (/eh(?=$|-)/m.test(element)) {
                element = changeElementSplit(element, /eh(?=$|-)/m, "ê");
            }
        }
        // tests for he with mappiq or furtive patach
        if (/h\u05BC$/m.test(element)) {
            element = changeElementSplit(element, /h\u05BC$/m, "h");
        }
        else if (/h\u05BCa$/m.test(element)) {
            element = changeElementSplit(element, /h\u05BCa$/m, "ah");
        }
        else if (/ḥa$/m.test(element)) {
            element = changeElementSplit(element, /ḥa$/m, "aḥ");
        }
        else if (/ʿa$/m.test(element)) {
            element = changeElementSplit(element, /ʿa$/m, "aʿ");
        }
        // Tests if a shewa exists in the element
        if (element.includes("ǝ")) {
            var pos = element.indexOf("ǝ");
            while (pos !== -1) {
                // shewa at the end of a word
                if (element.charAt(element.length - 1) === "ǝ") {
                    element = changeElementSubstr(element, element.length - 1, "");
                }
                // if the shewa is preceded by a short vowel
                if (/ǝ|a|e|i|u|o/.test(element.charAt(pos - 2))) {
                    // if it SQeNeM LeVY letters in wayyiqtol forms
                    if (/s|ṣ|š|ś|q|n|m|l|w|y/.test(element.charAt(pos - 1)) && /w/.test(element.charAt(pos - 3))) {
                        element;
                    }
                    else {
                        element = changeElementSubstr(element, pos, "");
                    }
                }
                pos = element.indexOf("ǝ", pos + 1);
            }
            element = element;
        }
        // tests for a doubling dagesh
        if (element.includes("\u05BC")) {
            var elArray_1 = element.split("");
            elArray_1.forEach(function (e, i) {
                if (e === "\u05BC" && /a|ā|e|ē|i|î|u|û|o|ō|ô/.test(elArray_1[i - 2]) && Boolean(elArray_1[i - 2])) {
                    elArray_1[i] = elArray_1[i - 1];
                }
            });
            element = elArray_1.join("");
        }
        //  tests for yhwh
        if (element === "yǝhwâ") {
            element = "yhwh";
        }
        else if (element.includes("yǝhwâ")) {
            element = changeElementSplit(element, /yǝhwâ/, "yhwh");
        }
        else if (element.includes("yhwâ")) {
            element = changeElementSplit(element, /yhwâ/, "yhwh");
        }
        // removes any remaining dageshes
        if (/\u05BC/.test(element)) {
            element = changeElementSplit(element, /\u05BC/, "");
        }
        return element;
    }); // map
};
var simpleRules = function (array) {
    return array.map(function (element) {
        // remove aleph half-ring
        if (/ʾ/.test(element)) {
            element = changeElementSplit(element, /ʾ/, "");
        }
        // remove ayin half-ring
        if (/ʿ/.test(element)) {
            element = changeElementSplit(element, /ʿ/, "");
        }
        // simplify he-mater
        if (/āh$/.test(element)) {
            element = changeElementSplit(element, /āh$/, "ah");
        }
        else if (/ēh$/.test(element)) {
            element = changeElementSplit(element, /ēh$/, "eh");
        }
        // simplify hiriq-yod
        if (/î/.test(element)) {
            element = changeElementSplit(element, /î/, "i");
        }
        // simplify tsere-yod / seghol-yod
        if (/ê/.test(element)) {
            element = changeElementSplit(element, /ê/, "e");
        }
        // simplify holem-waw
        if (/ô/.test(element)) {
            element = changeElementSplit(element, /ô/, "o");
        }
        // simplify shureq
        if (/û/.test(element)) {
            element = changeElementSplit(element, /û/, "u");
        }
        // remove doubling of shin
        if (/šš/.test(element)) {
            element = changeElementSplit(element, /šš/, "š");
        }
        // remove doubling of tsade
        if (/ṣṣ/.test(element)) {
            element = changeElementSplit(element, /ṣṣ/, "ṣ");
        }
        // simplify long-a
        if (/ā/.test(element)) {
            element = changeElementSplit(element, /ā/, "a");
        }
        // simplify short-a
        if (/ă/.test(element)) {
            element = changeElementSplit(element, /ă/, "a");
        }
        // simplify long-e
        if (/ē/.test(element)) {
            element = changeElementSplit(element, /ē/, "e");
        }
        // simplify short-e
        if (/ĕ/.test(element)) {
            element = changeElementSplit(element, /ĕ/, "e");
        }
        // simplify long-i
        if (/ī/.test(element)) {
            element = changeElementSplit(element, /ī/, "i");
        }
        // simplify long-o
        if (/ō/.test(element)) {
            element = changeElementSplit(element, /ō/, "o");
        }
        // simplify short-o
        if (/ŏ/.test(element)) {
            element = changeElementSplit(element, /ŏ/, "o");
        }
        // simplify long-u
        if (/ū/.test(element)) {
            element = changeElementSplit(element, /ū/, "u");
        }
        // simplify shewa
        if (/ǝ/.test(element)) {
            element = changeElementSplit(element, /ǝ/, "e");
        }
        // spirantized cons
        /* Since the negative lookbehind regex is not well supported,
        the string is reversed and then the regex searches the pattern of
        the consonant that is followed by a vowel (which preceded it in the original direction)
        */
        var rev = __spread(element).reverse().reduce(function (a, c) { return a + c; }, "");
        // change b > v
        if (/b/.test(element) && !/bb/.test(element)) {
            if (/b(?=[aeiou])/.test(rev)) {
                rev = changeElementSplit(rev, /b(?=[aeiou])/, "v");
            }
        }
        // change p > f
        if (/p/.test(element) && !/pp/.test(element)) {
            if (/p(?=[aeiou])/.test(rev)) {
                rev = changeElementSplit(rev, /p(?=[aeiou])/, "f");
            }
        }
        // change k > kh
        if (/k/.test(element) && !/kk/.test(element)) {
            if (/k(?=[aeiou])/.test(rev)) {
                //   when the string is reversed back 'hk' > 'kh'
                rev = changeElementSplit(rev, /k(?=[aeiou])/, "hk");
            }
        }
        element = __spread(rev).reverse().reduce(function (a, c) { return a + c; }, "");
        // simplify ṭet
        if (/ṭ/.test(element)) {
            element = changeElementSplit(element, /ṭ/, "t");
        }
        // simplify tsade
        if (/ṣ/.test(element)) {
            element = changeElementSplit(element, /ṣ/, "ts");
        }
        // simplify shin
        if (/š/.test(element)) {
            element = changeElementSplit(element, /š/, "sh");
        }
        // simplify sin
        if (/ś/.test(element)) {
            element = changeElementSplit(element, /ś/, "s");
        }
        // simplify ḥet
        if (/ḥ/.test(element)) {
            element = changeElementSplit(element, /ḥ/, "kh");
        }
        // simplify waw
        if (/w/.test(element)) {
            element = changeElementSplit(element, /w/, "v");
        }
        return element;
    }); // map
};
exports.testEach = function (array, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.qametsQatan, qametsQatan = _c === void 0 ? false : _c, _d = _b.isSimple, isSimple = _d === void 0 ? false : _d;
    var academic = academicRules(array, { qametsQatan: qametsQatan, isSimple: isSimple });
    return !isSimple ? academic : simpleRules(academic);
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hebCharsTrans_1 = __webpack_require__(1);
var remCant = function (char) { return (char in hebCharsTrans_1.removeCantillation ? hebCharsTrans_1.removeCantillation[char] : char); };
var remVow = function (char) { return (char in hebCharsTrans_1.removeVowels ? hebCharsTrans_1.removeVowels[char] : char); };
exports.remove = function (text, _a) {
    var _b = (_a === void 0 ? {} : _a).removeVowels, removeVowels = _b === void 0 ? false : _b;
    return __spread(text).map(function (char) { return (!removeVowels ? remCant(char) : remVow(char)); }).reduce(function (a, c) { return a + c; });
};


/***/ })

/******/ });
//# sourceMappingURL=transliterate.js.map