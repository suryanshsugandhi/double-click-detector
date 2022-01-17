const BUTTON_DEFINITIONS = {
  0: {
    name: "left",
    clickCount: 0,
    doubleClickCount: 0,
    previousClickTime: -999,
  },
  1: {
    name: "middle",
    clickCount: 0,
    doubleClickCount: 0,
    previousClickTime: -999,
  },
  2: {
    name: "right",
    clickCount: 0,
    doubleClickCount: 0,
    previousClickTime: -999,
  },
  3: {
    name: "browser back",
    clickCount: 0,
    doubleClickCount: 0,
    previousClickTime: -999,
  },
  4: {
    name: "browser forward",
    clickCount: 0,
    doubleClickCount: 0,
    previousClickTime: -999,
  },
};
const COMPARISON_TIME = 0.08;
var totalClicks = 0;
var totalDoubleClicks = 0;

function onMouseButtonClick(event) {
  event.preventDefault();
  var pressedButton = getButtonDefinition(event);
  checkDoubleClick(pressedButton);
  highlightButtonAnimation(pressedButton);
}

var getButtonDefinition = function (e) {
  var e = e || window.event;
  var btnCode = null;
  if ("object" === typeof e) {
    btnCode = e.button;
  }

  if (BUTTON_DEFINITIONS[btnCode] == undefined) {
    BUTTON_DEFINITIONS[btnCode] = {
      name: `Button ${btnCode}`,
      clickCount: 0,
      doubleClickCount: 0,
      previousClickTime: -999,
    };
  }

  return BUTTON_DEFINITIONS[btnCode];
};

function checkDoubleClick(pressedButton) {
  console.log(pressedButton.name);
  clickTime = microTime();
  diff = clickTime - pressedButton.previousClickTime;
  if (diff <= COMPARISON_TIME) {
    totalDoubleClicks++;
    var doubleClickCount = document.getElementById("double-click-count");
    var clickableArea = document.getElementById("clickable-area");
    var clickableAreaText = document.getElementById("clickable-area-text");
    doubleClickCount.textContent = totalDoubleClicks;
    clickableArea.style.background = "red";
    var error = generateErrorMessage(pressedButton);
    clickableAreaText.textContent = error.message;
    console.log("Double clicked " + pressedButton.name);
  }
  pressedButton.previousClickTime = clickTime;
  pressedButton.clickCount += 1;
  totalClicks += 1;
}

function highlightButtonAnimation(pressedButton) {}

function microTime(get_as_float = true) {
  var now = new Date().getTime() / 1000;
  var s = parseInt(now, 10);

  return get_as_float ? now : Math.round((now - s) * 1000) / 1000 + " " + s;
}

function generateErrorMessage(pressedButton) {
  var doubleClickFrequency =
    pressedButton.doubleClickCount / pressedButton.clickCount;
  var message = `Oops! Your mouse double clicked the ${pressedButton.name} button!!`;
  return { doubleClickFrequency, message };
}
