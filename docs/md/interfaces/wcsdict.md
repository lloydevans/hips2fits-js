[hips2fits-js](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/README.md) › [WcsDict](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md)

# Interface: WcsDict

WCS configuration partially represented as a type.

## Hierarchy

* **WcsDict**

## Index

### Properties

* [CDELT1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#cdelt1)
* [CDELT2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#cdelt2)
* [CRPIX1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#crpix1)
* [CRPIX2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#crpix2)
* [CRVAL1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#crval1)
* [CRVAL2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#crval2)
* [CTYPE1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#ctype1)
* [CTYPE2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#ctype2)
* [CUNIT1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#cunit1)
* [CUNIT2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#cunit2)
* [NAXIS1](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#naxis1)
* [NAXIS2](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#naxis2)
* [WCSAXES](https://github.com/lloydevans/hips2fits-js/blob/master/docs/md/interfaces/wcsdict.md#wcsaxes)

## Properties

###  CDELT1

• **CDELT1**: *number*

*Defined in [wcs-dict.ts:33](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L33)*

[deg] Coordinate increment at reference.

___

###  CDELT2

• **CDELT2**: *number*

*Defined in [wcs-dict.ts:38](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L38)*

[deg] Coordinate increment at reference.

___

###  CRPIX1

• **CRPIX1**: *number*

*Defined in [wcs-dict.ts:23](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L23)*

Pixel coordinate of reference point.

___

###  CRPIX2

• **CRPIX2**: *number*

*Defined in [wcs-dict.ts:28](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L28)*

Pixel coordinate of reference point.

___

###  CRVAL1

• **CRVAL1**: *number*

*Defined in [wcs-dict.ts:63](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L63)*

[deg] Coordinate value at reference point.

___

###  CRVAL2

• **CRVAL2**: *number*

*Defined in [wcs-dict.ts:68](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L68)*

[deg] Coordinate value at reference point.

___

###  CTYPE1

• **CTYPE1**: *string*

*Defined in [wcs-dict.ts:53](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L53)*

galactic longitude, Mollweide's projection.

___

###  CTYPE2

• **CTYPE2**: *string*

*Defined in [wcs-dict.ts:58](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L58)*

galactic latitude, Mollweide's projection.

___

###  CUNIT1

• **CUNIT1**: *"deg" | "rad"*

*Defined in [wcs-dict.ts:43](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L43)*

Units of coordinate increment and value.

___

###  CUNIT2

• **CUNIT2**: *"deg" | "rad"*

*Defined in [wcs-dict.ts:48](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L48)*

Units of coordinate increment and value.

___

###  NAXIS1

• **NAXIS1**: *number*

*Defined in [wcs-dict.ts:8](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L8)*

Image width.

___

###  NAXIS2

• **NAXIS2**: *number*

*Defined in [wcs-dict.ts:13](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L13)*

Image height.

___

###  WCSAXES

• **WCSAXES**: *number*

*Defined in [wcs-dict.ts:18](https://github.com/lloydevans/node-hips2fits/blob/6627b8c/src/wcs-dict.ts#L18)*

Number of coordinate axes.
