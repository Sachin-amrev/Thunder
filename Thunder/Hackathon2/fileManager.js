import fs from 'fs';

export function createFile(filename, data) {
  fs.writeFileSync(filename, data);
  console.log(`🟢 Created ${filename}`);
}

export function readFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

export function updateFile(filename, newData) {
  if (!fs.existsSync(filename)) throw new Error('File not found');
  fs.appendFileSync(filename, '\n' + newData);
  console.log(`🟡 Updated ${filename}`);
}

export function deleteFile(filename) {
  fs.unlinkSync(filename);
  console.log(`🔴 Deleted ${filename}`);
}