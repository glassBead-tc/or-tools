export * as CpSat from "./gen/cp_sat.js";
export type IntVar = {
    name: string;
};
export type BoolVar = {
    name: string;
};
export declare class CpModelBuilder {
    private variables;
    addIntVar(name: string): IntVar;
    addBoolVar(name: string): BoolVar;
}
//# sourceMappingURL=index.d.ts.map