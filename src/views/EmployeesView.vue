<script setup lang="ts">
import { db } from '@/firebase'
import type { Employee } from '@/models/employee'
import { collection, onSnapshot } from 'firebase/firestore'
import { onMounted, onUnmounted, ref } from 'vue'

const employees = ref<Employee[]>([])

const addEmployee = () => {
  console.log('add employee')
}

const deleteEmployee = (rowDataIndex: number) => {
  console.log(employees.value[rowDataIndex].id)
}

const editEmployee = (rowDataIndex: number) => {
  console.log(employees.value[rowDataIndex].id)
}

onMounted(() => {
  const unsubscribe = onSnapshot(collection(db, 'employees'), (snapshot) => {
    employees.value = []
    snapshot.forEach((employee) => {
      const employeeData = employee.data() as Employee
      employeeData.id = employee.id
      employees.value.push(employeeData)
    })
  })

  onUnmounted(unsubscribe)
})
</script>

<template>
  <main>
    <DataTable :value="employees" dataKey="id" tableStyle="min-width: 50rem">
      <PrimeColumn field="firstName" header="First Name"></PrimeColumn>
      <PrimeColumn field="lastName" header="Last Name"></PrimeColumn>
      <PrimeColumn field="email" header="Email"></PrimeColumn>
      <PrimeColumn field="address" header="Address"></PrimeColumn>
      <PrimeColumn field="address" header="Address"></PrimeColumn>
      <PrimeColumn headerStyle="width: 10rem">
        <template #body="{ index }">
          <div class="edit-delete-button">
            <PrimeButton
              @click="editEmployee(index)"
              type="button"
              icon="pi pi-pencil"
              severity="info"
            />
            <PrimeButton
              @click="deleteEmployee(index)"
              type="button"
              icon="pi pi-trash"
              severity="danger"
            />
          </div>
        </template>
      </PrimeColumn>
    </DataTable>
  </main>
  <div class="add-employee">
    <PrimeButton
      v-tooltip="'Add Employee'"
      @click="addEmployee"
      rounded
      icon="pi pi-plus"
    ></PrimeButton>
  </div>
</template>

<style scoped>
.add-employee {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.edit-delete-button {
  display: flex;
  gap: 20px;
}
main {
  padding: 25px;
  min-height: calc(100vh - 49px);
}
</style>
