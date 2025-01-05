import type { Column } from './Column'

export class Row<T> {
  constructor(readonly columns: Column<T>[]) {}

  // Método para obtener el valor de una columna por su clave
  getValueByKey(key: string): T | undefined {
    const column = this.columns.find((col) => col.key === key)
    return column?.value
  }

  // Método para añadir una columna a la fila
  addColumn(column: Column<T>): void {
    this.columns.push(column)
  }
}
