/*
 * The script will export the specified dataset to a local file
 * and then import it to the other specified dataset before removing the local file.
 *
 * As of now we have to do it this way as the Sanity Cloud Clone feature is only available
 * for customers on the Enterprise plan (we are currently on the old Advanced plan).
 * */
const { spawnSync } = require('child_process');
const { unlinkSync } = require('fs');
const readline = require('readline');

const { stdin: input, stdout: output } = process;
const rl = readline.createInterface({ input, output });

const exportFromDatasets = ['dev', 'prod'];
const importToDatasets = ['dev', 'prod'];
const cwd = process.cwd();
const options = { cwd, stdio: 'inherit' };

function ask(question, defaultAnswer) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer || defaultAnswer));
  });
}

function exit(message) {
  console.log(message);
  rl.close();
  process.exit(0);
}

(async () => {
  const exportFrom = await ask('Which dataset should be exported from? (prod) ', 'prod');
  if (!exportFromDatasets.includes(exportFrom)) {
    exit(`Dataset "${exportFrom}" not valid. Must be one of: ${exportFromDatasets.join(', ')}`);
  }

  const importTo = await ask('Which dataset should be imported to? (dev) ', 'dev');
  if (!importToDatasets.includes(importTo)) {
    exit(`Dataset "${importTo}" not valid. Must be one of: ${importToDatasets.join(', ')}`);
  }

  if (exportFrom === importTo) {
    exit('Cannot export and import to same dataset');
  }

  const tmpFileName = `sanity-dataset-${exportFrom}-${new Date().toISOString()}.tar.gz`;

  const shouldCopy = await ask(
    `Copy Sanity dataset from ${exportFrom} to ${importTo}? (Y/n) `,
    'y'
  );
  if (['y', 'Y', 'yes', 'YES'].includes(shouldCopy)) {
    spawnSync('npm', ['run', 'sanity', '--', 'login'], options);
    spawnSync(
      'npm',
      ['run', 'sanity', '--', 'dataset', 'export', exportFrom, tmpFileName],
      options
    );
    spawnSync(
      'npm',
      ['run', 'sanity', '--', 'dataset', 'import', tmpFileName, importTo, '--replace'],
      options
    );
    unlinkSync(`${cwd}/${tmpFileName}`);
  }

  rl.close();
})();
