<script setup lang="ts">
useHead({
  title: "buidlbox",
  meta: [{ name: "description", content: "Hackathons made easy." }],
  script: [
    {
      children: `
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','oj5bg');`,
    },
  ],
});
useSeoMeta({
  title: "buidlbox",
  ogTitle: "buidlbox",
  twitterTitle: "buidlbox",
  description: "Hackathons made easy.",
  ogDescription: "Hackathons made easy.",
  twitterDescription: "Hackathons made easy.",
  twitterCard: "summary_large_image",
  ogImage: "https://buidlbox.io/images/buidlbox-twitter-card.png",
  twitterImage: "https://buidlbox.io/images/buidlbox-twitter-card.png",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
