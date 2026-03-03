/**
 * Core processor for zenith_server.
 */
const fs = require("fs");
const path = require("path");

class Processor {
  constructor(config) {
    this.config = config;
    this.stats = { itemsProcessed: 0, errors: 0 };
  }

  async run() {
    const start = Date.now();

    console.log(
      `Processing with batch_size=${this.config.batchSize}, workers=${this.config.workers}`
    );

    const items = this._discoverItems();
    console.log(`Found ${items.length} items`);

    for (const item of items) {
      try {
        await this._processItem(item);
        this.stats.itemsProcessed++;
      } catch (err) {
        this.stats.errors++;
        console.warn(`Failed: ${item} — ${err.message}`);
      }
    }

    this.stats.elapsed = Date.now() - start;
    return this.stats;
  }

  _discoverItems() {
    const dir = this.config.outputDir;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      return [];
    }
    return fs.readdirSync(dir).filter((f) => !f.startsWith("."));
  }

  async _processItem(item) {
    // Implementation depends on use case
    return item;
  }
}

module.exports = { Processor };
