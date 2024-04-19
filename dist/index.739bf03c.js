// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gRY1p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var _aTabGroupJs = require("@georapbox/a-tab-group/dist/a-tab-group.js");
var _webShareDefinedJs = require("@georapbox/web-share-element/dist/web-share-defined.js");
var _filesDropzoneDefinedJs = require("@georapbox/files-dropzone-element/dist/files-dropzone-defined.js");
var _isWebShareSupportedJs = require("@georapbox/web-share-element/dist/is-web-share-supported.js");
var _resizeObserverDefinedJs = require("@georapbox/resize-observer-element/dist/resize-observer-defined.js");
var _capturePhotoJs = require("@georapbox/capture-photo-element/dist/capture-photo.js");
var _storageJs = require("./services/storage.js");
var _toastAlertJs = require("./toast-alert.js");
var _debounceJs = require("./utils/debounce.js");
var _customClipboardCopyJs = require("./custom-clipboard-copy.js");
(async function() {
    const NO_BARCODE_DETECTED = "No barcode detected";
    const ACCEPTED_MIME_TYPES = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/apng",
        "image/gif",
        "image/webp",
        "image/avif"
    ];
    const tabGroupEl = document.querySelector("a-tab-group");
    const cameraPanel = document.getElementById("cameraPanel");
    const capturePhotoEl = document.querySelector("capture-photo");
    const cameraResultsEl = document.getElementById("cameraResults");
    const fileResultsEl = document.getElementById("fileResults");
    const scanInstructionsEl = document.getElementById("scanInstructions");
    const scanBtn = document.getElementById("scanBtn");
    const dropzoneEl = document.getElementById("dropzone");
    const resizeObserverEl = document.querySelector("resize-observer");
    const scanFrameEl = document.getElementById("scanFrame");
    const globalActionsEl = document.getElementById("globalActions");
    const historyBtn = document.getElementById("historyBtn");
    const historyDialog = document.getElementById("historyDialog");
    const historyList = document.getElementById("historyList");
    const deleteHistoryBtn = document.getElementById("deleteHistoryBtn");
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsDialog = document.getElementById("settingsDialog");
    const settingsForm = document.forms["settings-form"];
    const supportedFormatsEl = document.getElementById("supportedFormats");
    let shouldRepeatScan = true;
    let rafId;
    if (!("BarcodeDetector" in window)) try {
        await require("234eda503e6302c");
        log("Using BarcodeDetector polyfill.");
    } catch (err) {
        globalActionsEl.hidden = true;
        tabGroupEl.style.display = "none";
        return (0, _toastAlertJs.toastAlert)("BarcodeDetector API is not supported by your browser.", "danger");
    }
    else log("Using the native BarcodeDetector API.");
    if (!(0, _isWebShareSupportedJs.isWebShareSupported)()) document.querySelectorAll("web-share").forEach((el)=>{
        el.hidden = true;
        el.disabled = true;
    });
    const { value: history = [] } = await (0, _storageJs.getHistory)();
    renderHistoryList(history);
    capturePhotoEl.addEventListener("capture-photo:video-play", (evt)=>{
        scanFrameEl.hidden = false;
        resizeScanFrame(evt.detail.video);
        scan();
        const trackSettings = capturePhotoEl.getTrackSettings();
        const trackCapabilities = capturePhotoEl.getTrackCapabilities();
        const zoomLevelEl = document.getElementById("zoomLevel");
        if (trackSettings?.zoom && trackCapabilities?.zoom) {
            const zoomControls = document.getElementById("zoomControls");
            const minZoom = trackCapabilities?.zoom?.min || 0;
            const maxZoom = trackCapabilities?.zoom?.max || 10;
            let currentZoom = trackSettings?.zoom || 1;
            zoomControls.hidden = false;
            zoomLevelEl.textContent = currentZoom;
            zoomControls.addEventListener("click", (evt)=>{
                const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
                const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');
                if (zoomInBtn && currentZoom < maxZoom) currentZoom += 0.5;
                if (zoomOutBtn && currentZoom > minZoom) currentZoom -= 0.5;
                zoomLevelEl.textContent = currentZoom;
                capturePhotoEl.zoom = currentZoom;
            });
        }
    }, {
        once: true
    });
    capturePhotoEl.addEventListener("capture-photo:error", (evt)=>{
        const error = evt.detail.error;
        if (error.name === "NotFoundError") // If the browser cannot find all media tracks with the specified types that meet the constraints given.
        return;
        const errorMessage = error.name === "NotAllowedError" ? "Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam." : error.message;
        cameraPanel.innerHTML = /* html */ `<div class="alert alert-danger" role="alert" style="margin: 0;">${errorMessage}</div>`;
    }, {
        once: true
    });
    (0, _capturePhotoJs.CapturePhoto).defineCustomElement();
    dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(",");
    const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector("video");
    const formats = await window.BarcodeDetector.getSupportedFormats();
    const barcodeDetector = new window.BarcodeDetector({
        formats
    });
    const { value: settings = {} } = await (0, _storageJs.getSettings)();
    Object.entries(settings).forEach(([key, value])=>{
        const settingInput = settingsForm.querySelector(`[name="${key}"]`);
        if (settingInput) settingInput.checked = value;
    });
    if (Array.isArray(formats) && formats.length > 0) supportedFormatsEl.textContent = `Supported formats: ${formats.join(", ")}`;
    const beep = (()=>{
        const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
        if (!audioCtx) return;
        return async (duration, frequency, volume, type, callback)=>{
            const { value: settings } = await (0, _storageJs.getSettings)();
            if (!settings?.beep) return;
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            if (volume) gainNode.gain.value = volume;
            if (frequency) oscillator.frequency.value = frequency;
            if (type) oscillator.type = type;
            if (typeof callback === "function") oscillator.onended = callback;
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
        };
    })();
    function renderHistoryList(data) {
        historyList.innerHTML = "";
        if (!Array.isArray(data) || !data.length) {
            historyList.innerHTML = "<li class=>There are no saved items in history.</li>";
            deleteHistoryBtn.style.display = "none";
        } else {
            deleteHistoryBtn.style.display = "block";
            data.forEach((item)=>{
                const li = document.createElement("li");
                li.setAttribute("data-value", item);
                let historyItem;
                try {
                    new URL(item);
                    historyItem = document.createElement("a");
                    historyItem.href = item;
                    historyItem.setAttribute("target", "_blank");
                    historyItem.setAttribute("rel", "noreferrer noopener");
                } catch (err) {
                    historyItem = document.createElement("span");
                }
                historyItem.textContent = item;
                historyItem.setAttribute("title", item);
                const actionsEl = document.createElement("div");
                actionsEl.className = "history-modal__actions";
                const copyBtn = document.createElement("custom-clipboard-copy");
                copyBtn.title = "Copy to clipboard";
                copyBtn.setAttribute("only-icon", "");
                copyBtn.setAttribute("value", item);
                actionsEl.appendChild(copyBtn);
                const removeBtn = document.createElement("button");
                removeBtn.type = "button";
                removeBtn.className = "history-modal__delete-action";
                removeBtn.title = "Remove from history";
                removeBtn.setAttribute("data-action", "delete");
                removeBtn.innerHTML = /* html */ `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `;
                actionsEl.appendChild(removeBtn);
                li.appendChild(historyItem);
                li.appendChild(actionsEl);
                historyList.appendChild(li);
            });
        }
    }
    async function addToHistory(item) {
        const { value: settings } = await (0, _storageJs.getSettings)();
        if (!item || !settings?.addToHistory) return;
        const { value: history = [], error: getHistoryError } = await (0, _storageJs.getHistory)();
        if (!getHistoryError && !history.find((h)=>h === item)) {
            const data = [
                ...history,
                item
            ];
            const { error: setHistoryError } = await (0, _storageJs.setHistory)(data);
            if (!setHistoryError) renderHistoryList(data);
        }
    }
    async function removeFromHistory(value) {
        if (!value) return;
        const { value: history = [], error: getHistoryError } = await (0, _storageJs.getHistory)();
        if (!getHistoryError) {
            const data = history.filter((item)=>item !== value);
            const { error: setHistoryError } = await (0, _storageJs.setHistory)(data);
            if (!setHistoryError) renderHistoryList(data);
        }
    }
    async function emptyHistory() {
        const { error: setHistoryError } = await (0, _storageJs.setHistory)([]);
        if (!setHistoryError) renderHistoryList([]);
    }
    async function vibrate(duration = 100) {
        const { value: settings } = await (0, _storageJs.getSettings)();
        if (typeof window.navigator.vibrate !== "function" || !settings?.vibrate) return;
        try {
            window.navigator.vibrate(duration);
        } catch  {
        // Fail silently...
        }
    }
    function resizeScanFrame(videoEl) {
        if (!videoEl) return;
        const rect = videoEl.getBoundingClientRect();
        scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
    }
    function emptyResults(resultDialog) {
        resultDialog?.querySelector(".results__item")?.remove();
    }
    async function createResult(value, resultDialog) {
        if (!value || !resultDialog) return;
        emptyResults(resultDialog);
        let resultItem;
        try {
            const { value: settings } = await (0, _storageJs.getSettings)();
            new URL(value);
            resultItem = document.createElement("a");
            resultItem.href = value;
            if (!settings?.openWebPageSameTab) {
                resultItem.setAttribute("target", "_blank");
                resultItem.setAttribute("rel", "noreferrer noopener");
            }
            if (settings?.openWebPage) resultItem.click();
        } catch (err) {
            resultItem = document.createElement("span");
        }
        resultItem.className = "results__item";
        resultItem.classList.toggle("results__item--no-barcode", value === NO_BARCODE_DETECTED);
        resultItem.textContent = value;
        resultDialog.insertBefore(resultItem, resultDialog.querySelector(".results__actions"));
        const clipboarCopyEl = resultDialog.querySelector("custom-clipboard-copy");
        const webShareEl = resultDialog.querySelector("web-share");
        const isValidValue = value !== NO_BARCODE_DETECTED;
        if (clipboarCopyEl) {
            clipboarCopyEl.disabled = !isValidValue;
            clipboarCopyEl.hidden = !isValidValue;
        }
        if (webShareEl && (0, _isWebShareSupportedJs.isWebShareSupported)()) {
            webShareEl.disabled = !isValidValue;
            webShareEl.hidden = !isValidValue;
            if (isValidValue) webShareEl.setAttribute("share-text", value);
            else webShareEl.removeAttribute("share-text");
        }
        resultDialog.show();
    }
    function detectBarcode(source) {
        return new Promise((resolve, reject)=>{
            barcodeDetector.detect(source).then((results)=>{
                if (Array.isArray(results) && results.length > 0) resolve(results[0]);
                else reject({
                    message: "Could not detect barcode from provided source."
                });
            }).catch((err)=>{
                reject(err);
            });
        });
    }
    async function scan() {
        log("Scanning...");
        scanInstructionsEl.hidden = false;
        try {
            let barcode = {};
            barcode = await detectBarcode(capturePhotoVideoEl);
            window.cancelAnimationFrame(rafId);
            emptyResults(cameraResultsEl);
            createResult(barcode.rawValue, cameraResultsEl);
            addToHistory(barcode.rawValue);
            scanInstructionsEl.hidden = true;
            scanBtn.hidden = false;
            scanFrameEl.hidden = true;
            beep(200, 860, 0.03, "square");
            vibrate();
            return;
        } catch (err) {
        // Fail silently...
        }
        if (shouldRepeatScan) rafId = window.requestAnimationFrame(()=>scan());
    }
    function handleFileSelect(file) {
        if (!file) return;
        const image = new Image();
        const reader = new FileReader();
        reader.onload = (evt)=>{
            const data = evt.target.result;
            image.onload = async ()=>{
                try {
                    const barcode = await detectBarcode(image);
                    emptyResults(fileResultsEl);
                    createResult(barcode.rawValue, fileResultsEl);
                    addToHistory(barcode.rawValue);
                    beep(200, 860, 0.03, "square");
                    vibrate();
                } catch (err) {
                    emptyResults(fileResultsEl);
                    createResult(NO_BARCODE_DETECTED, fileResultsEl);
                }
            };
            image.src = data;
            dropzoneEl.replaceChildren();
            const preview = document.createElement("div");
            preview.className = "dropzone-preview";
            const imageWrapper = document.createElement("div");
            imageWrapper.className = "dropzone-preview__image-wrapper";
            const fileNameWrapper = document.createElement("div");
            fileNameWrapper.className = "dropzone-preview__file-name";
            fileNameWrapper.textContent = file.name;
            imageWrapper.appendChild(image);
            preview.appendChild(imageWrapper);
            preview.appendChild(fileNameWrapper);
            dropzoneEl.prepend(preview);
        };
        reader.readAsDataURL(file);
    }
    function log(...args) {
        console.log(...args);
    }
    scanBtn.addEventListener("click", ()=>{
        scanBtn.hidden = true;
        scanFrameEl.hidden = false;
        emptyResults(cameraResultsEl);
        cameraResultsEl.close();
        scan();
    });
    tabGroupEl.addEventListener("a-tab-show", (0, _debounceJs.debounce)((evt)=>{
        const tabId = evt.detail.tabId;
        if (tabId === "cameraTab") {
            shouldRepeatScan = true;
            // Get the latest instance of capture-photo element to ensure we don't use the cached one.
            const capturePhotoEl = document.querySelector("capture-photo");
            if (capturePhotoEl // Assumes that element exists; it might not be the case if the user is using a browser that does not support the BarcodeDetector API.
             && !capturePhotoEl.loading && !cameraResultsEl.querySelector(".results__item")) scan();
            if (capturePhotoEl != null && typeof capturePhotoEl.startVideoStream === "function") capturePhotoEl.startVideoStream();
        }
        if (tabId === "fileTab") {
            shouldRepeatScan = false;
            if (capturePhotoEl != null && typeof capturePhotoEl.stopVideoStream === "function") capturePhotoEl.stopVideoStream();
        }
    }, 250));
    dropzoneEl.addEventListener("files-dropzone-drop", (evt)=>{
        handleFileSelect(evt.detail.acceptedFiles[0]);
    });
    resizeObserverEl.addEventListener("resize-observer:resize", ()=>{
        resizeScanFrame(capturePhotoEl.shadowRoot.querySelector("video"));
    });
    settingsBtn.addEventListener("click", ()=>{
        settingsDialog.showModal();
    });
    historyBtn.addEventListener("click", ()=>{
        historyDialog.showModal();
    });
    historyDialog.addEventListener("click", (evt)=>{
        if (evt.target === evt.currentTarget) historyDialog.close();
    });
    settingsDialog.addEventListener("click", (evt)=>{
        if (evt.target === evt.currentTarget) settingsDialog.close();
    });
    settingsForm.addEventListener("change", (evt)=>{
        const settings = {};
        const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((item)=>settings[item.name] = item.checked);
        (0, _storageJs.setSettings)(settings);
    });
    historyList.addEventListener("click", (evt)=>{
        const target = evt.target;
        if (target.closest('[data-action="delete"]')) {
            if (window.confirm("Delete item from history?")) removeFromHistory(target.closest("li").dataset.value);
        }
    });
    deleteHistoryBtn.addEventListener("click", ()=>{
        if (window.confirm("Are you sure you want to empty history?")) emptyHistory();
    });
})();

},{"@georapbox/a-tab-group/dist/a-tab-group.js":"2l2kO","@georapbox/web-share-element/dist/web-share-defined.js":"gYIRO","@georapbox/files-dropzone-element/dist/files-dropzone-defined.js":"kqofg","@georapbox/web-share-element/dist/is-web-share-supported.js":"dDLvg","@georapbox/resize-observer-element/dist/resize-observer-defined.js":"4Cj3u","@georapbox/capture-photo-element/dist/capture-photo.js":"cmJWh","./services/storage.js":"sgsxU","./toast-alert.js":"3wKPY","./utils/debounce.js":"hVhN7","./custom-clipboard-copy.js":"8uo5j","234eda503e6302c":"lCZiQ"}],"2l2kO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabGroup", ()=>m);
let t = (t = "", e = "")=>{
    let s = Math.random().toString(36).substring(2, 8);
    return `${"string" == typeof t && "" !== t ? t + "-" : ""}${s}${"string" == typeof e && "" !== e ? "-" + e : ""}`;
}, e = (t, e)=>{
    if (Object.prototype.hasOwnProperty.call(e, t)) {
        let s = e[t];
        delete e[t], e[t] = s;
    }
}, s = 0, o = `
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`, a = document.createElement("template");
a.innerHTML = `
  <style>
    ${o}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;
class l extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(a.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "selected",
            "disabled",
            "closable"
        ];
    }
    attributeChangedCallback(t, e, s) {
        if ("selected" === t && e !== s && this.setAttribute("aria-selected", this.selected.toString()), "disabled" === t && e !== s && (this.setAttribute("aria-disabled", this.disabled.toString()), this.setAttribute("tabindex", this.disabled ? "-1" : "0")), "closable" === t && e !== s) {
            if (this.closable) {
                let t = document.createElement("span");
                t.className = "tab__close", t.setAttribute("part", "close-tab"), t.innerHTML = '<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>', this.shadowRoot?.querySelector(".tab")?.appendChild(t), t.addEventListener("click", this.#t);
            } else {
                let t = this.shadowRoot?.querySelector(".tab__close");
                t?.removeEventListener("click", this.#t), t?.remove();
            }
        }
    }
    connectedCallback() {
        this.#e("selected"), this.#e("disabled"), this.#e("closable"), this.id || (this.id = t("tab", (++s).toString())), this.setAttribute("slot", "tab"), this.setAttribute("role", "tab"), this.setAttribute("aria-selected", "false"), this.setAttribute("tabindex", this.disabled ? "-1" : "0");
    }
    disconnectedCallback() {
        let t = this.shadowRoot?.querySelector(".tab__close");
        t?.removeEventListener("click", this.#t);
    }
    get selected() {
        return this.hasAttribute("selected");
    }
    set selected(t) {
        this.toggleAttribute("selected", !!t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get closable() {
        return this.hasAttribute("closable");
    }
    set closable(t) {
        this.toggleAttribute("closable", !!t);
    }
    #t = (t)=>{
        t.stopPropagation(), this.dispatchEvent(new CustomEvent("a-tab-close", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: this.id
            }
        }));
    };
    #e(t) {
        return e(t, this);
    }
    static defineCustomElement(t = "a-tab") {
        "undefined" == typeof window || window.customElements.get(t) || window.customElements.define(t, l);
    }
}
l.defineCustomElement();
let i = 0, r = `
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`, n = document.createElement("template");
n.innerHTML = `
  <style>
    ${r}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;
class c extends HTMLElement {
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(n.content.cloneNode(!0));
    }
    connectedCallback() {
        this.setAttribute("slot", "panel"), this.setAttribute("role", "tabpanel"), this.setAttribute("hidden", ""), this.id || (this.id = t("panel", (++i).toString()));
    }
    static defineCustomElement(t = "a-tab-panel") {
        "undefined" == typeof window || window.customElements.get(t) || window.customElements.define(t, c);
    }
}
c.defineCustomElement();
let d = {
    TOP: "top",
    BOTTOM: "bottom",
    START: "start",
    END: "end"
}, h = Object.entries(d).map(([, t])=>t), b = {
    AUTO: "auto",
    MANUAL: "manual"
}, u = {
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    UP: "ArrowUp",
    HOME: "Home",
    END: "End",
    ENTER: "Enter",
    SPACE: " "
}, p = `
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${d.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${d.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${d.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${d.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${d.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${d.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${d.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${d.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${d.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${d.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`, g = document.createElement("template");
g.innerHTML = `
  <style>
    ${p}
  </style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;
class m extends HTMLElement {
    #s = null;
    #o = null;
    #a = !1;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(g.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "placement",
            "no-scroll-controls"
        ];
    }
    attributeChangedCallback(t, e, s) {
        "placement" === t && e !== s && this.#l(), "no-scroll-controls" === t && e !== s && this.#l();
    }
    get placement() {
        return this.getAttribute("placement") || d.TOP;
    }
    set placement(t) {
        null != t && this.setAttribute("placement", t);
    }
    get noScrollControls() {
        return this.hasAttribute("no-scroll-controls");
    }
    set noScrollControls(t) {
        this.toggleAttribute("no-scroll-controls", !!t);
    }
    get scrollDistance() {
        return Math.abs(Number(this.getAttribute("scroll-distance"))) || 200;
    }
    set scrollDistance(t) {
        this.setAttribute("scroll-distance", Math.abs(t).toString() || "200");
    }
    get activation() {
        return this.getAttribute("activation") || b.AUTO;
    }
    set activation(t) {
        this.setAttribute("activation", t || b.AUTO);
    }
    get noTabCycling() {
        return this.hasAttribute("no-tab-cycling");
    }
    set noTabCycling(t) {
        this.toggleAttribute("no-tab-cycling", !!t);
    }
    connectedCallback() {
        this.#e("placement"), this.#e("noScrollControls"), this.#e("scrollDistance"), this.#e("activation"), this.#e("noTabCycling");
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), o = this.shadowRoot?.querySelector(".tab-group__nav"), a = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.addEventListener("slotchange", this.#i), e?.addEventListener("slotchange", this.#i), s?.addEventListener("click", this.#r), s?.addEventListener("keydown", this.#n), a.forEach((t)=>t.addEventListener("click", this.#c)), this.addEventListener("a-tab-close", this.#d), "ResizeObserver" in window && (this.#s = new ResizeObserver((t)=>{
            this.#o = window.requestAnimationFrame(()=>{
                let e = t?.[0], s = e?.target, l = s?.scrollWidth > s?.clientWidth;
                a.forEach((t)=>t.toggleAttribute("hidden", !l)), o?.part.toggle("nav--has-scroll-controls", l), o?.classList.toggle("tab-group__nav--has-scroll-controls", l);
            });
        })), this.#h(), this.#l();
    }
    disconnectedCallback() {
        let t = this.shadowRoot?.querySelector("slot[name=tab]"), e = this.shadowRoot?.querySelector("slot[name=panel]"), s = this.shadowRoot?.querySelector(".tab-group__tabs"), o = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        t?.removeEventListener("slotchange", this.#i), e?.removeEventListener("slotchange", this.#i), s?.removeEventListener("click", this.#r), s?.removeEventListener("keydown", this.#n), o.forEach((t)=>t.removeEventListener("click", this.#c)), this.removeEventListener("a-tab-close", this.#d), this.#b();
    }
    #u() {
        if (!this.#s) return;
        let t = this.shadowRoot?.querySelector(".tab-group__tabs");
        t && (this.#s.unobserve(t), this.#s.observe(t));
    }
    #b() {
        this.#s && (this.#s.disconnect(), null !== this.#o && (window.cancelAnimationFrame(this.#o), this.#o = null));
    }
    #p() {
        return getComputedStyle(this).direction || "ltr";
    }
    #h() {
        this.hidden = 0 === this.#g().length;
    }
    #m() {
        let t = this.#g();
        this.#h(), t.forEach((t)=>{
            let e = t.nextElementSibling;
            if (!e || "a-tab-panel" !== e.tagName.toLowerCase()) return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);
            t.setAttribute("aria-controls", e.id), e.setAttribute("aria-labelledby", t.id);
        });
    }
    #v() {
        return Array.from(this.querySelectorAll("a-tab-panel"));
    }
    #g() {
        return Array.from(this.querySelectorAll("a-tab"));
    }
    #f(t) {
        let e = t.getAttribute("aria-controls");
        return this.querySelector(`#${e}`);
    }
    #w() {
        return this.#g().find((t)=>!t.disabled) || null;
    }
    #T() {
        let t = this.#g();
        for(let e = t.length - 1; e >= 0; e--)if (!t[e].disabled) return t[e];
        return null;
    }
    #y() {
        let t = this.#g(), e = this.activation === b.MANUAL ? t.findIndex((t)=>t.matches(":focus")) - 1 : t.findIndex((t)=>t.selected) - 1;
        for(; t[(e + t.length) % t.length].disabled;)e--;
        return this.noTabCycling && e < 0 ? null : t[(e + t.length) % t.length];
    }
    #A() {
        let t = this.#g(), e = this.activation === b.MANUAL ? t.findIndex((t)=>t.matches(":focus")) + 1 : t.findIndex((t)=>t.selected) + 1;
        for(; t[e % t.length].disabled;)e++;
        return this.noTabCycling && e >= t.length ? null : t[e % t.length];
    }
    #_() {
        let t = this.#g(), e = this.#v();
        t.forEach((t)=>t.selected = !1), e.forEach((t)=>t.hidden = !0);
    }
    #l() {
        let t = this.shadowRoot?.querySelector(".tab-group__nav"), e = Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button") || []);
        this.noScrollControls || this.placement === d.START || this.placement === d.END ? (this.#b(), e.forEach((t)=>t.hidden = !0), t?.part.remove("nav--has-scroll-controls"), t?.classList.remove("tab-group__nav--has-scroll-controls")) : (this.#u(), e.forEach((t)=>t.hidden = !1));
    }
    #E() {
        let t = this.#g(), e = t.find((t)=>t.selected && !t.disabled) || t.find((t)=>!t.disabled);
        e && (this.#a && !e.selected && this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.#C(e));
    }
    #C(t) {
        this.#_(), t && (t.selected = !0);
        let e = this.#f(t);
        e && (e.hidden = !1);
    }
    #i = (t)=>{
        this.#m(), this.#l(), this.#E(), "tab" === t.target.name && (this.#a = !0);
    };
    #n = (t)=>{
        if ("a-tab" !== t.target.tagName.toLowerCase() || t.altKey) return;
        let e = h.includes(this.placement || "") ? this.placement : d.TOP, s = [
            d.TOP,
            d.BOTTOM
        ].includes(e || "") ? "horizontal" : "vertical", o = this.#p(), a = null;
        switch(t.key){
            case u.LEFT:
                "horizontal" === s && (a = "ltr" === o ? this.#y() : this.#A()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.RIGHT:
                "horizontal" === s && (a = "ltr" === o ? this.#A() : this.#y()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.UP:
                "vertical" === s && (a = this.#y()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.DOWN:
                "vertical" === s && (a = this.#A()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.HOME:
                (a = this.#w()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.END:
                (a = this.#T()) && (this.activation === b.MANUAL ? a.focus() : this.selectTab(a));
                break;
            case u.ENTER:
            case u.SPACE:
                (a = t.target) && this.selectTab(a);
                break;
            default:
                return;
        }
        t.preventDefault();
    };
    #r = (t)=>{
        let e = t.target.closest("a-tab");
        e && this.selectTab(e);
    };
    #c = (t)=>{
        let e = t.target.closest(".tab-group__scroll-button"), s = this.shadowRoot?.querySelector(".tab-group__tabs");
        if (!e || !s) return;
        let o = e.classList.contains("tab-group__scroll-button--start") ? -1 : 1, a = s.scrollLeft;
        s.scrollTo({
            left: a + o * this.scrollDistance
        });
    };
    #d = (t)=>{
        let e = t.target, s = this.#f(e);
        e && (e.remove(), e.selected && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        }))), s && "a-tab-panel" === s.tagName.toLowerCase() && s.remove();
    };
    #e(t) {
        return e(t, this);
    }
    selectTabByIndex(t) {
        let e = this.#g()[t];
        e && this.selectTab(e);
    }
    selectTabById(t) {
        let e = this.#g().find((e)=>e.id === t);
        e && this.selectTab(e);
    }
    selectTab(t) {
        let e = this.#g().find((t)=>t.selected);
        !t || t.disabled || t.selected || "a-tab" !== t.tagName.toLowerCase() || (this.#C(t), window.requestAnimationFrame(()=>{
            t.scrollIntoView({
                inline: "nearest",
                block: "nearest"
            }), t.focus();
        }), e && this.dispatchEvent(new CustomEvent("a-tab-hide", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: e.id
            }
        })), this.dispatchEvent(new CustomEvent("a-tab-show", {
            bubbles: !0,
            composed: !0,
            detail: {
                tabId: t.id
            }
        })));
    }
    static defineCustomElement(t = "a-tab-group") {
        "undefined" == typeof window || window.customElements.get(t) || window.customElements.define(t, m);
    }
}
m.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gYIRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebShare", ()=>s);
Object.defineProperty({}, "WebShare", {
    get: function() {
        return s;
    },
    set: void 0,
    enumerable: !0,
    configurable: !0
});
let t = `
  :host {
    display: inline-block;
  }
`, e = document.createElement("template");
e.innerHTML = `
  <style>${t}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;
class s extends HTMLElement {
    #t;
    #e;
    #s = [];
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open",
            delegatesFocus: !0
        }).appendChild(e.content.cloneNode(!0)), this.#t = this.shadowRoot?.querySelector('slot[name="button"]') || null, this.#e = this.#i();
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(t, e, s) {
        "disabled" === t && e !== s && this.#e && (this.#e.toggleAttribute("disabled", this.disabled), this.#e.setAttribute("aria-disabled", this.disabled.toString()), this.#e.part && this.#e.part.contains("button") && this.#e.part.toggle("button--disabled", this.disabled));
    }
    connectedCallback() {
        this.#r("shareUrl"), this.#r("shareTitle"), this.#r("shareText"), this.#r("shareFiles"), this.#r("disabled"), this.#t?.addEventListener("slotchange", this.#a), this.#e?.addEventListener("click", this.#n);
    }
    disconnectedCallback() {
        this.#t?.removeEventListener("slotchange", this.#a), this.#e?.removeEventListener("click", this.#n);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        this.toggleAttribute("disabled", !!t);
    }
    get shareUrl() {
        return this.getAttribute("share-url") || "";
    }
    set shareUrl(t) {
        this.setAttribute("share-url", t);
    }
    get shareTitle() {
        return this.getAttribute("share-title") || "";
    }
    set shareTitle(t) {
        this.setAttribute("share-title", t);
    }
    get shareText() {
        return this.getAttribute("share-text") || "";
    }
    set shareText(t) {
        this.setAttribute("share-text", t);
    }
    get shareFiles() {
        return this.#s;
    }
    set shareFiles(t) {
        Array.isArray(t) && t.length > 0 && (this.#s = t);
    }
    async share() {
        if (!this.disabled) try {
            let t = {};
            this.shareUrl && (t.url = this.shareUrl), this.shareTitle && (t.title = this.shareTitle), this.shareText && (t.text = this.shareText), Array.isArray(this.shareFiles) && this.shareFiles.length > 0 && navigator.canShare && navigator.canShare({
                files: this.shareFiles
            }) && (t.files = this.shareFiles), await navigator.share(t), this.dispatchEvent(new CustomEvent("web-share:success", {
                bubbles: !0,
                composed: !0,
                detail: {
                    shareData: t
                }
            }));
        } catch (t) {
            if (t instanceof Error && "AbortError" === t.name) {
                this.dispatchEvent(new CustomEvent("web-share:abort", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: t
                    }
                }));
                return;
            }
            this.dispatchEvent(new CustomEvent("web-share:error", {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    #n = (t)=>{
        t.preventDefault(), this.disabled || this.share();
    };
    #a = (t)=>{
        t.target && "button" === t.target.name && (this.#e?.removeEventListener("click", this.#n), this.#e = this.#i(), this.#e && (this.#e.addEventListener("click", this.#n), "BUTTON" === this.#e.nodeName || this.#e.hasAttribute("role") || this.#e.setAttribute("role", "button")));
    };
    #i() {
        return this.#t && this.#t.assignedElements({
            flatten: !0
        }).find((t)=>"BUTTON" === t.nodeName || "button" === t.getAttribute("slot")) || null;
    }
    #r(t) {
        if (Object.prototype.hasOwnProperty.call(this, t)) {
            let e = this[t];
            delete this[t], this[t] = e;
        }
    }
    static defineCustomElement(t = "web-share") {
        "undefined" == typeof window || window.customElements.get(t) || window.customElements.define(t, s);
    }
}
s.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqofg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilesDropzone", ()=>m);
Object.defineProperty({}, "FilesDropzone", {
    get: function() {
        return m;
    },
    set: void 0,
    enumerable: !0,
    configurable: !0
});
let e = new Map([
    [
        "aac",
        "audio/aac"
    ],
    [
        "abw",
        "application/x-abiword"
    ],
    [
        "arc",
        "application/x-freearc"
    ],
    [
        "avif",
        "image/avif"
    ],
    [
        "avi",
        "video/x-msvideo"
    ],
    [
        "azw",
        "application/vnd.amazon.ebook"
    ],
    [
        "bin",
        "application/octet-stream"
    ],
    [
        "bmp",
        "image/bmp"
    ],
    [
        "bz",
        "application/x-bzip"
    ],
    [
        "bz2",
        "application/x-bzip2"
    ],
    [
        "cda",
        "application/x-cdf"
    ],
    [
        "csh",
        "application/x-csh"
    ],
    [
        "css",
        "text/css"
    ],
    [
        "csv",
        "text/csv"
    ],
    [
        "doc",
        "application/msword"
    ],
    [
        "docx",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    [
        "eot",
        "application/vnd.ms-fontobject"
    ],
    [
        "epub",
        "application/epub+zip"
    ],
    [
        "gz",
        "application/gzip"
    ],
    [
        "gif",
        "image/gif"
    ],
    [
        "heic",
        "image/heic"
    ],
    [
        "heif",
        "image/heif"
    ],
    [
        "htm",
        "text/html"
    ],
    [
        "html",
        "text/html"
    ],
    [
        "ico",
        "image/vnd.microsoft.icon"
    ],
    [
        "ics",
        "text/calendar"
    ],
    [
        "jar",
        "application/java-archive"
    ],
    [
        "jpeg",
        "image/jpeg"
    ],
    [
        "jpg",
        "image/jpeg"
    ],
    [
        "jxl",
        "image/jxl"
    ],
    [
        "js",
        "text/javascript"
    ],
    [
        "json",
        "application/json"
    ],
    [
        "jsonld",
        "application/ld+json"
    ],
    [
        "markdown",
        "text/markdown"
    ],
    [
        "md",
        "text/markdown"
    ],
    [
        "mid",
        "audio/midi"
    ],
    [
        "midi",
        "audio/midi"
    ],
    [
        "mjs",
        "text/javascript"
    ],
    [
        "mp3",
        "audio/mpeg"
    ],
    [
        "mp4",
        "video/mp4"
    ],
    [
        "mpeg",
        "video/mpeg"
    ],
    [
        "mpkg",
        "application/vnd.apple.installer+xml"
    ],
    [
        "odp",
        "application/vnd.oasis.opendocument.presentation"
    ],
    [
        "ods",
        "application/vnd.oasis.opendocument.spreadsheet"
    ],
    [
        "odt",
        "application/vnd.oasis.opendocument.text"
    ],
    [
        "oga",
        "audio/ogg"
    ],
    [
        "ogv",
        "video/ogg"
    ],
    [
        "ogx",
        "application/ogg"
    ],
    [
        "opus",
        "audio/opus"
    ],
    [
        "otf",
        "font/otf"
    ],
    [
        "png",
        "image/png"
    ],
    [
        "pdf",
        "application/pdf"
    ],
    [
        "php",
        "application/x-httpd-php"
    ],
    [
        "ppt",
        "application/vnd.ms-powerpoint"
    ],
    [
        "pptx",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    [
        "rar",
        "application/vnd.rar"
    ],
    [
        "rtf",
        "application/rtf"
    ],
    [
        "sh",
        "application/x-sh"
    ],
    [
        "svg",
        "image/svg+xml"
    ],
    [
        "swf",
        "application/x-shockwave-flash"
    ],
    [
        "tar",
        "application/x-tar"
    ],
    [
        "tif",
        "image/tiff"
    ],
    [
        "tiff",
        "image/tiff"
    ],
    [
        "ts",
        "video/mp2t"
    ],
    [
        "ttf",
        "font/ttf"
    ],
    [
        "txt",
        "text/plain"
    ],
    [
        "vsd",
        "application/vnd.visio"
    ],
    [
        "wav",
        "audio/wav"
    ],
    [
        "weba",
        "audio/webm"
    ],
    [
        "webm",
        "video/webm"
    ],
    [
        "webp",
        "image/webp"
    ],
    [
        "woff",
        "font/woff"
    ],
    [
        "woff2",
        "font/woff2"
    ],
    [
        "xhtml",
        "application/xhtml+xml"
    ],
    [
        "xls",
        "application/vnd.ms-excel"
    ],
    [
        "xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ],
    [
        "xml",
        "application/xml"
    ],
    [
        "xul",
        "application/vnd.mozilla.xul+xml"
    ],
    [
        "zip",
        "application/zip"
    ],
    [
        "7z",
        "application/x-7z-compressed"
    ],
    [
        "mkv",
        "video/x-matroska"
    ],
    [
        "mov",
        "video/quicktime"
    ],
    [
        "msg",
        "application/vnd.ms-outlook"
    ]
]), t = [
    ".DS_Store",
    "Thumbs.db"
], o = (t)=>{
    let { name: o } = t;
    if (o && -1 !== o.lastIndexOf(".") && !t.type) {
        let i = (o.split(".").pop() || "").toLowerCase(), r = e.get(i);
        r && Object.defineProperty(t, "type", {
            value: r,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return t;
}, i = (e, t)=>{
    let i = o(e);
    if ("string" != typeof i.path) {
        let { webkitRelativePath: o } = e;
        Object.defineProperty(i, "path", {
            value: "string" == typeof t ? t : o || e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
        });
    }
    return i;
}, r = async (e)=>await new Promise((t, o)=>{
        e.readEntries(t, o);
    }), a = async (e)=>{
    let t = [], o = await r(e);
    for(; o.length > 0;)t.push(...o), o = await r(e);
    return t;
}, n = (e)=>new Promise((t, o)=>{
        e.file((o)=>t(i(o, e.fullPath)), o);
    }), s = async (e)=>{
    let o = [], i = [];
    for (let t of e){
        if ("file" !== t.kind) continue;
        let e = t.getAsEntry ? t.getAsEntry() : t.webkitGetAsEntry();
        i.push(e);
    }
    for(; i.length > 0;){
        let e = i.shift();
        if (e) {
            if (e.isFile) {
                let i = await n(e);
                -1 === t.indexOf(i.name) && o.push(i);
            } else e.isDirectory && i.push(...await a(e.createReader()));
        }
    }
    return o;
}, d = async (e)=>{
    let o = [];
    for (let r of e)-1 === t.indexOf(r.name) && o.push(i(r));
    return o;
}, l = async (e)=>e.dataTransfer ? e.dataTransfer.items ? await s(e.dataTransfer.items) : await d(e.dataTransfer.files) : await d(e.target.files), p = "files-dropzone", c = "TOO_MANY_FILES", h = document.createElement("template"), u = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[no-click]) .dropzone {
    cursor: default;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;
h.innerHTML = `
  <style>
    ${u}
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;
class m extends HTMLElement {
    #e = null;
    #t = null;
    constructor(){
        super(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(h.content.cloneNode(!0)), this.shadowRoot && (this.#e = this.shadowRoot.getElementById("fileInput"), this.#t = this.shadowRoot.getElementById("dropzoneEl"));
    }
    static get observedAttributes() {
        return [
            "accept",
            "disabled",
            "multiple",
            "no-keyboard"
        ];
    }
    attributeChangedCallback(e, t, o) {
        "accept" === e && t !== o && this.#e && (this.#e.accept = this.accept), "disabled" === e && t !== o && this.#e && (this.#e.disabled = this.disabled, this.disabled ? this.#t?.removeAttribute("tabindex") : this.#t?.setAttribute("tabindex", "0")), "multiple" === e && t !== o && this.#e && (this.#e.multiple = this.multiple), "no-keyboard" === e && t !== o && this.#t && (this.noKeyboard ? this.#t.removeAttribute("tabindex") : this.#t.setAttribute("tabindex", "0"));
    }
    connectedCallback() {
        this.#o("accept"), this.#o("disabled"), this.#o("maxFiles"), this.#o("maxSize"), this.#o("minSize"), this.#o("multiple"), this.#o("noClick"), this.#o("noDrag"), this.#o("noKeyboard"), this.#o("autoFocus"), this.#o("noStyle"), this.#e?.addEventListener("change", this.#i), this.#t?.addEventListener("dragenter", this.#r), this.#t?.addEventListener("dragover", this.#a), this.#t?.addEventListener("dragleave", this.#n), this.#t?.addEventListener("drop", this.#s), this.#t?.addEventListener("click", this.#d), this.#t?.addEventListener("keyup", this.#l), this.autoFocus && this.#t?.focus();
    }
    disconnectedCallback() {
        this.#e?.removeEventListener("change", this.#i), this.#t?.removeEventListener("dragenter", this.#r), this.#t?.removeEventListener("dragover", this.#a), this.#t?.removeEventListener("dragleave", this.#n), this.#t?.removeEventListener("drop", this.#s), this.#t?.removeEventListener("click", this.#d), this.#t?.removeEventListener("keyup", this.#l);
    }
    get accept() {
        return this.getAttribute("accept") || "";
    }
    set accept(e) {
        this.setAttribute("accept", null != e ? e.toString() : e);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        this.toggleAttribute("disabled", !!e);
    }
    get maxFiles() {
        let e = Number(this.getAttribute("max-files")) || 0;
        return e <= 0 ? 1 / 0 : Math.floor(Math.abs(e));
    }
    set maxFiles(e) {
        this.setAttribute("max-files", null != e ? e.toString() : e);
    }
    get maxSize() {
        let e = this.getAttribute("max-size");
        if (null === e) return 1 / 0;
        let t = Number(e);
        return Number.isNaN(t) ? 1 / 0 : t;
    }
    set maxSize(e) {
        this.setAttribute("max-size", null != e ? e.toString() : e);
    }
    get minSize() {
        let e = this.getAttribute("min-size");
        if (null === e) return 0;
        let t = Number(e);
        return Number.isNaN(t) ? 0 : t;
    }
    set minSize(e) {
        this.setAttribute("min-size", null != e ? e.toString() : e);
    }
    get multiple() {
        return this.hasAttribute("multiple");
    }
    set multiple(e) {
        this.toggleAttribute("multiple", !!e);
    }
    get noClick() {
        return this.hasAttribute("no-click");
    }
    set noClick(e) {
        this.toggleAttribute("no-click", !!e);
    }
    get noDrag() {
        return this.hasAttribute("no-drag");
    }
    set noDrag(e) {
        this.toggleAttribute("no-drag", !!e);
    }
    get noKeyboard() {
        return this.hasAttribute("no-keyboard");
    }
    set noKeyboard(e) {
        this.toggleAttribute("no-keyboard", !!e);
    }
    get autoFocus() {
        return this.hasAttribute("auto-focus");
    }
    set autoFocus(e) {
        this.toggleAttribute("auto-focus", !!e);
    }
    get noStyle() {
        return this.hasAttribute("no-style");
    }
    set noStyle(e) {
        this.toggleAttribute("no-style", !!e);
    }
    #i = async (e)=>{
        try {
            this.#p(await l(e));
        } catch (e) {
            this.dispatchEvent(new CustomEvent(`${p}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: e
                }
            }));
        }
    };
    #r = ()=>{
        this.disabled || this.noDrag || this.dispatchEvent(new Event(`${p}-dragenter`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #a = (e)=>{
        if (e.preventDefault(), this.disabled || this.noDrag) {
            e.dataTransfer.dropEffect = "none";
            return;
        }
        e.dataTransfer.dropEffect = "copy", this.#t && (this.#t.classList.add("dropzone--dragover"), this.#t.part.add("dropzone--dragover")), this.dispatchEvent(new Event(`${p}-dragover`, {
            bubbles: !0,
            composed: !0
        }));
    };
    #n = ()=>{
        this.disabled || this.noDrag || (this.#t && (this.#t.classList.remove("dropzone--dragover"), this.#t.part.remove("dropzone--dragover")), this.dispatchEvent(new Event(`${p}-dragleave`, {
            bubbles: !0,
            composed: !0
        })));
    };
    #s = async (e)=>{
        if (!this.disabled && !this.noDrag) {
            e.preventDefault(), this.#t && (this.#t.classList.remove("dropzone--dragover"), this.#t.part.remove("dropzone--dragover"));
            try {
                this.#p(await l(e));
            } catch (e) {
                this.dispatchEvent(new CustomEvent(`${p}-error`, {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        error: e
                    }
                }));
            }
        }
    };
    #d = ()=>{
        this.disabled || this.noClick || this.#e?.click();
    };
    #l = (e)=>{
        this.disabled || this.noKeyboard || " " !== e.key && "Enter" !== e.key || this.#e?.click();
    };
    #p(e) {
        if (!Array.isArray(e) || !e.length) return;
        let t = [], o = [], i = e.length;
        if (!this.multiple && i > 1) for (let t of e)o.push({
            file: t,
            errors: [
                {
                    code: c,
                    message: "Too many files selected. Only 1 file is allowed."
                }
            ]
        });
        else if (this.multiple && i > this.maxFiles) for (let t of e)o.push({
            file: t,
            errors: [
                {
                    code: c,
                    message: `Too many files selected. Only ${this.maxFiles} ${this.maxFiles > 1 ? "files are" : "file is"} allowed.`
                }
            ]
        });
        else for (let i of e){
            let e = function(e, t = "") {
                if (!t) return !0;
                let o = [
                    ...new Set(t.split(",").map((e)=>e.trim()).filter(Boolean))
                ], i = e.type, r = i.replace(/\/.*$/, "");
                for (let t of o)if ("." === t.charAt(0)) {
                    if (-1 !== e.name.toLowerCase().indexOf(t.toLowerCase(), e.name.length - t.length)) return !0;
                } else if (/\/\*$/.test(t)) {
                    if (r === t.replace(/\/.*$/, "")) return !0;
                } else if (i === t) return !0;
                return !1;
            }(i, this.accept), r = i.size > this.maxSize, a = i.size < this.minSize;
            if (!e || r || a) {
                let t = [];
                e || t.push({
                    code: "INVALID_MIME_TYPE",
                    message: `File type "${i.type}" is not accepted.`
                }), r && t.push({
                    code: "FILE_TOO_LARGE",
                    message: `File size ${i.size} exceeds the maximum size of ${this.maxSize}.`
                }), a && t.push({
                    code: "FILE_TOO_SMALL",
                    message: `File size ${i.size} is smaller than the minimum size of ${this.minSize}.`
                }), o.push({
                    file: i,
                    errors: t
                });
            } else t.push(i);
        }
        this.dispatchEvent(new CustomEvent(`${p}-drop`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t,
                rejectedFiles: o
            }
        })), t.length > 0 && this.dispatchEvent(new CustomEvent(`${p}-drop-accepted`, {
            bubbles: !0,
            composed: !0,
            detail: {
                acceptedFiles: t
            }
        })), o.length > 0 && this.dispatchEvent(new CustomEvent(`${p}-drop-rejected`, {
            bubbles: !0,
            composed: !0,
            detail: {
                rejectedFiles: o
            }
        })), this.#e && (this.#e.value = this.#e.defaultValue);
    }
    openFileDialog() {
        this.disabled || this.#e?.click();
    }
    #o(e) {
        if (Object.prototype.hasOwnProperty.call(this, e)) {
            let t = this[e];
            delete this[e], this[e] = t;
        }
    }
    static defineCustomElement(e = p) {
        "undefined" == typeof window || window.customElements.get(e) || window.customElements.define(e, m);
    }
}
m.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDLvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWebShareSupported", ()=>a);
function a(a) {
    return null !== a && "object" == typeof a ? "share" in navigator && "canShare" in navigator && navigator.canShare(a) : "share" in navigator;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cj3u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverElement", ()=>k);
var e, t, i, s;
function n(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
    return t.get(e);
}
function a(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function o(e, t) {
    return a(e, n(e, t, "get"));
}
function r(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function l(e, t, i) {
    r(e, t), t.set(e, i);
}
function h(e, t, i) {
    if (t.set) t.set.call(e, i);
    else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = i;
    }
}
function d(e, t, i) {
    return h(e, n(e, t, "set"), i), i;
}
function c(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
}
function u(e, t) {
    r(e, t), t.add(e);
}
e = {}, t = "ResizeObserverElement", i = function() {
    return k;
}, Object.defineProperty(e, t, {
    get: i,
    set: s,
    enumerable: !0,
    configurable: !0
});
const b = document.createElement("template"), w = String.raw;
b.innerHTML = w`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;
var f = new WeakMap, p = new WeakMap, v = new WeakMap, m = new WeakSet, E = new WeakSet, g = new WeakMap, y = new WeakSet;
class k extends HTMLElement {
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(e, t, i) {
        "disabled" === e && t !== i && (this.disabled ? c(this, E, z).call(this) : c(this, m, C).call(this));
    }
    connectedCallback() {
        c(this, y, O).call(this, "disabled"), "ResizeObserver" in window && (d(this, p, new ResizeObserver((e)=>{
            this.dispatchEvent(new CustomEvent("resize-observer:resize", {
                bubbles: !0,
                composed: !0,
                detail: {
                    entries: e
                }
            }));
        })), this.disabled || c(this, m, C).call(this), o(this, f).addEventListener("slotchange", o(this, g)));
    }
    disconnectedCallback() {
        c(this, E, z).call(this), o(this, f).removeEventListener("slotchange", o(this, g));
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(e) {
        e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
    }
    static defineCustomElement(e = "resize-observer") {
        "undefined" == typeof window || window.customElements.get(e) || window.customElements.define(e, k);
    }
    constructor(){
        super(), u(this, m), u(this, E), u(this, y), l(this, f, {
            writable: !0,
            value: void 0
        }), l(this, p, {
            writable: !0,
            value: void 0
        }), l(this, v, {
            writable: !0,
            value: void 0
        }), l(this, g, {
            writable: !0,
            value: ()=>{
                this.disabled || c(this, m, C).call(this);
            }
        }), this.shadowRoot || (this.attachShadow({
            mode: "open"
        }), this.shadowRoot.appendChild(b.content.cloneNode(!0))), d(this, f, this.shadowRoot.querySelector("slot")), d(this, p, null), d(this, v, []);
    }
}
function C() {
    o(this, f) && o(this, p) && (o(this, v).forEach((e)=>o(this, p).unobserve(e)), d(this, v, []), o(this, f).assignedElements().forEach((e)=>{
        o(this, p).observe(e), o(this, v).push(e);
    }));
}
function z() {
    o(this, p) && o(this, p).disconnect();
}
function O(e) {
    if (Object.prototype.hasOwnProperty.call(this, e)) {
        const t = this[e];
        delete this[e], this[e] = t;
    }
}
k.defineCustomElement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmJWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CapturePhoto", ()=>n);
let t = (t, e, i)=>(Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Math.min(Math.max(t, Math.min(e, i)), Math.max(e, i))), e = "capture-photo", i = `
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none;
  }

  video {
    display: block;
  }

  #output:empty {
    display: none;
  }
`, o = document.createElement("template");
o.innerHTML = `
  <style>${i}</style>

  <video part="video" playsinline></video>

  <canvas hidden></canvas>

  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>

    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>

    <slot name="actions"></slot>
  </div>

  <slot></slot>

  <div part="output-container" id="output"></div>
`;
class n extends HTMLElement {
    #t = {};
    #e = null;
    #i = null;
    #o = null;
    #n = null;
    #a = null;
    #s = null;
    #r = null;
    #l = null;
    constructor(){
        super(), this.#t = this.getSupportedConstraints(), this.shadowRoot || this.attachShadow({
            mode: "open"
        }).appendChild(o.content.cloneNode(!0));
    }
    static get observedAttributes() {
        return [
            "no-image",
            "facing-mode",
            "camera-resolution",
            "pan",
            "tilt",
            "zoom"
        ];
    }
    attributeChangedCallback(t, e, i) {
        if (!this.isConnected) return;
        let o = this.getTrackCapabilities(), n = this.getTrackSettings();
        if ("no-image" === t && e !== i && this.#u(), "facing-mode" === t && e !== i && "facingMode" in this.#t) {
            let t = [
                "user",
                "environment"
            ].includes(this.facingMode || "");
            "facingMode" in n && t && (this.stopVideoStream(), this.startVideoStream());
        }
        if ("camera-resolution" === t && e !== i && "string" == typeof this.cameraResolution && this.cameraResolution.trim().length > 0) {
            let [t = 0, e = 0] = this.cameraResolution.split("x").map((t)=>Number(t));
            if (t > 0 && e > 0 && "width" in o && "height" in o) {
                let i = !!(o.width?.min && o.width?.max) && t >= o?.width?.min && t <= o?.width?.max, a = !!(o.height?.min && o.height?.max) && e >= o?.height?.min && e <= o?.height?.max;
                "width" in n && "height" in n && i && a && (this.stopVideoStream(), this.startVideoStream());
            }
        }
        if ("pan" === t && e !== i && "pan" in this.#t) {
            let t = !!("pan" in o && o.pan?.min && o.pan?.max) && this.pan >= o.pan.min && this.pan <= o.pan.max;
            "pan" in n && "number" == typeof this.pan && t && this.#h("pan", this.pan);
        }
        if ("tilt" === t && e !== i && "tilt" in this.#t) {
            let t = !!("tilt" in o && o.tilt?.min && o.tilt?.max) && this.tilt >= o.tilt.min && this.tilt <= o.tilt.max;
            "tilt" in n && "number" == typeof this.tilt && t && this.#h("tilt", this.tilt);
        }
        if ("zoom" === t && e !== i && "zoom" in this.#t) {
            let t = !!("zoom" in o && o.zoom?.min && o.zoom?.max) && this.zoom >= o.zoom.min && this.zoom <= o.zoom.max;
            "zoom" in n && "number" == typeof this.zoom && t && this.#h("zoom", this.zoom);
        }
    }
    connectedCallback() {
        if (this.#d("autpoPlay"), this.#d("noImage"), this.#d("facingMode"), this.#d("cameraResolution"), this.#d("pan"), this.#d("tilt"), this.#d("zoom"), this.#d("calculateFileSize"), this.#i = this.shadowRoot?.querySelector("canvas") || null, this.#o = this.shadowRoot?.getElementById("output") || null, this.#n = this.shadowRoot?.querySelector("video") || null, this.#a = this.shadowRoot?.querySelector('slot[name="capture-button"]') || null, this.#s = this.#c(), this.#r = this.shadowRoot?.querySelector('slot[name="facing-mode-button"]') || null, this.#l = this.#m(), this.#n?.addEventListener("loadedmetadata", this.#p), this.#a?.addEventListener("slotchange", this.#g), this.#s?.addEventListener("click", this.#b), this.#r?.addEventListener("slotchange", this.#f), this.#l?.addEventListener("click", this.#v), !n.isSupported()) return this.dispatchEvent(new CustomEvent(`${e}:error`, {
            bubbles: !0,
            composed: !0,
            detail: {
                error: {
                    name: "NotSupportedError",
                    message: "Not supported"
                }
            }
        }));
        this.autoPlay && this.startVideoStream();
    }
    disconnectedCallback() {
        this.stopVideoStream(), this.#l?.removeEventListener("click", this.#v), this.#s?.removeEventListener("click", this.#b), this.#n?.removeEventListener("canplay", this.#p), this.#a?.removeEventListener("slotchange", this.#g), this.#r?.removeEventListener("slotchange", this.#f);
    }
    get autoPlay() {
        return this.hasAttribute("auto-play");
    }
    set autoPlay(t) {
        this.toggleAttribute("auto-play", !!t);
    }
    get noImage() {
        return this.hasAttribute("no-image");
    }
    set noImage(t) {
        this.toggleAttribute("no-image", !!t);
    }
    get facingMode() {
        return this.getAttribute("facing-mode") || "user";
    }
    set facingMode(t) {
        this.setAttribute("facing-mode", t);
    }
    get cameraResolution() {
        return this.getAttribute("camera-resolution") || "";
    }
    set cameraResolution(t) {
        this.setAttribute("camera-resolution", t);
    }
    get pan() {
        return Number(this.getAttribute("pan")) || 0;
    }
    set pan(t) {
        this.setAttribute("pan", null != t ? t.toString() : t);
    }
    get tilt() {
        return Number(this.getAttribute("tilt")) || 0;
    }
    set tilt(t) {
        this.setAttribute("tilt", null != t ? t.toString() : t);
    }
    get zoom() {
        return Number(this.getAttribute("zoom")) || 1;
    }
    set zoom(t) {
        this.setAttribute("zoom", null != t ? t.toString() : t);
    }
    get loading() {
        return this.hasAttribute("loading");
    }
    get calculateFileSize() {
        return this.hasAttribute("calculate-file-size");
    }
    set calculateFileSize(t) {
        this.toggleAttribute("calculate-file-size", !!t);
    }
    #v = (t)=>{
        t.preventDefault(), this.loading || (this.facingMode = "user" !== this.facingMode && this.facingMode ? "user" : "environment");
    };
    #b = (t)=>{
        t.preventDefault(), this.capture();
    };
    #p = (t)=>{
        let i = t.target;
        i.play().then(()=>{
            this.dispatchEvent(new CustomEvent(`${e}:video-play`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    video: i
                }
            }));
        }).catch((t)=>{
            this.dispatchEvent(new CustomEvent(`${e}:error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }).finally(()=>{
            this.removeAttribute("loading");
        });
    };
    #u() {
        this.#o && Array.from(this.#o.childNodes).forEach((t)=>t.remove());
    }
    #h(e, i) {
        if (!this.#e || !e || !i) return;
        let [o] = this.#e.getVideoTracks(), n = this.getTrackCapabilities();
        e in this.getTrackSettings() && o.applyConstraints({
            advanced: [
                {
                    [e]: t(Number(i), n[e]?.min || 1, n[e]?.max || 1)
                }
            ]
        });
    }
    #g = (t)=>{
        t.target?.name === "capture-button" && (this.#s?.removeEventListener("click", this.#b), this.#s = this.#c(), this.#s && (this.#s.addEventListener("click", this.#b), "BUTTON" === this.#s.nodeName || this.#s.hasAttribute("role") || this.#s.setAttribute("role", "button")));
    };
    #f = (t)=>{
        t.target?.name === "facing-mode-button" && (this.#l?.removeEventListener("click", this.#v), this.#l = this.#m(), this.#l && (this.#l.addEventListener("click", this.#v), "BUTTON" === this.#l.nodeName || this.#l.hasAttribute("role") || this.#l.setAttribute("role", "button")));
    };
    #m() {
        return this.#r && this.#r.assignedElements({
            flatten: !0
        }).find((t)=>"BUTTON" === t.nodeName || "facing-mode-button" === t.getAttribute("slot")) || null;
    }
    #c() {
        return this.#a && this.#a.assignedElements({
            flatten: !0
        }).find((t)=>"BUTTON" === t.nodeName || "capture-button" === t.getAttribute("slot")) || null;
    }
    #d(t) {
        if (Object.prototype.hasOwnProperty.call(this, t)) {
            let e = this[t];
            delete this[t], this[t] = e;
        }
    }
    async startVideoStream() {
        if (!n.isSupported() || this.#e) return;
        this.setAttribute("loading", "");
        let t = {
            video: {
                facingMode: {
                    ideal: this.facingMode || "user"
                },
                pan: !0,
                tilt: !0,
                zoom: !0
            },
            audio: !1
        };
        if ("string" == typeof this.cameraResolution && this.cameraResolution.trim().length > 0) {
            let [e = 0, i = 0] = this.cameraResolution.split("x").map((t)=>Number(t));
            e > 0 && i > 0 && (t.video.width = e, t.video.height = i);
        }
        try {
            this.#e = await navigator.mediaDevices.getUserMedia(t), this.#n && (this.#n.srcObject = this.#e), this.#h("pan", this.pan), this.#h("tilt", this.tilt), this.#h("zoom", this.zoom);
            let e = this.getTrackSettings();
            "facingMode" in e && this.#r && (this.#r.hidden = !1);
        } catch (t) {
            this.dispatchEvent(new CustomEvent(`${e}:error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        } finally{
            this.removeAttribute("loading");
        }
    }
    stopVideoStream() {
        if (!this.#n || !this.#e) return;
        let [t] = this.#e.getVideoTracks();
        t?.stop(), this.#n.srcObject = null, this.#e = null;
    }
    async capture() {
        if (!this.loading && this.#i && this.#n) try {
            let t = this.#i.getContext("2d"), i = this.#n.videoWidth, o = this.#n.videoHeight;
            this.#i.width = i, this.#i.height = o, t?.drawImage(this.#n, 0, 0, i, o);
            let n = this.#i.toDataURL("image/png");
            if ("string" == typeof n && n.includes("data:image")) {
                if (!this.noImage) {
                    let t = new Image;
                    t.src = n, t.width = i, t.height = o, t.setAttribute("part", "output-image"), this.#u(), this.#o?.appendChild(t);
                }
                let t = {
                    dataURI: n,
                    width: i,
                    height: o
                };
                if (this.calculateFileSize) try {
                    let e = await fetch(n), i = (await e.blob()).size;
                    i && (t.size = i);
                } catch (t) {}
                this.dispatchEvent(new CustomEvent(`${e}:success`, {
                    bubbles: !0,
                    composed: !0,
                    detail: t
                }));
            }
        } catch (t) {
            this.dispatchEvent(new CustomEvent(`${e}:error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: t
                }
            }));
        }
    }
    getSupportedConstraints() {
        return n.isSupported() && navigator.mediaDevices.getSupportedConstraints() || {};
    }
    getTrackCapabilities() {
        if (!this.#e) return {};
        let [t] = this.#e.getVideoTracks();
        return t && "function" == typeof t.getCapabilities && t.getCapabilities() || {};
    }
    getTrackSettings() {
        if (!this.#e) return {};
        let [t] = this.#e.getVideoTracks();
        return t && "function" == typeof t.getSettings && t.getSettings() || {};
    }
    static isSupported() {
        return !!navigator.mediaDevices?.getUserMedia;
    }
    static defineCustomElement(t = e) {
        "undefined" == typeof window || window.customElements.get(t) || window.customElements.define(t, n);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sgsxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSettings", ()=>getSettings);
parcelHelpers.export(exports, "setSettings", ()=>setSettings);
parcelHelpers.export(exports, "getHistory", ()=>getHistory);
parcelHelpers.export(exports, "setHistory", ()=>setHistory);
var _idbKeyval = require("idb-keyval");
const STORAGE_PREFIX = "barcode-scanner/";
const SETTINGS_STORAGE_KEY = "settings";
const HISTORY_STORAGE_KEY = "history";
const getItem = async (key)=>{
    try {
        return {
            value: await (0, _idbKeyval.get)(key),
            error: void 0
        };
    } catch (error) {
        return {
            value: void 0,
            error
        };
    }
};
const setItem = async (key, data)=>{
    try {
        await (0, _idbKeyval.set)(key, data);
        return {
            error: void 0
        };
    } catch (error) {
        return {
            error
        };
    }
};
const getSettings = async ()=>{
    return getItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY);
};
const setSettings = async (data)=>{
    return setItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY, data);
};
const getHistory = async ()=>{
    return getItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY);
};
const setHistory = async (data)=>{
    return setItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY, data);
};

},{"idb-keyval":"lciyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lciyz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clear", ()=>clear);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "delMany", ()=>delMany);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getMany", ()=>getMany);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "promisifyRequest", ()=>promisifyRequest);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "setMany", ()=>setMany);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "values", ()=>values);
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = function() {
            return resolve(request.result);
        }; // @ts-ignore - file size hacks
        request.onabort = request.onerror = function() {
            return reject(request.error);
        };
    });
}
function createStore(dbName, storeName) {
    var request = indexedDB.open(dbName);
    request.onupgradeneeded = function() {
        return request.result.createObjectStore(storeName);
    };
    var dbp = promisifyRequest(request);
    return function(txMode, callback) {
        return dbp.then(function(db) {
            return callback(db.transaction(storeName, txMode).objectStore(storeName));
        });
    };
}
var defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) defaultGetStoreFunc = createStore("keyval-store", "keyval");
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function get(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore("readonly", function(store) {
        return promisifyRequest(store.get(key));
    });
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function set(key, value) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
    return customStore("readwrite", function(store) {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function setMany(entries) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore("readwrite", function(store) {
        entries.forEach(function(entry) {
            return store.put(entry[1], entry[0]);
        });
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function getMany(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore("readonly", function(store) {
        return Promise.all(keys.map(function(key) {
            return promisifyRequest(store.get(key));
        }));
    });
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function update(key, updater) {
    var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
    return customStore("readwrite", function(store) {
        return(// If I try to chain promises, the transaction closes in browsers
        // that use a promise polyfill (IE10/11).
        new Promise(function(resolve, reject) {
            store.get(key).onsuccess = function() {
                try {
                    store.put(updater(this.result), key);
                    resolve(promisifyRequest(store.transaction));
                } catch (err) {
                    reject(err);
                }
            };
        }));
    });
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function del(key) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore("readwrite", function(store) {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function delMany(keys) {
    var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
    return customStore("readwrite", function(store) {
        keys.forEach(function(key) {
            return store.delete(key);
        });
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function clear() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore("readwrite", function(store) {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function() {
        if (!this.result) return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function keys() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        if (store.getAllKeys) return promisifyRequest(store.getAllKeys());
        var items = [];
        return eachCursor(store, function(cursor) {
            return items.push(cursor.key);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function values() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        if (store.getAll) return promisifyRequest(store.getAll());
        var items = [];
        return eachCursor(store, function(cursor) {
            return items.push(cursor.value);
        }).then(function() {
            return items;
        });
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */ function entries() {
    var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
    return customStore("readonly", function(store) {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) return Promise.all([
            promisifyRequest(store.getAllKeys()),
            promisifyRequest(store.getAll())
        ]).then(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), keys = _ref2[0], values = _ref2[1];
            return keys.map(function(key, i) {
                return [
                    key,
                    values[i]
                ];
            });
        });
        var items = [];
        return customStore("readonly", function(store) {
            return eachCursor(store, function(cursor) {
                return items.push([
                    cursor.key,
                    cursor.value
                ]);
            }).then(function() {
                return items;
            });
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wKPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toastAlert", ()=>toastAlert);
const toastContainer = document.getElementById("toastContainer");
const hideAlert = (evt)=>{
    const target = evt.currentTarget;
    target.removeEventListener("click", hideAlert);
    toastContainer.removeChild(target.parentNode);
};
const toastAlert = (message = "", type = "info")=>{
    const types = [
        "info",
        "warning",
        "danger"
    ];
    if (!types.includes(type)) type = "info";
    const template = /* html */ `
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;
    const div = document.createElement("div");
    div.className = `alert alert-${type} alert-dismissible text-break`;
    div.innerHTML = template;
    div.querySelector("button").addEventListener("click", hideAlert);
    toastContainer.appendChild(div);
    setTimeout(()=>div.classList.add("show"), 100);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVhN7":[function(require,module,exports) {
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {function} fn The function to be executed.
 * @param {Number} [wait=0] Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate=false] If true or any truthy value, triggers the function on the leading edge.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} A new debounced function.
 * @example
 *
 * const debouncedHandler = debounce(() => {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', debouncedHandler, false);
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
const debounce = (fn, wait = 0, immediate = false)=>{
    let timerId = null;
    if (typeof fn !== "function") throw new TypeError("Expected a function for first argument");
    return (...args)=>{
        clearTimeout(timerId);
        if (immediate && !timerId) fn(...args);
        timerId = setTimeout(()=>{
            timerId = null;
            if (!immediate) fn(...args);
        }, wait);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uo5j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CustomClipboardCopy", ()=>CustomClipboardCopy);
var _clipboardCopyJs = require("@georapbox/clipboard-copy-element/dist/clipboard-copy.js");
/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */ class CustomClipboardCopy extends (0, _clipboardCopyJs.ClipboardCopy) {
    constructor(){
        super();
        const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
        const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
        copySlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `;
        successSlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `;
    }
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            "only-icon"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === "only-icon" && oldValue !== newValue) {
            const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
            const successSlot = this.shadowRoot.querySelector('slot[name="success"]');
            const copyText = copySlot.querySelector(".text");
            const successText = successSlot.querySelector(".text");
            if (copyText) copyText.hidden = this.onlyIcon;
            if (successText) successText.hidden = this.onlyIcon;
        }
    }
    get onlyIcon() {
        return this.hasAttribute("only-icon");
    }
    set onlyIcon(value) {
        if (value) this.setAttribute("only-icon", "");
        else this.removeAttribute("only-icon");
    }
    connectedCallback() {
        super.connectedCallback();
        this.#upgradeProperty("onlyIcon");
        if (!this.hasAttribute("feedback-duration")) this.setAttribute("feedback-duration", "1500");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /**
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   */ #upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    static defineCustomElement(elementName = "custom-clipboard-copy") {
        if (typeof window !== "undefined" && !window.customElements.get(elementName)) window.customElements.define(elementName, CustomClipboardCopy);
    }
}
CustomClipboardCopy.defineCustomElement();

},{"@georapbox/clipboard-copy-element/dist/clipboard-copy.js":"gMycM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gMycM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClipboardCopy", ()=>i);
let t = "clipboard-copy", e = "success", o = "error", s = document.createElement("template");
s.innerHTML = `
  <style>
    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }
  </style>

  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;
class i extends HTMLElement {
    #t = null;
    #e;
    #o;
    #s;
    #i;
    constructor(){
        super(), this.shadowRoot || (this.attachShadow({
            mode: "open"
        }), this.shadowRoot.appendChild(s.content.cloneNode(!0))), this.#e = this.shadowRoot.querySelector("button"), this.#o = this.shadowRoot.querySelector('slot[name="copy"]'), this.#s = this.shadowRoot.querySelector('slot[name="success"]'), this.#i = this.shadowRoot.querySelector('slot[name="error"]');
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    connectedCallback() {
        this.#r("value"), this.#r("from"), this.#r("disabled"), this.#r("feedbackDuration"), this.#e.addEventListener("click", this.#n);
    }
    disconnectedCallback() {
        this.#e.removeEventListener("click", this.#n), this.#a();
    }
    attributeChangedCallback(t) {
        "disabled" === t && (this.#e.disabled = this.disabled, this.#e.setAttribute("aria-disabled", this.disabled.toString()), this.#e.part.contains("button") && this.#e.part.toggle("button--disabled", this.disabled));
    }
    get value() {
        return this.getAttribute("value");
    }
    set value(t) {
        this.setAttribute("value", t);
    }
    get from() {
        return this.getAttribute("from");
    }
    set from(t) {
        this.setAttribute("from", t);
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(t) {
        t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
    }
    get feedbackDuration() {
        return Number(this.getAttribute("feedback-duration")) || 1e3;
    }
    set feedbackDuration(t) {
        this.setAttribute("feedback-duration", t);
    }
    async #l() {
        if (this.value || this.from) try {
            let o = "";
            if (this.value) o = this.value;
            else if (this.from) {
                let t = "getRootNode" in Element.prototype ? this.#e.getRootNode({
                    composed: !0
                }) : this.#e.ownerDocument;
                if (!t || !(t instanceof Document || t instanceof ShadowRoot)) return;
                let e = t.querySelector(this.from);
                if (!e) return;
                o = e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? e.value : e instanceof HTMLAnchorElement && e.hasAttribute("href") ? e.href : e.textContent;
            }
            await navigator.clipboard.writeText(o), this.#d(e), this.dispatchEvent(new CustomEvent(`${t}-success`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    value: o
                }
            }));
        } catch (e) {
            this.#d(o), this.dispatchEvent(new CustomEvent(`${t}-error`, {
                bubbles: !0,
                composed: !0,
                detail: {
                    error: e
                }
            }));
        }
    }
    #n = (t)=>{
        t.preventDefault(), this.disabled || this.#t || this.#l();
    };
    #d(t) {
        this.#o.hidden = !0, this.#s.hidden = t !== e, this.#i.hidden = t !== o, this.#e.part.remove("button--success"), this.#e.part.remove("button--error"), this.#e.part.add(`button--${t}`), this.#t && clearTimeout(this.#t), this.#t = setTimeout(()=>{
            this.#o.hidden = !1, this.#s.hidden = !0, this.#i.hidden = !0, this.#e.part.remove(`button--${t}`), this.#t = null;
        }, this.feedbackDuration);
    }
    #a() {
        this.#t && clearTimeout(this.#t), this.#t = null, this.#o.hidden = !1, this.#s.hidden = !0, this.#i.hidden = !0, this.#e.part.remove("button--success"), this.#e.part.remove("button--error");
    }
    #r(t) {
        if (Object.prototype.hasOwnProperty.call(this, t)) {
            let e = this[t];
            delete this[t], this[t] = e;
        }
    }
    static defineCustomElement(e = t) {
        "undefined" == typeof window || window.customElements.get(e) || window.customElements.define(e, i);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCZiQ":[function(require,module,exports) {
module.exports = require("6e8803747f7f3205")(require("8d40c999d6ffdc43").getBundleURL("g05j8") + "es.de9d79c9.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("jZ4Zq"));

},{"6e8803747f7f3205":"61B45","8d40c999d6ffdc43":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["gRY1p","ebWYT"], "ebWYT", "parcelRequire014d")

//# sourceMappingURL=index.739bf03c.js.map
