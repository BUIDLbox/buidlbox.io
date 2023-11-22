<script setup lang="ts">

useHead({
  title: 'buidlbox',
  meta: [
    { name: 'description', content: 'Hackathons made easy.' }
  ],
})
useSeoMeta({
  title: 'buidlbox',
  ogTitle: 'buidlbox',
  twitterTitle: 'buidlbox',
  description: 'Hackathons made easy.',
  ogDescription: 'Hackathons made easy.',
  twitterDescription: 'Hackathons made easy.',
  twitterCard: 'summary_large_image',
  ogImage: 'https://buidlbox.io/images/buidlbox-twitter-card.png',
  twitterImage: 'https://buidlbox.io/images/buidlbox-twitter-card.png',

})
</script>



<template>
  <NuxtLayout>
    <Header />
    <NuxtPage />
    <PageFooter />
  </NuxtLayout>
</template>
