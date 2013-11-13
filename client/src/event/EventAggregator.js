/*****************************************************
 * 作者：YYH
 * 日期：2013-06-16
 * 描述：
 * 事件订阅及发布，提供publish、subscribe、cancelSubscribe三个接口。
 ******************************************************/

/**
 * a Event Aggregator
 * @class
 * @extends cc.Class
 */
sgd.EventAggregator = cc.Class.extend ({

    _events: [],

    Event: function (name) {
        var handlers = [];

        this.getName = function () {
            return name;
        };

        this.getHandlerCount = function () {
            return handlers.length;
        };

        this.addHandler = function (handler) {
            handlers.push(handler);
        };

        this.removeHandler = function (handler) {
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] == handler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        };

        this.fire = function (eventArgs) {
            handlers.forEach(function (h) {
                h(eventArgs);
            });
        };
    },

    _getEvent: function (eventName) {
        var event;
        for (var i = 0; i < this._events.length; i++){
            if (this._events[i].getName() === eventName){
                event = this._events[i];
                break;
            }
        }
        return event;
    },

    _delEvent: function (event) {
        for (var i = 0; i < this._events.length; i++) {
            if (this._events[i] == event) {
                this._events.splice(i, 1);
                break;
            }
        }
    },

    publish: function (eventName, eventArgs) {
        var event = this._getEvent(eventName);

        if (!event) {
            event = new this.Event(eventName);
            cc.Logger.getInstance().event_fire(this,sgd.EventTags.LOGIN_IN, eventArgs);
            this._events.push(event);
        }
        event.fire(eventArgs);
    },

    subscribe: function (eventName, handler) {
        var event = this._getEvent(eventName);

        if (!event) {
            event = new this.Event(eventName);
            this._events.push(event);
        }

        event.addHandler(handler);
    },

    cancelSubscribe: function (eventName, handler) {
        var event = this._getEvent(eventName);

        if (event) {
            event.removeHandler(handler);

            if (event.getHandlerCount() == 0){
                this._delEvent(event);
            }
        }
    }

});

/**
 * get a singleton Event Aggregator
 * @function
 * @return {sgd.EventAggregator}
 */
sgd.EventAggregator.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.EventAggregator();
    }
    return this._instance;
};

sgd.EventAggregator._instance = null;
