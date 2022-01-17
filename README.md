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

## Pro tip

1. Try updating the the driver software (which you would have already tried, of course)

2. If the problem is still not solved try this
   1. Press the right click button and hold-it, turn the mouse off and on.
   2. Leave the right mouse button pressed while clicking on the left click button continuously for a few times.
   3. Release the right click button and turn the mouse off again.
   4. Click and hold the right mouse button while the mouse is turned off.
   5. Turn the mouse on and finally release the right mouse button.

I found this in the comments of a random article. This always works for my Logitech G304. It seems to be an issue with static buildup in modern mice using a particular membrane type.
