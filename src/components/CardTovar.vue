<template>
      <div class="card" >

           <router-link :to="{ name: 'tovar', params: { 
                id: id,
                title: title,
                }}">
            <img :src="imgUrl"  class="card-img">
        </router-link>

        <div class="card-content">
            <h3 class="card-title"> {{ title }} </h3>
            <p class="card-description">{{ description.substring(0, 40) + '...' }}</p>   
            <p class="card-price">{{ price }} Руб.</p>

            <div v-if="!isOrder">
                  <button v-if="!clickTovars || count==0" :class="clas" @click="actionOrder(1)">{{ count!=0?` Добавлено ${ count }`: text  }} </button>
            </div>

            <div v-if="isOrder">
                <button  @click="actionOrder(-1, tovar)" class="delete-order">Удалить</button> 
                <span class="count-card">{{ count }}</span> 
            </div>
              
            <div v-if="!isOrder" class="choise">
                <div @click="actionOrder(1)" class="parent-icon" v-show="count>0">
                  <div class="img-width">
                        <img  v-show="clickTovars" class="img-add" width="10" src="/icons/plus.png" alt="">
                    </div>
                    <span  class="length-orders">{{ count }}</span>
                </div>
                <div @click="removeOrder(tovar)" class="parent-icon" v-show="count>0">
                  <div>
                        <img  v-show="clickTovars" class="img-add" width="10" src="/icons/minus.png" alt="">
                    </div>
                </div> 
            </div>
          </div>
        </div>
 
</template>

<script>
export default {
    data(){
        return {
            count: this.tovar.count,
            clickTovars: false,
            orders:[],
            tovars: [],
        }
    },
   
    methods: {
        actionOrder(e){
  
            console.log('action')

              this.clickTovars = true
              this.count += e
              this.tovar.count = this.count

              //  console.log(tovar)

              this.$emit('removeOrder', this.tovar )
              this.$emit('addOrder', this.tovar)
              this.$emit('checkTovar')
        },
        getProducts(){
          return  this.tovars = this.$store.state.products
        },
        removeOrder(tovar){
          console.log(tovar)
            this.count += -1
            this.tovar.count = this.count
            // this.actionOrder(-1)
            this.$store.commit('removeOrder', tovar)
        }
    },
    computed:{
      getOrders(){
          return this.orders = this.$store.state.orders
        },
      getProducts(){
          return  this.tovars = this.$store.state.products
        }
    },
    props: ['title', 'price', 'description', 'imgUrl','tovar','text', 'clas','id','isOrder']
}
</script>



<style scoped>

.count-card{
    position: absolute;
    right: 6%;
    color: white;
    background-color: rgb(92, 92, 92);
    padding: 0px 7px;
    border-radius: 50%;
}
.choise{
  display: flex;
  width: 100px;
  justify-content: space-between;
}
.parent-icon{
        position: relative;
        width: max-content;
}
.length-orders{
        width: max-content;
        position: absolute;
        top:0;
        right: -150%; 
        background-color: red;
        padding: 3px 10px ;
        font-size: 14px;
        border-radius: 50%;
        
        color: white;
}
.img-add{
    display: block;
    width: 100%!important;
    height: 25px !important;
}
.icon-fill {
  fill: red;
}

.icon-stroke {
  stroke: blue;
}
.card {
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  background-color: white;
  transition: 0.3s;
  width:260px;
  border-radius: 5px;
  margin: 20px;
}

.card img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  position: relative;
  padding: 20px;
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card-description {
  color: #555;
  margin-bottom: 15px;
}

.card-price {
  font-weight: bold;
  margin-bottom: 15px;
}

.add-to-cart-button {
  background-color: #1b8060;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.add-to-cart-button:hover {
  background-color: #45a049;
}
.delete-order{
    background-color: rgb(206, 59, 59);
    padding: 3px 10px;
    color: white;
    border-radius: 10px;
}
.add-order-btn {
  background-color: #0e8a6f;
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