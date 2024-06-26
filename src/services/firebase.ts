import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import type { Employee } from '@/models/employee'
import { db } from '@/firebase'

export default {
  getEmployees(callback: (employees: Employee[]) => void, errorCallback: (error: Error) => void) {
    return onSnapshot(
      collection(db, 'employees'),
      (snapshot) => {
        const employees: Employee[] = []
        snapshot.forEach((employee) => {
          const employeeData = employee.data() as Employee
          employeeData.id = employee.id
          employees.push(employeeData)
        })
        callback(employees)
      },
      errorCallback
    )
  },

  addEmployee(employee: Employee) {
    addDoc(collection(db, 'employees'), this.getCleanJson(employee))
  },

  deleteEmployee(employeeId: string) {
    return deleteDoc(doc(collection(db, 'employees'), employeeId))
  },

  getCleanJson(employee: Employee) {
    return {
      firstName: employee.firstName.trim(),
      lastName: employee.lastName.trim(),
      email: employee.email.trim(),
      address: employee.address.trim()
    }
  }
}
