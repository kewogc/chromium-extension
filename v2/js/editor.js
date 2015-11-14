/**
 * StaticShot namespace
 * @type {{}}
 */
var SS = {};

/**
 * Abstraction layer for <canvas>
 */
{
	SS.Canvas = Backbone.Model.extend({
		//
	});

	SS.CanvasView = Backbone.View.extend({
		tagName: 'canvas',
		initialize: function(){},
		render: function(){},
		clear: function() {
			var width = this.el.width,
				height = this.el.height;

			this.el.width = 0;
			this.el.height = 0;

			this.el.width = width;
			this.el.height = height;
		}
	});
}

{
	SS.Tool = Backbone.Model.extend({
		defaults: {
			id: '',
			active: false
		},
		activate: function() {
			this.set('active', true);
		},
		deactivate: function() {
			this.set('active', false);
		}
	});

	SS.ToolView = Backbone.View.extend({
		$el: {},
		initialize: function() {
			this.$el = {
				$button: null
			};
		}
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