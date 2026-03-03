/**
 * zenith_server — build tool
 *
 * A lightweight build tool tool for cli utilities workflows.
 */
const { loadConfig } = require("./config");
const { Processor } = require("./processor");

async function main() {
  const config = loadConfig();
  console.log(`Starting ${config.appName} v${config.version}...`);

  try {
    const processor = new Processor(config);
    const result = await processor.run();

    console.log(
      `Done: processed ${result.itemsProcessed} items in ${result.elapsed}ms`
    );
  } catch (err) {
    console.error("Fatal:", err.message);
    process.exit(1);
  }
}

main();
