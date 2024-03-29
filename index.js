import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
!function() {
    "use strict";
    function e(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(e, (o = a.key,
            n = void 0,
            "symbol" == typeof (n = function(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var a = r.call(e, t || "default");
                    if ("object" != typeof a)
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(o, "string")) ? n : String(n)), a)
        }
        var o, n
    }
    function r(e, r, a) {
        return r && t(e.prototype, r),
        a && t(e, a),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && n(e, t)
    }
    function o(e) {
        return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        o(e)
    }
    function n(e, t) {
        return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        n(e, t)
    }
    function i(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function s(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return i(e)
    }
    function c(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, a = o(e);
            if (t) {
                var n = o(this).constructor;
                r = Reflect.construct(a, arguments, n)
            } else
                r = a.apply(this, arguments);
            return s(this, r)
        }
    }
    var l = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }]
      , d = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }]
      , p = {
        backgroundColor: "orange",
        boxShadow: "0 3px orange",
        height: 77,
        marginTop: 13
    }
      , u = {
        backgroundColor: "grey",
        marginTop: 10,
        boxShadow: "3px 3px 5px black"
    }
      , m = function(t) {
        a(n, React.Component);
        var o = c(n);
        function n(t) {
            var r;
            return e(this, n),
            (r = o.call(this, t)).state = {
                padStyle: u
            },
            r.playSound = r.playSound.bind(i(r)),
            r.handleKeyPress = r.handleKeyPress.bind(i(r)),
            r.activatePad = r.activatePad.bind(i(r)),
            r
        }
        return r(n, [{
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyPress)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyPress)
            }
        }, {
            key: "handleKeyPress",
            value: function(e) {
                e.keyCode === this.props.keyCode && this.playSound()
            }
        }, {
            key: "activatePad",
            value: function() {
                this.props.power ? "orange" === this.state.padStyle.backgroundColor ? this.setState({
                    padStyle: u
                }) : this.setState({
                    padStyle: p
                }) : 13 === this.state.padStyle.marginTop ? this.setState({
                    padStyle: u
                }) : this.setState({
                    padStyle: {
                        height: 77,
                        marginTop: 13,
                        backgroundColor: "grey",
                        boxShadow: "0 3px grey"
                    }
                })
            }
        }, {
            key: "playSound",
            value: function() {
                var e = this
                  , t = document.getElementById(this.props.keyTrigger);
                t.currentTime = 0,
                t.play(),
                this.activatePad(),
                setTimeout((function() {
                    return e.activatePad()
                }
                ), 100),
                this.props.updateDisplay(this.props.clipId.replace(/-/g, " "))
            }
        }, {
            key: "render",
            value: function() {
                return React.createElement("div", {
                    className: "drum-pad",
                    id: this.props.clipId,
                    onClick: this.playSound,
                    style: this.state.padStyle
                }, React.createElement("audio", {
                    className: "clip",
                    id: this.props.keyTrigger,
                    src: this.props.clip
                }), this.props.keyTrigger)
            }
        }]),
        n
    }()
      , y = function(t) {
        a(n, React.Component);
        var o = c(n);
        function n(t) {
            return e(this, n),
            o.call(this, t)
        }
        return r(n, [{
            key: "render",
            value: function() {
                var e, t = this;
                return e = this.props.power ? this.props.currentPadBank.map((function(e, r, a) {
                    return React.createElement(m, {
                        clip: a[r].url,
                        clipId: a[r].id,
                        keyCode: a[r].keyCode,
                        keyTrigger: a[r].keyTrigger,
                        power: t.props.power,
                        updateDisplay: t.props.updateDisplay
                    })
                }
                )) : this.props.currentPadBank.map((function(e, r, a) {
                    return React.createElement(m, {
                        clip: "#",
                        clipId: a[r].id,
                        keyCode: a[r].keyCode,
                        keyTrigger: a[r].keyTrigger,
                        power: t.props.power,
                        updateDisplay: t.props.updateDisplay
                    })
                }
                )),
                React.createElement("div", {
                    className: "pad-bank"
                }, e)
            }
        }]),
        n
    }()
      , h = function(t) {
        a(n, React.Component);
        var o = c(n);
        function n(t) {
            var r;
            return e(this, n),
            (r = o.call(this, t)).state = {
                power: !0,
                display: String.fromCharCode(160),
                currentPadBank: l,
                currentPadBankId: "Heater Kit",
                sliderVal: .3
            },
            r.displayClipName = r.displayClipName.bind(i(r)),
            r.selectBank = r.selectBank.bind(i(r)),
            r.adjustVolume = r.adjustVolume.bind(i(r)),
            r.powerControl = r.powerControl.bind(i(r)),
            r.clearDisplay = r.clearDisplay.bind(i(r)),
            r
        }
        return r(n, [{
            key: "powerControl",
            value: function() {
                this.setState({
                    power: !this.state.power,
                    display: String.fromCharCode(160)
                })
            }
        }, {
            key: "selectBank",
            value: function() {
                this.state.power && ("Heater Kit" === this.state.currentPadBankId ? this.setState({
                    currentPadBank: d,
                    display: "Smooth Piano Kit",
                    currentPadBankId: "Smooth Piano Kit"
                }) : this.setState({
                    currentPadBank: l,
                    display: "Heater Kit",
                    currentPadBankId: "Heater Kit"
                }))
            }
        }, {
            key: "displayClipName",
            value: function(e) {
                this.state.power && this.setState({
                    display: e
                })
            }
        }, {
            key: "adjustVolume",
            value: function(e) {
                var t = this;
                this.state.power && (this.setState({
                    sliderVal: e.target.value,
                    display: "Volume: " + Math.round(100 * e.target.value)
                }),
                setTimeout((function() {
                    return t.clearDisplay()
                }
                ), 1e3))
            }
        }, {
            key: "clearDisplay",
            value: function() {
                this.setState({
                    display: String.fromCharCode(160)
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.state.power ? {
                    float: "right"
                } : {
                    float: "left"
                }
                  , r = this.state.currentPadBank === l ? {
                    float: "left"
                } : {
                    float: "right"
                };
                return [].slice.call(document.getElementsByClassName("clip")).forEach((function(t) {
                    t.volume = e.state.sliderVal
                }
                )),
                React.createElement("div", {
                    className: "inner-container",
                    id: "drum-machine"
                }, React.createElement(y, {
                    clipVolume: this.state.sliderVal,
                    currentPadBank: this.state.currentPadBank,
                    power: this.state.power,
                    updateDisplay: this.displayClipName
                }), React.createElement("div", {
                    className: "logo"
                }, React.createElement("div", {
                    className: "inner-logo "
                }, "FCC" + String.fromCharCode(160)), React.createElement("i", {
                    className: "inner-logo fa fa-free-code-camp"
                })), React.createElement("div", {
                    className: "controls-container"
                }, React.createElement("div", {
                    className: "control"
                }, React.createElement("p", null, "Power"), React.createElement("div", {
                    className: "select",
                    onClick: this.powerControl
                }, React.createElement("div", {
                    className: "inner",
                    style: t
                }))), React.createElement("p", {
                    id: "display"
                }, this.state.display), React.createElement("div", {
                    className: "volume-slider"
                }, React.createElement("input", {
                    max: "1",
                    min: "0",
                    onChange: this.adjustVolume,
                    step: "0.01",
                    type: "range",
                    value: this.state.sliderVal
                })), React.createElement("div", {
                    className: "control"
                }, React.createElement("p", null, "Bank"), React.createElement("div", {
                    className: "select",
                    onClick: this.selectBank
                }, React.createElement("div", {
                    className: "inner",
                    style: r
                })))))
            }
        }]),
        n
    }();
    ReactDOM.render(React.createElement(h, null), document.getElementById("root"))
}();
