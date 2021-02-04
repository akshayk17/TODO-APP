<template>
  <div class="home">
    <h1>This is home page.</h1>
    <h2>{{name}}</h2>
    <card />
   </div>
</template>

<script>
import card from '../components/card'
export default {
  name: 'Home',
  components: {
    card
  },
  data () {
    return {
      name: 'Akshay Kumar'
    }
  }
}
</script>
