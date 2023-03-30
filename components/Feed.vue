<script>
import json from "../assets/data.json";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          key: "id",
          sortable: false,
          title: "Block Id",
        },
        { key: "dv", title: "Aux Val" },
        { key: "bs", title: "Block State" },
      ],
      items: json,
    };
  },
};
</script>
<template>
  <v-app>
    <v-card>
      <v-card-title>
        Auxval to Block States
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
      ></v-data-table>
    </v-card>
    <v-footer class="text-center d-flex flex-column">
      <div class="pt-0">
        This website was created to convert aux value to block states. Created
        by
        <a href="https://smokeystack.github.io" target="_blank" title="Website"
          >SmokeyStack</a
        >
      </div>
      <v-divider></v-divider>
      <div>{{ new Date().getFullYear() }} — <strong>SmokeyStack</strong></div>
    </v-footer>
  </v-app>
</template>