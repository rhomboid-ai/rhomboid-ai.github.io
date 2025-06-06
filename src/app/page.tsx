import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // Read the static HTML content
  const htmlContent = readFileSync(join(process.cwd(), 'index.html'), 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
