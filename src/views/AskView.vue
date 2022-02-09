<template>
  <div>
    <list-item />
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import listMixin from '../mixins/ListMixin.js';

export default {
  // computed: {
  //   ...mapGetters([
  //     'fetchAsk'
  //   ]),
  // },
  // created() {
  //   bus.$emit('start:spinner');

  //   this.$store.dispatch('FETCH_ASK')
  //     .then(() => bus.$emit('end:spinner'))
  //     .catch((error) => console.log(error));
  // },
  mixins: [listMixin],
  components: {
    ListItem,
  }
}
</script>
