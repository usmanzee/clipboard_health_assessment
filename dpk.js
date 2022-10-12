const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  /**
   * Initialize the candidate with default value
   */
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  /**
   * This statement is not going to run in any-case, so we can remove this.
   * 
   *  if (candidate) {
        if (typeof candidate !== "string") {
          candidate = JSON.stringify(candidate);
        }
      } else {
        candidate = TRIVIAL_PARTITION_KEY;
      }
   * 
   */

  /**
   * We can make this last condition to one line
   
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    return candidate;

  **/

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
