<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle">
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
          <td><button>button</button></td>
        </tr>
      </table>
      <!-- <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(contact, index) in contacts":key="index"
          @click="setActiveContact(contact, index)">
          {{ contact.telp }}
        </li>
      </ul> -->

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllContacts">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="contacts">
        <div>
          <label><strong>Nama:</strong></label> {{ contacts.nama }}
        </div>
        <div>
          <label><strong>Alamat:</strong></label> {{ contacts.alamat }}
        </div>
        <div>
          <label><strong>Telp:</strong></label> {{ contacts.telp }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ contacts.email }}
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
      title: ""
    };
  },
  methods: {
    retrieveContact() {
      this.contacts = JSON.parse(localStorage.getItem('contactData'))
      console.log('op');
      console.log(this.contacts);
      // asd
    },

    refreshList() {
      this.retrieveContact();
      this.currentContact = null;
      this.currentIndex = -1;
    },

    setActiveContact(tutorial, index) {
      this.currentContact = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    // removeAllContacts() {
    //   TutorialDataService.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    
    // searchTitle() {
    //   TutorialDataService.findByTitle(this.title)
    //     .then(response => {
    //       this.tutorials = response.data;
    //       this.setActiveTutorial(null);
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
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
