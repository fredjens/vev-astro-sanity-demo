import { vev, React, ReactDOM } from "./vev.js";
const System = vev.s;
System.register("mWXd9Ap4QJgXImlLXiHP", ["react", "react-dom", "vev"], function(exports) {
  "use strict";
  var global = {};
  const ReactDOM2 = {};
  var ReactRouterDOM = {};
  var Vev = {};
  var Silke = {};
  return {
    setters: [
      function(module) {
      },
      function(module) {
        Object.assign(ReactDOM2, module);
      },
      function(module) {
        Vev.registerVevComponent = () => void 0;
        Vev.useDispatchVevEvent = module.useDispatchVevEvent;
        Vev.useEditorState = module.useEditorState;
        Vev.useVevEvent = module.useVevEvent;
      }
    ],
    execute: function() {
      var packageBuild = (() => {
        var x = Object.create;
        var m = Object.defineProperty;
        var N = Object.getOwnPropertyDescriptor;
        var L = Object.getOwnPropertyNames;
        var F = Object.getPrototypeOf, U = Object.prototype.hasOwnProperty;
        var p = (e, t) => m(e, "name", { value: t, configurable: true });
        var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), G = (e, t) => {
          for (var a in t)
            m(e, a, { get: t[a], enumerable: true });
        }, g = (e, t, a, y) => {
          if (t && typeof t == "object" || typeof t == "function")
            for (let l of L(t))
              !U.call(e, l) && l !== a && m(e, l, { get: () => t[l], enumerable: !(y = N(t, l)) || y.enumerable });
          return e;
        };
        var v = (e, t, a) => (a = e != null ? x(F(e)) : {}, g(t || !e || !e.__esModule ? m(a, "default", { value: e, enumerable: true }) : a, e)), j = (e) => g(m({}, "__esModule", { value: true }), e);
        var E = S((H, b) => {
          b.exports = React;
        });
        var V = S((K, k) => {
          k.exports = Vev;
        });
        var q = {};
        G(q, { Youtube: () => Y });
        var u = v(E());
        var h = { frame: "frame__Youtube", wrapper: "wrapper__Youtube", empty: "empty__Youtube", emptyLink: "emptyLink__Youtube" };
        var n = v(V());
        function R(e = "") {
          let t = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/, a = e.match(t);
          if (a)
            return a[1];
        }
        p(R, "youTubeParseUrl");
        var B = ((e) => (e.play = "play", e.restart = "restart", e.togglePlay = "togglePlay", e.pause = "pause", e.mute = "mute", e.unMute = "unMute", e.toggleSound = "toggleSound", e))(B || {}), I = ((e) => (e.onPlay = "onPlay", e.onPause = "onPause", e.onEnd = "onEnd", e.currentTime = "currentTime", e))(I || {}), $ = p(({ videoId: e, settings: t }) => {
          let a = t?.autoplay, y = t?.hideControls, l = t?.hideFullScreen, _ = t?.loop, A = t?.lockAspectRatio, { disabled: d } = (0, n.useEditorState)(), P = (0, u.useRef)(null), o = (0, u.useRef)(-1), w = (0, u.useRef)(), i = (0, n.useDispatchVevEvent)();
          (0, n.useVevEvent)("play", () => o.current?.playVideo()), (0, n.useVevEvent)("togglePlay", () => {
            let r = o.current;
            if (r)
              switch (r.getPlayerState()) {
                case YT.PlayerState.PLAYING:
                  r.pauseVideo();
                  break;
                case YT.PlayerState.PAUSED:
                  r.playVideo();
                  break;
                case YT.PlayerState.ENDED:
                  r.seekTo(0), r.playVideo();
                  break;
              }
          }), (0, n.useVevEvent)("restart", () => o.current?.seekTo()), (0, n.useVevEvent)("pause", () => o.current?.pauseVideo()), (0, n.useVevEvent)("mute", () => o.current?.mute()), (0, n.useVevEvent)("unMute", () => o.current?.unMute()), (0, n.useVevEvent)("toggleSound", () => o.current?.isMuted() ? o.current?.unMute() : o.current?.mute()), (0, u.useEffect)(() => {
            let r = setInterval(() => {
              if (o.current) {
                let f = Math.floor(o.current.getCurrentTime());
                f !== w.current && (w.current = f, i("currentTime", { currentTime: f }));
              }
            }, 100);
            return () => {
              clearInterval(r);
            };
          }, [i]), (0, u.useEffect)(() => {
            let r = true;
            if (!P.current)
              return;
            if (typeof YT > "u") {
              let s = document.createElement("script");
              s.src = "https://www.youtube.com/iframe_api", document.body.appendChild(s);
            }
            let T = setInterval(() => {
              typeof YT < "u" && r && YT.loaded && (C(), clearInterval(T));
            }, 100);
            function C() {
              o.current = new YT.Player(P.current, { events: { onReady: D, onStateChange: M } });
            }
            p(C, "onYouTubeIframeAPIReady");
            function D(s) {
            }
            p(D, "onPlayerReady");
            function M(s) {
              switch (console.log("event", s), s.data) {
                case YT.PlayerState.PLAYING:
                  i("onPlay");
                  break;
                case YT.PlayerState.PAUSED:
                  i("onPause");
                  break;
                case YT.PlayerState.ENDED:
                  i("onEnd");
                  break;
              }
            }
            return p(M, "onPlayerStateChange"), () => {
              r = false, clearInterval(T);
            };
          }, []), (0, u.useEffect)(() => {
            let r = o.current;
            r && r.pauseVideo && (d ? r.pauseVideo() : a && r.playVideo());
          }, [d]);
          let c = "https://www.youtube.com/embed/";
          return e && (c += R(e) + "?"), !d && a && (c += "&autoplay=1&mute=1"), y && (c += "&controls=0"), l && (c += "&fs=0"), _ && (c += "&loop=1&playlist=" + R(e)), c += "&enablejsapi=1", u.default.createElement("div", { className: h.wrapper }, u.default.createElement("iframe", { className: h.frame, style: A ? { aspectRatio: "16 / 9" } : { height: "100%" }, ref: P, src: c, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }));
        }, "Youtube"), Y = $;
        return j(q);
      })();
      exports("mWXd9Ap4QJgXImlLXiHP_Youtube", packageBuild.Youtube);
    }
  };
});
