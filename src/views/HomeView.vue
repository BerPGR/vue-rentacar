<template>
  <div class="main-container">
    
    <div class="weekly-selector">
      <h1 style="text-decoration: underline;">Weekly popular cars</h1>
      <div class="weekly-selector-buttons">
        <button @click="() => { 
          mostSearchedSelected = true
          mostPurchasedSelected = false
          mostRentedSelected = false
        }" class="btn-weekly">Most searched</button>

        <button @click="() => { 
          mostSearchedSelected = false
          mostPurchasedSelected = true
          mostRentedSelected = false
        }" class="btn-weekly">Most purchased</button>

        <button @click="() => { 
          mostSearchedSelected = false
          mostPurchasedSelected = false
          mostRentedSelected = true
        }" class="btn-weekly">Most rented</button>
      </div>
    </div>
    
    <div v-if="mostSearchedSelected == true" class="cars-container">
      <CarComponent v-for="(car, i) in mostSearched" :key="i" :car="car"/>
    </div>

    <div v-if="mostPurchasedSelected == true" class="cars-container">
      <CarComponent v-for="(car, i) in mostPurchased" :key="i" :car="car"/>
    </div>

    <div v-if="mostRentedSelected == true" class="cars-container">
      <CarComponent v-for="(car, i) in mostRented" :key="i" :car="car"/>
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
    mostSearchedSelected: true,
    mostPurchasedSelected: false,
    mostRentedSelected: false,

    mostSearched: [
      {img: require('@/assets/imgs/tesla.png'), brand: 'Tesla', model: 'Model X', used: false, year: 2018, price: 24500.00},
      {img: require('@/assets/imgs/mustang.png'), brand: 'Ford', model: 'Mustang', used: true, year: 2018, price: 8000.00},
      {img: require('@/assets/imgs/carstobuy/eqs.png'), brand: 'Mercedes', model: 'EQS', used: false, year: 2018, price: 32000.00},
    ],

    mostPurchased: [
      {img: require('@/assets/imgs/jeep.png'), brand: 'Tesla', model: 'Model X', used: false, year: 2018, price: 24500.00},
      {img: require('@/assets/imgs/mk5.png'), brand: 'Ford', model: 'Mustang', used: true, year: 2018, price: 8000.00},
      {img: require('@/assets/imgs/carstobuy/durango.png'), brand: 'Mercedes', model: 'EQS', used: false, year: 2018, price: 32000.00},
    ],

    mostRented: [
      {img: require('@/assets/imgs/carstobuy/x7.png'), brand: 'Tesla', model: 'Model X', used: false, year: 2018, price: 24500.00},
      {img: require('@/assets/imgs/carstobuy/m4.png'), brand: 'Ford', model: 'Mustang', used: true, year: 2018, price: 8000.00},
      {img: require('@/assets/imgs/carstobuy/e-classamg.png'), brand: 'Mercedes', model: 'EQS', used: false, year: 2018, price: 32000.00},
    ]
  }),
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 80px);
  background-color: #0a0a0a;
  padding: 20px;

  .weekly-selector {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .weekly-selector-buttons {
      display: flex;
      align-items: center;

      button {
        margin: 0 12px;
        padding: 10px;
        font-weight: 500;
        background: transparent;
        outline: none !important;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        font-size: 16px;
        
        &.btn-weekly {
          border: 2px solid white;
          z-index: 1;

          &:after{
            position: absolute;
            content: "";
            width: 0;
            height: 100%;
            top: 0;
            left: 0;
            direction: rtl;
            z-index: -1;
            background: rgb(255, 255, 255);
            transition: all 0.3s ease;
          }

          &:hover {
            color: #0a0a0a;

            &:after {
              left: auto;
              right: 0;
              width: 100%;
            }
          }

          &:active {
            top: 2px;
          }
        }

        &:focus {
          background: rgb(255, 255, 255);
          color: black;
        }
      }
    }
  }

  .cars-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}

</style>