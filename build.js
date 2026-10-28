import fs from 'fs';

if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist');
fs.mkdirSync('dist/music');

fs.cpSync('asset', 'dist/asset', { recursive: true });
fs.cpSync('image', 'dist/image', { recursive: true });
fs.copyFileSync('music/sandwich-and-story.mp3', 'dist/music/sandwich-and-story.mp3');
fs.copyFileSync('index.html', 'dist/index.html');

console.log('Build complete: all static assets copied to dist/');
