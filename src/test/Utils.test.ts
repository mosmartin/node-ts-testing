import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  it("should parse a simple url", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:3000/login");

    expect(parsedUrl.href).toBe("http://localhost:3000/login");
    expect(parsedUrl.port).toBe("3000");
  });
});
