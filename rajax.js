function Encrypt2(_0x5bd3c4, _0x4fde68) {
    var _0x5e5102 = CryptoJS["\u0065\u006e\u0063"]["\u0055\u0074\u0066\u0038"]["\u0070\u0061\u0072\u0073\u0065"](_0x4fde68);
    var _0x4cfbe6 = CryptoJS["\u0065\u006e\u0063"]["\u004c\u0061\u0074\u0069\u006e\u0031"]["\u0070\u0061\u0072\u0073\u0065"](_0x4fde68);
    var _0x212771 = CryptoJS["\u0041\u0045\u0053"]["\u0065\u006e\u0063\u0072\u0079\u0070\u0074"](a, _0x5e5102, {
        "\u0069\u0076": _0x4cfbe6,
        "\u006d\u006f\u0064\u0065": CryptoJS['mode']['ECB'],
        'padding': CryptoJS['pad']['Pkcs7']
    });
    return _0x212771;
}
function Encrypt3(_0x522bb0, _0x138e10) {
    var _0x1de037 = CryptoJS['enc']['Utf8']["\u0070\u0061\u0072\u0073\u0065"](_0x138e10);
    var _0x13ebd9 = CryptoJS['enc']["\u0055\u0074\u0066\u0038"]["\u0070\u0061\u0072\u0073\u0065"](_0x522bb0);
    var _0x388f46 = CryptoJS['AES']["\u0065\u006e\u0063\u0072\u0079\u0070\u0074"](_0x13ebd9, _0x1de037, {
        "\u006d\u006f\u0064\u0065": CryptoJS['mode']['ECB'],
        "\u0070\u0061\u0064\u0064\u0069\u006e\u0067": CryptoJS["\u0070\u0061\u0064"]["\u0050\u006b\u0063\u0073\u0037"]
    });
    return _0x388f46["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();
}
function Decrypt2(_0x1f32c2, _0x5caf1c) {
    if (_0x1f32c2 == "==gwJPTxzG0iY2qTiSUo7wB6".split("").reverse().join("")) {
        return '-';
    } else {
        var _0x2ccccd = CryptoJS['enc']['Utf8']["\u0070\u0061\u0072\u0073\u0065"](_0x5caf1c);
        var _0x3d57bb = CryptoJS['AES']['decrypt'](_0x1f32c2, _0x2ccccd, {
            "\u006d\u006f\u0064\u0065": CryptoJS["\u006d\u006f\u0064\u0065"]['ECB'],
            'padding': CryptoJS["\u0070\u0061\u0064"]['Pkcs7']
        });
        return CryptoJS["\u0065\u006e\u0063"]["\u0055\u0074\u0066\u0038"]["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x3d57bb)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();
    }
}
function Decrypt3(_0xb51761, _0x31f9d3) {
    var _0xe61e30 = CryptoJS['enc']['Utf8']["\u0070\u0061\u0072\u0073\u0065"](_0x31f9d3);
    var _0xf51c71 = CryptoJS["\u0041\u0045\u0053"]['decrypt'](_0xb51761, _0xe61e30, {
        "\u006d\u006f\u0064\u0065": CryptoJS["\u006d\u006f\u0064\u0065"]['ECB'],
        "\u0070\u0061\u0064\u0064\u0069\u006e\u0067": CryptoJS["\u0070\u0061\u0064"]['Pkcs7']
    });
    var _0x59b8d4 = CryptoJS["\u0065\u006e\u0063"]["\u0055\u0074\u0066\u0038"]['stringify'](_0xf51c71);
    return _0x59b8d4;
}
function encodeData(_0x22d29c) {
    var _0x3cbe0c = '';
    for (var _0x17ee54 in _0x22d29c) {
        if (_0x22d29c['hasOwnProperty'](_0x17ee54)) {
            _0x3cbe0c += encodeURIComponent(_0x17ee54) + "\u003d" + encodeURIComponent(_0x22d29c[_0x17ee54]) + '&';
        }
    }
    return _0x3cbe0c['slice'](0xd8fe9 ^ 0xd8fe9, -(0x4f635 ^ 0x4f634));
}
function containsFile(_0xc25cd) {
    var _0x1a57e2 = _0xc25cd['find']("tupni:".split("").reverse().join(""));
    var _0x5863fa, _0x34bbc6;
    for (_0x34bbc6 = 0xae8ec ^ 0xae8ec; _0x34bbc6 < _0x1a57e2["\u006c\u0065\u006e\u0067\u0074\u0068"]; _0x34bbc6++) {
        _0x5863fa = _0x1a57e2[_0x34bbc6];
        if (_0x5863fa['type'] === "elif".split("").reverse().join("") && _0x5863fa["\u0066\u0069\u006c\u0065\u0073"]["\u006c\u0065\u006e\u0067\u0074\u0068"] > (0xc37e9 ^ 0xc37e9)) {
            return !![];
        }
    }
    return ![];
}
var desKey1 = 'ND7TLBY9Cx/SdS0R/7dqmg==';
var desKey2 = "==grkqg6TEOtA2f9QhmoaHIt".split("").reverse().join("");
var desKey3 = "\u005a\u0058\u0046\u0033\u002b\u0051\u0033\u006f\u0070\u0051\u0048\u006c\u0068\u0036\u0055\u006b\u0054\u0054\u0046\u0052\u0056\u0041\u003d\u003d";
var desKey4 = 'SxUsuh2R3wDAAm69bpfU6w==';
var desKey5 = "==QrlklM2cjROKp18sqnxLd2".split("").reverse().join("");
var aesKey = Decrypt2(desKey1, "sopthsk!#032IJDS".split("").reverse().join("")) + Decrypt2(desKey3, "sopthsk!#032IJDS".split("").reverse().join("")) + Decrypt2(desKey5, "sopthsk!#032IJDS".split("").reverse().join(""));
(function(_0x3b82c4) {
    var _0x4c2e8e = _0x3b82c4["\u0061\u006a\u0061\u0078"];
    _0x3b82c4['ajax'] = function(_0x4cfe80) {
        var _0x4f2792 = _0x4cfe80["\u0073\u0075\u0063\u0063\u0065\u0073\u0073"];
        _0x4cfe80['success'] = function(_0x288b3d, _0x5d552d, _0x575eb8) {
            let _0x3ba5e5 = "".split("").reverse().join("");
            let _0x494150;
            try {
                _0x3ba5e5 = Decrypt2(_0x288b3d, aesKey);
            } catch (_0x81b9a0) {
                _0x3ba5e5 = "rorre".split("").reverse().join("");
            }
            if (_0x3ba5e5 !== "\u002d" && (_0x3ba5e5 === "rorre".split("").reverse().join("") || _0x3ba5e5 === "")) {
                _0x3ba5e5 = _0x288b3d;
            }
            try {
                _0x494150 = JSON['parse'](_0x3ba5e5);
            } catch (_0x386695) {
                try {
                    _0x494150 = JSON['parse']('\x27' + _0x3ba5e5 + '\x27');
                } catch (_0xff514e) {
                    if (_0x3ba5e5 && _0x3ba5e5 != "".split("").reverse().join("")) {
                        _0x494150 = _0x3ba5e5;
                    } else {
                        _0x494150 = "rorre esrap".split("").reverse().join("");
                    }
                }
            }
            if (_0x494150 === "rorre esrap".split("").reverse().join("")) {
                _0x494150 = _0x3ba5e5;
            } else if (typeof _0x494150 === "\u0062\u006f\u006f\u006c\u0065\u0061\u006e") {
                _0x494150 = _0x494150["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();
            }
            if (_0x4f2792 && typeof _0x4f2792 === "noitcnuf".split("").reverse().join("")) {
                return _0x4f2792(_0x494150, _0x5d552d, _0x575eb8);
            }
        }
        ;
        var _0x2ecd6b = _0x4cfe80["\u0065\u0072\u0072\u006f\u0072"];
        _0x4cfe80['error'] = function(_0x9a3345, _0x36ec88, _0x4df97c) {
            let _0x1820dc = "";
            let _0xb2c8e5;
            let _0x22a4bd = _0x9a3345['responseText'];
            if (_0x36ec88 === "rorreresrap".split("").reverse().join("")) {
                try {
                    _0x1820dc = Decrypt2(_0x22a4bd, aesKey);
                } catch (_0x1e1434) {
                    _0x1820dc = "rorre".split("").reverse().join("");
                }
                if (_0x1820dc !== '-' && (_0x1820dc === "rorre".split("").reverse().join("") || _0x1820dc === "")) {
                    _0x1820dc = _0x22a4bd;
                }
                try {
                    _0xb2c8e5 = JSON["\u0070\u0061\u0072\u0073\u0065"](_0x1820dc);
                } catch (_0x3deea3) {
                    try {
                        _0xb2c8e5 = JSON['parse']('\x27' + _0x1820dc + '\x27');
                    } catch (_0xbebdc4) {
                        if (_0x1820dc && _0x1820dc != "") {
                            _0xb2c8e5 = _0x1820dc;
                        } else {
                            _0xb2c8e5 = 'parse\x20error';
                        }
                    }
                }
                if (_0xb2c8e5 === "rorre esrap".split("").reverse().join("")) {
                    _0xb2c8e5 = _0x1820dc;
                } else if (typeof _0xb2c8e5 === "\u0062\u006f\u006f\u006c\u0065\u0061\u006e") {
                    _0xb2c8e5 = _0xb2c8e5["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();
                }
                if (_0x4f2792 && typeof _0x4f2792 === 'function') {
                    return _0x4f2792(_0xb2c8e5, _0x36ec88, _0x9a3345);
                }
            } else {
                if (_0x4f2792 && typeof _0x4f2792 === "noitcnuf".split("").reverse().join("")) {
                    return _0x2ecd6b(_0x9a3345, _0x36ec88, _0x4df97c);
                }
            }
        }
        ;
        return _0x4c2e8e(_0x4cfe80);
    }
    ;
    var _0x4d0a1a = _0x3b82c4["\u0067\u0065\u0074\u004a\u0053\u004f\u004e"];
    _0x3b82c4['getJSON'] = function(_0x2d6384, _0x1b0d0e, _0x44dcc3) {
        if (typeof _0x1b0d0e === "noitcnuf".split("").reverse().join("")) {
            var _0x102373 = _0x1b0d0e;
            _0x1b0d0e = function(_0x1e93be) {
                let _0x422fed = "";
                let _0x12e4b6;
                try {
                    _0x422fed = Decrypt2(_0x1e93be, aesKey);
                } catch (_0x1d37ac) {
                    _0x422fed = 'error';
                }
                if (_0x422fed !== '-' && (_0x422fed === "rorre".split("").reverse().join("") || _0x422fed === '')) {
                    _0x422fed = _0x1e93be;
                }
                try {
                    _0x12e4b6 = JSON['parse'](_0x422fed);
                } catch (_0x576082) {
                    try {
                        _0x12e4b6 = JSON['parse']('\x27' + _0x422fed + '\x27');
                    } catch (_0x3ed6db) {
                        if (_0x422fed && _0x422fed != '') {
                            _0x12e4b6 = _0x422fed;
                        } else {
                            _0x12e4b6 = 'parse\x20error';
                        }
                    }
                }
                if (_0x12e4b6 === 'parse\x20error') {
                    _0x12e4b6 = _0x422fed;
                } else if (typeof _0x12e4b6 === "naeloob".split("").reverse().join("")) {
                    _0x12e4b6 = _0x12e4b6["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();
                }
                return _0x102373(_0x12e4b6);
            }
            ;
        } else {
            var _0x102373 = _0x44dcc3;
            _0x44dcc3 = function(_0xf31feb) {
                let _0x3c72ee = '';
                let _0x57541c;
                try {
                    _0x3c72ee = Decrypt2(_0xf31feb, aesKey);
                } catch (_0x3ebd26) {
                    _0x3c72ee = 'error';
                }
                if (_0x3c72ee !== '-' && (_0x3c72ee === 'error' || _0x3c72ee === "".split("").reverse().join(""))) {
                    _0x3c72ee = _0xf31feb;
                }
                try {
                    _0x57541c = JSON['parse'](_0x3c72ee);
                } catch (_0x1a3a9b) {
                    try {
                        _0x57541c = JSON['parse']('\x27' + _0x3c72ee + '\x27');
                    } catch (_0x32b914) {
                        if (_0x3c72ee && _0x3c72ee != '') {
                            _0x57541c = _0x3c72ee;
                        } else {
                            _0x57541c = 'parse\x20error';
                        }
                    }
                }
                if (_0x57541c === "rorre esrap".split("").reverse().join("")) {
                    _0x57541c = _0x3c72ee;
                } else if (typeof _0x57541c === "naeloob".split("").reverse().join("")) {
                    _0x57541c = _0x57541c['toString']();
                }
                return _0x102373(_0x57541c);
            }
            ;
        }
        return _0x4d0a1a(_0x2d6384, _0x1b0d0e, _0x44dcc3);
    }
    ;
}
)(jQuery);
这段代码在做什么？