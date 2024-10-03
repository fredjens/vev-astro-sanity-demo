import { vev, React, ReactDOM } from "./vev.js";
const System = vev.s;
System.register("pgxSSDpDPRe", ["vev", "react"], function(exports) {
  "use strict";
  var useEditorState, useMenu, store, Icon, Portal, useRoute, Link, useGlobalStore, usePreloadPage, useState, useEffect, useRef, Fragment;
  return { setters: [function(module) {
    useEditorState = module.useEditorState;
    useMenu = module.useMenu;
    store = module.store;
    Icon = module.Icon;
    Portal = module.Portal;
    useRoute = module.useRoute;
    Link = module.Link;
    useGlobalStore = module.useGlobalStore;
    usePreloadPage = module.usePreloadPage;
  }, function(module) {
    useState = module.useState;
    useEffect = module.useEffect;
    useRef = module.useRef;
    Fragment = module.Fragment;
  }], execute: function() {
    exports({ "w1bopak0jo-n2r": index$2, "w1br1l0lsu-u06": index$1, "w1canc3n2p-1dub": index });
    const DOCK_ANI = {
      left: "slide-right",
      right: "slide-left",
      top: "slide-down",
      bottom: "slide-up"
    };
    function index$2({ docking, burgerMenu }) {
      const [open, setOpen] = useState(false);
      const { disabled, rule, selected } = useEditorState();
      const menu = useMenu(burgerMenu);
      useEffect(() => store("route", () => setOpen(false)), []);
      useEffect(() => {
        if (rule === "host")
          setOpen(false);
        else
          setOpen(true);
      }, [rule, selected, disabled]);
      useEffect(() => {
        if (open && menuCloseRef.current) {
          console.log("menuCloseRef.current", menuCloseRef.current);
          menuCloseRef.current.focus();
        }
      }, [open]);
      const menuCloseRef = useRef();
      const menuId = menu.title.replace(" ", "");
      return React.createElement(
        Fragment,
        null,
        React.createElement(
          "div",
          { tabIndex: 0, id: menuId, "aria-label": menu.title, "aria-expanded": open, role: "navigation", className: "icon-container", onClick: () => setOpen(!open), onKeyUp: (event) => {
            event.preventDefault();
            if (event.key === "Enter" || event.key === " ") {
              setOpen(!open);
            }
          } },
          React.createElement(Icon, { d: "menu", className: "menu-icon" })
        ),
        React.createElement(
          Portal,
          { dock: docking || "left", className: "sidenav", hide: !open, animation: DOCK_ANI[docking || "left"], closeTrigger: "click", onRequestClose: () => setOpen(false) },
          React.createElement(
            "div",
            { "aria-controls": menuId },
            React.createElement(
              "div",
              { ref: menuCloseRef, role: "button", tabIndex: 0, className: "close-button", onClick: () => setOpen(false), onKeyUp: (event) => {
                event.preventDefault();
                if (event.key === "Enter" || event.key === " ") {
                  setOpen(false);
                }
              } },
              React.createElement(Icon, { d: "close" })
            ),
            menu.children.map((item) => React.createElement(MenuItem$2, { key: item.key, item, openSub: rule === ".menu-item-children", onCloseMenu: () => {
              setOpen(false);
            } }))
          )
        )
      );
    }
    function MenuItem$2({ openSub, item, onCloseMenu }) {
      const [open, setOpen] = useState(false);
      const { pageKey } = useRoute();
      const { title, link, children = [] } = item;
      const isActive = link && link.page === pageKey;
      let cl = "menu-item";
      return React.createElement(
        "div",
        { className: cl },
        React.createElement(
          "div",
          { className: "menu-link-wrapper" },
          React.createElement(Link, { to: item.link, className: isActive ? "active" : "", onClick: onCloseMenu }, title),
          children.length > 0 && React.createElement(
            "i",
            { onClick: () => setOpen(!open) },
            React.createElement(Icon, { d: open ? "collapse" : "uncollapse" })
          )
        ),
        children.length > 0 && React.createElement("div", { className: `menu-item-children${!open && !openSub ? " collapsed" : ""}` }, children.map((item2) => React.createElement(MenuItem$2, { key: item2.key, item: item2, onCloseMenu })))
      );
    }
    function index$1({ pageMenu }) {
      const [open, setOpen] = useState(false);
      const menu = useMenu(pageMenu);
      const { disabled, rule, selected } = useEditorState();
      useEffect(() => store("scrollTop", () => setOpen(false)), []);
      useEffect(() => store("route", () => setOpen(false)), []);
      useEffect(() => {
        if (rule === "host")
          setOpen(false);
        else
          setOpen(true);
      }, [rule, selected, disabled]);
      return React.createElement(
        Fragment,
        null,
        React.createElement(
          "div",
          { className: "icon-container", onClick: () => setOpen(!open) },
          React.createElement(Icon, { d: "menu", className: "menu-icon" })
        ),
        open && React.createElement(Portal, { dock: "bottom", className: "nav-wrapper", closeTrigger: "click", animation: "slide-up", onRequestClose: () => setOpen(false) }, menu.children.map((item) => React.createElement(MenuItem$1, { key: item.key, item })))
      );
    }
    function isPage$1(object) {
      return "page" in object;
    }
    function MenuItem$1({ item }) {
      const { pageKey } = useRoute();
      const { title, link } = item;
      const pages = useGlobalStore((store2) => store2.pages);
      const backgroundImage = (i) => {
        let style = {};
        const defaultCover = "/static/sample-image.svg";
        const link2 = i.link;
        switch (link2.mode) {
          case 0:
          case 1:
            const page = pages.filter((page2) => page2.key === link2.page).map((page2) => page2.cover).filter(Boolean);
            const pageCover = page.length > 0 ? page[0] : defaultCover;
            style["backgroundImage"] = `url(${pageCover})`;
            break;
          default:
            style["backgroundImage"] = `url(${defaultCover})`;
        }
        return style;
      };
      let selected = "";
      if (link && isPage$1(link)) {
        if (link.page === pageKey) {
          selected += "selected";
        }
      }
      return React.createElement(
        "div",
        { className: "menu-item" },
        React.createElement(
          Link,
          { to: link, className: selected, style: backgroundImage(item) },
          React.createElement("label", { className: "label" }, title)
        )
      );
    }
    function pointToPosition(x, y) {
      function findY(y2) {
        if (y2 === 0)
          return "top";
        else if (y2 === 0.5)
          return "center";
        else
          return "bottom";
      }
      function findX(x2) {
        if (x2 === 0)
          return "left";
        else if (x2 === 0.5)
          return "center";
        else
          return "right";
      }
      return `${findY(y)}-${findX(x)}`;
    }
    function index({ anchor, target, duration, delay, fanMenu }) {
      const [open, setOpen] = useState(false);
      const menu = useMenu(fanMenu);
      console.log("menu", menu);
      const { disabled, rule, selected } = useEditorState();
      const portalRef = useRef(null);
      const [pages, setPages] = useState([]);
      const anchorOrigin = Array.isArray(anchor) ? pointToPosition(anchor[0], anchor[1]) : pointToPosition(0, 1);
      const menuAnchorOrigin = Array.isArray(target) ? pointToPosition(target[0], target[1]) : pointToPosition(0, 0);
      usePreloadPage(pages);
      useEffect(() => {
        const pages2 = menu?.children?.map((child) => {
          if (child?.link?.mode === 0) {
            return child?.link?.page;
          } else if (child?.link?.mode === 1) {
            return child?.link?.widget?.page;
          } else {
            return false;
          }
        }).filter(Boolean);
        setPages(pages2);
      }, []);
      useEffect(() => {
        if (rule === "host")
          setOpen(false);
        else
          setOpen(true);
      }, [rule, selected, disabled]);
      return React.createElement(
        Fragment,
        null,
        React.createElement(
          "div",
          { ref: portalRef, className: "fill icon-container", onClick: () => setOpen(true) },
          React.createElement(Icon, { d: "menu", className: "menu-icon" })
        ),
        React.createElement(Portal, { className: "fan-menu-links", animation: { delay, duration, translateY: ["-30%", 0] }, hide: !open, anchor: portalRef, anchorOrigin, portalOrigin: menuAnchorOrigin, closeTrigger: "click", onRequestClose: () => setOpen(false) }, menu.children.map((menuItem) => React.createElement(MenuItem, { item: menuItem, key: menuItem.key })))
      );
    }
    function isPage(object) {
      return "page" in object;
    }
    function MenuItem({ item }) {
      const { pageKey } = useRoute();
      const { title, link } = item;
      let cl = "menu-item";
      if (link && isPage(link)) {
        if (link.page === pageKey) {
          cl += " menu-item-active";
        }
      }
      return React.createElement(
        "div",
        { className: cl },
        React.createElement(
          "div",
          { className: "menu-link-wrapper" },
          React.createElement(Link, { to: link }, title)
        )
      );
    }
  } };
});
