# html-canvas-grid
A grid library that can be used to troubleshoot canvas work in HTML5. The grid will cover the entire canvas in a designer / technical drawing style of a grid, with numbered major lines.

## How to use the library ##
In the JavaScript file you want to include it into add to the top of the file:

```
import drawGrid from "./lib/drawGrid.js";
```

To create the grid use:

```
// Syntax
drawGrid(context ctx, [int minor], [int major], [string stroke], [string fill]);

//example 1 - with default values:
drawGrid(ctx, 10, 10, "#00FF00", "#009900");

//example 2 - Quick and dirty:
drawGrid(ctx);

//example 3 - Only visible major lines:
drawGrid(ctx, 100, 100);

//example 4 - with a thin line every 10px, and a thick line every 100px:
drawGrid(ctx, 10, 100);

```

Where: 
* ctx is the canvas context
* OPTIONAL minor are the spacing of the minor (thinner) lines, defaults to 10
* OPTIONAL major are the spacing of the major (thicker) lines, defaults to 50
* OPTIONAL stroke is the color of the stroke (lines), defaults to Sharp green
* OPTIONAL fill, is sthe color of the text fill (color), defaults to a bit less sharp green.
