<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li v-for="(li, i) in navList" :key="i" class="btn-navbar">
            <router-link :to="li.to" style="text-decoration: none; color: inherit;">{{ li.text }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList:[
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Buy',
          to: '/buy'
        },
        {
          text: 'Rent',
          to: '/rent'
        },
        {
          text: 'Contact',
          to: '/contact'
        }
      ],
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

header {
  position: relative;
  height: 80px;
  padding: 0 20px;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #d3A7C1;
  box-shadow: 0px 4px 12px #800080;

  nav {

    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      
      li {
        padding: 10px;
        font-weight: 500;
        background: transparent;
        outline: none !important;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;

        &.btn-navbar {
          border: 2px solid rgb(255, 255, 255);
          z-index: 1;
          color: white;
          margin-left: 12px;

            &:after {
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
      }
    }
  }
}
</style>
