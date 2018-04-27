// debounce and throttle.
//
// These are two very common higher-order functions that control how often
// another function runs. They use closures to remember timers between
// calls. You see them a lot for search boxes, scroll handlers and resize
// events.
//
//   debounce - wait until the calls STOP, then run once.
//   throttle - run at most once every X milliseconds, no matter how many
//              calls come in.

// debounce: only runs `fn` after `delay` ms have passed with no new calls.
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); // cancel the previous waiting call
    timerId = setTimeout(() => fn(...args), delay);
  };
}

// throttle: runs `fn` at most once per `limit` ms.
function throttle(fn, limit) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      fn(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// demo: imagine these being called many times quickly (like typing).
const search = debounce((text) => {
  console.log("Searching for:", text);
}, 200);

// only the LAST one runs, 200ms after the typing stops.
search("h");
search("he");
search("hel");
search("hell");
search("hello"); // -> "Searching for: hello"

const onScroll = throttle(() => {
  console.log("Scroll handled at", Date.now());
}, 100);

// even if scroll fires constantly, onScroll runs at most every 100ms.
onScroll();
onScroll(); // ignored (too soon)
onScroll(); // ignored

// Both are classic examples of why closures matter: the timer and the
// "waiting" flag are remembered between calls, privately.
