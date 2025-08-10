export * as CpSat from "./gen/cp_sat.js";
export class CpModelBuilder {
    variables = [];
    addIntVar(name) {
        const v = { name };
        this.variables.push(v);
        return v;
    }
    addBoolVar(name) {
        const v = { name };
        this.variables.push(v);
        return v;
    }
}
//# sourceMappingURL=index.js.map