<script setup lang="ts">
import FirebaseService from '@/services/firebase'
import DeleteDialog from '@/components/DeleteDialog.vue'
import AddEmployeeDialog from '@/components/AddEmployeeDialog.vue'

import type { Employee } from '@/models/employee'
import { onMounted, onUnmounted, ref } from 'vue'

const employees = ref<Employee[]>([])
const deleteDialogRef = ref<typeof DeleteDialog | null>(null)
const addEmployeeRef = ref<typeof AddEmployeeDialog | null>(null)

// i would never use ids in code dont worry :D
const disabledEmployeeId = ref<string>('P6BXetVOG9On0EcGinCg')

const addEmployee = () => {
  addEmployeeRef.value?.openDialog()
}

const confirmDelete = (rowDataIndex: number) => {
  deleteDialogRef.value?.openDeleteDialog(rowDataIndex)
}

onMounted(() => {
  const errorCallback = (error: any) => {
    console.error('Error fetching employee data:', error)
  }

  const unsubscribe = FirebaseService.getEmployees((fetchedEmployees) => {
    employees.value = fetchedEmployees
  }, errorCallback)

  onUnmounted(() => {
    unsubscribe()
  })
})
</script>

<template>
  <main>
    <AddEmployeeDialog ref="addEmployeeRef"></AddEmployeeDialog>
    <DeleteDialog :employees="employees" ref="deleteDialogRef"></DeleteDialog>
    <DataTable
      v-if="employees.length"
      :value="employees"
      dataKey="id"
      tableStyle="min-width: 50rem"
    >
      <PrimeColumn field="firstName" header="First Name"></PrimeColumn>
      <PrimeColumn field="lastName" header="Last Name"></PrimeColumn>
      <PrimeColumn field="email" header="Email"></PrimeColumn>
      <PrimeColumn field="address" header="Address"></PrimeColumn>
      <PrimeColumn headerStyle="width: 10rem">
        <template #body="{ index }">
          <div class="edit-delete-button">
            <PrimeButton
              @click="confirmDelete(index)"
              type="button"
              icon="pi pi-trash"
              severity="danger"
              v-if="employees[index].id != disabledEmployeeId"
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
