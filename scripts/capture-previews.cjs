const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('HANEI STUDIO: Initializing Capture Engine...');
  
  // Added no-sandbox for compatibility with containerized sl-plus-runner
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // HANEI STANDARD: 3:2 Aspect Ratio
  await page.setViewport({ width: 1200, height: 800 });

  const demoDir = path.resolve('./public/demos');
  const outputDir = path.resolve('./public/images/demos');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  const demos = fs.readdirSync(demoDir);

  for (const demo of demos) {
    const demoPath = path.join(demoDir, demo, 'index.html');
    if (fs.existsSync(demoPath)) {
      console.log(`[PROCESS] Capturing: ${demo}...`);
      
      const fileUrl = 'file://' + demoPath;
      await page.goto(fileUrl, { waitUntil: 'networkidle0' });
      
      // HANEI STANDARD: Hide the Return button for clean photography
      await page.evaluate(() => {
        const buttons = document.querySelectorAll('a');
        buttons.forEach(btn => {
          if (btn.innerText.includes('Return to Hanei') || btn.innerText.includes('Haneiに戻る')) {
            btn.style.display = 'none';
          }
        });
      });

      await page.screenshot({
        path: path.join(outputDir, `${demo}.webp`),
        type: 'webp',
        quality: 90
      });
    }
  }

  await browser.close();
  console.log('HANEI STUDIO: Snapshots generated in public/images/demos/');
})();
