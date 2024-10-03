import fs from "fs";

async function downloadFiles() {
  const url = "http://localhost:3000/api/project/6A5lyRJAZs?dev=true";
  const manifest = await fetch(url).then((res) => res.json());
  for (const file of manifest.files) {
    const res = await fetch(file.url);
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const dist = "public/vev/";
    const dir = dist + file.path.substring(0, file.path.lastIndexOf("/"));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dist + file.path, buffer);
  }
}

downloadFiles();
