(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3>JSON2Form - Editor</h3>\n\n  <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"jsonText\"></textarea>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"preview()\">Preview</button>\n  <button class=\"btn btn-default\" (click)=\"format()\">Format</button>\n\n  <div class=\"modal fade in\" style=\"display:block\" *ngIf=\"show\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button class=\"close\" (click)=\"show=false\">&times;</button>\n          <h4>JSON2Form - Form</h4>\n        </div>\n        <div class=\"modal-body\" style=\"max-height:70vh;overflow:auto\">\n          <app-json-editor [data]=\"data\"></app-json-editor>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-success\" (click)=\"save()\">Save</button>\n          <button class=\"btn btn-danger\" (click)=\"show=false\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-editor.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/json-editor.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ROOT ARRAY -->\n<div *ngIf=\"isArray(data) && !parent\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    Root Array\n    <div class=\"pull-right\">\n      <button class=\"btn btn-success btn-xs\" (click)=\"addArrayItem(data)\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </button>\n      <a data-toggle=\"collapse\" href=\"#root-{{uid}}\" class=\"btn btn-default btn-xs\">\n        <span class=\"glyphicon glyphicon-chevron-down\"></span>\n      </a>\n    </div>\n  </div>\n  <div id=\"root-{{uid}}\" class=\"panel-collapse collapse in\">\n    <div class=\"panel-body\">\n      <div *ngFor=\"let item of data; let i=index\" class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          Item {{i+1}}\n          <div class=\"pull-right\">\n            <button class=\"btn btn-danger btn-xs\" (click)=\"removeArrayItem(data, i)\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <input *ngIf=\"isPrimitive(item)\"\n                 class=\"form-control\"\n                 [(ngModel)]=\"data[i]\">\n          <app-json-editor *ngIf=\"isObject(item)\"\n                           [data]=\"item\"\n                           [parent]=\"data\"\n                           [parentKey]=\"i\">\n          </app-json-editor>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- OBJECT -->\n<div *ngIf=\"isObject(data)\" class=\"panel panel-success\">\n  <div class=\"panel-heading\">\n    {{ parentKey || 'Object' }}\n    <div class=\"pull-right\">\n      <button *ngIf=\"parent\" class=\"btn btn-success btn-xs\" (click)=\"addField(data)\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </button>\n      <button *ngIf=\"parent\" class=\"btn btn-info btn-xs\" (click)=\"copyObject()\">\n        <span class=\"glyphicon glyphicon-duplicate\"></span>\n      </button>\n      <button *ngIf=\"parent\" class=\"btn btn-danger btn-xs\" (click)=\"removeObject()\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n      </button>\n      <a data-toggle=\"collapse\" href=\"#obj-{{uid}}\" class=\"btn btn-default btn-xs\">\n        <span class=\"glyphicon glyphicon-chevron-down\"></span>\n      </a>\n    </div>\n  </div>\n\n  <div id=\"obj-{{uid}}\" class=\"panel-collapse collapse in\">\n    <div class=\"panel-body\">\n      <div *ngFor=\"let key of keys(data)\" style=\"margin-bottom:6px\">\n        <input class=\"form-control\" style=\"width:30%; display:inline-block\"\n               [ngModel]=\"key\"\n               (ngModelChange)=\"onKeyChange(data, key, $event)\">\n\n        <input *ngIf=\"isPrimitive(data[key])\"\n               class=\"form-control\"\n               style=\"width:55%; display:inline-block\"\n               [(ngModel)]=\"data[key]\">\n\n        <app-json-editor *ngIf=\"isObject(data[key])\"\n                         [data]=\"data[key]\"\n                         [parent]=\"data\"\n                         [parentKey]=\"key\">\n        </app-json-editor>\n\n        <div *ngIf=\"isArray(data[key])\" class=\"panel panel-info\" style=\"margin-top:6px\">\n          <div class=\"panel-heading\">\n            {{ key }} (Array)\n            <div class=\"pull-right\">\n              <button class=\"btn btn-success btn-xs\" (click)=\"addArrayItem(data[key])\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n              </button>\n              <button class=\"btn btn-info btn-xs\" (click)=\"copyArray(data, key)\">\n                <span class=\"glyphicon glyphicon-duplicate\"></span>\n              </button>\n              <button class=\"btn btn-danger btn-xs\" (click)=\"removeArray(data, key)\">\n                <span class=\"glyphicon glyphicon-trash\"></span>\n              </button>\n              <a data-toggle=\"collapse\" href=\"#arr-{{uid}}-{{key}}\" class=\"btn btn-default btn-xs\">\n                <span class=\"glyphicon glyphicon-chevron-down\"></span>\n              </a>\n            </div>\n          </div>\n\n          <div id=\"arr-{{uid}}-{{key}}\" class=\"panel-collapse collapse in\">\n            <div class=\"panel-body\">\n              <div *ngFor=\"let item of data[key]; let i=index\" class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  Item {{i+1}}\n                  <div class=\"pull-right\">\n                    <button class=\"btn btn-info btn-xs\"\n                            (click)=\"duplicateArrayItem(data[key], i)\">\n                      <span class=\"glyphicon glyphicon-duplicate\"></span>\n                    </button>\n                    <button class=\"btn btn-danger btn-xs\"\n                            (click)=\"removeArrayItem(data[key], i)\">\n                      <span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n                  </div>\n                </div>\n                <div class=\"panel-body\">\n                  <input *ngIf=\"isPrimitive(item)\"\n                         class=\"form-control\"\n                         [(ngModel)]=\"data[key][i]\">\n                  <app-json-editor *ngIf=\"isObject(item)\"\n                                   [data]=\"item\"\n                                   [parent]=\"data[key]\"\n                                   [parentKey]=\"i\">\n                  </app-json-editor>\n                </div>\n              </div>\n\n              <button class=\"btn btn-success btn-xs\"\n                      (click)=\"addArrayItem(data[key])\">Add Item</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <button class=\"btn btn-success btn-xs\" (click)=\"addField(data)\">Add Field</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jsonText = '[\n  "one",\n  "two",\n  { "a": 1 }\n]';
        this.data = null;
        this.show = false;
    }
    AppComponent.prototype.preview = function () {
        this.data = JSON.parse(this.jsonText);
        this.show = true;
    };
    AppComponent.prototype.format = function () {
        try {
            var obj = JSON.parse(this.jsonText);
            this.jsonText = JSON.stringify(obj, null, 4);
        }
        catch (e) {
            alert('Invalid JSON');
        }
    };
    AppComponent.prototype.save = function () {
        this.jsonText = JSON.stringify(this.data, null, 2);
        this.show = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _json_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-editor.component */ "./src/app/json-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _json_editor_component__WEBPACK_IMPORTED_MODULE_4__["JsonEditorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/json-editor.component.ts":
/*!******************************************!*\
  !*** ./src/app/json-editor.component.ts ***!
  \******************************************/
/*! exports provided: JsonEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorComponent", function() { return JsonEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var JsonEditorComponent = /** @class */ (function () {
    function JsonEditorComponent() {
        this.parent = null;
        this.parentKey = null;
        this.uid = Math.random().toString(36).substr(2, 9);
    }
    JsonEditorComponent.prototype.isArray = function (v) { return Array.isArray(v); };
    JsonEditorComponent.prototype.isObject = function (v) { return v !== null && typeof v === 'object' && !Array.isArray(v); };
    JsonEditorComponent.prototype.isPrimitive = function (v) { return v === null || typeof v !== 'object'; };
    JsonEditorComponent.prototype.keys = function (obj) {
        if (!obj.__keyOrder) {
            Object.defineProperty(obj, '__keyOrder', {
                enumerable: false,
                writable: true,
                value: Object.keys(obj)
            });
        }
        return obj.__keyOrder;
    };
    JsonEditorComponent.prototype.uniqueKey = function (obj, base) {
        var i = 1;
        var k = base + '_copy';
        while (obj[k]) {
            k = base + '_copy' + i++;
        }
        return k;
    };
    JsonEditorComponent.prototype.onKeyChange = function (obj, oldKey, newKey) {
        if (!newKey || oldKey === newKey)
            return;
        var idx = obj.__keyOrder.indexOf(oldKey);
        var val = obj[oldKey];
        delete obj[oldKey];
        obj[newKey] = val;
        obj.__keyOrder[idx] = newKey;
    };
    JsonEditorComponent.prototype.addField = function (obj) {
        var k = this.uniqueKey(obj, 'newKey');
        obj[k] = '';
        obj.__keyOrder.push(k);
    };
    JsonEditorComponent.prototype.copyObject = function () {
        if (!this.parent)
            return;
        var key = this.uniqueKey(this.parent, this.parentKey);
        this.parent[key] = JSON.parse(JSON.stringify(this.data));
        this.parent.__keyOrder.splice(this.parent.__keyOrder.indexOf(this.parentKey) + 1, 0, key);
    };
    JsonEditorComponent.prototype.removeObject = function () {
        if (!this.parent)
            return;
        delete this.parent[this.parentKey];
        this.parent.__keyOrder.splice(this.parent.__keyOrder.indexOf(this.parentKey), 1);
    };
    JsonEditorComponent.prototype.copyArray = function (obj, key) {
        var newKey = this.uniqueKey(obj, key);
        obj[newKey] = JSON.parse(JSON.stringify(obj[key]));
        obj.__keyOrder.splice(obj.__keyOrder.indexOf(key) + 1, 0, newKey);
    };
    JsonEditorComponent.prototype.removeArray = function (obj, key) {
        delete obj[key];
        obj.__keyOrder.splice(obj.__keyOrder.indexOf(key), 1);
    };
    JsonEditorComponent.prototype.duplicateArrayItem = function (arr, i) {
        arr.splice(i + 1, 0, JSON.parse(JSON.stringify(arr[i])));
    };
    JsonEditorComponent.prototype.removeArrayItem = function (arr, i) {
        arr.splice(i, 1);
    };
    JsonEditorComponent.prototype.addArrayItem = function (arr) {
        arr.push('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonEditorComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonEditorComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonEditorComponent.prototype, "parentKey", void 0);
    JsonEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-json-editor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./json-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-editor.component.html")).default
        })
    ], JsonEditorComponent);
    return JsonEditorComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace-Angular\angular8-json-editor-final3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map