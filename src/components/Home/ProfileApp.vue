<template>
    <div>
        <div v-if="!isAuth">
            <h1 align="center">У вас еще нет профиля</h1>
            <h3 align="center">Войдите или зарегистрируетесь</h3>
            <img class="profile-img" width="100" src="/icons/none-profile.png" alt="">
        </div>
        <div v-if="isAuth">
            <div  class="card">
                <div class="card-content">
                    <h1 align="center" > {{ get.fullName }} </h1>
                    <p class="card-description">Ваш email <b>{{get.email }}</b></p>
                </div>
            </div> 
        </div>
    </div>
</template>

<script >
    export default{
        data(){
            return{
                text: '',
                user: []
            }
        },
        inject: ['user', 'isAuth'],
        mounted(){
            this.getUser()
          
        },
        methods:{
            getUser(){
                console.log(localStorage.getItem("email"))
                this.user = this.$store.state.user
            }
        },
        computed: {
            isAuth(){
                
                return localStorage.getItem('isAuth')
            }, 
            get(){
               return  JSON.parse(localStorage.getItem('userInfo'))
            }
        }
            
    }
</script>
<style scoped>
.card{
    padding: 2rem 5rem;
}

.card-price{
    font-size: 30px;
    font-weight: 700;
}
.card-description{
    line-height: 1.5;
}
.card-content{
    text-align: center;
}
.profile-img{
    display: block;
    margin: 5rem auto;
}
</style>