[hips2fits-js](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/README.md)

# hips2fits-js

## Index

### Enumerations

* [HipsCoordsys](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/enums/hipscoordsys.md)
* [HipsImageFormat](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/enums/hipsimageformat.md)
* [HipsProjection](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/enums/hipsprojection.md)
* [HipsService](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/enums/hipsservice.md)
* [HipsStretch](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/enums/hipsstretch.md)

### Interfaces

* [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/hipsoptions.md)
* [WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/wcsdict.md)

### Functions

* [getImage](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/README.md#getimage)
* [getImageUrl](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/README.md#getimageurl)
* [parseWcs](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/README.md#parsewcs)

## Functions

###  getImage

▸ **getImage**(`options`: [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/hipsoptions.md), `endPoint?`: string): *Promise‹Uint8Array›*

Defined in get-image.ts:57

Get an image from the hips2fits service.

**`example`** 

```js
const { writeFile } = require("fs").promises;

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

  await writeFile("image.png", data);
})();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/hipsoptions.md) | Options object configuring the Hips image generated. |
`endPoint?` | string | Base URL endpoint.  |

**Returns:** *Promise‹Uint8Array›*

___

###  getImageUrl

▸ **getImageUrl**(`options`: [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/hipsoptions.md), `endPoint`: string): *string*

Defined in get-image-url.ts:55

Get an image URL from the hips2fits service.

**`example`** 

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

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [HipsOptions](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/hipsoptions.md) | - | Options object configuring the Hips image generated. |
`endPoint` | string | DEFAULT_ENDPOINT | Base URL endpoint.  |

**Returns:** *string*

___

###  parseWcs

▸ **parseWcs**(`wcsString`: string): *[WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/wcsdict.md)*

Defined in parse-wcs.ts:30

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

**Returns:** *[WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/api/md/interfaces/wcsdict.md)*
