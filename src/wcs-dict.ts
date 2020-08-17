/**
 * WCS configuration partially represented as a type.
 */
export interface WcsDict {
  /**
   * Image width.
   */
  NAXIS1: number;

  /**
   * Image height.
   */
  NAXIS2: number;

  /**
   * Number of coordinate axes.
   */
  WCSAXES: number;

  /**
   * Pixel coordinate of reference point.
   */
  CRPIX1: number;

  /**
   * Pixel coordinate of reference point.
   */
  CRPIX2: number;

  /**
   * [deg] Coordinate increment at reference.
   */
  CDELT1: number;

  /**
   * [deg] Coordinate increment at reference.
   */
  CDELT2: number;

  /**
   * Units of coordinate increment and value.
   */
  CUNIT1: "deg" | "rad";

  /**
   * Units of coordinate increment and value.
   */
  CUNIT2: "deg" | "rad";

  /**
   * galactic longitude, Mollweide's projection.
   */
  CTYPE1: string;

  /**
   * galactic latitude, Mollweide's projection.
   */
  CTYPE2: string;

  /**
   * [deg] Coordinate value at reference point.
   */
  CRVAL1: number;

  /**
   * [deg] Coordinate value at reference point.
   */
  CRVAL2: number;
}
