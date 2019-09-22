// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/css/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\ProximaNova\\ProximaNova-Regular.ttf":[["ProximaNova-Regular.da41f4e8.ttf","src/fonts/ProximaNova/ProximaNova-Regular.ttf"],"src/fonts/ProximaNova/ProximaNova-Regular.ttf"],"./..\\fonts\\ProximaNova\\ProximaNova-Bold.ttf":[["ProximaNova-Bold.928f3178.ttf","src/fonts/ProximaNova/ProximaNova-Bold.ttf"],"src/fonts/ProximaNova/ProximaNova-Bold.ttf"],"./..\\img\\banner.png":[["banner.9571cd59.png","src/img/banner.png"],"src/img/banner.png"],"./..\\img\\piggy-bank.png":[["piggy-bank.e8f432ec.png","src/img/piggy-bank.png"],"src/img/piggy-bank.png"],"./..\\img\\delivery-truck-silhouette.png":[["delivery-truck-silhouette.bfb958c4.png","src/img/delivery-truck-silhouette.png"],"src/img/delivery-truck-silhouette.png"],"./..\\img\\election-event-on-a-calendar-with-star-symbol.png":[["election-event-on-a-calendar-with-star-symbol.e1f2e73d.png","src/img/election-event-on-a-calendar-with-star-symbol.png"],"src/img/election-event-on-a-calendar-with-star-symbol.png"],"./..\\img\\medal.png":[["medal.69d39e10.png","src/img/medal.png"],"src/img/medal.png"],"./..\\img\\contact-banner.png":[["contact-banner.c3973ad7.png","src/img/contact-banner.png"],"src/img/contact-banner.png"],"./..\\img\\envelope.png":[["envelope.cad430da.png","src/img/envelope.png"],"src/img/envelope.png"],"./..\\img\\call-answer.png":[["call-answer.b3e9eafd.png","src/img/call-answer.png"],"src/img/call-answer.png"],"./..\\img\\clock.png":[["clock.9d6e051e.png","src/img/clock.png"],"src/img/clock.png"],"./..\\img\\engine.png":[["engine.a2cbfefd.png","src/img/engine.png"],"src/img/engine.png"],"./..\\img\\dump-truck.png":[["dump-truck.92260f2b.png","src/img/dump-truck.png"],"src/img/dump-truck.png"],"./..\\img\\calendar.png":[["calendar.8de17ea0.png","src/img/calendar.png"],"src/img/calendar.png"],"./..\\img\\Forma.png":[["Forma.f0b5dfd6.png","src/img/Forma.png"],"src/img/Forma.png"],"./..\\img\\dark-banner.png":[["dark-banner.03f1f8c6.png","src/img/dark-banner.png"],"src/img/dark-banner.png"],"./..\\img\\file.png":[["file.58d002ec.png","src/img/file.png"],"src/img/file.png"],"./..\\img\\sclad.png":[["sclad.7ad92e16.png","src/img/sclad.png"],"src/img/sclad.png"],"./..\\img\\wheel.png":[["wheel.ef2ab8ba.png","src/img/wheel.png"],"src/img/wheel.png"],"./..\\img\\delivery-truck.png":[["delivery-truck.a82343f2.png","src/img/delivery-truck.png"],"src/img/delivery-truck.png"],"./..\\img\\telemarketer.png":[["telemarketer.a5bad7cd.png","src/img/telemarketer.png"],"src/img/telemarketer.png"],"./..\\img\\reload.png":[["reload.70aff4dc.png","src/img/reload.png"],"src/img/reload.png"],"./..\\img\\Foto_na_sayt.png":[["Foto_na_sayt.6929d2d6.png","src/img/Foto_na_sayt.png"],"src/img/Foto_na_sayt.png"],"./..\\img\\kassa.png":[["kassa.36141ba6.png","src/img/kassa.png"],"src/img/kassa.png"],"./..\\img\\car-big.png":[["car-big.76bad791.png","src/img/car-big.png"],"src/img/car-big.png"],"./..\\img\\spisok.png":[["spisok.836e2f16.png","src/img/spisok.png"],"src/img/spisok.png"],"./..\\img\\arrow.png":[["arrow.24fe2cf9.png","src/img/arrow.png"],"src/img/arrow.png"],"./..\\img\\arrow1.png":[["arrow1.d9be69e2.png","src/img/arrow1.png"],"src/img/arrow1.png"],"./..\\img\\delivery.png":[["delivery.7b291627.png","src/img/delivery.png"],"src/img/delivery.png"],"./..\\img\\toolbox.png":[["toolbox.b55f9b4f.png","src/img/toolbox.png"],"src/img/toolbox.png"],"./..\\img\\certificate.png":[["certificate.a98ea073.png","src/img/certificate.png"],"src/img/certificate.png"],"./..\\img\\light-banner.png":[["light-banner.f32f2906.png","src/img/light-banner.png"],"src/img/light-banner.png"],"./..\\img\\banner2.png":[["banner2.b34f01dd.png","src/img/banner2.png"],"src/img/banner2.png"],"./..\\img\\map.png":[["map.219e824a.png","src/img/map.png"],"src/img/map.png"],"./..\\img\\small-arrow.png":[["small-arrow.7d418126.png","src/img/small-arrow.png"],"src/img/small-arrow.png"],"./..\\img\\cross.png":[["cross.9cdea798.png","src/img/cross.png"],"src/img/cross.png"],"_css_loader":"C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64181" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/max/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.237c716e.js.map