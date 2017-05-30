
$(document).ready ->

  window.GTMViewport = (() ->

    GTMViewportEvent = (elementSelector, GTMEventName, callback) ->
      res = {
        visible: false,
        send: () ->

          screen = $(elementSelector).isOnScreen (deltas) ->
            deltas.top >= this.height() and deltas.bottom >= this.height()

          if !res.visible && screen
            res.visible = true
            try
              dataLayer.push({'event': GTMEventName})
              console.log(GTMEventName)
              callback(GTMEventName)
            catch

          else if res.visible && !screen
            res.visible = false

          return
      }
      return res

    prepareStructures = (config) ->
      res = []
      for elem, ind in config
        if $(elem.selector).length > 0
          res.push new GTMViewportEvent(
            elem.selector,
            elem.eventName,
            elem.callback
          )
      return res

    runEventCheck = (elems) ->
      for gtmElem, ind in elems
        gtmElem.send()

    init = (config) ->
      elems = prepareStructures(config)
      console.log(elems)
      window.addEventListener 'scroll', (e) ->
        runEventCheck(elems)

      runEventCheck(elems)

    return {
      init: init
    }

  )()

  return
