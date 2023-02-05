import { readFileSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

export default () => {
  const configContent = readFileSync(join(cwd(), 'config.json'), 'utf-8');
  return JSON.parse(configContent);
};
