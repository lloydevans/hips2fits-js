/**
 * Coordinate frame system to be used for the projection.
 * Possible values are icrs or galactic.
 *
 */
export enum HipsCoordsys {
  /**
   * Earth plane
   */
  Icrs = "icrs",

  /**
   * Galaxy plane
   */
  Galactic = "galactic",
}
