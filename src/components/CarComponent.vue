<template>
  <div class="container">
    <div class="car-container">
        <img :src="car.img" class="car-img" alt="">
    </div>
    <div class="info-container">
        <div class="car-info">
            <div class="car-info-left">
                <p :style="{ color: '#800080', fontWeight: 'bold', fontSize: '24px'}">{{ car.brand }}</p>
                <p>{{ car.model }}</p>
            </div>
            <div class="car-info-right">
                <p v-if="car.used == false">Used</p>
                <p v-else>New</p>
                <p :style="{ color: '#800080', fontSize: '24px', fontWeight: 'bold'}">{{ car.year }}</p>
            </div>
        </div>
        <button>VER CARRO</button>
    </div>
  </div>
</template>

<script>
export default {
name:'CarComponent',
props: {
    car: Object
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
        padding: 20px;
        width: 300px;
        height: 220px;
        border: 2px solid rgba(32,32,32);

        .car-img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }

    .info-container {
        width: 300px;
        height: 150px;
        background: rgba(32,32,32);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: white;

        .car-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        button {
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

</style>