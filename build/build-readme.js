const { readFile, writeFile } = require("fs").promises;

(async function () {
  let docs, intro, readme;

  try {
    docs = (await readFile("docs/md/README.md")).toString();
    intro = (await readFile("docs/HEADER.md")).toString();
  } catch (error) {
    console.log(error);
  }

  let insertIdx = docs.indexOf("## Index");
  let head = docs.slice(0, insertIdx);
  let page = docs.slice(insertIdx);
  head += "\n";
  head += intro;
  head += "\n";
  head += page;

  await writeFile("README.md", head);
})();
