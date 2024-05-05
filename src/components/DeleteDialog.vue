<script setup lang="ts">
import type { Employee } from '@/models/employee'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import FirebaseService from '@/services/firebase'

const props = defineProps<{
  employees: Employee[]
}>()

const confirm = useConfirm()
const toast = useToast()

const openDeleteDialog = (rowDataIndex: number) => {
  const employeeFirstName = props.employees[rowDataIndex].firstName
  const employeeLastName = props.employees[rowDataIndex].lastName
  const employeeFullName = `${employeeFirstName} ${employeeLastName}`
  confirm.require({
    message: `Do you want to delete ${employeeFullName}?`,
    header: 'Danger Zone',
    icon: 'pi pi-info-circle',
    rejectLabel: 'Cancel',
    acceptLabel: 'Delete',
    rejectClass: 'p-button-secondary p-button-outlined',
    acceptClass: 'p-button-danger',
    accept: () => {
      toast.add({
        severity: 'success',
        summary: 'Confirmed',
        detail: `Employee ${employeeFullName} deleted`,
        life: 3000
      })
      const employeeId = props.employees[rowDataIndex].id
      FirebaseService.deleteEmployee(employeeId)
    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 })
    }
  })
}

defineExpose({
  openDeleteDialog
})
</script>

<template>
  <PrimeToast />
  <ConfirmDialog></ConfirmDialog>
</template>

<style scoped></style>
