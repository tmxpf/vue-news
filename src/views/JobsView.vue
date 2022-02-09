<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import listMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [listMixin],
  // created() {
  //   bus.$emit('start:spinner');

  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
  //       .then(() => bus.$emit('end:spinner'))
  //       .catch((error) => console.log(error));
  //   }, 2000);
  // },
}
</script>