interface ICRUD<T> {
  create(value: T): string
  read(id: string): T | string
  update(id: string, value: T): string
  delete(id: string): string
}

class CRUDOperations<T> implements ICRUD<T> {
  private data: Record<string, T> = {}

  create(value: T): string {
    return `Elemento con clave "${value}" creado exitosamente.`
  }

  read(id: string): T | string {
    return this.data[id] || `Error: El elemento con clave "${id}" no existe.`
  }

  update(id: string, value: T): string {
    if (!this.data[id]) {
      return `Error: El elemento con clave "${id}" no existe.`
    }
    this.data[id] = value
    return `Elemento con clave "${id}" actualizado exitosamente.`
  }

  delete(id: string): string {
    if (!this.data[id]) {
      return `Error: El elemento con clave "${id}" no existe.`
    }
    delete this.data[id]
    return `Elemento con clave "${id}" eliminado exitosamente.`
  }
}

export default CRUDOperations
