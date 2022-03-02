<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="namaCari"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchContact">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Contact List</h4>
      <table class="table">
        <tr>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Email</th>
          <th>Telp.</th>
          <th>Opsi</th>
        </tr>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{ contact.nama }}</td>
          <td>{{ contact.alamat }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.telp }}</td>
          <td>
            <button class="btn btn-info" @click="setData(contact, index)">Edit</button>
            <button class="btn btn-danger">delete</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="col-md-6">
      <div v-if="currentContact">
        <div>
          <label><strong>Nama:</strong></label> {{ currentContact.nama }}
        </div>
        <div>
          <label><strong>Alamat:</strong></label> {{ currentContact.alamat }}
        </div>
        <div>
          <label><strong>Telp:</strong></label> {{ currentContact.telp }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentContact.email }}
        </div>

        <!-- <router-link :to="'/tutorials/' + currentContact.id" class="badge badge-warning">Edit</router-link> -->
      </div>
      <div v-else>
        <br />
        <!-- <p>Please click on a Tutorial...</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import TutorialDataService from "../services/ContactDataService";

export default {
  name: "contact-list",
  data() {
    return {
      contacts: [],
      currentContact: null,
      currentIndex: -1,
      namaCari: ""
    };
  },
  methods: {
    retrieveContact() {
      this.contacts = JSON.parse(localStorage.getItem('contactData'));
      console.log('op');
      console.log(this.contacts);
      // asd
    },

    refreshList() {
      this.retrieveContact();
      this.currentContact = null;
      this.currentIndex = -1;
    },

    setData(contact, index){
      this.currentContact = contact;
      this.currentIndex = index;
    },
    
    searchContact() {
      console.log(this.nama);
      let dt = this.contacts;

      dt.forEach(function (val) {
        // console.log([val, index]);
        if ( val.nama == this.nama ) {
          console.log(val.nama);
        }
      });

    }
  },
  mounted() {
    this.retrieveContact();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
