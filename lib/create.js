const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

const [ source, destination, theme ] = process.argv.slice(2);

(async () => {
  const server = spawn('live-server', ['--no-browser', '--port=9000'], { detached: true });
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(`http://localhost:9000/template/?source=${source}&theme=${theme}`,{ waitUntil: 'networkidle2' });
  await page.waitFor(2000);
  await page.pdf({ path: destination, format: 'A4', scale: .85 });
  await browser.close();
  server.kill();
})();
