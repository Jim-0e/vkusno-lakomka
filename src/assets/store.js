import Vuex from 'vuex'
import axios from 'axios'


const store = new Vuex.Store({
    state:{
        products: [],
        orders: [],
    },
    getters:{ 
        getTovars: state =>{
            state.products = []
            return state.products
        },
        getOneTovar: state => id=>{
           return state.products.find(el=>el.id==id)
        },
        getOrders: state =>{
          return state.orders
        },
        getLenghtOrder: state=>{
            return state.orders.length
        }
    },
    mutations:{
        plusOrderChoose(state, count){
            state.orderChoose +=count
        },
        addTovarsPush: (state, tovar) =>{
            state.products.push(...tovar)
            
        },
        addOrderPush(state, order){
            state.orders.push(order)
        },
        removeOrder: (state, order) =>{
            const index = state.orders.findIndex(n => n.id === order.id);
            if (index !== -1) {
                state.orders.splice(index, 1);
            }
        }
    },
    actions:{
      async addTovars({commit}){
          const response = axios.get('https://9e94055c9eb70cf2.mokky.dev/tovars')
          
          const {data} = await response
          commit('addTovarsPush', data)
      }
    },
})
export default store