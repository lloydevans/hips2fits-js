import { HipsCoordsys } from "./hips-coordsys";
import { HipsImageFormat } from "./hips-image-format";
import { HipsProjection } from "./hips-projection";
import { HipsService } from "./hips-service";
import { HipsStretch } from "./hips-stretch";
import { WcsDict } from "./wcs-dict";

/**
 * Options object used to configure a request to the hips2fits service.
 *
 */
export interface HipsOptions {
  /**
   * ID or keyword identifying the HiPS to use. Compulsory If multiple HiPS
   * surveys match, one is chosen randomly
   */
  hips: HipsService;

  /**
   * The WCS definition of the cutout, defined as a key-value dictionary
   * JSON string
   */
  wcs?: string | WcsDict;

  /**
   * Width in pixels of the output image
   */
  width?: number;

  /**
   * Height in pixels of the output image
   */
  height?: number;

  /**
   * Name of the requested projection, eg: SIN, TAN, MOL, AIT, CAR, CEA, STG
   * Compulsory if wcs is not provided.
   */
  projection?: HipsProjection;

  /**
   * Size (FoV) of the cutout on the sky, in decimal degrees.
   */
  fov?: number;

  /**
   * Right ascension in decimal degrees of the center of the output image.
   * Compulsory if neither wcs or object are provided.
   */
  ra?: number;

  /**
   * Declination in decimal degrees of the center of the output image.
   * Compulsory if neither wcs or object are provided.
   */
  dec?: number;

  /**
   * Coordinate frame system to be used for the projection.
   * Possible values are icrs or galactic.
   * Default value is icrs.
   */
  coordsys?: HipsCoordsys;

  /**
   * Angle value (in decimal degrees) to be applied to the projection.
   * Default value is 0.
   */
  rotationAngle?: number;

  /**
   * Name of the object the output image will be centered on.
   * The name will be resolved to coordinated by the Sesame service.
   * If wcs is missing, either object or (ra, dec) must be provided
   */
  object?: number;

  /**
   * Set to true if you want longitudes to be increasing from left to right.
   * Mostly useful for planetary HiPS maps.
   */
  inverseLongitude?: boolean;

  /**
   * Format of the output image.
   * Allowed values are fits (default), jpg and png In case of jpg or png
   * format, scaling of the pixels value can be controlled with parameters
   * min_cut, max_cut and stretch.
   */
  format?: HipsImageFormat;

  /**
   * Minimal value considered for contrast adjustment normalization.
   * Only applicable to jpg/png output formats Can be given as a percentile
   * value, for example min_cut=1.5%
   * Default value is 0.5%.
   */
  minCut?: string;

  /**
   * Maximal value considered for contrast adjustment normalization
   * Only applicable to jpg/png output formats Can be given as a percentile
   * value, for example max_cut=97%.
   * Default value is 99.5%.
   */
  maxCut?: string;

  /**
   * Stretch function used for contrast adjustmnt.
   * Only applicable to jpg/png output formats Possible values are: power,
   * linear, sqrt, log, asinh.
   * Default value is linear
   */
  stretch?: HipsStretch;

  /**
   * Name of the color map.
   * Only applicable to jpg/png output formats Any colormap supported by
   * Matplotlib can be specificed.
   * Default value is Greys_r (grayscale).
   */
  cmap?: string;
}
