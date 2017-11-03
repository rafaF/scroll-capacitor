# scroll-capacitor v1.0.0
scroll-capacitor is a utility to measure the scroll progress and show it. As you move throughout the page doing scroll, the progress is updated. 

## Installation and customization
Donwload the zip and unzip it. Import the library into your HTML code before de **<body>** closing tag. The library needs a component where to show the scroll progress. To explain an example we will do it with a bar fixed to the top of the page called **scrollBar**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Title of the document</title>
	</head>

	<body>
		<div id="scrollBar"></div>
		<script src="scroll-capacitor.js"</script>
	</body>
</html>
```
To start, we have to point to our component, so we have to set the **COMPONENT_ID** with ours:

```javaScript
    const COMPONENT_ID = 'scrollBar';
```

As we are using a bar to show the progress, the param that will be updated according to the scroll progress will be the bar width. So we have to modify the constant value pointing to the param. Depending on the param choosen, we'll have to remove or not the 'CSS_PERCENTAGE' string.

```javaScript
    const CSS_PARAM = 'width:'
    
    [...]

    scrollBar.setAttribute(CSS_STYLE, CSS_PARAM + percentage + CSS_PERCENTAGE);
```

Finnaly, to customize it, open the file **styles.css** and for instance we can change the color and the height of the bar as we want. Also the animation could be customized.

So, to sum up, the key values that you have to change in the code to adapt it to your case are the following ones, according to your HTML component and which param of it you want to change depending on the scroll

- COMPONENT_ID
- CSS_PARAM

## How it works
A scroll event listener has been added to the **window** component, so each time that the user scrolls, the event is caught. 

We calculculate the scroll progress dividing the scroll position (scrollTop) by the total scrollable area, calculated substracting to the total height of the page the window viewport height (clientHeight).

To calculate the height, we take the higher value between scrollHeight, offsetHeight and clientHeight, both from body and document. By this way, we make sure that we have the value that contains all the components that add height to the document.

```javaScript
    var max = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
```
Here you have the meaning of each value using in the code:

- **scrollTop**: The html.scrollTop property gets the number of pixels that an element's content is scrolled vertically.

- **window.innerHeight**: Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.

- **offsetHeight**: Typically, an element's offsetHeight is a measurement in pixels of the element's CSS height, including border, padding and the element's horizontal scrollbar (if present, if rendered). It does not include the height of pseudo-elements such as :before or :after.

- **scrollHeight**: The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar. It includes the element's padding, but not its border or margin. It can also include the height of pseudo-elements such as :before or :after.

- **clientHeight**: The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes, otherwise it's  the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin.

It is fulfilled that: 

```javaScript
    element.scrollHeight - element.scrollTop === element.clientHeight
```

## Demo
In the following Codepen you can see a working demo

https://codepen.io/rafaF/pen/yPeQyj

## Others
The code has been enclosed into a function in order for it not to clobber the global namespace with tons of variables, which may lead to bugs later on when different code is added.

Also it has been added 'strict mode'. 

ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

## Changelog
First version released.

- v1.0 (2017 Nov 03th)
