<script setup lang="ts">
import type { Employee } from '@/models/employee'
import FirebaseService from '@/services/firebase'
import { computed, ref } from 'vue'

const visible = ref(false)
const employee = ref<Employee>({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  address: ''
})

const openDialog = () => {
  visible.value = true
}

const saveEmployee = () => {
  visible.value = false
  FirebaseService.addEmployee(employee.value)
  clearFields()
}

const clearFields = () => {
  employee.value.firstName = ''
  employee.value.lastName = ''
  employee.value.email = ''
  employee.value.address = ''
  visible.value = false
}

const isValid = computed(() => {
  return (
    employee.value.firstName.trim() !== '' &&
    employee.value.lastName.trim() !== '' &&
    isValidEmail(employee.value.email.trim()) &&
    employee.value.address.trim() !== ''
  )
})

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

defineExpose({
  openDialog
})
</script>

<template>
  <div class="card flex justify-content-center">
    <PrimeDialog
      :closeOnEscape="true"
      v-model:visible="visible"
      modal
      header="Add Employee"
      :style="{ width: '30rem' }"
    >
      <span class="p-text-secondary block mb-5">Add your information.</span>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="firstName" class="font-semibold w-6rem">First Name</label>
        <PrimeInputText
          v-model="employee.firstName"
          id="firstName"
          class="flex-auto"
          autocomplete="on"
        />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="lastName" class="font-semibold w-6rem">Last Name</label>
        <PrimeInputText
          v-model="employee.lastName"
          id="lastName"
          class="flex-auto"
          autocomplete="on"
        />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <PrimeInputText
          :invalid="!isValidEmail(employee.email) && employee.email.length > 0"
          v-model="employee.email"
          id="email"
          class="flex-auto"
          autocomplete="on"
          placeholder="example@email.com"
        />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="address" class="font-semibold w-6rem">Address</label>
        <PrimeInputText
          v-model="employee.address"
          id="address"
          class="flex-auto"
          autocomplete="on"
        />
      </div>
      <div class="flex justify-content-end gap-3">
        <PrimeButton
          type="button"
          label="Cancel"
          severity="secondary"
          @click="clearFields()"
        ></PrimeButton>
        <PrimeButton
          type="button"
          label="Save"
          @click="saveEmployee"
          :disabled="!isValid"
        ></PrimeButton>
      </div>
    </PrimeDialog>
  </div>
</template>
