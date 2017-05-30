[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/agilie/Rails-Application-Template)

# jQuery GTM In-Viewport Manager Plugin
A manager of in-viewport events for GTM (Google Tag Manager)

**Current version:** *1.0.0*

Google Tag Manager is a tool for simple and convenient tag/events management solutions. They have powerful interface to setup various events which is fired on different needs of a WEB/SEO masters.

But in some cases we should spent a lot of time to add some additional handlers of ’specific’ events - such as in-viewport event - they should fire when some element is shown to website user.

This jQuery plugin is build for making developer life easy when he needs to setup GTM events on some elements when they appears in the viewport of the browser.

## Installation/integration and usage:

```javascript
<script src="path/to/jquery.gtm-in-viewport.min.js"></script>
<script type="application/javascript">
    $(document).ready(function () {
        GTMViewport.init([
            {
                selector: '#some_element_id_1',
                eventName: 'some_element_id_1_was_viewed_event',
                callback: function(eventName) {
                    console.log(eventName);
                }
            },
            {
                selector: '#some_element_id_2',
                eventName: 'some_element_id_2_was_viewed_event'
            },
            {
                selector: '#some_element_id_3',
                eventName: 'some_element_id_4_was_viewed_event'
            }
        ]);
    });
</script>
```

To start to observe for the element on the page you just need to pass its CSS selector in ’selector’ key and event name ('eventName' key) which will be sent to GTM. Optionally you can pass callback function ('callback' key) which will be called after the event will be sent. Callback function has event name as a parameter.

## Demo

Also you can find an example <a href="https://agilie.github.io/gtm-in-viewport-manager/dist/example.html" target="_blank">here</a> to play with it.

## Troubleshooting
Problems? Check the [Issues](https://github.com/agilie/gtm-in-viewport-manager/issues) block
to find the solution or create an new issue that we will fix asap. Feel free to contribute.

## Author
This Rails application template is open-sourced by [Agilie Team](https://www.agilie.com) <info@agilie.com>

## Contributor
[Eugene Zaretskiy](https://github.com/ujinius) <eugene@agilie.com>

## License
The [MIT](LICENSE.md) License (MIT) Copyright © 2017 [Agilie Team](https://www.agilie.com)
