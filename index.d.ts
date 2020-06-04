export interface Score {
    id: string;
    score: number;
    element: string;
    error?: string;
}
export declare enum ScoreType {
    AUTO = "auto",
    MANUAL = "manual"
}
export interface SessionScore {
    points: number;
    max: number;
    type?: ScoreType;
}
export interface ManualScore extends SessionScore {
}
export interface AutoScore extends SessionScore {
    elements?: any[];
    partialScoring: boolean;
}
/**
 * build a score object.
 * If the score array only has 1 score, then use the 'max' from that score.
 * Else normalize the score such that max will always be 1.
 *
 * This is to accommodate custom elements that return a max greater than 1.
 *
 * TODO: We may at some point want to formalize this as part of the pie-framework, and whether the below is what is desired.
 * @param id
 * @param raw
 * @param partialScoring
 */
export declare const buildScore: (id: string, raw: Score[], partialScoring: boolean) => AutoScore;
export declare const normalizePoints: (n: any) => number;
