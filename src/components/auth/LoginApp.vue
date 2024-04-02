<template>
    <div>
        <h1 align="center">вход</h1>
        <form class="form" @click.prevent="" action="">
            <input class="f-input" v-model="email" type="text" placeholder="email"><br>
            <input  class="f-input" v-model="password" type="password" placeholder="пароль"><br>
            <button  class="f-btn" @click="login">Войти</button>
        </form>
        {{ a }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            text: '',
            a: '',
        }
    },
    methods: {
        async login(){
            try{
            const res = await fetch("https://9e94055c9eb70cf2.mokky.dev/auth", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password
            })
            });
            const {token, data} = await res.json()
            console.log(data)
            if(res.ok){
                localStorage.setItem('token', token)
                localStorage.setItem('userInfo', JSON.stringify(data))

                localStorage.setItem('isAuth', true)

                console.log(localStorage.getItem("isAuth"))
                const {fullName} = JSON.parse(localStorage.getItem('userInfo'))
                this.a = 'es'
                setTimeout(()=>{
                   location.reload(); 
                }, 10)
                this.$router.push({name: 'profile', params: { name: fullName }} )
                
            }
        }catch(e){
            console.log(e)
        }
        }
    },
}
</script>