
<template>
  <div id="wrapper">
    <button @click="getCoins">CLick</button>
    <table class="table table-hover">
  <thead>
    <tr>
      <td>Rank</td>
      <td>Name</td>
      <td>Price (USD)</td>
      <td>1H</td>
      <td>1D</td>
      <td>1W</td>
      <td>Market Cap (USD)</td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="coin in $store.state.coins">
      <td>{{ coin.rank }}</td>
      <td>{{ coin.symbol }}</td>
      <td>{{ coin.price_usd  }}</td>
      <td v-bind:style="getColor(coin.percent_change_1h)">
        <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
      </td>
      <td v-bind:style="getColor(coin.percent_change_24h)">
        <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
      </td>
      <td v-bind:style="getColor(coin.percent_change_7d)">
        <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d  }}%
      </td>
      <td>{{ coin.market_cap_usd | currency  }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Vue2Filters from 'vue2-filters'

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
Vue.use(Vue2Filters)

export default {
  name: "landing-page",
  components: {},
  data: function() {
    return {
      coins: this.$store.state.coins
    };
  },
  methods: {
    getColor: num => {
      return num > 0 ? "color:green;" : "color:red;";
    }
  },
  computed: {
    ...mapActions(["getCoins"]),
  },
  watch: {},
  created: {
    ...mapActions(["getCoinData",'updatateCoins'])
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import "./main.scss/main.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
