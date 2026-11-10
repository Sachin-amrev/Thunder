import { getSystemInfo } from './system.js';
import { createFile, readFile, updateFile, deleteFile } from './fileManager.js';
import fs from 'fs';

async function main() {
  try {
    const info = getSystemInfo();
    fs.writeFileSync('output.json', JSON.stringify(info, null, 2));
    console.log('✅ System info saved to output.json');

    // CRUD demo
    createFile('demo.txt', 'Hello Node');
    console.log('READ:', readFile('demo.txt'));
    updateFile('demo.txt', 'Updated content');
    deleteFile('demo.txt');

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();