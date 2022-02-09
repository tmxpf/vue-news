<template>
  <div>
    <section>
      <user-profile :userInfo="userInfo">
        <router-link slot="username" :to="`/user/${userInfo.user}`">
          {{ userInfo.user }}
        </router-link>
        <template slot="time">
          {{ `posted ${userInfo.time_ago}` }}
        </template>
      </user-profile>
      
      <p>{{ userInfo.title }}</p>
    </section>
    <section>
      <div v-html="userInfo.content" />
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  created() {
    const askId = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM', askId);
  },
  computed: {
    userInfo() {
      return this.$store.state.item;
    }
  },
  components: {
    UserProfile,
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>