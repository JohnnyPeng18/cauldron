(function () {
  'use strict';

  var exports = window.CAULDRON || {};
  window.CAULDRON = exports;

  /**
   * Function called when
   */
  function onWindowResize() {
    exports.resizeCallbacks.forEach(function (func) {
      func();
    });
  }
  window.onresize = onWindowResize;

  /**
   *
   */
  function parseUrlParameters() {
    var out = {};

    document.location.search
      .replace(/(^\?)/, '')
      .split("&")
      .forEach(function (item) {
        item = item.split("=");
        if (item.length < 2) {
          return;
        }

        var v = item[1];
        if (!/[^0-9\.]+/.test(v)) {
          if (v.indexOf('.') === -1) {
            v = parseInt(v, 10);
          } else {
            v = parseFloat(v);
          }
        } else if (v.toLowerCase() === 'true') {
          v = true;
        } else if (v.toLowerCase() === 'false') {
          v = false;
        } else {
          v = decodeURIComponent(v);
        }

        out[item[0]] = v;
      });
    return out;
  }
  exports.parseUrlParameters = parseUrlParameters;

  /**
   *
   */
  function run() {
    var dataFilename = window.RESULTS_FILENAME || 
        ('reports/' + exports.PARAMS['id'] + '/results.js');
    
    return exports.loadDataFile(dataFilename)
      .then(function () {
        $('title').html(
            exports.SETTINGS.title ||
            exports.SETTINGS.id ||
            'Cauldron'
        );
      });
  }
  exports.run = run;

  /**
   * RUN APPLICATION
   */
  $(function () {
    exports.PARAMS = exports.parseUrlParameters();

    exports.run()
      .then(function () {
        // Add auto resizing to plotly graphs
        exports.resizeCallbacks.push(function () {
          $('.plotly-graph-div').each(function (index, e) {
            var plot_id = $(e).attr('id');
            console.log(plot_id);
            Plotly.Plots.resize(e);
          });
        });
      });
  });

}());

