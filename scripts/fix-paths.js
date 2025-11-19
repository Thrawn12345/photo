const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

console.log('Running fix-paths.js on:', indexPath);

try {
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // We will replace absolute paths starting with /_expo or /assets with relative paths ./
    // This makes the site work in any subdirectory (like /photo/)
    
    // Replace src="/_expo/..." with src="./_expo/..."
    content = content.replace(/src="\/_expo\//g, 'src="./_expo/');
    content = content.replace(/href="\/_expo\//g, 'href="./_expo/');
    
    // Replace src="/assets/..." with src="./assets/..."
    content = content.replace(/src="\/assets\//g, 'src="./assets/');
    content = content.replace(/href="\/assets\//g, 'href="./assets/');
    
    // Replace other common root paths
    content = content.replace(/href="\/favicon.ico"/g, 'href="./favicon.ico"');
    content = content.replace(/href="\/manifest.json"/g, 'href="./manifest.json"');
    
    // Fix CSS url() paths if they exist in the HTML (e.g. in style tags)
    content = content.replace(/url\(\/_expo\//g, 'url(./_expo/');
    content = content.replace(/url\(\/assets\//g, 'url(./assets/');

    fs.writeFileSync(indexPath, content);
    console.log('Successfully updated index.html to use relative paths.');
    
  } else {
    console.error('Error: dist/index.html not found. Build might have failed.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error in fix-paths.js:', error);
  process.exit(1);
}
