/**
 * StaticShot namespace
 * @type {}
 */
var SS = {};

SS.helpers = {
	/**
	 * @link http://stackoverflow.com/a/8306028
	 * @param {Element} canvas
	 * @returns {Element}
	 */
	cloneCanvas: function (canvas) {
		var newCanvas = document.createElement('canvas');

		newCanvas.width = canvas.width;
		newCanvas.height = canvas.height;

		newCanvas.getContext('2d').drawImage(canvas, 0, 0);

		return newCanvas;
	}
};