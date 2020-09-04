const { readFile, writeFile } = require("fs").promises;

async function generateHipsServiceTypes() {
  let hipsData = JSON.parse(
    (await readFile("build/hips-services.json")).toString()
  );

  let fileData = "export enum HipsService {\n";

  for (let i = 0; i < hipsData.length; i++) {
    fileData += "  /**\n";
    fileData += "   * " + hipsData[i].ID + "\n";
    fileData += "   * " + "\n";
    fileData += "   * " + hipsData[i].obs_collection + "\n";
    fileData += "   * " + hipsData[i].obs_description + "\n";
    fileData += "  */\n";
    fileData += "  ";
    fileData += `${hipsData[i].ID.replace(/\/|\-|\.|\+/g, "_")}`;
    fileData += " = " + `"${hipsData[i].ID}",`;
    fileData += "\n";
  }

  fileData += `}`;

  await writeFile("src/hips-service.ts", fileData);
}

generateHipsServiceTypes();
