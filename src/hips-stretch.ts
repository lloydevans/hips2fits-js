/**
 * Stretch function used for contrast adjustmnt.
 *
 * Only applicable to jpg/png output formats.
 *
 */
export enum HipsStretch {
  /**
   *
   */
  Power = "power",

  /**
   *
   */
  Linear = "linear",

  /**
   *
   */
  Sqrt = "sqrt",

  /**
   *
   */
  Log = "log",

  /**
   *
   */
  Asinh = "asinh",
}
