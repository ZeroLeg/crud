interface ICRUD<T> {
  create(key: string, value: T): string
  read(key: string): T | string
  update(key: string, value: T): string
  delete(key: string): string
}

class CRUDOperations<T> implements ICRUD<T> {
  private data: Record<string, T> = {}

  create(key: string, value: T): string {
    if (this.data[key]) {
      return `Error: El elemento con clave "${key}" ya existe.`
    }
    this.data[key] = value
    return `Elemento con clave "${key}" creado exitosamente.`
  }

  read(key: string): T | string {
    return this.data[key] || `Error: El elemento con clave "${key}" no existe.`
  }

  update(key: string, value: T): string {
    if (!this.data[key]) {
      return `Error: El elemento con clave "${key}" no existe.`
    }
    this.data[key] = value
    return `Elemento con clave "${key}" actualizado exitosamente.`
  }

  delete(key: string): string {
    if (!this.data[key]) {
      return `Error: El elemento con clave "${key}" no existe.`
    }
    delete this.data[key]
    return `Elemento con clave "${key}" eliminado exitosamente.`
  }
}

export default CRUDOperations
