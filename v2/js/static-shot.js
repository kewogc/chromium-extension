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

{
	SS.Tool = Backbone.Model.extend({
		defaults: {
			id: '',
			active: false
		},
		/**
		 * @param {Element} A copy of current canvas
		 * @param [] $workspace Append here any elements you need
		 * @param {function} update First parameter must be a <canvas> that will replace current
		 */
		activate: function(canvas, $workspace, update) {
			this.set('active', true);
		},
		deactivate: function() {
			this.set('active', false);
		}
	});

	SS.ToolView = Backbone.View.extend({
		initialize: function() {}
	});
}

{
	SS.ToolBox = Backbone.Model.extend({
		defaults: {
			/**
			 * @type {SS.Tool[]}
			 */
			tools: []
		},
		initialize: function() {},
		/**
		 * @param {SS.Tool} tool
		 */
		addTool: function(tool) {
			this.tools.push(tool);
		},
		getTool: function(id) {
			return _.find(this.get('tools'), function(tool){ return tool.get('id') === id; });
		}
	});

	SS.ToolBoxView = Backbone.View.extend({
		//
	});
}