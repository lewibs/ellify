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
    let gah = com.tns.Vpn.gah();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fas", style: styles.text }, "Happy Listening :)"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("image", { src: "https://github.com/lewibs/ellify/blob/main/ellify-app/images/spotifyGreen.png?raw=true", stretch: "aspectFit", onTap: () => navigation.navigate('Off') }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, gah)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU07QUFFdkI7QUFDOEI7QUFFOUI7Ozs7RUFJRTtBQUVGLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxvQkFBb0I7QUFDdkQ7QUFFd0Q7QUFFeEQ7OztFQUdFOzs7Ozs7Ozs7Ozs7OztBQ25CRjs7QUFFQSxzQ0FBc0Msa0NBQWtDLFVBQVUseUxBQXlMLEVBQUUsb0RBQW9ELGlHQUFpRyxFQUFFLDREQUE0RCxFQUFFLEVBQUUsb0RBQW9ELDhGQUE4RixFQUFFLDREQUE0RCxFQUFFLEVBQUUsb0RBQW9ELGdHQUFnRyxFQUFFLDREQUE0RCxFQUFFO0FBQzU0QixpRUFBZSw0QkFBNEI7QUFDM0MsUUFBUSx5QkFBeUIsRUFBRSxtQkFBTyxDQUFDLDZEQUEyQztBQUN0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMK0I7QUFDa0M7QUFDSztBQUM5QjtBQUNGO0FBRXRDLE1BQU0sY0FBYyxHQUFHLG9GQUFxQixFQUFFLENBQUM7QUFFeEMsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUNwQyxpREFBQywyRUFBdUI7SUFDcEIsaURBQUMsY0FBYyxDQUFDLFNBQVMsSUFDckIsZ0JBQWdCLEVBQUMsS0FBSyxFQUN0QixhQUFhLEVBQUU7WUFDWCxXQUFXLEVBQUU7Z0JBQ1QsZUFBZSxFQUFFLE9BQU87YUFDM0I7WUFDRCxXQUFXLEVBQUUsSUFBSTtTQUNwQjtRQUVELGlEQUFDLGNBQWMsQ0FBQyxNQUFNLElBQ2xCLElBQUksRUFBQyxLQUFLLEVBQ1YsU0FBUyxFQUFFLGlEQUFTLEdBQ3RCO1FBQ0YsaURBQUMsY0FBYyxDQUFDLE1BQU0sSUFDbEIsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUUsK0NBQVEsR0FDckIsQ0FDcUIsQ0FDTCxDQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdCNkI7QUFHaUI7QUFRekMsU0FBUyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQWtCO0lBQ3BELE9BQU8sQ0FDSCxvRUFBZSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7UUFDbEMsNERBQ0ksU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssdUJBR2Y7UUFDUiw0REFDSSxTQUFTLEVBQUMsS0FBSyxFQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUNsQixRQUFRLEVBQUMsTUFBTSxnSUFHWDtRQUNSLDREQUNJLEdBQUcsRUFBQyxzRkFBc0YsRUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFDbkIsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQ3hDLENBQ1UsQ0FDbkIsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxpRUFBaUIsQ0FBQztJQUM3QixTQUFTLEVBQUU7UUFDUCxNQUFNLEVBQUUsTUFBTTtRQUNkLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGVBQWUsRUFBRSxTQUFTO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsYUFBYSxFQUFFLFFBQVE7UUFDdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7SUFDRCxJQUFJLEVBQUU7UUFDRixhQUFhLEVBQUUsUUFBUTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FDZDtDQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2RDRCO0FBSWlCO0FBVXpDLFNBQVMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFpQjtJQUNsRCxrR0FBa0c7SUFDbEcsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFNUIsT0FBTyxDQUNILG9FQUFlLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUztRQUN0Qyw0REFDSSxTQUFTLEVBQUMsS0FBSyxFQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSx5QkFHZDtRQUNSLDREQUNJLEdBQUcsRUFBQyx3RkFBd0YsRUFDNUYsT0FBTyxFQUFDLFdBQVcsRUFDbkIsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQ3pDO1FBQ0YsZ0VBQ0ssR0FBRyxDQUNBLENBQ0ksQ0FDZixDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFHLGlFQUFpQixDQUFDO0lBQzdCLFNBQVMsRUFBRTtRQUNQLE1BQU0sRUFBRSxNQUFNO1FBQ2QsYUFBYSxFQUFFLFFBQVE7UUFDdkIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsZUFBZSxFQUFFLFNBQVM7S0FDN0I7SUFDRCxJQUFJLEVBQUU7UUFDRixhQUFhLEVBQUUsUUFBUTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FDZDtDQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7QUNuREgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGxpZnktYXBwLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9lbGxpZnktYXBwLy4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRvci50c3giLCJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC8uL3NyYy9jb21wb25lbnRzL09mZlNjcmVlbi50c3giLCJ3ZWJwYWNrOi8vZWxsaWZ5LWFwcC8uL3NyYy9jb21wb25lbnRzL09uU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly9lbGxpZnktYXBwL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyogQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuIHRydWU6IGFsbCBsb2dzOyBmYWxzZTogb25seSBlcnJvciBsb2dzLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KVxuXG4vKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSAncmVhY3QtbmF0aXZlc2NyaXB0J1xuaW1wb3J0IHsgbWFpblN0YWNrTmF2aWdhdG9yIGFzIEFwcENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0b3InXG5cblJlYWN0TmF0aXZlU2NyaXB0LnN0YXJ0KFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwQ29udGFpbmVyLCB7fSwgbnVsbCkpXG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIipcXG4gKiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuICogVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuXFxuICogRm9udCBpY29uIGNsYXNzXFxuIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInRm9udCBBd2Vzb21lIDUgQnJhbmRzJywgJ2ZhLWJyYW5kcy00MDAnXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI5MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1yZWd1bGFyLTQwMCdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjQwMFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCIvaG9tZS9sZXdpYnMvZ2l0aHViL2VsbGlmeS9lbGxpZnktYXBwL3NyYy9hcHAuY3NzXCIpXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VOYXZpZ2F0aW9uQ29udGFpbmVyIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vY29yZSc7XG5pbXBvcnQgeyBzdGFja05hdmlnYXRvckZhY3RvcnkgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IE9mZlNjcmVlbiB9IGZyb20gXCIuL09mZlNjcmVlblwiO1xuaW1wb3J0IHsgT25TY3JlZW4gfSBmcm9tIFwiLi9PblNjcmVlblwiO1xuXG5jb25zdCBTdGFja05hdmlnYXRvciA9IHN0YWNrTmF2aWdhdG9yRmFjdG9yeSgpO1xuXG5leHBvcnQgY29uc3QgbWFpblN0YWNrTmF2aWdhdG9yID0gKCkgPT4gKFxuICAgIDxCYXNlTmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrTmF2aWdhdG9yLk5hdmlnYXRvclxuICAgICAgICAgICAgaW5pdGlhbFJvdXRlTmFtZT1cIk9mZlwiXG4gICAgICAgICAgICBzY3JlZW5PcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkZXJTaG93bjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW5cbiAgICAgICAgICAgICAgICBuYW1lPVwiT2ZmXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e09mZlNjcmVlbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhY2tOYXZpZ2F0b3IuU2NyZWVuXG4gICAgICAgICAgICAgICAgbmFtZT1cIk9uXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e09uU2NyZWVufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFja05hdmlnYXRvci5OYXZpZ2F0b3I+XG4gICAgPC9CYXNlTmF2aWdhdGlvbkNvbnRhaW5lcj5cbik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlUHJvcCB9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL2NvcmUnO1xuaW1wb3J0IHsgRnJhbWVOYXZpZ2F0aW9uUHJvcCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcblxudHlwZSBPZmZTY3JlZW5Qcm9wcyA9IHtcbiAgICByb3V0ZTogUm91dGVQcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJPZmZcIj4sXG4gICAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiT2ZmXCI+LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gT2ZmU2NyZWVuKHsgbmF2aWdhdGlvbiB9OiBPZmZTY3JlZW5Qcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sZWdhbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBsZWdhbCBkaXNjYWxtZXI6XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnRleHR9XG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9J3RydWUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgbGV3aWJzIGRvZXMgbm90IHRha2UgcmVzcG9uc2liaWxpdHkgZm9yIHVzZSBvZiBlbGxpZnkuIFRoaXMgYXBwIHdhcyBjcmVhdGVkIHNpbXBseSB0byBzZWUgaWYgaXQgY291bGQgYmUuIE5vdCB0byBiZSB1c2VkLlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbWFnZSBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vbGV3aWJzL2VsbGlmeS9ibG9iL21haW4vZWxsaWZ5LWFwcC9pbWFnZXMvc3BvdGlmeVJlZC5wbmc/cmF3PXRydWVcIlxuICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBcbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5uYXZpZ2F0ZSgnT24nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZmxleGJveExheW91dD5cbiAgICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZhYWFhJyxcbiAgICB9LFxuICAgIGxlZ2FsOiB7XG4gICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgfSxcbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVQcm9wIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vY29yZSc7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNYWluU3RhY2tQYXJhbUxpc3QgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uJztcblxudHlwZSBPblNjcmVlblByb3BzID0ge1xuICAgIHJvdXRlOiBSb3V0ZVByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIk9uXCI+LFxuICAgIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIk9uXCI+LFxufVxuXG5kZWNsYXJlIHZhciBjb206IGFueVxuXG5leHBvcnQgZnVuY3Rpb24gT25TY3JlZW4oeyBuYXZpZ2F0aW9uIH06IE9uU2NyZWVuUHJvcHMpIHtcbiAgICAvL1RPRE86IGphdmEgY2FuIGJlIGVtYmVkZWQgaGVyZS4gdXNpbmcgamF2YSBJIGFtIGFibGUgdG8gbWFrZSBhIHZwbiB0dW5uZWwgdG8gbW9kaWZ5IGFwaSByZXF1ZXN0c1xuICAgIGxldCBnYWggPSBjb20udG5zLlZwbi5nYWgoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXNcIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgICBIYXBweSBMaXN0ZW5pbmcgOilcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGltYWdlIFxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2xld2licy9lbGxpZnkvYmxvYi9tYWluL2VsbGlmeS1hcHAvaW1hZ2VzL3Nwb3RpZnlHcmVlbi5wbmc/cmF3PXRydWVcIlxuICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpdFwiIFxuICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoJ09mZicpfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7Z2FofVxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZmxleGJveExheW91dD5cbiAgICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFmZmFhJyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICB9LFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=