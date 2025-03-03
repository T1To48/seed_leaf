
const SORTMETHODS = {
    AtoZ: "AtoZ",
    ZtoA: "ZtoA",
    LOWtoHIGH: "LOWtoHIGH",
    HIGHtoLOW: "HIGHtoLOW"
} as const;
type SortMethods = keyof typeof SORTMETHODS;

const CATEGORIES = {
    microgreens: "microgreens",
    herbs: "herbs",
    oils: "oils",
} as const;
type Categories = keyof typeof CATEGORIES;


export { CATEGORIES, SORTMETHODS }
export type { SortMethods, Categories }