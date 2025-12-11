const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../src/data/museums.json');

function parsePoint(pt) {
  if (!pt || typeof pt !== 'string') return { lat: null, lon: null };
  const m = pt.match(/POINT \((-?\d+\.?\d*)\s+(-?\d+\.?\d*)\)/);
  if (!m) return { lat: null, lon: null };
  return { lon: parseFloat(m[1]), lat: parseFloat(m[2]) };
}

function main() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  let json;
  try {
    json = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse original JSON:', err.message);
    process.exit(1);
  }

  if (!json.data || !Array.isArray(json.data)) {
    console.error('Unexpected schema: missing `data` array');
    process.exit(1);
  }

  const cleaned = json.data.map(row => {
    const the_geom = row[8];
    const { lat, lon } = parsePoint(the_geom);
    return {
      name: row[9] || null,
      tel: row[10] || null,
      url: row[11] || null,
      address1: row[12] || null,
      address2: row[13] || null,
      city: row[14] || null,
      zip: row[15] || null,
      the_geom: the_geom || null,
      lat,
      lon
    };
  });

  // Overwrite the original file with a clean array for easy importing
  fs.writeFileSync(dataPath, JSON.stringify(cleaned, null, 2), 'utf8');
  console.log('Wrote cleaned dataset to', dataPath, '(', cleaned.length, 'records)');
}

main();
