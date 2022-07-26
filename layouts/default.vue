<template>
  <application-default-layout>
    <Nuxt :key="$route.fullPath" />

    <!-- <template #side-view>
      <Nuxt
        name="side-view"
      />
    </template> -->
  </application-default-layout>
</template>

<script>
import ApplicationDefaultLayout from '@core/layouts/default';

export default {
  name: 'nuxt-default-layout',
  components: {
    ApplicationDefaultLayout,
  },
};
</script>
