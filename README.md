# Mouse double click detector

**A simple browser-based detector for malfunctioning and double clicking computer mice**

This simple javascript page detects if any of your computer mouse buttons are malfunctioning and causing an unintentional double click.

I have created this utility to test additional mouse buttons other than primary, secondary, and middle mouse button. All the online utilities I came across only tested double clicking for these three primary buttons.

## Usage

Clone the repository using the following the command:

    git clone https://github.com/suryanshsugandhi/double-click-detector

Open the HTML page in any of the supported browsers (preferably Chrome version 74+) and start clicking on the test area. If you suspect a particular mouse button is misbehaving, repeatedly click the test area until it turns red.

The test area will provide you information about the mean time of double clicks and the average occurrence (once per x clicks).

## Supported browsers

The recommended browser for this little experimental application is **the latest version of Google Chrome**.

You can also use Microsoft Edge, Mozilla Firefox, or Brave for the test but they do not support the prevention of default event for mouse buttons other than "left click", "right click", and "middle mouse click" without breaking any browser functionality.

Chrome on the other hand supports the remapping of buttons 4, 5, 6, and 7 which might be used for browser-back, browser-forward, and other browser actions earlier.

I hope that you find this utility helpful.
