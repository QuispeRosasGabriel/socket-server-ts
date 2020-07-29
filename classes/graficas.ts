export class GraficasData {
  private meses: Array<string> = ["enero", "febrero", "marzo", "abril"];
  private valores: Array<number> = [1, 2, 3, 4];

  constructor() {}

  public getDataGrafica() {
    return [{ data: this.valores, label: "Ventas" }];
  }

  public incrementarValor(mes: string, valor: number) {
    mes = mes.toLowerCase().trim();
    this.meses.map((e, i) => {});
  }
}
