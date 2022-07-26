<template>
  <application-admin-layout>
    <Nuxt />

    <template #side-view>
      <Nuxt
        name="side-view"
      />
    </template>
  </application-admin-layout>
</template>

<script>
import ApplicationAdminLayout from '@core/layouts/admin';

export default {
  name: 'nuxt-admin-layout',
  components: {
    ApplicationAdminLayout,
  },
};
</script>
