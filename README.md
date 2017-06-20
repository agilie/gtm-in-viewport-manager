[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/agilie/Rails-Application-Template)

# jQuery GTM In-Viewport Manager Plugin

A manager of in-viewport events for GTM (Google Tag Manager).

We are happy to share with you our new jQuery GTM In-Viewport Manager Plugin aimed to ease a way of working with Google Tag Manager (GTM).

GTM is a free tool for simple and convenient tag/events management solutions which makes it possible to add and update website tags with just a few clicks, without needing to edit the website code. It has a powerful interface allowing to set up various events that should trigger in concordance with WEB/SEO masters' needs. But in some cases we have to spend a lot of time to add extra handlers for ’specific’ events, - such as in-viewport event - which should fire when some element is shown to a website user.

This jQuery plugin is build for making developer's work process much easier. It’s really helpful in cases if you needs to set up GTM events for the elements initially unseen when they appears in the browser viewport.

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

To start observing the element on the page, you just need to pass its CSS selector to ’selector’ key and event name ('eventName' key) which will be sent to GTM. Optionally, you can pass a callback function ('callback' key) that takes the event name as a parameter and will be called after the event has been sent..

## Dependencies

- jQuery - https://github.com/jquery/jquery-dist.git
- isOnScreen jQuery plugin - https://github.com/moagrius/isOnScreen

## Building

1. Install necessary packages.
    ```bash
    npm install
    ```

2. Install Bower globally.
    ```bash
    npm install -g bower
    ```

3. Install javascript libs dependencies - jQuery, isOnScreen jQuery plugin.
    ```bash
    bower install
    ```

4. Build (to 'dist' folder).
    ```bash
    gulp
    ```

## Demo

You can also see an example [here](https://agilie.github.io/gtm-in-viewport-manager/dist/example.html) in order to try it out.

![demo image](https://agilie.github.io/gtm-in-viewport-manager/images/gtm-in-viewport-manager-example.png)

## Troubleshooting
Problems? Check the [Issues](https://github.com/agilie/gtm-in-viewport-manager/issues) block
to find the solution or create an new issue that we will fix asap. Feel free to contribute.

## Author
This jQuery plugin is open-sourced by [Agilie Team](https://www.agilie.com) <info@agilie.com>

## Contributors
- [Eugene Zaretskiy](https://github.com/ujinius)

## Contact us
If you have any questions, suggestions or just need a help with web or mobile development, please email us at <web@agilie.com>. You can ask us anything from basic to complex questions.

We will continue publishing new open-source projects. Stay with us, more updates will follow!

## License
The [MIT](LICENSE.md) License (MIT) Copyright © 2017 [Agilie Team](https://www.agilie.com)
