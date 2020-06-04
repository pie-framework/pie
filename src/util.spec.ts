import { itemScore } from "./util";

describe("util", () => {
  describe("item score", () => {
    it("scores one score without partial scoring", () => {
      const score = itemScore(
        "foo",
        [{ id: "bar", element: "baz", score: 0.5 }],
        false
      );
      expect(score.max).toBe(1);
      expect(score.points).toBe(.5);
    });
  });
});
