export type ColumnData<T> = {
  [key: string]: T // Cualquier string como clave, con valores del tipo genérico T
}

export class Column<T> {
  constructor(
    readonly key: string, // Nombre dinámico de la clave como string
    readonly value: T, // Valor asociado, del tipo genérico T
  ) {}

  // Método estático para crear una instancia de Column
  public static create<T>(data: ColumnData<T>): Column<T> {
    // Extraemos el primer par clave-valor del objeto dinámico `data`
    const [key, value] = Object.entries(data)[0]

    return new Column<T>(key, value as T)
  }
}
