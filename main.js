(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-padding {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    border: 0;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding\">\n  <!-- <div class=\"col-12\">\n      <img src=\"assets/images/d1.jpg\" alt=\"placeholder\" class=\"img-responsive\" style=\"width: 100%; height: 99vh;\" />\n    </div> -->\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"2000\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"5\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"6\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"7\"></li>\n\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"assets/images/inf.png\" alt=\"First slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-block\">\n          </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/got.jpg\" alt=\"Second slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/cok.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/sos.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/ffc.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/dwd.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>  \n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/wow.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/dos.jpg\" alt=\"Third slide\" style=\"max-height: 100vh;\">\n        <div class=\"carousel-caption d-md-block\">\n        </div>\n      </div>\n\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fetch_all_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetch-all-info.service */ "./src/app/fetch-all-info.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'view/:option/:selection', component: _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"] },
                    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]
            ],
            providers: [_fetch_all_info_service__WEBPACK_IMPORTED_MODULE_7__["FetchAllInfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fetch-all-info.service.ts":
/*!*******************************************!*\
  !*** ./src/app/fetch-all-info.service.ts ***!
  \*******************************************/
/*! exports provided: FetchAllInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAllInfoService", function() { return FetchAllInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FetchAllInfoService = /** @class */ (function () {
    function FetchAllInfoService(_http) {
        this._http = _http;
        this.baseURL = 'https://www.anapioficeandfire.com/api';
    }
    FetchAllInfoService.prototype.handleError = function (err) {
        console.log('handle http error');
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    FetchAllInfoService.prototype.getAllBooks = function () {
        var myResponse;
        myResponse = this._http.get(this.baseURL + '/books');
        return myResponse;
    };
    FetchAllInfoService.prototype.getAllCharacters = function () {
        var myResponse;
        myResponse = this._http.get(this.baseURL + '/characters');
        return myResponse;
    };
    FetchAllInfoService.prototype.getAllHouses = function () {
        var myResponse;
        myResponse = this._http.get(this.baseURL + '/houses');
        return myResponse;
    };
    // routing to a particular object
    FetchAllInfoService.prototype.getView = function (option, selection) {
        var myResponse;
        myResponse = this._http.get(this.baseURL + '/' + option + '/' + selection);
        return myResponse;
    };
    FetchAllInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchAllInfoService);
    return FetchAllInfoService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        // comparing name of the current object with search text
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover{\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n\tbox-shadow: 6px 6px 10px 2px white;\r\n\tz-index: 9;\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-image: url('assets/images/wallpaper.jpg')\">\r\n  <!-- <div class=\"row\"> -->\r\n    <div class=\"input-group\" style=\"padding: 8vh\">\r\n      <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search for Books,Characters Or Houses\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-light dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{selectedValue}}</button>\r\n        <div class=\"dropdown-menu\" style=\"cursor: pointer;\">\r\n          <a class=\"dropdown-item\" (click)=\"selectValue('Books')\">Books</a>\r\n          <a class=\"dropdown-item\" (click)=\"selectValue('Characters')\">Characters</a>\r\n          <a class=\"dropdown-item\" (click)=\"selectValue('Houses')\">Houses</a>\r\n          <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"selectValue('All')\">All</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng4-loading-spinner> </ng4-loading-spinner>\r\n    <div class=\"row justify-content-center align-items-center\" style=\"text-align:center;\" *ngIf=\"allInfo!=undefined && allInfo.length>0\">\r\n      <div *ngFor=\"let info of allInfo | filter : searchText\" class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4 justify-content-center align-items-center\">\r\n\r\n        <div class=\"card\" style=\"width: 18rem;margin:4vh\" *ngIf=\"info.url.includes('books');\">\r\n          <img class=\"card-img-top\" src=\"assets/images/book.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{info.name | uppercase}}</h5>\r\n            <a [routerLink]=\"['/view','books',getselection(info.url)]\" class=\"btn btn-dark\">READ</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card\" style=\"width: 18rem;margin:4vh\" *ngIf=\"info.url.includes('characters');\">\r\n          <img class=\"card-img-top\" src=\"assets/images/char.png\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{info.name | uppercase}}</h5>\r\n            <a [routerLink]=\"['/view','characters',getselection(info.url)]\" class=\"btn btn-dark\">READ</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card\" style=\"width: 18rem;margin:4vh\" *ngIf=\"info.url.includes('houses');\">\r\n          <img class=\"card-img-top\" src=\"assets/images/house.png\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{info.name | uppercase}}</h5>\r\n            <a [routerLink]=\"['/view','houses',getselection(info.url)]\" class=\"btn btn-dark\">READ</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <!-- </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_all_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-all-info.service */ "./src/app/fetch-all-info.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(fetchAllInfo, spinnerService, toastr) {
        this.fetchAllInfo = fetchAllInfo;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.allInfo = [];
        this.allInfoNew = [];
        this.selectedValue = 'All';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.allBooks = this.fetchAllInfo.getAllBooks().subscribe(function (data) {
            _this.allBooks = data;
            _this.getall(_this.allBooks);
        }, function (error) {
            _this.toastr.error('some error occured', 'Error');
            console.log(error.errorMessage);
        });
        this.allCharacters = this.fetchAllInfo.getAllCharacters().subscribe(function (data) {
            _this.allCharacters = data;
            _this.getall(_this.allCharacters);
        }, function (error) {
            // Toast message
            _this.toastr.error('some error occured', 'Error');
            console.log(error.errorMessage);
        });
        // getting all houses
        this.allHouses = this.fetchAllInfo.getAllHouses().subscribe(function (data) {
            _this.allHouses = data;
            _this.getall(_this.allHouses);
        }, function (error) {
            _this.toastr.error('some error occured', 'Error');
            console.log(error.errorMessage);
        });
        // delaying spinner
        setTimeout(function () {
            _this.spinnerService.hide();
        }, 2000);
    };
    // putting all data in one list
    HomeComponent.prototype.getall = function (data) {
        var x;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            x = data_1[_i];
            this.allInfo.push(x);
        }
        this.allInfo.sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.dummyNames(this.allInfo);
        this.allInfoNew = this.allInfo;
    };
    // fetching the last value from the url for routing
    HomeComponent.prototype.getselection = function (url) {
        var x = [];
        x = url.split('/');
        return x[x.length - 1];
    };
    // giving dummy names to those which have empty name field
    HomeComponent.prototype.dummyNames = function (list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var x = list_1[_i];
            if (x.name.trim() === '' && x.url.includes('characters')) {
                x.name = 'Dummy Character';
            }
            else if (x.name.trim() === '' && x.url.includes('books')) {
                x.name = 'Dummy Book';
            }
            else if (x.name.trim() === '' && x.url.includes('houses')) {
                x.name = 'Dummy House';
            }
        }
    };
    // updating the lists according to the drop value
    HomeComponent.prototype.selectValue = function (value) {
        this.selectedValue = value;
        if (this.selectedValue === 'Books') {
            this.allInfo = this.allBooks;
        }
        else if (this.selectedValue === 'All') {
            this.allInfo = this.allInfoNew;
        }
        else if (this.selectedValue === 'Characters') {
            this.allInfo = this.allCharacters;
        }
        else if (this.selectedValue === 'Houses') {
            this.allInfo = this.allHouses;
        }
        // alphabetically sort
        this.allInfo.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_all_info_service__WEBPACK_IMPORTED_MODULE_1__["FetchAllInfoService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    padding-top: 20vh\r\n}\r\na:hover { \r\n    color:white !important; \r\n}"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <img src=\"assets/images/pnp.gif\" alt=\"placeholder\" class=\"img-responsive center\" width=\"100%\"/>\n    </div>\n    <a [routerLink]=\"['/home']\" class=\"btn btn-outline-danger\" style=\"color: red;float: right;margin: 2vh\">GO TO HOMEPAGE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
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

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover { \r\n    color:white !important; \r\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-image: url('assets/images/wallpaper.jpg');\">\n  <ng4-loading-spinner> </ng4-loading-spinner>\n  <a class=\"btn btn-outline-danger\" style=\"color: red;margin: 2vh;float: right;\" (click)=\"goBack()\">Go Back</a>\n\n  <!-- <div class=\"row\"> -->\n    <h1 class=\"display-4\" style=\"text-align: center;color: white\" >{{option2}} DETAILS</h1>\n\n    <table class=\"table table-striped table-hover\">\n\n      <tbody>\n\n        <tr *ngFor=\"let info of listOfSelection\">\n          <th scope=\"row\"></th>\n          <!-- displaying bold characters -->\n          <td [innerHtml]=\"info\" style=\"color: white\"></td>\n        </tr>\n\n      </tbody>\n    </table>\n    <a class=\"btn btn-outline-danger\" style=\"color: red;float: right;margin: 2vh;\" (click)=\"goBack()\">Go Back</a>\n  <!-- </div> -->\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fetch_all_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch-all-info.service */ "./src/app/fetch-all-info.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, fetchAll, spinnerService, location, toastr) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.fetchAll = fetchAll;
        this.spinnerService = spinnerService;
        this.location = location;
        this.toastr = toastr;
        this.listOfSelection = [];
        this.goBack = function () {
            _this.location.back();
        };
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        var option;
        var selection;
        option = this._route.snapshot.paramMap.get('option');
        selection = this._route.snapshot.paramMap.get('selection');
        this.option2 = option.substring(0, option.length - 1).toUpperCase();
        this.currentSelection = this.fetchAll.getView(option, selection).subscribe(function (data) {
            _this.currentSelection = data;
            _this.getAll(_this.currentSelection);
        }, function (error) {
            _this.toastr.error('some error occured', 'Error');
            console.log(error.errorMessage);
        });
        setTimeout(function () {
            _this.spinnerService.hide();
        }, 2000);
    };
    // pushing the data to an array for displaying
    ViewComponent.prototype.getAll = function (data) {
        var combine;
        // tslint:disable-next-line:forin
        for (var index in data) {
            var iterateArray = '';
            var x = void 0, option3 = void 0;
            // give dummy name
            if (index === 'name' && data[index] === '') {
                option3 = this.option2.substring(0, 1) + this.option2.substring(1, this.option2.length).toLowerCase();
                data[index] = 'Dummy ' + option3;
                combine = index.toUpperCase().bold() + ': ' + data[index];
                // parse date
            }
            else if ((index === 'born' || index === 'died' || index === 'diedOut' || index === 'released') &&
                data[index] !== '') {
                combine = index.toUpperCase().bold() + ': ' + new Date(data[index]);
                // check if the data for particular index is availabe or not
            }
            else if (data[index] === '' || data[index][0] === '' || data[index].length === 0) {
                combine = index.toUpperCase().bold() + ': ' + 'Unknown';
                // check if index is an array
            }
            else if (Array.isArray(data[index])) {
                for (var _i = 0, _a = data[index]; _i < _a.length; _i++) {
                    x = _a[_i];
                    iterateArray += x + ',\n';
                }
                combine = index.toUpperCase().bold() + ': ' + iterateArray.substring(0, iterateArray.length - 2);
                // all other indexes
            }
            else {
                combine = index.toUpperCase().bold() + ': ' + data[index];
            }
            this.listOfSelection.push(combine);
        }
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _fetch_all_info_service__WEBPACK_IMPORTED_MODULE_4__["FetchAllInfoService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\javascript\Assignment8\IceAndFire\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map