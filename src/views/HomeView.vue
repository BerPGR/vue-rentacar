<template>
  <div class="main-container">
    <div class="cars-container" >
      <CarComponent v-for="(car, i) in carrosInicio" :key="i" :car="car"/>
    </div>
  </div>
</template>

<script>
import CarComponent from '../components/CarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    CarComponent
  },
  data: () => ({
    carrosInicio: [
      {img: require('@/assets/imgs/tesla.png'), brand: 'Tesla', model: 'Model X', used: false, year: 2018},
      {img: require('@/assets/imgs/mustang.png'), brand: 'Ford', model: 'Mustang', used: false, year: 2018},
      {img: require('@/assets/imgs/carstobuy/eqs.png'), brand: 'Mercedes', model: 'EQS', used: false, year: 2018},
      {img: require('@/assets/imgs/mk5.png'), brand: 'Toyota', model: 'MK 5', used: false, year: 2018},
      {img: require('@/assets/imgs/carstobuy/hellcat.png'), brand: 'Dodge', model: 'Hellcat', used: false, year: 2018},
      {img: require('@/assets/imgs/carstobuy/m4.png'), brand: 'BMW', model: 'M4', used: false, year: 2018},
      {img: require('@/assets/imgs/carstobuy/fpace.png'), brand: 'Jaguar', model: 'F Pace', used: false, year: 2018},
      {img: require('@/assets/imgs/carstobuy/RS6.png'), brand: 'Audi', model: 'RS 6', used: false, year: 2018},
    ]
  })
}
</script>

<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 80px);
  background-color: #0a0a0a;
  padding: 20px;

  .cars-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}

</style>