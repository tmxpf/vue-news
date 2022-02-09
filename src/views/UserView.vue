<template>
  <div>
      <user-profile :userInfo="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <span slot="karma">{{ userInfo.karma }}</span>
        <span slot="time">{{ `joined ${userInfo.created}` }}</span>
      </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created: function created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  },
}
</script>

<style>

</style>