import fs from "fs";

const project = "6A5lyRJAZs";
const dist = "public/vev/";
const isDev = true;

async function downloadVevFiles() {
  console.log("Start downloading vev files: ", project);
  const url = `http://localhost:3000/api/project/${project}?dev=${isDev}`;
  console.log("url", url);

  const manifest = await fetch(url).then((res) => res.json());
  const promises = [];

  for (const file of manifest.files) {
    console.log("downloading: ", file.path);
    const download = new Promise(async (resolve) => {
      const res = await fetch(file.url);
      const blob = await res.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const dir = dist + file.path.substring(0, file.path.lastIndexOf("/"));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dist + file.path, buffer);
      resolve();
    });
    promises.push(download);
  }

  await Promise.all(promises);
}

downloadVevFiles();
