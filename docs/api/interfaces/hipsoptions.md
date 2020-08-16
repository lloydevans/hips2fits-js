[hips2fits-js](https://lloydevans.github.io/hips2fits-js/api/README.md) › [Globals](https://lloydevans.github.io/hips2fits-js/api/globals.md) › [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md)

# Interface: HipsOptions

Options object used to configure a request to the hips2fits service.

## Hierarchy

* **HipsOptions**

## Index

### Properties

* [cmap](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-cmap)
* [coordsys](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-coordsys)
* [dec](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-dec)
* [format](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-format)
* [fov](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-fov)
* [height](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-height)
* [hips](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#hips)
* [inverseLongitude](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-inverselongitude)
* [maxCut](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-maxcut)
* [minCut](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-mincut)
* [object](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-object)
* [projection](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-projection)
* [ra](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-ra)
* [rotationAngle](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-rotationangle)
* [stretch](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-stretch)
* [wcs](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-wcs)
* [width](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md#optional-width)

## Properties

### `Optional` cmap

• **cmap**? : *string*

Defined in hips-options.ts:122

Name of the color map.
Only applicable to jpg/png output formats Any colormap supported by
Matplotlib can be specificed.
Default value is Greys_r (grayscale).

___

### `Optional` coordsys

• **coordsys**? : *[HipsCoordsys](https://lloydevans.github.io/hips2fits-js/api/enums/hipscoordsys.md)*

Defined in hips-options.ts:63

Coordinate frame system to be used for the projection.
Possible values are icrs or galactic.
Default value is icrs.

___

### `Optional` dec

• **dec**? : *number*

Defined in hips-options.ts:56

Declination in decimal degrees of the center of the output image.
Compulsory if neither wcs or object are provided.

___

### `Optional` format

• **format**? : *[HipsImageFormat](https://lloydevans.github.io/hips2fits-js/api/enums/hipsimageformat.md)*

Defined in hips-options.ts:90

Format of the output image.
Allowed values are fits (default), jpg and png In case of jpg or png
format, scaling of the pixels value can be controlled with parameters
min_cut, max_cut and stretch.

___

### `Optional` fov

• **fov**? : *number*

Defined in hips-options.ts:44

Size (FoV) of the cutout on the sky, in decimal degrees.

___

### `Optional` height

• **height**? : *number*

Defined in hips-options.ts:33

Height in pixels of the output image

___

###  hips

• **hips**: *[HipsService](https://lloydevans.github.io/hips2fits-js/api/enums/hipsservice.md)*

Defined in hips-options.ts:17

ID or keyword identifying the HiPS to use. Compulsory If multiple HiPS
surveys match, one is chosen randomly

___

### `Optional` inverseLongitude

• **inverseLongitude**? : *boolean*

Defined in hips-options.ts:82

Set to true if you want longitudes to be increasing from left to right.
Mostly useful for planetary HiPS maps.

___

### `Optional` maxCut

• **maxCut**? : *string*

Defined in hips-options.ts:106

Maximal value considered for contrast adjustment normalization
Only applicable to jpg/png output formats Can be given as a percentile
value, for example max_cut=97%.
Default value is 99.5%.

___

### `Optional` minCut

• **minCut**? : *string*

Defined in hips-options.ts:98

Minimal value considered for contrast adjustment normalization.
Only applicable to jpg/png output formats Can be given as a percentile
value, for example min_cut=1.5%
Default value is 0.5%.

___

### `Optional` object

• **object**? : *number*

Defined in hips-options.ts:76

Name of the object the output image will be centered on.
The name will be resolved to coordinated by the Sesame service.
If wcs is missing, either object or (ra, dec) must be provided

___

### `Optional` projection

• **projection**? : *[HipsProjection](https://lloydevans.github.io/hips2fits-js/api/enums/hipsprojection.md)*

Defined in hips-options.ts:39

Name of the requested projection, eg: SIN, TAN, MOL, AIT, CAR, CEA, STG
Compulsory if wcs is not provided.

___

### `Optional` ra

• **ra**? : *number*

Defined in hips-options.ts:50

Right ascension in decimal degrees of the center of the output image.
Compulsory if neither wcs or object are provided.

___

### `Optional` rotationAngle

• **rotationAngle**? : *number*

Defined in hips-options.ts:69

Angle value (in decimal degrees) to be applied to the projection.
Default value is 0.

___

### `Optional` stretch

• **stretch**? : *[HipsStretch](https://lloydevans.github.io/hips2fits-js/api/enums/hipsstretch.md)*

Defined in hips-options.ts:114

Stretch function used for contrast adjustmnt.
Only applicable to jpg/png output formats Possible values are: power,
linear, sqrt, log, asinh.
Default value is linear

___

### `Optional` wcs

• **wcs**? : *string | [WcsDict](https://lloydevans.github.io/hips2fits-js/api/interfaces/wcsdict.md)*

Defined in hips-options.ts:23

The WCS definition of the cutout, defined as a key-value dictionary
JSON string

___

### `Optional` width

• **width**? : *number*

Defined in hips-options.ts:28

Width in pixels of the output image
