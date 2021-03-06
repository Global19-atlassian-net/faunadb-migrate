import chalk from "chalk";
import fs from "fs";
import fse from "fs-extra";

const createMigration = (
  migrationName: string,
  migrationFolder: string,
  templateContent?: string
) => {
  if (!templateContent) {
    templateContent = fs.readFileSync(
      `${__dirname}/migration.template`,
      "utf8"
    );
  }

  const migrationFilename = `${Date.now()}_${migrationName}.js`;
  const migrationFilepath = `${migrationFolder}/${migrationFilename}`;

  fse.outputFileSync(migrationFilepath, templateContent);

  console.log(
    chalk.green(
      `${chalk.bold(migrationName)} migration created in ${migrationFilepath}`
    )
  );
};

export default createMigration;
