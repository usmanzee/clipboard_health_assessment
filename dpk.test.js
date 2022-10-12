const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal hashed string when given string input", () => {
    const trivialKey = deterministicPartitionKey("abc");
    expect(trivialKey).toBe(
      "47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128"
    );
  });

  it("Returns the literal hashed string when given string input", () => {
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey).toBe(
      "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc"
    );
  });

  it("Returns the OBJECT 'partitionKey' key when given object(event) input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "Partition Key",
    });
    expect(trivialKey).toBe("Partition Key");
  });

  it("Returns the literal hashed string when given object without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      test: "testing without key",
    });
    expect(trivialKey).toBe(
      "c0fb350edfd76df809d619462469bb5e8442e68493b74d8305849af24b9fdd482766fc5d9d89440a8f1629f90b4ba791636c7f844e705ee20ab3ad50e6cc944e"
    );
  });
});
