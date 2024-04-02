<template>
    <div>
        <h1 align="center">Регистрация</h1>
        <form class="form" @click.prevent=""  action="">

            <input class="f-input" v-model="name" type="text" placeholder="имя"><br>
           <span >{{ errors.errName }}</span> 
            <input class="f-input" v-model="email" type="text" placeholder="email"><br>
            <span> {{ errors.email }}</span>
            <input class="f-input" v-model="password" type="password" placeholder="пароль"><br>
            <span>{{ errors.pswrd }}</span>
            <button class="f-btn"  @click="registerUser"> Зарегистрироваться</button>
        </form>
   
   
    </div>
</template>

<script>
export default{
    data(){
        return{
            name: '',
            email: '',
            password: '',
            text: '',
            errors: {},
        }
    },
    methods: {
        registerUser() {
                this.errors = {};

                if (!this.name) {
                    this.errors['errName'] = 'Имя пользователя обязательно';
                }
                
                if (!this.email) {
                    this.errors['email'] = 'Email обязателен';
                    // console.log(this.errors['email'])
                }

                if (!this.password) {
                    this.errors['pswrd'] = 'Пароль обязателен';
                }else{
                    this.Auth()}
                
            },
        async Auth(){ 
            try{
                const res = await fetch("https://9e94055c9eb70cf2.mokky.dev/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: this.name,
                    email: this.email,
                    password: this.password
                })
            
                });
                console.log(res.status)
                if(res.ok){
                    this.$router.push('login')
            }}catch(e){
                console.log(e)
            }
        }
    },
   
}
</script>


<style lang="scss" >

.form {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
      margin: 1rem auto;
      span{
            color: red;
            font-size: 12px;
        }
    }
    .f-input {
      width: 100%;
      padding: 10px;
      margin: 8px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 25px;
    }
    .f-btn {
      background-color: #4b9b79;
      color: white;
      margin-top: 2rem;
      padding: 12px 20px;
      margin-left: 50% ;
      translate: -50%;
      border: none;
      border-radius: 24px;
      cursor: pointer;
      width: 50%;
    }
    .f-btn:hover {
      background-color: #36a13b;
    }
</style>