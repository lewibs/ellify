"use strict";
(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./src/app.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _components_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Navigator.tsx");
// Added by app-css-loader


/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false });
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


react_nativescript__WEBPACK_IMPORTED_MODULE_2__.start(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Navigator__WEBPACK_IMPORTED_MODULE_3__.mainStackNavigator, {}, null));
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/


/***/ }),

/***/ "./src/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"*\n * Place any CSS rules you want to apply on both iOS and Android here.\n * This is where the vast majority of your CSS code goes.\n * Font icon class\n "},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Brands', 'fa-brands-400'"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Free', 'fa-solid-900'"},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Free', 'fa-regular-400'"},{"type":"declaration","property":"font-weight","value":"400"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/home/lewibs/github/ellify/ellify-app/src/app.css")


/***/ }),

/***/ "./src/components/Navigator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainStackNavigator": () => (/* binding */ mainStackNavigator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript-navigation/dist/index.js");
/* harmony import */ var _OffScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/OffScreen.tsx");
/* harmony import */ var _OnScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/OnScreen.tsx");





const StackNavigator = (0,react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__.stackNavigatorFactory)();
const mainStackNavigator = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_navigation_core__WEBPACK_IMPORTED_MODULE_1__.BaseNavigationContainer, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(StackNavigator.Navigator, { initialRouteName: "Off", screenOptions: {
            headerStyle: {
                backgroundColor: "white",
            },
            headerShown: true,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(StackNavigator.Screen, { name: "Off", component: _OffScreen__WEBPACK_IMPORTED_MODULE_3__.OffScreen }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(StackNavigator.Screen, { name: "On", component: _OnScreen__WEBPACK_IMPORTED_MODULE_4__.OnScreen }))));


/***/ }),

/***/ "./src/components/OffScreen.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffScreen": () => (/* binding */ OffScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");


function OffScreen({ navigation }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fas", style: styles.legal }, "legal discalmer:"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fas", style: styles.text, textWrap: 'true' }, "lewibs does not take responsibility for use of ellify. This app was created simply to see if it could be. Not to be used."),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("image", { src: "https://github.com/lewibs/ellify/blob/main/ellify-app/images/spotifyRed.png?raw=true", stretch: "aspectFit", onTap: () => navigation.navigate('On') })));
}
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#ffaaaa',
    },
    legal: {
        textAlignment: "center",
        fontSize: 30,
        color: "black",
        padding: 10,
    },
    text: {
        textAlignment: "center",
        fontSize: 20,
        color: "black",
        padding: 10,
    },
});


/***/ }),

/***/ "./src/components/OnScreen.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnScreen": () => (/* binding */ OnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");


function OnScreen({ navigation }) {
    //TODO: java can be embeded here. using java I am able to make a vpn tunnel to modify api requests
    console.log(com.tns.Vpn.gah());
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fas", style: styles.text }, "Happy Listening :)"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("image", { src: "https://github.com/lewibs/ellify/blob/main/ellify-app/images/spotifyGreen.png?raw=true", stretch: "aspectFit", onTap: () => navigation.navigate('Off') })));
}
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#aaffaa',
    },
    text: {
        textAlignment: "center",
        fontSize: 30,
        color: "black",
        padding: 10,
    },
});


/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUkseUJBR2Q7UUFDUiw0REFDSSxHQUFHLEVBQUMsd0ZBQXdGLEVBQzVGLE9BQU8sRUFBQyxXQUFXLEVBQ25CLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUN6QyxDQUNVLENBQ2YsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxpRUFBaUIsQ0FBQztJQUM3QixTQUFTLEVBQUU7UUFDUCxNQUFNLEVBQUUsTUFBTTtRQUNkLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGVBQWUsRUFBRSxTQUFTO0tBQzdCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsYUFBYSxFQUFFLFFBQVE7UUFDdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7Q0FDSixDQUFDLENBQUM7Ozs7Ozs7O0FDakRIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL2VsbGlmeS1hcHAvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0b3IudHN4Iiwid2VicGFjazovL2VsbGlmeS1hcHAvLi9zcmMvY29tcG9uZW50cy9PZmZTY3JlZW4udHN4Iiwid2VicGFjazovL2VsbGlmeS1hcHAvLi9zcmMvY29tcG9uZW50cy9PblNjcmVlbi50c3giLCJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qIENvbnRyb2xzIHJlYWN0LW5hdGl2ZXNjcmlwdCBsb2cgdmVyYm9zaXR5LiB0cnVlOiBhbGwgbG9nczsgZmFsc2U6IG9ubHkgZXJyb3IgbG9ncy4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwsICdfX0RFVl9fJywgeyB2YWx1ZTogZmFsc2UgfSlcblxuLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gJ3JlYWN0LW5hdGl2ZXNjcmlwdCdcbmltcG9ydCB7IG1haW5TdGFja05hdmlnYXRvciBhcyBBcHBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdG9yJ1xuXG5SZWFjdE5hdGl2ZVNjcmlwdC5zdGFydChSZWFjdC5jcmVhdGVFbGVtZW50KEFwcENvbnRhaW5lciwge30sIG51bGwpKVxuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcbiAqIFRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLlxcbiAqIEZvbnQgaWNvbiBjbGFzc1xcbiBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEJyYW5kcycsICdmYS1icmFuZHMtNDAwJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtc29saWQtOTAwJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtcmVndWxhci00MDAnXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiL2hvbWUvbGV3aWJzL2dpdGh1Yi9lbGxpZnkvZWxsaWZ5LWFwcC9zcmMvYXBwLmNzc1wiKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlTmF2aWdhdGlvbkNvbnRhaW5lciB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUnO1xuaW1wb3J0IHsgc3RhY2tOYXZpZ2F0b3JGYWN0b3J5IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBPZmZTY3JlZW4gfSBmcm9tIFwiLi9PZmZTY3JlZW5cIjtcbmltcG9ydCB7IE9uU2NyZWVuIH0gZnJvbSBcIi4vT25TY3JlZW5cIjtcblxuY29uc3QgU3RhY2tOYXZpZ2F0b3IgPSBzdGFja05hdmlnYXRvckZhY3RvcnkoKTtcblxuZXhwb3J0IGNvbnN0IG1haW5TdGFja05hdmlnYXRvciA9ICgpID0+IChcbiAgICA8QmFzZU5hdmlnYXRpb25Db250YWluZXI+XG4gICAgICAgIDxTdGFja05hdmlnYXRvci5OYXZpZ2F0b3JcbiAgICAgICAgICAgIGluaXRpYWxSb3V0ZU5hbWU9XCJPZmZcIlxuICAgICAgICAgICAgc2NyZWVuT3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGVyU2hvd246IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuXG4gICAgICAgICAgICAgICAgbmFtZT1cIk9mZlwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtPZmZTY3JlZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0YWNrTmF2aWdhdG9yLlNjcmVlblxuICAgICAgICAgICAgICAgIG5hbWU9XCJPblwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtPblNjcmVlbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2tOYXZpZ2F0b3IuTmF2aWdhdG9yPlxuICAgIDwvQmFzZU5hdmlnYXRpb25Db250YWluZXI+XG4pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZVByb3AgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9jb3JlJztcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5cbnR5cGUgT2ZmU2NyZWVuUHJvcHMgPSB7XG4gICAgcm91dGU6IFJvdXRlUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiT2ZmXCI+LFxuICAgIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIk9mZlwiPixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9mZlNjcmVlbih7IG5hdmlnYXRpb24gfTogT2ZmU2NyZWVuUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmxleGJveExheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGVnYWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgbGVnYWwgZGlzY2FsbWVyOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50ZXh0fVxuICAgICAgICAgICAgICAgIHRleHRXcmFwPSd0cnVlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGxld2licyBkb2VzIG5vdCB0YWtlIHJlc3BvbnNpYmlsaXR5IGZvciB1c2Ugb2YgZWxsaWZ5LiBUaGlzIGFwcCB3YXMgY3JlYXRlZCBzaW1wbHkgdG8gc2VlIGlmIGl0IGNvdWxkIGJlLiBOb3QgdG8gYmUgdXNlZC5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW1hZ2UgXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2xld2licy9lbGxpZnkvYmxvYi9tYWluL2VsbGlmeS1hcHAvaW1hZ2VzL3Nwb3RpZnlSZWQucG5nP3Jhdz10cnVlXCJcbiAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgXG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoJ09uJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2ZsZXhib3hMYXlvdXQ+XG4gICAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmYWFhYScsXG4gICAgfSxcbiAgICBsZWdhbDoge1xuICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgIH0sXG59KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlUHJvcCB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUnO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4vTmF2aWdhdGlvblBhcmFtTGlzdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5cbnR5cGUgT25TY3JlZW5Qcm9wcyA9IHtcbiAgICByb3V0ZTogUm91dGVQcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJPblwiPixcbiAgICBuYXZpZ2F0aW9uOiBGcmFtZU5hdmlnYXRpb25Qcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJPblwiPixcbn1cblxuZGVjbGFyZSB2YXIgY29tOiBhbnlcblxuZXhwb3J0IGZ1bmN0aW9uIE9uU2NyZWVuKHsgbmF2aWdhdGlvbiB9OiBPblNjcmVlblByb3BzKSB7XG4gICAgLy9UT0RPOiBqYXZhIGNhbiBiZSBlbWJlZGVkIGhlcmUuIHVzaW5nIGphdmEgSSBhbSBhYmxlIHRvIG1ha2UgYSB2cG4gdHVubmVsIHRvIG1vZGlmeSBhcGkgcmVxdWVzdHNcbiAgICBjb25zb2xlLmxvZyhjb20udG5zLlZwbi5nYWgoKSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXNcIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgICBIYXBweSBMaXN0ZW5pbmcgOilcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGltYWdlIFxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2xld2licy9lbGxpZnkvYmxvYi9tYWluL2VsbGlmeS1hcHAvaW1hZ2VzL3Nwb3RpZnlHcmVlbi5wbmc/cmF3PXRydWVcIlxuICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpdFwiIFxuICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoJ09mZicpfVxuICAgICAgICAvPlxuICAgIDwvZmxleGJveExheW91dD5cbiAgICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFmZmFhJyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICB9LFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=