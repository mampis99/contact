<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          class="form-control"
          id="nama"
          required
          v-model="contact.nama"
          name="nama"
        />
      </div>

      <div class="form-group">
        <label for="description">Alamat</label>
        <input
          class="form-control"
          id="alamat"
          required
          v-model="contact.alamat"
          name="alamat"
        />
      </div>

      <div class="form-group">
        <label for="description">Telp.</label>
        <input
          class="form-control"
          id="telp"
          required
          v-model="contact.telp"
          name="telp"
        />
      </div>

      <div class="form-group">
        <label for="description">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="contact.email"
          name="email"
        />
      </div>

      <button @click="saveContact" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newContact">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "add-contact",
  data() {
    return {
      contacts: [],
      inputContact: null,
      contact: {
        id: null,
        nama: "",
        alamat: "",
        telp: "",
        email: ""
      },
      submitted: false
    };
  },
  methods: {
    saveContact() {
      var data = {
        nama: this.contact.nama,
        alamat: this.contact.alamat,
        telp: this.contact.telp,
        email: this.contact.email
      };

      this.contacts.push(data);
      this.actionSave();
      // const parsed = JSON.stringify(data);
      // localStorage.setItem('contactData', parsed);
    },

    actionSave() {
      const parsedd = JSON.stringify(this.contacts);
      // console.log(parsedd);
      localStorage.setItem('contactData', parsedd);
    },
    
    newContact() {
      this.submitted = false;
      this.contact = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
