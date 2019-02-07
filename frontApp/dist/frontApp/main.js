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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-staff/add-staff.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/add-staff/add-staff.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1zdGFmZi9hZGQtc3RhZmYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/add-staff/add-staff.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-staff/add-staff.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <div class=\"container py-5\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!-- <h2 class=\"text-center text-white mb-4\">Login Form</h2> -->\n          <div class=\"row\">\n            <div class=\"col-md-6 mx-auto\">\n    \n              <!-- form card login -->\n              <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                  <h3 class=\"mb-0\">Employer Sign Up</h3>\n                </div>\n                <div class=\"card-body\">\n                  <form class=\"form\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                      <label for=\"uname1\">First Name</label>\n                      <input type=\"text\" class=\"form-control form-control-lg rounded-0\" formControlName=\"firstName\">\n                      <div class=\"invalid-feedback\" *ngIf=\"signupForm.get('firstName').valid\">Oops, you missed this one.</div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"uname1\">Last Name</label>\n                      <input type=\"text\" class=\"form-control form-control-lg rounded-0\" formControlName=\"lastName\">\n                      <div class=\"invalid-feedback\" *ngIf=\"signupForm.get('lastName').valid\">Oops, you missed this one.</div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"uname1\">Email</label>\n                      <input type=\"text\" class=\"form-control form-control-lg rounded-0\" formControlName=\"email\" autocomplete=\"username\">\n                      <div class=\"invalid-feedback\" *ngIf=\"signupForm.get('email').valid\">Oops, you missed this one.</div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" class=\"form-control form-control-lg rounded-0\" formControlName=\"password\" autocomplete=\"new-password\" >\n                      <div class=\"invalid-feedback\" *ngIf=\"signupForm.get('password').valid\">Oops, you missed this one.</div>\n                    </div>\n    \n                    <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" class=\"form-control form-control-lg rounded-0\" formControlName=\"confirmPassword\" autocomplete=\"new-password\">\n                      <div class=\"invalid-feedback\" *ngIf=\"signupForm.get('confirmPassword').valid\">Confirm your password!</div>\n                    </div>\n    \n                    <div>\n                      <label class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"checkbox\" formControlName=\"accept\">\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description small text-dark\">I accept the Terms  of Use & Privacy Policy.</span>\n                      </label>\n                  </div>\n    \n                    <button type=\"submit\" class=\"btn btn-primary btn-lg float-left\" id=\"btnLogin\" [disabled]=\"!signupForm.valid\">Sign Up</button>\n                  </form>\n            </div>\n          </div>\n          <!--/row-->\n    \n        </div>\n        <!--/col-->\n      </div>\n      <!--/row-->\n    </div>\n    <!--/container-->\n  </div>"

/***/ }),

/***/ "./src/app/admin/add-staff/add-staff.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-staff/add-staff.component.ts ***!
  \********************************************************/
/*! exports provided: AddStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function() { return AddStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddStaffComponent = /** @class */ (function () {
    function AddStaffComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            accept: [0]
        });
    }
    AddStaffComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signupForm);
        var formValues = this.signupForm.value;
        var user = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            password: formValues.password
        };
        this.authService
            .signup(user)
            .subscribe(function (response) {
            return _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    AddStaffComponent.prototype.ngOnInit = function () { };
    AddStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-staff',
            template: __webpack_require__(/*! ./add-staff.component.html */ "./src/app/admin/add-staff/add-staff.component.html"),
            styles: [__webpack_require__(/*! ./add-staff.component.css */ "./src/app/admin/add-staff/add-staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddStaffComponent);
    return AddStaffComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student/student_service */ "./src/app/student/student_service.ts");



var AdminService = /** @class */ (function () {
    function AdminService(studentService) {
        this.studentService = studentService;
        this.resultSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AdminService.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminService.prototype, "resultSelected", void 0);
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/display-result/display-result.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/display-result/display-result.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rpc3BsYXktcmVzdWx0L2Rpc3BsYXktcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/display-result/display-result.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/display-result/display-result.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = 'row'>\n    <div class = 'col-md-12'>\n        <app-result-item\n        *ngFor = 'let resultEl of results; let i = index'\n        [result] = resultEl\n        [index] = 'resultEl._id'></app-result-item>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/display-result/display-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/display-result/display-result.component.ts ***!
  \******************************************************************/
/*! exports provided: DisplayResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResultComponent", function() { return DisplayResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/student/student_service */ "./src/app/student/student_service.ts");



var DisplayResultComponent = /** @class */ (function () {
    function DisplayResultComponent(studentService) {
        var _this = this;
        this.studentService = studentService;
        this.results = [];
        this.studentService.getStudents()
            .subscribe(function (res) {
            _this.results = res['data'];
        });
    }
    DisplayResultComponent.prototype.ngOnInit = function () {
    };
    DisplayResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-result',
            template: __webpack_require__(/*! ./display-result.component.html */ "./src/app/admin/display-result/display-result.component.html"),
            styles: [__webpack_require__(/*! ./display-result.component.css */ "./src/app/admin/display-result/display-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], DisplayResultComponent);
    return DisplayResultComponent;
}());



/***/ }),

/***/ "./src/app/admin/display-staff/display-staff.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/display-staff/display-staff.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rpc3BsYXktc3RhZmYvZGlzcGxheS1zdGFmZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/display-staff/display-staff.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/display-staff/display-staff.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <a routerLink = \"/addstaff\">\n      <button class = 'btn btn-primary pull-right'>\n        Create Admission Staff\n      </button>\n    </a>\n    <br>\n    <br>\n<hr>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">First Name</th>\n          <th scope=\"col\">Last Name</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Change Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let staff of staffs\">\n          <td>{{staff.firstName}}</td>\n          <td>{{staff.lastName}}</td>\n          <td>{{staff.email}}</td>\n          <td>{{staff.isActive?'Active':'DeActive'}}</td>\n          <td>\n            <button class = 'btn btn-info' \n            (click)= \"onButtonClicked(staff)\"> {{staff.isActive?'Deactivate':'Activate'}}</button>\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/display-staff/display-staff.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/display-staff/display-staff.component.ts ***!
  \****************************************************************/
/*! exports provided: DisplayStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayStaffComponent", function() { return DisplayStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");



var DisplayStaffComponent = /** @class */ (function () {
    function DisplayStaffComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.staffs = [];
        this.authService.getUser()
            .subscribe(function (res) {
            _this.staffs = res['data'];
        });
    }
    DisplayStaffComponent.prototype.onButtonClicked = function (staff) {
        console.log(staff.isActive);
        this.authService.updateUserbyId(staff)
            .subscribe(function (res) {
            console.log(res);
        });
        staff.isActive = !staff.isActive;
    };
    DisplayStaffComponent.prototype.ngOnInit = function () {
    };
    DisplayStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-staff',
            template: __webpack_require__(/*! ./display-staff.component.html */ "./src/app/admin/display-staff/display-staff.component.html"),
            styles: [__webpack_require__(/*! ./display-staff.component.css */ "./src/app/admin/display-staff/display-staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DisplayStaffComponent);
    return DisplayStaffComponent;
}());



/***/ }),

/***/ "./src/app/admin/generate-result/generate-result.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/generate-result/generate-result.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dlbmVyYXRlLXJlc3VsdC9nZW5lcmF0ZS1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/generate-result/generate-result.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/generate-result/generate-result.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <app-display-result></app-display-result>\n    </div>\n     <div class=\"col-md-8\">\n       <router-outlet></router-outlet>\n     </div> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/generate-result/generate-result.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/generate-result/generate-result.component.ts ***!
  \********************************************************************/
/*! exports provided: GenerateResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateResultComponent", function() { return GenerateResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");



var GenerateResultComponent = /** @class */ (function () {
    function GenerateResultComponent(adminService) {
        this.adminService = adminService;
    }
    GenerateResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.resultSelected
            .subscribe(function (result) {
            _this.selectedResult = result;
        });
    };
    GenerateResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-result',
            template: __webpack_require__(/*! ./generate-result.component.html */ "./src/app/admin/generate-result/generate-result.component.html"),
            styles: [__webpack_require__(/*! ./generate-result.component.css */ "./src/app/admin/generate-result/generate-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], GenerateResultComponent);
    return GenerateResultComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <div class=\"jumbotron text-center\">\n      <h4 class=\"display-4\">Welcome {{firstName}} {{lastName}}</h4>\n      <h4 class=\"display-5\">You are {{role}}</h4>\n    \n    <br>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstName = localStorage.firstName;
        this.lastName = localStorage.lastName;
        this.role = localStorage.role;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/admin/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/admin/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/result-item/result-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/result-item/result-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jlc3VsdC1pdGVtL3Jlc3VsdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/result-item/result-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/result-item/result-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a \n[routerLink] = \"[index]\"\nrouterLinkActive = \"active\"\nstyle = \"cursor: pointer;\"\nclass = 'list-group-item clearfix'\n>\n    <div class = 'pull-left'>\n        <h4 class = 'list-group-item-heading'>{{result.firstName }} {{result.lastName}}</h4>\n        <p class = 'list-group-item-text'>{{result.entry}}</p>\n    </div>\n</a>\n"

/***/ }),

/***/ "./src/app/admin/result-item/result-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/result-item/result-item.component.ts ***!
  \************************************************************/
/*! exports provided: ResultItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultItemComponent", function() { return ResultItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultItemComponent = /** @class */ (function () {
    function ResultItemComponent() {
    }
    ResultItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultItemComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ResultItemComponent.prototype, "index", void 0);
    ResultItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-item',
            template: __webpack_require__(/*! ./result-item.component.html */ "./src/app/admin/result-item/result-item.component.html"),
            styles: [__webpack_require__(/*! ./result-item.component.css */ "./src/app/admin/result-item/result-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultItemComponent);
    return ResultItemComponent;
}());



/***/ }),

/***/ "./src/app/admin/result-start/result-start.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/result-start/result-start.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jlc3VsdC1zdGFydC9yZXN1bHQtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/result-start/result-start.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/result-start/result-start.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    Select the student from the List\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/result-start/result-start.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/result-start/result-start.component.ts ***!
  \**************************************************************/
/*! exports provided: ResultStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultStartComponent", function() { return ResultStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultStartComponent = /** @class */ (function () {
    function ResultStartComponent() {
    }
    ResultStartComponent.prototype.ngOnInit = function () {
    };
    ResultStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-start',
            template: __webpack_require__(/*! ./result-start.component.html */ "./src/app/admin/result-start/result-start.component.html"),
            styles: [__webpack_require__(/*! ./result-start.component.css */ "./src/app/admin/result-start/result-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultStartComponent);
    return ResultStartComponent;
}());



/***/ }),

/***/ "./src/app/admin/review-answer/review-answer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/review-answer/review-answer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\nwidth: 750px;\n}\n\n.rightp {\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmV2aWV3LWFuc3dlci9yZXZpZXctYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmV2aWV3LWFuc3dlci9yZXZpZXctYW5zd2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcbndpZHRoOiA3NTBweDtcbn1cblxuLnJpZ2h0cCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/review-answer/review-answer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/review-answer/review-answer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\">\n        Name:\n    </div>\n    <div class=\"col-md-4\">\n        {{result.firstName}} {{result.lastName}}\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        Email:\n    </div>\n    <div class=\"col-md-4\">\n        {{result.email}}\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        Entry:\n    </div>\n    <div class=\"col-md-4\">\n        {{result.entry}}\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        Result:\n    </div>\n    <div class=\"col-md-4\">\n        <strong>{{result.result?'Pass':'Fail'}} </strong> \n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        Invitation Status:\n    </div>\n    <div class=\"col-md-4\">\n        {{result.invitation.status}}\n    </div>\n</div>\n\n<hr>\n<div class = 'row'>\n<div class = 'rightp'>\n    <div class=\"col-md-12 btn-group\">\n        <button class=\"btn btn-lg btn-success\" (click) = \"onPass(result)\">Pass</button>\n        <button class=\"btn btn-lg btn-danger\"  (click) = \"onFail(result)\"> Fail</button>\n    </div>\n</div>\n</div>\n<br>\n\n<div class = \"jumbotron\">\n        <h5 class=\"display-4\">QUESTION 1</h5>\n        <p class=\"display-4\">{{result.questions[0].question}}</p>\n        <p class=\"display-4\">{{result.questions[0].answer}}</p>\n    </div>\n\n<div class = \"jumbotron\">\n    <h5 class=\"display-4\">QUESTION 2</h5>\n    <p class=\"display-4\">{{result.questions[1].question}}</p>\n    <p class=\"display-4\">{{result.questions[1].answer}}</p>\n</div>\n\n<div class = \"jumbotron\">\n        <h5 class=\"display-4\">QUESTION 3</h5>\n    <p class=\"display-4\">{{result.questions[2].question}}</p>\n    <p class=\"display-4\">{{result.questions[2].answer}}</p>\n</div>    \n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/review-answer/review-answer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/review-answer/review-answer.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAnswerComponent", function() { return ReviewAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_student_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/student/student_service */ "./src/app/student/student_service.ts");





var ReviewAnswerComponent = /** @class */ (function () {
    function ReviewAnswerComponent(adminService, studentService, route) {
        this.adminService = adminService;
        this.studentService = studentService;
        this.route = route;
    }
    ReviewAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.studentService.getStudentsbyId(_this.id)
                .subscribe(function (res) {
                _this.result = res['data'];
                _this.result.result = false;
                console.log(_this.result.questions[0][0].answer);
            });
        });
    };
    ReviewAnswerComponent.prototype.onPass = function () {
        this.result.result = true;
        this.studentService.updateStudent(this.result)
            .subscribe(function (res) {
            //this.result = res['data'];
        });
    };
    ReviewAnswerComponent.prototype.onFail = function () {
        this.result.result = false;
        this.studentService.updateStudent(this.result)
            .subscribe(function (res) {
            //this.result = res['data'];
        });
    };
    ReviewAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-answer',
            template: __webpack_require__(/*! ./review-answer.component.html */ "./src/app/admin/review-answer/review-answer.component.html"),
            styles: [__webpack_require__(/*! ./review-answer.component.css */ "./src/app/admin/review-answer/review-answer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            src_app_student_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReviewAnswerComponent);
    return ReviewAnswerComponent;
}());



/***/ }),

/***/ "./src/app/admin/review-question/review-question.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/review-question/review-question.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jldmlldy1xdWVzdGlvbi9yZXZpZXctcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/review-question/review-question.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/review-question/review-question.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class = \"jumbotron\">\n      <h4 class=\"display-4\">Passed Student</h4>\n      <h5 class=\"display-4\" *ngFor = \"let result of results\">\n        {{ result.result ? result.firstName + ' ' +result.lastName: ''}}</h5>\n  </div>\n\n  <div class = \"jumbotron\">\n      <h4 class=\"display-4\">Failed Student</h4>\n      <h5 class=\"display-4\" *ngFor = \"let result of results\">\n        {{ !result.result ? result.firstName : ''}}</h5>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/review-question/review-question.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/review-question/review-question.component.ts ***!
  \********************************************************************/
/*! exports provided: ReviewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewQuestionComponent", function() { return ReviewQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var src_app_student_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student/student_service */ "./src/app/student/student_service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ReviewQuestionComponent = /** @class */ (function () {
    function ReviewQuestionComponent(adminService, studentService, route) {
        this.adminService = adminService;
        this.studentService = studentService;
        this.route = route;
    }
    ReviewQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents()
            .subscribe(function (res) {
            _this.results = res['data'];
        });
    };
    ReviewQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-question',
            template: __webpack_require__(/*! ./review-question.component.html */ "./src/app/admin/review-question/review-question.component.html"),
            styles: [__webpack_require__(/*! ./review-question.component.css */ "./src/app/admin/review-question/review-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            src_app_student_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ReviewQuestionComponent);
    return ReviewQuestionComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/add-staff/add-staff.component */ "./src/app/admin/add-staff/add-staff.component.ts");
/* harmony import */ var _admin_display_staff_display_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/display-staff/display-staff.component */ "./src/app/admin/display-staff/display-staff.component.ts");
/* harmony import */ var _admin_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/home/home.component */ "./src/app/admin/home/home.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question/add-question/add-question.component */ "./src/app/question/add-question/add-question.component.ts");
/* harmony import */ var _question_display_question_display_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question/display-question/display-question.component */ "./src/app/question/display-question/display-question.component.ts");
/* harmony import */ var _admin_generate_result_generate_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/generate-result/generate-result.component */ "./src/app/admin/generate-result/generate-result.component.ts");
/* harmony import */ var _admin_review_answer_review_answer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/review-answer/review-answer.component */ "./src/app/admin/review-answer/review-answer.component.ts");
/* harmony import */ var _admin_result_start_result_start_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/result-start/result-start.component */ "./src/app/admin/result-start/result-start.component.ts");
/* harmony import */ var _admin_review_question_review_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/review-question/review-question.component */ "./src/app/admin/review-question/review-question.component.ts");














var routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _admin_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'addstaff', component: _admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_4__["AddStaffComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'displaystaff', component: _admin_display_staff_display_staff_component__WEBPACK_IMPORTED_MODULE_5__["DisplayStaffComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'addquestion', component: _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_8__["AddQuestionComponent"] },
    { path: 'displayquestion', component: _question_display_question_display_question_component__WEBPACK_IMPORTED_MODULE_9__["DisplayQuestionComponent"] },
    { path: 'publishresult', component: _admin_review_question_review_question_component__WEBPACK_IMPORTED_MODULE_13__["ReviewQuestionComponent"] },
    { path: 'generateresult', component: _admin_generate_result_generate_result_component__WEBPACK_IMPORTED_MODULE_10__["GenerateResultComponent"], children: [
            { path: '', component: _admin_result_start_result_start_component__WEBPACK_IMPORTED_MODULE_12__["ResultStartComponent"] },
            { path: ':id', component: _admin_review_answer_review_answer_component__WEBPACK_IMPORTED_MODULE_11__["ReviewAnswerComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _static_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/nav/nav.component */ "./src/app/static/nav/nav.component.ts");
/* harmony import */ var _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/footer/footer.component */ "./src/app/static/footer/footer.component.ts");
/* harmony import */ var _static_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./static/loader/loader.component */ "./src/app/static/loader/loader.component.ts");
/* harmony import */ var _admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/add-staff/add-staff.component */ "./src/app/admin/add-staff/add-staff.component.ts");
/* harmony import */ var _admin_display_staff_display_staff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/display-staff/display-staff.component */ "./src/app/admin/display-staff/display-staff.component.ts");
/* harmony import */ var _staff_staff_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff/staff.module */ "./src/app/staff/staff.module.ts");
/* harmony import */ var _student_student_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student.module */ "./src/app/student/student.module.ts");
/* harmony import */ var _admin_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/home/home.component */ "./src/app/admin/home/home.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");
/* harmony import */ var _interceptors_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptors/auth */ "./src/app/interceptors/auth.ts");
/* harmony import */ var _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./question/add-question/add-question.component */ "./src/app/question/add-question/add-question.component.ts");
/* harmony import */ var _question_display_question_display_question_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./question/display-question/display-question.component */ "./src/app/question/display-question/display-question.component.ts");
/* harmony import */ var _admin_display_result_display_result_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/display-result/display-result.component */ "./src/app/admin/display-result/display-result.component.ts");
/* harmony import */ var _admin_review_answer_review_answer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/review-answer/review-answer.component */ "./src/app/admin/review-answer/review-answer.component.ts");
/* harmony import */ var _admin_generate_result_generate_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/generate-result/generate-result.component */ "./src/app/admin/generate-result/generate-result.component.ts");
/* harmony import */ var _student_student_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./student/student_service */ "./src/app/student/student_service.ts");
/* harmony import */ var _admin_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/result-item/result-item.component */ "./src/app/admin/result-item/result-item.component.ts");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _admin_result_start_result_start_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/result-start/result-start.component */ "./src/app/admin/result-start/result-start.component.ts");
/* harmony import */ var _admin_review_question_review_question_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/review-question/review-question.component */ "./src/app/admin/review-question/review-question.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _static_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _static_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
                _admin_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_11__["AddStaffComponent"],
                _admin_display_staff_display_staff_component__WEBPACK_IMPORTED_MODULE_12__["DisplayStaffComponent"],
                _admin_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_19__["AddQuestionComponent"],
                _question_display_question_display_question_component__WEBPACK_IMPORTED_MODULE_20__["DisplayQuestionComponent"],
                _admin_display_result_display_result_component__WEBPACK_IMPORTED_MODULE_21__["DisplayResultComponent"],
                _admin_review_answer_review_answer_component__WEBPACK_IMPORTED_MODULE_22__["ReviewAnswerComponent"],
                _admin_generate_result_generate_result_component__WEBPACK_IMPORTED_MODULE_23__["GenerateResultComponent"],
                _admin_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_25__["ResultItemComponent"],
                _admin_result_start_result_start_component__WEBPACK_IMPORTED_MODULE_27__["ResultStartComponent"],
                _admin_review_question_review_question_component__WEBPACK_IMPORTED_MODULE_28__["ReviewQuestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _student_student_module__WEBPACK_IMPORTED_MODULE_14__["StudentModule"],
                _staff_staff_module__WEBPACK_IMPORTED_MODULE_13__["StaffModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"], multi: true },
                _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _student_student_service__WEBPACK_IMPORTED_MODULE_24__["StudentService"], _admin_admin_service__WEBPACK_IMPORTED_MODULE_26__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth_services/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/auth_services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.jwtToken = null;
    }
    AuthService.prototype.signup = function (user) {
        return this.http.post("http://localhost:3600/api/users/signup", user);
    };
    AuthService.prototype.login = function (user) {
        return this.http.post("http://localhost:3600/api/users/login", user);
    };
    AuthService.prototype.getUser = function () {
        return this.http.get("http://localhost:3600/api/users/users");
    };
    AuthService.prototype.updateUserbyId = function (staff) {
        console.log('updateid api called');
        return this.http.post("http://localhost:3600/api/users/users/", staff);
    };
    AuthService.prototype.checkRole = function () {
        console.log('check user role');
        return this.http.get("http://localhost:3600/api/users/getRoleByToken?token=" + this.getToken());
    };
    AuthService.prototype.getToken = function () {
        return localStorage.token;
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.isAuthenticated === 'true';
    };
    AuthService.prototype.isAdmin = function () {
        return localStorage.role === "admin" ? true : false;
    };
    AuthService.prototype.isStaff = function () {
        return localStorage.role === "staff" ? true : false;
    };
    AuthService.prototype.isStudent = function () {
        return localStorage.role === "student" ? true : false;
    };
    AuthService.prototype.logout = function () {
        this.logoutHelper();
        this.router.navigate(["/login"]);
    };
    AuthService.prototype.logoutHelper = function () {
        this.jwtToken = null;
        this.isAuthenticated = false;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
    };
    AuthService.prototype.loginSuccess = function (response) {
        console.log('login success');
        var token = response._token;
        var role = response._role;
        var expiresIn = response._expiresIn;
        var firstName = response._firstName;
        var lastName = response._lastName;
        this.isAuthenticated = true;
        this.jwtToken = token;
        this.setAuthTimer(expiresIn);
        var now = new Date();
        var expirationDate = new Date(now.getTime() + expiresIn * 1000);
        this.saveAuthData(token, role, expirationDate, firstName, lastName);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, role, expirationDate, firstName, lastName) {
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("role", role);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("role");
        localStorage.removeItem("expiration");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var role = localStorage.getItem("role");
        var expirationDate = localStorage.getItem("expiration");
        if (!token || !role || !expirationDate) {
            return;
        }
        return {
            token: token,
            role: role,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.authService.isLoggedIn();
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/staff.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/guards/staff.guard.ts ***!
  \********************************************/
/*! exports provided: StaffGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffGuard", function() { return StaffGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");




var StaffGuard = /** @class */ (function () {
    function StaffGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    StaffGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.authService.getToken() == null)
            return false;
        this.authService.checkRole().subscribe(function (data) {
            console.log(data['data']);
            if (data['data'] === 'staff')
                return true;
            else
                _this.router.navigate(['/login']);
        });
        return true;
    };
    StaffGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StaffGuard);
    return StaffGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <!-- <h2 class=\"text-center text-white mb-4\">Login Form</h2> -->\n          <div class=\"row\">\n              <div class=\"col-md-6 mx-auto\">\n\n                  <!-- form card login -->\n                  <div class=\"card rounded-0\">\n                      <div class=\"card-header\">\n                          <h3 class=\"mb-0\">Login Please</h3>\n                      </div>\n                      <div class=\"card-body\">\n                          <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form\">\n                              <div class=\"form-group\">\n                                  <label for=\"uname1\">Email</label>\n                                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" formControlName = \"email\">\n                                  <div class=\"invalid-feedback\" *ngIf=\"!loginForm.get('email').valid && loginForm.get('email').touched\">Oops, you missed this one.</div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label>Password</label>\n                                  <input type=\"password\" class=\"form-control form-control-lg rounded-0\" formControlName=\"password\" autocomplete=\"new-password\">\n                                  <div class=\"invalid-feedback\" *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Enter your password too!</div>\n                              </div>\n\n                              <button type=\"submit\" class=\"btn btn-success btn-lg float-left\" id=\"btnLogin\" [disabled]=\"!loginForm.valid\">Login</button>\n                          </form>\n                      </div>\n                      <!--/card-block-->\n                  </div>\n                  <!-- /form card login -->\n\n              </div>\n\n\n          </div>\n          <!--/row-->\n\n      </div>\n      <!--/col-->\n  </div>\n  <!--/row-->\n</div>\n<!--/container-->\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.loginForm = formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm);
        var user = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.authService.login(user)
            .subscribe(function (res) {
            _this.authService.loginSuccess(res);
            console.log('IS AUTHENTICATED' + _this.authService.isLoggedIn());
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/auth.ts":
/*!**************************************!*\
  !*** ./src/app/interceptors/auth.ts ***!
  \**************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        if (!authToken)
            return next.handle(req);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/question/add-question/add-question.component.css":
/*!******************************************************************!*\
  !*** ./src/app/question/add-question/add-question.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/question/add-question/add-question.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/question/add-question/add-question.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <div class=\"container py-5\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!-- <h2 class=\"text-center text-white mb-4\">Login Form</h2> -->\n          <div class=\"row\">\n            <div class=\"col-md-6 mx-auto\">\n    \n              <!-- form card login -->\n              <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                  <h3 class=\"mb-0\">Add Question</h3>\n                </div>\n                <div class=\"card-body\">\n                <form  [formGroup]=\"questionForm\" (ngSubmit)=\"onSubmit()\" class=\"form\">      \n                  <div class=\"form-group\">\n                    <label for=\"category\">Category</label>\n                    <select id=\"category\" class=\"form-control\" formControlName = \"category\">\n                      <option selected>Node</option>\n                      <option>Express</option>\n                      <option>Angular</option>\n                    </select>\n                    <div class=\"invalid-feedback\" \n                    *ngIf=\"!questionForm.get('category').valid && questionForm.get('category').touched\">\n                        Oops, you missed this one.\n                    </div>\n                  </div>\n\n                <div class=\"form-group\">\n                  <label for=\"uname1\">Add Question</label>\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" formControlName=\"question\">\n                  <div class=\"invalid-feedback\" \n                  *ngIf=\"!questionForm.get('category').valid && questionForm.get('category').touched\">\n                    Oops, you missed this one.\n                  </div>\n                </div>\n\n        \n                <button type=\"submit\" \n                class=\"btn btn-primary btn-lg float-left\" \n                id=\"btnLogin\" [disabled]=\"!questionForm.valid\">Submit</button>\n              </form>\n              </div>\n            </div>\n            <!--/row-->\n      \n          </div>\n          <!--/col-->\n        </div>\n        <!--/row-->\n      </div>\n      <!--/container-->\n    </div>\n"

/***/ }),

/***/ "./src/app/question/add-question/add-question.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question/add-question/add-question.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(questionService, formBuilder, router) {
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.questionForm = this.formBuilder.group({
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            question: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    AddQuestionComponent.prototype.onSubmit = function () {
        console.log(this.questionForm);
        var formValues = this.questionForm.value;
        var question = {
            category: formValues.category,
            question: formValues.question,
        };
        this.questionService
            .addQuestion(question)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    AddQuestionComponent.prototype.ngOnInit = function () { };
    AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-question',
            template: __webpack_require__(/*! ./add-question.component.html */ "./src/app/question/add-question/add-question.component.html"),
            styles: [__webpack_require__(/*! ./add-question.component.css */ "./src/app/question/add-question/add-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/display-question/display-question.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/question/display-question/display-question.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2Rpc3BsYXktcXVlc3Rpb24vZGlzcGxheS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/question/display-question/display-question.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/question/display-question/display-question.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <a routerLink = \"/addquestion\">\n      <button class = 'btn btn-primary pull-right'>\n        Add Question\n      </button>\n    </a>\n    <br>\n    <br>\n<hr>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Question</th>\n          <th scope=\"col\">Category</th>\n          <th scope=\"col\">Created at</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Change Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let question of questions\">\n          <td>{{question.question}}</td>\n          <td>{{question.category}}</td>\n          <td>{{question.created_at | date}}</td>\n          <td>{{question.active?'Active':'DeActive'}}</td>\n          <td>\n          <button class = 'btn btn-info' \n            (click)= \"onButtonClicked(question)\"> {{question.active?'Deactivate':'Activate'}}\n          </button>\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/question/display-question/display-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/question/display-question/display-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayQuestionComponent", function() { return DisplayQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.service */ "./src/app/question/question.service.ts");



var DisplayQuestionComponent = /** @class */ (function () {
    function DisplayQuestionComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questions = [];
        this.questionService.getQuestion()
            .subscribe(function (res) {
            _this.questions = res['data'];
        });
    }
    DisplayQuestionComponent.prototype.onButtonClicked = function (question) {
        console.log(question.active);
        this.questionService.updateQuestionStatus(question)
            .subscribe(function (res) {
            console.log(res);
        });
        question.active = !question.active;
    };
    DisplayQuestionComponent.prototype.ngOnInit = function () {
    };
    DisplayQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-question',
            template: __webpack_require__(/*! ./display-question.component.html */ "./src/app/question/display-question/display-question.component.html"),
            styles: [__webpack_require__(/*! ./display-question.component.css */ "./src/app/question/display-question/display-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], DisplayQuestionComponent);
    return DisplayQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/question/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuestionService = /** @class */ (function () {
    function QuestionService(http, router) {
        this.http = http;
        this.router = router;
    }
    QuestionService.prototype.addQuestion = function (question) {
        console.log('question service hit');
        return this.http.post("http://localhost:3600/api/questions/addquestion", question);
    };
    QuestionService.prototype.getQuestion = function () {
        return this.http.get("http://localhost:3600/api/questions/displayquestion");
    };
    QuestionService.prototype.updateQuestionStatus = function (question) {
        console.log('updateid api called');
        return this.http.post("http://localhost:3600/api/questions/updatequestion", question);
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/staff/invitation/invitation.component.html":
/*!************************************************************!*\
  !*** ./src/app/staff/invitation/invitation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <label for=\"uname1\">Enter Email</label>\n    <input text=\"value\" #q class=\"form-control\">\n  </div>  \n\n  <div class = \"form-group\">\n    <button type=\"button\" (click)=\"sendInvitation(q.value)\" class=\"btn btn-primary\" type=\"email\" name=\"email\"\n      autocomplete=\"on\">\n      send invitation\n    </button>\n  </div>  \n    \n  <div *ngIf=\"one_response\">\n    Email report: {{one_response}}\n  </div>\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/staff/invitation/invitation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/staff/invitation/invitation.component.ts ***!
  \**********************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../staff_service */ "./src/app/staff/staff_service.ts");



var InvitationComponent = /** @class */ (function () {
    function InvitationComponent(staffService) {
        this.staffService = staffService;
        this.email_responses = [];
    }
    InvitationComponent.prototype.ngOnInit = function () {
    };
    InvitationComponent.prototype.sendInvitation = function (email) {
        var _this = this;
        this.one_response = null;
        this.staffService.getByEmail(email).subscribe(function (res) {
            if (res['error']) {
                _this.staffService.sendInvitation(email).subscribe(function (res) {
                    var response = res['data'];
                    if (response.code === 11000)
                        _this.one_response = 'User already exists';
                    else if (response._id)
                        _this.one_response = 'Invitation email sent & User created';
                    console.log(response);
                    _this.email_responses[email] = response;
                });
            }
            else {
                _this.one_response = 'User already exists';
            }
        });
    };
    InvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation',
            template: __webpack_require__(/*! ./invitation.component.html */ "./src/app/staff/invitation/invitation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
    ], InvitationComponent);
    return InvitationComponent;
}());



/***/ }),

/***/ "./src/app/staff/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/staff/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, field) {
        if (!items)
            return [];
        if (!field)
            return items;
        return items.filter(function (i) {
            if (i.invitation.status)
                return i.invitation.status.includes(field);
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/staff/staff.module.ts":
/*!***************************************!*\
  !*** ./src/app/staff/staff.module.ts ***!
  \***************************************/
/*! exports provided: StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff_component/staff.component */ "./src/app/staff/staff_component/staff.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.pipe */ "./src/app/staff/search.pipe.ts");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff_service */ "./src/app/staff/staff_service.ts");
/* harmony import */ var _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitation/invitation.component */ "./src/app/staff/invitation/invitation.component.ts");
/* harmony import */ var _auth_guards_staff_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/guards/staff.guard */ "./src/app/auth/guards/staff.guard.ts");









var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_staff_component_staff_component__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"], _search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"], _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'staff/students', component: _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"], canActivate: [_auth_guards_staff_guard__WEBPACK_IMPORTED_MODULE_8__["StaffGuard"]] },
                    { path: 'staff/inviteStudents', component: _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"], canActivate: [_auth_guards_staff_guard__WEBPACK_IMPORTED_MODULE_8__["StaffGuard"]] }
                ])
            ],
            providers: [_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]],
            bootstrap: [_staff_component_staff_component__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"]]
        })
    ], StaffModule);
    return StaffModule;
}());



/***/ }),

/***/ "./src/app/staff/staff_component/staff.component.html":
/*!************************************************************!*\
  !*** ./src/app/staff/staff_component/staff.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"form-group\">\n        <label for=\"inputdefault\">Check status of all invitations:</label>\n        <input class=\"form-control\" type=\"text\" (input)=0 #q \n        placeholder=\"sent|answered|pass|fail|clicked\" />\n      </div>\n<hr>\n<table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let student of students | search:q.value\">\n        <td>{{student.firstName}}</td>\n        <td>{{student.lastName}}</td>\n        <td>{{student.email}}</td>\n        <td>{{student.invitation.status}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/staff/staff_component/staff.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/staff/staff_component/staff.component.ts ***!
  \**********************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../staff_service */ "./src/app/staff/staff_service.ts");



var StaffComponent = /** @class */ (function () {
    function StaffComponent(staffService) {
        var _this = this;
        this.staffService = staffService;
        this.staffService.getStudents()
            .subscribe(function (res) {
            _this.students = res['data'];
        });
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff_component/staff.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff_service.ts":
/*!****************************************!*\
  !*** ./src/app/staff/staff_service.ts ***!
  \****************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StaffService = /** @class */ (function () {
    function StaffService(http, router) {
        this.http = http;
        this.router = router;
    }
    StaffService.prototype.getStudents = function () {
        return this.http.get('http://localhost:3600/api' + "/students/getAll");
    };
    StaffService.prototype.getByEmail = function (email) {
        return this.http.get('http://localhost:3600/api' + '/students/getByEmail/' + email);
    };
    StaffService.prototype.sendInvitation = function (email) {
        return this.http.get('http://localhost:3600/api' + "/students/invite/" + email);
    };
    StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/static/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/static/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#father {\n    text-align: center;\n    position: relative;\n    top: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmYXRoZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/static/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"footer bg-light\">\n  <div class=\"container\" id = 'father'>\n    <div class=\"row\">\n        <ul class=\"list-inline mb-2\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">About</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n      <div class = 'row'>\n        <p class=\"text-muted small mb-4 mb-lg-0\">&copy; Group Two 2019. All Rights Reserved.</p>\n      </div>\n </div> \n</footer>\n\n"

/***/ }),

/***/ "./src/app/static/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/static/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/static/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/static/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/static/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/static/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  loader works!\n</p>\n"

/***/ }),

/***/ "./src/app/static/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/static/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/static/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/static/nav/nav.component.css":
/*!**********************************************!*\
  !*** ./src/app/static/nav/nav.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-nav {\n    margin-bottom: -1px !important;\n    padding: 20px !important;\n    background-color: #e5f4f8;\n    height: 75px;\n  }\n  \n  img{\n    height: 40px;\n    width: auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9zdGF0aWMvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYXYge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjRmODtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gIH1cbiAgXG4gIGltZ3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/static/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/static/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class = \"navbar navbar-default\">\n  <div class = \"container\">\n    <div class = 'navbar-header'>\n      <a routerLink = '/login' class = 'navbar-brand'>Screening App</a>\n    </div>\n\n    <div class = 'navbar-default' *ngIf = 'isAdminPage()'>\n      <ul class = 'nav navbar-nav'>\n        <li routerLinkActive = \"active\"><a routerLink = \"/home\">Home</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/displaystaff\">Display Staff</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/addstaff\">Add Staff</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/displayquestion\">Display Question</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/addquestion\">Add Question</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/generateresult\">Review Result</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/publishresult\">Publish Result</a></li>\n        \n      </ul>\n    </div>\n    <div class = 'navbar-default' *ngIf = 'isStaffPage()'>\n      <ul class = 'nav navbar-nav'>\n        <li routerLinkActive = \"active\"><a routerLink = \"/home\">Home</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/staff/inviteStudents\">\n        Invite student</a></li>\n        <li routerLinkActive = \"active\"><a routerLink = \"/staff/students\">\n        Invitation Status</a></li>\n      </ul>\n    </div>\n\n    <div class = 'navbar-default'>   \n      <ul class = 'nav navbar-nav navbar-right'>\n        <li><a (click) = logout() style = 'cursor: pointer'>LogOut</a></li>\n      </ul>\n    </div>  \n  </div>\n</nav>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/static/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/static/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.navbarOpen = false;
    }
    NavComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavComponent.prototype.isStudentPage = function () {
        if (this.authService.isStudent()) {
            return true;
        }
        return false;
    };
    NavComponent.prototype.isAdminPage = function () {
        if (this.authService.isAdmin()) {
            return true;
        }
        return false;
    };
    NavComponent.prototype.isStaffPage = function () {
        if (this.authService.isStaff()) {
            return true;
        }
        return false;
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/static/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/static/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/student/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/student/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/student/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/student/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/student/signup/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"container py-5\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!-- <h2 class=\"text-center text-white mb-4\">Login Form</h2> -->\n        <div class=\"row\">\n          <div class=\"col-md-12 mx-auto\" *ngIf=\"is_started==false\">\n            <button type=\"button\" (click)=\"onStart()\">\n              Click to start taking exam\n            </button>\n          </div>\n          <div class=\"col-md-12 mx-auto\" *ngIf=\"is_started\">\n              <p>{{timeLeft}} seconds Left....</p> \n              <div>\n                  <label for=\"uname1\">Enter your first name</label>\n                  <input [value]=\"firstName\" (input)=\"firstName=$event.target.value\" >\n                  <label for=\"uname2\">Enter your last name</label>\n                  <input [value]=\"lastName\" (input)=\"lastName=$event.target.value\" >\n                </div>  \n            <!-- form card login -->\n            <div class=\"card rounded-0\">\n              <div class=\"card-header\">\n                <h3 class=\"mb-0\">Student Pretest</h3>\n              </div>\n              <div class=\"card-body\">\n\n                <div *ngFor=\"let question of questions;let num=index\">\n                  <form class=\"form\" [formGroup]=\"answerForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                      <label for=\"uname1\"> {{question.category}} : {{question.question}}</label>\n                      <div ace-editor [text]=\"text\" [mode]=\"'java'\" [theme]=\"'clouds'\" [options]=\"options\" [readOnly]=\"false\"\n                        [autoUpdateContent]=\"true\" (textChanged)=\"onChange($event,q.id)\" style=\"min-height: 200px; width:100%; overflow: auto;\"\n                        id=\"{{num}}\" #q></div>\n                    </div>\n                  </form>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary btn-lg float-left\" (click)=\"onSubmit()\" id=\"btnLogin\"\n                  [disabled]=\"false\">\n                  Submit answers</button>\n              </div>\n            </div>\n            <!--/row-->\n\n          </div>\n          <!--/col-->\n        </div>\n        <!--/row-->\n      </div>\n      <!--/container-->\n    </div>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student_service */ "./src/app/student/student_service.ts");
/* harmony import */ var _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var StudentComponent = /** @class */ (function () {
    function StudentComponent(activatedRoute, router, formBuilder, service, authService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.authService = authService;
        this.text = "";
        this.is_started = false;
        this.status = "";
        this.max_timer = 3600 * 2;
        this.timeLeft = this.max_timer;
        this.options = { maxLines: 1000, printMargin: false };
        this.answers = {
            0: [],
            1: [],
            2: []
        };
        this.authService.logoutHelper();
        this.answerForm = this.formBuilder.group({
            answer1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            answer2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            answer3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.token = param['token'];
            _this.service.validateToken(_this.token)
                .subscribe(function (result) {
                if (result['error'] || result['data'] == null)
                    _this.router.navigate(['/']);
                console.log('invitation token status below');
                _this.status = result['data'].invitation.status;
                if (result['data'].invitation.expireDate != null) {
                    var d = new Date(result['data'].invitation.expireDate);
                    var s = d.getTime() / 1000 - Date.now();
                    console.log(result['data'].invitation.expireDate, 'seconds left:', s);
                }
                if (_this.status.includes('answered')) {
                    _this.router.navigate(['/']);
                }
                if (!_this.status.includes('started'))
                    _this.is_started = false;
                else
                    _this.is_started = true;
            });
        });
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRandomQuestions()
            .subscribe(function (res) {
            _this.questions = res['data'];
        });
        this.firstName = "";
        this.lastName = "";
    };
    StudentComponent.prototype.ngOnDestroy = function () {
        this.pauseTimer();
        this.subscription.unsubscribe();
        if (!this.is_started) {
            var obj = {
                token: this.token,
                status: 'clicked',
                date: null
            };
            if (this.token != null && this.status === 'sent')
                this.service.updateToken(obj)
                    .subscribe(function (result) {
                    console.log(result);
                });
        }
    };
    StudentComponent.prototype.onChange = function (code, id) {
        this.answers[id].push(code);
        console.log(id, "new snapshot:", code);
    };
    StudentComponent.prototype.onStart = function () {
        this.startTimer();
        this.is_started = true;
        var obj = {
            token: this.token,
            status: 'started',
            date: (new Date(+new Date() + this.max_timer))
        };
        if (this.token != null)
            this.service.updateToken(obj)
                .subscribe(function (result) {
                console.log(result);
            });
    };
    StudentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pauseTimer();
        console.log('submit answers clicked');
        console.log(this.answers);
        var obj = {
            token: this.token,
            q1a: this.answers[0],
            q2a: this.answers[1],
            q3a: this.answers[2],
            q1: this.questions[0].question,
            q2: this.questions[1].question,
            q3: this.questions[2].question,
            status: 'answered',
            firstName: this.firstName,
            lastName: this.lastName
        };
        this.service.saveAnswers(obj)
            .subscribe(function (result) {
            alert('Test is submitted');
            _this.router.navigate(['/']);
        });
    };
    StudentComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = _this.max_timer;
            }
        }, 1000);
    };
    StudentComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/student/signup/signup.component.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student_service */ "./src/app/student/student_service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth_services/auth.service */ "./src/app/auth/auth_services/auth.service.ts");










var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_8__["AceEditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'student/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                    { path: 'student/token', component: _student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"] }
                ])
            ],
            providers: [_auth_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"]],
            bootstrap: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]]
        })
    ], StudentModule);
    return StudentModule;
}());



/***/ }),

/***/ "./src/app/student/student_service.ts":
/*!********************************************!*\
  !*** ./src/app/student/student_service.ts ***!
  \********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StudentService = /** @class */ (function () {
    function StudentService(http, router) {
        this.http = http;
        this.router = router;
    }
    StudentService.prototype.updateToken = function (obj) {
        return this.http.post('http://localhost:3600/api' + "/students/updateToken", obj);
    };
    StudentService.prototype.saveAnswers = function (obj) {
        return this.http.post('http://localhost:3600/api' + "/students/saveQuestionAnswersWithInvitationToken", obj);
    };
    StudentService.prototype.validateToken = function (token) {
        return this.http.get('http://localhost:3600/api' + "/students/validateToken?token=" + token);
    };
    StudentService.prototype.sendInvitation = function (email) {
        return this.http.get('http://localhost:3600/api' + "/students/invite/" + email);
    };
    StudentService.prototype.getRandomQuestions = function () {
        return this.http.get('http://localhost:3600/api' + "/questions/getRandomOnesWithoutToken");
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get('http://localhost:3600/api' + "/students/getAll");
    };
    StudentService.prototype.getStudentsbyId = function (id) {
        return this.http.get('http://localhost:3600/api' + "/students/getAll/" + id);
    };
    StudentService.prototype.updateStudent = function (result) {
        return this.http.post('http://localhost:3600/api' + "/students/updatestudent", result);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentService);
    return StudentService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/angarag/Projects/CS572-Project/frontApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map