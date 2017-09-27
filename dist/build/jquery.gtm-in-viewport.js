/*

jQuery GTM In-Viewport Manager Plugin.
A manager of in-viewport events for Google Tag Manager.

Author:
- Agilie Team <info@agilie.com> (https://agilie.com)

Contributors:
- Eugene Zaretsky <eugene@agilie.com> (https://github.com/ujinius)

Version: 1.0.1
Full source at https://github.com/agilie/....

MIT License, https://github.com/agilie/.../blob/master/LICENSE.md

*/
(function() {
  $(document).ready(function() {
    window.GTMViewport = (function() {
      var GTMViewportEvent, init, prepareStructures, runEventCheck;
      GTMViewportEvent = function(elementSelector, GTMEventName, callback) {
        var res;
        res = {
          visible: false,
          send: function() {
            var screen;
            screen = $(elementSelector).isOnScreen(function(deltas) {
              return deltas.top >= this.height() && deltas.bottom >= this.height();
            });
            if (!res.visible && screen) {
              res.visible = true;
              try {
                dataLayer.push({
                  'event': GTMEventName
                });
                console.log(GTMEventName);
                callback(GTMEventName);
              } catch (error) {

              }
            } else if (res.visible && !screen) {
              res.visible = false;
            }
          }
        };
        return res;
      };
      prepareStructures = function(config) {
        var elem, i, ind, len, res;
        res = [];
        for (ind = i = 0, len = config.length; i < len; ind = ++i) {
          elem = config[ind];
          if ($(elem.selector).length > 0) {
            res.push(new GTMViewportEvent(elem.selector, elem.eventName, elem.callback));
          }
        }
        return res;
      };
      runEventCheck = function(elems) {
        var gtmElem, i, ind, len, results;
        results = [];
        for (ind = i = 0, len = elems.length; i < len; ind = ++i) {
          gtmElem = elems[ind];
          results.push(gtmElem.send());
        }
        return results;
      };
      init = function(config) {
        var elems;
        elems = prepareStructures(config);
        console.log(elems);
        window.addEventListener('scroll', function(e) {
          return runEventCheck(elems);
        });
        return runEventCheck(elems);
      };
      return {
        init: init
      };
    })();
  });

}).call(this);
