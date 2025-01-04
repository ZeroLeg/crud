<script setup lang="ts">
import CRUDOperations from '@/services/crudOperations'

type User = {
  id: string
  name: string
  email: string
}
// CRUD para Usuarios
const userCrud = new CRUDOperations<User>()
userCrud.create({ id: '1', name: 'Juan', email: 'juan@example.com' })
console.log(userCrud.read('1'))
</script>

<template>
  <div>holas</div>
</template>
