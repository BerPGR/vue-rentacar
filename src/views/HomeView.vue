<template>
  <div class="main-container">
    <header>
      <nav>
        <ul>
          <li v-for="(li, i) in navList" :key="i" class="btn-navbar"><router-link :to="li.to" style="text-decoration: none; color: inherit;">{{ li.text }}</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
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

<style lang="scss" scoped>
.main-container {
  min-height: 100vh;
  background-color: #0a0a0a;

  header {
    height: 80px;
    padding: 0 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d3A7C1;
    box-shadow: 0px 4px 8px #483d8b;

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
              color: rgb(0, 0, 0);
            
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
}

</style>