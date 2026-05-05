import fs from 'fs';

const svgContent = fs.readFileSync('cn.svg', 'utf-8');

const provinceRegex = /<path d="([^"]+)" id="(CN[A-Z]{2})" name="([^"]+)"/g;
const provinces: Record<string, { d: string; name: string }> = {};

let match;
while ((match = provinceRegex.exec(svgContent)) !== null) {
  const [, d, id, name] = match;
  provinces[id] = { d, name };
}

if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}

fs.writeFileSync('data/provinces.json', JSON.stringify(provinces, null, 2));
console.log('Extracted', Object.keys(provinces).length, 'provinces.');
