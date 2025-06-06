import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files
  server.use('/css', express.static(path.join(__dirname, 'css')));
  server.use('/js', express.static(path.join(__dirname, 'js')));
  server.use('/images', express.static(path.join(__dirname, 'images')));
  server.use('/site.webmanifest', express.static(path.join(__dirname, 'site.webmanifest')));

  // Let Next.js handle all other routes
  server.use((req: Request, res: Response) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
