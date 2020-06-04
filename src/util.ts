import { AutoScore, Score } from "./types";
/**
 * build a score object.
 * If the score array only has 1 score, then use the 'max' from that score.
 * Else normalize the score such that max will always be 1.
 *
 * This is to accommodate custom elements that return a max greater than 1.
 *
 * @param id
 * @param raw
 * @param partialScoring
 */
export const itemScore = (
  id: string,
  raw: Score[],
  partialScoring: boolean
): AutoScore => {
  const filtered = raw.filter((r) => r.hasOwnProperty("score"));

  if (filtered.length !== raw.length) {
    console.warn(
      `session: ${id} got a score array with missing 'score' props: ${JSON.stringify(
        raw
      )}`
    );
  }

  if (filtered.length === 1) {
    return {
      partialScoring,
      max: (filtered[0] as any).max || 1,
      points: filtered[0].score,
    };
  }

  const points =
    filtered.length === 0
      ? 0
      : filtered.reduce((acc, s) => {
          const denominator = (s as any).max || 1;
          const normalized = (s.score || 0) / denominator;
          return acc + normalized;
        }, 0) / filtered.length;
  return {
    points,
    partialScoring,
    max: 1,
  };
};

export const normalizePoints = (n: any): number => {
  const out = isFinite(n) && n >= 0 ? n : 0;
  if (out !== n) {
    console.warn("Warning points was normalized, was: ", n, "is now: 0");
  }
  return out;
};
