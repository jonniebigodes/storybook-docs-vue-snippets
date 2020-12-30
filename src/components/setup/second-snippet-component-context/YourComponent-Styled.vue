<template>
  <div>
    <styled-button
      :color="dynColor"
      :br="dynBr + 'px'"
      :pad="dynPad + 'px'"
      :bgc="dynBgc"
      @click="alertButton"
      >I am a dynamically styled button. Change the fields below!</styled-button
    >

    <br />
    <span>Text Color</span>
    <input type="color" v-model="dynColor" />
    <br />
    <span>Background Color</span>
    <input type="color" v-model="dynBgc" />
    <br />
    <span>Padding (will be set in px)</span>
    <input type="number" v-model="dynPad" />
    <br />
    <span>Border Radius (will be set in px)</span>
    <input type="number" v-model="dynBr" />
  </div>
</template>

<script>
import { StyledButton } from "./StyledComponents-Button";
export default {
  name: "my-styled-component",
  components: {
    "styled-button": StyledButton,
  },
  /* props:{
      dynColor:{
          type:String,
          default:
      },
      dynBr:{
          type:Number,
          default:10
      },
      dynPad:{
          type:Number,
          default:15
      },
      dynBgc:{
          type:String,
          default:'#4ABB00'
      }
  } */
  data() {
    return {
      dynColor: "#ffffff",
      dynBr: 10,
      dynPad: 15,
      dynBgc: "#4ABB00",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 50%;
  text-align: center;
  margin-top: 20px;
}
</style>
