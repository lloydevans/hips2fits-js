import type { HipsOptions } from "./hips-options";
import { parseWcs } from "./parse-wcs";

/**
 * Service URL.
 * @internal
 */
const DEFAULT_ENDPOINT =
  "http://alasky.u-strasbg.fr/hips-image-services/hips2fits";

/**
 * Get an image URL from the hips2fits service.
 *
 * @example
 *
 * ```js
 * import {
 *   getImageUrl,
 *   HipsImageFormat,
 *   HipsProjection,
 *   HipsStretch,
 *   HipsCoordsys,
 * } from "hips2fits-js";
 *
 * let url;
 * let width = 1024;
 * let height = 512;
 *
 * url = getImageUrl({
 *   hips: "CDS/P/DSS2/color",
 *   width,
 *   height,
 *   ra: 0,
 *   dec: 0,
 *   fov: 360,
 *   coordsys: HipsCoordsys.Icrs,
 *   projection: HipsProjection.Car,
 *   stretch: HipsStretch.Asinh,
 *   format: HipsImageFormat.Png,
 * });
 *
 * let img = new Image();
 * img.width = width;
 * img.height = height;
 * img.src = url;
 *
 * window.addEventListener("load", function () {
 *   window.document.body.appendChild(img);
 * });
 * ```
 *
 * @param options Options object configuring the Hips image generated.
 * @param endPoint Base URL endpoint.
 */
export function getImageUrl(
  options: HipsOptions,
  endPoint = DEFAULT_ENDPOINT
): string {
  let urlString = endPoint + "?";

  let entries = Object.entries(options);

  entries.forEach((el, i) => {
    if (typeof el[0] === "undefined") {
      throw new Error("getImageUrl: Undefined option key!");
    }

    if (typeof el[1] === "undefined") {
      throw new Error("getImageUrl: Undefined option value!");
    }

    if (typeof el[1] !== "undefined") {
      switch (el[0]) {
        case "wcs":
          let wcs;

          if (typeof el[1] === "object") {
            wcs = JSON.stringify(el[1]);
          }

          if (typeof el[1] === "string") {
            wcs = JSON.stringify(parseWcs(el[1]));
          }

          urlString += el[0] + "=" + encodeURIComponent(wcs);
          break;

        default:
          urlString += `${el[0]}=${encodeURIComponent(el[1])}`;
          break;
      }

      if (i < entries.length - 1) {
        urlString += "&";
      }
    }
  });

  return urlString;
}
