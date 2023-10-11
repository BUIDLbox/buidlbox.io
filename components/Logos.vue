<script setup lang="ts">
const logos = [
  {
    name: "permissionless",
    logo: "/logos/permissionless-logo.svg",
    fullColorLogo: "/logos/permissionless-logo-full.svg",
  },
  {
    name: "funding the commons",
    logo: "/logos/ftc-logo.svg",
    fullColorLogo: "/logos/ftc-logo-full.svg",
  },
  {
    name: "ethdenver",
    logo: "/logos/ethdenver-logo.svg",
    fullColorLogo: "/logos/ethdenver-logo-full.svg",
  },
  {
    name: "zksync",
    logo: "/logos/zksync-logo.svg",
    fullColorLogo: "/logos/zksync-logo-full.svg",
  },
  {
    name: "ethshanghai",
    logo: "/logos/ethshanghai-logo.svg",
    fullColorLogo: "/logos/ethshanghai-logo-full.svg",
  },
  {
    name: "zetachain",
    logo: "/logos/zetachain-logo.svg",
    fullColorLogo: "/logos/zetachain-logo-full.svg",
  },
  {
    name: "lukso",
    logo: "/logos/lukso-logo.svg",
    fullColorLogo: "/logos/lukso-logo-full.svg",
  },
  {
    name: "gitcoin",
    logo: "/logos/gitcoin-logo.svg",
    fullColorLogo: "/logos/gitcoin-logo-full.svg",
  },
  {
    name: "scalingx",
    logo: "/logos/scalingx-logo.svg",
    fullColorLogo: "/logos/scalingx-logo-full.svg",
  },
];
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-center gap-x-10 xl:gap-y-16 gap-y-10"
  >
    <div
      class="relative group cursor-pointer"
      v-for="logo in logos"
      :key="logo.name"
    >
      <img :src="logo.fullColorLogo" :alt="`${logo.name} logo`" />
      <img
        :src="logo.logo"
        :alt="`${logo.name} logo`"
        class="absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-0 transition-all duration-300"
      />
    </div>
  </div>
</template>
