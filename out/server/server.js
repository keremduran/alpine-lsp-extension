"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.thenable = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function thenable(value) {
      return value && func(value.then);
    }
    exports2.thenable = thenable;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = require_is2();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
    Emitter._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column: while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues || (exports2.TraceValues = TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options?.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection2, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    var ral_1 = require_ral();
    exports2.RAL = ral_1.default;
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.createServerSocketTransport = exports2.createClientSocketTransport = exports2.createServerPipeTransport = exports2.createClientPipeTransport = exports2.generateRandomPipeName = exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var path2 = require("path");
    var os2 = require("os");
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path2.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path2.join(os2.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports2.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "node_modules/vscode-jsonrpc/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main();
  }
});

// node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-languageserver-types/lib/umd/main.js"(exports2, module2) {
    (function(factory) {
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        var v = factory(require, exports2);
        if (v !== void 0) module2.exports = v;
      } else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
      }
    })(function(require2, exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.TextDocument = exports3.EOL = exports3.WorkspaceFolder = exports3.InlineCompletionContext = exports3.SelectedCompletionInfo = exports3.InlineCompletionTriggerKind = exports3.InlineCompletionList = exports3.InlineCompletionItem = exports3.StringValue = exports3.InlayHint = exports3.InlayHintLabelPart = exports3.InlayHintKind = exports3.InlineValueContext = exports3.InlineValueEvaluatableExpression = exports3.InlineValueVariableLookup = exports3.InlineValueText = exports3.SemanticTokens = exports3.SemanticTokenModifiers = exports3.SemanticTokenTypes = exports3.SelectionRange = exports3.DocumentLink = exports3.FormattingOptions = exports3.CodeLens = exports3.CodeAction = exports3.CodeActionContext = exports3.CodeActionTriggerKind = exports3.CodeActionKind = exports3.DocumentSymbol = exports3.WorkspaceSymbol = exports3.SymbolInformation = exports3.SymbolTag = exports3.SymbolKind = exports3.DocumentHighlight = exports3.DocumentHighlightKind = exports3.SignatureInformation = exports3.ParameterInformation = exports3.Hover = exports3.MarkedString = exports3.CompletionList = exports3.CompletionItem = exports3.CompletionItemLabelDetails = exports3.InsertTextMode = exports3.InsertReplaceEdit = exports3.CompletionItemTag = exports3.InsertTextFormat = exports3.CompletionItemKind = exports3.MarkupContent = exports3.MarkupKind = exports3.TextDocumentItem = exports3.OptionalVersionedTextDocumentIdentifier = exports3.VersionedTextDocumentIdentifier = exports3.TextDocumentIdentifier = exports3.WorkspaceChange = exports3.WorkspaceEdit = exports3.DeleteFile = exports3.RenameFile = exports3.CreateFile = exports3.TextDocumentEdit = exports3.AnnotatedTextEdit = exports3.ChangeAnnotationIdentifier = exports3.ChangeAnnotation = exports3.TextEdit = exports3.Command = exports3.Diagnostic = exports3.CodeDescription = exports3.DiagnosticTag = exports3.DiagnosticSeverity = exports3.DiagnosticRelatedInformation = exports3.FoldingRange = exports3.FoldingRangeKind = exports3.ColorPresentation = exports3.ColorInformation = exports3.Color = exports3.LocationLink = exports3.Location = exports3.Range = exports3.Position = exports3.uinteger = exports3.integer = exports3.URI = exports3.DocumentUri = void 0;
      var DocumentUri;
      (function(DocumentUri2) {
        function is(value) {
          return typeof value === "string";
        }
        DocumentUri2.is = is;
      })(DocumentUri || (exports3.DocumentUri = DocumentUri = {}));
      var URI;
      (function(URI2) {
        function is(value) {
          return typeof value === "string";
        }
        URI2.is = is;
      })(URI || (exports3.URI = URI = {}));
      var integer;
      (function(integer2) {
        integer2.MIN_VALUE = -2147483648;
        integer2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
        }
        integer2.is = is;
      })(integer || (exports3.integer = integer = {}));
      var uinteger;
      (function(uinteger2) {
        uinteger2.MIN_VALUE = 0;
        uinteger2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
        }
        uinteger2.is = is;
      })(uinteger || (exports3.uinteger = uinteger = {}));
      var Position2;
      (function(Position3) {
        function create(line, character) {
          if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
          }
          if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
          }
          return { line, character };
        }
        Position3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position3.is = is;
      })(Position2 || (exports3.Position = Position2 = {}));
      var Range2;
      (function(Range3) {
        function create(one, two, three, four) {
          if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position2.create(one, two), end: Position2.create(three, four) };
          } else if (Position2.is(one) && Position2.is(two)) {
            return { start: one, end: two };
          } else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
          }
        }
        Range3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.start) && Position2.is(candidate.end);
        }
        Range3.is = is;
      })(Range2 || (exports3.Range = Range2 = {}));
      var Location2;
      (function(Location3) {
        function create(uri, range) {
          return { uri, range };
        }
        Location3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location3.is = is;
      })(Location2 || (exports3.Location = Location2 = {}));
      var LocationLink;
      (function(LocationLink2) {
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
          return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
        }
        LocationLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range2.is(candidate.targetSelectionRange) && (Range2.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink2.is = is;
      })(LocationLink || (exports3.LocationLink = LocationLink = {}));
      var Color;
      (function(Color2) {
        function create(red, green, blue, alpha) {
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        Color2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color2.is = is;
      })(Color || (exports3.Color = Color = {}));
      var ColorInformation;
      (function(ColorInformation2) {
        function create(range, color) {
          return {
            range,
            color
          };
        }
        ColorInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation2.is = is;
      })(ColorInformation || (exports3.ColorInformation = ColorInformation = {}));
      var ColorPresentation;
      (function(ColorPresentation2) {
        function create(label, textEdit, additionalTextEdits) {
          return {
            label,
            textEdit,
            additionalTextEdits
          };
        }
        ColorPresentation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation2.is = is;
      })(ColorPresentation || (exports3.ColorPresentation = ColorPresentation = {}));
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2.Comment = "comment";
        FoldingRangeKind2.Imports = "imports";
        FoldingRangeKind2.Region = "region";
      })(FoldingRangeKind || (exports3.FoldingRangeKind = FoldingRangeKind = {}));
      var FoldingRange;
      (function(FoldingRange2) {
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
          var result = {
            startLine,
            endLine
          };
          if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
          }
          if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
          }
          if (Is.defined(kind)) {
            result.kind = kind;
          }
          if (Is.defined(collapsedText)) {
            result.collapsedText = collapsedText;
          }
          return result;
        }
        FoldingRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange2.is = is;
      })(FoldingRange || (exports3.FoldingRange = FoldingRange = {}));
      var DiagnosticRelatedInformation;
      (function(DiagnosticRelatedInformation2) {
        function create(location, message) {
          return {
            location,
            message
          };
        }
        DiagnosticRelatedInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Location2.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation2.is = is;
      })(DiagnosticRelatedInformation || (exports3.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
      var DiagnosticSeverity2;
      (function(DiagnosticSeverity3) {
        DiagnosticSeverity3.Error = 1;
        DiagnosticSeverity3.Warning = 2;
        DiagnosticSeverity3.Information = 3;
        DiagnosticSeverity3.Hint = 4;
      })(DiagnosticSeverity2 || (exports3.DiagnosticSeverity = DiagnosticSeverity2 = {}));
      var DiagnosticTag;
      (function(DiagnosticTag2) {
        DiagnosticTag2.Unnecessary = 1;
        DiagnosticTag2.Deprecated = 2;
      })(DiagnosticTag || (exports3.DiagnosticTag = DiagnosticTag = {}));
      var CodeDescription;
      (function(CodeDescription2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription2.is = is;
      })(CodeDescription || (exports3.CodeDescription = CodeDescription = {}));
      var Diagnostic2;
      (function(Diagnostic3) {
        function create(range, message, severity, code, source, relatedInformation) {
          var result = { range, message };
          if (Is.defined(severity)) {
            result.severity = severity;
          }
          if (Is.defined(code)) {
            result.code = code;
          }
          if (Is.defined(source)) {
            result.source = source;
          }
          if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
          }
          return result;
        }
        Diagnostic3.create = create;
        function is(value) {
          var _a;
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic3.is = is;
      })(Diagnostic2 || (exports3.Diagnostic = Diagnostic2 = {}));
      var Command;
      (function(Command2) {
        function create(title, command) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var result = { title, command };
          if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
          }
          return result;
        }
        Command2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command2.is = is;
      })(Command || (exports3.Command = Command = {}));
      var TextEdit;
      (function(TextEdit2) {
        function replace(range, newText) {
          return { range, newText };
        }
        TextEdit2.replace = replace;
        function insert(position, newText) {
          return { range: { start: position, end: position }, newText };
        }
        TextEdit2.insert = insert;
        function del(range) {
          return { range, newText: "" };
        }
        TextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range2.is(candidate.range);
        }
        TextEdit2.is = is;
      })(TextEdit || (exports3.TextEdit = TextEdit = {}));
      var ChangeAnnotation;
      (function(ChangeAnnotation2) {
        function create(label, needsConfirmation, description) {
          var result = { label };
          if (needsConfirmation !== void 0) {
            result.needsConfirmation = needsConfirmation;
          }
          if (description !== void 0) {
            result.description = description;
          }
          return result;
        }
        ChangeAnnotation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        ChangeAnnotation2.is = is;
      })(ChangeAnnotation || (exports3.ChangeAnnotation = ChangeAnnotation = {}));
      var ChangeAnnotationIdentifier;
      (function(ChangeAnnotationIdentifier2) {
        function is(value) {
          var candidate = value;
          return Is.string(candidate);
        }
        ChangeAnnotationIdentifier2.is = is;
      })(ChangeAnnotationIdentifier || (exports3.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
      var AnnotatedTextEdit;
      (function(AnnotatedTextEdit2) {
        function replace(range, newText, annotation) {
          return { range, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.replace = replace;
        function insert(position, newText, annotation) {
          return { range: { start: position, end: position }, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.insert = insert;
        function del(range, annotation) {
          return { range, newText: "", annotationId: annotation };
        }
        AnnotatedTextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit2.is = is;
      })(AnnotatedTextEdit || (exports3.AnnotatedTextEdit = AnnotatedTextEdit = {}));
      var TextDocumentEdit;
      (function(TextDocumentEdit2) {
        function create(textDocument, edits) {
          return { textDocument, edits };
        }
        TextDocumentEdit2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit2.is = is;
      })(TextDocumentEdit || (exports3.TextDocumentEdit = TextDocumentEdit = {}));
      var CreateFile;
      (function(CreateFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "create",
            uri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        CreateFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile2.is = is;
      })(CreateFile || (exports3.CreateFile = CreateFile = {}));
      var RenameFile;
      (function(RenameFile2) {
        function create(oldUri, newUri, options, annotation) {
          var result = {
            kind: "rename",
            oldUri,
            newUri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        RenameFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile2.is = is;
      })(RenameFile || (exports3.RenameFile = RenameFile = {}));
      var DeleteFile;
      (function(DeleteFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "delete",
            uri
          };
          if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        DeleteFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile2.is = is;
      })(DeleteFile || (exports3.DeleteFile = DeleteFile = {}));
      var WorkspaceEdit;
      (function(WorkspaceEdit2) {
        function is(value) {
          var candidate = value;
          return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if (Is.string(change.kind)) {
              return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
            } else {
              return TextDocumentEdit.is(change);
            }
          }));
        }
        WorkspaceEdit2.is = is;
      })(WorkspaceEdit || (exports3.WorkspaceEdit = WorkspaceEdit = {}));
      var TextEditChangeImpl = (
        /** @class */
        (function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        })()
      );
      var ChangeAnnotations = (
        /** @class */
        (function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        })()
      );
      var WorkspaceChange = (
        /** @class */
        (function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = /* @__PURE__ */ Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        })()
      );
      exports3.WorkspaceChange = WorkspaceChange;
      var TextDocumentIdentifier;
      (function(TextDocumentIdentifier2) {
        function create(uri) {
          return { uri };
        }
        TextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier2.is = is;
      })(TextDocumentIdentifier || (exports3.TextDocumentIdentifier = TextDocumentIdentifier = {}));
      var VersionedTextDocumentIdentifier;
      (function(VersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        VersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier2.is = is;
      })(VersionedTextDocumentIdentifier || (exports3.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
      var OptionalVersionedTextDocumentIdentifier;
      (function(OptionalVersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        OptionalVersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier2.is = is;
      })(OptionalVersionedTextDocumentIdentifier || (exports3.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
      var TextDocumentItem;
      (function(TextDocumentItem2) {
        function create(uri, languageId, version, text) {
          return { uri, languageId, version, text };
        }
        TextDocumentItem2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem2.is = is;
      })(TextDocumentItem || (exports3.TextDocumentItem = TextDocumentItem = {}));
      var MarkupKind2;
      (function(MarkupKind3) {
        MarkupKind3.PlainText = "plaintext";
        MarkupKind3.Markdown = "markdown";
        function is(value) {
          var candidate = value;
          return candidate === MarkupKind3.PlainText || candidate === MarkupKind3.Markdown;
        }
        MarkupKind3.is = is;
      })(MarkupKind2 || (exports3.MarkupKind = MarkupKind2 = {}));
      var MarkupContent;
      (function(MarkupContent2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(value) && MarkupKind2.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent2.is = is;
      })(MarkupContent || (exports3.MarkupContent = MarkupContent = {}));
      var CompletionItemKind2;
      (function(CompletionItemKind3) {
        CompletionItemKind3.Text = 1;
        CompletionItemKind3.Method = 2;
        CompletionItemKind3.Function = 3;
        CompletionItemKind3.Constructor = 4;
        CompletionItemKind3.Field = 5;
        CompletionItemKind3.Variable = 6;
        CompletionItemKind3.Class = 7;
        CompletionItemKind3.Interface = 8;
        CompletionItemKind3.Module = 9;
        CompletionItemKind3.Property = 10;
        CompletionItemKind3.Unit = 11;
        CompletionItemKind3.Value = 12;
        CompletionItemKind3.Enum = 13;
        CompletionItemKind3.Keyword = 14;
        CompletionItemKind3.Snippet = 15;
        CompletionItemKind3.Color = 16;
        CompletionItemKind3.File = 17;
        CompletionItemKind3.Reference = 18;
        CompletionItemKind3.Folder = 19;
        CompletionItemKind3.EnumMember = 20;
        CompletionItemKind3.Constant = 21;
        CompletionItemKind3.Struct = 22;
        CompletionItemKind3.Event = 23;
        CompletionItemKind3.Operator = 24;
        CompletionItemKind3.TypeParameter = 25;
      })(CompletionItemKind2 || (exports3.CompletionItemKind = CompletionItemKind2 = {}));
      var InsertTextFormat;
      (function(InsertTextFormat2) {
        InsertTextFormat2.PlainText = 1;
        InsertTextFormat2.Snippet = 2;
      })(InsertTextFormat || (exports3.InsertTextFormat = InsertTextFormat = {}));
      var CompletionItemTag;
      (function(CompletionItemTag2) {
        CompletionItemTag2.Deprecated = 1;
      })(CompletionItemTag || (exports3.CompletionItemTag = CompletionItemTag = {}));
      var InsertReplaceEdit;
      (function(InsertReplaceEdit2) {
        function create(newText, insert, replace) {
          return { newText, insert, replace };
        }
        InsertReplaceEdit2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.newText) && Range2.is(candidate.insert) && Range2.is(candidate.replace);
        }
        InsertReplaceEdit2.is = is;
      })(InsertReplaceEdit || (exports3.InsertReplaceEdit = InsertReplaceEdit = {}));
      var InsertTextMode;
      (function(InsertTextMode2) {
        InsertTextMode2.asIs = 1;
        InsertTextMode2.adjustIndentation = 2;
      })(InsertTextMode || (exports3.InsertTextMode = InsertTextMode = {}));
      var CompletionItemLabelDetails;
      (function(CompletionItemLabelDetails2) {
        function is(value) {
          var candidate = value;
          return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        CompletionItemLabelDetails2.is = is;
      })(CompletionItemLabelDetails || (exports3.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
      var CompletionItem2;
      (function(CompletionItem3) {
        function create(label) {
          return { label };
        }
        CompletionItem3.create = create;
      })(CompletionItem2 || (exports3.CompletionItem = CompletionItem2 = {}));
      var CompletionList2;
      (function(CompletionList3) {
        function create(items, isIncomplete) {
          return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList3.create = create;
      })(CompletionList2 || (exports3.CompletionList = CompletionList2 = {}));
      var MarkedString;
      (function(MarkedString2) {
        function fromPlainText(plainText) {
          return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
        MarkedString2.fromPlainText = fromPlainText;
        function is(value) {
          var candidate = value;
          return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString2.is = is;
      })(MarkedString || (exports3.MarkedString = MarkedString = {}));
      var Hover2;
      (function(Hover3) {
        function is(value) {
          var candidate = value;
          return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range2.is(value.range));
        }
        Hover3.is = is;
      })(Hover2 || (exports3.Hover = Hover2 = {}));
      var ParameterInformation;
      (function(ParameterInformation2) {
        function create(label, documentation) {
          return documentation ? { label, documentation } : { label };
        }
        ParameterInformation2.create = create;
      })(ParameterInformation || (exports3.ParameterInformation = ParameterInformation = {}));
      var SignatureInformation;
      (function(SignatureInformation2) {
        function create(label, documentation) {
          var parameters = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
          }
          var result = { label };
          if (Is.defined(documentation)) {
            result.documentation = documentation;
          }
          if (Is.defined(parameters)) {
            result.parameters = parameters;
          } else {
            result.parameters = [];
          }
          return result;
        }
        SignatureInformation2.create = create;
      })(SignatureInformation || (exports3.SignatureInformation = SignatureInformation = {}));
      var DocumentHighlightKind;
      (function(DocumentHighlightKind2) {
        DocumentHighlightKind2.Text = 1;
        DocumentHighlightKind2.Read = 2;
        DocumentHighlightKind2.Write = 3;
      })(DocumentHighlightKind || (exports3.DocumentHighlightKind = DocumentHighlightKind = {}));
      var DocumentHighlight;
      (function(DocumentHighlight2) {
        function create(range, kind) {
          var result = { range };
          if (Is.number(kind)) {
            result.kind = kind;
          }
          return result;
        }
        DocumentHighlight2.create = create;
      })(DocumentHighlight || (exports3.DocumentHighlight = DocumentHighlight = {}));
      var SymbolKind;
      (function(SymbolKind2) {
        SymbolKind2.File = 1;
        SymbolKind2.Module = 2;
        SymbolKind2.Namespace = 3;
        SymbolKind2.Package = 4;
        SymbolKind2.Class = 5;
        SymbolKind2.Method = 6;
        SymbolKind2.Property = 7;
        SymbolKind2.Field = 8;
        SymbolKind2.Constructor = 9;
        SymbolKind2.Enum = 10;
        SymbolKind2.Interface = 11;
        SymbolKind2.Function = 12;
        SymbolKind2.Variable = 13;
        SymbolKind2.Constant = 14;
        SymbolKind2.String = 15;
        SymbolKind2.Number = 16;
        SymbolKind2.Boolean = 17;
        SymbolKind2.Array = 18;
        SymbolKind2.Object = 19;
        SymbolKind2.Key = 20;
        SymbolKind2.Null = 21;
        SymbolKind2.EnumMember = 22;
        SymbolKind2.Struct = 23;
        SymbolKind2.Event = 24;
        SymbolKind2.Operator = 25;
        SymbolKind2.TypeParameter = 26;
      })(SymbolKind || (exports3.SymbolKind = SymbolKind = {}));
      var SymbolTag;
      (function(SymbolTag2) {
        SymbolTag2.Deprecated = 1;
      })(SymbolTag || (exports3.SymbolTag = SymbolTag = {}));
      var SymbolInformation;
      (function(SymbolInformation2) {
        function create(name, kind, range, uri, containerName) {
          var result = {
            name,
            kind,
            location: { uri, range }
          };
          if (containerName) {
            result.containerName = containerName;
          }
          return result;
        }
        SymbolInformation2.create = create;
      })(SymbolInformation || (exports3.SymbolInformation = SymbolInformation = {}));
      var WorkspaceSymbol;
      (function(WorkspaceSymbol2) {
        function create(name, kind, uri, range) {
          return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
        }
        WorkspaceSymbol2.create = create;
      })(WorkspaceSymbol || (exports3.WorkspaceSymbol = WorkspaceSymbol = {}));
      var DocumentSymbol;
      (function(DocumentSymbol2) {
        function create(name, detail, kind, range, selectionRange, children) {
          var result = {
            name,
            detail,
            kind,
            range,
            selectionRange
          };
          if (children !== void 0) {
            result.children = children;
          }
          return result;
        }
        DocumentSymbol2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range2.is(candidate.range) && Range2.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
        }
        DocumentSymbol2.is = is;
      })(DocumentSymbol || (exports3.DocumentSymbol = DocumentSymbol = {}));
      var CodeActionKind;
      (function(CodeActionKind2) {
        CodeActionKind2.Empty = "";
        CodeActionKind2.QuickFix = "quickfix";
        CodeActionKind2.Refactor = "refactor";
        CodeActionKind2.RefactorExtract = "refactor.extract";
        CodeActionKind2.RefactorInline = "refactor.inline";
        CodeActionKind2.RefactorRewrite = "refactor.rewrite";
        CodeActionKind2.Source = "source";
        CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
        CodeActionKind2.SourceFixAll = "source.fixAll";
      })(CodeActionKind || (exports3.CodeActionKind = CodeActionKind = {}));
      var CodeActionTriggerKind;
      (function(CodeActionTriggerKind2) {
        CodeActionTriggerKind2.Invoked = 1;
        CodeActionTriggerKind2.Automatic = 2;
      })(CodeActionTriggerKind || (exports3.CodeActionTriggerKind = CodeActionTriggerKind = {}));
      var CodeActionContext;
      (function(CodeActionContext2) {
        function create(diagnostics, only, triggerKind) {
          var result = { diagnostics };
          if (only !== void 0 && only !== null) {
            result.only = only;
          }
          if (triggerKind !== void 0 && triggerKind !== null) {
            result.triggerKind = triggerKind;
          }
          return result;
        }
        CodeActionContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic2.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext2.is = is;
      })(CodeActionContext || (exports3.CodeActionContext = CodeActionContext = {}));
      var CodeAction;
      (function(CodeAction2) {
        function create(title, kindOrCommandOrEdit, kind) {
          var result = { title };
          var checkKind = true;
          if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
          } else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
          } else {
            result.edit = kindOrCommandOrEdit;
          }
          if (checkKind && kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        CodeAction2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic2.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction2.is = is;
      })(CodeAction || (exports3.CodeAction = CodeAction = {}));
      var CodeLens;
      (function(CodeLens2) {
        function create(range, data) {
          var result = { range };
          if (Is.defined(data)) {
            result.data = data;
          }
          return result;
        }
        CodeLens2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens2.is = is;
      })(CodeLens || (exports3.CodeLens = CodeLens = {}));
      var FormattingOptions;
      (function(FormattingOptions2) {
        function create(tabSize, insertSpaces) {
          return { tabSize, insertSpaces };
        }
        FormattingOptions2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions2.is = is;
      })(FormattingOptions || (exports3.FormattingOptions = FormattingOptions = {}));
      var DocumentLink;
      (function(DocumentLink2) {
        function create(range, target, data) {
          return { range, target, data };
        }
        DocumentLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink2.is = is;
      })(DocumentLink || (exports3.DocumentLink = DocumentLink = {}));
      var SelectionRange;
      (function(SelectionRange2) {
        function create(range, parent) {
          return { range, parent };
        }
        SelectionRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
        }
        SelectionRange2.is = is;
      })(SelectionRange || (exports3.SelectionRange = SelectionRange = {}));
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
        SemanticTokenTypes2["decorator"] = "decorator";
      })(SemanticTokenTypes || (exports3.SemanticTokenTypes = SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers || (exports3.SemanticTokenModifiers = SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens || (exports3.SemanticTokens = SemanticTokens = {}));
      var InlineValueText;
      (function(InlineValueText2) {
        function create(range, text) {
          return { range, text };
        }
        InlineValueText2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText2.is = is;
      })(InlineValueText || (exports3.InlineValueText = InlineValueText = {}));
      var InlineValueVariableLookup;
      (function(InlineValueVariableLookup2) {
        function create(range, variableName, caseSensitiveLookup) {
          return { range, variableName, caseSensitiveLookup };
        }
        InlineValueVariableLookup2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
        }
        InlineValueVariableLookup2.is = is;
      })(InlineValueVariableLookup || (exports3.InlineValueVariableLookup = InlineValueVariableLookup = {}));
      var InlineValueEvaluatableExpression;
      (function(InlineValueEvaluatableExpression2) {
        function create(range, expression) {
          return { range, expression };
        }
        InlineValueEvaluatableExpression2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
        }
        InlineValueEvaluatableExpression2.is = is;
      })(InlineValueEvaluatableExpression || (exports3.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
      var InlineValueContext;
      (function(InlineValueContext2) {
        function create(frameId, stoppedLocation) {
          return { frameId, stoppedLocation };
        }
        InlineValueContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(value.stoppedLocation);
        }
        InlineValueContext2.is = is;
      })(InlineValueContext || (exports3.InlineValueContext = InlineValueContext = {}));
      var InlayHintKind;
      (function(InlayHintKind2) {
        InlayHintKind2.Type = 1;
        InlayHintKind2.Parameter = 2;
        function is(value) {
          return value === 1 || value === 2;
        }
        InlayHintKind2.is = is;
      })(InlayHintKind || (exports3.InlayHintKind = InlayHintKind = {}));
      var InlayHintLabelPart;
      (function(InlayHintLabelPart2) {
        function create(value) {
          return { value };
        }
        InlayHintLabelPart2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location2.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
        }
        InlayHintLabelPart2.is = is;
      })(InlayHintLabelPart || (exports3.InlayHintLabelPart = InlayHintLabelPart = {}));
      var InlayHint;
      (function(InlayHint2) {
        function create(position, label, kind) {
          var result = { position, label };
          if (kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        InlayHint2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
        }
        InlayHint2.is = is;
      })(InlayHint || (exports3.InlayHint = InlayHint = {}));
      var StringValue;
      (function(StringValue2) {
        function createSnippet(value) {
          return { kind: "snippet", value };
        }
        StringValue2.createSnippet = createSnippet;
      })(StringValue || (exports3.StringValue = StringValue = {}));
      var InlineCompletionItem;
      (function(InlineCompletionItem2) {
        function create(insertText, filterText, range, command) {
          return { insertText, filterText, range, command };
        }
        InlineCompletionItem2.create = create;
      })(InlineCompletionItem || (exports3.InlineCompletionItem = InlineCompletionItem = {}));
      var InlineCompletionList;
      (function(InlineCompletionList2) {
        function create(items) {
          return { items };
        }
        InlineCompletionList2.create = create;
      })(InlineCompletionList || (exports3.InlineCompletionList = InlineCompletionList = {}));
      var InlineCompletionTriggerKind;
      (function(InlineCompletionTriggerKind2) {
        InlineCompletionTriggerKind2.Invoked = 0;
        InlineCompletionTriggerKind2.Automatic = 1;
      })(InlineCompletionTriggerKind || (exports3.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
      var SelectedCompletionInfo;
      (function(SelectedCompletionInfo2) {
        function create(range, text) {
          return { range, text };
        }
        SelectedCompletionInfo2.create = create;
      })(SelectedCompletionInfo || (exports3.SelectedCompletionInfo = SelectedCompletionInfo = {}));
      var InlineCompletionContext;
      (function(InlineCompletionContext2) {
        function create(triggerKind, selectedCompletionInfo) {
          return { triggerKind, selectedCompletionInfo };
        }
        InlineCompletionContext2.create = create;
      })(InlineCompletionContext || (exports3.InlineCompletionContext = InlineCompletionContext = {}));
      var WorkspaceFolder;
      (function(WorkspaceFolder2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder2.is = is;
      })(WorkspaceFolder || (exports3.WorkspaceFolder = WorkspaceFolder = {}));
      exports3.EOL = ["\n", "\r\n", "\r"];
      var TextDocument2;
      (function(TextDocument3) {
        function create(uri, languageId, version, content) {
          return new FullTextDocument2(uri, languageId, version, content);
        }
        TextDocument3.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument3.is = is;
        function applyEdits(document, edits) {
          var text = document.getText();
          var sortedEdits = mergeSort2(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
              return a.range.start.character - b.range.start.character;
            }
            return diff;
          });
          var lastModifiedOffset = text.length;
          for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
              text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            } else {
              throw new Error("Overlapping edit");
            }
            lastModifiedOffset = startOffset;
          }
          return text;
        }
        TextDocument3.applyEdits = applyEdits;
        function mergeSort2(data, compare) {
          if (data.length <= 1) {
            return data;
          }
          var p = data.length / 2 | 0;
          var left = data.slice(0, p);
          var right = data.slice(p);
          mergeSort2(left, compare);
          mergeSort2(right, compare);
          var leftIdx = 0;
          var rightIdx = 0;
          var i = 0;
          while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
              data[i++] = left[leftIdx++];
            } else {
              data[i++] = right[rightIdx++];
            }
          }
          while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
          }
          while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
          }
          return data;
        }
      })(TextDocument2 || (exports3.TextDocument = TextDocument2 = {}));
      var FullTextDocument2 = (
        /** @class */
        (function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position2.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position2.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        })()
      );
      var Is;
      (function(Is2) {
        var toString = Object.prototype.toString;
        function defined(value) {
          return typeof value !== "undefined";
        }
        Is2.defined = defined;
        function undefined2(value) {
          return typeof value === "undefined";
        }
        Is2.undefined = undefined2;
        function boolean(value) {
          return value === true || value === false;
        }
        Is2.boolean = boolean;
        function string(value) {
          return toString.call(value) === "[object String]";
        }
        Is2.string = string;
        function number(value) {
          return toString.call(value) === "[object Number]";
        }
        Is2.number = number;
        function numberRange(value, min, max) {
          return toString.call(value) === "[object Number]" && min <= value && value <= max;
        }
        Is2.numberRange = numberRange;
        function integer2(value) {
          return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
        }
        Is2.integer = integer2;
        function uinteger2(value) {
          return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
        }
        Is2.uinteger = uinteger2;
        function func(value) {
          return toString.call(value) === "[object Function]";
        }
        Is2.func = func;
        function objectLiteral(value) {
          return value !== null && typeof value === "object";
        }
        Is2.objectLiteral = objectLiteral;
        function typedArray(value, check) {
          return Array.isArray(value) && value.every(check);
        }
        Is2.typedArray = typedArray;
      })(Is || (Is = {}));
    });
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectLiteral = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports2.objectLiteral = objectLiteral;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = void 0;
    exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
    })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports2.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_main(), exports2);
    __exportStar(require_main2(), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateUuid = exports2.parse = exports2.isUUID = exports2.v4 = exports2.empty = void 0;
    var ValueUUID = class {
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    V4UUID._timeHighBits = ["8", "9", "a", "b"];
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    exports2.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    exports2.isUUID = isUUID;
    function parse2(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    exports2.parse = parse2;
    function generateUuid() {
      return v4().asHex();
    }
    exports2.generateUuid = generateUuid;
  }
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attachPartialResult = exports2.ProgressFeature = exports2.attachWorkDone = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        let param = {
          kind: "begin",
          title,
          percentage,
          message,
          cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        let param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = arg0;
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    WorkDoneProgressReporterImpl.Instances = /* @__PURE__ */ new Map();
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    exports2.attachWorkDone = attachWorkDone;
    var ProgressFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
    exports2.attachPartialResult = attachPartialResult;
  }
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          let params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          let workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class {
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this._data;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this._data
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TextDocuments2 = class {
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments2;
  }
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    var NotebookDocuments = class {
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.combineFeatures = exports2.combineNotebooksFeatures = exports2.combineLanguagesFeatures = exports2.combineWorkspaceFeatures = exports2.combineWindowFeatures = exports2.combineClientFeatures = exports2.combineTracerFeatures = exports2.combineTelemetryFeatures = exports2.combineConsoleFeatures = exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var UUID = require_uuid();
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      constructor() {
        this._registrations = [];
        this._registered = /* @__PURE__ */ new Set();
      }
      add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = /* @__PURE__ */ new Map();
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        let params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        let params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        let params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
    var TracerImpl = class {
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
    var _NotebooksImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTracerFeatures = combineTracerFeatures;
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineClientFeatures = combineClientFeatures;
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWindowFeatures = combineWindowFeatures;
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      let result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    exports2.combineFeatures = combineFeatures;
    function createConnection2(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      let protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (let remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
    exports2.createConnection = createConnection2;
  }
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveModulePath = exports2.FileSystem = exports2.resolveGlobalYarnPath = exports2.resolveGlobalNodePath = exports2.resolve = exports2.uriToFilePath = void 0;
    var url = require("url");
    var path2 = require("path");
    var fs2 = require("fs");
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      let parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      let segments = parsed.path.split("/");
      for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path2.normalize(segments.join("/"));
    }
    exports2.uriToFilePath = uriToFilePath;
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        let env = process.env;
        let newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs2.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path2.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          let cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          let message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    exports2.resolve = resolve;
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        let prefix2 = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix2}`);
        }
        if (prefix2.length > 0) {
          if (isWindows()) {
            return path2.join(prefix2, "node_modules");
          } else {
            return path2.join(prefix2, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      let options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        let stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
          try {
            let yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path2.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs2.existsSync(__filename.toUpperCase()) || !fs2.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path2.normalize(child).indexOf(path2.normalize(parent)) === 0;
        } else {
          return path2.normalize(child).toLowerCase().indexOf(path2.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path2.isAbsolute(nodePath)) {
          nodePath = path2.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
    exports2.resolveModulePath = resolveModulePath;
  }
});

// node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main3();
  }
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var ic = require_inlineCompletion_proposed();
    __exportStar(require_main3(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures2;
    (function(ProposedFeatures3) {
      ProposedFeatures3.all = {
        __brand: "features",
        languages: ic.InlineCompletionFeature
      };
    })(ProposedFeatures2 || (exports2.ProposedFeatures = ProposedFeatures2 = {}));
  }
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS({
  "node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.Files = void 0;
    var node_util_1 = require("node:util");
    var Is = require_is();
    var server_1 = require_server();
    var fm = require_files();
    var node_1 = require_node2();
    __exportStar(require_node2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          let processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          let args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection2(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    exports2.createConnection = createConnection2;
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          let arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            var args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          let transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          let transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS({
  "node_modules/vscode-languageserver/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main4();
  }
});

// node_modules/parse5/dist/cjs/common/unicode.js
var require_unicode = __commonJS({
  "node_modules/parse5/dist/cjs/common/unicode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SEQUENCES = exports2.CODE_POINTS = exports2.REPLACEMENT_CHARACTER = void 0;
    exports2.isSurrogate = isSurrogate;
    exports2.isSurrogatePair = isSurrogatePair;
    exports2.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
    exports2.isControlCodePoint = isControlCodePoint;
    exports2.isUndefinedCodePoint = isUndefinedCodePoint;
    var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ]);
    exports2.REPLACEMENT_CHARACTER = "\uFFFD";
    var CODE_POINTS;
    (function(CODE_POINTS2) {
      CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
      CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
      CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
      CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
      CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
      CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
      CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
      CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
      CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
      CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
      CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
      CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
      CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
      CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
      CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
      CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
      CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
      CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
      CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
      CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
    })(CODE_POINTS || (exports2.CODE_POINTS = CODE_POINTS = {}));
    exports2.SEQUENCES = {
      DASH_DASH: "--",
      CDATA_START: "[CDATA[",
      DOCTYPE: "doctype",
      SCRIPT: "script",
      PUBLIC: "public",
      SYSTEM: "system"
    };
    function isSurrogate(cp) {
      return cp >= 55296 && cp <= 57343;
    }
    function isSurrogatePair(cp) {
      return cp >= 56320 && cp <= 57343;
    }
    function getSurrogatePairCodePoint(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    }
    function isControlCodePoint(cp) {
      return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
    }
    function isUndefinedCodePoint(cp) {
      return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
    }
  }
});

// node_modules/parse5/dist/cjs/common/error-codes.js
var require_error_codes = __commonJS({
  "node_modules/parse5/dist/cjs/common/error-codes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ERR = void 0;
    var ERR;
    (function(ERR2) {
      ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
      ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
      ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
      ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
      ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
      ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
      ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
      ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
      ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
      ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
      ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
      ERR2["missingEndTagName"] = "missing-end-tag-name";
      ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
      ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
      ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
      ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
      ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
      ERR2["eofBeforeTagName"] = "eof-before-tag-name";
      ERR2["eofInTag"] = "eof-in-tag";
      ERR2["missingAttributeValue"] = "missing-attribute-value";
      ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
      ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
      ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
      ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
      ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
      ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
      ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
      ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
      ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
      ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
      ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
      ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
      ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
      ERR2["eofInDoctype"] = "eof-in-doctype";
      ERR2["nestedComment"] = "nested-comment";
      ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
      ERR2["eofInComment"] = "eof-in-comment";
      ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
      ERR2["eofInCdata"] = "eof-in-cdata";
      ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
      ERR2["nullCharacterReference"] = "null-character-reference";
      ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
      ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
      ERR2["controlCharacterReference"] = "control-character-reference";
      ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
      ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
      ERR2["missingDoctypeName"] = "missing-doctype-name";
      ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
      ERR2["duplicateAttribute"] = "duplicate-attribute";
      ERR2["nonConformingDoctype"] = "non-conforming-doctype";
      ERR2["missingDoctype"] = "missing-doctype";
      ERR2["misplacedDoctype"] = "misplaced-doctype";
      ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
      ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
      ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
      ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
      ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
      ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
      ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
      ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
    })(ERR || (exports2.ERR = ERR = {}));
  }
});

// node_modules/parse5/dist/cjs/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  "node_modules/parse5/dist/cjs/tokenizer/preprocessor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Preprocessor = void 0;
    var unicode_js_1 = require_unicode();
    var error_codes_js_1 = require_error_codes();
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor(handler) {
        this.handler = handler;
        this.html = "";
        this.pos = -1;
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        this.lastErrOffset = -1;
      }
      /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
      get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(code, cpOffset) {
        const { line, col, offset } = this;
        const startCol = col + cpOffset;
        const startOffset = offset + cpOffset;
        return {
          code,
          startLine: line,
          endLine: line,
          startCol,
          endCol: startCol,
          startOffset,
          endOffset: startOffset
        };
      }
      _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
          this.lastErrOffset = this.offset;
          this.handler.onParseError(this.getError(code, 0));
        }
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.html.length - 1) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
            this.pos++;
            this._addGap();
            return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        this._err(error_codes_js_1.ERR.surrogateInInputStream);
        return cp;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        if (this.willDropParsedChunk()) {
          this.html = this.html.substring(this.pos);
          this.lineStartPos -= this.pos;
          this.droppedBufferSize += this.pos;
          this.pos = 0;
          this.lastGapPos = -2;
          this.gapStack.length = 0;
        }
      }
      write(chunk, isLastChunk) {
        if (this.html.length > 0) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
      }
      startsWith(pattern, caseSensitive) {
        if (this.pos + pattern.length > this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return false;
        }
        if (caseSensitive) {
          return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
          const cp = this.html.charCodeAt(this.pos + i) | 32;
          if (cp !== pattern.charCodeAt(i)) {
            return false;
          }
        }
        return true;
      }
      peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        const code = this.html.charCodeAt(pos);
        return code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ? unicode_js_1.CODE_POINTS.LINE_FEED : code;
      }
      advance() {
        this.pos++;
        if (this.isEol) {
          this.isEol = false;
          this.line++;
          this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
          this.isEol = true;
          this.skipNextNewLine = true;
          return unicode_js_1.CODE_POINTS.LINE_FEED;
        }
        if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
          this.isEol = true;
          if (this.skipNextNewLine) {
            this.line--;
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
        }
        this.skipNextNewLine = false;
        if ((0, unicode_js_1.isSurrogate)(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if ((0, unicode_js_1.isControlCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
        } else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.noncharacterInInputStream);
        }
      }
      retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.isEol = false;
      }
    };
    exports2.Preprocessor = Preprocessor;
  }
});

// node_modules/parse5/dist/cjs/common/token.js
var require_token = __commonJS({
  "node_modules/parse5/dist/cjs/common/token.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TokenType = void 0;
    exports2.getTokenAttr = getTokenAttr;
    var TokenType2;
    (function(TokenType3) {
      TokenType3[TokenType3["CHARACTER"] = 0] = "CHARACTER";
      TokenType3[TokenType3["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
      TokenType3[TokenType3["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
      TokenType3[TokenType3["START_TAG"] = 3] = "START_TAG";
      TokenType3[TokenType3["END_TAG"] = 4] = "END_TAG";
      TokenType3[TokenType3["COMMENT"] = 5] = "COMMENT";
      TokenType3[TokenType3["DOCTYPE"] = 6] = "DOCTYPE";
      TokenType3[TokenType3["EOF"] = 7] = "EOF";
      TokenType3[TokenType3["HIBERNATION"] = 8] = "HIBERNATION";
    })(TokenType2 || (exports2.TokenType = TokenType2 = {}));
    function getTokenAttr(token, attrName) {
      for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
          return token.attrs[i].value;
        }
      }
      return null;
    }
  }
});

// node_modules/entities/dist/commonjs/generated/decode-data-html.js
var require_decode_data_html = __commonJS({
  "node_modules/entities/dist/commonjs/generated/decode-data-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.htmlDecodeTree = void 0;
    exports2.htmlDecodeTree = new Uint16Array(
      // prettier-ignore
      /* @__PURE__ */ '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0))
    );
  }
});

// node_modules/entities/dist/commonjs/generated/decode-data-xml.js
var require_decode_data_xml = __commonJS({
  "node_modules/entities/dist/commonjs/generated/decode-data-xml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.xmlDecodeTree = void 0;
    exports2.xmlDecodeTree = new Uint16Array(
      // prettier-ignore
      /* @__PURE__ */ "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0))
    );
  }
});

// node_modules/entities/dist/commonjs/decode-codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/dist/commonjs/decode-codepoint.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromCodePoint = void 0;
    exports2.replaceCodePoint = replaceCodePoint;
    exports2.decodeCodePoint = decodeCodePoint;
    var decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    exports2.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
    (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      let output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function replaceCodePoint(codePoint) {
      var _a2;
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
      }
      return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }
    function decodeCodePoint(codePoint) {
      return (0, exports2.fromCodePoint)(replaceCodePoint(codePoint));
    }
  }
});

// node_modules/entities/dist/commonjs/decode.js
var require_decode = __commonJS({
  "node_modules/entities/dist/commonjs/decode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromCodePoint = exports2.replaceCodePoint = exports2.decodeCodePoint = exports2.xmlDecodeTree = exports2.htmlDecodeTree = exports2.EntityDecoder = exports2.DecodingMode = exports2.BinTrieFlags = void 0;
    exports2.determineBranch = determineBranch;
    exports2.decodeHTML = decodeHTML;
    exports2.decodeHTMLAttribute = decodeHTMLAttribute;
    exports2.decodeHTMLStrict = decodeHTMLStrict;
    exports2.decodeXML = decodeXML;
    var decode_data_html_js_1 = require_decode_data_html();
    var decode_data_xml_js_1 = require_decode_data_xml();
    var decode_codepoint_js_1 = require_decode_codepoint();
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
      CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
      CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
      CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
    })(CharCodes || (CharCodes = {}));
    var TO_LOWER_BIT = 32;
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags || (exports2.BinTrieFlags = BinTrieFlags = {}));
    function isNumber(code) {
      return code >= CharCodes.ZERO && code <= CharCodes.NINE;
    }
    function isHexadecimalCharacter(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
    }
    function isAsciiAlphaNumeric(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
    }
    function isEntityInAttributeInvalidEnd(code) {
      return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
    }
    var EntityDecoderState;
    (function(EntityDecoderState2) {
      EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
      EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
      EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
      EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
      EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
    })(EntityDecoderState || (EntityDecoderState = {}));
    var DecodingMode;
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
      DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
    })(DecodingMode || (exports2.DecodingMode = DecodingMode = {}));
    var EntityDecoder = class {
      constructor(decodeTree, emitCodePoint, errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        this.state = EntityDecoderState.EntityStart;
        this.consumed = 1;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.decodeMode = DecodingMode.Strict;
      }
      /** Resets the instance to make it reusable. */
      startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
      }
      /**
       * Write an entity to the decoder. This can be called multiple times with partial entities.
       * If the entity is incomplete, the decoder will return -1.
       *
       * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
       * entity is incomplete, and resume when the next string is written.
       *
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      write(input, offset) {
        switch (this.state) {
          case EntityDecoderState.EntityStart: {
            if (input.charCodeAt(offset) === CharCodes.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(input, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(input, offset);
          }
          case EntityDecoderState.NumericStart: {
            return this.stateNumericStart(input, offset);
          }
          case EntityDecoderState.NumericDecimal: {
            return this.stateNumericDecimal(input, offset);
          }
          case EntityDecoderState.NumericHex: {
            return this.stateNumericHex(input, offset);
          }
          case EntityDecoderState.NamedEntity: {
            return this.stateNamedEntity(input, offset);
          }
        }
      }
      /**
       * Switches between the numeric decimal and hexadecimal states.
       *
       * Equivalent to the `Numeric character reference state` in the HTML spec.
       *
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericStart(input, offset) {
        if (offset >= input.length) {
          return -1;
        }
        if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
          this.state = EntityDecoderState.NumericHex;
          this.consumed += 1;
          return this.stateNumericHex(input, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(input, offset);
      }
      addToNumericResult(input, start, end, base) {
        if (start !== end) {
          const digitCount = end - start;
          this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input.substr(start, digitCount), base);
          this.consumed += digitCount;
        }
      }
      /**
       * Parses a hexadecimal numeric entity.
       *
       * Equivalent to the `Hexademical character reference state` in the HTML spec.
       *
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericHex(input, offset) {
        const startIndex = offset;
        while (offset < input.length) {
          const char = input.charCodeAt(offset);
          if (isNumber(char) || isHexadecimalCharacter(char)) {
            offset += 1;
          } else {
            this.addToNumericResult(input, startIndex, offset, 16);
            return this.emitNumericEntity(char, 3);
          }
        }
        this.addToNumericResult(input, startIndex, offset, 16);
        return -1;
      }
      /**
       * Parses a decimal numeric entity.
       *
       * Equivalent to the `Decimal character reference state` in the HTML spec.
       *
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericDecimal(input, offset) {
        const startIndex = offset;
        while (offset < input.length) {
          const char = input.charCodeAt(offset);
          if (isNumber(char)) {
            offset += 1;
          } else {
            this.addToNumericResult(input, startIndex, offset, 10);
            return this.emitNumericEntity(char, 2);
          }
        }
        this.addToNumericResult(input, startIndex, offset, 10);
        return -1;
      }
      /**
       * Validate and emit a numeric entity.
       *
       * Implements the logic from the `Hexademical character reference start
       * state` and `Numeric character reference end state` in the HTML spec.
       *
       * @param lastCp The last code point of the entity. Used to see if the
       *               entity was terminated with a semicolon.
       * @param expectedLength The minimum number of characters that should be
       *                       consumed. Used to validate that at least one digit
       *                       was consumed.
       * @returns The number of characters that were consumed.
       */
      emitNumericEntity(lastCp, expectedLength) {
        var _a;
        if (this.consumed <= expectedLength) {
          (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
          return 0;
        }
        if (lastCp === CharCodes.SEMI) {
          this.consumed += 1;
        } else if (this.decodeMode === DecodingMode.Strict) {
          return 0;
        }
        this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
        if (this.errors) {
          if (lastCp !== CharCodes.SEMI) {
            this.errors.missingSemicolonAfterCharacterReference();
          }
          this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
      }
      /**
       * Parses a named entity.
       *
       * Equivalent to the `Named character reference state` in the HTML spec.
       *
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNamedEntity(input, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < input.length; offset++, this.excess++) {
          const char = input.charCodeAt(offset);
          this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
          if (this.treeIndex < 0) {
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
            (valueLength === 0 || // And there should be no invalid characters.
            isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
          }
          current = decodeTree[this.treeIndex];
          valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          if (valueLength !== 0) {
            if (char === CharCodes.SEMI) {
              return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
            }
            if (this.decodeMode !== DecodingMode.Strict) {
              this.result = this.treeIndex;
              this.consumed += this.excess;
              this.excess = 0;
            }
          }
        }
        return -1;
      }
      /**
       * Emit a named entity that was not terminated with a semicolon.
       *
       * @returns The number of characters consumed.
       */
      emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
      }
      /**
       * Emit a named entity.
       *
       * @param result The index of the entity in the decode tree.
       * @param valueLength The number of bytes in the entity.
       * @param consumed The number of characters consumed.
       *
       * @returns The number of characters consumed.
       */
      emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
          this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
      }
      /**
       * Signal to the parser that the end of the input was reached.
       *
       * Remaining data will be emitted and relevant errors will be produced.
       *
       * @returns The number of characters consumed.
       */
      end() {
        var _a;
        switch (this.state) {
          case EntityDecoderState.NamedEntity: {
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
          // Otherwise, emit a numeric entity if we have one.
          case EntityDecoderState.NumericDecimal: {
            return this.emitNumericEntity(0, 2);
          }
          case EntityDecoderState.NumericHex: {
            return this.emitNumericEntity(0, 3);
          }
          case EntityDecoderState.NumericStart: {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
          case EntityDecoderState.EntityStart: {
            return 0;
          }
        }
      }
    };
    exports2.EntityDecoder = EntityDecoder;
    function getDecoder(decodeTree) {
      let returnValue = "";
      const decoder = new EntityDecoder(decodeTree, (data) => returnValue += (0, decode_codepoint_js_1.fromCodePoint)(data));
      return function decodeWithTrie(input, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while ((offset = input.indexOf("&", offset)) >= 0) {
          returnValue += input.slice(lastIndex, offset);
          decoder.startEntity(decodeMode);
          const length = decoder.write(
            input,
            // Skip the "&"
            offset + 1
          );
          if (length < 0) {
            lastIndex = offset + decoder.end();
            break;
          }
          lastIndex = offset + length;
          offset = length === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = returnValue + input.slice(lastIndex);
        returnValue = "";
        return result;
      };
    }
    function determineBranch(decodeTree, current, nodeIndex, char) {
      const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
      }
      if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
      }
      let lo = nodeIndex;
      let hi = lo + branchCount - 1;
      while (lo <= hi) {
        const mid = lo + hi >>> 1;
        const midValue = decodeTree[mid];
        if (midValue < char) {
          lo = mid + 1;
        } else if (midValue > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    var htmlDecoder = /* @__PURE__ */ getDecoder(decode_data_html_js_1.htmlDecodeTree);
    var xmlDecoder = /* @__PURE__ */ getDecoder(decode_data_xml_js_1.xmlDecodeTree);
    function decodeHTML(htmlString, mode = DecodingMode.Legacy) {
      return htmlDecoder(htmlString, mode);
    }
    function decodeHTMLAttribute(htmlAttribute) {
      return htmlDecoder(htmlAttribute, DecodingMode.Attribute);
    }
    function decodeHTMLStrict(htmlString) {
      return htmlDecoder(htmlString, DecodingMode.Strict);
    }
    function decodeXML(xmlString) {
      return xmlDecoder(xmlString, DecodingMode.Strict);
    }
    var decode_data_html_js_2 = require_decode_data_html();
    Object.defineProperty(exports2, "htmlDecodeTree", { enumerable: true, get: function() {
      return decode_data_html_js_2.htmlDecodeTree;
    } });
    var decode_data_xml_js_2 = require_decode_data_xml();
    Object.defineProperty(exports2, "xmlDecodeTree", { enumerable: true, get: function() {
      return decode_data_xml_js_2.xmlDecodeTree;
    } });
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports2, "decodeCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.decodeCodePoint;
    } });
    Object.defineProperty(exports2, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports2, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
  }
});

// node_modules/parse5/dist/cjs/common/html.js
var require_html = __commonJS({
  "node_modules/parse5/dist/cjs/common/html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NUMBERED_HEADERS = exports2.SPECIAL_ELEMENTS = exports2.TAG_ID = exports2.TAG_NAMES = exports2.DOCUMENT_MODE = exports2.ATTRS = exports2.NS = void 0;
    exports2.getTagID = getTagID;
    exports2.hasUnescapedText = hasUnescapedText;
    var NS;
    (function(NS2) {
      NS2["HTML"] = "http://www.w3.org/1999/xhtml";
      NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
      NS2["SVG"] = "http://www.w3.org/2000/svg";
      NS2["XLINK"] = "http://www.w3.org/1999/xlink";
      NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
      NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
    })(NS || (exports2.NS = NS = {}));
    var ATTRS;
    (function(ATTRS2) {
      ATTRS2["TYPE"] = "type";
      ATTRS2["ACTION"] = "action";
      ATTRS2["ENCODING"] = "encoding";
      ATTRS2["PROMPT"] = "prompt";
      ATTRS2["NAME"] = "name";
      ATTRS2["COLOR"] = "color";
      ATTRS2["FACE"] = "face";
      ATTRS2["SIZE"] = "size";
    })(ATTRS || (exports2.ATTRS = ATTRS = {}));
    var DOCUMENT_MODE;
    (function(DOCUMENT_MODE2) {
      DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
      DOCUMENT_MODE2["QUIRKS"] = "quirks";
      DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
    })(DOCUMENT_MODE || (exports2.DOCUMENT_MODE = DOCUMENT_MODE = {}));
    var TAG_NAMES;
    (function(TAG_NAMES2) {
      TAG_NAMES2["A"] = "a";
      TAG_NAMES2["ADDRESS"] = "address";
      TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
      TAG_NAMES2["APPLET"] = "applet";
      TAG_NAMES2["AREA"] = "area";
      TAG_NAMES2["ARTICLE"] = "article";
      TAG_NAMES2["ASIDE"] = "aside";
      TAG_NAMES2["B"] = "b";
      TAG_NAMES2["BASE"] = "base";
      TAG_NAMES2["BASEFONT"] = "basefont";
      TAG_NAMES2["BGSOUND"] = "bgsound";
      TAG_NAMES2["BIG"] = "big";
      TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
      TAG_NAMES2["BODY"] = "body";
      TAG_NAMES2["BR"] = "br";
      TAG_NAMES2["BUTTON"] = "button";
      TAG_NAMES2["CAPTION"] = "caption";
      TAG_NAMES2["CENTER"] = "center";
      TAG_NAMES2["CODE"] = "code";
      TAG_NAMES2["COL"] = "col";
      TAG_NAMES2["COLGROUP"] = "colgroup";
      TAG_NAMES2["DD"] = "dd";
      TAG_NAMES2["DESC"] = "desc";
      TAG_NAMES2["DETAILS"] = "details";
      TAG_NAMES2["DIALOG"] = "dialog";
      TAG_NAMES2["DIR"] = "dir";
      TAG_NAMES2["DIV"] = "div";
      TAG_NAMES2["DL"] = "dl";
      TAG_NAMES2["DT"] = "dt";
      TAG_NAMES2["EM"] = "em";
      TAG_NAMES2["EMBED"] = "embed";
      TAG_NAMES2["FIELDSET"] = "fieldset";
      TAG_NAMES2["FIGCAPTION"] = "figcaption";
      TAG_NAMES2["FIGURE"] = "figure";
      TAG_NAMES2["FONT"] = "font";
      TAG_NAMES2["FOOTER"] = "footer";
      TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
      TAG_NAMES2["FORM"] = "form";
      TAG_NAMES2["FRAME"] = "frame";
      TAG_NAMES2["FRAMESET"] = "frameset";
      TAG_NAMES2["H1"] = "h1";
      TAG_NAMES2["H2"] = "h2";
      TAG_NAMES2["H3"] = "h3";
      TAG_NAMES2["H4"] = "h4";
      TAG_NAMES2["H5"] = "h5";
      TAG_NAMES2["H6"] = "h6";
      TAG_NAMES2["HEAD"] = "head";
      TAG_NAMES2["HEADER"] = "header";
      TAG_NAMES2["HGROUP"] = "hgroup";
      TAG_NAMES2["HR"] = "hr";
      TAG_NAMES2["HTML"] = "html";
      TAG_NAMES2["I"] = "i";
      TAG_NAMES2["IMG"] = "img";
      TAG_NAMES2["IMAGE"] = "image";
      TAG_NAMES2["INPUT"] = "input";
      TAG_NAMES2["IFRAME"] = "iframe";
      TAG_NAMES2["KEYGEN"] = "keygen";
      TAG_NAMES2["LABEL"] = "label";
      TAG_NAMES2["LI"] = "li";
      TAG_NAMES2["LINK"] = "link";
      TAG_NAMES2["LISTING"] = "listing";
      TAG_NAMES2["MAIN"] = "main";
      TAG_NAMES2["MALIGNMARK"] = "malignmark";
      TAG_NAMES2["MARQUEE"] = "marquee";
      TAG_NAMES2["MATH"] = "math";
      TAG_NAMES2["MENU"] = "menu";
      TAG_NAMES2["META"] = "meta";
      TAG_NAMES2["MGLYPH"] = "mglyph";
      TAG_NAMES2["MI"] = "mi";
      TAG_NAMES2["MO"] = "mo";
      TAG_NAMES2["MN"] = "mn";
      TAG_NAMES2["MS"] = "ms";
      TAG_NAMES2["MTEXT"] = "mtext";
      TAG_NAMES2["NAV"] = "nav";
      TAG_NAMES2["NOBR"] = "nobr";
      TAG_NAMES2["NOFRAMES"] = "noframes";
      TAG_NAMES2["NOEMBED"] = "noembed";
      TAG_NAMES2["NOSCRIPT"] = "noscript";
      TAG_NAMES2["OBJECT"] = "object";
      TAG_NAMES2["OL"] = "ol";
      TAG_NAMES2["OPTGROUP"] = "optgroup";
      TAG_NAMES2["OPTION"] = "option";
      TAG_NAMES2["P"] = "p";
      TAG_NAMES2["PARAM"] = "param";
      TAG_NAMES2["PLAINTEXT"] = "plaintext";
      TAG_NAMES2["PRE"] = "pre";
      TAG_NAMES2["RB"] = "rb";
      TAG_NAMES2["RP"] = "rp";
      TAG_NAMES2["RT"] = "rt";
      TAG_NAMES2["RTC"] = "rtc";
      TAG_NAMES2["RUBY"] = "ruby";
      TAG_NAMES2["S"] = "s";
      TAG_NAMES2["SCRIPT"] = "script";
      TAG_NAMES2["SEARCH"] = "search";
      TAG_NAMES2["SECTION"] = "section";
      TAG_NAMES2["SELECT"] = "select";
      TAG_NAMES2["SOURCE"] = "source";
      TAG_NAMES2["SMALL"] = "small";
      TAG_NAMES2["SPAN"] = "span";
      TAG_NAMES2["STRIKE"] = "strike";
      TAG_NAMES2["STRONG"] = "strong";
      TAG_NAMES2["STYLE"] = "style";
      TAG_NAMES2["SUB"] = "sub";
      TAG_NAMES2["SUMMARY"] = "summary";
      TAG_NAMES2["SUP"] = "sup";
      TAG_NAMES2["TABLE"] = "table";
      TAG_NAMES2["TBODY"] = "tbody";
      TAG_NAMES2["TEMPLATE"] = "template";
      TAG_NAMES2["TEXTAREA"] = "textarea";
      TAG_NAMES2["TFOOT"] = "tfoot";
      TAG_NAMES2["TD"] = "td";
      TAG_NAMES2["TH"] = "th";
      TAG_NAMES2["THEAD"] = "thead";
      TAG_NAMES2["TITLE"] = "title";
      TAG_NAMES2["TR"] = "tr";
      TAG_NAMES2["TRACK"] = "track";
      TAG_NAMES2["TT"] = "tt";
      TAG_NAMES2["U"] = "u";
      TAG_NAMES2["UL"] = "ul";
      TAG_NAMES2["SVG"] = "svg";
      TAG_NAMES2["VAR"] = "var";
      TAG_NAMES2["WBR"] = "wbr";
      TAG_NAMES2["XMP"] = "xmp";
    })(TAG_NAMES || (exports2.TAG_NAMES = TAG_NAMES = {}));
    var TAG_ID;
    (function(TAG_ID2) {
      TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
      TAG_ID2[TAG_ID2["A"] = 1] = "A";
      TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
      TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
      TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
      TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
      TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
      TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
      TAG_ID2[TAG_ID2["B"] = 8] = "B";
      TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
      TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
      TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
      TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
      TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
      TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
      TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
      TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
      TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
      TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
      TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
      TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
      TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
      TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
      TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
      TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
      TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
      TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
      TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
      TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
      TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
      TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
      TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
      TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
      TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
      TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
      TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
      TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
      TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
      TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
      TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
      TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
      TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
      TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
      TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
      TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
      TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
      TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
      TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
      TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
      TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
      TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
      TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
      TAG_ID2[TAG_ID2["I"] = 52] = "I";
      TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
      TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
      TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
      TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
      TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
      TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
      TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
      TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
      TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
      TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
      TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
      TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
      TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
      TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
      TAG_ID2[TAG_ID2["META"] = 67] = "META";
      TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
      TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
      TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
      TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
      TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
      TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
      TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
      TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
      TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
      TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
      TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
      TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
      TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
      TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
      TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
      TAG_ID2[TAG_ID2["P"] = 83] = "P";
      TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
      TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
      TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
      TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
      TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
      TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
      TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
      TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
      TAG_ID2[TAG_ID2["S"] = 92] = "S";
      TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
      TAG_ID2[TAG_ID2["SEARCH"] = 94] = "SEARCH";
      TAG_ID2[TAG_ID2["SECTION"] = 95] = "SECTION";
      TAG_ID2[TAG_ID2["SELECT"] = 96] = "SELECT";
      TAG_ID2[TAG_ID2["SOURCE"] = 97] = "SOURCE";
      TAG_ID2[TAG_ID2["SMALL"] = 98] = "SMALL";
      TAG_ID2[TAG_ID2["SPAN"] = 99] = "SPAN";
      TAG_ID2[TAG_ID2["STRIKE"] = 100] = "STRIKE";
      TAG_ID2[TAG_ID2["STRONG"] = 101] = "STRONG";
      TAG_ID2[TAG_ID2["STYLE"] = 102] = "STYLE";
      TAG_ID2[TAG_ID2["SUB"] = 103] = "SUB";
      TAG_ID2[TAG_ID2["SUMMARY"] = 104] = "SUMMARY";
      TAG_ID2[TAG_ID2["SUP"] = 105] = "SUP";
      TAG_ID2[TAG_ID2["TABLE"] = 106] = "TABLE";
      TAG_ID2[TAG_ID2["TBODY"] = 107] = "TBODY";
      TAG_ID2[TAG_ID2["TEMPLATE"] = 108] = "TEMPLATE";
      TAG_ID2[TAG_ID2["TEXTAREA"] = 109] = "TEXTAREA";
      TAG_ID2[TAG_ID2["TFOOT"] = 110] = "TFOOT";
      TAG_ID2[TAG_ID2["TD"] = 111] = "TD";
      TAG_ID2[TAG_ID2["TH"] = 112] = "TH";
      TAG_ID2[TAG_ID2["THEAD"] = 113] = "THEAD";
      TAG_ID2[TAG_ID2["TITLE"] = 114] = "TITLE";
      TAG_ID2[TAG_ID2["TR"] = 115] = "TR";
      TAG_ID2[TAG_ID2["TRACK"] = 116] = "TRACK";
      TAG_ID2[TAG_ID2["TT"] = 117] = "TT";
      TAG_ID2[TAG_ID2["U"] = 118] = "U";
      TAG_ID2[TAG_ID2["UL"] = 119] = "UL";
      TAG_ID2[TAG_ID2["SVG"] = 120] = "SVG";
      TAG_ID2[TAG_ID2["VAR"] = 121] = "VAR";
      TAG_ID2[TAG_ID2["WBR"] = 122] = "WBR";
      TAG_ID2[TAG_ID2["XMP"] = 123] = "XMP";
    })(TAG_ID || (exports2.TAG_ID = TAG_ID = {}));
    var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
      [TAG_NAMES.A, TAG_ID.A],
      [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
      [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
      [TAG_NAMES.APPLET, TAG_ID.APPLET],
      [TAG_NAMES.AREA, TAG_ID.AREA],
      [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
      [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
      [TAG_NAMES.B, TAG_ID.B],
      [TAG_NAMES.BASE, TAG_ID.BASE],
      [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
      [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
      [TAG_NAMES.BIG, TAG_ID.BIG],
      [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
      [TAG_NAMES.BODY, TAG_ID.BODY],
      [TAG_NAMES.BR, TAG_ID.BR],
      [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
      [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
      [TAG_NAMES.CENTER, TAG_ID.CENTER],
      [TAG_NAMES.CODE, TAG_ID.CODE],
      [TAG_NAMES.COL, TAG_ID.COL],
      [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
      [TAG_NAMES.DD, TAG_ID.DD],
      [TAG_NAMES.DESC, TAG_ID.DESC],
      [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
      [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
      [TAG_NAMES.DIR, TAG_ID.DIR],
      [TAG_NAMES.DIV, TAG_ID.DIV],
      [TAG_NAMES.DL, TAG_ID.DL],
      [TAG_NAMES.DT, TAG_ID.DT],
      [TAG_NAMES.EM, TAG_ID.EM],
      [TAG_NAMES.EMBED, TAG_ID.EMBED],
      [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
      [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
      [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
      [TAG_NAMES.FONT, TAG_ID.FONT],
      [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
      [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
      [TAG_NAMES.FORM, TAG_ID.FORM],
      [TAG_NAMES.FRAME, TAG_ID.FRAME],
      [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
      [TAG_NAMES.H1, TAG_ID.H1],
      [TAG_NAMES.H2, TAG_ID.H2],
      [TAG_NAMES.H3, TAG_ID.H3],
      [TAG_NAMES.H4, TAG_ID.H4],
      [TAG_NAMES.H5, TAG_ID.H5],
      [TAG_NAMES.H6, TAG_ID.H6],
      [TAG_NAMES.HEAD, TAG_ID.HEAD],
      [TAG_NAMES.HEADER, TAG_ID.HEADER],
      [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
      [TAG_NAMES.HR, TAG_ID.HR],
      [TAG_NAMES.HTML, TAG_ID.HTML],
      [TAG_NAMES.I, TAG_ID.I],
      [TAG_NAMES.IMG, TAG_ID.IMG],
      [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
      [TAG_NAMES.INPUT, TAG_ID.INPUT],
      [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
      [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
      [TAG_NAMES.LABEL, TAG_ID.LABEL],
      [TAG_NAMES.LI, TAG_ID.LI],
      [TAG_NAMES.LINK, TAG_ID.LINK],
      [TAG_NAMES.LISTING, TAG_ID.LISTING],
      [TAG_NAMES.MAIN, TAG_ID.MAIN],
      [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
      [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
      [TAG_NAMES.MATH, TAG_ID.MATH],
      [TAG_NAMES.MENU, TAG_ID.MENU],
      [TAG_NAMES.META, TAG_ID.META],
      [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
      [TAG_NAMES.MI, TAG_ID.MI],
      [TAG_NAMES.MO, TAG_ID.MO],
      [TAG_NAMES.MN, TAG_ID.MN],
      [TAG_NAMES.MS, TAG_ID.MS],
      [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
      [TAG_NAMES.NAV, TAG_ID.NAV],
      [TAG_NAMES.NOBR, TAG_ID.NOBR],
      [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
      [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
      [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
      [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
      [TAG_NAMES.OL, TAG_ID.OL],
      [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
      [TAG_NAMES.OPTION, TAG_ID.OPTION],
      [TAG_NAMES.P, TAG_ID.P],
      [TAG_NAMES.PARAM, TAG_ID.PARAM],
      [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
      [TAG_NAMES.PRE, TAG_ID.PRE],
      [TAG_NAMES.RB, TAG_ID.RB],
      [TAG_NAMES.RP, TAG_ID.RP],
      [TAG_NAMES.RT, TAG_ID.RT],
      [TAG_NAMES.RTC, TAG_ID.RTC],
      [TAG_NAMES.RUBY, TAG_ID.RUBY],
      [TAG_NAMES.S, TAG_ID.S],
      [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
      [TAG_NAMES.SEARCH, TAG_ID.SEARCH],
      [TAG_NAMES.SECTION, TAG_ID.SECTION],
      [TAG_NAMES.SELECT, TAG_ID.SELECT],
      [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
      [TAG_NAMES.SMALL, TAG_ID.SMALL],
      [TAG_NAMES.SPAN, TAG_ID.SPAN],
      [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
      [TAG_NAMES.STRONG, TAG_ID.STRONG],
      [TAG_NAMES.STYLE, TAG_ID.STYLE],
      [TAG_NAMES.SUB, TAG_ID.SUB],
      [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
      [TAG_NAMES.SUP, TAG_ID.SUP],
      [TAG_NAMES.TABLE, TAG_ID.TABLE],
      [TAG_NAMES.TBODY, TAG_ID.TBODY],
      [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
      [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
      [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
      [TAG_NAMES.TD, TAG_ID.TD],
      [TAG_NAMES.TH, TAG_ID.TH],
      [TAG_NAMES.THEAD, TAG_ID.THEAD],
      [TAG_NAMES.TITLE, TAG_ID.TITLE],
      [TAG_NAMES.TR, TAG_ID.TR],
      [TAG_NAMES.TRACK, TAG_ID.TRACK],
      [TAG_NAMES.TT, TAG_ID.TT],
      [TAG_NAMES.U, TAG_ID.U],
      [TAG_NAMES.UL, TAG_ID.UL],
      [TAG_NAMES.SVG, TAG_ID.SVG],
      [TAG_NAMES.VAR, TAG_ID.VAR],
      [TAG_NAMES.WBR, TAG_ID.WBR],
      [TAG_NAMES.XMP, TAG_ID.XMP]
    ]);
    function getTagID(tagName) {
      var _a;
      return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
    }
    var $ = TAG_ID;
    exports2.SPECIAL_ELEMENTS = {
      [NS.HTML]: /* @__PURE__ */ new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP
      ]),
      [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
      [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
      [NS.XLINK]: /* @__PURE__ */ new Set(),
      [NS.XML]: /* @__PURE__ */ new Set(),
      [NS.XMLNS]: /* @__PURE__ */ new Set()
    };
    exports2.NUMBERED_HEADERS = /* @__PURE__ */ new Set([$.H1, $.H2, $.H3, $.H4, $.H5, $.H6]);
    var UNESCAPED_TEXT = /* @__PURE__ */ new Set([
      TAG_NAMES.STYLE,
      TAG_NAMES.SCRIPT,
      TAG_NAMES.XMP,
      TAG_NAMES.IFRAME,
      TAG_NAMES.NOEMBED,
      TAG_NAMES.NOFRAMES,
      TAG_NAMES.PLAINTEXT
    ]);
    function hasUnescapedText(tn, scriptingEnabled) {
      return UNESCAPED_TEXT.has(tn) || scriptingEnabled && tn === TAG_NAMES.NOSCRIPT;
    }
  }
});

// node_modules/parse5/dist/cjs/tokenizer/index.js
var require_tokenizer = __commonJS({
  "node_modules/parse5/dist/cjs/tokenizer/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Tokenizer = exports2.TokenizerMode = void 0;
    var preprocessor_js_1 = require_preprocessor();
    var unicode_js_1 = require_unicode();
    var token_js_1 = require_token();
    var decode_1 = require_decode();
    var error_codes_js_1 = require_error_codes();
    var html_js_1 = require_html();
    var State;
    (function(State2) {
      State2[State2["DATA"] = 0] = "DATA";
      State2[State2["RCDATA"] = 1] = "RCDATA";
      State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
      State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
      State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
      State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
      State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
      State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
      State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
      State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
      State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
      State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
      State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
      State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
      State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
      State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
      State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
      State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
      State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
      State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
      State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
      State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
      State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
      State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
      State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
      State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
      State2[State2["COMMENT"] = 44] = "COMMENT";
      State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
      State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
      State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
      State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
      State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
      State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
      State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
      State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
      State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
      State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
      State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
      State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
      State2[State2["AMBIGUOUS_AMPERSAND"] = 72] = "AMBIGUOUS_AMPERSAND";
    })(State || (State = {}));
    exports2.TokenizerMode = {
      DATA: State.DATA,
      RCDATA: State.RCDATA,
      RAWTEXT: State.RAWTEXT,
      SCRIPT_DATA: State.SCRIPT_DATA,
      PLAINTEXT: State.PLAINTEXT,
      CDATA_SECTION: State.CDATA_SECTION
    };
    function isAsciiDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function toAsciiLower(cp) {
      return cp + 32;
    }
    function isWhitespace(cp) {
      return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
    }
    function isScriptDataDoubleEscapeSequenceEnd(cp) {
      return isWhitespace(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
    }
    function getErrorForNumericCharacterReference(code) {
      if (code === unicode_js_1.CODE_POINTS.NULL) {
        return error_codes_js_1.ERR.nullCharacterReference;
      } else if (code > 1114111) {
        return error_codes_js_1.ERR.characterReferenceOutsideUnicodeRange;
      } else if ((0, unicode_js_1.isSurrogate)(code)) {
        return error_codes_js_1.ERR.surrogateCharacterReference;
      } else if ((0, unicode_js_1.isUndefinedCodePoint)(code)) {
        return error_codes_js_1.ERR.noncharacterCharacterReference;
      } else if ((0, unicode_js_1.isControlCodePoint)(code) || code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
        return error_codes_js_1.ERR.controlCharacterReference;
      }
      return null;
    }
    var Tokenizer = class {
      constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        this.inLoop = false;
        this.inForeignNode = false;
        this.lastStartTagName = "";
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.entityStartPos = 0;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: "", value: "" };
        this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
        this.entityDecoder = new decode_1.EntityDecoder(decode_1.htmlDecodeTree, (cp, consumed) => {
          this.preprocessor.pos = this.entityStartPos + consumed - 1;
          this._flushCodePointConsumedAsCharacterReference(cp);
        }, handler.onParseError ? {
          missingSemicolonAfterCharacterReference: () => {
            this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference, 1);
          },
          absenceOfDigitsInNumericCharacterReference: (consumed) => {
            this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + consumed);
          },
          validateNumericCharacterReference: (code) => {
            const error = getErrorForNumericCharacterReference(code);
            if (error)
              this._err(error, 1);
          }
        } : void 0);
      }
      //Errors
      _err(code, cpOffset = 0) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code, cpOffset));
      }
      // NOTE: `offset` may never run across line boundaries.
      getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
          return null;
        }
        return {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - offset,
          startOffset: this.preprocessor.offset - offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _runParsingLoop() {
        if (this.inLoop)
          return;
        this.inLoop = true;
        while (this.active && !this.paused) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this._callState(cp);
          }
        }
        this.inLoop = false;
      }
      //API
      pause() {
        this.paused = true;
      }
      resume(writeCallback) {
        if (!this.paused) {
          throw new Error("Parser was already resumed");
        }
        this.paused = false;
        if (this.inLoop)
          return;
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      write(chunk, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
        this._runParsingLoop();
      }
      //Hibernation
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          this.preprocessor.retreat(this.consumedAfterSnapshot);
          this.consumedAfterSnapshot = 0;
          this.active = false;
          return true;
        }
        return false;
      }
      //Consumption
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
          this.preprocessor.advance();
        }
      }
      _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
          this._advanceBy(pattern.length - 1);
          return true;
        }
        return false;
      }
      //Token creation
      _createStartTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.START_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(1)
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.END_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(2)
        };
      }
      _createCommentToken(offset) {
        this.currentToken = {
          type: token_js_1.TokenType.COMMENT,
          data: "",
          location: this.getCurrentLocation(offset)
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: token_js_1.TokenType.DOCTYPE,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null,
          location: this.currentLocation
        };
      }
      _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
          type,
          chars,
          location: this.currentLocation
        };
      }
      //Tag attributes
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
        this.currentLocation = this.getCurrentLocation(0);
      }
      _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if ((0, token_js_1.getTokenAttr)(token, this.currentAttr.name) === null) {
          token.attrs.push(this.currentAttr);
          if (token.location && this.currentLocation) {
            const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
            attrLocations[this.currentAttr.name] = this.currentLocation;
            this._leaveAttrValue();
          }
        } else {
          this._err(error_codes_js_1.ERR.duplicateAttribute);
        }
      }
      _leaveAttrValue() {
        if (this.currentLocation) {
          this.currentLocation.endLine = this.preprocessor.line;
          this.currentLocation.endCol = this.preprocessor.col;
          this.currentLocation.endOffset = this.preprocessor.offset;
        }
      }
      //Token emission
      prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
          ct.location.endLine = this.preprocessor.line;
          ct.location.endCol = this.preprocessor.col + 1;
          ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
      }
      emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = (0, html_js_1.getTagID)(ct.tagName);
        if (ct.type === token_js_1.TokenType.START_TAG) {
          this.lastStartTagName = ct.tagName;
          this.handler.onStartTag(ct);
        } else {
          if (ct.attrs.length > 0) {
            this._err(error_codes_js_1.ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(error_codes_js_1.ERR.endTagWithTrailingSolidus);
          }
          this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
      }
      _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
          if (nextLocation && this.currentCharacterToken.location) {
            this.currentCharacterToken.location.endLine = nextLocation.startLine;
            this.currentCharacterToken.location.endCol = nextLocation.startCol;
            this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
          }
          switch (this.currentCharacterToken.type) {
            case token_js_1.TokenType.CHARACTER: {
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.NULL_CHARACTER: {
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
              break;
            }
          }
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        const location = this.getCurrentLocation(0);
        if (location) {
          location.endLine = location.startLine;
          location.endCol = location.startCol;
          location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({ type: token_js_1.TokenType.EOF, location });
        this.active = false;
      }
      //Characters emission
      //OPTIMIZATION: The specification uses only one type of character token (one token per character).
      //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
      //If we have a sequence of characters that belong to the same group, the parser can process it
      //as a single solid character token.
      //So, there are 3 types of character tokens in parse5:
      //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
      //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
      //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type === type) {
            this.currentCharacterToken.chars += ch;
            return;
          } else {
            this.currentLocation = this.getCurrentLocation(0);
            this._emitCurrentCharacterToken(this.currentLocation);
            this.preprocessor.dropParsedChunk();
          }
        }
        this._createCharacterToken(type, ch);
      }
      _emitCodePoint(cp) {
        const type = isWhitespace(cp) ? token_js_1.TokenType.WHITESPACE_CHARACTER : cp === unicode_js_1.CODE_POINTS.NULL ? token_js_1.TokenType.NULL_CHARACTER : token_js_1.TokenType.CHARACTER;
        this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
      }
      //NOTE: used when we emit characters explicitly.
      //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(token_js_1.TokenType.CHARACTER, ch);
      }
      // Character reference helpers
      _startCharacterReference() {
        this.returnState = this.state;
        this.state = State.CHARACTER_REFERENCE;
        this.entityStartPos = this.preprocessor.pos;
        this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? decode_1.DecodingMode.Attribute : decode_1.DecodingMode.Legacy);
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
      }
      _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
          this.currentAttr.value += String.fromCodePoint(cp);
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Calling states this way turns out to be much faster than any other approach.
      _callState(cp) {
        switch (this.state) {
          case State.DATA: {
            this._stateData(cp);
            break;
          }
          case State.RCDATA: {
            this._stateRcdata(cp);
            break;
          }
          case State.RAWTEXT: {
            this._stateRawtext(cp);
            break;
          }
          case State.SCRIPT_DATA: {
            this._stateScriptData(cp);
            break;
          }
          case State.PLAINTEXT: {
            this._statePlaintext(cp);
            break;
          }
          case State.TAG_OPEN: {
            this._stateTagOpen(cp);
            break;
          }
          case State.END_TAG_OPEN: {
            this._stateEndTagOpen(cp);
            break;
          }
          case State.TAG_NAME: {
            this._stateTagName(cp);
            break;
          }
          case State.RCDATA_LESS_THAN_SIGN: {
            this._stateRcdataLessThanSign(cp);
            break;
          }
          case State.RCDATA_END_TAG_OPEN: {
            this._stateRcdataEndTagOpen(cp);
            break;
          }
          case State.RCDATA_END_TAG_NAME: {
            this._stateRcdataEndTagName(cp);
            break;
          }
          case State.RAWTEXT_LESS_THAN_SIGN: {
            this._stateRawtextLessThanSign(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_OPEN: {
            this._stateRawtextEndTagOpen(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_NAME: {
            this._stateRawtextEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_LESS_THAN_SIGN: {
            this._stateScriptDataLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_OPEN: {
            this._stateScriptDataEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_NAME: {
            this._stateScriptDataEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START: {
            this._stateScriptDataEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START_DASH: {
            this._stateScriptDataEscapeStartDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED: {
            this._stateScriptDataEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH: {
            this._stateScriptDataEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
            this._stateScriptDataEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
            this._stateScriptDataEscapedEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
            this._stateScriptDataEscapedEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
            this._stateScriptDataDoubleEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
            this._stateScriptDataDoubleEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
            this._stateScriptDataDoubleEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
            this._stateScriptDataDoubleEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataDoubleEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
            this._stateScriptDataDoubleEscapeEnd(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_NAME: {
            this._stateBeforeAttributeName(cp);
            break;
          }
          case State.ATTRIBUTE_NAME: {
            this._stateAttributeName(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_NAME: {
            this._stateAfterAttributeName(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_VALUE: {
            this._stateBeforeAttributeValue(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
            this._stateAttributeValueDoubleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
            this._stateAttributeValueSingleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_UNQUOTED: {
            this._stateAttributeValueUnquoted(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
            this._stateAfterAttributeValueQuoted(cp);
            break;
          }
          case State.SELF_CLOSING_START_TAG: {
            this._stateSelfClosingStartTag(cp);
            break;
          }
          case State.BOGUS_COMMENT: {
            this._stateBogusComment(cp);
            break;
          }
          case State.MARKUP_DECLARATION_OPEN: {
            this._stateMarkupDeclarationOpen(cp);
            break;
          }
          case State.COMMENT_START: {
            this._stateCommentStart(cp);
            break;
          }
          case State.COMMENT_START_DASH: {
            this._stateCommentStartDash(cp);
            break;
          }
          case State.COMMENT: {
            this._stateComment(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN: {
            this._stateCommentLessThanSign(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG: {
            this._stateCommentLessThanSignBang(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
            this._stateCommentLessThanSignBangDash(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
            this._stateCommentLessThanSignBangDashDash(cp);
            break;
          }
          case State.COMMENT_END_DASH: {
            this._stateCommentEndDash(cp);
            break;
          }
          case State.COMMENT_END: {
            this._stateCommentEnd(cp);
            break;
          }
          case State.COMMENT_END_BANG: {
            this._stateCommentEndBang(cp);
            break;
          }
          case State.DOCTYPE: {
            this._stateDoctype(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_NAME: {
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case State.DOCTYPE_NAME: {
            this._stateDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_NAME: {
            this._stateAfterDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
            this._stateAfterDoctypePublicKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateBeforeDoctypePublicIdentifier(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypePublicIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypePublicIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateAfterDoctypePublicIdentifier(cp);
            break;
          }
          case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
            this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
            this._stateAfterDoctypeSystemKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateBeforeDoctypeSystemIdentifier(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypeSystemIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateAfterDoctypeSystemIdentifier(cp);
            break;
          }
          case State.BOGUS_DOCTYPE: {
            this._stateBogusDoctype(cp);
            break;
          }
          case State.CDATA_SECTION: {
            this._stateCdataSection(cp);
            break;
          }
          case State.CDATA_SECTION_BRACKET: {
            this._stateCdataSectionBracket(cp);
            break;
          }
          case State.CDATA_SECTION_END: {
            this._stateCdataSectionEnd(cp);
            break;
          }
          case State.CHARACTER_REFERENCE: {
            this._stateCharacterReference();
            break;
          }
          case State.AMBIGUOUS_AMPERSAND: {
            this._stateAmbiguousAmpersand(cp);
            break;
          }
          default: {
            throw new Error("Unknown state");
          }
        }
      }
      // State machine
      // Data state
      //------------------------------------------------------------------
      _stateData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      //  RCDATA state
      //------------------------------------------------------------------
      _stateRcdata(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RCDATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // RAWTEXT state
      //------------------------------------------------------------------
      _stateRawtext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RAWTEXT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data state
      //------------------------------------------------------------------
      _stateScriptData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // PLAINTEXT state
      //------------------------------------------------------------------
      _statePlaintext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Tag open state
      //------------------------------------------------------------------
      _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.MARKUP_DECLARATION_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.END_TAG_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
              this._err(error_codes_js_1.ERR.unexpectedQuestionMarkInsteadOfTagName);
              this._createCommentToken(1);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("<");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._emitChars("<");
              this.state = State.DATA;
              this._stateData(cp);
            }
          }
      }
      // End tag open state
      //------------------------------------------------------------------
      _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingEndTagName);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("</");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._createCommentToken(2);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
            }
          }
      }
      // Tag name state
      //------------------------------------------------------------------
      _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // RCDATA less-than sign state
      //------------------------------------------------------------------
      _stateRcdataLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RCDATA_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      // RCDATA end tag open state
      //------------------------------------------------------------------
      _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RCDATA_END_TAG_NAME;
          this._stateRcdataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
          return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            return false;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.SELF_CLOSING_START_TAG;
            return false;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._advanceBy(this.lastStartTagName.length);
            this.emitCurrentTagToken();
            this.state = State.DATA;
            return false;
          }
          default: {
            return !this._ensureHibernation();
          }
        }
      }
      // RCDATA end tag name state
      //------------------------------------------------------------------
      _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      // RAWTEXT less-than sign state
      //------------------------------------------------------------------
      _stateRawtextLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RAWTEXT_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // RAWTEXT end tag open state
      //------------------------------------------------------------------
      _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RAWTEXT_END_TAG_NAME;
          this._stateRawtextEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // RAWTEXT end tag name state
      //------------------------------------------------------------------
      _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // Script data less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataLessThanSign(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SCRIPT_DATA_END_TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.SCRIPT_DATA_ESCAPE_START;
            this._emitChars("<!");
            break;
          }
          default: {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
      }
      // Script data end tag open state
      //------------------------------------------------------------------
      _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_END_TAG_NAME;
          this._stateScriptDataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data end tag name state
      //------------------------------------------------------------------
      _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escape start state
      //------------------------------------------------------------------
      _stateScriptDataEscapeStart(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escape start dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapeStartDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escaped state
      //------------------------------------------------------------------
      _stateScriptDataEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped dash dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        } else if (isAsciiLetter(cp)) {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
          this._stateScriptDataDoubleEscapeStart(cp);
        } else {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data escaped end tag open state
      //------------------------------------------------------------------
      _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
          this._stateScriptDataEscapedEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data escaped end tag name state
      //------------------------------------------------------------------
      _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data double escape start state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data double escaped state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped dash state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped dash dash state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
          this._emitChars("/");
        } else {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      // Script data double escape end state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      // Before attribute name state
      //------------------------------------------------------------------
      _stateBeforeAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = State.ATTRIBUTE_NAME;
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      // Attribute name state
      //------------------------------------------------------------------
      _stateAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED:
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this._leaveAttrName();
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._leaveAttrName();
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // After attribute name state
      //------------------------------------------------------------------
      _stateAfterAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      // Before attribute value state
      //------------------------------------------------------------------
      _stateBeforeAttributeValue(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingAttributeValue);
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          default: {
            this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
            this._stateAttributeValueUnquoted(cp);
          }
        }
      }
      // Attribute value (double-quoted) state
      //------------------------------------------------------------------
      _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // Attribute value (single-quoted) state
      //------------------------------------------------------------------
      _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // Attribute value (unquoted) state
      //------------------------------------------------------------------
      _stateAttributeValueUnquoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
          case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // After attribute value (quoted) state
      //------------------------------------------------------------------
      _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._leaveAttrValue();
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenAttributes);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      // Self-closing start tag state
      //------------------------------------------------------------------
      _stateSelfClosingStartTag(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            const token = this.currentToken;
            token.selfClosing = true;
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedSolidusInTag);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      // Bogus comment state
      //------------------------------------------------------------------
      _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      // Markup declaration open state
      //------------------------------------------------------------------
      _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
          this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
          this.state = State.COMMENT_START;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
          this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
          this.state = State.DOCTYPE;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
          if (this.inForeignNode) {
            this.state = State.CDATA_SECTION;
          } else {
            this._err(error_codes_js_1.ERR.cdataInHtmlContent);
            this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
            this.currentToken.data = "[CDATA[";
            this.state = State.BOGUS_COMMENT;
          }
        } else if (!this._ensureHibernation()) {
          this._err(error_codes_js_1.ERR.incorrectlyOpenedComment);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
      // Comment start state
      //------------------------------------------------------------------
      _stateCommentStart(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_START_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            const token = this.currentToken;
            this.emitCurrentComment(token);
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment start dash state
      //------------------------------------------------------------------
      _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment state
      //------------------------------------------------------------------
      _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            this.state = State.COMMENT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      // Comment less-than sign state
      //------------------------------------------------------------------
      _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            token.data += "!";
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment less-than sign bang state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBang(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        } else {
          this.state = State.COMMENT;
          this._stateComment(cp);
        }
      }
      // Comment less-than sign bang dash state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBangDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        } else {
          this.state = State.COMMENT_END_DASH;
          this._stateCommentEndDash(cp);
        }
      }
      // Comment less-than sign bang dash dash state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
          this._err(error_codes_js_1.ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
      }
      // Comment end dash state
      //------------------------------------------------------------------
      _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment end state
      //------------------------------------------------------------------
      _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.COMMENT_END_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "-";
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment end bang state
      //------------------------------------------------------------------
      _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "--!";
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.incorrectlyClosedComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--!";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // DOCTYPE state
      //------------------------------------------------------------------
      _stateDoctype(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            this._createDoctypeToken(null);
            const token = this.currentToken;
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBeforeDoctypeName);
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
          }
        }
      }
      // Before DOCTYPE name state
      //------------------------------------------------------------------
      _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
          this.state = State.DOCTYPE_NAME;
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
              this.state = State.DOCTYPE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypeName);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._createDoctypeToken(String.fromCodePoint(cp));
              this.state = State.DOCTYPE_NAME;
            }
          }
      }
      // DOCTYPE name state
      //------------------------------------------------------------------
      _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.AFTER_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // After DOCTYPE name state
      //------------------------------------------------------------------
      _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
              this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
            } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
              this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
            } else if (!this._ensureHibernation()) {
              this._err(error_codes_js_1.ERR.invalidCharacterSequenceAfterDoctypeName);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
      }
      // After DOCTYPE public keyword state
      //------------------------------------------------------------------
      _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Before DOCTYPE public identifier state
      //------------------------------------------------------------------
      _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // DOCTYPE public identifier (double-quoted) state
      //------------------------------------------------------------------
      _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      // DOCTYPE public identifier (single-quoted) state
      //------------------------------------------------------------------
      _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      // After DOCTYPE public identifier state
      //------------------------------------------------------------------
      _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Between DOCTYPE public and system identifiers state
      //------------------------------------------------------------------
      _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // After DOCTYPE system keyword state
      //------------------------------------------------------------------
      _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Before DOCTYPE system identifier state
      //------------------------------------------------------------------
      _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // DOCTYPE system identifier (double-quoted) state
      //------------------------------------------------------------------
      _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      // DOCTYPE system identifier (single-quoted) state
      //------------------------------------------------------------------
      _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      // After DOCTYPE system identifier state
      //------------------------------------------------------------------
      _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Bogus DOCTYPE state
      //------------------------------------------------------------------
      _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default:
        }
      }
      // CDATA section state
      //------------------------------------------------------------------
      _stateCdataSection(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this.state = State.CDATA_SECTION_BRACKET;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInCdata);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // CDATA section bracket state
      //------------------------------------------------------------------
      _stateCdataSectionBracket(cp) {
        if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
          this.state = State.CDATA_SECTION_END;
        } else {
          this._emitChars("]");
          this.state = State.CDATA_SECTION;
          this._stateCdataSection(cp);
        }
      }
      // CDATA section end state
      //------------------------------------------------------------------
      _stateCdataSectionEnd(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this._emitChars("]");
            break;
          }
          default: {
            this._emitChars("]]");
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
          }
        }
      }
      // Character reference state
      //------------------------------------------------------------------
      _stateCharacterReference() {
        let length = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (length < 0) {
          if (this.preprocessor.lastChunkWritten) {
            length = this.entityDecoder.end();
          } else {
            this.active = false;
            this.preprocessor.pos = this.preprocessor.html.length - 1;
            this.consumedAfterSnapshot = 0;
            this.preprocessor.endOfChunkHit = true;
            return;
          }
        }
        if (length === 0) {
          this.preprocessor.pos = this.entityStartPos;
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState;
        } else {
          this.state = this.returnState;
        }
      }
      // Ambiguos ampersand state
      //------------------------------------------------------------------
      _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric(cp)) {
          this._flushCodePointConsumedAsCharacterReference(cp);
        } else {
          if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this._err(error_codes_js_1.ERR.unknownNamedCharacterReference);
          }
          this.state = this.returnState;
          this._callState(cp);
        }
      }
    };
    exports2.Tokenizer = Tokenizer;
  }
});

// node_modules/parse5/dist/cjs/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  "node_modules/parse5/dist/cjs/parser/open-element-stack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OpenElementStack = void 0;
    var html_js_1 = require_html();
    var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
    var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
      ...IMPLICIT_END_TAG_REQUIRED,
      html_js_1.TAG_ID.CAPTION,
      html_js_1.TAG_ID.COLGROUP,
      html_js_1.TAG_ID.TBODY,
      html_js_1.TAG_ID.TD,
      html_js_1.TAG_ID.TFOOT,
      html_js_1.TAG_ID.TH,
      html_js_1.TAG_ID.THEAD,
      html_js_1.TAG_ID.TR
    ]);
    var SCOPING_ELEMENTS_HTML = /* @__PURE__ */ new Set([
      html_js_1.TAG_ID.APPLET,
      html_js_1.TAG_ID.CAPTION,
      html_js_1.TAG_ID.HTML,
      html_js_1.TAG_ID.MARQUEE,
      html_js_1.TAG_ID.OBJECT,
      html_js_1.TAG_ID.TABLE,
      html_js_1.TAG_ID.TD,
      html_js_1.TAG_ID.TEMPLATE,
      html_js_1.TAG_ID.TH
    ]);
    var SCOPING_ELEMENTS_HTML_LIST = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, html_js_1.TAG_ID.OL, html_js_1.TAG_ID.UL]);
    var SCOPING_ELEMENTS_HTML_BUTTON = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, html_js_1.TAG_ID.BUTTON]);
    var SCOPING_ELEMENTS_MATHML = /* @__PURE__ */ new Set([html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.TAG_ID.MI, html_js_1.TAG_ID.MN, html_js_1.TAG_ID.MO, html_js_1.TAG_ID.MS, html_js_1.TAG_ID.MTEXT]);
    var SCOPING_ELEMENTS_SVG = /* @__PURE__ */ new Set([html_js_1.TAG_ID.DESC, html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.TAG_ID.TITLE]);
    var TABLE_ROW_CONTEXT = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
    var TABLE_BODY_CONTEXT = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
    var TABLE_CONTEXT = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
    var TABLE_CELLS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH]);
    var OpenElementStack = class {
      get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
      }
      constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
        this.current = document;
      }
      //Index of element
      _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
      }
      //Update current element
      _isInTemplate() {
        return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
      }
      //Mutations
      push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
      }
      pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this.current = newElement;
        }
      }
      insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
          this._updateCurrentElement();
        }
        if (this.current && this.currentTagId !== void 0) {
          this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
        }
      }
      popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
          targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
        this.shortenToLength(Math.max(targetIdx, 0));
      }
      shortenToLength(idx) {
        while (this.stackTop >= idx) {
          const popped = this.current;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount -= 1;
          }
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(popped, this.stackTop < idx);
        }
      }
      popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(Math.max(idx, 0));
      }
      popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(Math.max(idx, 0));
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(html_js_1.NUMBERED_HEADERS, html_js_1.NS.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
      }
      popAllUpToHtmlElement() {
        this.tmplCount = 0;
        this.shortenToLength(1);
      }
      _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (tagNames.has(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
            return i;
          }
        }
        return -1;
      }
      clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
      }
      remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
          if (idx === this.stackTop) {
            this.pop();
          } else {
            this.items.splice(idx, 1);
            this.tagIDs.splice(idx, 1);
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(element, false);
          }
        }
      }
      //Search
      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
      }
      //Element in scope
      hasInDynamicScope(tagName, htmlScope) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
            case html_js_1.NS.HTML: {
              if (tn === tagName)
                return true;
              if (htmlScope.has(tn))
                return false;
              break;
            }
            case html_js_1.NS.SVG: {
              if (SCOPING_ELEMENTS_SVG.has(tn))
                return false;
              break;
            }
            case html_js_1.NS.MATHML: {
              if (SCOPING_ELEMENTS_MATHML.has(tn))
                return false;
              break;
            }
          }
        }
        return true;
      }
      hasInScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML);
      }
      hasInListItemScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_LIST);
      }
      hasInButtonScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_BUTTON);
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
            case html_js_1.NS.HTML: {
              if (html_js_1.NUMBERED_HEADERS.has(tn))
                return true;
              if (SCOPING_ELEMENTS_HTML.has(tn))
                return false;
              break;
            }
            case html_js_1.NS.SVG: {
              if (SCOPING_ELEMENTS_SVG.has(tn))
                return false;
              break;
            }
            case html_js_1.NS.MATHML: {
              if (SCOPING_ELEMENTS_MATHML.has(tn))
                return false;
              break;
            }
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case tagName: {
              return true;
            }
            case html_js_1.TAG_ID.TABLE:
            case html_js_1.TAG_ID.HTML: {
              return false;
            }
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case html_js_1.TAG_ID.TBODY:
            case html_js_1.TAG_ID.THEAD:
            case html_js_1.TAG_ID.TFOOT: {
              return true;
            }
            case html_js_1.TAG_ID.TABLE:
            case html_js_1.TAG_ID.HTML: {
              return false;
            }
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case tagName: {
              return true;
            }
            case html_js_1.TAG_ID.OPTION:
            case html_js_1.TAG_ID.OPTGROUP: {
              break;
            }
            default: {
              return false;
            }
          }
        }
        return true;
      }
      //Implied end tags
      generateImpliedEndTags() {
        while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== void 0 && this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
    };
    exports2.OpenElementStack = OpenElementStack;
  }
});

// node_modules/parse5/dist/cjs/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  "node_modules/parse5/dist/cjs/parser/formatting-element-list.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FormattingElementList = exports2.EntryType = void 0;
    var NOAH_ARK_CAPACITY = 3;
    var EntryType;
    (function(EntryType2) {
      EntryType2[EntryType2["Marker"] = 0] = "Marker";
      EntryType2[EntryType2["Element"] = 1] = "Element";
    })(EntryType || (exports2.EntryType = EntryType = {}));
    var MARKER = { type: EntryType.Marker };
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.treeAdapter = treeAdapter;
        this.entries = [];
        this.bookmark = null;
      }
      //Noah Ark's condition
      //OPTIMIZATION: at first we try to find possible candidates for exclusion using
      //lightweight heuristics without thorough attributes check.
      _getNoahArkConditionCandidates(newElement, neAttrs) {
        const candidates = [];
        const neAttrsLength = neAttrs.length;
        const neTagName = this.treeAdapter.getTagName(newElement);
        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
        for (let i = 0; i < this.entries.length; i++) {
          const entry = this.entries[i];
          if (entry.type === EntryType.Marker) {
            break;
          }
          const { element } = entry;
          if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
            const elementAttrs = this.treeAdapter.getAttrList(element);
            if (elementAttrs.length === neAttrsLength) {
              candidates.push({ idx: i, attrs: elementAttrs });
            }
          }
        }
        return candidates;
      }
      _ensureNoahArkCondition(newElement) {
        if (this.entries.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrs = this.treeAdapter.getAttrList(newElement);
        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
        if (candidates.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
        let validCandidates = 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
            validCandidates += 1;
            if (validCandidates >= NOAH_ARK_CAPACITY) {
              this.entries.splice(candidate.idx, 1);
            }
          }
        }
      }
      //Mutations
      insertMarker() {
        this.entries.unshift(MARKER);
      }
      pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
          type: EntryType.Element,
          element,
          token
        });
      }
      insertElementAfterBookmark(element, token) {
        const bookmarkIdx = this.entries.indexOf(this.bookmark);
        this.entries.splice(bookmarkIdx, 0, {
          type: EntryType.Element,
          element,
          token
        });
      }
      removeEntry(entry) {
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex !== -1) {
          this.entries.splice(entryIndex, 1);
        }
      }
      /**
       * Clears the list of formatting elements up to the last marker.
       *
       * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
       */
      clearToLastMarker() {
        const markerIdx = this.entries.indexOf(MARKER);
        if (markerIdx === -1) {
          this.entries.length = 0;
        } else {
          this.entries.splice(0, markerIdx + 1);
        }
      }
      //Search
      getElementEntryInScopeWithTagName(tagName) {
        const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
        return entry && entry.type === EntryType.Element ? entry : null;
      }
      getElementEntry(element) {
        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
      }
    };
    exports2.FormattingElementList = FormattingElementList;
  }
});

// node_modules/parse5/dist/cjs/tree-adapters/default.js
var require_default = __commonJS({
  "node_modules/parse5/dist/cjs/tree-adapters/default.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultTreeAdapter = void 0;
    var html_js_1 = require_html();
    exports2.defaultTreeAdapter = {
      //Node construction
      createDocument() {
        return {
          nodeName: "#document",
          mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      },
      createDocumentFragment() {
        return {
          nodeName: "#document-fragment",
          childNodes: []
        };
      },
      createElement(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      },
      createCommentNode(data) {
        return {
          nodeName: "#comment",
          data,
          parentNode: null
        };
      },
      createTextNode(value) {
        return {
          nodeName: "#text",
          value,
          parentNode: null
        };
      },
      //Tree mutation
      appendChild(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      },
      insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      },
      setTemplateContent(templateElement, contentElement) {
        templateElement.content = contentElement;
      },
      getTemplateContent(templateElement) {
        return templateElement.content;
      },
      setDocumentType(document, name, publicId, systemId) {
        const doctypeNode = document.childNodes.find((node) => node.nodeName === "#documentType");
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          const node = {
            nodeName: "#documentType",
            name,
            publicId,
            systemId,
            parentNode: null
          };
          exports2.defaultTreeAdapter.appendChild(document, node);
        }
      },
      setDocumentMode(document, mode) {
        document.mode = mode;
      },
      getDocumentMode(document) {
        return document.mode;
      },
      detachNode(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      },
      insertText(parentNode, text) {
        if (parentNode.childNodes.length > 0) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (exports2.defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
            return;
          }
        }
        exports2.defaultTreeAdapter.appendChild(parentNode, exports2.defaultTreeAdapter.createTextNode(text));
      },
      insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && exports2.defaultTreeAdapter.isTextNode(prevNode)) {
          prevNode.value += text;
        } else {
          exports2.defaultTreeAdapter.insertBefore(parentNode, exports2.defaultTreeAdapter.createTextNode(text), referenceNode);
        }
      },
      adoptAttributes(recipient, attrs) {
        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
        for (let j = 0; j < attrs.length; j++) {
          if (!recipientAttrsMap.has(attrs[j].name)) {
            recipient.attrs.push(attrs[j]);
          }
        }
      },
      //Tree traversing
      getFirstChild(node) {
        return node.childNodes[0];
      },
      getChildNodes(node) {
        return node.childNodes;
      },
      getParentNode(node) {
        return node.parentNode;
      },
      getAttrList(element) {
        return element.attrs;
      },
      //Node data
      getTagName(element) {
        return element.tagName;
      },
      getNamespaceURI(element) {
        return element.namespaceURI;
      },
      getTextNodeContent(textNode) {
        return textNode.value;
      },
      getCommentNodeContent(commentNode) {
        return commentNode.data;
      },
      getDocumentTypeNodeName(doctypeNode) {
        return doctypeNode.name;
      },
      getDocumentTypeNodePublicId(doctypeNode) {
        return doctypeNode.publicId;
      },
      getDocumentTypeNodeSystemId(doctypeNode) {
        return doctypeNode.systemId;
      },
      //Node types
      isTextNode(node) {
        return node.nodeName === "#text";
      },
      isCommentNode(node) {
        return node.nodeName === "#comment";
      },
      isDocumentTypeNode(node) {
        return node.nodeName === "#documentType";
      },
      isElementNode(node) {
        return Object.prototype.hasOwnProperty.call(node, "tagName");
      },
      // Source code location
      setNodeSourceCodeLocation(node, location) {
        node.sourceCodeLocation = location;
      },
      getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(node, endLocation) {
        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
      }
    };
  }
});

// node_modules/parse5/dist/cjs/common/doctype.js
var require_doctype = __commonJS({
  "node_modules/parse5/dist/cjs/common/doctype.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isConforming = isConforming;
    exports2.getDocumentMode = getDocumentMode;
    var html_js_1 = require_html();
    var VALID_DOCTYPE_NAME = "html";
    var VALID_SYSTEM_ID = "about:legacy-compat";
    var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html"
    ]);
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    function hasPrefix(publicId, prefixes) {
      return prefixes.some((prefix2) => publicId.startsWith(prefix2));
    }
    function isConforming(token) {
      return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
    }
    function getDocumentMode(token) {
      if (token.name !== VALID_DOCTYPE_NAME) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      const { systemId } = token;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      let { publicId } = token;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return html_js_1.DOCUMENT_MODE.NO_QUIRKS;
    }
  }
});

// node_modules/parse5/dist/cjs/common/foreign-content.js
var require_foreign_content = __commonJS({
  "node_modules/parse5/dist/cjs/common/foreign-content.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
    exports2.causesExit = causesExit;
    exports2.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
    exports2.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
    exports2.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
    exports2.adjustTokenSVGTagName = adjustTokenSVGTagName;
    exports2.isIntegrationPoint = isIntegrationPoint;
    var html_js_1 = require_html();
    var MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    var DEFINITION_URL_ATTR = "definitionurl";
    var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map((attr) => [attr.toLowerCase(), attr]));
    var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
      ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: html_js_1.NS.XLINK }],
      ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: html_js_1.NS.XLINK }],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: html_js_1.NS.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: html_js_1.NS.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: html_js_1.NS.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: html_js_1.NS.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: html_js_1.NS.XLINK }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: html_js_1.NS.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: html_js_1.NS.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: html_js_1.NS.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: html_js_1.NS.XMLNS }]
    ]);
    exports2.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map((tn) => [tn.toLowerCase(), tn]));
    var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
      html_js_1.TAG_ID.B,
      html_js_1.TAG_ID.BIG,
      html_js_1.TAG_ID.BLOCKQUOTE,
      html_js_1.TAG_ID.BODY,
      html_js_1.TAG_ID.BR,
      html_js_1.TAG_ID.CENTER,
      html_js_1.TAG_ID.CODE,
      html_js_1.TAG_ID.DD,
      html_js_1.TAG_ID.DIV,
      html_js_1.TAG_ID.DL,
      html_js_1.TAG_ID.DT,
      html_js_1.TAG_ID.EM,
      html_js_1.TAG_ID.EMBED,
      html_js_1.TAG_ID.H1,
      html_js_1.TAG_ID.H2,
      html_js_1.TAG_ID.H3,
      html_js_1.TAG_ID.H4,
      html_js_1.TAG_ID.H5,
      html_js_1.TAG_ID.H6,
      html_js_1.TAG_ID.HEAD,
      html_js_1.TAG_ID.HR,
      html_js_1.TAG_ID.I,
      html_js_1.TAG_ID.IMG,
      html_js_1.TAG_ID.LI,
      html_js_1.TAG_ID.LISTING,
      html_js_1.TAG_ID.MENU,
      html_js_1.TAG_ID.META,
      html_js_1.TAG_ID.NOBR,
      html_js_1.TAG_ID.OL,
      html_js_1.TAG_ID.P,
      html_js_1.TAG_ID.PRE,
      html_js_1.TAG_ID.RUBY,
      html_js_1.TAG_ID.S,
      html_js_1.TAG_ID.SMALL,
      html_js_1.TAG_ID.SPAN,
      html_js_1.TAG_ID.STRONG,
      html_js_1.TAG_ID.STRIKE,
      html_js_1.TAG_ID.SUB,
      html_js_1.TAG_ID.SUP,
      html_js_1.TAG_ID.TABLE,
      html_js_1.TAG_ID.TT,
      html_js_1.TAG_ID.U,
      html_js_1.TAG_ID.UL,
      html_js_1.TAG_ID.VAR
    ]);
    function causesExit(startTagToken) {
      const tn = startTagToken.tagID;
      const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
      return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
    }
    function adjustTokenMathMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
          token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    }
    function adjustTokenSVGAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrName != null) {
          token.attrs[i].name = adjustedAttrName;
        }
      }
    }
    function adjustTokenXMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrEntry) {
          token.attrs[i].prefix = adjustedAttrEntry.prefix;
          token.attrs[i].name = adjustedAttrEntry.name;
          token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    }
    function adjustTokenSVGTagName(token) {
      const adjustedTagName = exports2.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
      if (adjustedTagName != null) {
        token.tagName = adjustedTagName;
        token.tagID = (0, html_js_1.getTagID)(token.tagName);
      }
    }
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
    }
    function isIntegrationPoint(tn, ns, attrs, foreignNS) {
      return (!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
    }
  }
});

// node_modules/parse5/dist/cjs/parser/index.js
var require_parser = __commonJS({
  "node_modules/parse5/dist/cjs/parser/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Parser = void 0;
    var index_js_1 = require_tokenizer();
    var open_element_stack_js_1 = require_open_element_stack();
    var formatting_element_list_js_1 = require_formatting_element_list();
    var default_js_1 = require_default();
    var doctype = require_doctype();
    var foreignContent = require_foreign_content();
    var error_codes_js_1 = require_error_codes();
    var unicode = require_unicode();
    var html_js_1 = require_html();
    var token_js_1 = require_token();
    var HIDDEN_INPUT_TYPE = "hidden";
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var InsertionMode;
    (function(InsertionMode2) {
      InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
      InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
      InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
      InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
      InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
      InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
      InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
      InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
      InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
      InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
      InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
      InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
      InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
      InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
      InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
      InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
      InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
    })(InsertionMode || (InsertionMode = {}));
    var BASE_LOC = {
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    var defaultParserOptions = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      treeAdapter: default_js_1.defaultTreeAdapter,
      onParseError: null
    };
    var Parser = class {
      constructor(options, document, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        this.currentNotInHTML = false;
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        if (this.onParseError) {
          this.options.sourceCodeLocationInfo = true;
        }
        this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
        this.tokenizer = new index_js_1.Tokenizer(this.options, this);
        this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? (0, html_js_1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1.TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
      }
      // API
      static parse(html, options) {
        const parser = new this(options);
        parser.tokenizer.write(html, true);
        return parser.document;
      }
      static getFragmentParser(fragmentContext, options) {
        const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(html_js_1.TAG_NAMES.TEMPLATE, html_js_1.NS.HTML, []);
        const documentMock = opts.treeAdapter.createElement("documentmock", html_js_1.NS.HTML, []);
        const parser = new this(opts, documentMock, fragmentContext);
        if (parser.fragmentContextID === html_js_1.TAG_ID.TEMPLATE) {
          parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        return parser;
      }
      getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      //Errors
      /** @internal */
      _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
          return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
          code,
          startLine: loc.startLine,
          startCol: loc.startCol,
          startOffset: loc.startOffset,
          endLine: beforeToken ? loc.startLine : loc.endLine,
          endCol: beforeToken ? loc.startCol : loc.endCol,
          endOffset: beforeToken ? loc.startOffset : loc.endOffset
        };
        this.onParseError(err);
      }
      //Stack events
      /** @internal */
      onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
          this._setContextModes(node, tid);
      }
      /** @internal */
      onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
          this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
          let current;
          let currentTagId;
          if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
          } else {
            ({ current, currentTagId } = this.openElements);
          }
          this._setContextModes(current, currentTagId);
        }
      }
      _setContextModes(current, tid) {
        const isHTML = current === this.document || current && this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && current !== void 0 && tid !== void 0 && !this._isIntegrationPoint(tid, current);
      }
      /** @protected */
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, html_js_1.NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
      }
      switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
      }
      //Fragment parsing
      /** @protected */
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      /** @protected */
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
          if (this.treeAdapter.getTagName(node) === html_js_1.TAG_NAMES.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1.NS.HTML) {
          return;
        }
        switch (this.fragmentContextID) {
          case html_js_1.TAG_ID.TITLE:
          case html_js_1.TAG_ID.TEXTAREA: {
            this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
            break;
          }
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.XMP:
          case html_js_1.TAG_ID.IFRAME:
          case html_js_1.TAG_ID.NOEMBED:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.NOSCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
            break;
          }
          case html_js_1.TAG_ID.SCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
            break;
          }
          case html_js_1.TAG_ID.PLAINTEXT: {
            this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
            break;
          }
          default:
        }
      }
      //Tree mutation
      /** @protected */
      _setDocumentType(token) {
        const name = token.name || "";
        const publicId = token.publicId || "";
        const systemId = token.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
          const documentChildren = this.treeAdapter.getChildNodes(this.document);
          const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
          if (docTypeNode) {
            this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
          }
        }
      }
      /** @protected */
      _attachElementToTree(element, location) {
        if (this.options.sourceCodeLocationInfo) {
          const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(parent !== null && parent !== void 0 ? parent : this.document, element);
        }
      }
      /**
       * For self-closing tags. Add an element to the tree, but skip adding it
       * to the stack.
       */
      /** @protected */
      _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
      }
      /** @protected */
      _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
      }
      /** @protected */
      _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, html_js_1.NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
      }
      /** @protected */
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1.NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(content, null);
      }
      /** @protected */
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(html_js_1.TAG_NAMES.HTML, html_js_1.NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, html_js_1.TAG_ID.HTML);
      }
      /** @protected */
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
      }
      /** @protected */
      _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
          ({ parent, beforeElement } = this._findFosterParentingLocation());
          if (beforeElement) {
            this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
          } else {
            this.treeAdapter.insertText(parent, token.chars);
          }
        } else {
          parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
          return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
          const { endLine, endCol, endOffset } = token.location;
          this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        } else if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
      }
      /** @protected */
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      /** @protected */
      _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
          const ctLoc = closingToken.location;
          const tn = this.treeAdapter.getTagName(element);
          const endLoc = (
            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
            // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
            closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName ? {
              endTag: Object.assign({}, ctLoc),
              endLine: ctLoc.endLine,
              endCol: ctLoc.endCol,
              endOffset: ctLoc.endOffset
            } : {
              endLine: ctLoc.startLine,
              endCol: ctLoc.startCol,
              endOffset: ctLoc.startOffset
            }
          );
          this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
      }
      //Token processing
      shouldProcessStartTagTokenInForeignContent(token) {
        if (!this.currentNotInHTML)
          return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
          current = this.fragmentContext;
          currentTagId = this.fragmentContextID;
        } else {
          ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === html_js_1.TAG_ID.SVG && this.treeAdapter.getTagName(current) === html_js_1.TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.MATHML) {
          return false;
        }
        return (
          // Check that `current` is not an integration point for HTML or MathML elements.
          this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
          // integration point.
          (token.tagID === html_js_1.TAG_ID.MGLYPH || token.tagID === html_js_1.TAG_ID.MALIGNMARK) && currentTagId !== void 0 && !this._isIntegrationPoint(currentTagId, current, html_js_1.NS.HTML)
        );
      }
      /** @protected */
      _processToken(token) {
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            this.onCharacter(token);
            break;
          }
          case token_js_1.TokenType.NULL_CHARACTER: {
            this.onNullCharacter(token);
            break;
          }
          case token_js_1.TokenType.COMMENT: {
            this.onComment(token);
            break;
          }
          case token_js_1.TokenType.DOCTYPE: {
            this.onDoctype(token);
            break;
          }
          case token_js_1.TokenType.START_TAG: {
            this._processStartTag(token);
            break;
          }
          case token_js_1.TokenType.END_TAG: {
            this.onEndTag(token);
            break;
          }
          case token_js_1.TokenType.EOF: {
            this.onEof(token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            this.onWhitespaceCharacter(token);
            break;
          }
        }
      }
      //Integration points
      /** @protected */
      _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
      }
      //Active formatting elements reconstruction
      /** @protected */
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
          const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
          const unopenIdx = endIndex === -1 ? listLength - 1 : endIndex - 1;
          for (let i = unopenIdx; i >= 0; i--) {
            const entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      //Close elements
      /** @protected */
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
      }
      /** @protected */
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.P);
        this.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.P);
      }
      //Insertion modes
      /** @protected */
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TR: {
              this.insertionMode = InsertionMode.IN_ROW;
              return;
            }
            case html_js_1.TAG_ID.TBODY:
            case html_js_1.TAG_ID.THEAD:
            case html_js_1.TAG_ID.TFOOT: {
              this.insertionMode = InsertionMode.IN_TABLE_BODY;
              return;
            }
            case html_js_1.TAG_ID.CAPTION: {
              this.insertionMode = InsertionMode.IN_CAPTION;
              return;
            }
            case html_js_1.TAG_ID.COLGROUP: {
              this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
              return;
            }
            case html_js_1.TAG_ID.TABLE: {
              this.insertionMode = InsertionMode.IN_TABLE;
              return;
            }
            case html_js_1.TAG_ID.BODY: {
              this.insertionMode = InsertionMode.IN_BODY;
              return;
            }
            case html_js_1.TAG_ID.FRAMESET: {
              this.insertionMode = InsertionMode.IN_FRAMESET;
              return;
            }
            case html_js_1.TAG_ID.SELECT: {
              this._resetInsertionModeForSelect(i);
              return;
            }
            case html_js_1.TAG_ID.TEMPLATE: {
              this.insertionMode = this.tmplInsertionModeStack[0];
              return;
            }
            case html_js_1.TAG_ID.HTML: {
              this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
              return;
            }
            case html_js_1.TAG_ID.TD:
            case html_js_1.TAG_ID.TH: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_CELL;
                return;
              }
              break;
            }
            case html_js_1.TAG_ID.HEAD: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_HEAD;
                return;
              }
              break;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_BODY;
      }
      /** @protected */
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const tn = this.openElements.tagIDs[i];
            if (tn === html_js_1.TAG_ID.TEMPLATE) {
              break;
            } else if (tn === html_js_1.TAG_ID.TABLE) {
              this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
              return;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
      }
      //Foster parenting
      /** @protected */
      _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
      }
      /** @protected */
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
      }
      /** @protected */
      _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          switch (this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TEMPLATE: {
              if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1.NS.HTML) {
                return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
              }
              break;
            }
            case html_js_1.TAG_ID.TABLE: {
              const parent = this.treeAdapter.getParentNode(openElement);
              if (parent) {
                return { parent, beforeElement: openElement };
              }
              return { parent: this.openElements.items[i - 1], beforeElement: null };
            }
            default:
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      /** @protected */
      _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        } else {
          this.treeAdapter.appendChild(location.parent, element);
        }
      }
      //Special elements
      /** @protected */
      _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return html_js_1.SPECIAL_ELEMENTS[ns].has(id);
      }
      /** @internal */
      onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          characterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE: {
            characterInBody(this, token);
            break;
          }
          case InsertionMode.TEXT:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            characterInTableText(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          nullCharacterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
          appendComment(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
          case InsertionMode.BEFORE_HTML:
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            appendComment(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            appendCommentToRootHtmlElement(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            appendCommentToDocument(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            doctypeInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD: {
            this._err(token, error_codes_js_1.ERR.misplacedDoctype);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
          this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      /**
       * Processes a given start tag.
       *
       * `onStartTag` checks if a self-closing tag was recognized. When a token
       * is moved inbetween multiple insertion modes, this check for self-closing
       * could lead to false positives. To avoid this, `_processStartTag` is used
       * for nested calls.
       *
       * @param token The token to process.
       * @protected
       */
      _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
          startTagInForeignContent(this, token);
        } else {
          this._startTagOutsideForeignContent(token);
        }
      }
      /** @protected */
      _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            startTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            startTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            startTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            startTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            startTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            startTagInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            startTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            startTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            startTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            startTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            startTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            startTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            startTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            startTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            startTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            startTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            startTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            startTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            startTagAfterAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            startTagAfterAfterFrameset(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
          endTagInForeignContent(this, token);
        } else {
          this._endTagOutsideForeignContent(token);
        }
      }
      /** @protected */
      _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            endTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            endTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            endTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            endTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            endTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            endTagInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            endTagInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            endTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            endTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            endTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            endTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            endTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            endTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            endTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            endTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            endTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            endTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            endTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            endTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onEof(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            eofInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            eofInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            eofInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            stopParsing(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
          this.skipNextNewLine = false;
          if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
            if (token.chars.length === 1) {
              return;
            }
            token.chars = token.chars.substr(1);
          }
        }
        if (this.tokenizer.inForeignNode) {
          this._insertCharacters(token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.TEXT:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.AFTER_BODY:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            whitespaceCharacterInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            whitespaceCharacterInTableText(this, token);
            break;
          }
          default:
        }
      }
    };
    exports2.Parser = Parser;
    function aaObtainFormattingElementEntry(p, token) {
      let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
      if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
          p.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p.openElements.hasInScope(token.tagID)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p, token);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p, formattingElementEntry) {
      let furthestBlock = null;
      let idx = p.openElements.stackTop;
      for (; idx >= 0; idx--) {
        const element = p.openElements.items[idx];
        if (element === formattingElementEntry.element) {
          break;
        }
        if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
          furthestBlock = element;
        }
      }
      if (!furthestBlock) {
        p.openElements.shortenToLength(Math.max(idx, 0));
        p.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p.activeFormattingElements.removeEntry(elementEntry);
          }
          p.openElements.remove(element);
        } else {
          element = aaRecreateElementFromEntry(p, elementEntry);
          if (lastElement === furthestBlock) {
            p.activeFormattingElements.bookmark = elementEntry;
          }
          p.treeAdapter.detachNode(lastElement);
          p.treeAdapter.appendChild(element, lastElement);
          lastElement = element;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p, elementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
      const tn = p.treeAdapter.getTagName(commonAncestor);
      const tid = (0, html_js_1.getTagID)(tn);
      if (p._isElementCausesFosterParenting(tid)) {
        p._fosterParentElement(lastElement);
      } else {
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tid === html_js_1.TAG_ID.TEMPLATE && ns === html_js_1.NS.HTML) {
          commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const { token } = formattingElementEntry;
      const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
      p._adoptNodes(furthestBlock, newElement);
      p.treeAdapter.appendChild(furthestBlock, newElement);
      p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      p.openElements.remove(formattingElementEntry.element);
      p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
    }
    function callAdoptionAgency(p, token) {
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        if (commonAncestor)
          aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
      }
    }
    function appendComment(p, token) {
      p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
    }
    function appendCommentToRootHtmlElement(p, token) {
      p._appendCommentNode(token, p.openElements.items[0]);
    }
    function appendCommentToDocument(p, token) {
      p._appendCommentNode(token, p.document);
    }
    function stopParsing(p, token) {
      p.stopped = true;
      if (token.location) {
        const target = p.fragmentContext ? 0 : 2;
        for (let i = p.openElements.stackTop; i >= target; i--) {
          p._setEndLocation(p.openElements.items[i], token);
        }
        if (!p.fragmentContext && p.openElements.stackTop >= 0) {
          const htmlElement = p.openElements.items[0];
          const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
          if (htmlLocation && !htmlLocation.endTag) {
            p._setEndLocation(htmlElement, token);
            if (p.openElements.stackTop >= 1) {
              const bodyElement = p.openElements.items[1];
              const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
              if (bodyLocation && !bodyLocation.endTag) {
                p._setEndLocation(bodyElement, token);
              }
            }
          }
        }
      }
    }
    function doctypeInInitialMode(p, token) {
      p._setDocumentType(token);
      const mode = token.forceQuirks ? html_js_1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
      if (!doctype.isConforming(token)) {
        p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
      }
      p.treeAdapter.setDocumentMode(p.document, mode);
      p.insertionMode = InsertionMode.BEFORE_HTML;
    }
    function tokenInInitialMode(p, token) {
      p._err(token, error_codes_js_1.ERR.missingDoctype, true);
      p.treeAdapter.setDocumentMode(p.document, html_js_1.DOCUMENT_MODE.QUIRKS);
      p.insertionMode = InsertionMode.BEFORE_HTML;
      p._processToken(token);
    }
    function startTagBeforeHtml(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.BEFORE_HEAD;
      } else {
        tokenBeforeHtml(p, token);
      }
    }
    function endTagBeforeHtml(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHtml(p, token);
      }
    }
    function tokenBeforeHtml(p, token) {
      p._insertFakeRootElement();
      p.insertionMode = InsertionMode.BEFORE_HEAD;
      p._processToken(token);
    }
    function startTagBeforeHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.headElement = p.openElements.current;
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        default: {
          tokenBeforeHead(p, token);
        }
      }
    }
    function endTagBeforeHead(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHead(p, token);
      } else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.HEAD, html_js_1.TAG_ID.HEAD);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TITLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          } else {
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
          }
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          break;
        }
        case html_js_1.TAG_ID.SCRIPT: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          p._insertTemplate(token);
          p.activeFormattingElements.insertMarker();
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_TEMPLATE;
          p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenInHead(p, token);
        }
      }
    }
    function endTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HEAD: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.AFTER_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.HTML: {
          tokenInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function templateEndTagInHead(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.generateImpliedEndTagsThoroughly();
        if (p.openElements.currentTagId !== html_js_1.TAG_ID.TEMPLATE) {
          p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
        }
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
      } else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(p, token) {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      p._processToken(token);
    }
    function startTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
          break;
        }
        default: {
          tokenInHeadNoScript(p, token);
        }
      }
    }
    function endTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.NOSCRIPT: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BR: {
          tokenInHeadNoScript(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenInHeadNoScript(p, token) {
      const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
      p._err(token, errCode);
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_BODY;
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_FRAMESET;
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE: {
          p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
          p.openElements.push(p.headElement, html_js_1.TAG_ID.HEAD);
          startTagInHead(p, token);
          p.openElements.remove(p.headElement);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenAfterHead(p, token);
        }
      }
    }
    function endTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.BR: {
          tokenAfterHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenAfterHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.BODY, html_js_1.TAG_ID.BODY);
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function modeInBody(p, token) {
      switch (token.type) {
        case token_js_1.TokenType.CHARACTER: {
          characterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.WHITESPACE_CHARACTER: {
          whitespaceCharacterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.COMMENT: {
          appendComment(p, token);
          break;
        }
        case token_js_1.TokenType.START_TAG: {
          startTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.END_TAG: {
          endTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.EOF: {
          eofInBody(p, token);
          break;
        }
        default:
      }
    }
    function whitespaceCharacterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
    }
    function characterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function htmlStartTagInBody(p, token) {
      if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
      }
    }
    function bodyStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
      }
    }
    function framesetStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_FRAMESET;
      }
    }
    function addressStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function numberedHeaderStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      if (p.openElements.currentTagId !== void 0 && html_js_1.NUMBERED_HEADERS.has(p.openElements.currentTagId)) {
        p.openElements.pop();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function preStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.framesetOk = false;
    }
    function formStartTagInBody(p, token) {
      const inTemplate = p.openElements.tmplCount > 0;
      if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        if (!inTemplate) {
          p.formElement = p.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p, token) {
      p.framesetOk = false;
      const tn = token.tagID;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const elementId = p.openElements.tagIDs[i];
        if (tn === html_js_1.TAG_ID.LI && elementId === html_js_1.TAG_ID.LI || (tn === html_js_1.TAG_ID.DD || tn === html_js_1.TAG_ID.DT) && (elementId === html_js_1.TAG_ID.DD || elementId === html_js_1.TAG_ID.DT)) {
          p.openElements.generateImpliedEndTagsWithExclusion(elementId);
          p.openElements.popUntilTagNamePopped(elementId);
          break;
        }
        if (elementId !== html_js_1.TAG_ID.ADDRESS && elementId !== html_js_1.TAG_ID.DIV && elementId !== html_js_1.TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
          break;
        }
      }
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function plaintextStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
    }
    function buttonStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.BUTTON);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
    }
    function aStartTagInBody(p, token) {
      const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1.TAG_NAMES.A);
      if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function bStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function nobrStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      if (p.openElements.hasInScope(html_js_1.TAG_ID.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function appletStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
    }
    function tableStartTagInBody(p, token) {
      if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TABLE;
    }
    function areaStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function isHiddenInput(token) {
      const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1.ATTRS.TYPE);
      return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
    }
    function inputStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      if (!isHiddenInput(token)) {
        p.framesetOk = false;
      }
      token.ackSelfClosing = true;
    }
    function paramStartTagInBody(p, token) {
      p._appendElement(token, html_js_1.NS.HTML);
      token.ackSelfClosing = true;
    }
    function hrStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function imageStartTagInBody(p, token) {
      token.tagName = html_js_1.TAG_NAMES.IMG;
      token.tagID = html_js_1.TAG_ID.IMG;
      areaStartTagInBody(p, token);
    }
    function textareaStartTagInBody(p, token) {
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
      p.originalInsertionMode = p.insertionMode;
      p.framesetOk = false;
      p.insertionMode = InsertionMode.TEXT;
    }
    function xmpStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._reconstructActiveFormattingElements();
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function iframeStartTagInBody(p, token) {
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function rawTextStartTagInBody(p, token) {
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function selectStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
    }
    function optgroupStartTagInBody(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rbStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTags();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rtStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.RTC);
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function mathStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.MATHML);
      } else {
        p._insertElement(token, html_js_1.NS.MATHML);
      }
      token.ackSelfClosing = true;
    }
    function svgStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.SVG);
      } else {
        p._insertElement(token, html_js_1.NS.SVG);
      }
      token.ackSelfClosing = true;
    }
    function genericStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function startTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          bStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.A: {
          aStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.P:
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.SEARCH:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI:
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          listItemStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.IMG:
        case html_js_1.TAG_ID.WBR:
        case html_js_1.TAG_ID.AREA:
        case html_js_1.TAG_ID.EMBED:
        case html_js_1.TAG_ID.KEYGEN: {
          areaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HR: {
          hrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RB:
        case html_js_1.TAG_ID.RTC: {
          rbStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RT:
        case html_js_1.TAG_ID.RP: {
          rtStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.LISTING: {
          preStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.XMP: {
          xmpStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SVG: {
          svgStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TITLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOBR: {
          nobrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.MATH: {
          mathStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PARAM:
        case html_js_1.TAG_ID.TRACK:
        case html_js_1.TAG_ID.SOURCE: {
          paramStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IMAGE: {
          imageStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BUTTON: {
          buttonStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IFRAME: {
          iframeStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          selectStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION:
        case html_js_1.TAG_ID.OPTGROUP: {
          optgroupStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOEMBED:
        case html_js_1.TAG_ID.NOFRAMES: {
          rawTextStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          framesetStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEXTAREA: {
          textareaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            rawTextStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.PLAINTEXT: {
          plaintextStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TR:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.FRAME:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP: {
          break;
        }
        default: {
          genericStartTagInBody(p, token);
        }
      }
    }
    function bodyEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        if (p.options.sourceCodeLocationInfo) {
          const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
          if (bodyElement) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
    function htmlEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        endTagAfterBody(p, token);
      }
    }
    function addressEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p) {
      const inTemplate = p.openElements.tmplCount > 0;
      const { formElement } = p;
      if (!inTemplate) {
        p.formElement = null;
      }
      if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1.TAG_ID.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.FORM);
        } else if (formElement) {
          p.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p) {
      if (!p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._insertFakeElement(html_js_1.TAG_NAMES.P, html_js_1.TAG_ID.P);
      }
      p._closePElement();
    }
    function liEndTagInBody(p) {
      if (p.openElements.hasInListItemScope(html_js_1.TAG_ID.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.LI);
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.LI);
      }
    }
    function ddEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p) {
      if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p) {
      p._reconstructActiveFormattingElements();
      p._insertFakeElement(html_js_1.TAG_NAMES.BR, html_js_1.TAG_ID.BR);
      p.openElements.pop();
      p.framesetOk = false;
    }
    function genericEndTagInBody(p, token) {
      const tn = token.tagName;
      const tid = token.tagID;
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        const elementId = p.openElements.tagIDs[i];
        if (tid === elementId && (tid !== html_js_1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tid);
          if (p.openElements.stackTop >= i)
            p.openElements.shortenToLength(i);
          break;
        }
        if (p._isSpecialElement(element, elementId)) {
          break;
        }
      }
    }
    function endTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.A:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.NOBR:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          callAdoptionAgency(p, token);
          break;
        }
        case html_js_1.TAG_ID.P: {
          pEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.BUTTON:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.SEARCH:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.LISTING:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI: {
          liEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          ddEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BR: {
          brEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          genericEndTagInBody(p, token);
        }
      }
    }
    function eofInBody(p, token) {
      if (p.tmplInsertionModeStack.length > 0) {
        eofInTemplate(p, token);
      } else {
        stopParsing(p, token);
      }
    }
    function endTagInText(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.SCRIPT) {
        (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
      }
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
    }
    function eofInText(p, token) {
      p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
      p.onEof(token);
    }
    function characterInTable(p, token) {
      if (p.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
        p.pendingCharacterTokens.length = 0;
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = InsertionMode.IN_TABLE_TEXT;
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            characterInTableText(p, token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInTableText(p, token);
            break;
          }
        }
      } else {
        tokenInTable(p, token);
      }
    }
    function captionStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p.activeFormattingElements.insertMarker();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_CAPTION;
    }
    function colgroupStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
    }
    function colStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.COLGROUP, html_js_1.TAG_ID.COLGROUP);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
    }
    function tbodyStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
    }
    function tdStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.TBODY, html_js_1.TAG_ID.TBODY);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
    }
    function tableStartTagInTable(p, token) {
      if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
        p._resetInsertionMode();
        p._processStartTag(token);
      }
    }
    function inputStartTagInTable(p, token) {
      if (isHiddenInput(token)) {
        p._appendElement(token, html_js_1.NS.HTML);
      } else {
        tokenInTable(p, token);
      }
      token.ackSelfClosing = true;
    }
    function formStartTagInTable(p, token) {
      if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
      }
    }
    function startTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          tdStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          colStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          tbodyStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION: {
          captionStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.COLGROUP: {
          colgroupStartTagInTable(p, token);
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function endTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function tokenInTable(p, token) {
      const savedFosterParentingState = p.fosterParentingEnabled;
      p.fosterParentingEnabled = true;
      modeInBody(p, token);
      p.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
    }
    function characterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
      p.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p, token) {
      let i = 0;
      if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
          tokenInTable(p, p.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p.pendingCharacterTokens.length; i++) {
          p._insertCharacters(p.pendingCharacterTokens[i]);
        }
      }
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token);
    }
    var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.CAPTION, html_js_1.TAG_ID.COL, html_js_1.TAG_ID.COLGROUP, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.TH, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    function startTagInCaption(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCaption(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            if (tn === html_js_1.TAG_ID.TABLE) {
              endTagInTable(p, token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function endTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.COLGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function tokenInColumnGroup(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        p._processToken(token);
      }
    }
    function startTagInTableBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          p.openElements.clearBackToTableBodyContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_ROW;
          break;
        }
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableBodyContext();
          p._insertFakeElement(html_js_1.TAG_NAMES.TR, html_js_1.TAG_ID.TR);
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInTableBody(p, token) {
      const tn = token.tagID;
      switch (token.tagID) {
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            endTagInTable(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInTable(p, token);
        }
      }
    }
    function startTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableRowContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_CELL;
          p.activeFormattingElements.insertMarker();
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          break;
        }
        default: {
          endTagInTable(p, token);
        }
      }
    }
    function startTagInCell(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TH)) {
          p._closeTableCell();
          startTagInRow(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCell(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_ROW;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            endTagInRow(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.HR: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.INPUT:
        case html_js_1.TAG_ID.KEYGEN:
        case html_js_1.TAG_ID.TEXTAREA:
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
            if (token.tagID !== html_js_1.TAG_ID.SELECT) {
              p._processStartTag(token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.stackTop > 0 && p.openElements.currentTagId === html_js_1.TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function startTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
        p._resetInsertionMode();
        p._processStartTag(token);
      } else {
        startTagInSelect(p, token);
      }
    }
    function endTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
          p._resetInsertionMode();
          p.onEndTag(token);
        }
      } else {
        endTagInSelect(p, token);
      }
    }
    function startTagInTemplate(p, token) {
      switch (token.tagID) {
        // First, handle tags that can start without a mode change
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE: {
          startTagInHead(p, token);
          break;
        }
        // Re-process the token in the appropriate mode
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
          p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          startTagInColumnGroup(p, token);
          break;
        }
        case html_js_1.TAG_ID.TR: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
          p.insertionMode = InsertionMode.IN_TABLE_BODY;
          startTagInTableBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        }
        default: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
          p.insertionMode = InsertionMode.IN_BODY;
          startTagInBody(p, token);
        }
      }
    }
    function endTagInTemplate(p, token) {
      if (token.tagID === html_js_1.TAG_ID.TEMPLATE) {
        templateEndTagInHead(p, token);
      }
    }
    function eofInTemplate(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
        p.onEof(token);
      } else {
        stopParsing(p, token);
      }
    }
    function startTagAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterBody(p, token);
      }
    }
    function endTagAfterBody(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        if (!p.fragmentContext) {
          p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
        }
        if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1.TAG_ID.HTML) {
          p._setEndLocation(p.openElements.items[0], token);
          const bodyElement = p.openElements.items[1];
          if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
            p._setEndLocation(bodyElement, token);
          }
        }
      } else {
        tokenAfterBody(p, token);
      }
    }
    function tokenAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagInFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.FRAME: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1.TAG_ID.FRAMESET) {
          p.insertionMode = InsertionMode.AFTER_FRAMESET;
        }
      }
    }
    function startTagAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagAfterFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
      }
    }
    function startTagAfterAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterAfterBody(p, token);
      }
    }
    function tokenAfterAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagAfterAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function nullCharacterInForeignContent(p, token) {
      token.chars = unicode.REPLACEMENT_CHARACTER;
      p._insertCharacters(token);
    }
    function characterInForeignContent(p, token) {
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function popUntilHtmlOrIntegrationPoint(p) {
      while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1.NS.HTML && p.openElements.currentTagId !== void 0 && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
        p.openElements.pop();
      }
    }
    function startTagInForeignContent(p, token) {
      if (foreignContent.causesExit(token)) {
        popUntilHtmlOrIntegrationPoint(p);
        p._startTagOutsideForeignContent(token);
      } else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === html_js_1.NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token);
        } else if (currentNs === html_js_1.NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token);
          foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, currentNs);
        } else {
          p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p, token) {
      if (token.tagID === html_js_1.TAG_ID.P || token.tagID === html_js_1.TAG_ID.BR) {
        popUntilHtmlOrIntegrationPoint(p);
        p._endTagOutsideForeignContent(token);
        return;
      }
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === html_js_1.NS.HTML) {
          p._endTagOutsideForeignContent(token);
          break;
        }
        const tagName = p.treeAdapter.getTagName(element);
        if (tagName.toLowerCase() === token.tagName) {
          token.tagName = tagName;
          p.openElements.shortenToLength(i);
          break;
        }
      }
    }
  }
});

// node_modules/entities/dist/commonjs/escape.js
var require_escape = __commonJS({
  "node_modules/entities/dist/commonjs/escape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escapeText = exports2.escapeAttribute = exports2.escapeUTF8 = exports2.escape = exports2.getCodePoint = exports2.xmlReplacer = void 0;
    exports2.encodeXML = encodeXML;
    exports2.xmlReplacer = /["$&'<>\u0080-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports2.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt == null ? (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      (input, index) => input.codePointAt(index)
    );
    function encodeXML(input) {
      let returnValue = "";
      let lastIndex = 0;
      let match;
      while ((match = exports2.xmlReplacer.exec(input)) !== null) {
        const { index } = match;
        const char = input.charCodeAt(index);
        const next = xmlCodeMap.get(char);
        if (next === void 0) {
          returnValue += `${input.substring(lastIndex, index)}&#x${(0, exports2.getCodePoint)(input, index).toString(16)};`;
          lastIndex = exports2.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        } else {
          returnValue += input.substring(lastIndex, index) + next;
          lastIndex = index + 1;
        }
      }
      return returnValue + input.substr(lastIndex);
    }
    exports2.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        let match;
        let lastIndex = 0;
        let result = "";
        while (match = regex.exec(data)) {
          if (lastIndex !== match.index) {
            result += data.substring(lastIndex, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIndex = match.index + 1;
        }
        return result + data.substring(lastIndex);
      };
    }
    exports2.escapeUTF8 = getEscaper(/["&'<>]/g, xmlCodeMap);
    exports2.escapeAttribute = /* @__PURE__ */ getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports2.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// node_modules/parse5/dist/cjs/serializer/index.js
var require_serializer = __commonJS({
  "node_modules/parse5/dist/cjs/serializer/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serialize = serialize;
    exports2.serializeOuter = serializeOuter;
    var html_js_1 = require_html();
    var escape_1 = require_escape();
    var default_js_1 = require_default();
    var VOID_ELEMENTS = /* @__PURE__ */ new Set([
      html_js_1.TAG_NAMES.AREA,
      html_js_1.TAG_NAMES.BASE,
      html_js_1.TAG_NAMES.BASEFONT,
      html_js_1.TAG_NAMES.BGSOUND,
      html_js_1.TAG_NAMES.BR,
      html_js_1.TAG_NAMES.COL,
      html_js_1.TAG_NAMES.EMBED,
      html_js_1.TAG_NAMES.FRAME,
      html_js_1.TAG_NAMES.HR,
      html_js_1.TAG_NAMES.IMG,
      html_js_1.TAG_NAMES.INPUT,
      html_js_1.TAG_NAMES.KEYGEN,
      html_js_1.TAG_NAMES.LINK,
      html_js_1.TAG_NAMES.META,
      html_js_1.TAG_NAMES.PARAM,
      html_js_1.TAG_NAMES.SOURCE,
      html_js_1.TAG_NAMES.TRACK,
      html_js_1.TAG_NAMES.WBR
    ]);
    function isVoidElement(node, options) {
      return options.treeAdapter.isElementNode(node) && options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML && VOID_ELEMENTS.has(options.treeAdapter.getTagName(node));
    }
    var defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
    function serialize(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      if (isVoidElement(node, opts)) {
        return "";
      }
      return serializeChildNodes(node, opts);
    }
    function serializeOuter(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      return serializeNode(node, opts);
    }
    function serializeChildNodes(parentNode, options) {
      let html = "";
      const container = options.treeAdapter.isElementNode(parentNode) && options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE && options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML ? options.treeAdapter.getTemplateContent(parentNode) : parentNode;
      const childNodes = options.treeAdapter.getChildNodes(container);
      if (childNodes) {
        for (const currentNode of childNodes) {
          html += serializeNode(currentNode, options);
        }
      }
      return html;
    }
    function serializeNode(node, options) {
      if (options.treeAdapter.isElementNode(node)) {
        return serializeElement(node, options);
      }
      if (options.treeAdapter.isTextNode(node)) {
        return serializeTextNode(node, options);
      }
      if (options.treeAdapter.isCommentNode(node)) {
        return serializeCommentNode(node, options);
      }
      if (options.treeAdapter.isDocumentTypeNode(node)) {
        return serializeDocumentTypeNode(node, options);
      }
      return "";
    }
    function serializeElement(node, options) {
      const tn = options.treeAdapter.getTagName(node);
      return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? "" : `${serializeChildNodes(node, options)}</${tn}>`}`;
    }
    function serializeAttributes(node, { treeAdapter }) {
      let html = "";
      for (const attr of treeAdapter.getAttrList(node)) {
        html += " ";
        if (attr.namespace) {
          switch (attr.namespace) {
            case html_js_1.NS.XML: {
              html += `xml:${attr.name}`;
              break;
            }
            case html_js_1.NS.XMLNS: {
              if (attr.name !== "xmlns") {
                html += "xmlns:";
              }
              html += attr.name;
              break;
            }
            case html_js_1.NS.XLINK: {
              html += `xlink:${attr.name}`;
              break;
            }
            default: {
              html += `${attr.prefix}:${attr.name}`;
            }
          }
        } else {
          html += attr.name;
        }
        html += `="${(0, escape_1.escapeAttribute)(attr.value)}"`;
      }
      return html;
    }
    function serializeTextNode(node, options) {
      const { treeAdapter } = options;
      const content = treeAdapter.getTextNodeContent(node);
      const parent = treeAdapter.getParentNode(node);
      const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
      return parentTn && treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML && (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled) ? content : (0, escape_1.escapeText)(content);
    }
    function serializeCommentNode(node, { treeAdapter }) {
      return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
    }
    function serializeDocumentTypeNode(node, { treeAdapter }) {
      return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
    }
  }
});

// node_modules/parse5/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/parse5/dist/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TokenizerMode = exports2.Tokenizer = exports2.Token = exports2.html = exports2.foreignContent = exports2.ErrorCodes = exports2.serializeOuter = exports2.serialize = exports2.Parser = exports2.defaultTreeAdapter = void 0;
    exports2.parse = parse2;
    exports2.parseFragment = parseFragment;
    var index_js_1 = require_parser();
    var default_js_1 = require_default();
    Object.defineProperty(exports2, "defaultTreeAdapter", { enumerable: true, get: function() {
      return default_js_1.defaultTreeAdapter;
    } });
    var index_js_2 = require_parser();
    Object.defineProperty(exports2, "Parser", { enumerable: true, get: function() {
      return index_js_2.Parser;
    } });
    var index_js_3 = require_serializer();
    Object.defineProperty(exports2, "serialize", { enumerable: true, get: function() {
      return index_js_3.serialize;
    } });
    Object.defineProperty(exports2, "serializeOuter", { enumerable: true, get: function() {
      return index_js_3.serializeOuter;
    } });
    var error_codes_js_1 = require_error_codes();
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return error_codes_js_1.ERR;
    } });
    exports2.foreignContent = require_foreign_content();
    exports2.html = require_html();
    exports2.Token = require_token();
    var index_js_4 = require_tokenizer();
    Object.defineProperty(exports2, "Tokenizer", { enumerable: true, get: function() {
      return index_js_4.Tokenizer;
    } });
    Object.defineProperty(exports2, "TokenizerMode", { enumerable: true, get: function() {
      return index_js_4.TokenizerMode;
    } });
    function parse2(html, options) {
      return index_js_1.Parser.parse(html, options);
    }
    function parseFragment(fragmentContext, html, options) {
      if (typeof fragmentContext === "string") {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
      }
      const parser = index_js_1.Parser.getFragmentParser(fragmentContext, options);
      parser.tokenizer.write(html, true);
      return parser.getFragment();
    }
  }
});

// src/server/transform-html-to-ts-alpine.js
var require_transform_html_to_ts_alpine = __commonJS({
  "src/server/transform-html-to-ts-alpine.js"(exports, module) {
    "use strict";
    var { parse } = require_cjs();
    var prefixAsString = "x-";
    function prefix(subject = "") {
      return prefixAsString + subject;
    }
    var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
    function outNonAlpineAttributes({ name }) {
      return alpineAttributeRegex().test(name);
    }
    var startingWith = (subject, replacement) => ({ name, value }) => {
      if (name.startsWith(subject))
        name = name.replace(subject, replacement);
      return { name, value };
    };
    var into = (i) => i;
    var attributeTransformers = [];
    function mapAttributes(callback) {
      attributeTransformers.push(callback);
    }
    mapAttributes(startingWith("@", into(prefix("on:"))));
    mapAttributes(startingWith(":", into(prefix("bind:"))));
    function toTransformedAttributes(callback = () => {
    }) {
      return ({ name, value }) => {
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
          return transform(carry);
        }, { name, value });
        if (newName !== name)
          callback(newName, name);
        return { name: newName, value: newValue };
      };
    }
    function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
      return ({ name, value }) => {
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
          type: typeMatch ? typeMatch[1] : null,
          value: valueMatch ? valueMatch[1] : null,
          modifiers: modifiers.map((i) => i.replace(".", "")),
          expression: value,
          original
        };
      };
    }
    function parseForExpression(expression) {
      let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      let stripParensRE = /^\s*\(|\)\s*$/g;
      let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      let inMatch = expression.match(forAliasRE);
      if (!inMatch) return;
      let res = {};
      res.items = inMatch[2].trim();
      let item = inMatch[1].replace(stripParensRE, "").trim();
      let iteratorMatch = item.match(forIteratorRE);
      if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
          res.collection = iteratorMatch[2].trim();
        }
      } else {
        res.item = item;
      }
      return res;
    }
    function findAlpineDirectives(html) {
      const document = parse(html, { sourceCodeLocationInfo: true });
      const directives = [];
      function walkNode(node, loopContext = []) {
        let currentLoopContext = [...loopContext];
        if (node.tagName && node.attrs && node.sourceCodeLocation) {
          const forAttr = node.attrs.find((attr) => attr.name === "x-for");
          if (forAttr) {
            const parsed = parseForExpression(forAttr.value);
            if (parsed) {
              currentLoopContext.push({
                item: parsed.item,
                items: parsed.items,
                index: parsed.index
              });
            }
          }
          node.attrs.forEach((attr) => {
            const attrName = attr.name;
            const attrValue = attr.value;
            if (alpineAttributeRegex().test(attrName) || attrName.startsWith("@") || attrName.startsWith(":")) {
              let transformedName = attrName;
              if (attrName.startsWith("@")) {
                transformedName = attrName.replace("@", "x-on:");
              } else if (attrName.startsWith(":")) {
                transformedName = attrName.replace(":", "x-bind:");
              }
              const typeMatch = transformedName.match(alpineAttributeRegex());
              const valueMatch = transformedName.match(/:([a-zA-Z0-9\-_:]+)/);
              const modifiers = transformedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
              if (typeMatch) {
                const attrLocation = node.sourceCodeLocation.attrs[attrName];
                if (attrLocation) {
                  const attrText = html.substring(attrLocation.startOffset, attrLocation.endOffset);
                  const equalIndex = attrText.indexOf("=");
                  const quoteIndex = equalIndex + 1;
                  let quote = "";
                  for (let i = quoteIndex; i < attrText.length; i++) {
                    if (attrText[i] === '"' || attrText[i] === "'") {
                      quote = attrText[i];
                      break;
                    }
                  }
                  const expressionStart = attrLocation.startOffset + attrText.indexOf(quote) + 1;
                  const expressionEnd = expressionStart + attrValue.length;
                  directives.push({
                    type: typeMatch[1],
                    value: attrValue,
                    htmlStart: getPositionFromOffset(html, expressionStart),
                    htmlEnd: getPositionFromOffset(html, expressionEnd),
                    position: node.sourceCodeLocation.startOffset,
                    modifiers: modifiers.map((m) => m.replace(".", "")),
                    directiveName: attrName,
                    loopContext: currentLoopContext
                  });
                }
              }
            }
          });
        }
        if (node.tagName === "template" && node.content && node.content.childNodes) {
          if (node.sourceCodeLocation) {
            const templateStart = node.sourceCodeLocation.startTag.endOffset;
            const templateEnd = node.sourceCodeLocation.endTag.startOffset;
            const templateHtml = html.substring(templateStart, templateEnd);
            const templateDirectives = findDirectivesInTemplateContent(templateHtml, templateStart, currentLoopContext, html);
            directives.push(...templateDirectives);
          }
        }
        if (node.childNodes) {
          node.childNodes.forEach((child) => walkNode(child, currentLoopContext));
        }
      }
      walkNode(document);
      return directives.sort((a, b) => a.position - b.position);
    }
    function findDirectivesInTemplateContent(templateHtml, startOffset, loopContext, html) {
      const directives = [];
      const alpineAttrRegex = /\s(x-[\w-]+|[@:][\w-]+)\s*=\s*(['"])((?:\\.|(?!\2)[^\\])*?)\2/g;
      let match;
      while ((match = alpineAttrRegex.exec(templateHtml)) !== null) {
        const attrName = match[1];
        const quote = match[2];
        const attrValue = match[3];
        let transformedName = attrName;
        if (attrName.startsWith("@")) {
          transformedName = attrName.replace("@", "x-on:");
        } else if (attrName.startsWith(":")) {
          transformedName = attrName.replace(":", "x-bind:");
        }
        const typeMatch = transformedName.match(alpineAttributeRegex());
        if (typeMatch) {
          const attrStartInTemplate = match.index + match[0].indexOf(quote) + 1;
          const expressionStart = startOffset + attrStartInTemplate;
          const expressionEnd = expressionStart + attrValue.length;
          directives.push({
            type: typeMatch[1],
            value: attrValue,
            htmlStart: getPositionFromOffset(html, expressionStart),
            htmlEnd: getPositionFromOffset(html, expressionEnd),
            position: startOffset + match.index,
            modifiers: [],
            directiveName: attrName,
            loopContext
          });
        }
      }
      return directives;
    }
    function escapeRegex(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function getPositionFromOffset(text, offset) {
      const beforeOffset = text.substring(0, offset);
      const lines = beforeOffset.split("\n");
      return {
        line: lines.length - 1,
        character: lines[lines.length - 1].length
      };
    }
    function extractXDataProperties(xDataContent) {
      try {
        if (xDataContent.trim().startsWith("() =>") || xDataContent.trim().startsWith("function")) {
          const dataObject = eval(`(${xDataContent})()`);
          return Object.keys(dataObject);
        }
        if (xDataContent.trim().match(/^\w+\(\)$/)) {
          return [];
        }
        const dataObject = eval(`(${xDataContent})`);
        return Object.keys(dataObject);
      } catch (error) {
        console.log("Could not extract properties from:", xDataContent);
        const propRegex = /^\s*(\w+)\s*:/gm;
        const properties = [];
        let match;
        while ((match = propRegex.exec(xDataContent)) !== null) {
          const prop = match[1];
          if (!["function", "return", "if", "else", "get"].includes(prop)) {
            properties.push(prop);
          }
        }
        return [...new Set(properties)];
      }
    }
    function transformHtmlToTypeScript(htmlContent) {
      const xDataMatch = htmlContent.match(/x-data=(["'])((?:\\.|(?!\1)[^\\])*?)\1/s);
      const xDataContent2 = xDataMatch ? xDataMatch[2] : "{}";
      const directives = findAlpineDirectives(htmlContent);
      const mappings = [];
      const lines = [];
      const dataProperties = extractXDataProperties(xDataContent2);
      const contextGroups = /* @__PURE__ */ new Map();
      let currentXDataIndex = 0;
      const xDataBoundaries = [];
      for (let i = 0; i < directives.length; i++) {
        if (directives[i].type === "data") {
          currentXDataIndex++;
          xDataBoundaries.push(i);
        }
        directives[i].xDataIndex = currentXDataIndex;
      }
      for (const directive of directives) {
        const loopContextKey = directive.loopContext ? directive.loopContext.map((l) => {
          const itemPart = l.index ? `${l.item}_${l.index}` : l.item;
          return `${itemPart}_of_${l.items.replace(/[^a-zA-Z0-9_]/g, "_")}`;
        }).join("__") : "global";
        let fullContextKey = `xdata${directive.xDataIndex}_${loopContextKey}`;
        if (directive.type === "for") {
          const parsed = parseForExpression(directive.value);
          if (parsed) {
            const forSignature = parsed.index ? `${parsed.item}_${parsed.index}` : parsed.item;
            fullContextKey += `__${forSignature}_of_${parsed.items.replace(/[^a-zA-Z0-9_]/g, "_")}`;
          }
        }
        const contextKey = fullContextKey;
        if (!contextGroups.has(contextKey)) {
          contextGroups.set(contextKey, []);
        }
        contextGroups.get(contextKey).push(directive);
      }
      for (const [contextKey, groupDirectives] of contextGroups) {
        const functionName = `${contextKey}Expressions`;
        const firstDirective = groupDirectives[0];
        const xDataDirective = directives.find((d) => d.type === "data" && d.xDataIndex === firstDirective.xDataIndex);
        const groupXDataContent = xDataDirective ? xDataDirective.value : "{}";
        const groupDataProperties = extractXDataProperties(groupXDataContent);
        lines.push(`function ${functionName}() {`);
        const isFunctionBased = groupXDataContent.trim().startsWith("() =>") || groupXDataContent.trim().startsWith("function");
        if (isFunctionBased) {
          lines.push(`  const data = (${groupXDataContent})();`);
        } else {
          lines.push(`  const data = ${groupXDataContent};`);
        }
        if (groupDataProperties.length > 0) {
          lines.push(`  let { ${groupDataProperties.join(", ")} } = data;`);
        }
        if (firstDirective.loopContext && firstDirective.loopContext.length > 0) {
          for (const loop of firstDirective.loopContext) {
            if (loop.index) {
              lines.push(`  ${loop.items}.forEach((${loop.item}, ${loop.index}) => {`);
            } else {
              lines.push(`  for (const ${loop.item} of ${loop.items}) {`);
            }
          }
        }
        for (const directive of groupDirectives) {
          const expressionId = `expr_${directive.htmlStart.line}_${directive.htmlStart.character}`;
          const originalColumn = directive.htmlStart.character;
          const indent = "  " + "  ".repeat(firstDirective.loopContext ? firstDirective.loopContext.length : 0);
          lines.push(`${indent}"${expressionId}_START";`);
          const padding = " ".repeat(originalColumn);
          if (directive.type === "for") {
            const parsed = parseForExpression(directive.value);
            if (parsed) {
              lines.push(`${indent}// x-for: ${parsed.item} of ${parsed.items}`);
              lines.push(`${indent}"${expressionId}_item_START";`);
              const itemStartInValue = directive.value.indexOf(parsed.item);
              const itemPadding = " ".repeat(originalColumn + itemStartInValue);
              lines.push(itemPadding + `${parsed.item};`);
              lines.push(`${indent}"${expressionId}_item_END";`);
              lines.push(`${indent}"${expressionId}_items_START";`);
              const itemsStartInValue = directive.value.indexOf(parsed.items);
              const itemsPadding = " ".repeat(originalColumn + itemsStartInValue);
              lines.push(itemsPadding + parsed.items + ";");
              lines.push(`${indent}"${expressionId}_items_END";`);
            } else {
              lines.push(padding + directive.value + ";");
            }
          } else {
            const value = directive.value.trim();
            if (value.startsWith("{") && value.endsWith("}") || value.startsWith("[") && value.endsWith("]")) {
              lines.push(padding + "(" + directive.value + ");");
            } else {
              lines.push(padding + directive.value + ";");
            }
          }
          lines.push(`${indent}"${expressionId}_END";`);
          lines.push("");
          if (directive.type === "for") {
            const parsed = parseForExpression(directive.value);
            if (parsed) {
              const itemStartInValue = directive.value.indexOf(parsed.item);
              const itemsStartInValue = directive.value.indexOf(parsed.items);
              mappings.push({
                expressionId: `${expressionId}_item`,
                expression: parsed.item,
                directiveName: "for-item",
                htmlExpressionStart: {
                  line: directive.htmlStart.line,
                  character: directive.htmlStart.character + itemStartInValue
                },
                htmlExpressionEnd: {
                  line: directive.htmlStart.line,
                  character: directive.htmlStart.character + itemStartInValue + parsed.item.length
                },
                modifiers: directive.modifiers,
                parentData: groupXDataContent,
                loopContext: directive.loopContext
              });
              mappings.push({
                expressionId: `${expressionId}_items`,
                expression: parsed.items,
                directiveName: "for-items",
                htmlExpressionStart: {
                  line: directive.htmlStart.line,
                  character: directive.htmlStart.character + itemsStartInValue
                },
                htmlExpressionEnd: {
                  line: directive.htmlStart.line,
                  character: directive.htmlStart.character + itemsStartInValue + parsed.items.length
                },
                modifiers: directive.modifiers,
                parentData: groupXDataContent,
                loopContext: directive.loopContext
              });
            }
          } else {
            mappings.push({
              expressionId,
              expression: directive.value,
              directiveName: directive.type,
              htmlExpressionStart: directive.htmlStart,
              htmlExpressionEnd: directive.htmlEnd,
              modifiers: directive.modifiers,
              parentData: xDataContent2,
              loopContext: directive.loopContext
            });
          }
        }
        if (firstDirective.loopContext && firstDirective.loopContext.length > 0) {
          for (let i = firstDirective.loopContext.length - 1; i >= 0; i--) {
            const loop = firstDirective.loopContext[i];
            if (loop.index) {
              lines.push("  " + "  ".repeat(i) + "});");
            } else {
              lines.push("  " + "  ".repeat(i) + "}");
            }
          }
        }
        lines.push(`}`);
        lines.push("");
      }
      const result = {
        tsContent: lines.join("\n"),
        mappings
      };
      console.log(`Generated ${lines.length} lines, ${mappings.length} mappings`);
      return result;
    }
    module.exports = {
      transformHtmlToTypeScript,
      findAlpineDirectives,
      parseForExpression,
      extractXDataProperties
    };
    if (require.main === module) {
      const fs2 = require("fs");
      const htmlFile = process.argv[2] || "test-complex.html";
      const htmlContent = fs2.readFileSync(htmlFile, "utf-8");
      const result = transformHtmlToTypeScript(htmlContent);
    }
  }
});

// src/server/server.ts
var import_node = __toESM(require_node3());

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument2.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument2.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// src/server/alpineParser.ts
var import_vscode_html_languageservice = require("vscode-html-languageservice");
var AlpineParser = class {
  constructor() {
    this.htmlService = (0, import_vscode_html_languageservice.getLanguageService)();
    this.components = [];
    this.directives = [];
  }
  parseDocument(document) {
    this.components = [];
    this.directives = [];
    const text = document.getText();
    const htmlDoc = this.htmlService.parseHTMLDocument(document);
    const scriptFunctions = this.extractScriptFunctions(text);
    this.extractAlpineData(htmlDoc, text);
    this.components.forEach((component) => {
      const functionCall = component.variables.get("_function_call");
      if (functionCall && functionCall.type === "function_call") {
        const functionDef = scriptFunctions.get(functionCall.name);
        if (functionDef) {
          component.variables.delete("_function_call");
          this.parseObjectLiteral(functionDef, component);
        }
      }
    });
    return {
      components: this.components,
      directives: this.directives
    };
  }
  extractAlpineData(htmlDoc, text) {
    const scanner = this.htmlService.createScanner(text);
    let token = scanner.scan();
    let currentTag = "";
    let currentAttrName = "";
    let componentsStack = [];
    while (token !== import_vscode_html_languageservice.TokenType.EOS) {
      switch (token) {
        case import_vscode_html_languageservice.TokenType.StartTag:
          currentTag = scanner.getTokenText();
          break;
        case import_vscode_html_languageservice.TokenType.AttributeName:
          currentAttrName = scanner.getTokenText();
          break;
        case import_vscode_html_languageservice.TokenType.AttributeValue:
          if (this.isAlpineDirective(currentAttrName)) {
            const value = this.unquoteValue(scanner.getTokenText());
            const start = scanner.getTokenOffset();
            const end = scanner.getTokenEnd();
            if (currentAttrName === "x-data") {
              const component = this.parseXData(value, start, end, currentTag);
              this.components.push(component);
              componentsStack.push(component);
            } else {
              const directive = {
                name: currentAttrName,
                value,
                range: { start, end },
                parentComponent: componentsStack[componentsStack.length - 1]
              };
              this.directives.push(directive);
              if (componentsStack.length > 0) {
                componentsStack[componentsStack.length - 1].directives.push(directive);
              }
            }
          }
          break;
        case import_vscode_html_languageservice.TokenType.EndTag:
          if (componentsStack.length > 0 && componentsStack[componentsStack.length - 1].element === scanner.getTokenText()) {
            componentsStack.pop();
          }
          break;
      }
      token = scanner.scan();
    }
  }
  parseXData(value, start, end, element) {
    const component = {
      element,
      xDataRange: { start, end },
      xDataContent: value,
      variables: /* @__PURE__ */ new Map(),
      methods: /* @__PURE__ */ new Map(),
      directives: []
    };
    try {
      if (value.trim().startsWith("{")) {
        this.parseObjectLiteral(value, component);
      } else if (value.match(/^[a-zA-Z_]\w*\s*\(\s*\)$/)) {
        const functionName = value.split("(")[0].trim();
        component.variables.set("_function_call", {
          name: functionName,
          type: "function_call"
        });
      } else if (value.includes("=>")) {
        const arrowMatch = value.match(/\(.*?\)\s*=>\s*(\{[\s\S]*\}|\([\s\S]*\))/);
        if (arrowMatch) {
          let returnValue = arrowMatch[1];
          if (returnValue.startsWith("(") && returnValue.endsWith(")")) {
            returnValue = returnValue.slice(1, -1);
          }
          this.parseObjectLiteral(returnValue, component);
        }
      }
    } catch (e) {
      console.error("Error parsing x-data:", e);
    }
    return component;
  }
  parseObjectLiteral(value, component) {
    const shorthandMethodRegex = /(\w+)\s*\([^)]*\)\s*\{[^}]*\}/g;
    let match;
    const methodNames = /* @__PURE__ */ new Set();
    while ((match = shorthandMethodRegex.exec(value)) !== null) {
      const methodName = match[1];
      component.methods.set(methodName, {
        name: methodName,
        params: []
      });
      methodNames.add(methodName);
    }
    const propRegex = /(\w+)\s*:\s*([^,}]+(?:\{[^}]*\})?[^,}]*)/g;
    while ((match = propRegex.exec(value)) !== null) {
      const propName = match[1];
      if (methodNames.has(propName)) continue;
      const propValue = match[2].trim();
      if (propValue.includes("function") || propValue.includes("=>")) {
        component.methods.set(propName, {
          name: propName,
          params: []
        });
      } else {
        let type = "any";
        if (propValue === "true" || propValue === "false") type = "boolean";
        else if (!isNaN(Number(propValue))) type = "number";
        else if (propValue.startsWith('"') || propValue.startsWith("'")) type = "string";
        else if (propValue.startsWith("[")) type = "array";
        else if (propValue.startsWith("{")) type = "object";
        component.variables.set(propName, {
          name: propName,
          type,
          value: propValue
        });
      }
    }
  }
  extractScriptFunctions(text) {
    const functions = /* @__PURE__ */ new Map();
    const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let scriptMatch;
    while ((scriptMatch = scriptRegex.exec(text)) !== null) {
      const scriptContent = scriptMatch[1];
      const funcRegex = /function\s+(\w+)\s*\([^)]*\)\s*\{[\s\S]*?return\s+(\{[\s\S]*?\})(?=\s*\})/g;
      let funcMatch;
      while ((funcMatch = funcRegex.exec(scriptContent)) !== null) {
        const functionName = funcMatch[1];
        const returnObject = funcMatch[2];
        functions.set(functionName, returnObject);
      }
      const arrowRegex = /(?:const|let|var)\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*(?:\((\{[\s\S]*?\})\)|(?:\{[\s\S]*?return\s+(\{[\s\S]*?\})[\s\S]*?\}))/g;
      let arrowMatch;
      while ((arrowMatch = arrowRegex.exec(scriptContent)) !== null) {
        const functionName = arrowMatch[1];
        const returnObject = arrowMatch[2] || arrowMatch[3];
        if (returnObject) {
          functions.set(functionName, returnObject);
        }
      }
    }
    return functions;
  }
  isAlpineDirective(attr) {
    return /^(x-data|x-show|x-if|x-for|x-text|x-html|x-model|x-modelable|x-effect|x-ignore|x-ref|x-cloak|x-teleport|x-intersect|x-init|x-transition|@\w+|x-on:\w+)/.test(attr);
  }
  unquoteValue(value) {
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
      return value.slice(1, -1);
    }
    return value;
  }
  findComponentAtPosition(document, position) {
    const parsed = this.parseDocument(document);
    const offset = document.offsetAt(position);
    for (const component of parsed.components) {
      if (component.xDataRange && offset >= component.xDataRange.start && offset <= component.xDataRange.end) {
        return component;
      }
    }
    for (const directive of parsed.directives) {
      if (offset >= directive.range.start && offset <= directive.range.end) {
        return directive.parentComponent;
      }
    }
    return void 0;
  }
};

// src/server/simpleVirtualFile.ts
var ts = __toESM(require("typescript"));
var SimpleVirtualFileManager = class {
  /**
   * Generate clean virtual TypeScript file like test.ts
   * SIMPLE: One directive = One line = One mapping
   */
  generateVirtualFile(document, components, directives) {
    const lines = [];
    const mappings = [];
    const scriptFunctions = this.extractScriptFunctionsWithTS(document);
    scriptFunctions.forEach((func) => {
      lines.push(func);
      lines.push("");
    });
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      lines.push(`function component_${i}() {`);
      if (component.xDataContent) {
        const allProperties = this.extractPropertiesUsingObjectKeys(component.xDataContent);
        lines.push(`  let data = ${component.xDataContent};`);
        if (allProperties.length > 0) {
          lines.push(`  let {${allProperties.join(", ")}} = data;`);
        } else {
          lines.push(`  // Function-based x-data`);
          const usedVariables = this.extractVariablesFromDirectives(directives.filter(
            (d) => d.parentComponent === component || component.directives.includes(d)
          ));
          const allVars = [.../* @__PURE__ */ new Set([...Array.from(component.variables.keys()), ...usedVariables])];
          if (allVars.length > 0) {
            lines.push(`  let {${allVars.join(", ")}} = data;`);
          }
        }
        lines.push("");
      }
      const componentDirectives = directives.filter(
        (d) => d.parentComponent === component || component.directives.includes(d)
      );
      lines.push(`  let expressionMap = {`);
      for (const directive of componentDirectives) {
        const htmlPosition = document.positionAt(directive.range.start);
        const expressionId = `expr_${htmlPosition.line}_${htmlPosition.character}`;
        let tsExpression;
        if (directive.name === "x-for") {
          const forMatch = directive.value.match(/(\w+)\s+in\s+(.+)/);
          if (forMatch) {
            const [, item, items] = forMatch;
            tsExpression = `for(let ${item} of ${items}){}`;
          } else {
            tsExpression = directive.value;
          }
        } else {
          tsExpression = directive.value;
        }
        lines.push(`    "${expressionId}": () => { ${tsExpression} }, // ${directive.name}`);
        mappings.push({
          expressionId,
          htmlPosition,
          expression: directive.value,
          directiveName: directive.name
        });
      }
      lines.push(`  };`);
      lines.push("}");
      lines.push("");
    }
    const uri = document.uri.replace(".html", ".alpine.ts");
    return {
      uri,
      content: lines.join("\n"),
      mappings
    };
  }
  /**
   * Find mapping for HTML position
   */
  findMappingForHtmlPosition(htmlPosition, mappings) {
    return mappings.find((m) => m.htmlPosition.line === htmlPosition.line) || null;
  }
  /**
   * Find virtual line for expression ID in content
   */
  findVirtualLineForExpressionId(expressionId, virtualContent) {
    const lines = virtualContent.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`"${expressionId}":`)) {
        return i;
      }
    }
    return null;
  }
  /**
   * Actually parse the x-data object to extract ALL property names
   * No hardcoding bullshit!
   */
  extractPropertiesUsingObjectKeys(xDataContent) {
    try {
      if (xDataContent.trim().match(/^\w+\(\)$/)) {
        console.log("Function-based x-data detected, cannot extract keys:", xDataContent);
        return [];
      }
      const dataObject = eval(`(${xDataContent})`);
      const keys = Object.keys(dataObject);
      console.log("Extracted properties using Object.keys():", keys);
      return keys;
    } catch (error) {
      console.error("Error evaluating x-data object:", error);
      return this.extractAllPropertiesFromXData(xDataContent);
    }
  }
  extractScriptFunctionsWithTS(document) {
    const content = document.getText();
    const functions = [];
    const scriptTagRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let scriptMatch;
    while ((scriptMatch = scriptTagRegex.exec(content)) !== null) {
      const scriptContent = scriptMatch[1];
      try {
        const sourceFile = ts.createSourceFile(
          "temp.js",
          scriptContent,
          ts.ScriptTarget.ES2020,
          true
        );
        const visit = (node) => {
          if (ts.isFunctionDeclaration(node) && node.name) {
            const functionText = scriptContent.substring(node.pos, node.end).trim();
            functions.push(functionText);
          }
          ts.forEachChild(node, visit);
        };
        visit(sourceFile);
        console.log("Extracted functions with TypeScript parser:", functions);
      } catch (error) {
        console.error("Error parsing script with TypeScript:", error);
      }
    }
    return functions;
  }
  extractAllPropertiesFromXData(xDataContent2) {
    const properties = [];
    try {
      const propertyRegex = /(\w+)\s*(?:\(.*?\)\s*{|:)/g;
      let match;
      while ((match = propertyRegex.exec(xDataContent2)) !== null) {
        properties.push(match[1]);
      }
      console.log("Extracted properties from x-data:", properties);
    } catch (error) {
      console.error("Error parsing x-data:", error);
    }
    return [...new Set(properties)];
  }
  extractVariablesFromDirectives(directives) {
    const variables = [];
    for (const directive of directives) {
      const identifiers = directive.value.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];
      variables.push(...identifiers.filter(
        (id) => (
          // Filter out JavaScript keywords and common functions
          !["true", "false", "null", "undefined", "return", "if", "else", "for", "while", "function", "this"].includes(id)
        )
      ));
    }
    return [...new Set(variables)];
  }
};
function component_0() {
  const data = {
    company: {
      name: "TechCorp",
      info: {
        address: {
          street: "123 Main St",
          city: "San Francisco",
          state: "CA",
          country: {
            code: "US",
            name: "United States",
            continent: "North America"
          }
        },
        contact: {
          phone: {
            main: "+1-555-0100",
            support: "+1-555-0199",
            fax: "+1-555-0101"
          },
          email: {
            general: "info@techcorp.com",
            support: "support@techcorp.com",
            sales: "sales@techcorp.com"
          }
        }
      },
      departments: {
        engineering: {
          head: "John Doe",
          budget: 1e6,
          teams: {
            frontend: {
              lead: "Jane Smith",
              members: 5,
              projects: ["Website", "Mobile App"]
            },
            backend: {
              lead: "Bob Johnson",
              members: 8,
              projects: ["API", "Database", "Microservices"]
            }
          }
        },
        marketing: {
          head: "Alice Brown",
          budget: 5e5,
          campaigns: {
            active: ["Summer Sale", "Product Launch"],
            planned: ["Black Friday", "Holiday Season"]
          }
        }
      }
    }
  };
  const { company } = data;
  const expressionMap = {
    "expr_63_18": () => {
      company.name;
    },
    // x-text
    "expr_64_18": () => {
      company.info.address.street;
    },
    // x-text
    "expr_65_18": () => {
      company.info.address.city;
    },
    // x-text
    "expr_66_18": () => {
      company.info.address.country.name;
    },
    // x-text
    "expr_67_18": () => {
      company.info.address.country.continent;
    },
    // x-text
    "expr_68_18": () => {
      company.info.contact.phone.main;
    },
    // x-text
    "expr_69_18": () => {
      company.info.contact.email.support;
    },
    // x-text
    "expr_70_18": () => {
      company.departments.engineering.head;
    },
    // x-text
    "expr_71_18": () => {
      company.departments.engineering.teams.frontend.lead;
    },
    // x-text
    "expr_72_18": () => {
      company.departments.engineering.teams.frontend.members;
    },
    // x-text
    "expr_75_24": () => {
      for (let project of company.departments.engineering.teams.frontend.projects) {
      }
    },
    // x-for
    "expr_76_23": () => {
    }
    // x-text
  };
}

// src/server/lineBasedTypeScriptService.ts
var ts2 = __toESM(require("typescript"));
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var os = __toESM(require("os"));
var LineBasedTypeScriptService = class {
  constructor() {
    this.virtualFiles = /* @__PURE__ */ new Map();
    this.realFiles = /* @__PURE__ */ new Map();
    // Map virtual URI to real file path
    this.currentMappings = [];
    this.fileVersions = /* @__PURE__ */ new Map();
    this.maxVersionHistory = 10;
    this.tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "alpine-lsp-"));
    console.log(`Alpine LSP temp directory: ${this.tempDir}`);
    this.setupLanguageService();
  }
  setupLanguageService() {
    this.languageServiceHost = {
      getScriptFileNames: () => {
        const fileNames = Array.from(this.realFiles.values());
        return fileNames;
      },
      getScriptVersion: (fileName) => {
        for (const [uri, realPath] of this.realFiles.entries()) {
          if (realPath === fileName) {
            return (this.fileVersions.get(uri) || 1).toString();
          }
        }
        return "1";
      },
      getScriptSnapshot: (fileName) => {
        if (fs.existsSync(fileName)) {
          const content = fs.readFileSync(fileName, "utf8");
          return ts2.ScriptSnapshot.fromString(content);
        }
        return void 0;
      },
      getCurrentDirectory: () => process.cwd(),
      getCompilationSettings: () => ({
        target: ts2.ScriptTarget.ES2020,
        strict: true
        // MINIMAL SETTINGS ONLY - like working test
      }),
      getDefaultLibFileName: ts2.getDefaultLibFilePath,
      fileExists: ts2.sys.fileExists,
      readFile: ts2.sys.readFile,
      readDirectory: ts2.sys.readDirectory,
      directoryExists: ts2.sys.directoryExists,
      getDirectories: ts2.sys.getDirectories
    };
    this.languageService = ts2.createLanguageService(this.languageServiceHost);
  }
  /**
   * Update the virtual file - much simpler than the complex character-based approach!
   */
  updateVirtualFile(virtualFile) {
    console.log("Updating virtual file:", virtualFile.uri);
    console.log("Content length:", virtualFile.content.length);
    console.log("Mappings count:", virtualFile.mappings.length);
    this.virtualFiles.set(virtualFile.uri, virtualFile.content);
    const baseNameFromUri = path.basename(virtualFile.uri.replace("file://", "")).replace(".html.alpine.ts", "").replace(".htm.alpine.ts", "");
    const realFilePath = path.join(this.tempDir, `${baseNameFromUri}.ts`);
    fs.writeFileSync(realFilePath, virtualFile.content);
    this.realFiles.set(virtualFile.uri, realFilePath);
    this.currentMappings = virtualFile.mappings.map((m) => {
      if ("virtualLine" in m) {
        return m;
      } else {
        const virtualLine = this.findVirtualLineForExpressionId(m.expressionId, virtualFile.content);
        return {
          virtualLine: virtualLine !== null ? virtualLine : -1,
          htmlPosition: m.htmlPosition,
          expression: m.expression,
          directiveName: m.directiveName,
          componentId: "unknown"
        };
      }
    });
    const currentVersion = this.fileVersions.get(virtualFile.uri) || 0;
    const newVersion = currentVersion + 1;
    this.fileVersions.set(virtualFile.uri, newVersion);
    if (newVersion > this.maxVersionHistory) {
    }
    console.log(`File version incremented to ${newVersion} for ${virtualFile.uri}`);
    this.languageService.getProgram();
    console.log("Virtual file content:");
    console.log(virtualFile.content);
  }
  /**
   * Get completions for a specific virtual line
   * Much simpler than character-based positioning!
   */
  getCompletionsForVirtualLine(virtualUri, virtualLine) {
    console.log("Getting completions for virtual line:", virtualLine);
    if (!this.virtualFiles.has(virtualUri)) {
      console.log("Virtual file not found:", virtualUri);
      return void 0;
    }
    const content = this.virtualFiles.get(virtualUri);
    const lines = content.split("\n");
    if (virtualLine >= lines.length) {
      console.log("Virtual line out of bounds:", virtualLine, "max:", lines.length - 1);
      return void 0;
    }
    const line = lines[virtualLine];
    console.log("Content of virtual line:", line);
    const expressionEnd = line.indexOf(";");
    const position = this.getPositionFromLineAndCharacter(
      content,
      virtualLine,
      expressionEnd > 0 ? expressionEnd : line.length
    );
    console.log("Position in file:", position);
    try {
      const result = this.languageService.getCompletionsAtPosition(
        virtualUri,
        position,
        {
          includeExternalModuleExports: false,
          includeInsertTextCompletions: true
        }
      );
      console.log("TypeScript completions result:", result ? `${result.entries.length} items` : "null");
      if (result) {
        console.log("First few completions:", result.entries.slice(0, 5).map((e) => e.name));
      }
      return result;
    } catch (error) {
      console.error("Error getting completions:", error);
      return void 0;
    }
  }
  /**
   * Simple helper to convert line/character to absolute position
   */
  getPositionFromLineAndCharacter(content, line, character) {
    const lines = content.split("\n");
    let position = 0;
    for (let i = 0; i < line && i < lines.length; i++) {
      position += lines[i].length + 1;
    }
    position += Math.min(character, lines[line]?.length || 0);
    return position;
  }
  /**
   * Get the mapping for a specific virtual line
   */
  getMappingForVirtualLine(virtualLine) {
    return this.currentMappings.find((m) => m.virtualLine === virtualLine);
  }
  /**
   * Find which virtual line corresponds to an HTML position
   */
  findVirtualLineForHtmlPosition(htmlLine) {
    return this.currentMappings.find((m) => m.htmlPosition.line === htmlLine);
  }
  /**
   * Find virtual line for expression ID in content
   */
  findVirtualLineForExpressionId(expressionId, virtualContent) {
    const lines = virtualContent.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`"${expressionId}":`)) {
        return i;
      }
    }
    return null;
  }
  /**
   * Get hover info for a virtual line
   */
  getHoverForVirtualLine(virtualUri, virtualLine) {
    console.log("Getting hover for virtual line:", virtualLine);
    if (!this.virtualFiles.has(virtualUri)) {
      return void 0;
    }
    const content = this.virtualFiles.get(virtualUri);
    const lines = content.split("\n");
    if (virtualLine >= lines.length) {
      return void 0;
    }
    const line = lines[virtualLine];
    let positions;
    const arrowFunctionMatch = line.match(/\(\) => \{ (.*?) \}/);
    if (arrowFunctionMatch) {
      const expressionStart = line.indexOf(arrowFunctionMatch[1]);
      positions = [
        expressionStart + Math.floor(arrowFunctionMatch[1].length / 2),
        // Middle of expression
        expressionStart,
        // Start of expression
        expressionStart + arrowFunctionMatch[1].length - 1
        // End of expression
      ];
    } else {
      const expressionEnd = line.indexOf(";");
      positions = [
        expressionEnd > 0 ? expressionEnd - 1 : line.length - 1,
        Math.floor((expressionEnd > 0 ? expressionEnd : line.length) / 2),
        line.indexOf("  ") + 2
      ];
    }
    for (const charPos of positions) {
      if (charPos < 0) continue;
      const position = this.getPositionFromLineAndCharacter(content, virtualLine, charPos);
      console.log(`Trying hover at position ${charPos} (offset ${position}) in line: "${line}"`);
      try {
        const tsHover = this.languageService.getQuickInfoAtPosition(virtualUri, position);
        if (tsHover && tsHover.displayParts && tsHover.displayParts.length > 0) {
          const hoverText = tsHover.displayParts.map((part) => part.text).join("");
          const documentation = tsHover.documentation?.map((doc) => doc.text).join("\n") || "";
          console.log("Successfully got hover:", hoverText);
          return `${hoverText}${documentation ? `

${documentation}` : ""}`;
        }
      } catch (error) {
        console.error("Error getting hover at position", charPos, ":", error);
      }
    }
    console.log("No hover info found for any position");
    return void 0;
  }
  /**
   * Get hover for a specific character within an expression on a virtual line
   */
  getHoverForVirtualLineAtChar(virtualUri, virtualLine, expression, charInExpression) {
    console.log(`Getting hover for virtual line ${virtualLine}, char ${charInExpression} in expression: "${expression}"`);
    if (!this.virtualFiles.has(virtualUri)) {
      return void 0;
    }
    const content = this.virtualFiles.get(virtualUri);
    const lines = content.split("\n");
    if (virtualLine >= lines.length) {
      return void 0;
    }
    const line = lines[virtualLine];
    console.log(`Line content: "${line}"`);
    console.log(`Looking for expression: "${expression}" at char ${charInExpression}`);
    let targetPosition = -1;
    const arrowMatch = line.match(/=>\s*\{\s*(.+?)\s*\}/);
    if (arrowMatch) {
      const expressionInLine = arrowMatch[1];
      console.log(`Arrow match found: "${expressionInLine}", looking for: "${expression}"`);
      if (expressionInLine === expression) {
        const arrowStart = line.indexOf(arrowMatch[0]);
        const expressionStart = line.indexOf(expressionInLine, arrowStart);
        targetPosition = expressionStart + charInExpression;
        console.log(`Using arrow match at position ${targetPosition}`);
      }
    }
    if (targetPosition === -1) {
      console.log("Could not find expression in line");
      return void 0;
    }
    const absolutePosition = this.getPositionFromLineAndCharacter(content, virtualLine, targetPosition);
    console.log(`Final hover position: char ${targetPosition} (offset ${absolutePosition}) in line: "${line}"`);
    try {
      const quickInfo = this.languageService.getQuickInfoAtPosition(virtualUri, absolutePosition);
      if (quickInfo && quickInfo.displayParts) {
        return quickInfo.displayParts.map((part) => part.text).join("");
      }
    } catch (error) {
      console.error("Error getting quick info:", error);
    }
    return void 0;
  }
  /**
   * Update file content directly (for our new transformation system)
   */
  updateFileContent(uri, content) {
    console.log(`Updating file content for ${uri}, length: ${content.length}`);
    this.virtualFiles.set(uri, content);
    const baseNameFromUri = path.basename(uri.replace("file://", "")).replace(".html.alpine.ts", "").replace(".htm.alpine.ts", "");
    const realFilePath = path.join(this.tempDir, `${baseNameFromUri}.ts`);
    fs.writeFileSync(realFilePath, content);
    this.realFiles.set(uri, realFilePath);
    const currentVersion = this.fileVersions.get(uri) || 0;
    const newVersion = currentVersion + 1;
    this.fileVersions.set(uri, newVersion);
    console.log(`File version incremented to ${newVersion} for ${uri}`);
    this.languageService.getProgram();
  }
  /**
   * Get quick info at a specific position in a file
   */
  getQuickInfoAtPosition(uri, line, character) {
    if (!this.realFiles.has(uri)) {
      return void 0;
    }
    const realFilePath = this.realFiles.get(uri);
    const content = fs.readFileSync(realFilePath, "utf8");
    const absolutePosition = this.getPositionFromLineAndCharacter(content, line, character);
    try {
      const quickInfo = this.languageService.getQuickInfoAtPosition(realFilePath, absolutePosition);
      if (quickInfo && quickInfo.displayParts) {
        return quickInfo.displayParts.map((part) => part.text).join("");
      }
    } catch (error) {
      console.error("Error getting quick info:", error);
    }
    return void 0;
  }
};

// src/server/server.ts
var import_transform_html_to_ts_alpine = __toESM(require_transform_html_to_ts_alpine());
function mapTsCompletionKind(tsKind) {
  switch (tsKind) {
    case "method":
      return import_node.CompletionItemKind.Method;
    case "function":
      return import_node.CompletionItemKind.Function;
    case "property":
      return import_node.CompletionItemKind.Property;
    case "var":
    case "let":
    case "const":
      return import_node.CompletionItemKind.Variable;
    case "class":
      return import_node.CompletionItemKind.Class;
    case "interface":
      return import_node.CompletionItemKind.Interface;
    case "enum":
      return import_node.CompletionItemKind.Enum;
    case "keyword":
      return import_node.CompletionItemKind.Keyword;
    default:
      return import_node.CompletionItemKind.Text;
  }
}
var connection = (0, import_node.createConnection)(import_node.ProposedFeatures.all);
var documents = new import_node.TextDocuments(TextDocument);
var alpineParser = new AlpineParser();
var virtualFileManager = new SimpleVirtualFileManager();
var virtualTsService = new LineBasedTypeScriptService();
connection.onInitialize((params) => {
  return {
    capabilities: {
      textDocumentSync: import_node.TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
        triggerCharacters: [".", '"', "'", " ", "@", "$"]
      },
      definitionProvider: true,
      hoverProvider: true
    }
  };
});
connection.onCompletion(async (params) => {
  connection.console.log("LINE-BASED: Completion requested at: " + JSON.stringify(params.position));
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return { isIncomplete: false, items: [] };
  }
  try {
    const parsed = alpineParser.parseDocument(document);
    connection.console.log(`Found ${parsed.components.length} components, ${parsed.directives.length} directives`);
    const virtualFile = virtualFileManager.generateVirtualFile(
      document,
      parsed.components,
      parsed.directives
    );
    connection.console.log("Virtual file created with " + virtualFile.mappings.length + " line mappings");
    virtualTsService.updateVirtualFile(virtualFile);
    const mapping = virtualFileManager.findMappingForHtmlPosition(params.position, virtualFile.mappings);
    if (!mapping) {
      connection.console.log("Not in an Alpine expression");
      return { isIncomplete: false, items: [] };
    }
    const virtualLine = virtualFileManager.findVirtualLineForExpressionId(mapping.expressionId, virtualFile.content);
    if (virtualLine === null) {
      connection.console.log("Expression ID not found in virtual file");
      return { isIncomplete: false, items: [] };
    }
    connection.console.log(`Mapped to expression ${mapping.expressionId} at virtual line ${virtualLine}: "${mapping.expression}"`);
    const tsCompletions = virtualTsService.getCompletionsForVirtualLine(
      virtualFile.uri,
      virtualLine
    );
    if (!tsCompletions) {
      return { isIncomplete: false, items: [] };
    }
    const completionItems = tsCompletions.entries.map((entry) => ({
      label: entry.name,
      kind: mapTsCompletionKind(entry.kind),
      detail: entry.kindModifiers ? `${entry.kind} ${entry.kindModifiers}` : entry.kind,
      sortText: entry.sortText,
      insertText: entry.insertText || entry.name
    }));
    connection.console.log(`Returning ${completionItems.length} completions`);
    return {
      isIncomplete: false,
      items: completionItems
    };
  } catch (error) {
    connection.console.error("Error in line-based completion: " + String(error));
    return { isIncomplete: false, items: [] };
  }
});
connection.onDefinition((params) => {
  return null;
});
connection.onHover((params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return null;
  try {
    const htmlLines = document.getText().split("\n");
    const hoverLine = htmlLines[params.position.line] || "";
    const hoverChar = hoverLine[params.position.character] || "";
    console.log(`\u{1F3AF} HOVER DEBUG:`);
    console.log(`  HTML line ${params.position.line}, char ${params.position.character}`);
    console.log(`  Line content: "${hoverLine}"`);
    console.log(`  Character at position: "${hoverChar}"`);
    console.log(`  Context: "${hoverLine.substring(Math.max(0, params.position.character - 10), params.position.character + 10)}"`);
    const transformation = (0, import_transform_html_to_ts_alpine.transformHtmlToTypeScript)(document.getText());
    const mapping = transformation.mappings.find((m) => {
      const posLine = params.position.line;
      const posChar = params.position.character;
      const startLine = m.htmlExpressionStart.line;
      const endLine = m.htmlExpressionEnd.line;
      if (startLine === endLine) {
        return posLine === startLine && posChar >= m.htmlExpressionStart.character && posChar <= m.htmlExpressionEnd.character;
      } else {
        return posLine === startLine && posChar >= m.htmlExpressionStart.character || // On start line after start
        posLine > startLine && posLine < endLine || // On middle line
        posLine === endLine && posChar <= m.htmlExpressionEnd.character;
      }
    });
    if (!mapping) {
      console.log(`\u274C NO MAPPING FOUND`);
      console.log(`  Looking for expressions containing line ${params.position.line}, char ${params.position.character}`);
      const lineMatches = transformation.mappings.filter((m) => m.htmlExpressionStart.line === params.position.line);
      if (lineMatches.length > 0) {
        console.log(`  Found ${lineMatches.length} expressions on this line:`);
        lineMatches.forEach((m) => {
          console.log(`    ${m.expressionId}: chars ${m.htmlExpressionStart.character}-${m.htmlExpressionEnd.character} = "${m.expression}"`);
        });
      } else {
        console.log(`  No expressions found on line ${params.position.line}`);
      }
      return null;
    }
    console.log(`\u2705 FOUND MAPPING: ${mapping.expressionId}`);
    console.log(`  Expression: "${mapping.expression}"`);
    console.log(`  HTML range: line ${mapping.htmlExpressionStart.line}, chars ${mapping.htmlExpressionStart.character}-${mapping.htmlExpressionEnd.character}`);
    const tempFileUri = document.uri + ".alpine.ts";
    virtualTsService.updateFileContent(tempFileUri, transformation.tsContent);
    const expressionStartMarker = `"${mapping.expressionId}_START";`;
    const lines = transformation.tsContent.split("\n");
    let expressionLineIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(expressionStartMarker)) {
        for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
          const line = lines[j];
          if (line.trim() && !line.includes("_START") && !line.includes("_END") && !line.includes("//")) {
            expressionLineIndex = j;
            break;
          }
        }
        break;
      }
    }
    if (expressionLineIndex === -1) {
      connection.console.log("\u274C Could not find expression in generated TypeScript");
      return null;
    }
    const hoverOffset = document.offsetAt(params.position);
    const expressionStartOffset = document.offsetAt({
      line: mapping.htmlExpressionStart.line,
      character: mapping.htmlExpressionStart.character
    });
    const offsetInExpression = hoverOffset - expressionStartOffset;
    const expressionLine = lines[expressionLineIndex];
    const expressionContent = expressionLine.trim();
    const expressionStartInLine = expressionLine.indexOf(expressionContent);
    let tsOffset = 0;
    for (let i = 0; i < expressionLineIndex; i++) {
      tsOffset += lines[i].length + 1;
    }
    tsOffset += expressionStartInLine + offsetInExpression;
    console.log(`\u{1F50D} TYPESCRIPT QUERY:`);
    console.log(`  TS file: ${tempFileUri}`);
    console.log(`  TS absolute offset: ${tsOffset}`);
    console.log(`  Offset within expression: ${offsetInExpression}`);
    let currentOffset = 0;
    let targetLine = 0;
    let targetChar = 0;
    for (let i = 0; i < lines.length; i++) {
      const lineLength = lines[i].length;
      if (currentOffset + lineLength >= tsOffset) {
        targetLine = i;
        targetChar = tsOffset - currentOffset;
        break;
      }
      currentOffset += lineLength + 1;
    }
    console.log(`  TS position: line ${targetLine}, char ${targetChar}`);
    console.log(`  Line content: "${lines[targetLine]}"`);
    const tsHover = virtualTsService.getQuickInfoAtPosition(
      tempFileUri,
      targetLine,
      targetChar
    );
    if (!tsHover) {
      console.log(`\u274C NO TYPESCRIPT HOVER INFO`);
      return null;
    }
    console.log(`\u2705 TYPESCRIPT RESULT: ${tsHover}`);
    return {
      contents: {
        kind: import_node.MarkupKind.Markdown,
        value: `\`\`\`typescript
${tsHover}
\`\`\``
      },
      range: {
        start: { line: mapping.htmlExpressionStart.line, character: mapping.htmlExpressionStart.character },
        end: { line: mapping.htmlExpressionEnd.line, character: mapping.htmlExpressionEnd.character }
      }
    };
  } catch (error) {
    connection.console.error("\u274C Hover error: " + String(error));
    return null;
  }
});
documents.onDidClose((e) => {
});
documents.listen(connection);
connection.listen();
connection.console.log("Alpine.js LSP with Virtual TypeScript is active!");
