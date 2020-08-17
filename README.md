[hips2fits-js](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/README.md)

# hips2fits-js


Simple utility for requesting data from the EDS hips2fits service.

This package provides both ES and CJS module formats.

It is ES5 compatible, however it does not provide any polyfills.

It's a simple setup - Use the `getImage` or `getImageUrl` functions, which take the [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md) object.

Documentions on the service can be found [here](http://alasky.u-strasbg.fr/hips-image-services/hips2fits).

<span style="display:block;text-align:center">![alt text](https://lloydevans.github.io/hips2fits-js/resources/cutout-CDS_P_Mellinger_color.png)</span>

## Installation

`npm i -S hips2fits-js`

## Index

### Enumerations

* [HipsCoordsys](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/enums/hipscoordsys.md)
* [HipsImageFormat](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/enums/hipsimageformat.md)
* [HipsProjection](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/enums/hipsprojection.md)
* [HipsService](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/enums/hipsservice.md)
* [HipsStretch](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/enums/hipsstretch.md)

### Interfaces

* [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md)
* [WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md)

### Functions

* [getImage](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/README.md#getimage)
* [getImageUrl](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/README.md#getimageurl)
* [parseWcs](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/README.md#parsewcs)

## Functions

###  getImage

▸ **getImage**(`options`: [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md), `endPoint?`: string): *Promise‹Uint8Array›*

*Defined in [get-image.ts:59](https://github.com/lloydevans/node-hips2fits/blob/7b0ca47/src/get-image.ts#L59)*

Get an image from the hips2fits service.

**`example`** 

```js
const { writeFile } = require("fs").promises;

const {
  getImage,
  HipsImageFormat,
  HipsProjection,
  HipsService,
  HipsStretch,
  HipsCoordsys,
} = require("hips2fits-js");

(async function () {
  let data;

  try {
    data = await getImage({
      hips: HipsService.CDS_P_DSS2_color,
      coordsys: HipsCoordsys.Icrs,
      projection: HipsProjection.Car,
      stretch: HipsStretch.Asinh,
      format: HipsImageFormat.Png,
      width: 2048 / 4,
      height: 1024 / 4,
      ra: 0,
      dec: 0,
      fov: 360,
    });

    await writeFile("image.png", data);
  } catch (error) {
    console.log(error);
    return;
  }

})();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md) | Options object configuring the Hips image generated. |
`endPoint?` | string | Base URL endpoint.  |

**Returns:** *Promise‹Uint8Array›*

___

###  getImageUrl

▸ **getImageUrl**(`options`: [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md), `endPoint`: string): *string*

*Defined in [get-image-url.ts:56](https://github.com/lloydevans/node-hips2fits/blob/7b0ca47/src/get-image-url.ts#L56)*

Get an image URL from the hips2fits service.

**`example`** 

```js
import {
  getImageUrl,
  HipsImageFormat,
  HipsProjection,
  HipsService,
  HipsStretch,
  HipsCoordsys,
} from "hips2fits-js";

let url;
let width = 1024;
let height = 512;

url = getImageUrl({
  hips: HipsService.CDS_P_DSS2_color,
  coordsys: HipsCoordsys.Icrs,
  projection: HipsProjection.Car,
  stretch: HipsStretch.Asinh,
  format: HipsImageFormat.Png,
  width,
  height,
  ra: 0,
  dec: 0,
  fov: 360,
});

let img = new Image();
img.width = width;
img.height = height;
img.src = url;

window.addEventListener("load", function () {
  window.document.body.appendChild(img);
});
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/hipsoptions.md) | - | Options object configuring the Hips image generated. |
`endPoint` | string | DEFAULT_ENDPOINT | Base URL endpoint.  |

**Returns:** *string*

___

###  parseWcs

▸ **parseWcs**(`wcsString`: string): *[WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md)*

*Defined in [parse-wcs.ts:30](https://github.com/lloydevans/node-hips2fits/blob/7b0ca47/src/parse-wcs.ts#L30)*

Parse a WCS configuration string.

**`example`** 

```js
let wcs = `
NAXIS1  =                 2000
NAXIS2  =                 1000
WCSAXES =                    2 / Number of coordinate axes
CRPIX1  =               1000.0 / Pixel coordinate of reference point
CRPIX2  =                500.0 / Pixel coordinate of reference point
CDELT1  =                -0.18 / [deg] Coordinate increment at reference point
CDELT2  =                 0.18 / [deg] Coordinate increment at reference point
CUNIT1  = 'deg'                / Units of coordinate increment and value
CUNIT2  = 'deg'                / Units of coordinate increment and value
CTYPE1  = 'GLON-MOL'           / galactic longitude, Mollweide's projection
CTYPE2  = 'GLAT-MOL'           / galactic latitude, Mollweide's projection
CRVAL1  =                  0.0 / [deg] Coordinate value at reference point
CRVAL2  =                  0.0 / [deg] Coordinate value at reference point
`;

let wcsDict = parseWcs(wcs);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wcsString` | string |   |

**Returns:** *[WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md)*
