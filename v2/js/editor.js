/**
 * StaticShot namespace
 * @type {{}}
 */
var SS = {};

/**
 * Abstraction layer for <canvas>
 */
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

SS.Tool = Backbone.Model.extend({
    activate: function(appWithCanvasLayers) {
        //
    }
});

SS.ToolView = Backbone.View.extend({
    //
});