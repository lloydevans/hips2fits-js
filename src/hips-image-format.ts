/**
 * Format of the output image.
 * Allowed values are fits (default), jpg and png In case of jpg or png
 * format, scaling of the pixels value can be controlled with parameters
 * min_cut, max_cut and stretch.
 */
export enum HipsImageFormat {
  /**
   *
   */
  Fits = "fits",

  /**
   *
   */
  Jpg = "jpg",

  /**
   *
   */
  Png = "png",
}
