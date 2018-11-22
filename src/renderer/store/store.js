import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state :{
    main: 0,
    CRYPTOCOMPARE_API_URI : "https://www.cryptocompare.com",
    COINMARKETCAP_API_URI : "https://api.coinmarketcap.com",
    UPDATE_INTERVAL : 60 * 10,
    coins:[1,2],
    coinData:[]
  },
   mutations : {
    GET_COINS(state){
      axios.get(state.COINMARKETCAP_API_URI + "/v1/ticker/?limit=2000")
      .then((response)=>{
        state.coins = response.data
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    GET_COIN_DATA(state){
      axios.get(state.CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
       .then((resp)=>{
         state.coinData = resp.data;
         this.GET_COINS
       })
       .catch((err)=>{
         console.log(err)
       })
    },
    DECREMENT_MAIN_COUNTER (state) {
      state.main--
    },
    INCREMENT_MAIN_COUNTER (state) {
      state.main++
    }
  },
  actions : {
    someAsyncTask ({ commit }) {
      // do something async
      commit('INCREMENT_MAIN_COUNTER')
    },
    getCoins({commit}){
      commit('GET_COINS')
    },
    getCoinData({commit}){
      commit('GET_COIN_DATA')
    },
    updatateCoins(){
      setTimeout(() => {
        this.getCoins();
      }, 1000);
    }
  }
   
})


