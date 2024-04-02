<template>
    <div>
       {{  getOrders }}
       <h1 align="center" v-if="orders.length == 0"> 
        Ваша корзина пуста
        <div class="none-orders">
            <img width="100" src="/icons/default-kor.png" alt="">
            <p>Совершите покупку</p>
        </div>
        </h1>
        
       <h1 align="center" v-else> Ваша корзина</h1>
      
        <ul class="wrapper">
                <li v-for="tovar in orders" :key="tovar">
                    <card-tovar 
                        :title="tovar.title"
                        :price="tovar.price"
                        :description="tovar.description"
                        :imgUrl="tovar.imgUrl"
                        :tovar="tovar"
                        :id="tovar.id"
                        :text="'Удалить'"
                        :clas="'delete-order'"
                        :isOrder="true"
                        @removeOrder="removeOrder"
                    >                    
                </card-tovar>
            </li>
        </ul>
       <button class="design" v-if="orders.length != 0" @click="showModal=!showModal">{{ buy?'Ваш заказ оформлен': 'Оформить' }}</button>



        <TransitionGroup>
    <div  v-if="showModal " class="modal-shadow" @click.self="showModal=false">
        <div v-if="showModal " class="modal">
                    <div class="close" @click="showModal=false">
                        <img width="30" src="/icons/close.png" alt="">
                    </div>
                <div class="your-order" v-if="orders.length != 0">
                    <p>Ваш заказ:</p>
                    <ul>
                        <li v-for="i in orders" :key="i">
                            <div class="end-wrapper">
                                <div>
                                    {{ i.title }} - {{ i.price }} р. 
                                </div>
                                <span class="end">{{ i.count}}шт.</span>
                            </div>
                            <hr>
                        </li>
                    </ul>
                    <div class="end-wrapper">
                        <div> Итого:</div>
                        <span class="end sum-price">  {{ priceZakaz }} - ₽</span>
                    </div>
               
                    <button @click="toBuyOrder" class="to-buy">{{ buy?'Вы уже купили': 'Купить' }}</button>
                    {{sumOrders}}
                </div> 
        </div>
    </div>
        </TransitionGroup>
    </div>

</template>

<script>
import CardTovar from './CardTovar.vue'

export default {
    components: {CardTovar},
    data(){
        return{
            showModal: false,
            orders: [],
            priceZakaz: 1,
            count: 0,
            countOrder: {},
            buy: false,
        }
    },
    methods: {
        toBuyOrder(){
            this.buy = true
            this.showModal = false
            alert('Подтвердите ваше действие')
        },
        removeOrder(tovar){
            console.log('11w')
            this.$store.commit('removeOrder', tovar)
        }
    },
    computed: {  
        getOrders(){
            const a = this.$store.getters.getOrders
            const orders = a.filter((element, index, arr) =>
                index === arr.findIndex(e => e.id === element.id)
            );
            this.orders = orders
        },
        sumOrders(){
            let s = 0
            this.orders.forEach(el=>{
                return s += parseInt(el.price) * parseInt(el.count) 
            })
            this.priceZakaz = s
        }
    }
}
</script>

<style lang="scss" scoped>
.v-enter-from{
    scale: .3;
    opacity: 0;
}
.v-enter-to{
    scale: 1;
    opacity: 1;
}
.v-enter-active{
     transition: all .4s;
}
.none-orders{
    position: relative;
    margin-top:10%;
    margin-left: 0%;
    translate: 0%;
}
@media only screen and (max-width: 700px){
   .none-orders{
    position: absolute;
    margin-top:50%;
    margin-left: 50%;
    translate: -50%;
} 
}
.modal-shadow {
        position: fixed;;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
     background: rgba(0, 0, 0, 0.472);
    }
.to-buy{
    background-color: rgb(10, 124, 123);
    margin-top: 2rem;
    padding: 4px 10px;
    color: white;
    border-radius: 10px;
    margin-left: 50%;
    translate: -50%;
}
.close{

    position: absolute;
    top: 0;
    right: 0;
    margin: 25px;
}
.end{
    position: relative;
    display: block;
    top: 0;
    right: 0;
}
.design{
    width: max-content;
    background-color: rgb(93, 155, 155);
    padding: 9px 2rem;
    border-radius: 25px;
    color: white;
    margin-left: 50%;
    translate: -50%;
    margin-bottom: 2rem;
}
.modal{
    padding: 4rem;
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 1px 8px 0px black;
    @media only screen and (max-width: 600px) {
        width: 80%;
        padding: 2rem;
    }
}
.wrapper{
    margin-left: 8%;
    /* width: 90%; */
    display: flex;
    flex-wrap: wrap;
}
.delete-order{
    background-color: red;
    padding: 3px 10px;
    border-radius: 10px;
}
.sum-price{
    text-transform: uppercase;
    font-size: 34px;
}
.your-order{
    width: 300px;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    p{
        margin-bottom: 1rem;
    }
    li{
        width: 100%;
        
    }
    ul{
        width: 100%;
    }
} 
.end-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
</style>