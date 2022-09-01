// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var WindowScrollModule = (function (window, undefined) {
  var moduleInstance;
  function WindowScrollModule() {
    console.log('*** Creating New instance');
    var scrollElem,
      windowElem,
      currentUrlHash,
      self = this;

    this.scrollWindowToPosition = function (options) {
      console.log('scrollToPosition called');
    };

    //  click event listener for anchor navigation Elements
    this.onNavLinkClickHandler = function () {};

    // return the scrollTop position
    this.getCalculatedTopPosition = function () {};
    this.setScrollElement = function () {
      scrollElem = 'html,body';
    };
    this.getScrollElement = function () {
      return scrollElem;
    };
  }
  return function () {
    if (moduleInstance) {
      console.log('*** instance already present');
      return moduleInstance;
    }
    moduleInstance = new WindowScrollModule();
    return moduleInstance;
  };
})(window);

console.log(' -> create instance scrollObj1');
let scrollObj1 = new WindowScrollModule();
scrollObj1.scrollWindowToPosition();
scrollObj1.setScrollElement();

console.log(' -> create instance scrollObj2');
let scrollObj2 = new WindowScrollModule();
console.log(scrollObj2.getScrollElement());
console.log('Both instance are same ?', scrollObj1 === scrollObj2);
