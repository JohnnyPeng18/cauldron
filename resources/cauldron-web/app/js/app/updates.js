(function () {
  'use strict';

  var exports = window.CAULDRON || {};
  window.CAULDRON = exports;


  /**
   *
   * @param step
   * @returns {*}
   */
  function prepareStepBody(step) {
    if (!step || !step.body) {
      return null;
    }

    var stepBody = $(step.body);

    stepBody.find('[data-src]').each(function (index, e) {
      var element = $(e);
      var src = element.attr('data-src');

      if (src.startsWith('/')) {
        src = src.slice(1);
      }

      element.attr(
          'src',
          exports.DATA_DIRECTORY + '/' + src +
          '?nocache=' + exports.getNoCacheString()
      );
      element.attr('data-src', null);
    });

    return stepBody;
  }
  exports.prepareStepBody = prepareStepBody;


  /**
   *
   */
  function processStepUpdates(updates) {
    console.log('UPDATES:', updates);
    if (!updates) {
      return;
    }

    var steps = updates.map(function(update) {
      return update.step;
    });

    return exports.loadStepIncludes(steps)
        .then(function () {
          // Add the body for each step to the page body
          var body = $('.body-wrapper');

          updates.forEach(function (update) {
            var existing = $('[data-step-name="' + update.name + '"]');
            if (update.action === 'removed') {
              existing.remove();
              return;
            }

            var stepBody = exports.prepareStepBody(update.step);

            if (update.action === 'updated') {
              existing.replaceWith(stepBody);
              return;
            }

            if (update.action === 'modified') {
              stepBody = body.find('[data-step-name="' + update.name + '"]');
              stepBody.attr('data-step-name', update.new_name);
              stepBody.find('.cd-step-title').html(
                  update.title || update.new_name
              );
              stepBody.detach();
            }

            // Modified or added steps get inserted into the dom
            var after = update.after;
            if (!after) {
              body.prepend(stepBody);
            } else {
              body.find('[data-step-name="' + after + '"]')
                  .after(stepBody);
            }
          });

          $(window).trigger('resize');
        });
  }
  exports.processStepUpdates = processStepUpdates;

}());