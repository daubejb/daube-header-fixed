# daube-header-fixed
A simple header --- material-influenced, vanilla js custom element

## Installation
```bash
npm install --save daube-header-fixed
```

This custom element requires the [webcomponents-lite polyfill](https://github.com/webcomponents/webcomponentsjs) in order to work on all browsers

Please see [webcomponents.org](https://www.webcomponents.org/polyfills) for more information about Polyfills

Import the custom element by:
```JavaScript
<script src="./node_modules/daube-header-fixed/daube-header-fixed-compiled.js"></script>
```

## Usage
Include the <daube-header-fixed> custom element in the html page
```html
<daube-header-fixed></daube-header-fixed>
```
**Additionally** - remember to reset the css of the body in the page that contains this 'daube-header-fixed' tag:
```html
body {
  margin: 0;
  padding: 0;
}
```

## Options

The following options are available manually or programatically within the opening daube-header-fixed tag:

  1. headercolor - ```headercolor="rgba(0,0,0,1)"```
    - hexcodes OR rgb OR rgba
  2. headertitle - ```headertitle="The Site Name"```



