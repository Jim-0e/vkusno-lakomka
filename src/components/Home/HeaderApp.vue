<template>
    <div>
        <div class="logo">
                <a href="">
                    <img width="100" src="/images/logo.png" alt="">
                </a>
            </div>
        <div class="login">

                <router-link to="login" active-class="log">
                    <div>
                        <img width="15" src="/icons/login.png" alt="">
                        <p v-if="getUser" @click="exit">Выйти</p>
                        <!-- <p v-if="this.$route.params.name" @click="exit">Выйти</p> -->
                        <p v-if="!getUser">Войти</p>
                    </div>
                </router-link>
            
                <router-link to="auth" v-on:click="log"  active-class="log">
                    <div v-if="!getUser">
                        <img width="15" src="/icons/registr.png" alt="">
                        <p>Регистрация</p>
                    </div>
                </router-link>

        </div>
      
        <div class="nav">
            <li>
                <router-link active-class="font-color" to="/tovars"> 
                <div>
                    <div class="icons"><img width="25" src="/images/home.png" alt="">
                    </div>
                    <p>Главная</p>
                </div>
                </router-link>
            </li>

            <li>
                <router-link active-class="font-color"  :to="{ name: 'profile', params: {name: get? get.fullName:''}}">
                <div>
                    <div class="icons"><img width="25" src="/icons/profile.png" alt="">
                        </div>
                        <p>Профиль</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link active-class="font-color" to="/orders">
                    <div class="parent-icon">
                        <div class="icons">
                            <img width="25" src="/images/korzina.png" alt="">
                        </div>
                        <p>Корзина</p>
                        <span class="length-orders">{{ countOrders }}</span>
                    </div>
                </router-link>
            </li>
        </div>
    </div>
        
        
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                countOrder: '',
            }
        },
        
        computed:{
            countOrders(){
                return  this.countOrder = this.$store.getters.getLenghtOrder
            },
            getUser(){
               return  localStorage.getItem('isAuth')
            },
            get(){
               return  JSON.parse(localStorage.getItem('userInfo'))
            }
        },
        methods: {
            exit(){
                localStorage.removeItem('isAuth')
                localStorage.removeItem('token')
                localStorage.removeItem("userInfo")
                location.reload();
            }
        }
    }
    </script>
    

    <style lang="scss" scoped>

    .parent-icon{
        position: relative;
    }

    .length-orders{       
        position: absolute;
        top:0;
        right: 0;
        background-color: red;
        padding: 0 7px ;
        border-radius: 50%;
    }
    .logo{
        position: fixed;
        z-index: 10;
        margin-top: -5rem;
        left: 6%;
    }
    .icons{
        position: relative;
        top: 0;
        text-align: center;
        padding-top:10px ;
        border-radius: 1px;
        
    }
    .font-color{
        color: rgb(255, 255, 255);
        background-color: rgb(18, 85, 37);
        padding: 2px 8px;
        border-radius: 20px 20px 5px 5px ;
    }
    .log{
        background-color: rgba(11, 48, 38, 0.646);
        padding: 10px;
        border-radius: 20px;
        backdrop-filter: blur(5px);
    }
    .login{
        position: fixed;
        z-index: 10;
        margin-top: -5rem;
        display: flex;
        width: max-content;
        align-items: center;
        padding: 8px 4px;
        font-size: 12px;
        border-radius: 25px;
        text-transform: uppercase;
        left: 90%;
        color: white;
        transform: translateX(-90%);
        background: linear-gradient( rgba(41, 135, 128, 0.995) 15%,   rgba(20, 97, 84, 0.963) 100%);
        img{
            margin-right: 5px;
        }
        p{
            padding-right: 5px;
        }
        div{
            display: flex;
        align-items: center;
        margin-left: 5px;
        letter-spacing: 2px;
        color: rgb(1, 1, 1);
        text-decoration: none;
        color: white;
        }
    }
    a{
        display: flex;
        align-items: center;
        margin-left: 5px;
        letter-spacing: 2px;
        color: rgb(1, 1, 1);
        text-decoration: none;
        color: white;
    }
        .nav{
            position: fixed;
            z-index: 3;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            padding: 0rem 5rem;
            display: flex;
            border-radius: 20px 20px 0 0 ;
            background: linear-gradient( rgba(38, 174, 147, 0.995) 15%,   rgba(5, 105, 102, 0.963) 100%);
            backdrop-filter: blur(5px);
            justify-content: space-around;
            p{
                font-size: 14px;
            }
        }
        li{
            list-style-type: none;
            padding: 1rem 1rem;
            margin-left: 1rem;
            padding-bottom: 0rem;
            width: max-content;
            color: white;
        }
        span{
            position: relative;
            right: -4rem;
        }
    </style>