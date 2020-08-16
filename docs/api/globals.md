[hips2fits-js](https://lloydevans.github.io/hips2fits-js/api/README.md) › [Globals](https://lloydevans.github.io/hips2fits-js/api/globals.md)

# hips2fits-js

## Index

### Enumerations

* [HipsCoordsys](https://lloydevans.github.io/hips2fits-js/api/enums/hipscoordsys.md)
* [HipsImageFormat](https://lloydevans.github.io/hips2fits-js/api/enums/hipsimageformat.md)
* [HipsProjection](https://lloydevans.github.io/hips2fits-js/api/enums/hipsprojection.md)
* [HipsService](https://lloydevans.github.io/hips2fits-js/api/enums/hipsservice.md)
* [HipsStretch](https://lloydevans.github.io/hips2fits-js/api/enums/hipsstretch.md)

### Interfaces

* [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md)
* [WcsDict](https://lloydevans.github.io/hips2fits-js/api/interfaces/wcsdict.md)

### Variables

* [DEFAULT_ENDPOINT](https://lloydevans.github.io/hips2fits-js/api/globals.md#const-default_endpoint)
* [HIPS_SERVICE_DEFAULT](https://lloydevans.github.io/hips2fits-js/api/globals.md#const-hips_service_default)

### Functions

* [getImage](https://lloydevans.github.io/hips2fits-js/api/globals.md#getimage)
* [getImageUrl](https://lloydevans.github.io/hips2fits-js/api/globals.md#getimageurl)
* [parseWcs](https://lloydevans.github.io/hips2fits-js/api/globals.md#parsewcs)

## Variables

### `Const` DEFAULT_ENDPOINT

• **DEFAULT_ENDPOINT**: *"http://alasky.u-strasbg.fr/hips-image-services/hips2fits"* = "http://alasky.u-strasbg.fr/hips-image-services/hips2fits"

Defined in get-image-url.ts:7

Service URL.

___

### `Const` HIPS_SERVICE_DEFAULT

• **HIPS_SERVICE_DEFAULT**: *[HipsService](https://lloydevans.github.io/hips2fits-js/api/enums/hipsservice.md)* = HipsService.CDS_P_DSS2_color

Defined in get-image.ts:10

Default data.

## Functions

###  getImage

▸ **getImage**(`options`: [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md), `endPoint?`: string): *Promise‹Uint8Array›*

Defined in get-image.ts:18

Get an image from the hips2fits service.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md) | Options object configuring the Hips image generated. |
`endPoint?` | string | Base URL endpoint.  |

**Returns:** *Promise‹Uint8Array›*

___

###  getImageUrl

▸ **getImageUrl**(`options`: [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md), `endPoint`: string): *string*

Defined in get-image-url.ts:15

Get an image URL from the hips2fits service.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [HipsOptions](https://lloydevans.github.io/hips2fits-js/api/interfaces/hipsoptions.md) | - |   |
`endPoint` | string | DEFAULT_ENDPOINT | - |

**Returns:** *string*

___

###  parseWcs

▸ **parseWcs**(`wcsString`: string): *[WcsDict](https://lloydevans.github.io/hips2fits-js/api/interfaces/wcsdict.md)*

Defined in parse-wcs.ts:8

Parse a WCS configuration string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wcsString` | string |   |

**Returns:** *[WcsDict](https://lloydevans.github.io/hips2fits-js/api/interfaces/wcsdict.md)*
