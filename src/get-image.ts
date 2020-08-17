import * as http from "http";
import { Transform } from "stream";
import { getImageUrl } from "./get-image-url";
import type { HipsOptions } from "./hips-options";
import { HipsService } from "./hips-service";

/**
 * Default data.
 * @internal
 */
const HIPS_SERVICE_DEFAULT: HipsService = HipsService.CDS_P_DSS2_color;

/**
 * Get an image from the hips2fits service.
 *
 * @example
 *
 * ```js
 * const { writeFile } = require("fs").promises;
 *
 * const {
 *   getImage,
 *   HipsImageFormat,
 *   HipsProjection,
 *   HipsStretch,
 *   HipsCoordsys,
 * } = require("hips2fits-js");
 *
 * (async function () {
 *   let data;
 *
 *   try {
 *     data = await getImage({
 *       hips: "CDS/P/DSS2/color",
 *       width: 2048 / 4,
 *       height: 1024 / 4,
 *       ra: 0,
 *       dec: 0,
 *       fov: 360,
 *       coordsys: HipsCoordsys.Icrs,
 *       projection: HipsProjection.Car,
 *       stretch: HipsStretch.Asinh,
 *       format: HipsImageFormat.Png,
 *     });
 *   } catch (error) {
 *     console.log(error);
 *     return;
 *   }
 *
 *   await writeFile("image.png", data);
 * })();
 * ```
 *
 * @param options Options object configuring the Hips image generated.
 * @param endPoint Base URL endpoint.
 */
export async function getImage(
  options: HipsOptions,
  endPoint?: string
): Promise<Uint8Array> {
  if (!options.hips) {
    console.log(
      "No hips service specified. Using default",
      HIPS_SERVICE_DEFAULT
    );
    options.hips = HIPS_SERVICE_DEFAULT;
  }

  let url = getImageUrl(options, endPoint);

  return new Promise((resolve, reject) => {
    http
      .get(url, (response): void => {
        let transform = new Transform();

        response.on("data", function (chunk) {
          transform.push(chunk);
        });

        response.on("end", function () {
          let jsonData;

          let data = transform.read();

          if (data === null) {
            reject("null");
            return;
          }

          try {
            jsonData = JSON.parse(data);
          } catch (error) {
            //
          }

          if (jsonData) {
            let errorMessage = "Request error:\n";
            errorMessage += JSON.stringify(jsonData, null, 2);
            reject(errorMessage);
          } else {
            resolve(data);
          }
        });
      })

      .on("error", (err) => {
        reject(err.message);
      });
  });
}
