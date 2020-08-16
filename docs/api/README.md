[hips2fits-js](https://lloydevans.github.io/hips2fits-js/api/README.md) › [Globals](https://lloydevans.github.io/hips2fits-js/api/globals.md)

# hips2fits-js

# hips2fits-js

Simple utility for requesting data from the EDS hips2fits service.

This package provides both ES and CJS module formats.

It is ES5 compatible, however it does not provide any polyfills.

<span style="display:block;text-align:center">![alt text](https://lloydevans.github.io/hips2fits-js/resources/cutout-CDS_P_Mellinger_color.png)</span>

## Installation

`npm i -S hips2fits-js`

## NodeJS Usage

```js
const { fs } = require("fs").promises;

const {
  getImage,
  HipsImageFormat,
  HipsProjection,
  HipsStretch,
  HipsCoordsys,
} = require("hips2fits-js");

(async function () {
  let data;

  try {
    data = await getImage({
      hips: "CDS/P/DSS2/color",
      width: 2048 / 4,
      height: 1024 / 4,
      ra: 0,
      dec: 0,
      fov: 360,
      coordsys: HipsCoordsys.Icrs,
      projection: HipsProjection.Car,
      stretch: HipsStretch.Asinh,
      format: HipsImageFormat.Png,
    });
  } catch (error) {
    console.log(error);
    return;
  }

  await fs.writeFile("image.png", data);
})();
```

## Browser Usage

```js
import {
  getImageUrl,
  HipsImageFormat,
  HipsProjection,
  HipsStretch,
  HipsCoordsys,
} from "hips2fits-js";

let url;
let width = 1024;
let height = 512;

url = getImageUrl({
  hips: "CDS/P/DSS2/color",
  width,
  height,
  ra: 0,
  dec: 0,
  fov: 360,
  coordsys: HipsCoordsys.Icrs,
  projection: HipsProjection.Car,
  stretch: HipsStretch.Asinh,
  format: HipsImageFormat.Png,
});

let img = new Image();
img.width = width;
img.height = height;
img.src = url;

window.addEventListener("load", function () {
  window.document.body.appendChild(img);
});
```
