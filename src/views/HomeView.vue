<template>
  <div class="home">
    <v-catalog></v-catalog>
  </div>
</template>

<script>
// @ is an alias to /src
import vCatalog from '@/components/v-catalog.vue';

export default {
  name: 'HomeView',
  components: {
    vCatalog
  }
}
</script>
