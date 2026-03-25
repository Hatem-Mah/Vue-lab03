<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <!-- Any filters or extra buttons could go here -->
    </div>

    <table class="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteStudent(student.id)">
              Delete
            </button>
            <router-link
              :to="{ name: 'edit-student', params: { id: student.id } }"
              class="btn btn-secondary"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">
            # of students {{ students.length }}
          </td>
        </tr>
      </tfoot>
    </table>

    <div class="text-end mb-3">
      <router-link to="/student/add" class="btn btn-success me-2">Add via Page</router-link>
      <button class="btn btn-primary" @click="showModal">Add via Modal</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="addModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Add New Student</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              @submit.prevent="addStudent"
              class="needs-validation"
              novalidate
              ref="form"
            >
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="newStudent.name"
                  required
                />
                <div class="invalid-feedback">Please provide a name.</div>
              </div>
              <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  v-model="newStudent.city"
                  required
                />
                <div class="invalid-feedback">Please provide a city.</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="validateAndAdd"
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  name: "Body",
  data() {
    return {
      students: [],
      newStudent: {
        name: "",
        city: "",
      },
      modalInstance: null,
    };
  },
  mounted() {
    this.modalInstance = new Modal(this.$refs.modal);
    this.fetchStudentsFromJsonServer();
  },
  methods: {
    showModal() {
      this.modalInstance.show();
    },
    validateAndAdd() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      this.addStudent();
    },
    addStudent() {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.newStudent.name,
          city: this.newStudent.city,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.students.push(data);
        })
        .catch((error) => {
          console.error("Error adding student:", error);
        });

      // Reset form
      this.newStudent.name = "";
      this.newStudent.city = "";
      this.$refs.form.classList.remove("was-validated");

      // Close modal
      if (this.modalInstance) {
        this.modalInstance.hide();
      }
    },
    fetchStudentsFromJsonServer() {
      const data = fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => {
          this.students = data;
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    },
    deleteStudent(id) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then((data) => data.json())
        .then(
          (_) =>
            (this.students = this.students.filter(
              (student) => student.id !== id,
            )),
        );
    },
  },
};
</script>

<style scoped></style>
