function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-findplace-findplace-module"], {
  /***/
  "./node_modules/@mapbox/fusspot/lib/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/@mapbox/fusspot/lib/index.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxFusspotLibIndexJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Validators are functions which assert certain type.
     * They can return a string which can then be used
     * to display a helpful error message.
     * They can also return a function for a custom error message.
     */

    var isPlainObject = __webpack_require__(
    /*! is-plain-obj */
    "./node_modules/is-plain-obj/index.js");

    var xtend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var DEFAULT_ERROR_PATH = 'value';
    var NEWLINE_INDENT = '\n  ';
    var v = {};
    /**
     * Runners
     *
     * Take root validators and run assertion
     */

    v.assert = function (rootValidator, options) {
      options = options || {};
      return function (value) {
        var message = validate(rootValidator, value); // all good

        if (!message) {
          return;
        }

        var errorMessage = processMessage(message, options);

        if (options.apiName) {
          errorMessage = options.apiName + ': ' + errorMessage;
        }

        throw new Error(errorMessage);
      };
    };
    /**
     * Higher Order Validators
     *
     * validators which take other validators as input
     * and output a new validator
     */


    v.shape = function shape(validatorObj) {
      var validators = objectEntries(validatorObj);
      return function shapeValidator(value) {
        var validationResult = validate(v.plainObject, value);

        if (validationResult) {
          return validationResult;
        }

        var key, validator;
        var errorMessages = [];

        for (var i = 0; i < validators.length; i++) {
          key = validators[i].key;
          validator = validators[i].value;
          validationResult = validate(validator, value[key]);

          if (validationResult) {
            // return [key].concat(validationResult);
            errorMessages.push([key].concat(validationResult));
          }
        }

        if (errorMessages.length < 2) {
          return errorMessages[0];
        } // enumerate all the error messages


        return function (options) {
          errorMessages = errorMessages.map(function (message) {
            var key = message[0];
            var renderedMessage = processMessage(message, options).split('\n').join(NEWLINE_INDENT); // indents any inner nesting

            return '- ' + key + ': ' + renderedMessage;
          });
          var objectId = options.path.join('.');
          var ofPhrase = objectId === DEFAULT_ERROR_PATH ? '' : ' of ' + objectId;
          return 'The following properties' + ofPhrase + ' have invalid values:' + NEWLINE_INDENT + errorMessages.join(NEWLINE_INDENT);
        };
      };
    };

    v.strictShape = function strictShape(validatorObj) {
      var shapeValidator = v.shape(validatorObj);
      return function strictShapeValidator(value) {
        var shapeResult = shapeValidator(value);

        if (shapeResult) {
          return shapeResult;
        }

        var invalidKeys = Object.keys(value).reduce(function (memo, valueKey) {
          if (validatorObj[valueKey] === undefined) {
            memo.push(valueKey);
          }

          return memo;
        }, []);

        if (invalidKeys.length !== 0) {
          return function () {
            return 'The following keys are invalid: ' + invalidKeys.join(', ');
          };
        }
      };
    };

    v.arrayOf = function arrayOf(validator) {
      return createArrayValidator(validator);
    };

    v.tuple = function tuple() {
      var validators = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
      return createArrayValidator(validators);
    }; // Currently array validation fails when the first invalid item is found.


    function createArrayValidator(validators) {
      var validatingTuple = Array.isArray(validators);

      var getValidator = function getValidator(index) {
        if (validatingTuple) {
          return validators[index];
        }

        return validators;
      };

      return function arrayValidator(value) {
        var validationResult = validate(v.plainArray, value);

        if (validationResult) {
          return validationResult;
        }

        if (validatingTuple && value.length !== validators.length) {
          return 'an array with ' + validators.length + ' items';
        }

        for (var i = 0; i < value.length; i++) {
          validationResult = validate(getValidator(i), value[i]);

          if (validationResult) {
            return [i].concat(validationResult);
          }
        }
      };
    }

    v.required = function required(validator) {
      function requiredValidator(value) {
        if (value == null) {
          return function (options) {
            return formatErrorMessage(options, isArrayCulprit(options.path) ? 'cannot be undefined/null.' : 'is required.');
          };
        }

        return validator.apply(this, arguments);
      }

      requiredValidator.__required = true;
      return requiredValidator;
    };

    v.oneOfType = function oneOfType() {
      var validators = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
      return function oneOfTypeValidator(value) {
        var messages = validators.map(function (validator) {
          return validate(validator, value);
        }).filter(Boolean); // If we don't have as many messages as no. of validators,
        // then at least one validator was ok with the value.

        if (messages.length !== validators.length) {
          return;
        } // check primitive type


        if (messages.every(function (message) {
          return message.length === 1 && typeof message[0] === 'string';
        })) {
          return orList(messages.map(function (m) {
            return m[0];
          }));
        } // Complex oneOfTypes like
        // `v.oneOftypes(v.shape({name: v.string})`, `v.shape({name: v.number}))`
        // are complex ¯\_(ツ)_/¯. For the current scope only returning the longest message.


        return messages.reduce(function (max, arr) {
          return arr.length > max.length ? arr : max;
        });
      };
    };
    /**
     * Meta Validators
     * which take options as argument (not validators)
     * and return a new primitive validator
     */


    v.equal = function equal(compareWith) {
      return function equalValidator(value) {
        if (value !== compareWith) {
          return JSON.stringify(compareWith);
        }
      };
    };

    v.oneOf = function oneOf() {
      var options = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
      var validators = options.map(function (value) {
        return v.equal(value);
      });
      return v.oneOfType.apply(this, validators);
    };

    v.range = function range(compareWith) {
      var min = compareWith[0];
      var max = compareWith[1];
      return function rangeValidator(value) {
        var validationResult = validate(v.number, value);

        if (validationResult || value < min || value > max) {
          return 'number between ' + min + ' & ' + max + ' (inclusive)';
        }
      };
    };
    /**
     * Primitive validators
     *
     * simple validators which return a string or undefined
     */


    v.any = function any() {
      return;
    };

    v["boolean"] = function _boolean(value) {
      if (typeof value !== 'boolean') {
        return 'boolean';
      }
    };

    v.number = function number(value) {
      if (typeof value !== 'number') {
        return 'number';
      }
    };

    v.plainArray = function plainArray(value) {
      if (!Array.isArray(value)) {
        return 'array';
      }
    };

    v.plainObject = function plainObject(value) {
      if (!isPlainObject(value)) {
        return 'object';
      }
    };

    v.string = function string(value) {
      if (typeof value !== 'string') {
        return 'string';
      }
    };

    v.func = function func(value) {
      if (typeof value !== 'function') {
        return 'function';
      }
    };

    function validate(validator, value) {
      // assertions are optional by default unless wrapped in v.require
      if (value == null && !validator.hasOwnProperty('__required')) {
        return;
      }

      var result = validator(value);

      if (result) {
        return Array.isArray(result) ? result : [result];
      }
    }

    function processMessage(message, options) {
      // message array follows the convention
      // [...path, result]
      // path is an array of object keys / array indices
      // result is output of the validator
      var len = message.length;
      var result = message[len - 1];
      var path = message.slice(0, len - 1);

      if (path.length === 0) {
        path = [DEFAULT_ERROR_PATH];
      }

      options = xtend(options, {
        path: path
      });
      return typeof result === 'function' ? result(options) // allows customization of result
      : formatErrorMessage(options, prettifyResult(result));
    }

    function orList(list) {
      if (list.length < 2) {
        return list[0];
      }

      if (list.length === 2) {
        return list.join(' or ');
      }

      return list.slice(0, -1).join(', ') + ', or ' + list.slice(-1);
    }

    function prettifyResult(result) {
      return 'must be ' + addArticle(result) + '.';
    }

    function addArticle(nounPhrase) {
      if (/^an? /.test(nounPhrase)) {
        return nounPhrase;
      }

      if (/^[aeiou]/i.test(nounPhrase)) {
        return 'an ' + nounPhrase;
      }

      if (/^[a-z]/i.test(nounPhrase)) {
        return 'a ' + nounPhrase;
      }

      return nounPhrase;
    }

    function formatErrorMessage(options, prettyResult) {
      var arrayCulprit = isArrayCulprit(options.path);
      var output = options.path.join('.') + ' ' + prettyResult;
      var prepend = arrayCulprit ? 'Item at position ' : '';
      return prepend + output;
    }

    function isArrayCulprit(path) {
      return typeof path[path.length - 1] == 'number' || typeof path[0] == 'number';
    }

    function objectEntries(obj) {
      return Object.keys(obj || {}).map(function (key) {
        return {
          key: key,
          value: obj[key]
        };
      });
    }

    v.validate = validate;
    v.processMessage = processMessage;
    module.exports = v;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-gl-geocoder/lib/events.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-gl-geocoder/lib/events.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxGlGeocoderLibEventsJs(module, exports, __webpack_require__) {
    "use strict";

    var shajs = __webpack_require__(
    /*! sha.js */
    "./node_modules/sha.js/index.js");
    /**
     * Construct a new mapbox event client to send interaction events to the mapbox event service
     * @param {Object} options options with which to create the service
     * @param {String} options.accessToken the mapbox access token to make requests
     * @private
     */


    function MapboxEventManager(options) {
      this.origin = options.origin || 'https://api.mapbox.com';
      this.endpoint = '/events/v2';
      this.access_token = options.accessToken;
      this.version = '0.0.1';
      this.sessionID = this.generateSessionID();
      this.userAgent = this.getUserAgent(); // parse global options to be sent with each request

      this.countries = options.countries ? options.countries.split(",") : null;
      this.types = options.types ? options.types.split(",") : null;
      this.bbox = options.bbox ? options.bbox : null;
      this.language = options.language ? options.language.split(",") : null;
      this.limit = options.limit ? +options.limit : null;
      this.locale = navigator.language || null;
      this.enableEventLogging = this.shouldEnableLogging(options); // keep some state to deduplicate requests if necessary

      this.lastSentInput = "";
      this.lastSentIndex = 0;
    }

    MapboxEventManager.prototype = {
      /**
       * Send a search.select event to the mapbox events service
       * This event marks the array index of the item selected by the user out of the array of possible options
       * @private
       * @param {Object} selected the geojson feature selected by the user
       * @param {Object} geocoder a mapbox-gl-geocoder instance
       * @param {Function} callback a callback function to invoke once the event has been sent (optional)
       * @returns {Promise}
       */
      select: function select(selected, geocoder, callback) {
        var resultIndex = this.getSelectedIndex(selected, geocoder);
        var payload = this.getEventPayload('search.select', geocoder);
        payload.resultIndex = resultIndex;

        if (resultIndex === this.lastSentIndex && payload.queryString === this.lastSentInput || resultIndex == -1) {
          // don't log duplicate events if the user re-selected the same feature on the same search
          if (callback) return callback();else return;
        }

        this.lastSentIndex = resultIndex;
        this.lastSentInput = payload.queryString;
        return this.send(payload, callback);
      },

      /**
       * Send a search-start event to the mapbox events service
       * This turnstile event marks when a user starts a new search
       * @private
       * @param {Object} geocoder a mapbox-gl-geocoder instance
       * @param {Function} callback 
       * @returns {Promise}
       */
      start: function start(geocoder, callback) {
        var payload = this.getEventPayload('search.start', geocoder);
        return this.send(payload, callback);
      },

      /**
       * Send an event to the events service
       * 
       * The event is skipped if the instance is not enabled to send logging events
       * 
       * @private
       * @param {Object} payload the http POST body of the event
       * @returns {Promise}
       */
      send: function send(payload, callback) {
        if (!callback) callback = function callback() {
          return;
        };

        if (!this.enableEventLogging) {
          return callback();
        }

        var options = this.getRequestOptions(payload);
        this.request(options, function (err) {
          if (err) return this.handleError(err, callback);
          if (callback) return callback();
        });
      },

      /**
       * Get http request options
       * @private
       * @param {*} payload 
       */
      getRequestOptions: function getRequestOptions(payload) {
        var options = {
          // events must be sent with POST
          method: "POST",
          host: this.origin,
          path: this.endpoint + "?access_token=" + this.access_token,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([payload]) //events are arrays

        };
        return options;
      },

      /**
       * Get the event payload to send to the events service
       * Most payload properties are shared across all events
       * @private
       * @param {String} event the name of the event to send to the events service. Valid options are 'search.start', 'search.select', 'search.feedback'.
       * @param {Object} geocoder a mapbox-gl-geocoder instance 
       * @returns {Object} an event payload 
       */
      getEventPayload: function getEventPayload(event, geocoder) {
        var proximity;
        if (!geocoder.options.proximity) proximity = null;else proximity = [geocoder.options.proximity.longitude, geocoder.options.proximity.latitude];
        var zoom = geocoder._map ? geocoder._map.getZoom() : null;
        return {
          event: event,
          created: +new Date(),
          sessionIdentifier: this.sessionID,
          country: this.countries,
          userAgent: this.userAgent,
          language: this.language,
          bbox: this.bbox,
          types: this.types,
          endpoint: 'mapbox.places',
          // fuzzyMatch: search.fuzzy, //todo  --> add to plugin
          proximity: proximity,
          limit: geocoder.options.limit,
          // routing: search.routing, //todo --> add to plugin
          queryString: geocoder.inputString,
          mapZoom: zoom,
          keyboardLocale: this.locale
        };
      },

      /**
       * Wraps the request function for easier testing
       * Make an http request and invoke a callback
       * @private
       * @param {Object} opts options describing the http request to be made
       * @param {Function} callback the callback to invoke when the http request is completed
       */
      request: function request(opts, callback) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 204) {
              //success
              return callback(null);
            } else {
              return callback(this.statusText);
            }
          }
        };

        xhttp.open(opts.method, opts.host + opts.path, true);

        for (var header in opts.headers) {
          var headerValue = opts.headers[header];
          xhttp.setRequestHeader(header, headerValue);
        }

        xhttp.send(opts.body);
      },

      /**
       * Handle an error that occurred while making a request
       * @param {Object} err an error instance to log
       * @private
       */
      handleError: function handleError(err, callback) {
        if (callback) return callback(err);
      },

      /**
       * Generate a session ID to be returned with all of the searches made by this geocoder instance
       * ID is random and cannot be tracked across sessions
       * @private
       */
      generateSessionID: function generateSessionID() {
        return new shajs.sha256().update(Math.random().toString()).digest('hex');
      },

      /**
       * Get a user agent string to send with the request to the events service
       * @private
       */
      getUserAgent: function getUserAgent() {
        return 'mapbox-gl-geocoder.' + this.version + "." + navigator.userAgent;
      },

      /**
       * Get the 0-based numeric index of the item that the user selected out of the list of options
       * @private
       * @param {Object} selected the geojson feature selected by the user
       * @param {Object} geocoder a Mapbox-GL-Geocoder instance
       * @returns {Number} the index of the selected result
       */
      getSelectedIndex: function getSelectedIndex(selected, geocoder) {
        var results = geocoder._typeahead.data;
        var selectedID = selected.id;
        var resultIDs = results.map(function (feature) {
          return feature.id;
        });
        var selectedIdx = resultIDs.indexOf(selectedID);
        return selectedIdx;
      },

      /**
       * Check whether events should be logged
       * Clients using a localGeocoder or an origin other than mapbox should not have events logged
       * @private
       */
      shouldEnableLogging: function shouldEnableLogging(options) {
        if (this.origin.indexOf('api.mapbox.com') == -1) return false; // hard to make sense of events when a local instance is suplementing results from origin

        if (options.localGeocoder) return false; // hard to make sense of events when a custom filter is in use

        if (options.filter) return false;
        return true;
      }
    };
    module.exports = MapboxEventManager;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-gl-geocoder/lib/exceptions.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-gl-geocoder/lib/exceptions.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxGlGeocoderLibExceptionsJs(module, exports) {
    module.exports = {
      'country.3148': {
        'name': 'France',
        'bbox': [[-4.59235, 41.380007], [9.560016, 51.148506]]
      },
      'country.3145': {
        'name': 'United States',
        'bbox': [[-171.791111, 18.91619], [-66.96466, 71.357764]]
      },
      'country.330': {
        'name': 'Russia',
        'bbox': [[19.66064, 41.151416], [190.10042, 81.2504]]
      },
      'country.3179': {
        'name': 'Canada',
        'bbox': [[-140.99778, 41.675105], [-52.648099, 83.23324]]
      }
    };
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxGlGeocoderLibIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var Typeahead = __webpack_require__(
    /*! suggestions */
    "./node_modules/suggestions/index.js");

    var debounce = __webpack_require__(
    /*! lodash.debounce */
    "./node_modules/lodash.debounce/index.js");

    var extend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/events/events.js").EventEmitter;

    var exceptions = __webpack_require__(
    /*! ./exceptions */
    "./node_modules/@mapbox/mapbox-gl-geocoder/lib/exceptions.js");

    var MapboxClient = __webpack_require__(
    /*! @mapbox/mapbox-sdk */
    "./node_modules/@mapbox/mapbox-sdk/index.js");

    var mbxGeocoder = __webpack_require__(
    /*! @mapbox/mapbox-sdk/services/geocoding */
    "./node_modules/@mapbox/mapbox-sdk/services/geocoding.js");

    var MapboxEventManager = __webpack_require__(
    /*! ./events */
    "./node_modules/@mapbox/mapbox-gl-geocoder/lib/events.js");

    var geocoderService;
    /**
     * A geocoder component using Mapbox Geocoding API
     * @class MapboxGeocoder
     * @param {Object} options
     * @param {String} options.accessToken Required.
     * @param {String} options.origin Use to set a custom API origin. Defaults to https://api.mapbox.com.
     * @param {Number} [options.zoom=16] On geocoded result what zoom level should the map animate to when a `bbox` isn't found in the response. If a `bbox` is found the map will fit to the `bbox`.
     * @param {Boolean} [options.flyTo=true] If false, animating the map to a selected result is disabled.
     * @param {String} [options.placeholder="Search"] Override the default placeholder attribute value.
     * @param {Object} [options.proximity] a proximity argument: this is
     * a geographical point given as an object with latitude and longitude
     * properties. Search results closer to this point will be given
     * higher priority.
     * @param {Boolean} [options.trackProximity=false] If true, the geocoder proximity will automatically update based on the map view.
     * @param {Array} [options.bbox] a bounding box argument: this is
     * a bounding box given as an array in the format [minX, minY, maxX, maxY].
     * Search results will be limited to the bounding box.
     * @param {string} [options.countries] a comma separated list of country codes to
     * limit results to specified country or countries.
     * @param {string} [options.types] a comma seperated list of types that filter
     * results to match those specified. See https://docs.mapbox.com/api/search/#data-types
     * for available types.
     * If reverseGeocode is enabled, you should specify one type. If you configure more than one type, the first type will be used.
     * @param {Number} [options.minLength=2] Minimum number of characters to enter before results are shown.
     * @param {Number} [options.limit=5] Maximum number of results to show.
     * @param {string} [options.language] Specify the language to use for response text and query result weighting. Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script. More than one value can also be specified, separated by commas.
     * @param {Function} [options.filter] A function which accepts a Feature in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format to filter out results from the Geocoding API response before they are included in the suggestions list. Return `true` to keep the item, `false` otherwise.
     * @param {Function} [options.localGeocoder] A function accepting the query string which performs local geocoding to supplement results from the Mapbox Geocoding API. Expected to return an Array of GeoJSON Features in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format.
     * @param {'distance'|'score'} [options.reverseMode='distance'] - Set the factors that are used to sort nearby results.
     * @param {boolean} [options.reverseGeocode] Enable reverse geocoding. Defaults to false. Expects coordinates to be lat, lon.
     * @example
     * var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
     * map.addControl(geocoder);
     * @return {MapboxGeocoder} `this`
     *
     */

    function MapboxGeocoder(options) {
      this._eventEmitter = new EventEmitter();
      this.options = extend({}, this.options, options);
      this.inputString = '';
      this.fresh = true;
    }

    MapboxGeocoder.prototype = {
      options: {
        placeholder: 'Search',
        zoom: 16,
        flyTo: true,
        trackProximity: false,
        minLength: 2,
        reverseGeocode: false,
        limit: 5,
        origin: 'https://api.mapbox.com'
      },
      onAdd: function onAdd(map) {
        this._map = map;
        geocoderService = mbxGeocoder(MapboxClient({
          accessToken: this.options.accessToken,
          origin: this.options.origin
        }));
        this.eventManager = new MapboxEventManager(this.options);
        this._onChange = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onQueryResult = this._onQueryResult.bind(this);
        this._clear = this._clear.bind(this);
        this._updateProximity = this._updateProximity.bind(this);
        var el = this.container = document.createElement('div');
        el.className = 'mapboxgl-ctrl-geocoder mapboxgl-ctrl';
        var icon = document.createElement('span');
        icon.className = 'geocoder-icon geocoder-icon-search';
        this._inputEl = document.createElement('input');
        this._inputEl.type = 'text';
        this._inputEl.placeholder = this.options.placeholder;

        this._inputEl.addEventListener('keydown', this._onKeyDown);

        this._inputEl.addEventListener('change', this._onChange);

        var actions = document.createElement('div');
        actions.classList.add('geocoder-pin-right');
        this._clearEl = document.createElement('button');
        this._clearEl.className = 'geocoder-icon geocoder-icon-close';

        this._clearEl.setAttribute('aria-label', 'Clear');

        this._clearEl.addEventListener('click', this._clear);

        this._loadingEl = document.createElement('span');
        this._loadingEl.className = 'geocoder-icon geocoder-icon-loading';
        actions.appendChild(this._clearEl);
        actions.appendChild(this._loadingEl);
        el.appendChild(icon);
        el.appendChild(this._inputEl);
        el.appendChild(actions);
        this._typeahead = new Typeahead(this._inputEl, [], {
          filter: false,
          minLength: this.options.minLength,
          limit: this.options.limit
        });

        this._typeahead.getItemValue = function (item) {
          return item.place_name;
        };

        if (this.options.trackProximity) {
          this._updateProximity();

          this._map.on('moveend', this._updateProximity);
        }

        return el;
      },
      onRemove: function onRemove() {
        this.container.parentNode.removeChild(this.container);

        if (this.options.trackProximity) {
          this._map.off('moveend', this._updateProximity);
        }

        this._map = null;
        return this;
      },
      _onKeyDown: debounce(function (e) {
        // if target has shadowRoot, then get the actual active element inside the shadowRoot
        var target = e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target;

        if (!target.value) {
          this.fresh = true; // the user has removed all the text

          this._clear(e);

          return this._clearEl.style.display = 'none';
        } // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN


        if (e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;

        if (target.value.length >= this.options.minLength) {
          this._geocode(target.value);
        }
      }, 200),
      _onChange: function _onChange() {
        if (this._inputEl.value) this._clearEl.style.display = 'block';
        var selected = this._typeahead.selected;

        if (selected) {
          if (this.options.flyTo) {
            if (!exceptions[selected.id] && selected.bbox) {
              var bbox = selected.bbox;

              this._map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]);
            } else if (exceptions[selected.id]) {
              // Certain geocoder search results return (and therefore zoom to fit)
              // an unexpectedly large bounding box: for example, both Russia and the
              // USA span both sides of -180/180, or France includes the island of
              // Reunion in the Indian Ocean. An incomplete list of these exceptions
              // at ./exceptions.json provides "reasonable" bounding boxes as a
              // short-term solution; this may be amended as necessary.
              this._map.fitBounds(exceptions[selected.id].bbox);
            } else {
              this._map.flyTo({
                center: selected.center,
                zoom: this.options.zoom
              });
            }
          }

          this._eventEmitter.emit('result', {
            result: selected
          });

          this.eventManager.select(selected, this);
        }
      },
      _geocode: function _geocode(searchInput) {
        this._loadingEl.style.display = 'block';

        this._eventEmitter.emit('loading', {
          query: searchInput
        });

        this.inputString = searchInput; // Possible config proprerties to pass to client

        var keys = ['bbox', 'limit', 'proximity', 'countries', 'types', 'language', 'reverseMode'];
        var self = this; // Create config object

        var config = keys.reduce(function (config, key) {
          if (self.options[key]) {
            // countries, types, and language need to be passed in as arrays to client
            // https://github.com/mapbox/mapbox-sdk-js/blob/master/services/geocoding.js#L38-L47
            ['countries', 'types', 'language'].indexOf(key) > -1 ? config[key] = self.options[key].split(/[\s,]+/) : config[key] = self.options[key];

            if (key === 'proximity' && self.options[key] && self.options[key].longitude && self.options[key].latitude) {
              config[key] = [self.options[key].longitude, self.options[key].latitude];
            }
          }

          return config;
        }, {});
        var request; // check if searchInput resembles coordinates, and if it does,
        // make the request a reverseGeocode

        if (this.options.reverseGeocode && /(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(searchInput)) {
          // parse coordinates
          var coords = searchInput.split(/[\s(,)?]+/).map(function (c) {
            return parseFloat(c, 10);
          }).reverse(); // client only accepts one type for reverseGeocode, so
          // use first config type if one, if not default to poi

          config.types ? [config.types[0]] : ["poi"];
          config = extend(config, {
            query: coords,
            limit: 1
          });
          request = geocoderService.reverseGeocode(config).send();
        } else {
          config = extend(config, {
            query: searchInput
          });
          request = geocoderService.forwardGeocode(config).send();
        }

        var localGeocoderRes = [];

        if (this.options.localGeocoder) {
          localGeocoderRes = this.options.localGeocoder(searchInput);

          if (!localGeocoderRes) {
            localGeocoderRes = [];
          }
        }

        request.then(function (response) {
          this._loadingEl.style.display = 'none';
          var res = {};

          if (response.statusCode == '200') {
            res = response.body;
          } // supplement Mapbox Geocoding API results with locally populated results


          res.features = res.features ? localGeocoderRes.concat(res.features) : localGeocoderRes; // apply results filter if provided

          if (this.options.filter && res.features.length) {
            res.features = res.features.filter(this.options.filter);
          }

          if (res.features.length) {
            this._clearEl.style.display = 'block';
          } else {
            this._clearEl.style.display = 'none';
            this._typeahead.selected = null;
          }

          res.config = config;

          if (this.fresh) {
            this.eventManager.start(this);
            this.fresh = false;
          }

          this._eventEmitter.emit('results', res);

          this._typeahead.update(res.features);
        }.bind(this));
        request["catch"](function (err) {
          this._loadingEl.style.display = 'none'; // in the event of an error in the Mapbox Geocoding API still display results from the localGeocoder

          if (localGeocoderRes.length) {
            this._clearEl.style.display = 'block';
          } else {
            this._clearEl.style.display = 'none';
            this._typeahead.selected = null;
          }

          this._eventEmitter.emit('results', {
            features: localGeocoderRes
          });

          this._typeahead.update(localGeocoderRes);

          this._eventEmitter.emit('error', {
            error: err
          });
        }.bind(this));
        return request;
      },
      _clear: function _clear(ev) {
        if (ev) ev.preventDefault();
        this._inputEl.value = '';
        this._typeahead.selected = null;

        this._typeahead.clear();

        this._onChange();

        this._inputEl.focus();

        this._clearEl.style.display = 'none';

        this._eventEmitter.emit('clear'); // reset the turnstile event


        this.fresh = true;
      },
      _onQueryResult: function _onQueryResult(response) {
        var results = response.body;
        if (!results.features.length) return;
        var result = results.features[0];
        this._typeahead.selected = result;
        this._inputEl.value = result.place_name;

        this._onChange();
      },
      _updateProximity: function _updateProximity() {
        // proximity is designed for local scale, if the user is looking at the whole world,
        // it doesn't make sense to factor in the arbitrary centre of the map
        if (this._map.getZoom() > 9) {
          var center = this._map.getCenter().wrap();

          this.setProximity({
            longitude: center.lng,
            latitude: center.lat
          });
        } else {
          this.setProximity(null);
        }
      },

      /**
       * Set & query the input
       * @param {string} searchInput location name or other search input
       * @returns {MapboxGeocoder} this
       */
      query: function query(searchInput) {
        this._geocode(searchInput).then(this._onQueryResult);

        return this;
      },

      /**
       * Set input
       * @param {string} searchInput location name or other search input
       * @returns {MapboxGeocoder} this
       */
      setInput: function setInput(searchInput) {
        // Set input value to passed value and clear everything else.
        this._inputEl.value = searchInput;
        this._typeahead.selected = null;

        this._typeahead.clear();

        this._onChange();

        return this;
      },

      /**
       * Set proximity
       * @param {Object} proximity The new options.proximity value. This is a geographical point given as an object with latitude and longitude properties.
       * @returns {MapboxGeocoder} this
       */
      setProximity: function setProximity(proximity) {
        this.options.proximity = proximity;
        return this;
      },

      /**
       * Get proximity
       * @returns {Object} The geocoder proximity
       */
      getProximity: function getProximity() {
        return this.options.proximity;
      },

      /**
       * Subscribe to events that happen within the plugin.
       * @param {String} type name of event. Available events and the data passed into their respective event objects are:
       *
       * - __clear__ `Emitted when the input is cleared`
       * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
       * - __results__ `{ results } Fired when the geocoder returns a response`
       * - __result__ `{ result } Fired when input is set`
       * - __error__ `{ error } Error as string`
       * @param {Function} fn function that's called when the event is emitted.
       * @returns {MapboxGeocoder} this;
       */
      on: function on(type, fn) {
        this._eventEmitter.on(type, fn);

        return this;
      },

      /**
       * Remove an event
       * @returns {MapboxGeocoder} this
       * @param {String} type Event name.
       * @param {Function} fn Function that should unsubscribe to the event emitted.
       */
      off: function off(type, fn) {
        this._eventEmitter.removeListener(type, fn);

        return this;
      }
    };
    module.exports = MapboxGeocoder;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var client = __webpack_require__(
    /*! ./lib/client */
    "./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-client.js");

    module.exports = client;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-client.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-client.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibBrowserBrowserClientJs(module, exports, __webpack_require__) {
    "use strict";

    var browser = __webpack_require__(
    /*! ./browser-layer */
    "./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-layer.js");

    var MapiClient = __webpack_require__(
    /*! ../classes/mapi-client */
    "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-client.js");

    function BrowserClient(options) {
      MapiClient.call(this, options);
    }

    BrowserClient.prototype = Object.create(MapiClient.prototype);
    BrowserClient.prototype.constructor = BrowserClient;
    BrowserClient.prototype.sendRequest = browser.browserSend;
    BrowserClient.prototype.abortRequest = browser.browserAbort;
    /**
     * Create a client for the browser.
     *
     * @param {Object} options
     * @param {string} options.accessToken
     * @param {string} [options.origin]
     * @returns {MapiClient}
     */

    function createBrowserClient(options) {
      return new BrowserClient(options);
    }

    module.exports = createBrowserClient;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-layer.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-layer.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibBrowserBrowserLayerJs(module, exports, __webpack_require__) {
    "use strict";

    var MapiResponse = __webpack_require__(
    /*! ../classes/mapi-response */
    "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-response.js");

    var MapiError = __webpack_require__(
    /*! ../classes/mapi-error */
    "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-error.js");

    var constants = __webpack_require__(
    /*! ../constants */
    "./node_modules/@mapbox/mapbox-sdk/lib/constants.js");

    var parseHeaders = __webpack_require__(
    /*! ../helpers/parse-headers */
    "./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-headers.js"); // Keys are request IDs, values are XHRs.


    var requestsUnderway = {};

    function browserAbort(request) {
      var xhr = requestsUnderway[request.id];
      if (!xhr) return;
      xhr.abort();
      delete requestsUnderway[request.id];
    }

    function createResponse(request, xhr) {
      return new MapiResponse(request, {
        body: xhr.response,
        headers: parseHeaders(xhr.getAllResponseHeaders()),
        statusCode: xhr.status
      });
    }

    function normalizeBrowserProgressEvent(event) {
      var total = event.total;
      var transferred = event.loaded;
      var percent = 100 * transferred / total;
      return {
        total: total,
        transferred: transferred,
        percent: percent
      };
    }

    function sendRequestXhr(request, xhr) {
      return new Promise(function (resolve, reject) {
        xhr.onprogress = function (event) {
          request.emitter.emit(constants.EVENT_PROGRESS_DOWNLOAD, normalizeBrowserProgressEvent(event));
        };

        var file = request.file;

        if (file) {
          xhr.upload.onprogress = function (event) {
            request.emitter.emit(constants.EVENT_PROGRESS_UPLOAD, normalizeBrowserProgressEvent(event));
          };
        }

        xhr.onerror = function (error) {
          reject(error);
        };

        xhr.onabort = function () {
          var mapiError = new MapiError({
            request: request,
            type: constants.ERROR_REQUEST_ABORTED
          });
          reject(mapiError);
        };

        xhr.onload = function () {
          delete requestsUnderway[request.id];

          if (xhr.status < 200 || xhr.status >= 400) {
            var mapiError = new MapiError({
              request: request,
              body: xhr.response,
              statusCode: xhr.status
            });
            reject(mapiError);
            return;
          }

          resolve(xhr);
        };

        var body = request.body; // matching service needs to send a www-form-urlencoded request

        if (typeof body === 'string') {
          xhr.send(body);
        } else if (body) {
          xhr.send(JSON.stringify(body));
        } else if (file) {
          xhr.send(file);
        } else {
          xhr.send();
        }

        requestsUnderway[request.id] = xhr;
      }).then(function (xhr) {
        return createResponse(request, xhr);
      });
    } // The accessToken argument gives this function flexibility
    // for Mapbox's internal client.


    function createRequestXhr(request, accessToken) {
      var url = request.url(accessToken);
      var xhr = new window.XMLHttpRequest();
      xhr.open(request.method, url);
      Object.keys(request.headers).forEach(function (key) {
        xhr.setRequestHeader(key, request.headers[key]);
      });
      return xhr;
    }

    function browserSend(request) {
      return Promise.resolve().then(function () {
        var xhr = createRequestXhr(request, request.client.accessToken);
        return sendRequestXhr(request, xhr);
      });
    }

    module.exports = {
      browserAbort: browserAbort,
      sendRequestXhr: sendRequestXhr,
      browserSend: browserSend,
      createRequestXhr: createRequestXhr
    };
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-client.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-client.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibClassesMapiClientJs(module, exports, __webpack_require__) {
    "use strict";

    var parseToken = __webpack_require__(
    /*! @mapbox/parse-mapbox-token */
    "./node_modules/@mapbox/parse-mapbox-token/index.js");

    var MapiRequest = __webpack_require__(
    /*! ./mapi-request */
    "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-request.js");

    var constants = __webpack_require__(
    /*! ../constants */
    "./node_modules/@mapbox/mapbox-sdk/lib/constants.js");
    /**
     * A low-level Mapbox API client. Use it to create service clients
     * that share the same configuration.
     *
     * Services and `MapiRequest`s use the underlying `MapiClient` to
     * determine how to create, send, and abort requests in a way
     * that is appropriate to the configuration and environment
     * (Node or the browser).
     *
     * @class MapiClient
     * @property {string} accessToken - The Mapbox access token assigned
     *   to this client.
     * @property {string} [origin] - The origin
     *   to use for API requests. Defaults to https://api.mapbox.com.
     */


    function MapiClient(options) {
      if (!options || !options.accessToken) {
        throw new Error('Cannot create a client without an access token');
      } // Try parsing the access token to determine right away if it's valid.


      parseToken(options.accessToken);
      this.accessToken = options.accessToken;
      this.origin = options.origin || constants.API_ORIGIN;
    }

    MapiClient.prototype.createRequest = function createRequest(requestOptions) {
      return new MapiRequest(this, requestOptions);
    };

    module.exports = MapiClient;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-error.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-error.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibClassesMapiErrorJs(module, exports, __webpack_require__) {
    "use strict";

    var constants = __webpack_require__(
    /*! ../constants */
    "./node_modules/@mapbox/mapbox-sdk/lib/constants.js");
    /**
     * A Mapbox API error.
     *
     * If there's an error during the API transaction,
     * the Promise returned by `MapiRequest`'s [`send`](#send)
     * method should reject with a `MapiError`.
     *
     * @class MapiError
     * @hideconstructor
     * @property {MapiRequest} request - The errored request.
     * @property {string} type - The type of error. Usually this is `'HttpError'`.
     *   If the request was aborted, so the error was
     *   not sent from the server, the type will be
     *   `'RequestAbortedError'`.
     * @property {number} [statusCode] - The numeric status code of
     *   the HTTP response.
     * @property {Object | string} [body] - If the server sent a response body,
     *   this property exposes that response, parsed as JSON if possible.
     * @property {string} [message] - Whatever message could be derived from the
     *   call site and HTTP response.
     *
     * @param {MapiRequest} options.request
     * @param {number} [options.statusCode]
     * @param {string} [options.body]
     * @param {string} [options.message]
     * @param {string} [options.type]
     */


    function MapiError(options) {
      var errorType = options.type || constants.ERROR_HTTP;
      var body;

      if (options.body) {
        try {
          body = JSON.parse(options.body);
        } catch (e) {
          body = options.body;
        }
      } else {
        body = null;
      }

      var message = options.message || null;

      if (!message) {
        if (typeof body === 'string') {
          message = body;
        } else if (body && typeof body.message === 'string') {
          message = body.message;
        } else if (errorType === constants.ERROR_REQUEST_ABORTED) {
          message = 'Request aborted';
        }
      }

      this.message = message;
      this.type = errorType;
      this.statusCode = options.statusCode || null;
      this.request = options.request;
      this.body = body;
    }

    module.exports = MapiError;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-request.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-request.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibClassesMapiRequestJs(module, exports, __webpack_require__) {
    "use strict";

    var parseToken = __webpack_require__(
    /*! @mapbox/parse-mapbox-token */
    "./node_modules/@mapbox/parse-mapbox-token/index.js");

    var xtend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var EventEmitter = __webpack_require__(
    /*! eventemitter3 */
    "./node_modules/@mapbox/mapbox-sdk/node_modules/eventemitter3/index.js");

    var urlUtils = __webpack_require__(
    /*! ../helpers/url-utils */
    "./node_modules/@mapbox/mapbox-sdk/lib/helpers/url-utils.js");

    var constants = __webpack_require__(
    /*! ../constants */
    "./node_modules/@mapbox/mapbox-sdk/lib/constants.js");

    var requestId = 1;
    /**
     * A Mapbox API request.
     *
     * Note that creating a `MapiRequest` does *not* send the request automatically.
     * Use the request's `send` method to send it off and get a `Promise`.
     *
     * The `emitter` property is an `EventEmitter` that emits the following events:
     *
     * - `'response'` - Listeners will be called with a `MapiResponse`.
     * - `'error'` - Listeners will be called with a `MapiError`.
     * - `'downloadProgress'` - Listeners will be called with `ProgressEvents`.
     * - `'uploadProgress'` - Listeners will be called with `ProgressEvents`.
     *   Upload events are only available when the request includes a file.
     *
     * @class MapiRequest
     * @property {EventEmitter} emitter - An event emitter. See above.
     * @property {MapiClient} client - This request's `MapiClient`.
     * @property {MapiResponse|null} response - If this request has been sent and received
     *   a response, the response is available on this property.
     * @property {MapiError|Error|null} error - If this request has been sent and
     *   received an error in response, the error is available on this property.
     * @property {boolean} aborted - If the request has been aborted
     *   (via [`abort`](#abort)), this property will be `true`.
     * @property {boolean} sent - If the request has been sent, this property will
     *   be `true`. You cannot send the same request twice, so if you need to create
     *   a new request that is the equivalent of an existing one, use
     *   [`clone`](#clone).
     * @property {string} path - The request's path, including colon-prefixed route
     *   parameters.
     * @property {string} origin - The request's origin.
     * @property {string} method - The request's HTTP method.
     * @property {Object} query - A query object, which will be transformed into
     *   a URL query string.
     * @property {Object} params - A route parameters object, whose values will
     *   be interpolated the path.
     * @property {Object} headers - The request's headers.
     * @property {Object|string|null} body - Data to send with the request.
     *   If the request has a body, it will also be sent with the header
     *   `'Content-Type: application/json'`.
     * @property {Blob|ArrayBuffer|string|ReadStream} file - A file to
     *   send with the request. The browser client accepts Blobs and ArrayBuffers;
     *   the Node client accepts strings (filepaths) and ReadStreams.
     */

    /**
     * @ignore
     * @param {MapiClient} client
     * @param {Object} options
     * @param {string} options.method
     * @param {string} options.path
     * @param {Object} [options.query={}]
     * @param {Object} [options.params={}]
     * @param {string} [options.origin]
     * @param {Object} [options.headers]
     * @param {Object} [options.body=null]
     * @param {Blob|ArrayBuffer|string|ReadStream} [options.file=null]
     */

    function MapiRequest(client, options) {
      if (!client) {
        throw new Error('MapiRequest requires a client');
      }

      if (!options || !options.path || !options.method) {
        throw new Error('MapiRequest requires an options object with path and method properties');
      }

      var defaultHeaders = {};

      if (options.body) {
        defaultHeaders['content-type'] = 'application/json';
      }

      var headersWithDefaults = xtend(defaultHeaders, options.headers); // Disallows duplicate header names of mixed case,
      // e.g. Content-Type and content-type.

      var headers = Object.keys(headersWithDefaults).reduce(function (memo, name) {
        memo[name.toLowerCase()] = headersWithDefaults[name];
        return memo;
      }, {});
      this.id = requestId++;
      this._options = options;
      this.emitter = new EventEmitter();
      this.client = client;
      this.response = null;
      this.error = null;
      this.sent = false;
      this.aborted = false;
      this.path = options.path;
      this.method = options.method;
      this.origin = options.origin || client.origin;
      this.query = options.query || {};
      this.params = options.params || {};
      this.body = options.body || null;
      this.file = options.file || null;
      this.headers = headers;
    }
    /**
     * Get the URL of the request.
     *
     * @param {string} [accessToken] - By default, the access token of the request's
     *   client is used.
     * @return {string}
     */


    MapiRequest.prototype.url = function url(accessToken) {
      var url = urlUtils.prependOrigin(this.path, this.origin);
      url = urlUtils.appendQueryObject(url, this.query);
      var routeParams = this.params;

      if (accessToken) {
        url = urlUtils.appendQueryParam(url, 'access_token', accessToken);
        var accessTokenOwnerId = parseToken(accessToken).user;
        routeParams = xtend({
          ownerId: accessTokenOwnerId
        }, routeParams);
      }

      url = urlUtils.interpolateRouteParams(url, routeParams);
      return url;
    };
    /**
     * Send the request. Returns a Promise that resolves with a `MapiResponse`.
     * You probably want to use `response.body`.
     *
     * `send` only retrieves the first page of paginated results. You can get
     * the next page by using the `MapiResponse`'s [`nextPage`](#nextpage)
     * function, or iterate through all pages using [`eachPage`](#eachpage)
     * instead of `send`.
     *
     * @returns {Promise<MapiResponse>}
     */


    MapiRequest.prototype.send = function send() {
      var self = this;

      if (self.sent) {
        throw new Error('This request has already been sent. Check the response and error properties. Create a new request with clone().');
      }

      self.sent = true;
      return self.client.sendRequest(self).then(function (response) {
        self.response = response;
        self.emitter.emit(constants.EVENT_RESPONSE, response);
        return response;
      }, function (error) {
        self.error = error;
        self.emitter.emit(constants.EVENT_ERROR, error);
        throw error;
      });
    };
    /**
     * Abort the request.
     *
     * Any pending `Promise` returned by [`send`](#send) will be rejected with
     * an error with `type: 'RequestAbortedError'`. If you've created a request
     * that might be aborted, you need to catch and handle such errors.
     *
     * This method will also abort any requests created while fetching subsequent
     * pages via [`eachPage`](#eachpage).
     *
     * If the request has not been sent or has already been aborted, nothing
     * will happen.
     */


    MapiRequest.prototype.abort = function abort() {
      if (this._nextPageRequest) {
        this._nextPageRequest.abort();

        delete this._nextPageRequest;
      }

      if (this.response || this.error || this.aborted) return;
      this.aborted = true;
      this.client.abortRequest(this);
    };
    /**
     * Invoke a callback for each page of a paginated API response.
     *
     * The callback should have the following signature:
     *
     * ```js
     * (
     *   error: MapiError,
     *   response: MapiResponse,
     *   next: () => void
     * ) => void
     * ```
     *
     * **The next page will not be fetched until you've invoked the
     * `next` callback**, indicating that you're ready for it.
     *
     * @param {Function} callback
     */


    MapiRequest.prototype.eachPage = function eachPage(callback) {
      var self = this;

      function handleResponse(response) {
        function getNextPage() {
          delete self._nextPageRequest;
          var nextPageRequest = response.nextPage();

          if (nextPageRequest) {
            self._nextPageRequest = nextPageRequest;
            getPage(nextPageRequest);
          }
        }

        callback(null, response, getNextPage);
      }

      function handleError(error) {
        callback(error, null, function () {});
      }

      function getPage(request) {
        request.send().then(handleResponse, handleError);
      }

      getPage(this);
    };
    /**
     * Clone this request.
     *
     * Each request can only be sent *once*. So if you'd like to send the
     * same request again, clone it and send away.
     *
     * @returns {MapiRequest} - A new `MapiRequest` configured just like this one.
     */


    MapiRequest.prototype.clone = function clone() {
      return this._extend();
    };
    /**
     * @ignore
     */


    MapiRequest.prototype._extend = function _extend(options) {
      var extendedOptions = xtend(this._options, options);
      return new MapiRequest(this.client, extendedOptions);
    };

    module.exports = MapiRequest;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-response.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-response.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibClassesMapiResponseJs(module, exports, __webpack_require__) {
    "use strict";

    var parseLinkHeader = __webpack_require__(
    /*! ../helpers/parse-link-header */
    "./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-link-header.js");
    /**
     * A Mapbox API response.
     *
     * @class MapiResponse
     * @property {Object} body - The response body, parsed as JSON.
     * @property {string} rawBody - The raw response body.
     * @property {number} statusCode - The response's status code.
     * @property {Object} headers - The parsed response headers.
     * @property {Object} links - The parsed response links.
     * @property {MapiRequest} request - The response's originating `MapiRequest`.
     */

    /**
     * @ignore
     * @param {MapiRequest} request
     * @param {Object} responseData
     * @param {Object} responseData.headers
     * @param {string} responseData.body
     * @param {number} responseData.statusCode
     */


    function MapiResponse(request, responseData) {
      this.request = request;
      this.headers = responseData.headers;
      this.rawBody = responseData.body;
      this.statusCode = responseData.statusCode;

      try {
        this.body = JSON.parse(responseData.body || '{}');
      } catch (parseError) {
        this.body = responseData.body;
      }

      this.links = parseLinkHeader(this.headers.link);
    }
    /**
     * Check if there is a next page that you can fetch.
     *
     * @returns {boolean}
     */


    MapiResponse.prototype.hasNextPage = function hasNextPage() {
      return !!this.links.next;
    };
    /**
     * Create a request for the next page, if there is one.
     * If there is no next page, returns `null`.
     *
     * @returns {MapiRequest | null}
     */


    MapiResponse.prototype.nextPage = function nextPage() {
      if (!this.hasNextPage()) return null;
      return this.request._extend({
        path: this.links.next.url
      });
    };

    module.exports = MapiResponse;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/constants.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/constants.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibConstantsJs(module, exports, __webpack_require__) {
    "use strict";

    module.exports = {
      API_ORIGIN: 'https://api.mapbox.com',
      EVENT_PROGRESS_DOWNLOAD: 'downloadProgress',
      EVENT_PROGRESS_UPLOAD: 'uploadProgress',
      EVENT_ERROR: 'error',
      EVENT_RESPONSE: 'response',
      ERROR_HTTP: 'HttpError',
      ERROR_REQUEST_ABORTED: 'RequestAbortedError'
    };
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-headers.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-headers.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibHelpersParseHeadersJs(module, exports, __webpack_require__) {
    "use strict";

    function parseSingleHeader(raw) {
      var boundary = raw.indexOf(':');
      var name = raw.substring(0, boundary).trim().toLowerCase();
      var value = raw.substring(boundary + 1).trim();
      return {
        name: name,
        value: value
      };
    }
    /**
     * Parse raw headers into an object with lowercase properties.
     * Does not fully parse headings into more complete data structure,
     * as larger libraries might do. Also does not deal with duplicate
     * headers because Node doesn't seem to deal with those well, so
     * we shouldn't let the browser either, for consistency.
     *
     * @param {string} raw
     * @returns {Object}
     */


    function parseHeaders(raw) {
      var headers = {};

      if (!raw) {
        return headers;
      }

      raw.trim().split(/[\r|\n]+/).forEach(function (rawHeader) {
        var parsed = parseSingleHeader(rawHeader);
        headers[parsed.name] = parsed.value;
      });
      return headers;
    }

    module.exports = parseHeaders;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-link-header.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/helpers/parse-link-header.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibHelpersParseLinkHeaderJs(module, exports, __webpack_require__) {
    "use strict"; // Like https://github.com/thlorenz/lib/parse-link-header but without any
    // additional dependencies.

    function parseParam(param) {
      var parts = param.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
      if (!parts) return null;
      return {
        key: parts[1],
        value: parts[2]
      };
    }

    function parseLink(link) {
      var parts = link.match(/<?([^>]*)>(.*)/);
      if (!parts) return null;
      var linkUrl = parts[1];
      var linkParams = parts[2].split(';');
      var rel = null;
      var parsedLinkParams = linkParams.reduce(function (result, param) {
        var parsed = parseParam(param);
        if (!parsed) return result;

        if (parsed.key === 'rel') {
          if (!rel) {
            rel = parsed.value;
          }

          return result;
        }

        result[parsed.key] = parsed.value;
        return result;
      }, {});
      if (!rel) return null;
      return {
        url: linkUrl,
        rel: rel,
        params: parsedLinkParams
      };
    }
    /**
     * Parse a Link header.
     *
     * @param {string} linkHeader
     * @returns {{
     *   [string]: {
     *     url: string,
     *     params: { [string]: string }
     *   }
     * }}
     */


    function parseLinkHeader(linkHeader) {
      if (!linkHeader) return {};
      return linkHeader.split(/,\s*</).reduce(function (result, link) {
        var parsed = parseLink(link);
        if (!parsed) return result; // rel value can be multiple whitespace-separated rels.

        var splitRel = parsed.rel.split(/\s+/);
        splitRel.forEach(function (rel) {
          if (!result[rel]) {
            result[rel] = {
              url: parsed.url,
              params: parsed.params
            };
          }
        });
        return result;
      }, {});
    }

    module.exports = parseLinkHeader;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/lib/helpers/url-utils.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/lib/helpers/url-utils.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkLibHelpersUrlUtilsJs(module, exports, __webpack_require__) {
    "use strict"; // Encode each item of an array individually. The comma
    // delimiters should not themselves be encoded.

    function encodeArray(arrayValue) {
      return arrayValue.map(encodeURIComponent).join(',');
    }

    function encodeValue(value) {
      if (Array.isArray(value)) {
        return encodeArray(value);
      }

      return encodeURIComponent(String(value));
    }
    /**
     * Append a query parameter to a URL.
     *
     * @param {string} url
     * @param {string} key
     * @param {string|number|boolean|Array<*>>} [value] - Provide an array
     *   if the value is a list and commas between values need to be
     *   preserved, unencoded.
     * @returns {string} - Modified URL.
     */


    function appendQueryParam(url, key, value) {
      if (value === false || value === null) {
        return url;
      }

      var punctuation = /\?/.test(url) ? '&' : '?';
      var query = encodeURIComponent(key);

      if (value !== undefined && value !== '' && value !== true) {
        query += '=' + encodeValue(value);
      }

      return '' + url + punctuation + query;
    }
    /**
     * Derive a query string from an object and append it
     * to a URL.
     *
     * @param {string} url
     * @param {Object} [queryObject] - Values should be primitives.
     * @returns {string} - Modified URL.
     */


    function appendQueryObject(url, queryObject) {
      if (!queryObject) {
        return url;
      }

      var result = url;
      Object.keys(queryObject).forEach(function (key) {
        var value = queryObject[key];

        if (value === undefined) {
          return;
        }

        if (Array.isArray(value)) {
          value = value.filter(function (v) {
            return !!v;
          }).join(',');
        }

        result = appendQueryParam(result, key, value);
      });
      return result;
    }
    /**
     * Prepend an origin to a URL. If the URL already has an
     * origin, do nothing.
     *
     * @param {string} url
     * @param {string} origin
     * @returns {string} - Modified URL.
     */


    function prependOrigin(url, origin) {
      if (!origin) {
        return url;
      }

      if (url.slice(0, 4) === 'http') {
        return url;
      }

      var delimiter = url[0] === '/' ? '' : '/';
      return '' + origin.replace(/\/$/, '') + delimiter + url;
    }
    /**
     * Interpolate values into a route with express-style,
     * colon-prefixed route parameters.
     *
     * @param {string} route
     * @param {Object} [params] - Values should be primitives
     *   or arrays of primitives. Provide an array if the value
     *   is a list and commas between values need to be
     *   preserved, unencoded.
     * @returns {string} - Modified URL.
     */


    function interpolateRouteParams(route, params) {
      if (!params) {
        return route;
      }

      return route.replace(/\/:([a-zA-Z0-9]+)/g, function (_, paramId) {
        var value = params[paramId];

        if (value === undefined) {
          throw new Error('Unspecified route parameter ' + paramId);
        }

        var preppedValue = encodeValue(value);
        return '/' + preppedValue;
      });
    }

    module.exports = {
      appendQueryObject: appendQueryObject,
      appendQueryParam: appendQueryParam,
      prependOrigin: prependOrigin,
      interpolateRouteParams: interpolateRouteParams
    };
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/node_modules/eventemitter3/index.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/node_modules/eventemitter3/index.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkNode_modulesEventemitter3IndexJs(module, exports, __webpack_require__) {
    "use strict";

    var has = Object.prototype.hasOwnProperty,
        prefix = '~';
    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */

    function Events() {} //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //


    if (Object.create) {
      Events.prototype = Object.create(null); //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //

      if (!new Events().__proto__) prefix = false;
    }
    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */


    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */


    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once),
          evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */


    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
    }
    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */


    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */


    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [],
          events,
          name;
      if (this._eventsCount === 0) return names;

      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };
    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */


    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
          handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };
    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */


    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
          listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */


    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
          len = arguments.length,
          args,
          i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;

          case 2:
            return listeners.fn.call(listeners.context, a1), true;

          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;

          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;

          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
            j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;

            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;

            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;

            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;

            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };
    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;

      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        } //
        // Reset the array, or remove it completely if we have no more listeners.
        //


        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
      }

      return this;
    };
    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    }; //
    // Alias methods names because people roll like that.
    //


    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
    // Expose the prefix.
    //

    EventEmitter.prefixed = prefix; //
    // Allow `EventEmitter` to be imported as module namespace.
    //

    EventEmitter.EventEmitter = EventEmitter; //
    // Expose the module.
    //

    if (true) {
      module.exports = EventEmitter;
    }
    /***/

  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/geocoding.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/geocoding.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesGeocodingJs(module, exports, __webpack_require__) {
    "use strict";

    var xtend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var v = __webpack_require__(
    /*! ./service-helpers/validator */
    "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/validator.js");

    var pick = __webpack_require__(
    /*! ./service-helpers/pick */
    "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/pick.js");

    var stringifyBooleans = __webpack_require__(
    /*! ./service-helpers/stringify-booleans */
    "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/stringify-booleans.js");

    var createServiceFactory = __webpack_require__(
    /*! ./service-helpers/create-service-factory */
    "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/create-service-factory.js");
    /**
     * Geocoding API service.
     *
     * Learn more about this service and its responses in
     * [the HTTP service documentation](https://www.mapbox.com/api-documentation/#geocoding).
     */


    var Geocoding = {};
    var featureTypes = ['country', 'region', 'postcode', 'district', 'place', 'locality', 'neighborhood', 'address', 'poi', 'poi.landmark'];
    /**
     * Search for a place.
     *
     * See the [public documentation](https://www.mapbox.com/api-documentation/#search-for-places).
     *
     * @param {Object} config
     * @param {string} config.query - A place name.
     * @param {'mapbox.places'|'mapbox.places-permanent'} [config.mode="mapbox.places"] - Either `mapbox.places` for ephemeral geocoding, or `mapbox.places-permanent` for storing results and batch geocoding.
     * @param {Array<string>} [config.countries] - Limits results to the specified countries.
     *   Each item in the array should be an [ISO 3166 alpha 2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @param {Coordinates} [config.proximity] - Bias local results based on a provided location.
     * @param {Array<'country'|'region'|'postcode'|'district'|'place'|'locality'|'neighborhood'|'address'|'poi'|'poi.landmark'>} [config.types] - Filter results by feature types.
     * @param {boolean} [config.autocomplete=true] - Return autocomplete results or not.
     * @param {BoundingBox} [config.bbox] - Limit results to a bounding box.
     * @param {number} [config.limit=5] - Limit the number of results returned.
     * @param {Array<string>} [config.language] - Specify the language to use for response text and, for forward geocoding, query result weighting.
     *  Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory
     *  [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and optionally one or more IETF subtags for country or script.
     * @return {MapiRequest}
     */

    Geocoding.forwardGeocode = function (config) {
      v.assertShape({
        query: v.required(v.string),
        mode: v.oneOf('mapbox.places', 'mapbox.places-permanent'),
        countries: v.arrayOf(v.string),
        proximity: v.coordinates,
        types: v.arrayOf(v.oneOf(featureTypes)),
        autocomplete: v["boolean"],
        bbox: v.arrayOf(v.number),
        limit: v.number,
        language: v.arrayOf(v.string)
      })(config);
      config.mode = config.mode || 'mapbox.places';
      var query = stringifyBooleans(xtend({
        country: config.countries
      }, pick(config, ['proximity', 'types', 'autocomplete', 'bbox', 'limit', 'language'])));
      return this.client.createRequest({
        method: 'GET',
        path: '/geocoding/v5/:mode/:query.json',
        params: pick(config, ['mode', 'query']),
        query: query
      });
    };
    /**
     * Search for places near coordinates.
     *
     * See the [public documentation](https://www.mapbox.com/api-documentation/#retrieve-places-near-a-location).
     *
     * @param {Object} config
     * @param {Coordinates} config.query - Coordinates at which features will be searched.
     * @param {'mapbox.places'|'mapbox.places-permanent'} [config.mode="mapbox.places"] - Either `mapbox.places` for ephemeral geocoding, or `mapbox.places-permanent` for storing results and batch geocoding.
     * @param {Array<string>} [config.countries] - Limits results to the specified countries.
     *   Each item in the array should be an [ISO 3166 alpha 2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @param {Array<'country'|'region'|'postcode'|'district'|'place'|'locality'|'neighborhood'|'address'|'poi'|'poi.landmark'>} [config.types] - Filter results by feature types.
     * @param {BoundingBox} [config.bbox] - Limit results to a bounding box.
     * @param {number} [config.limit=1] - Limit the number of results returned. If using this option, you must provide a single item for `types`.
     * @param {Array<string>} [config.language] - Specify the language to use for response text and, for forward geocoding, query result weighting.
     *  Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory
     *  [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and optionally one or more IETF subtags for country or script.
     * @param {'distance'|'score'} [config.reverseMode='distance'] - Set the factors that are used to sort nearby results.
     * @return {MapiRequest}
     */


    Geocoding.reverseGeocode = function (config) {
      v.assertShape({
        query: v.required(v.coordinates),
        mode: v.oneOf('mapbox.places', 'mapbox.places-permanent'),
        countries: v.arrayOf(v.string),
        types: v.arrayOf(v.oneOf(featureTypes)),
        bbox: v.arrayOf(v.number),
        limit: v.number,
        language: v.arrayOf(v.string),
        reverseMode: v.oneOf('distance', 'score')
      })(config);
      config.mode = config.mode || 'mapbox.places';
      var query = stringifyBooleans(xtend({
        country: config.countries
      }, pick(config, ['country', 'types', 'bbox', 'limit', 'language', 'reverseMode'])));
      return this.client.createRequest({
        method: 'GET',
        path: '/geocoding/v5/:mode/:query.json',
        params: pick(config, ['mode', 'query']),
        query: query
      });
    };

    module.exports = createServiceFactory(Geocoding);
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/create-service-factory.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/service-helpers/create-service-factory.js ***!
    \********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesServiceHelpersCreateServiceFactoryJs(module, exports, __webpack_require__) {
    "use strict";

    var MapiClient = __webpack_require__(
    /*! ../../lib/classes/mapi-client */
    "./node_modules/@mapbox/mapbox-sdk/lib/classes/mapi-client.js"); // This will create the environment-appropriate client.


    var createClient = __webpack_require__(
    /*! ../../lib/client */
    "./node_modules/@mapbox/mapbox-sdk/lib/browser/browser-client.js");

    function createServiceFactory(ServicePrototype) {
      return function (clientOrConfig) {
        var client;

        if (MapiClient.prototype.isPrototypeOf(clientOrConfig)) {
          client = clientOrConfig;
        } else {
          client = createClient(clientOrConfig);
        }

        var service = Object.create(ServicePrototype);
        service.client = client;
        return service;
      };
    }

    module.exports = createServiceFactory;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/object-map.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/service-helpers/object-map.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesServiceHelpersObjectMapJs(module, exports, __webpack_require__) {
    "use strict";

    function objectMap(obj, cb) {
      return Object.keys(obj).reduce(function (result, key) {
        result[key] = cb(key, obj[key]);
        return result;
      }, {});
    }

    module.exports = objectMap;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/pick.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/service-helpers/pick.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesServiceHelpersPickJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Create a new object by picking properties off an existing object.
     * The second param can be overloaded as a callback for
     * more fine grained picking of properties.
     * @param {Object} source
     * @param {Array<string>|function(string, Object):boolean} keys
     * @returns {Object}
     */

    function pick(source, keys) {
      var filter = function filter(key, val) {
        return keys.indexOf(key) !== -1 && val !== undefined;
      };

      if (typeof keys === 'function') {
        filter = keys;
      }

      return Object.keys(source).filter(function (key) {
        return filter(key, source[key]);
      }).reduce(function (result, key) {
        result[key] = source[key];
        return result;
      }, {});
    }

    module.exports = pick;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/stringify-booleans.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/service-helpers/stringify-booleans.js ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesServiceHelpersStringifyBooleansJs(module, exports, __webpack_require__) {
    "use strict";

    var objectMap = __webpack_require__(
    /*! ./object-map */
    "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/object-map.js");
    /**
     * Stringify all the boolean values in an object, so true becomes "true".
     *
     * @param {Object} obj
     * @returns {Object}
     */


    function stringifyBoolean(obj) {
      return objectMap(obj, function (_, value) {
        return typeof value === 'boolean' ? JSON.stringify(value) : value;
      });
    }

    module.exports = stringifyBoolean;
    /***/
  },

  /***/
  "./node_modules/@mapbox/mapbox-sdk/services/service-helpers/validator.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@mapbox/mapbox-sdk/services/service-helpers/validator.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxMapboxSdkServicesServiceHelpersValidatorJs(module, exports, __webpack_require__) {
    "use strict";

    var xtend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var v = __webpack_require__(
    /*! @mapbox/fusspot */
    "./node_modules/@mapbox/fusspot/lib/index.js");

    function file(value) {
      // If we're in a browser so Blob is available, the file must be that.
      // In Node, however, it could be a filepath or a pipeable (Readable) stream.
      if (typeof window !== 'undefined') {
        if (value instanceof global.Blob || value instanceof global.ArrayBuffer) {
          return;
        }

        return 'Blob or ArrayBuffer';
      }

      if (typeof value === 'string' || value.pipe !== undefined) {
        return;
      }

      return 'Filename or Readable stream';
    }

    function assertShape(validatorObj, apiName) {
      return v.assert(v.strictShape(validatorObj), apiName);
    }

    function date(value) {
      var msg = 'date';

      if (typeof value === 'boolean') {
        return msg;
      }

      try {
        var date = new Date(value);

        if (date.getTime && isNaN(date.getTime())) {
          return msg;
        }
      } catch (e) {
        return msg;
      }
    }

    function coordinates(value) {
      return v.tuple(v.number, v.number)(value);
    }

    module.exports = xtend(v, {
      file: file,
      date: date,
      coordinates: coordinates,
      assertShape: assertShape
    });
    /***/
  },

  /***/
  "./node_modules/@mapbox/parse-mapbox-token/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@mapbox/parse-mapbox-token/index.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMapboxParseMapboxTokenIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var base64 = __webpack_require__(
    /*! base-64 */
    "./node_modules/base-64/base64.js");

    var tokenCache = {};

    function parseToken(token) {
      if (tokenCache[token]) {
        return tokenCache[token];
      }

      var parts = token.split('.');
      var usage = parts[0];
      var rawPayload = parts[1];

      if (!rawPayload) {
        throw new Error('Invalid token');
      }

      var parsedPayload = parsePaylod(rawPayload);
      var result = {
        usage: usage,
        user: parsedPayload.u
      };
      if (has(parsedPayload, 'a')) result.authorization = parsedPayload.a;
      if (has(parsedPayload, 'exp')) result.expires = parsedPayload.exp * 1000;
      if (has(parsedPayload, 'iat')) result.created = parsedPayload.iat * 1000;
      if (has(parsedPayload, 'scopes')) result.scopes = parsedPayload.scopes;
      if (has(parsedPayload, 'client')) result.client = parsedPayload.client;
      if (has(parsedPayload, 'll')) result.lastLogin = parsedPayload.ll;
      if (has(parsedPayload, 'iu')) result.impersonator = parsedPayload.iu;
      tokenCache[token] = result;
      return result;
    }

    function parsePaylod(rawPayload) {
      try {
        return JSON.parse(base64.decode(rawPayload));
      } catch (parseError) {
        throw new Error('Invalid token');
      }
    }

    function has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    module.exports = parseToken;
    /***/
  },

  /***/
  "./node_modules/base-64/base64.js":
  /*!****************************************!*\
    !*** ./node_modules/base-64/base64.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesBase64Base64Js(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */


      ;

      (function (root) {
        // Detect free variables `exports`.
        var freeExports = true && exports; // Detect free variable `module`.

        var freeModule = true && module && module.exports == freeExports && module; // Detect free variable `global`, from Node.js or Browserified code, and use
        // it as `root`.

        var freeGlobal = typeof global == 'object' && global;

        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
          root = freeGlobal;
        }
        /*--------------------------------------------------------------------------*/


        var InvalidCharacterError = function InvalidCharacterError(message) {
          this.message = message;
        };

        InvalidCharacterError.prototype = new Error();
        InvalidCharacterError.prototype.name = 'InvalidCharacterError';

        var error = function error(message) {
          // Note: the error messages used throughout this file match those used by
          // the native `atob`/`btoa` implementation in Chromium.
          throw new InvalidCharacterError(message);
        };

        var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // http://whatwg.org/html/common-microsyntaxes.html#space-character

        var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g; // `decode` is designed to be fully compatible with `atob` as described in the
        // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
        // The optimized base64-decoding algorithm used is based on @atk’s excellent
        // implementation. https://gist.github.com/atk/1020396

        var decode = function decode(input) {
          input = String(input).replace(REGEX_SPACE_CHARACTERS, '');
          var length = input.length;

          if (length % 4 == 0) {
            input = input.replace(/==?$/, '');
            length = input.length;
          }

          if (length % 4 == 1 || // http://whatwg.org/C#alphanumeric-ascii-characters
          /[^+a-zA-Z0-9/]/.test(input)) {
            error('Invalid character: the string to be decoded is not correctly encoded.');
          }

          var bitCounter = 0;
          var bitStorage;
          var buffer;
          var output = '';
          var position = -1;

          while (++position < length) {
            buffer = TABLE.indexOf(input.charAt(position));
            bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer; // Unless this is the first of a group of 4 characters…

            if (bitCounter++ % 4) {
              // …convert the first 8 bits to a single ASCII character.
              output += String.fromCharCode(0xFF & bitStorage >> (-2 * bitCounter & 6));
            }
          }

          return output;
        }; // `encode` is designed to be fully compatible with `btoa` as described in the
        // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa


        var encode = function encode(input) {
          input = String(input);

          if (/[^\0-\xFF]/.test(input)) {
            // Note: no need to special-case astral symbols here, as surrogates are
            // matched, and the input is supposed to only contain ASCII anyway.
            error('The string to be encoded contains characters outside of the ' + 'Latin1 range.');
          }

          var padding = input.length % 3;
          var output = '';
          var position = -1;
          var a;
          var b;
          var c;
          var d;
          var buffer; // Make sure any padding is handled outside of the loop.

          var length = input.length - padding;

          while (++position < length) {
            // Read three bytes, i.e. 24 bits.
            a = input.charCodeAt(position) << 16;
            b = input.charCodeAt(++position) << 8;
            c = input.charCodeAt(++position);
            buffer = a + b + c; // Turn the 24 bits into four chunks of 6 bits each, and append the
            // matching character for each of them to the output.

            output += TABLE.charAt(buffer >> 18 & 0x3F) + TABLE.charAt(buffer >> 12 & 0x3F) + TABLE.charAt(buffer >> 6 & 0x3F) + TABLE.charAt(buffer & 0x3F);
          }

          if (padding == 2) {
            a = input.charCodeAt(position) << 8;
            b = input.charCodeAt(++position);
            buffer = a + b;
            output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 0x3F) + TABLE.charAt(buffer << 2 & 0x3F) + '=';
          } else if (padding == 1) {
            buffer = input.charCodeAt(position);
            output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 0x3F) + '==';
          }

          return output;
        };

        var base64 = {
          'encode': encode,
          'decode': decode,
          'version': '0.1.0'
        }; // Some AMD build optimizers, like r.js, check for specific condition patterns
        // like the following:

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return base64;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          var key;
        }
      })(this);
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/base64-js/index.js":
  /*!*****************************************!*\
    !*** ./node_modules/base64-js/index.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesBase64JsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    } // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications


    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;

    function getLens(b64) {
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      } // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42


      var validLen = b64.indexOf('=');
      if (validLen === -1) validLen = len;
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    } // base64 is 4/3 + up to two characters of the original data


    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }

    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }

    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;

      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      return arr;
    }

    function tripletToBase64(num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
    }

    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];

      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
      }

      return output.join('');
    }

    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3
      // go through the array every three bytes, we'll deal with trailing stuff later

      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      } // pad the end with zeros, but make sure to not forget the extra bytes


      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
      }

      return parts.join('');
    }
    /***/

  },

  /***/
  "./node_modules/buffer/index.js":
  /*!**************************************!*\
    !*** ./node_modules/buffer/index.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesBufferIndexJs(module, exports, __webpack_require__) {
    "use strict";
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */

    /* eslint-disable no-proto */

    var base64 = __webpack_require__(
    /*! base64-js */
    "./node_modules/base64-js/index.js");

    var ieee754 = __webpack_require__(
    /*! ieee754 */
    "./node_modules/ieee754/index.js");

    var isArray = __webpack_require__(
    /*! isarray */
    "./node_modules/isarray/index.js");

    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.
    
     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */

    Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
    /*
     * Export kMaxLength after typed array support is determined.
     */

    exports.kMaxLength = kMaxLength();

    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        };
        return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
      } catch (e) {
        return false;
      }
    }

    function kMaxLength() {
      return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
    }

    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length');
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }

        that.length = length;
      }

      return that;
    }
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */


    function Buffer(arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length);
      } // Common case.


      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error('If encoding is specified then the first argument must be a string');
        }

        return allocUnsafe(this, arg);
      }

      return from(this, arg, encodingOrOffset, length);
    }

    Buffer.poolSize = 8192; // not used by this implementation
    // TODO: Legacy, not needed anymore. Remove in next major version.

    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr;
    };

    function from(that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset);
      }

      return fromObject(that, value);
    }
    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/


    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;

      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }

    function assertSize(size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number');
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    }

    function alloc(that, size, fill, encoding) {
      assertSize(size);

      if (size <= 0) {
        return createBuffer(that, size);
      }

      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }

      return createBuffer(that, size);
    }
    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/


    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };

    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }

      return that;
    }
    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */


    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size);
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */


    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size);
    };

    function fromString(that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that;
    }

    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);

      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }

      return that;
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }

      return that;
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that;
        }

        obj.copy(that, 0, 0, len);
        return that;
      }

      if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0);
          }

          return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
    }

    function checked(length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
      }

      return length | 0;
    }

    function SlowBuffer(length) {
      if (+length != length) {
        // eslint-disable-line eqeqeq
        length = 0;
      }

      return Buffer.alloc(+length);
    }

    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };

    Buffer.compare = function compare(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
      }

      if (a === b) return 0;
      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true;

        default:
          return false;
      }
    };

    Buffer.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return Buffer.alloc(0);
      }

      var i;

      if (length === undefined) {
        length = 0;

        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;

      for (i = 0; i < list.length; ++i) {
        var buf = list[i];

        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        buf.copy(buffer, pos);
        pos += buf.length;
      }

      return buffer;
    };

    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }

      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }

      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0; // Use a for loop to avoid recursion

      var loweredCase = false;

      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len;

          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length;

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2;

          case 'hex':
            return len >>> 1;

          case 'base64':
            return base64ToBytes(string).length;

          default:
            if (loweredCase) return utf8ToBytes(string).length; // assume utf8

            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }

    Buffer.byteLength = byteLength;

    function slowToString(encoding, start, end) {
      var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.
      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

      if (start === undefined || start < 0) {
        start = 0;
      } // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.


      if (start > this.length) {
        return '';
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return '';
      } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return '';
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end);

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end);

          case 'ascii':
            return asciiSlice(this, start, end);

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end);

          case 'base64':
            return base64Slice(this, start, end);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.


    Buffer.prototype._isBuffer = true;

    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16() {
      var len = this.length;

      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      }

      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }

      return this;
    };

    Buffer.prototype.swap32 = function swap32() {
      var len = this.length;

      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      }

      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }

      return this;
    };

    Buffer.prototype.swap64 = function swap64() {
      var len = this.length;

      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      }

      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }

      return this;
    };

    Buffer.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0) return '';
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };

    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
      if (this === b) return true;
      return Buffer.compare(this, b) === 0;
    };

    Buffer.prototype.inspect = function inspect() {
      var str = '';
      var max = exports.INSPECT_MAX_BYTES;

      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }

      return '<Buffer ' + str + '>';
    };

    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer');
      }

      if (start === undefined) {
        start = 0;
      }

      if (end === undefined) {
        end = target ? target.length : 0;
      }

      if (thisStart === undefined) {
        thisStart = 0;
      }

      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }

      if (thisStart >= thisEnd) {
        return -1;
      }

      if (start >= end) {
        return 1;
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf


    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1; // Normalize byteOffset

      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }

      byteOffset = +byteOffset; // Coerce to Number.

      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : buffer.length - 1;
      } // Normalize byteOffset: negative offsets start from the end of the buffer


      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

      if (byteOffset >= buffer.length) {
        if (dir) return -1;else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;else return -1;
      } // Normalize val


      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      } // Finally, search either indexOf (if dir is true) or lastIndexOf


      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1;
        }

        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]

        if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }

        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }

      throw new TypeError('val must be string, number or Buffer');
    }

    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();

        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }

          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read(buf, i) {
        if (indexSize === 1) {
          return buf[i];
        } else {
          return buf.readUInt16BE(i * indexSize);
        }
      }

      var i;

      if (dir) {
        var foundIndex = -1;

        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

        for (i = byteOffset; i >= 0; i--) {
          var found = true;

          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }

          if (found) return i;
        }
      }

      return -1;
    }

    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };

    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;

      if (!length) {
        length = remaining;
      } else {
        length = Number(length);

        if (length > remaining) {
          length = remaining;
        }
      } // must be an even number of digits


      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

      if (length > strLen / 2) {
        length = strLen / 2;
      }

      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }

      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }

    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }

    Buffer.prototype.write = function write(string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0; // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0; // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;

        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        } // legacy write(string, encoding, offset, length) - remove in v0.13

      } else {
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
      }

      if (!encoding) encoding = 'utf8';
      var loweredCase = false;

      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length);

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length);

          case 'ascii':
            return asciiWrite(this, string, offset, length);

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length);

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;

      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }

              break;

            case 2:
              secondByte = buf[i + 1];

              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }

              break;

            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];

              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }

              break;

            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];

              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }

          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res);
    } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety


    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;

      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
      } // Decode in chunks to avoid "call stack size exceeded".


      var res = '';
      var i = 0;

      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }

      return res;
    }

    function asciiSlice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }

      return ret;
    }

    function latin1Slice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }

      return ret;
    }

    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      var out = '';

      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }

      return out;
    }

    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';

      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }

      return res;
    }

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;
      var newBuf;

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);

        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf;
    };
    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */


    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
    }

    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;

      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val;
    };

    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;

      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;

      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val;
    };

    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };

    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;

      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      mul *= 0x80;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength);
      return val;
    };

    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);
      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];

      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }

      mul *= 0x80;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength);
      return val;
    };

    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return this[offset];
      return (0xff - this[offset] + 1) * -1;
    };

    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };

    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };

    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };

    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;

      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;

      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;

      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;

      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = value & 0xff;
      return offset + 1;
    };

    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;

      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }

      return offset + 2;
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }

      return offset + 2;
    };

    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;

      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }

      return offset + 4;
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }

      return offset + 4;
    };

    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;

      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;

      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }

        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;

      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;

      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }

        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = value & 0xff;
      return offset + 1;
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }

      return offset + 2;
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }

      return offset + 2;
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }

      return offset + 4;
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }

      return offset + 4;
    };

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
      if (offset < 0) throw new RangeError('Index out of range');
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
      }

      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
      }

      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
      }

      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
      if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

      if (end > this.length) end = this.length;

      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }

      return len;
    }; // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])


    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }

        if (val.length === 1) {
          var code = val.charCodeAt(0);

          if (code < 256) {
            val = code;
          }
        }

        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string');
        }

        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      } // Invalid ranges are not set to a default, so can range check early.


      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;
      if (!val) val = 0;
      var i;

      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;

        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    }; // HELPER FUNCTIONS
    // ================


    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean(str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

      if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

      while (str.length % 4 !== 0) {
        str = str + '=';
      }

      return str;
    }

    function stringtrim(str) {
      if (str.trim) return str.trim();
      return str.replace(/^\s+|\s+$/g, '');
    }

    function toHex(n) {
      if (n < 16) return '0' + n.toString(16);
      return n.toString(16);
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i); // is surrogate component

        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } // valid lead


            leadSurrogate = codePoint;
            continue;
          } // 2 leads in a row


          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue;
          } // valid surrogate pair


          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null; // encode utf8

        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
          throw new Error('Invalid code point');
        }
      }

      return bytes;
    }

    function asciiToBytes(str) {
      var byteArray = [];

      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }

      return byteArray;
    }

    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];

      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray;
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }

      return i;
    }

    function isnan(val) {
      return val !== val; // eslint-disable-line no-self-compare
    }
    /***/

  },

  /***/
  "./node_modules/events/events.js":
  /*!***************************************!*\
    !*** ./node_modules/events/events.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesEventsEventsJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    var R = typeof Reflect === 'object' ? Reflect : null;
    var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;

    if (R && typeof R.ownKeys === 'function') {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
      };
    }

    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }

    var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
      return value !== value;
    };

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    module.exports = EventEmitter; // Backwards-compat with node 0.10.x

    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.

    var defaultMaxListeners = 10;

    function checkListener(listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }

    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function get() {
        return defaultMaxListeners;
      },
      set: function set(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }

        defaultMaxListeners = arg;
      }
    });

    EventEmitter.init = function () {
      if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || undefined;
    }; // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.


    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
      }

      this._maxListeners = n;
      return this;
    };

    function _getMaxListeners(that) {
      if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };

    EventEmitter.prototype.emit = function emit(type) {
      var args = [];

      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      var doError = type === 'error';
      var events = this._events;
      if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

      if (doError) {
        var er;
        if (args.length > 0) er = args[0];

        if (er instanceof Error) {
          // Note: The comments on the `throw` lines are intentional, they show
          // up in Node's output if this results in an unhandled exception.
          throw er; // Unhandled 'error' event
        } // At least give some kind of context to the user


        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
      }

      var handler = events[type];
      if (handler === undefined) return false;

      if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);

        for (var i = 0; i < len; ++i) {
          ReflectApply(listeners[i], this, args);
        }
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;

      if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
          target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object

          events = target._events;
        }

        existing = events[type];
      }

      if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        } // Check for listener leak


        m = _getMaxListeners(target);

        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true; // No error code for this since it is a Warning
          // eslint-disable-next-line no-restricted-syntax

          var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }

      return target;
    }

    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }

    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }

    EventEmitter.prototype.once = function once(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }; // Emits a 'removeListener' event if and only if the listener was removed.


    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === undefined) return this;
      list = events[type];
      if (list === undefined) return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);else {
          delete events[type];
          if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0) return this;
        if (position === 0) list.shift();else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === undefined) return this; // not listening for removeListener, no need to emit

      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
        }

        return this;
      } // emit removeListener for all listeners on all events


      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;

        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }

        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === undefined) return [];
      var evlistener = events[type];
      if (evlistener === undefined) return [];
      if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }

    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };

    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };

    EventEmitter.listenerCount = function (emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;

    function listenerCount(type) {
      var events = this._events;

      if (events !== undefined) {
        var evlistener = events[type];

        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener !== undefined) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };

    function arrayClone(arr, n) {
      var copy = new Array(n);

      for (var i = 0; i < n; ++i) {
        copy[i] = arr[i];
      }

      return copy;
    }

    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) {
        list[index] = list[index + 1];
      }

      list.pop();
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);

      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }

      return ret;
    }
    /***/

  },

  /***/
  "./node_modules/fuzzy/lib/fuzzy.js":
  /*!*****************************************!*\
    !*** ./node_modules/fuzzy/lib/fuzzy.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesFuzzyLibFuzzyJs(module, exports, __webpack_require__) {
    /*
     * Fuzzy
     * https://github.com/myork/fuzzy
     *
     * Copyright (c) 2012 Matt York
     * Licensed under the MIT license.
     */
    (function () {
      var root = this;
      var fuzzy = {}; // Use in node or in browser

      if (true) {
        module.exports = fuzzy;
      } else {} // Return all elements of `array` that have a fuzzy
      // match against `pattern`.


      fuzzy.simpleFilter = function (pattern, array) {
        return array.filter(function (str) {
          return fuzzy.test(pattern, str);
        });
      }; // Does `pattern` fuzzy match `str`?


      fuzzy.test = function (pattern, str) {
        return fuzzy.match(pattern, str) !== null;
      }; // If `pattern` matches `str`, wrap each matching character
      // in `opts.pre` and `opts.post`. If no match, return null


      fuzzy.match = function (pattern, str, opts) {
        opts = opts || {};
        var patternIdx = 0,
            result = [],
            len = str.length,
            totalScore = 0,
            currScore = 0 // prefix
        ,
            pre = opts.pre || '' // suffix
        ,
            post = opts.post || '' // String to compare against. This might be a lowercase version of the
        // raw string
        ,
            compareString = opts.caseSensitive && str || str.toLowerCase(),
            ch;
        pattern = opts.caseSensitive && pattern || pattern.toLowerCase(); // For each character in the string, either add it to the result
        // or wrap in template if it's the next string in the pattern

        for (var idx = 0; idx < len; idx++) {
          ch = str[idx];

          if (compareString[idx] === pattern[patternIdx]) {
            ch = pre + ch + post;
            patternIdx += 1; // consecutive characters should increase the score more than linearly

            currScore += 1 + currScore;
          } else {
            currScore = 0;
          }

          totalScore += currScore;
          result[result.length] = ch;
        } // return rendered string if we have a match for every char


        if (patternIdx === pattern.length) {
          // if the string is an exact match with pattern, totalScore should be maxed
          totalScore = compareString === pattern ? Infinity : totalScore;
          return {
            rendered: result.join(''),
            score: totalScore
          };
        }

        return null;
      }; // The normal entry point. Filters `arr` for matches against `pattern`.
      // It returns an array with matching values of the type:
      //
      //     [{
      //         string:   '<b>lah' // The rendered string
      //       , index:    2        // The index of the element in `arr`
      //       , original: 'blah'   // The original element in `arr`
      //     }]
      //
      // `opts` is an optional argument bag. Details:
      //
      //    opts = {
      //        // string to put before a matching character
      //        pre:     '<b>'
      //
      //        // string to put after matching character
      //      , post:    '</b>'
      //
      //        // Optional function. Input is an entry in the given arr`,
      //        // output should be the string to test `pattern` against.
      //        // In this example, if `arr = [{crying: 'koala'}]` we would return
      //        // 'koala'.
      //      , extract: function(arg) { return arg.crying; }
      //    }


      fuzzy.filter = function (pattern, arr, opts) {
        if (!arr || arr.length === 0) {
          return [];
        }

        if (typeof pattern !== 'string') {
          return arr;
        }

        opts = opts || {};
        return arr.reduce(function (prev, element, idx, arr) {
          var str = element;

          if (opts.extract) {
            str = opts.extract(element);
          }

          var rendered = fuzzy.match(pattern, str, opts);

          if (rendered != null) {
            prev[prev.length] = {
              string: rendered.rendered,
              score: rendered.score,
              index: idx,
              original: element
            };
          }

          return prev;
        }, []) // Sort by score. Browsers are inconsistent wrt stable/unstable
        // sorting, so force stable by using the index in the case of tie.
        // See http://ofb.net/~sethml/is-sort-stable.html
        .sort(function (a, b) {
          var compare = b.score - a.score;
          if (compare) return compare;
          return a.index - b.index;
        });
      };
    })();
    /***/

  },

  /***/
  "./node_modules/ieee754/index.js":
  /*!***************************************!*\
    !*** ./node_modules/ieee754/index.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesIeee754IndexJs(module, exports) {
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;

      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);

        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    };
    /***/

  },

  /***/
  "./node_modules/inherits/inherits_browser.js":
  /*!***************************************************!*\
    !*** ./node_modules/inherits/inherits_browser.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesInheritsInherits_browserJs(module, exports) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;

          var TempCtor = function TempCtor() {};

          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    /***/

  },

  /***/
  "./node_modules/is-plain-obj/index.js":
  /*!********************************************!*\
    !*** ./node_modules/is-plain-obj/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsPlainObjIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var toString = Object.prototype.toString;

    module.exports = function (x) {
      var prototype;
      return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
    };
    /***/

  },

  /***/
  "./node_modules/isarray/index.js":
  /*!***************************************!*\
    !*** ./node_modules/isarray/index.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsarrayIndexJs(module, exports) {
    var toString = {}.toString;

    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };
    /***/

  },

  /***/
  "./node_modules/lodash.debounce/index.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash.debounce/index.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashDebounceIndexJs(module, exports) {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';
    /** Used as references for various `Number` constants. */

    var NAN = 0 / 0;
    /** `Object#toString` result references. */

    var symbolTag = '[object Symbol]';
    /** Used to match leading and trailing whitespace. */

    var reTrim = /^\s+|\s+$/g;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    /** Detect free variable `self`. */

    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString = objectProto.toString;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeMax = Math.max,
        nativeMin = Math.min;
    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */

    var now = function now() {
      return root.Date.now();
    };
    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */


    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      wait = toNumber(wait) || 0;

      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time; // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        } // Restart the timer.


        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */


    function isSymbol(value) {
      return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */


    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    module.exports = debounce;
    /***/
  },

  /***/
  "./node_modules/ngx-mapbox-gl/__ivy_ngcc__/fesm2015/ngx-mapbox-gl.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-mapbox-gl/__ivy_ngcc__/fesm2015/ngx-mapbox-gl.js ***!
    \***************************************************************************/

  /*! exports provided: ControlComponent, CustomControl, GeoJSONSourceComponent, MAPBOX_API_KEY, MAPBOX_GEOCODER_API_KEY, MapComponent, MapService, MglResizeEventEmitter, NgxMapboxGLModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt */

  /***/
  function node_modulesNgxMapboxGl__ivy_ngcc__Fesm2015NgxMapboxGlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlComponent", function () {
      return ControlComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomControl", function () {
      return CustomControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoJSONSourceComponent", function () {
      return GeoJSONSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAPBOX_API_KEY", function () {
      return MAPBOX_API_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAPBOX_GEOCODER_API_KEY", function () {
      return MAPBOX_GEOCODER_API_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MglResizeEventEmitter", function () {
      return MglResizeEventEmitter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMapboxGLModule", function () {
      return NgxMapboxGLModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return GeocoderControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return LayerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return FeatureComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return MarkerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return ImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return VectorSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return RasterSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return ImageSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return VideoSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return CanvasSourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return PopupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return FullscreenControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return NavigationControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return GeolocateControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return AttributionControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return ScaleControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return PointDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return ClusterPointDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return MarkersForClustersComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mapbox-gl */
    "./node_modules/mapbox-gl/dist/mapbox-gl.js");
    /* harmony import */


    var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/ngx-mapbox-gl/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @mapbox/mapbox-gl-geocoder */
    "./node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js");
    /* harmony import */


    var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_6__);

    var _c0 = ["content"];
    var _c1 = ["*"];
    var _c2 = ["container"];

    function MarkersForClustersComponent_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        $implicit: a0
      };
    };

    function MarkersForClustersComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mgl-marker", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarkersForClustersComponent_ng_container_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var feature_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("feature", feature_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clusterPointTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, feature_r1));
      }
    }

    function MarkersForClustersComponent_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function MarkersForClustersComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mgl-marker", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarkersForClustersComponent_ng_container_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var feature_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("feature", feature_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.pointTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, feature_r1));
      }
    }

    function MarkersForClustersComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarkersForClustersComponent_ng_container_1_ng_container_1_Template, 3, 5, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarkersForClustersComponent_ng_container_1_ng_container_2_Template, 3, 5, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var feature_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feature_r1.properties.cluster);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !feature_r1.properties.cluster);
      }
    }

    var _c4 = function _c4() {
      return {
        "circle-radius": 0
      };
    };

    var MAPBOX_API_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MapboxApiKey');

    var MglResizeEventEmitter = function MglResizeEventEmitter() {
      _classCallCheck(this, MglResizeEventEmitter);
    };

    var MapService = /*#__PURE__*/function () {
      function MapService(zone, MAPBOX_API_KEY, MglResizeEventEmitter) {
        _classCallCheck(this, MapService);

        this.zone = zone;
        this.MAPBOX_API_KEY = MAPBOX_API_KEY;
        this.MglResizeEventEmitter = MglResizeEventEmitter;
        this.mapCreated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        this.mapLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        this.markersToRemove = [];
        this.popupsToRemove = [];
        this.imageIdsToRemove = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.mapCreated$ = this.mapCreated.asObservable();
        this.mapLoaded$ = this.mapLoaded.asObservable();
      }

      _createClass(MapService, [{
        key: "setup",
        value: function setup(options) {
          var _this = this;

          // Need onStable to wait for a potential @angular/route transition to end
          this.zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            // Workaround rollup issue
            _this.assign(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, 'accessToken', options.accessToken || _this.MAPBOX_API_KEY);

            if (options.customMapboxApiUrl) {
              _this.assign(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, 'config.API_URL', options.customMapboxApiUrl);
            }

            _this.createMap(options.mapOptions);

            _this.hookEvents(options.mapEvents);

            _this.mapEvents = options.mapEvents;

            _this.mapCreated.next(undefined);

            _this.mapCreated.complete();
          });
        }
      }, {
        key: "destroyMap",
        value: function destroyMap() {
          if (this.mapInstance) {
            this.subscription.unsubscribe();
            this.mapInstance.remove();
          }
        }
      }, {
        key: "updateMinZoom",
        value: function updateMinZoom(minZoom) {
          var _this2 = this;

          return this.zone.runOutsideAngular(function () {
            _this2.mapInstance.setMinZoom(minZoom);
          });
        }
      }, {
        key: "updateMaxZoom",
        value: function updateMaxZoom(maxZoom) {
          var _this3 = this;

          return this.zone.runOutsideAngular(function () {
            _this3.mapInstance.setMaxZoom(maxZoom);
          });
        }
      }, {
        key: "updateScrollZoom",
        value: function updateScrollZoom(status) {
          var _this4 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this4.mapInstance.scrollZoom.enable() : _this4.mapInstance.scrollZoom.disable();
          });
        }
      }, {
        key: "updateDragRotate",
        value: function updateDragRotate(status) {
          var _this5 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this5.mapInstance.dragRotate.enable() : _this5.mapInstance.dragRotate.disable();
          });
        }
      }, {
        key: "updateTouchZoomRotate",
        value: function updateTouchZoomRotate(status) {
          var _this6 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this6.mapInstance.touchZoomRotate.enable() : _this6.mapInstance.touchZoomRotate.disable();
          });
        }
      }, {
        key: "updateDoubleClickZoom",
        value: function updateDoubleClickZoom(status) {
          var _this7 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this7.mapInstance.doubleClickZoom.enable() : _this7.mapInstance.doubleClickZoom.disable();
          });
        }
      }, {
        key: "updateKeyboard",
        value: function updateKeyboard(status) {
          var _this8 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this8.mapInstance.keyboard.enable() : _this8.mapInstance.keyboard.disable();
          });
        }
      }, {
        key: "updateDragPan",
        value: function updateDragPan(status) {
          var _this9 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this9.mapInstance.dragPan.enable() : _this9.mapInstance.dragPan.disable();
          });
        }
      }, {
        key: "updateBoxZoom",
        value: function updateBoxZoom(status) {
          var _this10 = this;

          return this.zone.runOutsideAngular(function () {
            status ? _this10.mapInstance.boxZoom.enable() : _this10.mapInstance.boxZoom.disable();
          });
        }
      }, {
        key: "updateStyle",
        value: function updateStyle(style) {
          var _this11 = this;

          return this.zone.runOutsideAngular(function () {
            _this11.mapInstance.setStyle(style);
          });
        }
      }, {
        key: "updateMaxBounds",
        value: function updateMaxBounds(maxBounds) {
          var _this12 = this;

          return this.zone.runOutsideAngular(function () {
            _this12.mapInstance.setMaxBounds(maxBounds);
          });
        }
      }, {
        key: "changeCanvasCursor",
        value: function changeCanvasCursor(cursor) {
          var canvas = this.mapInstance.getCanvasContainer();
          canvas.style.cursor = cursor;
        }
      }, {
        key: "queryRenderedFeatures",
        value: function queryRenderedFeatures(pointOrBox, parameters) {
          return this.mapInstance.queryRenderedFeatures(pointOrBox, parameters);
        }
      }, {
        key: "panTo",
        value: function panTo(center, options) {
          var _this13 = this;

          return this.zone.runOutsideAngular(function () {
            _this13.mapInstance.panTo(center, options);
          });
        }
      }, {
        key: "move",
        value: function move(movingMethod, movingOptions, zoom, center, bearing, pitch) {
          var _this14 = this;

          return this.zone.runOutsideAngular(function () {
            _this14.mapInstance[movingMethod](Object.assign(Object.assign({}, movingOptions), {
              zoom: zoom ? zoom : _this14.mapInstance.getZoom(),
              center: center ? center : _this14.mapInstance.getCenter(),
              bearing: bearing ? bearing : _this14.mapInstance.getBearing(),
              pitch: pitch ? pitch : _this14.mapInstance.getPitch()
            }));
          });
        }
      }, {
        key: "addLayer",
        value: function addLayer(layer, bindEvents, before) {
          var _this15 = this;

          this.zone.runOutsideAngular(function () {
            Object.keys(layer.layerOptions).forEach(function (key) {
              var tkey = key;

              if (layer.layerOptions[tkey] === undefined) {
                delete layer.layerOptions[tkey];
              }
            });

            _this15.mapInstance.addLayer(layer.layerOptions, before);

            if (bindEvents) {
              if (layer.layerEvents.click.observers.length) {
                _this15.mapInstance.on('click', layer.layerOptions.id, function (evt) {
                  _this15.zone.run(function () {
                    layer.layerEvents.click.emit(evt);
                  });
                });
              }

              if (layer.layerEvents.mouseEnter.observers.length) {
                _this15.mapInstance.on('mouseenter', layer.layerOptions.id, function (evt) {
                  _this15.zone.run(function () {
                    layer.layerEvents.mouseEnter.emit(evt);
                  });
                });
              }

              if (layer.layerEvents.mouseLeave.observers.length) {
                _this15.mapInstance.on('mouseleave', layer.layerOptions.id, function (evt) {
                  _this15.zone.run(function () {
                    layer.layerEvents.mouseLeave.emit(evt);
                  });
                });
              }

              if (layer.layerEvents.mouseMove.observers.length) {
                _this15.mapInstance.on('mousemove', layer.layerOptions.id, function (evt) {
                  _this15.zone.run(function () {
                    layer.layerEvents.mouseMove.emit(evt);
                  });
                });
              }
            }
          });
        }
      }, {
        key: "removeLayer",
        value: function removeLayer(layerId) {
          var _this16 = this;

          this.zone.runOutsideAngular(function () {
            if (_this16.mapInstance.getLayer(layerId) != null) {
              _this16.mapInstance.removeLayer(layerId);
            }
          });
        }
      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          var _this17 = this;

          var options = {
            offset: marker.markersOptions.offset,
            anchor: marker.markersOptions.anchor,
            draggable: !!marker.markersOptions.draggable,
            rotationAlignment: marker.markersOptions.rotationAlignment,
            pitchAlignment: marker.markersOptions.pitchAlignment
          };

          if (marker.markersOptions.element.childNodes.length > 0) {
            options.element = marker.markersOptions.element;
          }

          var markerInstance = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"](options);

          if (marker.markersEvents.dragStart.observers.length) {
            markerInstance.on('dragstart', function (event) {
              return _this17.zone.run(function () {
                return marker.markersEvents.dragStart.emit(event.target);
              });
            });
          }

          if (marker.markersEvents.drag.observers.length) {
            markerInstance.on('drag', function (event) {
              return _this17.zone.run(function () {
                return marker.markersEvents.drag.emit(event.target);
              });
            });
          }

          if (marker.markersEvents.dragEnd.observers.length) {
            markerInstance.on('dragend', function (event) {
              return _this17.zone.run(function () {
                return marker.markersEvents.dragEnd.emit(event.target);
              });
            });
          }

          var lngLat = marker.markersOptions.feature ? marker.markersOptions.feature.geometry.coordinates : marker.markersOptions.lngLat;
          markerInstance.setLngLat(lngLat);
          return this.zone.runOutsideAngular(function () {
            markerInstance.addTo(_this17.mapInstance);
            return markerInstance;
          });
        }
      }, {
        key: "removeMarker",
        value: function removeMarker(marker) {
          this.markersToRemove.push(marker);
        }
      }, {
        key: "createPopup",
        value: function createPopup(popup, element) {
          var _this18 = this;

          return this.zone.runOutsideAngular(function () {
            Object.keys(popup.popupOptions).forEach(function (key) {
              return popup.popupOptions[key] === undefined && delete popup.popupOptions[key];
            });
            var popupInstance = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"](popup.popupOptions);
            popupInstance.setDOMContent(element);

            if (popup.popupEvents.close.observers.length) {
              popupInstance.on('close', function () {
                _this18.zone.run(function () {
                  popup.popupEvents.close.emit();
                });
              });
            }

            if (popup.popupEvents.open.observers.length) {
              popupInstance.on('open', function () {
                _this18.zone.run(function () {
                  popup.popupEvents.open.emit();
                });
              });
            }

            return popupInstance;
          });
        }
      }, {
        key: "addPopupToMap",
        value: function addPopupToMap(popup, lngLat) {
          var _this19 = this;

          var skipOpenEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return this.zone.runOutsideAngular(function () {
            if (skipOpenEvent && popup._listeners) {
              delete popup._listeners['open'];
            }

            popup.setLngLat(lngLat);
            popup.addTo(_this19.mapInstance);
          });
        }
      }, {
        key: "addPopupToMarker",
        value: function addPopupToMarker(marker, popup) {
          return this.zone.runOutsideAngular(function () {
            marker.setPopup(popup);
          });
        }
      }, {
        key: "removePopupFromMap",
        value: function removePopupFromMap(popup) {
          var skipCloseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (skipCloseEvent && popup._listeners) {
            delete popup._listeners['close'];
          }

          this.popupsToRemove.push(popup);
        }
      }, {
        key: "removePopupFromMarker",
        value: function removePopupFromMarker(marker) {
          return this.zone.runOutsideAngular(function () {
            marker.setPopup(undefined);
          });
        }
      }, {
        key: "addControl",
        value: function addControl(control, position) {
          var _this20 = this;

          return this.zone.runOutsideAngular(function () {
            _this20.mapInstance.addControl(control, position);
          });
        }
      }, {
        key: "removeControl",
        value: function removeControl(control) {
          var _this21 = this;

          return this.zone.runOutsideAngular(function () {
            _this21.mapInstance.removeControl(control);
          });
        }
      }, {
        key: "loadAndAddImage",
        value: function loadAndAddImage(imageId, url, options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.zone.runOutsideAngular(function () {
                      return new Promise(function (resolve, reject) {
                        _this22.mapInstance.loadImage(url, function (error, image) {
                          if (error) {
                            reject(error);
                            return;
                          }

                          _this22.addImage(imageId, image, options);

                          resolve();
                        });
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addImage",
        value: function addImage(imageId, data, options) {
          var _this23 = this;

          return this.zone.runOutsideAngular(function () {
            _this23.mapInstance.addImage(imageId, data, options);
          });
        }
      }, {
        key: "removeImage",
        value: function removeImage(imageId) {
          this.imageIdsToRemove.push(imageId);
        }
      }, {
        key: "addSource",
        value: function addSource(sourceId, source) {
          var _this24 = this;

          return this.zone.runOutsideAngular(function () {
            Object.keys(source).forEach(function (key) {
              return source[key] === undefined && delete source[key];
            });

            _this24.mapInstance.addSource(sourceId, source);
          });
        }
      }, {
        key: "getSource",
        value: function getSource(sourceId) {
          return this.mapInstance.getSource(sourceId);
        }
      }, {
        key: "removeSource",
        value: function removeSource(sourceId) {
          var _this25 = this;

          this.zone.runOutsideAngular(function () {
            _this25.findLayersBySourceId(sourceId).forEach(function (layer) {
              return _this25.mapInstance.removeLayer(layer.id);
            });

            _this25.mapInstance.removeSource(sourceId);
          });
        }
      }, {
        key: "setAllLayerPaintProperty",
        value: function setAllLayerPaintProperty(layerId, paint) {
          var _this26 = this;

          return this.zone.runOutsideAngular(function () {
            Object.keys(paint).forEach(function (key) {
              // TODO Check for perf, setPaintProperty only on changed paint props maybe
              _this26.mapInstance.setPaintProperty(layerId, key, paint[key]);
            });
          });
        }
      }, {
        key: "setAllLayerLayoutProperty",
        value: function setAllLayerLayoutProperty(layerId, layout) {
          var _this27 = this;

          return this.zone.runOutsideAngular(function () {
            Object.keys(layout).forEach(function (key) {
              // TODO Check for perf, setPaintProperty only on changed paint props maybe
              _this27.mapInstance.setLayoutProperty(layerId, key, layout[key]);
            });
          });
        }
      }, {
        key: "setLayerFilter",
        value: function setLayerFilter(layerId, filter) {
          var _this28 = this;

          return this.zone.runOutsideAngular(function () {
            _this28.mapInstance.setFilter(layerId, filter);
          });
        }
      }, {
        key: "setLayerBefore",
        value: function setLayerBefore(layerId, beforeId) {
          var _this29 = this;

          return this.zone.runOutsideAngular(function () {
            _this29.mapInstance.moveLayer(layerId, beforeId);
          });
        }
      }, {
        key: "setLayerZoomRange",
        value: function setLayerZoomRange(layerId, minZoom, maxZoom) {
          var _this30 = this;

          return this.zone.runOutsideAngular(function () {
            _this30.mapInstance.setLayerZoomRange(layerId, minZoom ? minZoom : 0, maxZoom ? maxZoom : 20);
          });
        }
      }, {
        key: "fitBounds",
        value: function fitBounds(bounds, options) {
          var _this31 = this;

          return this.zone.runOutsideAngular(function () {
            _this31.mapInstance.fitBounds(bounds, options);
          });
        }
      }, {
        key: "fitScreenCoordinates",
        value: function fitScreenCoordinates(points, bearing, options) {
          var _this32 = this;

          return this.zone.runOutsideAngular(function () {
            _this32.mapInstance.fitScreenCoordinates(points[0], points[1], bearing, options);
          });
        }
      }, {
        key: "applyChanges",
        value: function applyChanges() {
          var _this33 = this;

          this.zone.runOutsideAngular(function () {
            _this33.removeMarkers();

            _this33.removePopups();

            _this33.removeImages();
          });
        }
      }, {
        key: "createMap",
        value: function createMap(options) {
          var _this34 = this;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"].assertNotInAngularZone();

          Object.keys(options).forEach(function (key) {
            var tkey = key;

            if (options[tkey] === undefined) {
              delete options[tkey];
            }
          });
          this.mapInstance = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"](options);
          var isIEorEdge = window && /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);

          if (isIEorEdge) {
            this.mapInstance.setStyle(options.style);
          }

          var subChanges = this.zone.onMicrotaskEmpty.subscribe(function () {
            return _this34.applyChanges();
          });

          if (this.MglResizeEventEmitter) {
            var subResize = this.MglResizeEventEmitter.resizeEvent.subscribe(function () {
              _this34.mapInstance.resize();
            });
            this.subscription.add(subResize);
          }

          this.subscription.add(subChanges);
        }
      }, {
        key: "removeMarkers",
        value: function removeMarkers() {
          var _iterator = _createForOfIteratorHelper(this.markersToRemove),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var marker = _step.value;
              marker.remove();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.markersToRemove = [];
        }
      }, {
        key: "removePopups",
        value: function removePopups() {
          var _iterator2 = _createForOfIteratorHelper(this.popupsToRemove),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var popup = _step2.value;
              popup.remove();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.popupsToRemove = [];
        }
      }, {
        key: "removeImages",
        value: function removeImages() {
          var _iterator3 = _createForOfIteratorHelper(this.imageIdsToRemove),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var imageId = _step3.value;
              this.mapInstance.removeImage(imageId);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.imageIdsToRemove = [];
        }
      }, {
        key: "findLayersBySourceId",
        value: function findLayersBySourceId(sourceId) {
          var layers = this.mapInstance.getStyle().layers;

          if (layers == null) {
            return [];
          }

          return layers.filter(function (l) {
            return l.source === sourceId;
          });
        }
      }, {
        key: "hookEvents",
        value: function hookEvents(events) {
          var _this35 = this;

          this.mapInstance.on('load', function () {
            _this35.mapLoaded.next(undefined);

            _this35.mapLoaded.complete();

            _this35.zone.run(function () {
              return events.load.emit(_this35.mapInstance);
            });
          });

          if (events.resize.observers.length) {
            this.mapInstance.on('resize', function () {
              return _this35.zone.run(function () {
                return events.resize.emit();
              });
            });
          }

          if (events.remove.observers.length) {
            this.mapInstance.on('remove', function () {
              return _this35.zone.run(function () {
                return events.remove.emit();
              });
            });
          }

          if (events.mouseDown.observers.length) {
            this.mapInstance.on('mousedown', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseDown.emit(evt);
              });
            });
          }

          if (events.mouseUp.observers.length) {
            this.mapInstance.on('mouseup', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseUp.emit(evt);
              });
            });
          }

          if (events.mouseMove.observers.length) {
            this.mapInstance.on('mousemove', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseMove.emit(evt);
              });
            });
          }

          if (events.click.observers.length) {
            this.mapInstance.on('click', function (evt) {
              return _this35.zone.run(function () {
                return events.click.emit(evt);
              });
            });
          }

          if (events.dblClick.observers.length) {
            this.mapInstance.on('dblclick', function (evt) {
              return _this35.zone.run(function () {
                return events.dblClick.emit(evt);
              });
            });
          }

          if (events.mouseEnter.observers.length) {
            this.mapInstance.on('mouseenter', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseEnter.emit(evt);
              });
            });
          }

          if (events.mouseLeave.observers.length) {
            this.mapInstance.on('mouseleave', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseLeave.emit(evt);
              });
            });
          }

          if (events.mouseOver.observers.length) {
            this.mapInstance.on('mouseover', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseOver.emit(evt);
              });
            });
          }

          if (events.mouseOut.observers.length) {
            this.mapInstance.on('mouseout', function (evt) {
              return _this35.zone.run(function () {
                return events.mouseOut.emit(evt);
              });
            });
          }

          if (events.contextMenu.observers.length) {
            this.mapInstance.on('contextmenu', function (evt) {
              return _this35.zone.run(function () {
                return events.contextMenu.emit(evt);
              });
            });
          }

          if (events.touchStart.observers.length) {
            this.mapInstance.on('touchstart', function (evt) {
              return _this35.zone.run(function () {
                return events.touchStart.emit(evt);
              });
            });
          }

          if (events.touchEnd.observers.length) {
            this.mapInstance.on('touchend', function (evt) {
              return _this35.zone.run(function () {
                return events.touchEnd.emit(evt);
              });
            });
          }

          if (events.touchMove.observers.length) {
            this.mapInstance.on('touchmove', function (evt) {
              return _this35.zone.run(function () {
                return events.touchMove.emit(evt);
              });
            });
          }

          if (events.touchCancel.observers.length) {
            this.mapInstance.on('touchcancel', function (evt) {
              return _this35.zone.run(function () {
                return events.touchCancel.emit(evt);
              });
            });
          }

          if (events.wheel.observers.length) {
            // MapboxGl.MapWheelEvent
            this.mapInstance.on('wheel', function (evt) {
              return _this35.zone.run(function () {
                return events.wheel.emit(evt);
              });
            });
          }

          if (events.moveStart.observers.length) {
            this.mapInstance.on('movestart', function (evt) {
              return _this35.zone.run(function () {
                return events.moveStart.emit(evt);
              });
            });
          }

          if (events.move.observers.length) {
            this.mapInstance.on('move', function (evt) {
              return _this35.zone.run(function () {
                return events.move.emit(evt);
              });
            });
          }

          if (events.moveEnd.observers.length) {
            this.mapInstance.on('moveend', function (evt) {
              return _this35.zone.run(function () {
                return events.moveEnd.emit(evt);
              });
            });
          }

          if (events.dragStart.observers.length) {
            this.mapInstance.on('dragstart', function (evt) {
              return _this35.zone.run(function () {
                return events.dragStart.emit(evt);
              });
            });
          }

          if (events.drag.observers.length) {
            this.mapInstance.on('drag', function (evt) {
              return _this35.zone.run(function () {
                return events.drag.emit(evt);
              });
            });
          }

          if (events.dragEnd.observers.length) {
            this.mapInstance.on('dragend', function (evt) {
              return _this35.zone.run(function () {
                return events.dragEnd.emit(evt);
              });
            });
          }

          if (events.zoomStart.observers.length) {
            this.mapInstance.on('zoomstart', function (evt) {
              return _this35.zone.run(function () {
                return events.zoomStart.emit(evt);
              });
            });
          }

          if (events.zoomEvt.observers.length) {
            this.mapInstance.on('zoom', function (evt) {
              return _this35.zone.run(function () {
                return events.zoomEvt.emit(evt);
              });
            });
          }

          if (events.zoomEnd.observers.length) {
            this.mapInstance.on('zoomend', function (evt) {
              return _this35.zone.run(function () {
                return events.zoomEnd.emit(evt);
              });
            });
          }

          if (events.rotateStart.observers.length) {
            this.mapInstance.on('rotatestart', function (evt) {
              return _this35.zone.run(function () {
                return events.rotateStart.emit(evt);
              });
            });
          }

          if (events.rotate.observers.length) {
            this.mapInstance.on('rotate', function (evt) {
              return _this35.zone.run(function () {
                return events.rotate.emit(evt);
              });
            });
          }

          if (events.rotateEnd.observers.length) {
            this.mapInstance.on('rotateend', function (evt) {
              return _this35.zone.run(function () {
                return events.rotateEnd.emit(evt);
              });
            });
          }

          if (events.pitchStart.observers.length) {
            this.mapInstance.on('pitchstart', function (evt) {
              return _this35.zone.run(function () {
                return events.pitchStart.emit(evt);
              });
            });
          }

          if (events.pitchEvt.observers.length) {
            this.mapInstance.on('pitch', function (evt) {
              return _this35.zone.run(function () {
                return events.pitchEvt.emit(evt);
              });
            });
          }

          if (events.pitchEnd.observers.length) {
            this.mapInstance.on('pitchend', function (evt) {
              return _this35.zone.run(function () {
                return events.pitchEnd.emit(evt);
              });
            });
          }

          if (events.boxZoomStart.observers.length) {
            this.mapInstance.on('boxzoomstart', function (evt) {
              return _this35.zone.run(function () {
                return events.boxZoomStart.emit(evt);
              });
            });
          }

          if (events.boxZoomEnd.observers.length) {
            this.mapInstance.on('boxzoomend', function (evt) {
              return _this35.zone.run(function () {
                return events.boxZoomEnd.emit(evt);
              });
            });
          }

          if (events.boxZoomCancel.observers.length) {
            this.mapInstance.on('boxzoomcancel', function (evt) {
              return _this35.zone.run(function () {
                return events.boxZoomCancel.emit(evt);
              });
            });
          }

          if (events.webGlContextLost.observers.length) {
            this.mapInstance.on('webglcontextlost', function () {
              return _this35.zone.run(function () {
                return events.webGlContextLost.emit();
              });
            });
          }

          if (events.webGlContextRestored.observers.length) {
            this.mapInstance.on('webglcontextrestored', function () {
              return _this35.zone.run(function () {
                return events.webGlContextRestored.emit();
              });
            });
          }

          if (events.render.observers.length) {
            this.mapInstance.on('render', function () {
              return _this35.zone.run(function () {
                return events.render.emit();
              });
            });
          }

          if (events.error.observers.length) {
            this.mapInstance.on('error', function (evt) {
              return _this35.zone.run(function () {
                return events.error.emit(evt);
              });
            });
          }

          if (events.data.observers.length) {
            this.mapInstance.on('data', function (evt) {
              return _this35.zone.run(function () {
                return events.data.emit(evt);
              });
            });
          }

          if (events.styleData.observers.length) {
            this.mapInstance.on('styledata', function (evt) {
              return _this35.zone.run(function () {
                return events.styleData.emit(evt);
              });
            });
          }

          if (events.sourceData.observers.length) {
            this.mapInstance.on('sourcedata', function (evt) {
              return _this35.zone.run(function () {
                return events.sourceData.emit(evt);
              });
            });
          }

          if (events.dataLoading.observers.length) {
            this.mapInstance.on('dataloading', function (evt) {
              return _this35.zone.run(function () {
                return events.dataLoading.emit(evt);
              });
            });
          }

          if (events.styleDataLoading.observers.length) {
            this.mapInstance.on('styledataloading', function (evt) {
              return _this35.zone.run(function () {
                return events.styleDataLoading.emit(evt);
              });
            });
          }

          if (events.sourceDataLoading.observers.length) {
            this.mapInstance.on('sourcedataloading', function (evt) {
              return _this35.zone.run(function () {
                return events.sourceDataLoading.emit(evt);
              });
            });
          }

          if (events.styleImageMissing.observers.length) {
            this.mapInstance.on('styleimagemissing', function (evt) {
              return _this35.zone.run(function () {
                return events.styleImageMissing.emit(evt);
              });
            });
          }

          if (events.idle.observers.length) {
            this.mapInstance.on('idle', function () {
              return _this35.zone.run(function () {
                return events.idle.emit();
              });
            });
          }
        } // TODO move this elsewhere

      }, {
        key: "assign",
        value: function assign(obj, prop, value) {
          if (typeof prop === 'string') {
            // tslint:disable-next-line:no-parameter-reassignment
            prop = prop.split('.');
          }

          if (prop.length > 1) {
            var e = prop.shift();
            this.assign(obj[e] = Object.prototype.toString.call(obj[e]) === '[object Object]' ? obj[e] : {}, prop, value);
          } else {
            obj[prop[0]] = value;
          }
        }
      }]);

      return MapService;
    }();

    MapService.ɵfac = function MapService_Factory(t) {
      return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAPBOX_API_KEY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MglResizeEventEmitter, 8));
    };

    MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapService,
      factory: MapService.ɵfac
    });

    MapService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAPBOX_API_KEY]
        }]
      }, {
        type: MglResizeEventEmitter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAPBOX_API_KEY]
          }]
        }, {
          type: MglResizeEventEmitter,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    var CustomControl = /*#__PURE__*/function () {
      function CustomControl(container) {
        _classCallCheck(this, CustomControl);

        this.container = container;
      }

      _createClass(CustomControl, [{
        key: "onAdd",
        value: function onAdd() {
          return this.container;
        }
      }, {
        key: "onRemove",
        value: function onRemove() {
          return this.container.parentNode.removeChild(this.container);
        }
      }, {
        key: "getDefaultPosition",
        value: function getDefaultPosition() {
          return 'top-right';
        }
      }]);

      return CustomControl;
    }();

    var ControlComponent = /*#__PURE__*/function () {
      function ControlComponent(MapService) {
        _classCallCheck(this, ControlComponent);

        this.MapService = MapService;
        this.controlAdded = false;
      }

      _createClass(ControlComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this36 = this;

          if (this.content.nativeElement.childNodes.length) {
            this.control = new CustomControl(this.content.nativeElement);
            this.MapService.mapCreated$.subscribe(function () {
              _this36.MapService.addControl(_this36.control, _this36.position);

              _this36.controlAdded = true;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.controlAdded) {
            this.MapService.removeControl(this.control);
          }
        }
      }]);

      return ControlComponent;
    }();

    ControlComponent.ɵfac = function ControlComponent_Factory(t) {
      return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    ControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlComponent,
      selectors: [["mgl-control"]],
      viewQuery: function ControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        position: "position"
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [[1, "mapboxgl-ctrl"], ["content", ""]],
      template: function ControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    ControlComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    ControlComponent.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['content', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-control',
          template: '<div class="mapboxgl-ctrl" #content><ng-content></ng-content></div>',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": true
          }]
        }]
      });
    })();

    var AttributionControlDirective = /*#__PURE__*/function () {
      function AttributionControlDirective(MapService, ControlComponent) {
        _classCallCheck(this, AttributionControlDirective);

        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
      }

      _createClass(AttributionControlDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this37 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this37.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            var options = {};

            if (_this37.compact !== undefined) {
              options.compact = _this37.compact;
            }

            if (_this37.customAttribution !== undefined) {
              options.customAttribution = _this37.customAttribution;
            }

            _this37.ControlComponent.control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["AttributionControl"](options);

            _this37.MapService.addControl(_this37.ControlComponent.control, _this37.ControlComponent.position);
          });
        }
      }]);

      return AttributionControlDirective;
    }();

    AttributionControlDirective.ɵfac = function AttributionControlDirective_Factory(t) {
      return new (t || AttributionControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1));
    };

    AttributionControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AttributionControlDirective,
      selectors: [["", "mglAttribution", ""]],
      inputs: {
        compact: "compact",
        customAttribution: "customAttribution"
      }
    });

    AttributionControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    AttributionControlDirective.propDecorators = {
      compact: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customAttribution: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributionControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglAttribution]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        compact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customAttribution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var FullscreenControlDirective = /*#__PURE__*/function () {
      function FullscreenControlDirective(MapService, ControlComponent) {
        _classCallCheck(this, FullscreenControlDirective);

        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
      }

      _createClass(FullscreenControlDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this38 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this38.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            _this38.ControlComponent.control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["FullscreenControl"]({
              container: _this38.container
            });

            _this38.MapService.addControl(_this38.ControlComponent.control, _this38.ControlComponent.position);
          });
        }
      }]);

      return FullscreenControlDirective;
    }();

    FullscreenControlDirective.ɵfac = function FullscreenControlDirective_Factory(t) {
      return new (t || FullscreenControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1));
    };

    FullscreenControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: FullscreenControlDirective,
      selectors: [["", "mglFullscreen", ""]],
      inputs: {
        container: "container"
      }
    });

    FullscreenControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    FullscreenControlDirective.propDecorators = {
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglFullscreen]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var MAPBOX_GEOCODER_API_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MapboxApiKey');

    var GeocoderControlDirective = /*#__PURE__*/function () {
      function GeocoderControlDirective(MapService, zone, ControlComponent, MAPBOX_GEOCODER_API_KEY) {
        _classCallCheck(this, GeocoderControlDirective);

        this.MapService = MapService;
        this.zone = zone;
        this.ControlComponent = ControlComponent;
        this.MAPBOX_GEOCODER_API_KEY = MAPBOX_GEOCODER_API_KEY;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.results = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GeocoderControlDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this39 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this39.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            var options = {
              proximity: _this39.proximity,
              countries: _this39.countries,
              placeholder: _this39.placeholder,
              zoom: _this39.zoom,
              bbox: _this39.bbox,
              types: _this39.types,
              flyTo: _this39.flyTo,
              minLength: _this39.minLength,
              limit: _this39.limit,
              language: _this39.language,
              filter: _this39.filter,
              localGeocoder: _this39.localGeocoder,
              accessToken: _this39.accessToken || _this39.MAPBOX_GEOCODER_API_KEY
            };
            Object.keys(options).forEach(function (key) {
              var tkey = key;

              if (options[tkey] === undefined) {
                delete options[tkey];
              }
            });
            _this39.geocoder = new _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_6__(options);

            _this39.hookEvents(_this39);

            _this39.addControl();
          });

          if (this.searchInput) {
            this.MapService.mapLoaded$.subscribe(function () {
              _this39.geocoder.query(_this39.searchInput);
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.geocoder) {
            return;
          }

          if (changes.proximity && !changes.proximity.isFirstChange()) {
            this.geocoder.setProximity(changes.proximity.currentValue);
          }

          if (changes.searchInput) {
            this.geocoder.query(this.searchInput);
          }
        }
      }, {
        key: "addControl",
        value: function addControl() {
          this.ControlComponent.control = this.geocoder;
          this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }
      }, {
        key: "hookEvents",
        value: function hookEvents(events) {
          var _this40 = this;

          if (events.results.observers.length) {
            this.geocoder.on('results', function (evt) {
              return _this40.zone.run(function () {
                return events.results.emit(evt);
              });
            });
          }

          if (events.result.observers.length) {
            this.geocoder.on('result', function (evt) {
              // Workaroud issue https://github.com/mapbox/mapbox-gl-geocoder/issues/99
              if (_this40.lastResultId !== evt.result.id) {
                _this40.lastResultId = evt.result.id;

                _this40.zone.run(function () {
                  return events.result.emit(evt);
                });
              }
            });
          }

          if (events.error.observers.length) {
            this.geocoder.on('error', function (evt) {
              return _this40.zone.run(function () {
                return events.error.emit(evt);
              });
            });
          }

          if (events.loading.observers.length) {
            this.geocoder.on('loading', function (evt) {
              return _this40.zone.run(function () {
                return events.loading.emit(evt);
              });
            });
          }

          if (events.clear.observers.length) {
            this.geocoder.on('clear', function () {
              return _this40.zone.run(function () {
                return events.clear.emit();
              });
            });
          }
        }
      }]);

      return GeocoderControlDirective;
    }();

    GeocoderControlDirective.ɵfac = function GeocoderControlDirective_Factory(t) {
      return new (t || GeocoderControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAPBOX_GEOCODER_API_KEY, 8));
    };

    GeocoderControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: GeocoderControlDirective,
      selectors: [["", "mglGeocoder", ""]],
      inputs: {
        countries: "countries",
        placeholder: "placeholder",
        zoom: "zoom",
        bbox: "bbox",
        types: "types",
        flyTo: "flyTo",
        minLength: "minLength",
        limit: "limit",
        language: "language",
        accessToken: "accessToken",
        filter: "filter",
        localGeocoder: "localGeocoder",
        proximity: "proximity",
        searchInput: "searchInput"
      },
      outputs: {
        clear: "clear",
        loading: "loading",
        results: "results",
        result: "result",
        error: "error"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    GeocoderControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAPBOX_GEOCODER_API_KEY]
        }]
      }];
    };

    GeocoderControlDirective.propDecorators = {
      countries: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      types: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      flyTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      limit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      accessToken: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      filter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      localGeocoder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      proximity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      results: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      result: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      error: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeocoderControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglGeocoder]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAPBOX_GEOCODER_API_KEY]
          }]
        }];
      }, {
        clear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        results: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        result: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        countries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        types: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        flyTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        limit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        accessToken: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        localGeocoder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        proximity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var GeolocateControlDirective = /*#__PURE__*/function () {
      function GeolocateControlDirective(MapService, ControlComponent) {
        _classCallCheck(this, GeolocateControlDirective);

        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
        this.geolocate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GeolocateControlDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this41 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this41.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            var options = {
              positionOptions: _this41.positionOptions,
              fitBoundsOptions: _this41.fitBoundsOptions,
              trackUserLocation: _this41.trackUserLocation,
              showUserLocation: _this41.showUserLocation
            };
            Object.keys(options).forEach(function (key) {
              var tkey = key;

              if (options[tkey] === undefined) {
                delete options[tkey];
              }
            });
            _this41.ControlComponent.control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["GeolocateControl"](options);

            _this41.ControlComponent.control.on('geolocate', function (data) {
              return _this41.geolocate.emit(data);
            });

            _this41.MapService.addControl(_this41.ControlComponent.control, _this41.ControlComponent.position);
          });
        }
      }]);

      return GeolocateControlDirective;
    }();

    GeolocateControlDirective.ɵfac = function GeolocateControlDirective_Factory(t) {
      return new (t || GeolocateControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1));
    };

    GeolocateControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: GeolocateControlDirective,
      selectors: [["", "mglGeolocate", ""]],
      inputs: {
        positionOptions: "positionOptions",
        fitBoundsOptions: "fitBoundsOptions",
        trackUserLocation: "trackUserLocation",
        showUserLocation: "showUserLocation"
      },
      outputs: {
        geolocate: "geolocate"
      }
    });

    GeolocateControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    GeolocateControlDirective.propDecorators = {
      positionOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitBoundsOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      trackUserLocation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showUserLocation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      geolocate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeolocateControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglGeolocate]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        geolocate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackUserLocation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showUserLocation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var NavigationControlDirective = /*#__PURE__*/function () {
      function NavigationControlDirective(MapService, ControlComponent) {
        _classCallCheck(this, NavigationControlDirective);

        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
      }

      _createClass(NavigationControlDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this42 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this42.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            var options = {};

            if (_this42.showCompass !== undefined) {
              options.showCompass = _this42.showCompass;
            }

            if (_this42.showZoom !== undefined) {
              options.showZoom = _this42.showZoom;
            }

            _this42.ControlComponent.control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"](options);

            _this42.MapService.addControl(_this42.ControlComponent.control, _this42.ControlComponent.position);
          });
        }
      }]);

      return NavigationControlDirective;
    }();

    NavigationControlDirective.ɵfac = function NavigationControlDirective_Factory(t) {
      return new (t || NavigationControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1));
    };

    NavigationControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NavigationControlDirective,
      selectors: [["", "mglNavigation", ""]],
      inputs: {
        showCompass: "showCompass",
        showZoom: "showZoom"
      }
    });

    NavigationControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    NavigationControlDirective.propDecorators = {
      showCompass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglNavigation]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        showCompass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var ScaleControlDirective = /*#__PURE__*/function () {
      function ScaleControlDirective(MapService, ControlComponent) {
        _classCallCheck(this, ScaleControlDirective);

        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
      }

      _createClass(ScaleControlDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.unit && !changes.unit.isFirstChange()) {
            this.ControlComponent.control.setUnit(changes.unit.currentValue);
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this43 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this43.ControlComponent.control) {
              throw new Error('Another control is already set for this control');
            }

            var options = {};

            if (_this43.maxWidth !== undefined) {
              options.maxWidth = _this43.maxWidth;
            }

            if (_this43.unit !== undefined) {
              options.unit = _this43.unit;
            }

            _this43.ControlComponent.control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["ScaleControl"](options);

            _this43.MapService.addControl(_this43.ControlComponent.control, _this43.ControlComponent.position);
          });
        }
      }]);

      return ScaleControlDirective;
    }();

    ScaleControlDirective.ɵfac = function ScaleControlDirective_Factory(t) {
      return new (t || ScaleControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ControlComponent, 1));
    };

    ScaleControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ScaleControlDirective,
      selectors: [["", "mglScale", ""]],
      inputs: {
        maxWidth: "maxWidth",
        unit: "unit"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    ScaleControlDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: ControlComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    ScaleControlDirective.propDecorators = {
      maxWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      unit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScaleControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglScale]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: ControlComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var LayerComponent = /*#__PURE__*/function () {
      function LayerComponent(MapService) {
        _classCallCheck(this, LayerComponent);

        this.MapService = MapService;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layerAdded = false;
      }

      _createClass(LayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.sub = this.MapService.mapLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this44.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this44.MapService.mapInstance.getLayer(_this44.id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true));
          })).subscribe(function (bindEvents) {
            return _this44.init(bindEvents);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.layerAdded) {
            return;
          }

          if (changes.paint && !changes.paint.isFirstChange()) {
            this.MapService.setAllLayerPaintProperty(this.id, changes.paint.currentValue);
          }

          if (changes.layout && !changes.layout.isFirstChange()) {
            this.MapService.setAllLayerLayoutProperty(this.id, changes.layout.currentValue);
          }

          if (changes.filter && !changes.filter.isFirstChange()) {
            this.MapService.setLayerFilter(this.id, changes.filter.currentValue);
          }

          if (changes.before && !changes.before.isFirstChange()) {
            this.MapService.setLayerBefore(this.id, changes.before.currentValue);
          }

          if (changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange()) {
            this.MapService.setLayerZoomRange(this.id, this.minzoom, this.maxzoom);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.layerAdded) {
            this.MapService.removeLayer(this.id);
          }

          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "init",
        value: function init(bindEvents) {
          var layer = {
            layerOptions: {
              id: this.id,
              type: this.type,
              source: this.source,
              metadata: this.metadata,
              'source-layer': this.sourceLayer,
              minzoom: this.minzoom,
              maxzoom: this.maxzoom,
              filter: this.filter,
              layout: this.layout,
              paint: this.paint
            },
            layerEvents: {
              click: this.click,
              mouseEnter: this.mouseEnter,
              mouseLeave: this.mouseLeave,
              mouseMove: this.mouseMove
            }
          };
          this.MapService.addLayer(layer, bindEvents, this.before);
          this.layerAdded = true;
        }
      }]);

      return LayerComponent;
    }();

    LayerComponent.ɵfac = function LayerComponent_Factory(t) {
      return new (t || LayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    LayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerComponent,
      selectors: [["mgl-layer"]],
      inputs: {
        id: "id",
        source: "source",
        type: "type",
        metadata: "metadata",
        sourceLayer: "sourceLayer",
        filter: "filter",
        layout: "layout",
        paint: "paint",
        before: "before",
        minzoom: "minzoom",
        maxzoom: "maxzoom"
      },
      outputs: {
        click: "click",
        mouseEnter: "mouseEnter",
        mouseLeave: "mouseLeave",
        mouseMove: "mouseMove"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function LayerComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    LayerComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    LayerComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      source: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      metadata: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      sourceLayer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      filter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      layout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      paint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      before: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-layer',
          template: ''
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        metadata: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sourceLayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        before: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var MarkerComponent = /*#__PURE__*/function () {
      function MarkerComponent(MapService) {
        _classCallCheck(this, MarkerComponent);

        this.MapService = MapService;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MarkerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.feature && this.lngLat) {
            throw new Error('feature and lngLat input are mutually exclusive');
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.lngLat && !changes.lngLat.isFirstChange()) {
            this.markerInstance.setLngLat(this.lngLat);
          }

          if (changes.feature && !changes.feature.isFirstChange()) {
            this.markerInstance.setLngLat(this.feature.geometry.coordinates);
          }

          if (changes.draggable && !changes.draggable.isFirstChange()) {
            this.markerInstance.setDraggable(!!this.draggable);
          }

          if (changes.popupShown && !changes.popupShown.isFirstChange()) {
            changes.popupShown.currentValue ? this.markerInstance.getPopup().addTo(this.MapService.mapInstance) : this.markerInstance.getPopup().remove();
          }

          if (changes.pitchAlignment && !changes.pitchAlignment.isFirstChange()) {
            this.markerInstance.setPitchAlignment(changes.pitchAlignment.currentValue);
          }

          if (changes.rotationAlignment && !changes.rotationAlignment.isFirstChange()) {
            this.markerInstance.setRotationAlignment(changes.rotationAlignment.currentValue);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this45 = this;

          this.MapService.mapCreated$.subscribe(function () {
            _this45.markerInstance = _this45.MapService.addMarker({
              markersOptions: {
                offset: _this45.offset,
                anchor: _this45.anchor,
                pitchAlignment: _this45.pitchAlignment,
                rotationAlignment: _this45.rotationAlignment,
                draggable: !!_this45.draggable,
                element: _this45.content.nativeElement,
                feature: _this45.feature,
                lngLat: _this45.lngLat
              },
              markersEvents: {
                dragStart: _this45.dragStart,
                drag: _this45.drag,
                dragEnd: _this45.dragEnd
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.MapService.removeMarker(this.markerInstance);
          this.markerInstance = undefined;
        }
      }, {
        key: "togglePopup",
        value: function togglePopup() {
          this.markerInstance.togglePopup();
        }
      }, {
        key: "updateCoordinates",
        value: function updateCoordinates(coordinates) {
          this.markerInstance.setLngLat(coordinates);
        }
      }]);

      return MarkerComponent;
    }();

    MarkerComponent.ɵfac = function MarkerComponent_Factory(t) {
      return new (t || MarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    MarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MarkerComponent,
      selectors: [["mgl-marker"]],
      viewQuery: function MarkerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        offset: "offset",
        anchor: "anchor",
        feature: "feature",
        lngLat: "lngLat",
        draggable: "draggable",
        popupShown: "popupShown",
        className: "className",
        pitchAlignment: "pitchAlignment",
        rotationAlignment: "rotationAlignment"
      },
      outputs: {
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 2,
      consts: [["content", ""]],
      template: function MarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    MarkerComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    MarkerComponent.propDecorators = {
      offset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      anchor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      feature: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      lngLat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      popupShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      className: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pitchAlignment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      rotationAlignment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['content', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-marker',
          template: '<div [class]="className" #content><ng-content></ng-content></div>',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        feature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lngLat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        popupShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pitchAlignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotationAlignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": true
          }]
        }]
      });
    })();

    var GeoJSONSourceComponent = /*#__PURE__*/function () {
      function GeoJSONSourceComponent(MapService, zone) {
        _classCallCheck(this, GeoJSONSourceComponent);

        this.MapService = MapService;
        this.zone = zone;
        this.updateFeatureData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.sourceAdded = false;
        this.featureIdCounter = 0;
      }

      _createClass(GeoJSONSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          if (!this.data) {
            this.data = {
              type: 'FeatureCollection',
              features: []
            };
          }

          var sub1 = this.MapService.mapLoaded$.subscribe(function () {
            _this46.init();

            var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this46.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this46.MapService.mapInstance.getSource(_this46.id);
            })).subscribe(function () {
              _this46.init();
            });

            _this46.sub.add(sub);
          });
          this.sub.add(sub1);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.sourceAdded) {
            return;
          }

          if (changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.buffer && !changes.buffer.isFirstChange() || changes.tolerance && !changes.tolerance.isFirstChange() || changes.generateId && !changes.generateId.isFirstChange() || changes.cluster && !changes.cluster.isFirstChange() || changes.clusterRadius && !changes.clusterRadius.isFirstChange() || changes.clusterMaxZoom && !changes.clusterMaxZoom.isFirstChange() || changes.clusterProperties && !changes.clusterProperties.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }

          if (changes.data && !changes.data.isFirstChange()) {
            var source = this.MapService.getSource(this.id);
            source.setData(this.data);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();

          if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
          }
        }
        /**
         * For clustered sources, fetches the zoom at which the given cluster expands.
         * @param clusterId The value of the cluster's cluster_id property.
         */

      }, {
        key: "getClusterExpansionZoom",
        value: function getClusterExpansionZoom(clusterId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this47 = this;

            var source;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    source = this.MapService.getSource(this.id);
                    return _context3.abrupt("return", this.zone.run(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this47, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                                  source.getClusterExpansionZoom(clusterId, function (error, zoom) {
                                    if (error) {
                                      reject(error);
                                    } else {
                                      resolve(zoom);
                                    }
                                  });
                                }));

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /**
         * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
         * @param clusterId The value of the cluster's cluster_id property.
         */

      }, {
        key: "getClusterChildren",
        value: function getClusterChildren(clusterId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this48 = this;

            var source;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    source = this.MapService.getSource(this.id);
                    return _context5.abrupt("return", this.zone.run(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this48, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                                  source.getClusterChildren(clusterId, function (error, features) {
                                    if (error) {
                                      reject(error);
                                    } else {
                                      resolve(features);
                                    }
                                  });
                                }));

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /**
         * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
         * @param clusterId The value of the cluster's cluster_id property.
         * @param limit The maximum number of features to return.
         * @param offset The number of features to skip (e.g. for pagination).
         */

      }, {
        key: "getClusterLeaves",
        value: function getClusterLeaves(clusterId, limit, offset) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this49 = this;

            var source;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    source = this.MapService.getSource(this.id);
                    return _context7.abrupt("return", this.zone.run(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this49, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                                  source.getClusterLeaves(clusterId, limit, offset, function (error, features) {
                                    if (error) {
                                      reject(error);
                                    } else {
                                      resolve(features);
                                    }
                                  });
                                }));

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "_addFeature",
        value: function _addFeature(feature) {
          var collection = this.data;
          collection.features.push(feature);
          this.updateFeatureData.next();
        }
      }, {
        key: "_removeFeature",
        value: function _removeFeature(feature) {
          var collection = this.data;
          var index = collection.features.indexOf(feature);

          if (index > -1) {
            collection.features.splice(index, 1);
          }

          this.updateFeatureData.next();
        }
      }, {
        key: "_getNewFeatureId",
        value: function _getNewFeatureId() {
          return ++this.featureIdCounter;
        }
      }, {
        key: "init",
        value: function init() {
          var _this50 = this;

          this.MapService.addSource(this.id, {
            // clusterProperties missing in typings
            type: 'geojson',
            data: this.data,
            maxzoom: this.maxzoom,
            minzoom: this.minzoom,
            buffer: this.buffer,
            tolerance: this.tolerance,
            generateId: this.generateId,
            cluster: this.cluster,
            clusterRadius: this.clusterRadius,
            clusterMaxZoom: this.clusterMaxZoom,
            clusterProperties: this.clusterProperties
          });
          var sub = this.updateFeatureData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(0)).subscribe(function () {
            var source = _this50.MapService.getSource(_this50.id);

            source.setData(_this50.data);
          });
          this.sub.add(sub);
          this.sourceAdded = true;
        }
      }]);

      return GeoJSONSourceComponent;
    }();

    GeoJSONSourceComponent.ɵfac = function GeoJSONSourceComponent_Factory(t) {
      return new (t || GeoJSONSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GeoJSONSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeoJSONSourceComponent,
      selectors: [["mgl-geojson-source"]],
      inputs: {
        data: "data",
        id: "id",
        minzoom: "minzoom",
        maxzoom: "maxzoom",
        buffer: "buffer",
        tolerance: "tolerance",
        generateId: "generateId",
        cluster: "cluster",
        clusterRadius: "clusterRadius",
        clusterMaxZoom: "clusterMaxZoom",
        clusterProperties: "clusterProperties"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function GeoJSONSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    GeoJSONSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    GeoJSONSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      buffer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tolerance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      generateId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cluster: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clusterRadius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clusterMaxZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clusterProperties: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeoJSONSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-geojson-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        buffer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        generateId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cluster: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clusterRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clusterMaxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clusterProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent(GeoJSONSourceComponent) {
        _classCallCheck(this, FeatureComponent);

        this.GeoJSONSourceComponent = GeoJSONSourceComponent;
        this.type = 'Feature';
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.id) {
            this.id = this.GeoJSONSourceComponent._getNewFeatureId();
          }

          this.feature = {
            type: this.type,
            geometry: this.geometry,
            properties: this.properties ? this.properties : {}
          };
          this.feature.id = this.id;

          this.GeoJSONSourceComponent._addFeature(this.feature);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.GeoJSONSourceComponent._removeFeature(this.feature);
        }
      }, {
        key: "updateCoordinates",
        value: function updateCoordinates(coordinates) {
          this.feature.geometry.coordinates = coordinates;
          this.GeoJSONSourceComponent.updateFeatureData.next();
        }
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return GeoJSONSourceComponent;
      })));
    };

    FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FeatureComponent,
      selectors: [["mgl-feature"]],
      inputs: {
        id: "id",
        geometry: "geometry",
        properties: "properties"
      },
      decls: 0,
      vars: 0,
      template: function FeatureComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    FeatureComponent.ctorParameters = function () {
      return [{
        type: GeoJSONSourceComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return GeoJSONSourceComponent;
          })]
        }]
      }];
    };

    FeatureComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      geometry: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      properties: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-feature',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: GeoJSONSourceComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return GeoJSONSourceComponent;
            })]
          }]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        properties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var DraggableDirective = /*#__PURE__*/function () {
      function DraggableDirective(MapService, NgZone, FeatureComponent, MarkerComponent) {
        _classCallCheck(this, DraggableDirective);

        this.MapService = MapService;
        this.NgZone = NgZone;
        this.FeatureComponent = FeatureComponent;
        this.MarkerComponent = MarkerComponent;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
      }

      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var enter$;
          var leave$;
          var updateCoords;

          if (this.MarkerComponent) {
            console.warn('[ngx-mapbox-gl] mglDraggable on Marker is deprecated, use draggable input instead');
            var markerElement = this.MarkerComponent.content.nativeElement;

            if (markerElement.children.length === 1) {
              markerElement = markerElement.children[0];
            }

            enter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(markerElement, 'mouseenter');
            leave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(markerElement, 'mouseleave');
            updateCoords = this.MarkerComponent.updateCoordinates.bind(this.MarkerComponent);
          } else if (this.FeatureComponent && this.layer) {
            enter$ = this.layer.mouseEnter;
            leave$ = this.layer.mouseLeave;
            updateCoords = this.FeatureComponent.updateCoordinates.bind(this.FeatureComponent);

            if (this.FeatureComponent.geometry.type !== 'Point') {
              throw new Error('mglDraggable only support point feature');
            }
          } else {
            throw new Error('mglDraggable can only be used on Feature (with a layer as input) or Marker');
          }

          this.handleDraggable(enter$, leave$, updateCoords);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(undefined);
          this.destroyed$.complete();
        }
      }, {
        key: "handleDraggable",
        value: function handleDraggable(enter$, leave$, updateCoords) {
          var _this51 = this;

          var moving = false;
          var inside = false;
          this.MapService.mapCreated$.subscribe(function () {
            var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this51.MapService.mapInstance, 'mouseup');
            var dragStart$ = enter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this51.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !moving;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (evt) {
              return _this51.filterFeature(evt);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              inside = true;

              _this51.MapService.changeCanvasCursor('move');

              _this51.MapService.updateDragPan(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this51.MapService.mapInstance, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(leave$));
            }));
            var dragging$ = dragStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this51.MapService.mapInstance, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(mouseUp$));
            }));
            var dragEnd$ = dragStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return mouseUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
            }));
            dragStart$.subscribe(function (evt) {
              moving = true;

              if (_this51.dragStart.observers.length) {
                _this51.NgZone.run(function () {
                  return _this51.dragStart.emit(evt);
                });
              }
            });
            dragging$.subscribe(function (evt) {
              updateCoords([evt.lngLat.lng, evt.lngLat.lat]);

              if (_this51.drag.observers.length) {
                _this51.NgZone.run(function () {
                  return _this51.drag.emit(evt);
                });
              }
            });
            dragEnd$.subscribe(function (evt) {
              moving = false;

              if (_this51.dragEnd.observers.length) {
                _this51.NgZone.run(function () {
                  return _this51.dragEnd.emit(evt);
                });
              }

              if (!inside) {
                // It's possible to dragEnd outside the target (small input lag)
                _this51.MapService.changeCanvasCursor('');

                _this51.MapService.updateDragPan(true);
              }
            });
            leave$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this51.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              return inside = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !moving;
            })).subscribe(function () {
              _this51.MapService.changeCanvasCursor('');

              _this51.MapService.updateDragPan(true);
            });
          });
        }
      }, {
        key: "filterFeature",
        value: function filterFeature(evt) {
          if (this.FeatureComponent && this.layer) {
            var feature = this.MapService.queryRenderedFeatures(evt.point, {
              layers: [this.layer.id],
              filter: ['all', ['==', '$type', 'Point'], ['==', '$id', this.FeatureComponent.id]]
            })[0];

            if (!feature) {
              return false;
            }
          }

          return true;
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
      return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent, 9), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerComponent, 9));
    };

    DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DraggableDirective,
      selectors: [["", "mglDraggable", ""]],
      inputs: {
        layer: ["mglDraggable", "layer"]
      },
      outputs: {
        dragStart: "dragStart",
        dragEnd: "dragEnd",
        drag: "drag"
      }
    });

    DraggableDirective.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: FeatureComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }, {
        type: MarkerComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    DraggableDirective.propDecorators = {
      layer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mglDraggable']
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mglDraggable]'
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FeatureComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }, {
          type: MarkerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        layer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mglDraggable']
        }]
      });
    })();

    var ImageComponent = /*#__PURE__*/function () {
      function ImageComponent(MapService, zone) {
        _classCallCheck(this, ImageComponent);

        this.MapService = MapService;
        this.zone = zone;
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAdded = false;
        this.isAdding = false;
      }

      _createClass(ImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this52 = this;

          this.sub = this.MapService.mapLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this52.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this52.isAdding && !_this52.MapService.mapInstance.hasImage(_this52.id);
            }));
          })).subscribe(function () {
            return _this52.init();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.data && !changes.data.isFirstChange() || changes.options && !changes.options.isFirstChange() || changes.url && !changes.url.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.isAdded) {
            this.MapService.removeImage(this.id);
          }

          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this53 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.isAdding = true;

                    if (!this.data) {
                      _context8.next = 7;
                      break;
                    }

                    this.MapService.addImage(this.id, this.data, this.options);
                    this.isAdded = true;
                    this.isAdding = false;
                    _context8.next = 19;
                    break;

                  case 7:
                    if (!this.url) {
                      _context8.next = 19;
                      break;
                    }

                    _context8.prev = 8;
                    _context8.next = 11;
                    return this.MapService.loadAndAddImage(this.id, this.url, this.options);

                  case 11:
                    this.isAdded = true;
                    this.isAdding = false;
                    this.zone.run(function () {
                      _this53.loaded.emit();
                    });
                    _context8.next = 19;
                    break;

                  case 16:
                    _context8.prev = 16;
                    _context8.t0 = _context8["catch"](8);
                    this.zone.run(function () {
                      _this53.error.emit(_context8.t0);
                    });

                  case 19:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[8, 16]]);
          }));
        }
      }]);

      return ImageComponent;
    }();

    ImageComponent.ɵfac = function ImageComponent_Factory(t) {
      return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageComponent,
      selectors: [["mgl-image"]],
      inputs: {
        id: "id",
        data: "data",
        options: "options",
        url: "url"
      },
      outputs: {
        error: "error",
        loaded: "loaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function ImageComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    ImageComponent.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    ImageComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      error: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      loaded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-image',
          template: ''
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        loaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(MapService) {
        _classCallCheck(this, MapComponent);

        this.MapService = MapService;
        /* Added by ngx-mapbox-gl */

        this.movingMethod = 'flyTo';
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.touchCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.wheel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // TODO MapWheelEvent

        this.moveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // TODO Check type

        this.move = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rotateStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rotate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rotateEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pitchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pitchEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pitchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boxZoomStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boxZoomEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boxZoomCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.webGlContextLost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.webGlContextRestored = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // TODO Check type

        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.styleData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sourceData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.styleDataLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sourceDataLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.styleImageMissing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MapComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.MapService.setup({
            accessToken: this.accessToken,
            customMapboxApiUrl: this.customMapboxApiUrl,
            mapOptions: {
              container: this.mapContainer.nativeElement,
              minZoom: this.minZoom,
              maxZoom: this.maxZoom,
              style: this.style,
              hash: this.hash,
              interactive: this.interactive,
              bearingSnap: this.bearingSnap,
              pitchWithRotate: this.pitchWithRotate,
              clickTolerance: this.clickTolerance,
              classes: this.classes,
              attributionControl: this.attributionControl,
              logoPosition: this.logoPosition,
              failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
              preserveDrawingBuffer: this.preserveDrawingBuffer,
              refreshExpiredTiles: this.refreshExpiredTiles,
              maxBounds: this.maxBounds,
              scrollZoom: this.scrollZoom,
              boxZoom: this.boxZoom,
              dragRotate: this.dragRotate,
              dragPan: this.dragPan,
              keyboard: this.keyboard,
              doubleClickZoom: this.doubleClickZoom,
              touchZoomRotate: this.touchZoomRotate,
              trackResize: this.trackResize,
              center: this.center,
              zoom: this.zoom,
              bearing: this.bearing,
              pitch: this.pitch,
              renderWorldCopies: this.renderWorldCopies,
              maxTileCacheSize: this.maxTileCacheSize,
              localIdeographFontFamily: this.localIdeographFontFamily,
              transformRequest: this.transformRequest,
              bounds: this.bounds ? this.bounds : this.fitBounds,
              fitBoundsOptions: this.fitBoundsOptions,
              antialias: this.antialias,
              locale: this.locale
            },
            mapEvents: this
          });

          if (this.cursorStyle) {
            this.MapService.changeCanvasCursor(this.cursorStyle);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.MapService.destroyMap();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.MapService.mapCreated$.toPromise();

                  case 2:
                    if (changes.cursorStyle && !changes.cursorStyle.isFirstChange()) {
                      this.MapService.changeCanvasCursor(changes.cursorStyle.currentValue);
                    }

                    if (changes.minZoom && !changes.minZoom.isFirstChange()) {
                      this.MapService.updateMinZoom(changes.minZoom.currentValue);
                    }

                    if (changes.maxZoom && !changes.maxZoom.isFirstChange()) {
                      this.MapService.updateMaxZoom(changes.maxZoom.currentValue);
                    }

                    if (changes.scrollZoom && !changes.scrollZoom.isFirstChange()) {
                      this.MapService.updateScrollZoom(changes.scrollZoom.currentValue);
                    }

                    if (changes.dragRotate && !changes.dragRotate.isFirstChange()) {
                      this.MapService.updateDragRotate(changes.dragRotate.currentValue);
                    }

                    if (changes.touchZoomRotate && !changes.touchZoomRotate.isFirstChange()) {
                      this.MapService.updateTouchZoomRotate(changes.touchZoomRotate.currentValue);
                    }

                    if (changes.doubleClickZoom && !changes.doubleClickZoom.isFirstChange()) {
                      this.MapService.updateDoubleClickZoom(changes.doubleClickZoom.currentValue);
                    }

                    if (changes.keyboard && !changes.keyboard.isFirstChange()) {
                      this.MapService.updateKeyboard(changes.keyboard.currentValue);
                    }

                    if (changes.dragPan && !changes.dragPan.isFirstChange()) {
                      this.MapService.updateDragPan(changes.dragPan.currentValue);
                    }

                    if (changes.boxZoom && !changes.boxZoom.isFirstChange()) {
                      this.MapService.updateBoxZoom(changes.boxZoom.currentValue);
                    }

                    if (changes.style && !changes.style.isFirstChange()) {
                      this.MapService.updateStyle(changes.style.currentValue);
                    }

                    if (changes.maxBounds && !changes.maxBounds.isFirstChange()) {
                      this.MapService.updateMaxBounds(changes.maxBounds.currentValue);
                    }

                    if (changes.fitBounds && changes.fitBounds.currentValue && !changes.fitBounds.isFirstChange()) {
                      this.MapService.fitBounds(changes.fitBounds.currentValue, this.fitBoundsOptions);
                    }

                    if (changes.fitScreenCoordinates && changes.fitScreenCoordinates.currentValue) {
                      if ((this.center || this.zoom || this.pitch || this.fitBounds) && changes.fitScreenCoordinates.isFirstChange()) {
                        console.warn('[ngx-mapbox-gl] center / zoom / pitch / fitBounds inputs are being overridden by fitScreenCoordinates input');
                      }

                      this.MapService.fitScreenCoordinates(changes.fitScreenCoordinates.currentValue, this.bearing ? this.bearing[0] : 0, this.movingOptions);
                    }

                    if (this.centerWithPanTo && changes.center && !changes.center.isFirstChange() && !changes.zoom && !changes.bearing && !changes.pitch) {
                      this.MapService.panTo(this.center, this.panToOptions);
                    } else if (changes.center && !changes.center.isFirstChange() || changes.zoom && !changes.zoom.isFirstChange() || changes.bearing && !changes.bearing.isFirstChange() && !changes.fitScreenCoordinates || changes.pitch && !changes.pitch.isFirstChange()) {
                      this.MapService.move(this.movingMethod, this.movingOptions, changes.zoom && this.zoom ? this.zoom[0] : undefined, changes.center ? this.center : undefined, changes.bearing && this.bearing ? this.bearing[0] : undefined, changes.pitch && this.pitch ? this.pitch[0] : undefined);
                    }

                  case 17:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "mapInstance",
        get: function get() {
          return this.MapService.mapInstance;
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["mgl-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapContainer = _t.first);
        }
      },
      inputs: {
        movingMethod: "movingMethod",
        accessToken: "accessToken",
        customMapboxApiUrl: "customMapboxApiUrl",
        hash: "hash",
        refreshExpiredTiles: "refreshExpiredTiles",
        failIfMajorPerformanceCaveat: "failIfMajorPerformanceCaveat",
        classes: "classes",
        bearingSnap: "bearingSnap",
        interactive: "interactive",
        pitchWithRotate: "pitchWithRotate",
        clickTolerance: "clickTolerance",
        attributionControl: "attributionControl",
        logoPosition: "logoPosition",
        maxTileCacheSize: "maxTileCacheSize",
        localIdeographFontFamily: "localIdeographFontFamily",
        preserveDrawingBuffer: "preserveDrawingBuffer",
        renderWorldCopies: "renderWorldCopies",
        trackResize: "trackResize",
        transformRequest: "transformRequest",
        bounds: "bounds",
        antialias: "antialias",
        locale: "locale",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        scrollZoom: "scrollZoom",
        dragRotate: "dragRotate",
        touchZoomRotate: "touchZoomRotate",
        doubleClickZoom: "doubleClickZoom",
        keyboard: "keyboard",
        dragPan: "dragPan",
        boxZoom: "boxZoom",
        style: "style",
        center: "center",
        maxBounds: "maxBounds",
        zoom: "zoom",
        bearing: "bearing",
        pitch: "pitch",
        fitBoundsOptions: "fitBoundsOptions",
        movingOptions: "movingOptions",
        fitBounds: "fitBounds",
        fitScreenCoordinates: "fitScreenCoordinates",
        centerWithPanTo: "centerWithPanTo",
        panToOptions: "panToOptions",
        cursorStyle: "cursorStyle"
      },
      outputs: {
        resize: "resize",
        remove: "remove",
        mouseDown: "mouseDown",
        mouseUp: "mouseUp",
        mouseMove: "mouseMove",
        click: "click",
        dblClick: "dblClick",
        mouseEnter: "mouseEnter",
        mouseLeave: "mouseLeave",
        mouseOver: "mouseOver",
        mouseOut: "mouseOut",
        contextMenu: "contextMenu",
        touchStart: "touchStart",
        touchEnd: "touchEnd",
        touchMove: "touchMove",
        touchCancel: "touchCancel",
        wheel: "wheel",
        moveStart: "moveStart",
        move: "move",
        moveEnd: "moveEnd",
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd",
        zoomStart: "zoomStart",
        zoomEvt: "zoomEvt",
        zoomEnd: "zoomEnd",
        rotateStart: "rotateStart",
        rotate: "rotate",
        rotateEnd: "rotateEnd",
        pitchStart: "pitchStart",
        pitchEvt: "pitchEvt",
        pitchEnd: "pitchEnd",
        boxZoomStart: "boxZoomStart",
        boxZoomEnd: "boxZoomEnd",
        boxZoomCancel: "boxZoomCancel",
        webGlContextLost: "webGlContextLost",
        webGlContextRestored: "webGlContextRestored",
        load: "load",
        idle: "idle",
        render: "render",
        error: "error",
        data: "data",
        styleData: "styleData",
        sourceData: "sourceData",
        dataLoading: "dataLoading",
        styleDataLoading: "styleDataLoading",
        sourceDataLoading: "sourceDataLoading",
        styleImageMissing: "styleImageMissing"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MapService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["container", ""]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n      div[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 100%;\n      }"],
      changeDetection: 0
    });

    MapComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    MapComponent.propDecorators = {
      accessToken: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customMapboxApiUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hash: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      refreshExpiredTiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      failIfMajorPerformanceCaveat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bearingSnap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      interactive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pitchWithRotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clickTolerance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      attributionControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      logoPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxTileCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      localIdeographFontFamily: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preserveDrawingBuffer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      renderWorldCopies: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      trackResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      transformRequest: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      antialias: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrollZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dragRotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      touchZoomRotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      doubleClickZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      keyboard: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dragPan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      boxZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      center: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bearing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pitch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitBoundsOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      movingMethod: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      movingOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitScreenCoordinates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      centerWithPanTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      panToOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cursorStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      resize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      remove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      contextMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      touchStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      touchEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      touchMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      touchCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      wheel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      moveStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      move: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      moveEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      zoomStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      zoomEvt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      zoomEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rotateStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rotateEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      pitchStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      pitchEvt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      pitchEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      boxZoomStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      boxZoomEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      boxZoomCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      webGlContextLost: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      webGlContextRestored: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      load: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      idle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      render: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      error: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      styleData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      sourceData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dataLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      styleDataLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      sourceDataLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      styleImageMissing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['container', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-map',
          template: '<div #container></div>',
          providers: [MapService],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n      :host {\n        display: block;\n      }\n      div {\n        height: 100%;\n        width: 100%;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        movingMethod: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        contextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        touchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        touchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        touchMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        touchCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        move: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomEvt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rotateStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rotateEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pitchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pitchEvt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pitchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boxZoomStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boxZoomEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boxZoomCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        webGlContextLost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        webGlContextRestored: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        load: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        render: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        styleData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        sourceData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dataLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        styleDataLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        sourceDataLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        styleImageMissing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        accessToken: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customMapboxApiUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refreshExpiredTiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        failIfMajorPerformanceCaveat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bearingSnap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        interactive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pitchWithRotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickTolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        attributionControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        logoPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxTileCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        localIdeographFontFamily: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveDrawingBuffer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        renderWorldCopies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        transformRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        antialias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragRotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        touchZoomRotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doubleClickZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bearing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pitch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        movingOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitScreenCoordinates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        centerWithPanTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panToOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cursorStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['container', {
            "static": true
          }]
        }]
      });
    })();

    var PointDirective = function PointDirective() {
      _classCallCheck(this, PointDirective);
    };

    PointDirective.ɵfac = function PointDirective_Factory(t) {
      return new (t || PointDirective)();
    };

    PointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: PointDirective,
      selectors: [["ng-template", "mglPoint", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ng-template[mglPoint]'
        }]
      }], null, null);
    })();

    var ClusterPointDirective = function ClusterPointDirective() {
      _classCallCheck(this, ClusterPointDirective);
    };

    ClusterPointDirective.ɵfac = function ClusterPointDirective_Factory(t) {
      return new (t || ClusterPointDirective)();
    };

    ClusterPointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ClusterPointDirective,
      selectors: [["ng-template", "mglClusterPoint", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClusterPointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ng-template[mglClusterPoint]'
        }]
      }], null, null);
    })();

    var uniqId = 0;

    var MarkersForClustersComponent = /*#__PURE__*/function () {
      function MarkersForClustersComponent(MapService, ChangeDetectorRef, zone) {
        _classCallCheck(this, MarkersForClustersComponent);

        this.MapService = MapService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.zone = zone;
        this.layerId = "mgl-markers-for-clusters-".concat(uniqId++);
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(MarkersForClustersComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this54 = this;

          var clusterDataUpdate = function clusterDataUpdate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this54.MapService.mapInstance, 'data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (e) {
              return e.sourceId === _this54.source && e.sourceDataType !== 'metadata' && _this54.MapService.mapInstance.isSourceLoaded(_this54.source);
            }));
          };

          var sub = this.MapService.mapCreated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(clusterDataUpdate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this54.MapService.mapInstance, 'move'), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this54.MapService.mapInstance, 'moveend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(undefined));
          })).subscribe(function () {
            _this54.zone.run(function () {
              _this54.updateCluster();
            });
          });
          this.sub.add(sub);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "trackByClusterPoint",
        value: function trackByClusterPoint(_index, clusterPoint) {
          return clusterPoint.id;
        }
      }, {
        key: "updateCluster",
        value: function updateCluster() {
          // Invalid queryRenderedFeatures typing
          var params = {
            layers: [this.layerId]
          };

          if (!this.pointTpl) {
            params.filter = ['==', 'cluster', true];
          }

          this.clusterPoints = this.MapService.mapInstance.queryRenderedFeatures(params);
          this.ChangeDetectorRef.markForCheck();
        }
      }]);

      return MarkersForClustersComponent;
    }();

    MarkersForClustersComponent.ɵfac = function MarkersForClustersComponent_Factory(t) {
      return new (t || MarkersForClustersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MarkersForClustersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MarkersForClustersComponent,
      selectors: [["mgl-markers-for-clusters"]],
      contentQueries: function MarkersForClustersComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, PointDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ClusterPointDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pointTpl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clusterPointTpl = _t.first);
        }
      },
      inputs: {
        source: "source"
      },
      decls: 2,
      vars: 6,
      consts: [["type", "circle", 3, "id", "source", "paint"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "feature"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function MarkersForClustersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mgl-layer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarkersForClustersComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.layerId)("source", ctx.source)("paint", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clusterPoints)("ngForTrackBy", ctx.trackByClusterPoint);
        }
      },
      directives: [LayerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], MarkerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });

    MarkersForClustersComponent.ctorParameters = function () {
      return [{
        type: MapService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MarkersForClustersComponent.propDecorators = {
      source: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pointTpl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [PointDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
          "static": false
        }]
      }],
      clusterPointTpl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [ClusterPointDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
          "static": false
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkersForClustersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-markers-for-clusters',
          template: "\n    <mgl-layer [id]=\"layerId\" [source]=\"source\" type=\"circle\" [paint]=\"{ 'circle-radius': 0 }\"></mgl-layer>\n    <ng-container *ngFor=\"let feature of clusterPoints; trackBy: trackByClusterPoint\">\n      <ng-container *ngIf=\"feature.properties.cluster\">\n        <mgl-marker [feature]=\"feature\">\n          <ng-container *ngTemplateOutlet=\"clusterPointTpl; context: { $implicit: feature }\"></ng-container>\n        </mgl-marker>\n      </ng-container>\n      <ng-container *ngIf=\"!feature.properties.cluster\">\n        <mgl-marker [feature]=\"feature\">\n          <ng-container *ngTemplateOutlet=\"pointTpl; context: { $implicit: feature }\"></ng-container>\n        </mgl-marker>\n      </ng-container>\n    </ng-container>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false
        }]
      }], function () {
        return [{
          type: MapService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pointTpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [PointDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": false
          }]
        }],
        clusterPointTpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [ClusterPointDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": false
          }]
        }]
      });
    })();

    var PopupComponent = /*#__PURE__*/function () {
      function PopupComponent(MapService) {
        _classCallCheck(this, PopupComponent);

        this.MapService = MapService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lngLat && this.marker || this.feature && this.lngLat || this.feature && this.marker) {
            throw new Error('marker, lngLat, feature input are mutually exclusive');
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.lngLat && !changes.lngLat.isFirstChange() || changes.feature && !changes.feature.isFirstChange()) {
            var newlngLat = changes.lngLat ? this.lngLat : this.feature.geometry.coordinates;
            this.MapService.removePopupFromMap(this.popupInstance, true);
            var popupInstanceTmp = this.createPopup();
            this.MapService.addPopupToMap(popupInstanceTmp, newlngLat, this.popupInstance.isOpen());
            this.popupInstance = popupInstanceTmp;
          }

          if (changes.marker && !changes.marker.isFirstChange()) {
            var previousMarker = changes.marker.previousValue;

            if (previousMarker.markerInstance) {
              this.MapService.removePopupFromMarker(previousMarker.markerInstance);
            }

            if (this.marker && this.marker.markerInstance && this.popupInstance) {
              this.MapService.addPopupToMarker(this.marker.markerInstance, this.popupInstance);
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.popupInstance = this.createPopup();
          this.addPopup(this.popupInstance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.popupInstance) {
            if (this.lngLat || this.feature) {
              this.MapService.removePopupFromMap(this.popupInstance);
            } else if (this.marker && this.marker.markerInstance) {
              this.MapService.removePopupFromMarker(this.marker.markerInstance);
            }
          }

          this.popupInstance = undefined;
        }
      }, {
        key: "createPopup",
        value: function createPopup() {
          return this.MapService.createPopup({
            popupOptions: {
              closeButton: this.closeButton,
              closeOnClick: this.closeOnClick,
              anchor: this.anchor,
              offset: this.offset,
              className: this.className,
              maxWidth: this.maxWidth
            },
            popupEvents: {
              open: this.open,
              close: this.close
            }
          }, this.content.nativeElement);
        }
      }, {
        key: "addPopup",
        value: function addPopup(popup) {
          var _this55 = this;

          this.MapService.mapCreated$.subscribe(function () {
            if (_this55.lngLat || _this55.feature) {
              _this55.MapService.addPopupToMap(popup, _this55.lngLat ? _this55.lngLat : _this55.feature.geometry.coordinates);
            } else if (_this55.marker && _this55.marker.markerInstance) {
              _this55.MapService.addPopupToMarker(_this55.marker.markerInstance, popup);
            } else {
              throw new Error('mgl-popup need either lngLat/marker/feature to be set');
            }
          });
        }
      }]);

      return PopupComponent;
    }();

    PopupComponent.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["mgl-popup"]],
      viewQuery: function PopupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        closeButton: "closeButton",
        closeOnClick: "closeOnClick",
        anchor: "anchor",
        offset: "offset",
        className: "className",
        maxWidth: "maxWidth",
        feature: "feature",
        lngLat: "lngLat",
        marker: "marker"
      },
      outputs: {
        close: "close",
        open: "open"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["content", ""]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    PopupComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    PopupComponent.propDecorators = {
      closeButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      closeOnClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      anchor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      offset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      className: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      feature: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      lngLat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      marker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['content', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-popup',
          template: '<div #content><ng-content></ng-content></div>',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        closeButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        feature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lngLat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        marker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": true
          }]
        }]
      });
    })();

    var CanvasSourceComponent = /*#__PURE__*/function () {
      function CanvasSourceComponent(MapService) {
        _classCallCheck(this, CanvasSourceComponent);

        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(CanvasSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          var sub1 = this.MapService.mapLoaded$.subscribe(function () {
            _this56.init();

            var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this56.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this56.MapService.mapInstance.getSource(_this56.id);
            })).subscribe(function () {
              _this56.init();
            });

            _this56.sub.add(sub);
          });
          this.sub.add(sub1);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.sourceAdded) {
            return;
          }

          if (changes.coordinates && !changes.coordinates.isFirstChange() || changes.canvas && !changes.canvas.isFirstChange() || changes.animate && !changes.animate.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();

          if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
          }
        }
      }, {
        key: "init",
        value: function init() {
          this.MapService.addSource(this.id, {
            type: 'canvas',
            coordinates: this.coordinates,
            canvas: this.canvas,
            animate: this.animate
          });
          this.sourceAdded = true;
        }
      }]);

      return CanvasSourceComponent;
    }();

    CanvasSourceComponent.ɵfac = function CanvasSourceComponent_Factory(t) {
      return new (t || CanvasSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    CanvasSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CanvasSourceComponent,
      selectors: [["mgl-canvas-source"]],
      inputs: {
        id: "id",
        coordinates: "coordinates",
        canvas: "canvas",
        animate: "animate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function CanvasSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    CanvasSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    CanvasSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      coordinates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      animate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CanvasSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-canvas-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        coordinates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var ImageSourceComponent = /*#__PURE__*/function () {
      function ImageSourceComponent(MapService) {
        _classCallCheck(this, ImageSourceComponent);

        this.MapService = MapService;
      }

      _createClass(ImageSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this57 = this;

          this.sub = this.MapService.mapLoaded$.subscribe(function () {
            return _this57.init();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.sourceId === undefined) {
            return;
          }

          var source = this.MapService.getSource(this.sourceId);
          source.updateImage({
            url: changes.url === undefined ? undefined : this.url,
            coordinates: changes.coordinates === undefined ? undefined : this.coordinates
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub !== undefined) {
            this.sub.unsubscribe();
          }

          if (this.sourceId !== undefined) {
            this.MapService.removeSource(this.sourceId);
          }
        }
      }, {
        key: "init",
        value: function init() {
          var imageSource = {
            type: 'image',
            url: this.url,
            coordinates: this.coordinates
          };
          this.MapService.addSource(this.id, imageSource);
          this.sourceId = this.id;
        }
      }]);

      return ImageSourceComponent;
    }();

    ImageSourceComponent.ɵfac = function ImageSourceComponent_Factory(t) {
      return new (t || ImageSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    ImageSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageSourceComponent,
      selectors: [["mgl-image-source"]],
      inputs: {
        id: "id",
        url: "url",
        coordinates: "coordinates"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function ImageSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    ImageSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    ImageSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      coordinates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-image-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        coordinates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var RasterSourceComponent = /*#__PURE__*/function () {
      function RasterSourceComponent(MapService) {
        _classCallCheck(this, RasterSourceComponent);

        this.MapService = MapService;
        this.type = 'raster'; // Just to make ts happy

        this.sourceAdded = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(RasterSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          var sub1 = this.MapService.mapLoaded$.subscribe(function () {
            _this58.init();

            var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this58.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this58.MapService.mapInstance.getSource(_this58.id);
            })).subscribe(function () {
              _this58.init();
            });

            _this58.sub.add(sub);
          });
          this.sub.add(sub1);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.sourceAdded) {
            return;
          }

          if (changes.url && !changes.url.isFirstChange() || changes.tiles && !changes.tiles.isFirstChange() || changes.bounds && !changes.bounds.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.tileSize && !changes.tileSize.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();

          if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
          }
        }
      }, {
        key: "init",
        value: function init() {
          var source = {
            type: this.type,
            url: this.url,
            tiles: this.tiles,
            bounds: this.bounds,
            minzoom: this.minzoom,
            maxzoom: this.maxzoom,
            tileSize: this.tileSize
          };
          this.MapService.addSource(this.id, source);
          this.sourceAdded = true;
        }
      }]);

      return RasterSourceComponent;
    }();

    RasterSourceComponent.ɵfac = function RasterSourceComponent_Factory(t) {
      return new (t || RasterSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    RasterSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RasterSourceComponent,
      selectors: [["mgl-raster-source"]],
      inputs: {
        id: "id",
        url: "url",
        tiles: "tiles",
        bounds: "bounds",
        minzoom: "minzoom",
        maxzoom: "maxzoom",
        tileSize: "tileSize"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function RasterSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    RasterSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    RasterSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tileSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RasterSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-raster-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var VectorSourceComponent = /*#__PURE__*/function () {
      function VectorSourceComponent(MapService) {
        _classCallCheck(this, VectorSourceComponent);

        this.MapService = MapService;
        this.type = 'vector'; // Just to make ts happy

        this.sourceAdded = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(VectorSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          var sub1 = this.MapService.mapLoaded$.subscribe(function () {
            _this59.init();

            var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this59.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this59.MapService.mapInstance.getSource(_this59.id);
            })).subscribe(function () {
              _this59.init();
            });

            _this59.sub.add(sub);
          });
          this.sub.add(sub1);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.sourceAdded) {
            return;
          }

          if (changes.url && !changes.url.isFirstChange() || changes.tiles && !changes.tiles.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();

          if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
          }
        }
      }, {
        key: "init",
        value: function init() {
          this.MapService.addSource(this.id, {
            type: this.type,
            url: this.url,
            tiles: this.tiles,
            minzoom: this.minzoom,
            maxzoom: this.maxzoom
          });
          this.sourceAdded = true;
        }
      }]);

      return VectorSourceComponent;
    }();

    VectorSourceComponent.ɵfac = function VectorSourceComponent_Factory(t) {
      return new (t || VectorSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    VectorSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VectorSourceComponent,
      selectors: [["mgl-vector-source"]],
      inputs: {
        id: "id",
        url: "url",
        tiles: "tiles",
        minzoom: "minzoom",
        maxzoom: "maxzoom"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function VectorSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    VectorSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    VectorSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxzoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VectorSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-vector-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxzoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var VideoSourceComponent = /*#__PURE__*/function () {
      function VideoSourceComponent(MapService) {
        _classCallCheck(this, VideoSourceComponent);

        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(VideoSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          var sub1 = this.MapService.mapLoaded$.subscribe(function () {
            _this60.init();

            var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this60.MapService.mapInstance, 'styledata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return !_this60.MapService.mapInstance.getSource(_this60.id);
            })).subscribe(function () {
              _this60.init();
            });

            _this60.sub.add(sub);
          });
          this.sub.add(sub1);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.sourceAdded) {
            return;
          }

          if (changes.urls && !changes.urls.isFirstChange() || changes.coordinates && !changes.coordinates.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();

          if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
          }
        }
      }, {
        key: "init",
        value: function init() {
          this.MapService.addSource(this.id, {
            type: 'video',
            urls: this.urls,
            coordinates: this.coordinates
          });
          this.sourceAdded = true;
        }
      }]);

      return VideoSourceComponent;
    }();

    VideoSourceComponent.ɵfac = function VideoSourceComponent_Factory(t) {
      return new (t || VideoSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapService));
    };

    VideoSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VideoSourceComponent,
      selectors: [["mgl-video-source"]],
      inputs: {
        id: "id",
        urls: "urls",
        coordinates: "coordinates"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function VideoSourceComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    VideoSourceComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    VideoSourceComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      urls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      coordinates: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mgl-video-source',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        urls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        coordinates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var NgxMapboxGLModule = /*#__PURE__*/function () {
      function NgxMapboxGLModule() {
        _classCallCheck(this, NgxMapboxGLModule);
      }

      _createClass(NgxMapboxGLModule, null, [{
        key: "withConfig",
        value: function withConfig(config) {
          return {
            ngModule: NgxMapboxGLModule,
            providers: [{
              provide: MAPBOX_API_KEY,
              useValue: config.accessToken
            }, {
              provide: MAPBOX_GEOCODER_API_KEY,
              useValue: config.geocoderAccessToken || config.accessToken
            }]
          };
        }
      }]);

      return NgxMapboxGLModule;
    }();

    NgxMapboxGLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxMapboxGLModule
    });
    NgxMapboxGLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxMapboxGLModule_Factory(t) {
        return new (t || NgxMapboxGLModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMapboxGLModule, {
        declarations: function declarations() {
          return [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeocoderControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
        },
        exports: function exports() {
          return [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeocoderControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMapboxGLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          declarations: [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeocoderControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent],
          exports: [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeocoderControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of ngx-mapbox-gl
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-mapbox-gl.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-mapbox-gl/node_modules/tslib/tslib.es6.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ngx-mapbox-gl/node_modules/tslib/tslib.es6.js ***!
    \********************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesNgxMapboxGlNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    var __createBinding = Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      });
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    };

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    var __setModuleDefault = Object.create ? function (o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function (o, v) {
      o["default"] = v;
    };

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/safe-buffer/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/safe-buffer/index.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesSafeBufferIndexJs(module, exports, __webpack_require__) {
    /* eslint-disable node/no-deprecated-api */
    var buffer = __webpack_require__(
    /*! buffer */
    "./node_modules/buffer/index.js");

    var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }

    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length);
    } // Copy static methods from Buffer


    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
      }

      return Buffer(arg, encodingOrOffset, length);
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      var buf = Buffer(size);

      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }

      return buf;
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      return Buffer(size);
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      return buffer.SlowBuffer(size);
    };
    /***/

  },

  /***/
  "./node_modules/sha.js/hash.js":
  /*!*************************************!*\
    !*** ./node_modules/sha.js/hash.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsHashJs(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer; // prototype class for hash functions


    function Hash(blockSize, finalSize) {
      this._block = Buffer.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }

    Hash.prototype.update = function (data, enc) {
      if (typeof data === 'string') {
        enc = enc || 'utf8';
        data = Buffer.from(data, enc);
      }

      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;

      for (var offset = 0; offset < length;) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);

        for (var i = 0; i < remainder; i++) {
          block[assigned + i] = data[offset + i];
        }

        accum += remainder;
        offset += remainder;

        if (accum % blockSize === 0) {
          this._update(block);
        }
      }

      this._len += length;
      return this;
    };

    Hash.prototype.digest = function (enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 0x80; // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
      // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize

      this._block.fill(0, rem + 1);

      if (rem >= this._finalSize) {
        this._update(this._block);

        this._block.fill(0);
      }

      var bits = this._len * 8; // uint32

      if (bits <= 0xffffffff) {
        this._block.writeUInt32BE(bits, this._blockSize - 4); // uint64

      } else {
        var lowBits = (bits & 0xffffffff) >>> 0;
        var highBits = (bits - lowBits) / 0x100000000;

        this._block.writeUInt32BE(highBits, this._blockSize - 8);

        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }

      this._update(this._block);

      var hash = this._hash();

      return enc ? hash.toString(enc) : hash;
    };

    Hash.prototype._update = function () {
      throw new Error('_update must be implemented by subclass');
    };

    module.exports = Hash;
    /***/
  },

  /***/
  "./node_modules/sha.js/index.js":
  /*!**************************************!*\
    !*** ./node_modules/sha.js/index.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsIndexJs(module, exports, __webpack_require__) {
    var exports = module.exports = function SHA(algorithm) {
      algorithm = algorithm.toLowerCase();
      var Algorithm = exports[algorithm];
      if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');
      return new Algorithm();
    };

    exports.sha = __webpack_require__(
    /*! ./sha */
    "./node_modules/sha.js/sha.js");
    exports.sha1 = __webpack_require__(
    /*! ./sha1 */
    "./node_modules/sha.js/sha1.js");
    exports.sha224 = __webpack_require__(
    /*! ./sha224 */
    "./node_modules/sha.js/sha224.js");
    exports.sha256 = __webpack_require__(
    /*! ./sha256 */
    "./node_modules/sha.js/sha256.js");
    exports.sha384 = __webpack_require__(
    /*! ./sha384 */
    "./node_modules/sha.js/sha384.js");
    exports.sha512 = __webpack_require__(
    /*! ./sha512 */
    "./node_modules/sha.js/sha512.js");
    /***/
  },

  /***/
  "./node_modules/sha.js/sha.js":
  /*!************************************!*\
    !*** ./node_modules/sha.js/sha.js ***!
    \************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsShaJs(module, exports, __webpack_require__) {
    /*
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
     * in FIPS PUB 180-1
     * This source code is derived from sha1.js of the same repository.
     * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
     * operation was added.
     */
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
    var W = new Array(80);

    function Sha() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }

    inherits(Sha, Hash);

    Sha.prototype.init = function () {
      this._a = 0x67452301;
      this._b = 0xefcdab89;
      this._c = 0x98badcfe;
      this._d = 0x10325476;
      this._e = 0xc3d2e1f0;
      return this;
    };

    function rotl5(num) {
      return num << 5 | num >>> 27;
    }

    function rotl30(num) {
      return num << 30 | num >>> 2;
    }

    function ft(s, b, c, d) {
      if (s === 0) return b & c | ~b & d;
      if (s === 2) return b & c | b & d | c & d;
      return b ^ c ^ d;
    }

    Sha.prototype._update = function (M) {
      var W = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;

      for (var i = 0; i < 16; ++i) {
        W[i] = M.readInt32BE(i * 4);
      }

      for (; i < 80; ++i) {
        W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      }

      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }

      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };

    Sha.prototype._hash = function () {
      var H = Buffer.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };

    module.exports = Sha;
    /***/
  },

  /***/
  "./node_modules/sha.js/sha1.js":
  /*!*************************************!*\
    !*** ./node_modules/sha.js/sha1.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsSha1Js(module, exports, __webpack_require__) {
    /*
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
     * in FIPS PUB 180-1
     * Version 2.1a Copyright Paul Johnston 2000 - 2002.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for details.
     */
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
    var W = new Array(80);

    function Sha1() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }

    inherits(Sha1, Hash);

    Sha1.prototype.init = function () {
      this._a = 0x67452301;
      this._b = 0xefcdab89;
      this._c = 0x98badcfe;
      this._d = 0x10325476;
      this._e = 0xc3d2e1f0;
      return this;
    };

    function rotl1(num) {
      return num << 1 | num >>> 31;
    }

    function rotl5(num) {
      return num << 5 | num >>> 27;
    }

    function rotl30(num) {
      return num << 30 | num >>> 2;
    }

    function ft(s, b, c, d) {
      if (s === 0) return b & c | ~b & d;
      if (s === 2) return b & c | b & d | c & d;
      return b ^ c ^ d;
    }

    Sha1.prototype._update = function (M) {
      var W = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;

      for (var i = 0; i < 16; ++i) {
        W[i] = M.readInt32BE(i * 4);
      }

      for (; i < 80; ++i) {
        W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);
      }

      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }

      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };

    Sha1.prototype._hash = function () {
      var H = Buffer.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };

    module.exports = Sha1;
    /***/
  },

  /***/
  "./node_modules/sha.js/sha224.js":
  /*!***************************************!*\
    !*** ./node_modules/sha.js/sha224.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsSha224Js(module, exports, __webpack_require__) {
    /**
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
     * in FIPS 180-2
     * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     *
     */
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var Sha256 = __webpack_require__(
    /*! ./sha256 */
    "./node_modules/sha.js/sha256.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var W = new Array(64);

    function Sha224() {
      this.init();
      this._w = W; // new Array(64)

      Hash.call(this, 64, 56);
    }

    inherits(Sha224, Sha256);

    Sha224.prototype.init = function () {
      this._a = 0xc1059ed8;
      this._b = 0x367cd507;
      this._c = 0x3070dd17;
      this._d = 0xf70e5939;
      this._e = 0xffc00b31;
      this._f = 0x68581511;
      this._g = 0x64f98fa7;
      this._h = 0xbefa4fa4;
      return this;
    };

    Sha224.prototype._hash = function () {
      var H = Buffer.allocUnsafe(28);
      H.writeInt32BE(this._a, 0);
      H.writeInt32BE(this._b, 4);
      H.writeInt32BE(this._c, 8);
      H.writeInt32BE(this._d, 12);
      H.writeInt32BE(this._e, 16);
      H.writeInt32BE(this._f, 20);
      H.writeInt32BE(this._g, 24);
      return H;
    };

    module.exports = Sha224;
    /***/
  },

  /***/
  "./node_modules/sha.js/sha256.js":
  /*!***************************************!*\
    !*** ./node_modules/sha.js/sha256.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsSha256Js(module, exports, __webpack_require__) {
    /**
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
     * in FIPS 180-2
     * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     *
     */
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    var W = new Array(64);

    function Sha256() {
      this.init();
      this._w = W; // new Array(64)

      Hash.call(this, 64, 56);
    }

    inherits(Sha256, Hash);

    Sha256.prototype.init = function () {
      this._a = 0x6a09e667;
      this._b = 0xbb67ae85;
      this._c = 0x3c6ef372;
      this._d = 0xa54ff53a;
      this._e = 0x510e527f;
      this._f = 0x9b05688c;
      this._g = 0x1f83d9ab;
      this._h = 0x5be0cd19;
      return this;
    };

    function ch(x, y, z) {
      return z ^ x & (y ^ z);
    }

    function maj(x, y, z) {
      return x & y | z & (x | y);
    }

    function sigma0(x) {
      return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
    }

    function sigma1(x) {
      return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
    }

    function gamma0(x) {
      return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
    }

    function gamma1(x) {
      return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
    }

    Sha256.prototype._update = function (M) {
      var W = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      var f = this._f | 0;
      var g = this._g | 0;
      var h = this._h | 0;

      for (var i = 0; i < 16; ++i) {
        W[i] = M.readInt32BE(i * 4);
      }

      for (; i < 64; ++i) {
        W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;
      }

      for (var j = 0; j < 64; ++j) {
        var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W[j] | 0;
        var T2 = sigma0(a) + maj(a, b, c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + T1 | 0;
        d = c;
        c = b;
        b = a;
        a = T1 + T2 | 0;
      }

      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
      this._f = f + this._f | 0;
      this._g = g + this._g | 0;
      this._h = h + this._h | 0;
    };

    Sha256.prototype._hash = function () {
      var H = Buffer.allocUnsafe(32);
      H.writeInt32BE(this._a, 0);
      H.writeInt32BE(this._b, 4);
      H.writeInt32BE(this._c, 8);
      H.writeInt32BE(this._d, 12);
      H.writeInt32BE(this._e, 16);
      H.writeInt32BE(this._f, 20);
      H.writeInt32BE(this._g, 24);
      H.writeInt32BE(this._h, 28);
      return H;
    };

    module.exports = Sha256;
    /***/
  },

  /***/
  "./node_modules/sha.js/sha384.js":
  /*!***************************************!*\
    !*** ./node_modules/sha.js/sha384.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsSha384Js(module, exports, __webpack_require__) {
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var SHA512 = __webpack_require__(
    /*! ./sha512 */
    "./node_modules/sha.js/sha512.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var W = new Array(160);

    function Sha384() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }

    inherits(Sha384, SHA512);

    Sha384.prototype.init = function () {
      this._ah = 0xcbbb9d5d;
      this._bh = 0x629a292a;
      this._ch = 0x9159015a;
      this._dh = 0x152fecd8;
      this._eh = 0x67332667;
      this._fh = 0x8eb44a87;
      this._gh = 0xdb0c2e0d;
      this._hh = 0x47b5481d;
      this._al = 0xc1059ed8;
      this._bl = 0x367cd507;
      this._cl = 0x3070dd17;
      this._dl = 0xf70e5939;
      this._el = 0xffc00b31;
      this._fl = 0x68581511;
      this._gl = 0x64f98fa7;
      this._hl = 0xbefa4fa4;
      return this;
    };

    Sha384.prototype._hash = function () {
      var H = Buffer.allocUnsafe(48);

      function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
      }

      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      return H;
    };

    module.exports = Sha384;
    /***/
  },

  /***/
  "./node_modules/sha.js/sha512.js":
  /*!***************************************!*\
    !*** ./node_modules/sha.js/sha512.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesShaJsSha512Js(module, exports, __webpack_require__) {
    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    var Hash = __webpack_require__(
    /*! ./hash */
    "./node_modules/sha.js/hash.js");

    var Buffer = __webpack_require__(
    /*! safe-buffer */
    "./node_modules/safe-buffer/index.js").Buffer;

    var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
    var W = new Array(160);

    function Sha512() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }

    inherits(Sha512, Hash);

    Sha512.prototype.init = function () {
      this._ah = 0x6a09e667;
      this._bh = 0xbb67ae85;
      this._ch = 0x3c6ef372;
      this._dh = 0xa54ff53a;
      this._eh = 0x510e527f;
      this._fh = 0x9b05688c;
      this._gh = 0x1f83d9ab;
      this._hh = 0x5be0cd19;
      this._al = 0xf3bcc908;
      this._bl = 0x84caa73b;
      this._cl = 0xfe94f82b;
      this._dl = 0x5f1d36f1;
      this._el = 0xade682d1;
      this._fl = 0x2b3e6c1f;
      this._gl = 0xfb41bd6b;
      this._hl = 0x137e2179;
      return this;
    };

    function Ch(x, y, z) {
      return z ^ x & (y ^ z);
    }

    function maj(x, y, z) {
      return x & y | z & (x | y);
    }

    function sigma0(x, xl) {
      return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
    }

    function sigma1(x, xl) {
      return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
    }

    function Gamma0(x, xl) {
      return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
    }

    function Gamma0l(x, xl) {
      return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
    }

    function Gamma1(x, xl) {
      return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
    }

    function Gamma1l(x, xl) {
      return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
    }

    function getCarry(a, b) {
      return a >>> 0 < b >>> 0 ? 1 : 0;
    }

    Sha512.prototype._update = function (M) {
      var W = this._w;
      var ah = this._ah | 0;
      var bh = this._bh | 0;
      var ch = this._ch | 0;
      var dh = this._dh | 0;
      var eh = this._eh | 0;
      var fh = this._fh | 0;
      var gh = this._gh | 0;
      var hh = this._hh | 0;
      var al = this._al | 0;
      var bl = this._bl | 0;
      var cl = this._cl | 0;
      var dl = this._dl | 0;
      var el = this._el | 0;
      var fl = this._fl | 0;
      var gl = this._gl | 0;
      var hl = this._hl | 0;

      for (var i = 0; i < 32; i += 2) {
        W[i] = M.readInt32BE(i * 4);
        W[i + 1] = M.readInt32BE(i * 4 + 4);
      }

      for (; i < 160; i += 2) {
        var xh = W[i - 15 * 2];
        var xl = W[i - 15 * 2 + 1];
        var gamma0 = Gamma0(xh, xl);
        var gamma0l = Gamma0l(xl, xh);
        xh = W[i - 2 * 2];
        xl = W[i - 2 * 2 + 1];
        var gamma1 = Gamma1(xh, xl);
        var gamma1l = Gamma1l(xl, xh); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

        var Wi7h = W[i - 7 * 2];
        var Wi7l = W[i - 7 * 2 + 1];
        var Wi16h = W[i - 16 * 2];
        var Wi16l = W[i - 16 * 2 + 1];
        var Wil = gamma0l + Wi7l | 0;
        var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
        Wil = Wil + gamma1l | 0;
        Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
        Wil = Wil + Wi16l | 0;
        Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
        W[i] = Wih;
        W[i + 1] = Wil;
      }

      for (var j = 0; j < 160; j += 2) {
        Wih = W[j];
        Wil = W[j + 1];
        var majh = maj(ah, bh, ch);
        var majl = maj(al, bl, cl);
        var sigma0h = sigma0(ah, al);
        var sigma0l = sigma0(al, ah);
        var sigma1h = sigma1(eh, el);
        var sigma1l = sigma1(el, eh); // t1 = h + sigma1 + ch + K[j] + W[j]

        var Kih = K[j];
        var Kil = K[j + 1];
        var chh = Ch(eh, fh, gh);
        var chl = Ch(el, fl, gl);
        var t1l = hl + sigma1l | 0;
        var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + getCarry(t1l, chl) | 0;
        t1l = t1l + Kil | 0;
        t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
        t1l = t1l + Wil | 0;
        t1h = t1h + Wih + getCarry(t1l, Wil) | 0; // t2 = sigma0 + maj

        var t2l = sigma0l + majl | 0;
        var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + getCarry(el, dl) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + getCarry(al, t1l) | 0;
      }

      this._al = this._al + al | 0;
      this._bl = this._bl + bl | 0;
      this._cl = this._cl + cl | 0;
      this._dl = this._dl + dl | 0;
      this._el = this._el + el | 0;
      this._fl = this._fl + fl | 0;
      this._gl = this._gl + gl | 0;
      this._hl = this._hl + hl | 0;
      this._ah = this._ah + ah + getCarry(this._al, al) | 0;
      this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
      this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
      this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
      this._eh = this._eh + eh + getCarry(this._el, el) | 0;
      this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
      this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
      this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
    };

    Sha512.prototype._hash = function () {
      var H = Buffer.allocUnsafe(64);

      function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
      }

      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      writeInt64BE(this._gh, this._gl, 48);
      writeInt64BE(this._hh, this._hl, 56);
      return H;
    };

    module.exports = Sha512;
    /***/
  },

  /***/
  "./node_modules/suggestions/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/suggestions/index.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesSuggestionsIndexJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * A typeahead component for inputs
     * @class Suggestions
     *
     * @param {HTMLInputElement} el A valid HTML input element
     * @param {Array} data An array of data used for results
     * @param {Object} options
     * @param {Number} [options.limit=5] Max number of results to display in the auto suggest list.
     * @param {Number} [options.minLength=2] Number of characters typed into an input to trigger suggestions.
     * @param {Boolean} [options.hideOnBlur=true] If `true`, hides the suggestions when focus is lost.
     * @return {Suggestions} `this`
     * @example
     * // in the browser
     * var input = document.querySelector('input');
     * var data = [
     *   'Roy Eldridge',
     *   'Roy Hargrove',
     *   'Rex Stewart'
     * ];
     *
     * new Suggestions(input, data);
     *
     * // with options
     * var input = document.querySelector('input');
     * var data = [{
     *   name: 'Roy Eldridge',
     *   year: 1911
     * }, {
     *   name: 'Roy Hargrove',
     *   year: 1969
     * }, {
     *   name: 'Rex Stewart',
     *   year: 1907
     * }];
     *
     * var typeahead = new Suggestions(input, data, {
     *   filter: false, // Disable filtering
     *   minLength: 3, // Number of characters typed into an input to trigger suggestions.
     *   limit: 3, //  Max number of results to display.
     *   hideOnBlur: false // Don't hide results when input loses focus
     * });
     *
     * // As we're passing an object of an arrays as data, override
     * // `getItemValue` by specifying the specific property to search on.
     * typeahead.getItemValue = function(item) { return item.name };
     *
     * input.addEventListener('change', function() {
     *   console.log(typeahead.selected); // Current selected item.
     * });
     *
     * // With browserify
     * var Suggestions = require('suggestions');
     *
     * new Suggestions(input, data);
     */

    var Suggestions = __webpack_require__(
    /*! ./src/suggestions */
    "./node_modules/suggestions/src/suggestions.js");

    window.Suggestions = module.exports = Suggestions;
    /***/
  },

  /***/
  "./node_modules/suggestions/src/list.js":
  /*!**********************************************!*\
    !*** ./node_modules/suggestions/src/list.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesSuggestionsSrcListJs(module, exports, __webpack_require__) {
    "use strict";

    var List = function List(component) {
      this.component = component;
      this.items = [];
      this.active = 0;
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'suggestions-wrapper';
      this.element = document.createElement('ul');
      this.element.className = 'suggestions';
      this.wrapper.appendChild(this.element); // selectingListItem is set to true in the time between the mousedown and mouseup when clicking an item in the list
      // mousedown on a list item will cause the input to blur which normally hides the list, so this flag is used to keep
      // the list open until the mouseup

      this.selectingListItem = false;
      component.el.parentNode.insertBefore(this.wrapper, component.el.nextSibling);
      return this;
    };

    List.prototype.show = function () {
      this.element.style.display = 'block';
    };

    List.prototype.hide = function () {
      this.element.style.display = 'none';
    };

    List.prototype.add = function (item) {
      this.items.push(item);
    };

    List.prototype.clear = function () {
      this.items = [];
      this.active = 0;
    };

    List.prototype.isEmpty = function () {
      return !this.items.length;
    };

    List.prototype.isVisible = function () {
      return this.element.style.display === 'block';
    };

    List.prototype.draw = function () {
      this.element.innerHTML = '';

      if (this.items.length === 0) {
        this.hide();
        return;
      }

      for (var i = 0; i < this.items.length; i++) {
        this.drawItem(this.items[i], this.active === i);
      }

      this.show();
    };

    List.prototype.drawItem = function (item, active) {
      var li = document.createElement('li'),
          a = document.createElement('a');
      if (active) li.className += ' active';
      a.innerHTML = item.string;
      li.appendChild(a);
      this.element.appendChild(li);
      li.addEventListener('mousedown', function () {
        this.selectingListItem = true;
      }.bind(this));
      li.addEventListener('mouseup', function () {
        this.handleMouseUp.call(this, item);
      }.bind(this));
    };

    List.prototype.handleMouseUp = function (item) {
      this.selectingListItem = false;
      this.component.value(item.original);
      this.clear();
      this.draw();
    };

    List.prototype.move = function (index) {
      this.active = index;
      this.draw();
    };

    List.prototype.previous = function () {
      this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
    };

    List.prototype.next = function () {
      this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
    };

    List.prototype.drawError = function (msg) {
      var li = document.createElement('li');
      li.innerHTML = msg;
      this.element.appendChild(li);
      this.show();
    };

    module.exports = List;
    /***/
  },

  /***/
  "./node_modules/suggestions/src/suggestions.js":
  /*!*****************************************************!*\
    !*** ./node_modules/suggestions/src/suggestions.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSuggestionsSrcSuggestionsJs(module, exports, __webpack_require__) {
    "use strict";

    var extend = __webpack_require__(
    /*! xtend */
    "./node_modules/xtend/immutable.js");

    var fuzzy = __webpack_require__(
    /*! fuzzy */
    "./node_modules/fuzzy/lib/fuzzy.js");

    var List = __webpack_require__(
    /*! ./list */
    "./node_modules/suggestions/src/list.js");

    var Suggestions = function Suggestions(el, data, options) {
      options = options || {};
      this.options = extend({
        minLength: 2,
        limit: 5,
        filter: true,
        hideOnBlur: true
      }, options);
      this.el = el;
      this.data = data || [];
      this.list = new List(this);
      this.query = '';
      this.selected = null;
      this.list.draw();
      this.el.addEventListener('keyup', function (e) {
        this.handleKeyUp(e.keyCode);
      }.bind(this), false);
      this.el.addEventListener('keydown', function (e) {
        this.handleKeyDown(e);
      }.bind(this));
      this.el.addEventListener('focus', function () {
        this.handleFocus();
      }.bind(this));
      this.el.addEventListener('blur', function () {
        this.handleBlur();
      }.bind(this));
      this.el.addEventListener('paste', function (e) {
        this.handlePaste(e);
      }.bind(this)); // use user-provided render function if given, otherwise just use the default

      this.render = this.options.render ? this.options.render.bind(this) : this.render.bind(this);
      this.getItemValue = this.options.getItemValue ? this.options.getItemValue.bind(this) : this.getItemValue.bind(this);
      return this;
    };

    Suggestions.prototype.handleKeyUp = function (keyCode) {
      // 40 - DOWN
      // 38 - UP
      // 27 - ESC
      // 13 - ENTER
      // 9 - TAB
      if (keyCode === 40 || keyCode === 38 || keyCode === 27 || keyCode === 13 || keyCode === 9) return;
      this.handleInputChange(this.el.value);
    };

    Suggestions.prototype.handleKeyDown = function (e) {
      switch (e.keyCode) {
        case 13: // ENTER

        case 9:
          // TAB
          if (!this.list.isEmpty()) {
            if (this.list.isVisible()) {
              e.preventDefault();
            }

            this.value(this.list.items[this.list.active].original);
            this.list.hide();
          }

          break;

        case 27:
          // ESC
          if (!this.list.isEmpty()) this.list.hide();
          break;

        case 38:
          // UP
          this.list.previous();
          break;

        case 40:
          // DOWN
          this.list.next();
          break;
      }
    };

    Suggestions.prototype.handleBlur = function () {
      if (!this.list.selectingListItem && this.options.hideOnBlur) {
        this.list.hide();
      }
    };

    Suggestions.prototype.handlePaste = function (e) {
      if (e.clipboardData) {
        this.handleInputChange(e.clipboardData.getData('Text'));
      } else {
        var self = this;
        setTimeout(function () {
          self.handleInputChange(e.target.value);
        }, 100);
      }
    };

    Suggestions.prototype.handleInputChange = function (query) {
      this.query = this.normalize(query);
      this.list.clear();

      if (this.query.length < this.options.minLength) {
        this.list.draw();
        return;
      }

      this.getCandidates(function (data) {
        for (var i = 0; i < data.length; i++) {
          this.list.add(data[i]);
          if (i === this.options.limit - 1) break;
        }

        this.list.draw();
      }.bind(this));
    };

    Suggestions.prototype.handleFocus = function () {
      if (!this.list.isEmpty()) this.list.show();
      this.list.selectingListItem = false;
    };
    /**
     * Update data previously passed
     *
     * @param {Array} revisedData
     */


    Suggestions.prototype.update = function (revisedData) {
      this.data = revisedData;
      this.handleKeyUp();
    };
    /**
     * Clears data
     */


    Suggestions.prototype.clear = function () {
      this.data = [];
      this.list.clear();
    };
    /**
     * Normalize the results list and input value for matching
     *
     * @param {String} value
     * @return {String}
     */


    Suggestions.prototype.normalize = function (value) {
      value = value.toLowerCase();
      return value;
    };
    /**
     * Evaluates whether an array item qualifies as a match with the current query
     *
     * @param {String} candidate a possible item from the array passed
     * @param {String} query the current query
     * @return {Boolean}
     */


    Suggestions.prototype.match = function (candidate, query) {
      return candidate.indexOf(query) > -1;
    };

    Suggestions.prototype.value = function (value) {
      this.selected = value;
      this.el.value = this.getItemValue(value);

      if (document.createEvent) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent('change', true, false);
        this.el.dispatchEvent(e);
      } else {
        this.el.fireEvent('onchange');
      }
    };

    Suggestions.prototype.getCandidates = function (callback) {
      var options = {
        pre: '<strong>',
        post: '</strong>',
        extract: function (d) {
          return this.getItemValue(d);
        }.bind(this)
      };
      var results;

      if (this.options.filter) {
        results = fuzzy.filter(this.query, this.data, options);
        results = results.map(function (item) {
          return {
            original: item.original,
            string: this.render(item.original, item.string)
          };
        }.bind(this));
      } else {
        results = this.data.map(function (d) {
          var renderedString = this.render(d);
          return {
            original: d,
            string: renderedString
          };
        }.bind(this));
      }

      callback(results);
    };
    /**
     * For a given item in the data array, return what should be used as the candidate string
     *
     * @param {Object|String} item an item from the data array
     * @return {String} item
     */


    Suggestions.prototype.getItemValue = function (item) {
      return item;
    };
    /**
     * For a given item in the data array, return a string of html that should be rendered in the dropdown
     * @param {Object|String} item an item from the data array
     * @param {String} sourceFormatting a string that has pre-formatted html that should be passed directly through the render function 
     * @return {String} html
     */


    Suggestions.prototype.render = function (item, sourceFormatting) {
      if (sourceFormatting) {
        // use existing formatting on the source string
        return sourceFormatting;
      }

      var boldString = item.original ? this.getItemValue(item.original) : this.getItemValue(item);
      var indexString = this.normalize(boldString);
      var indexOfQuery = indexString.lastIndexOf(this.query);

      while (indexOfQuery > -1) {
        var endIndexOfQuery = indexOfQuery + this.query.length;
        boldString = boldString.slice(0, indexOfQuery) + '<strong>' + boldString.slice(indexOfQuery, endIndexOfQuery) + '</strong>' + boldString.slice(endIndexOfQuery);
        indexOfQuery = indexString.slice(0, indexOfQuery).lastIndexOf(this.query);
      }

      return boldString;
    };
    /**
     * Render an custom error message in the suggestions list
     * @param {String} msg An html string to render as an error message
     */


    Suggestions.prototype.renderError = function (msg) {
      this.list.drawError(msg);
    };

    module.exports = Suggestions;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./node_modules/xtend/immutable.js":
  /*!*****************************************!*\
    !*** ./node_modules/xtend/immutable.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesXtendImmutableJs(module, exports) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function extend() {
      var target = {};

      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    }
    /***/

  },

  /***/
  "./src/app/pages/findplace/findplace-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/findplace/findplace-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FindplacePageRoutingModule */

  /***/
  function srcAppPagesFindplaceFindplaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindplacePageRoutingModule", function () {
      return FindplacePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _findplace_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./findplace.page */
    "./src/app/pages/findplace/findplace.page.ts");

    var routes = [{
      path: '',
      component: _findplace_page__WEBPACK_IMPORTED_MODULE_3__["FindplacePage"]
    }];

    var FindplacePageRoutingModule = function FindplacePageRoutingModule() {
      _classCallCheck(this, FindplacePageRoutingModule);
    };

    FindplacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FindplacePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/findplace/findplace.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/findplace/findplace.module.ts ***!
    \*****************************************************/

  /*! exports provided: FindplacePageModule */

  /***/
  function srcAppPagesFindplaceFindplaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindplacePageModule", function () {
      return FindplacePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _findplace_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./findplace-routing.module */
    "./src/app/pages/findplace/findplace-routing.module.ts");
    /* harmony import */


    var _findplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./findplace.page */
    "./src/app/pages/findplace/findplace.page.ts");
    /* harmony import */


    var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mapbox-gl */
    "./node_modules/ngx-mapbox-gl/__ivy_ngcc__/fesm2015/ngx-mapbox-gl.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var FindplacePageModule = function FindplacePageModule() {
      _classCallCheck(this, FindplacePageModule);
    };

    FindplacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _findplace_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindplacePageRoutingModule"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__["NgxMapboxGLModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      declarations: [_findplace_page__WEBPACK_IMPORTED_MODULE_6__["FindplacePage"]]
    })], FindplacePageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-findplace-findplace-module-es5.js.map