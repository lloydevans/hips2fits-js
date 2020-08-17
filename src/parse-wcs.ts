import type { WcsDict } from "./wcs-dict";

/**
 * Parse a WCS configuration string.
 *
 * @example
 *
 * ```js
 * let wcs = `
 * NAXIS1  =                 2000
 * NAXIS2  =                 1000
 * WCSAXES =                    2 / Number of coordinate axes
 * CRPIX1  =               1000.0 / Pixel coordinate of reference point
 * CRPIX2  =                500.0 / Pixel coordinate of reference point
 * CDELT1  =                -0.18 / [deg] Coordinate increment at reference point
 * CDELT2  =                 0.18 / [deg] Coordinate increment at reference point
 * CUNIT1  = 'deg'                / Units of coordinate increment and value
 * CUNIT2  = 'deg'                / Units of coordinate increment and value
 * CTYPE1  = 'GLON-MOL'           / galactic longitude, Mollweide's projection
 * CTYPE2  = 'GLAT-MOL'           / galactic latitude, Mollweide's projection
 * CRVAL1  =                  0.0 / [deg] Coordinate value at reference point
 * CRVAL2  =                  0.0 / [deg] Coordinate value at reference point
 * `;
 *
 * let wcsDict = parseWcs(wcs);
 * ```
 *
 * @param wcsString
 */
export function parseWcs(wcsString: string): WcsDict {
  if (typeof wcsString !== "string") {
    throw new Error("parseStringWcs: Invalid config!");
  }

  let wcsDict: Partial<{ [key in keyof WcsDict]: string | number }> = {};

  let lines = wcsString.replace(/\r\n/g, "\n").split("\n");

  for (let k = 0; k < lines.length; k++) {
    let line = lines[k];
    let idx = line.indexOf("=");
    if (idx < 0) {
      continue;
    }

    // Remove spaces
    let key = line.substring(0, idx).replace(/ /g, "") as keyof WcsDict;

    // Get value
    let value: string | number = line
      .substring(idx + 1)
      .replace(/ /g, "")
      .replace(/'/g, "");

    // Remove comment
    let idxCommentStart = value.indexOf("/");
    if (idxCommentStart > 0) {
      value = value.substring(0, idxCommentStart);
    }

    // Parse value
    if (typeof value === "number") {
      if (Number.isInteger(value)) {
        value = Math.round(value);
      }
    }

    wcsDict[key] = value;
  }

  return wcsDict as WcsDict;
}
