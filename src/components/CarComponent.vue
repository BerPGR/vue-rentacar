<template>
  <div class="container">
    <div class="car-container">
        <img :src="car.img" class="car-img" alt="">
    </div>
    <div class="info-container">
        <div class="car-info">
                <p :style="{ color: '#800080', fontWeight: 'bold', fontSize: '24px', fontStyle: 'italic'}">{{ car.brand }} <span :style="{color: 'white', fontWeight: 'normal', fontSize: '20px', fontStyle: 'normal'}">{{ car.model }}</span></p>
                <p :style="{ margin: '6px 0'}" v-if="car.used == false">New</p>
                <p :style="{ margin: '6px 0'}" v-else>Used</p>
                <p :style="{ color: '#800080', fontSize: '24px', fontWeight: 'bold'}">{{ car.year }}</p>
        </div>
        <div class="cta-info">
            <p>${{ car.price }},00</p>
            <button @click="carClick">VER CARRO</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'CarComponent',
props: {
    car: Object
},
methods: {
    carClick() {
        this.$router.push('/contact')
    }
}

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    .car-container {
        width: 300px;
        height: 220px;

        .car-img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }

    .info-container {
        width: 300px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        color: white;

        .cta-info {

            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                margin-right: 10px;
                font-size: 20px;
            }

            button {
                margin-left: 10px;
                width: 100%;
                padding: 10px;
                background-color: #800080;
                color: white;
                font-weight: 600;
                border: 2px solid white;
                cursor: pointer;
            }
        }

        
    }
}

</style>