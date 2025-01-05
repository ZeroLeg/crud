import type { Row } from './Row'

export class List<T> {
  constructor(readonly rows: Row<T>[]) {}

  // Método para obtener una fila por su índice
  getRowByIndex(index: number): Row<T> | undefined {
    return this.rows[index]
  }

  // Método para añadir una fila a la lista
  addRow(row: Row<T>): void {
    this.rows.push(row)
  }

  // Método para obtener el valor de una columna específica en una fila específica
  getValueByRowAndKey(rowIndex: number, key: string): T | undefined {
    const row = this.getRowByIndex(rowIndex)
    return row?.getValueByKey(key) // Utiliza el método `getValueByKey` de la clase Row
  }
}
