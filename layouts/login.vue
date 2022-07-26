<template>
  <application-login-layout>
    <Nuxt />
  </application-login-layout>
</template>

<script>
import ApplicationLoginLayout from '@authentication/layouts/login';

export default {
  name: 'nuxt-login-layout',
  components: {
    ApplicationLoginLayout,
  },
};
</script>
