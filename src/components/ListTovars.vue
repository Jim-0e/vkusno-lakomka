<template>
    <div>
        
        <div class="input-block">
            <input v-model="searchTovar" class="input" type="text"> Поиск
        </div>

        <div class="hidden">{{ getOrderss }} </div>
    
        <h2 align="center">СПИСОК ПРОДУКТОВ</h2>
        
       <div class="wrappers"> 
            <ul class="wrapper">
                <li v-for="tovar in findTovar" :key="tovar">
                    <KeepAlive>
                    <card-tovar 
                        :title="tovar.title"
                        :price="tovar.price"
                        :description="tovar.description"
                        :imgUrl="tovar.imgUrl"
                        :tovar="tovar"
                        :id="tovar.id"
                        :text="'В Корзину'"
                        :clas="'add-order-btn'"
                        @addOrder="addTovar"
                        @checkTovar="textOrder"
                    >
                        </card-tovar>
                    </KeepAlive>
                </li>
            </ul>
       </div>
       
    </div>
</template>


<script>
import CardTovar from './CardTovar.vue';

export default{
    components: {CardTovar},
    data(){
        return{
            checked: false,
            count: 0,
            showPlus:false,
            tovars: [],
            orders: [],
            searchTovar: '',
            countOrder: 0,
        }
    },
    mounted(){
        this.add()
        this.show()
        
    },
    methods: {
        textOrder(){
            this.checked = !this.checked
        }, 
        checkToOrders(id){
            
            for(let ord of this.orders){
                if (ord.id ==id){
                    return true
                }
            }
        },
        //загрузка с сервера и добавление
        add(){
           this.$store.dispatch('addTovars')
           console.log('mounted')
        },
        show(){
            this.tovars =  this.$store.getters.getTovars
        },
        //добавить в корзину
        addTovar(tovar){
           
            console.log(tovar.count)
            this.countOrder+=tovar.count

            this.$store.state.countOrder

            this.showPlus = !this.showPlus
            this.$store.commit('addOrderPush', tovar)
        },
    },
    computed: {
        getOrderss(){
          return this.orders = this.$store.state.orders
        },
        findTovar(){
            
            return this.tovars.filter(el=>{
                
                 return el.title.toLowerCase()
                    .includes(this.searchTovar.toLowerCase())

            }) 
        },

    }
}
</script>

<style  scoped>

.hidden{
    display: none;
}
@media only screen and  (max-width: 700px) {
    .wrappers{
    margin-top: 6rem;
}
    .input-block{
        margin-top: 8rem;
        margin-left: 10%;
        translate: -50%;
    }
}
   

.input-block{
    position: absolute;
    top: 2rem;
    left: 40%;
}
.input{
    border: 1px solid rgb(21, 143, 88);
    border-radius: 10px;
    width: 16rem;
    padding: 2px 1rem;
}

.wrapper{
    padding-top: 1rem;
    margin-left: 8%;
    display: flex;
    flex-wrap: wrap;
}

.add-order-btn {
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.add-order-btn:hover {
  background-color: #45a049;
}
</style>
