import withMarkdoc from '@markdoc/next.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  assetPrefix: '/',
  // assetPrefix: 'https://docs.armchairheavyindustries.com',
};


export default withMarkdoc({ schemaPath: './src/markdoc', nextjsExports: [], dir: __dirname })(nextConfig);
