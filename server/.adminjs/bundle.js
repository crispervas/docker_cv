(function (React, adminjs, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var api = new adminjs.ApiClient();
  var Dashboard = function Dashboard() {
    var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setData = _useState2[1];
    React.useEffect(function () {
      api.getDashboard().then(function (response) {
        setData(response.data);
      });
    }, []);
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      variant: "grey"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      variant: "white",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: ""
    }), /*#__PURE__*/React__default["default"].createElement(designSystem.H3, null, "This is an automated administrator with the help of the AdminBro framework, it is built with reactjs and is fully customized")), /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      variant: "white",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.H4, null, "Cristhian Pereira")));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component0 = Dashboard;

})(React, AdminJS, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hcGkvYWRtaW4vd2ViL2Rhc2hib2FyZC1jb21wb25lbnQuanN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG15LWRhc2hib2FyZC1jb21wb25lbnQuanN4XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluanMnXG5pbXBvcnQgeyBCb3gsIEgzLCBINCwgIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkuZ2V0RGFzaGJvYXJkKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggdmFyaWFudD1cImdyZXlcIj5cbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCIgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgIH19PlxuICAgICAgICB7Lyogc29tZTogeyBkYXRhLnNvbWUgfSAqL31cbiAgICAgICAgPGltZyBzcmM9e1wiXCJ9IC8+XG4gICAgICAgIDxIMz5cbiAgICAgICAgICBUaGlzIGlzIGFuIGF1dG9tYXRlZCBhZG1pbmlzdHJhdG9yIHdpdGggdGhlIGhlbHAgb2YgdGhlIEFkbWluQnJvIGZyYW1ld29yaywgaXQgaXMgYnVpbHQgd2l0aCByZWFjdGpzIGFuZCBpcyBmdWxseSBjdXN0b21pemVkXG4gICAgICAgIDwvSDM+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCIgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgIH19PlxuICAgICAgICB7Lyogc29tZTogeyBkYXRhLnNvbWUgfSAqL31cbiAgICAgICAgPEg0PlxuICAgICAgICAgIENyaXN0aGlhbiBQZXJlaXJhXG4gICAgICAgIDwvSDQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDb21wb25lbnQwIGZyb20gJy4uL2FwaS9hZG1pbi93ZWIvZGFzaGJvYXJkLWNvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MCA9IENvbXBvbmVudDAiXSwibmFtZXMiOlsiYXBpIiwiQXBpQ2xpZW50IiwiRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZ2V0RGFzaGJvYXJkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlJlYWN0IiwiQm94IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIkgzIiwiSDQiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDb21wb25lbnQwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFLQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsaUJBQVMsRUFBRSxDQUFBO0VBRTNCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQVM7RUFDdEIsRUFBQSxJQUFBLFNBQUEsR0FBd0JDLGNBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtFQUFBLElBQUEsVUFBQSxHQUFBLGNBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7TUFBekIsVUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO1VBQUVDLE9BQU8sR0FBQSxVQUFBLENBQUEsQ0FBQSxFQUFBO0VBRXBCQyxFQUFBQSxlQUFTLENBQUMsWUFBTTtNQUNkTCxHQUFHLENBQUNNLFlBQVksRUFBRSxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsUUFBUSxFQUFLO0VBQ3BDSixNQUFBQSxPQUFPLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUE7RUFDeEIsS0FBQyxDQUFDLENBQUE7S0FDSCxFQUFFLEVBQUUsQ0FBQyxDQUFBO0VBRU4sRUFBQSxvQkFDRUMsd0NBQUNDLGdCQUFHLEVBQUE7RUFBQyxJQUFBLE9BQU8sRUFBQyxNQUFBO0VBQU0sR0FBQSxlQUNqQkQsd0NBQUNDLGdCQUFHLEVBQUE7RUFBQyxJQUFBLE9BQU8sRUFBQyxPQUFPO0VBQUMsSUFBQSxLQUFLLEVBQUU7RUFDeEJDLE1BQUFBLE9BQU8sRUFBRSxNQUFNO0VBQ2ZDLE1BQUFBLGNBQWMsRUFBRSxRQUFRO0VBQ3hCQyxNQUFBQSxVQUFVLEVBQUUsUUFBQTtFQUNkLEtBQUE7S0FFQSxlQUFBSix5QkFBQSxDQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUE7RUFBSyxJQUFBLEdBQUcsRUFBRSxFQUFBO0tBQU0sQ0FBQSxlQUNoQkEsd0NBQUNLLGVBQUUsRUFBQSxJQUFBLEVBQUMsOEhBRUosQ0FBSyxDQUNELGVBQ05MLHlCQUFBLENBQUEsYUFBQSxDQUFDQyxnQkFBRyxFQUFBO0VBQUMsSUFBQSxPQUFPLEVBQUMsT0FBTztFQUFDLElBQUEsS0FBSyxFQUFFO0VBQ3hCQyxNQUFBQSxPQUFPLEVBQUUsTUFBTTtFQUNmQyxNQUFBQSxjQUFjLEVBQUUsUUFBUTtFQUN4QkMsTUFBQUEsVUFBVSxFQUFFLFFBQUE7RUFDZCxLQUFBO0VBQUUsR0FBQSxlQUVGSix3Q0FBQ00sZUFBRSxFQUFBLElBQUEsRUFBQyxtQkFFSixDQUFLLENBQ0QsQ0FDRixDQUFBO0VBRVYsQ0FBQzs7RUN6Q0RDLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNDLFVBQVUsR0FBR0EsU0FBVTs7Ozs7OyJ9
