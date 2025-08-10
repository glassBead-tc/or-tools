export * as CpSat from "./gen/cp_sat.js";

export type IntVar = { name: string };
export type BoolVar = { name: string };

export class CpModelBuilder {
  private variables: Array<IntVar | BoolVar> = [];
  addIntVar(name: string): IntVar {
    const v = { name };
    this.variables.push(v);
    return v;
  }
  addBoolVar(name: string): BoolVar {
    const v = { name };
    this.variables.push(v);
    return v;
  }
}