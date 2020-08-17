/**
 * Name of the requested projection, eg: SIN, TAN, MOL, AIT, CAR, CEA, STG
 * Compulsory if wcs is not provided.
 */
export enum HipsProjection {
  /**
   * zenithal/azimuthal perspective.
   */
  Azp = "AZP",

  /**
   * Slant zenithal perspective.
   */
  Szp = "SZP",

  /**
   * Tangential.
   */
  Tan = "TAN",

  /**
   * Stereographic.
   */
  Stg = "STG",

  /**
   * Orthographic.
   */
  Sin = "SIN",

  /**
   * Zenithal/azimuthal equidistant.
   */
  Arc = "ARC",

  /**
   * Zenithal/azimuthal equal area.
   */
  Zea = "ZEA",

  /**
   * Airy's projection.
   */
  Air = "AIR",

  /**
   * Cylindrical perspective.
   */
  Cyp = "CYP",

  /**
   * Cylindrical equal area.
   */
  Cea = "CEA",

  /**
   * Plate carr&eacute.
   */
  Car = "CAR",

  /**
   * Mercator.
   */
  Mer = "MER",

  /**
   * Sanson-Flamsteed.
   */
  Sfl = "SFL",

  /**
   * Parabolic.
   */
  Par = "PAR",

  /**
   * Mollweide.
   */
  Mol = "MOL",

  /**
   * Hammer-Aitoff.
   */
  Ait = "AIT",

  /**
   * Tangential spherical cube.
   */
  Tsc = "TSC",

  /**
   * COBE spherical cube.
   */
  Csc = "CSC",

  /**
   * quadrilateralized spherical cube.
   */
  Qsc = "QSC",

  /**
   * HEALPix.
   */
  Hpx = "HPX",

  /**
   * HEALPix polar, "butterfly".
   */
  Xph = "XPH",
}
