/* global window */
/* global $ */

const exports = window.CAULDRON || {};
window.CAULDRON = exports;

exports.notebookVersion = 1;
exports.resizeCallbacks = [];


/**
 * A fake require function that is needed for the inclusion of some
 * elements within the DOM (e.g. plotly offline)
 *
 * @param preloaders
 * @param callback
 */
function fakeRequire(preloaders, callback) {
  const callers = [];
  preloaders.forEach((entry) => {
    if (entry === 'plotly') {
      callers.push(window.Plotly);
    }
  });
  callback.apply(this, callers);
}
window.require = fakeRequire;


/**
 *
 * @returns {*}
 */
function getDataDirectory() {
  if (window.PROJECT_DIRECTORY) {
    return window.PROJECT_DIRECTORY;
  }

  if (exports.PARAMS.data_root) {
    return exports.PARAMS.data_root;
  }

  const id = exports.PARAMS.id || window.PROJECT_ID;
  const sid = exports.PARAMS.sid;

  const dataDirectory = [
    'reports',
    id || '',
    sid ? 'snapshots' : 'latest',
    sid || ''
  ];

  return dataDirectory
    .filter(folder => folder.length > 0)
    .join('/');
}


/**
 *
 * @returns {boolean}
 */
function addSnapshotBar() {
  const sid = exports.PARAMS.sid;
  const body = $('body');

  if (!sid) {
    return false;
  }

  $('<div></div>')
    .addClass('snapshot-bar')
    .text(`Snapshot: ${sid}`)
    .prependTo(body);

  $('<div></div>')
    .addClass('snapshot-bar')
    .addClass('snapshot-bar-overlay')
    .text(`Snapshot: ${exports.PARAMS.sid}`)
    .prependTo(body);

  exports.TITLE = `{${sid}} ${exports.TITLE}`;
  return true;
}
exports.addSnapshotBar = addSnapshotBar;


/**
 *
 * @returns {*}
 */
function loadProjectData() {
  if (window.RESULTS) {
    // If the results are already available abort the load process
    return Promise.resolve();
  }

  if (window.RESULTS_FILENAME) {
    return exports.loadSourceFile({
      name: 'cauldron-project',
      src: `:${window.RESULTS_FILENAME}`
    });
  }

  return exports.loadSourceFile({
    name: 'cauldron-project',
    src: '/results.js'
  });
}

function loadIncludes() {
  if (window.COMBINED_INCLUDES) {
    return exports.loadSourceFiles(window.COMBINED_INCLUDES);
  }

  return exports.loadSourceFiles(window.RESULTS.includes)
    .then(() => exports.loadStepIncludes(exports.RESULTS.steps));
}

function preload() {
  if (!exports.PARAMS.preload_url) {
    return Promise.resolve();
  }

  return Promise.resolve();
}

/**
 *
 */
function initialize() {
  exports.DATA_DIRECTORY = getDataDirectory();
  return preload()
    .then(() => loadProjectData())
    .then(() => {
      window.CAULDRON_VERSION = window.RESULTS.cauldron_version;

      exports.RESULTS = window.RESULTS;
      exports.DATA = window.RESULTS.data;
      exports.SETTINGS = window.RESULTS.settings;
      exports.TITLE = exports.SETTINGS.title || exports.SETTINGS.id;
      return loadIncludes();
    })
    .then(() => {
      // Add the body for each step to the page body
      const body = $('.body-wrapper');

      window.RESULTS.steps.forEach((step) => {
        const stepBody = exports.prepareStepBody(step);
        if (stepBody) {
          body.append(stepBody);
        }
      });

      $(window).trigger('resize');
      return exports.DATA;
    });
}
exports.initialize = initialize;
