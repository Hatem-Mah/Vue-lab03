<script>
export default {
  data: () => ({
    newStudent: {
      name: "",
      city: "",
    },
  }),

  methods: {
    onSubmit() {
      console.log("Hey");
      this.addStudent();
    },

    addStudent() {
      // Validate form
      if (!this.newStudent.name || !this.newStudent.city) {
        console.log("Validation failed");
        this.$refs["add-user-form"].classList.add("was-validated");
        return;
      }

      // Add student to the list (you can replace this with an API call)
      //   this.$emit("add-student", { ...this.newStudent });
      console.log("Student added:", this.newStudent);
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.newStudent.name,
          city: this.newStudent.city,
        }),
      }).then(() => {
        this.$router.push("/students");
      });
      // Clear form
      this.newStudent.name = "";
      this.newStudent.city = "";
    },
  },
};
</script>

<template>
  <div>
    <h1>Add Student</h1>
  </div>

  <form
    class="w-50 mx-auto need-validation"
    @submit.prevent="onSubmit"
    ref="add-user-form"
  >
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        minlength="5"
        required
        v-model="newStudent.name"
      />
      <div class="invalid-feedback">Please provide a valid name.</div>
    </div>
    <div class="mb-3">
      <label for="city" class="form-label">City</label>
      <input
        type="text"
        class="form-control"
        id="city"
        minlength="5"
        required
        v-model="newStudent.city"
      />
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style scoped></style>
