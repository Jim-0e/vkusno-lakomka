<template>
    <div>
        <div  class="card">
            <img width="100%" :src=" tovars.imgUrl"  class="card-img">
        <div class="card-content">
            <h1 align="center" > {{ tovars.title }} </h1>
            <p class="card-description">{{tovars.description }}</p>
            <p class="card-price">{{ tovars.price }} Руб.</p>
            </div>
        </div> 
    </div>
</template>


<script >
export default{
    data(){
        return{
            tovars: []
        }
    },
    mounted(){
        this.getTovatID()
    },
    methods:{
        async getTovatID(){
            const id = this.$route.params.id
            try {
                const response = await fetch(`https://9e94055c9eb70cf2.mokky.dev/tovars/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    this.tovars = data;
                } else{
                    console.error('Ошибка при загрузке данных');
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных', error);
            }
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
</style>