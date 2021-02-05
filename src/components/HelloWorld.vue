<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Menu </v-list-item-title>
          <v-list-item-subtitle>  subtext </v-list-item-subtitle>

        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>PANDORA</v-toolbar-title>


    </v-app-bar>

    <v-main>
      <canvas id="myChart"></canvas>

       {{dataFromApi}}

    </v-main>
  </v-app>
</template>


<script>
import Chart from 'chart.js';
import axios from "axios";

  export default {
    name: 'HelloWorld',

    data: () => ({
      drawer: null,
      dataFromApi : {},
      chart : null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Devis', icon: 'mdi-image' },
        { title: 'Facture', icon: 'mdi-help-box' },
        { title: 'Administration', icon: 'mdi-help-box' },

      ],
      right: null,
    }),
    mounted() {
      this.launchGraph()
      this.recupdata()
    },
    methods : {
      launchGraph : function () {
        let ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontSize : 15
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize : 15
                }
              }]
            }
          }
        });
      },
      recupdata: function () {


            axios.get('https://jsonplaceholder.typicode.com/posts/1/comments' ,
                { headers : {
                    'X-Custom-Header': 'value'
                  }
                })
            .then((response) => {
                this.dataFromApi = response.data
        });

      }

    }
  }
</script>
