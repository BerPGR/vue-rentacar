<template>
  <div class="contact-container">
    <div class="left-side-container">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <h1 :style="{ margin: '10px 0' }">Send Email</h1>
        <input :style="{ margin: '20px 0' }" type="text" placeholder="Name" v-model="nameValue">
        <input :style="{ margin: '20px 0' }" type="text" placeholder="E-mail" v-model="emailValue">
        
        <textarea :style="{ margin: '20px 0', width: '100%' }" type="textarea" placeholder="Your message" v-model="messageValue" />
        
        <button type="submit" class="btn-send">SEND</button>
      </form>
    </div>

    <div class="right-side-container">
      <h1 :style="{ marginBottom: '70px'}">Get in contact!</h1>
      <h3 :style="{ lineHeight: '2rem'}">Do you like the project?<br/>Do you want to see more?<br/>Get in touch with an E-mail!</h3>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser"


export default {
  name: 'ContactView',
  data: () => ({
    nameValue: '',
    emailValue: '',
    messageValue: '',
  }),
  mounted() {
    emailjs.init({
      publicKey: "XsgbI9cUATF-xbk5F"
    })
  },
  methods: {
    async handleSubmit() {
      console.log("Chegou aqui");
      try {
        if (this.emailValue == '' || this.nameValue == '' || this.messageValue == '') {
          alert('Missing fields in form!')
        }
        else {
          await emailjs.send("service_cvrvo4r", "template_b4n7v8m", {
            from_name: this.nameValue,
            message: this.messageValue,
            from_email: this.emailValue,
          }).then(() => {
            alert("email enviado!")
          })
        }
      }
      catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  min-height: calc(100vh - 80px);
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .left-side-container {
    background-color: rgba(10, 10, 10, 0.5);
    max-width: 500px;
    border-radius: 30px;
    padding: 30px;
    width: 100%;
    box-shadow: 0px 4px 16px #800080;
    border: 1px solid #d3A7C1;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  
      input {
        width: 100%;
        padding: 16px;
        background-color: rgba(4, 4, 4, 0.5);
        border: none;
        border-bottom: 1px solid #d3A7C1;
        color: white;

        &::placeholder {
          color: white;
        }
        
        &:focus {
          outline: none;
        }
      }

      textarea {
        width: 100%;
        padding: 16px;
        background-color: rgba(4, 4, 4, 0.5);
        border: none;
        border-bottom: 1px solid #d3A7C1;
        color: white;

        &::placeholder {
          color: white;
        }
        
        &:focus {
          outline: none;
        }
      }

      button {
        width: 50%;
        color: white;
        position: relative;
        font-weight: 700;
        background: #800080;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &.btn-send{
          border: 2px solid #d3A7C1;
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
            color: #800080;
            border: 2px solid #800080;
          
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

  .right-side-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 40px;
  }

}
</style>