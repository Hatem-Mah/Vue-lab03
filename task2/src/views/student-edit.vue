<script>
import { useRoute } from "vue-router";

export default {
  data: () => ({
    newStudent: {
      name: "",
      city: "",
    },
  }),

  mounted() {
    const route = useRoute();
    fetch("http://localhost:3000/users/" + route.params.id)
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);

        this.newStudent = {
          name: data.name,
          city: data.city,
        };
      });
  },

  methods: {
    onSubmit() {
      // Validate form
      if (!this.newStudent.name || !this.newStudent.city) {
        this.$refs["edit-user-form"].classList.add("was-validated");
        return;
      }

      fetch("http://localhost:3000/users/" + this.$route.params.id, {
        method: "PUT",
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
    },
  },
};
</script>

<template>
  <div>
    <h1>Edit Student</h1>
  </div>

  <form
    class="w-50 mx-auto need-validation"
    @submit.prevent="onSubmit"
    ref="edit-user-form"
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
