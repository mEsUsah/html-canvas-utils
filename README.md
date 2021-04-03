# html-canvas-grid
A grid library that can be used to troubleshoot canvas work in HTML. The grid will cover the entire canvas in a designer / technical drawing style of a grid, with numbered major lines.

## How to use the library ##
In the JavaScript file you want to include it into add to the top of the file:

```
import drawGrid from "./lib/drawGrid.js";
```

To create the grid use:

```
drawGrid(context ctx, [int minor], [int major], [string stroke], [string fill]);
```

Where: 
* ctx is the canvas context
* OPTIONAL minor are the spacing of the minor (thinner) lines, defaults to 10
* OPTIONAL major are the spacing of the major (thicker) lines, defaults to 50
* OPTIONAL stroke is the color of the stroke (lines), defaults to Sharp green
* OPTIONAL fill, is sthe color of the text fill (color), defaults to a bit less sharp green.
