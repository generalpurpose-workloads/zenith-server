/**
 * Configuration for zenith_server.
 */
const path = require("path");

function loadConfig() {
  return {
    appName: "zenith_server",
    version: "1.0.0",
    batchSize: parseInt(process.env.BATCH_SIZE || "50", 10),
    workers: parseInt(process.env.WORKERS || "4", 10),
    outputDir: process.env.OUTPUT_DIR || path.join(__dirname, "output"),
    logLevel: process.env.LOG_LEVEL || "info",
    timeout: parseInt(process.env.TIMEOUT || "30000", 10),
    retries: parseInt(process.env.MAX_RETRIES || "3", 10),
  };
}

module.exports = { loadConfig };
