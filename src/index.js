class ScrollWiz {
  constructor() {
    const selector = "scrollwiz",
      options = {
        start: {
          rootMargin: "0px",
          threshold: 0,
        },
        half: {
          rootMargin: "0px",
          threshold: 0.5,
        },
        full: {
          rootMargin: "0px",
          threshold: 1,
        },
      },
      o = {};

    for (const [loc, opt] of Object.entries(options)) {
      o[loc] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.trigger_event(entry.target);
          }
        });
      }, opt);
    }

    this.selector = `data-${selector}`;
    this.scroll_event = document.createEvent("Event");
    this.scroll_event.initEvent("scrollwiz", true, true);

    document.querySelectorAll(`[${this.selector}]`).forEach((el) => {
      let pos = el.getAttribute(this.selector);
      pos = pos == "" ? `half` : pos;
      o[pos] && o[pos].observe(el);
    });
  }

  trigger_event(el) {
    el.removeAttribute(this.selector);
    el.classList.add("is-active");
    el.dispatchEvent(this.scroll_event);
    return true;
  }
}

const runFunc = () => {
  window.addEventListener(
    "load",
    () => {
      if ("IntersectionObserver" in window) {
        new ScrollWiz();
      } else {
        document.querySelectorAll(`[data-scrollwiz]`).forEach(el => {
          el.removeAttribute(this.selector);
          el.classList.add("is-active"); 
        });
      }
    },
    false
  );
};

export default runFunc;
