<script setup lang="ts">
defineProps<{
  defaultWhite?: boolean;
}>();
const logos = [
  {
    name: "permissionless",
    logo: "/logos/permissionless-logo.svg",
    fullColorLogo: "/logos/permissionless-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/blockworks'
  },
  {
    name: "funding the commons",
    logo: "/logos/ftc-logo.svg",
    fullColorLogo: "/logos/ftc-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/ftc'
  },
  {
    name: "ethdenver",
    logo: "/logos/ethdenver-logo.svg",
    fullColorLogo: "/logos/ethdenver-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/ethdenver'
  },
  {
    name: "zksync",
    logo: "/logos/zksync-logo.svg",
    fullColorLogo: "/logos/zksync-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/zksync'
  },
  {
    name: "ethshanghai",
    logo: "/logos/ethshanghai-logo.svg",
    fullColorLogo: "/logos/ethshanghai-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/ethshanghai'
  },
  {
    name: "zetachain",
    logo: "/logos/zetachain-logo.svg",
    fullColorLogo: "/logos/zetachain-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/zetachain'
  },
  {
    name: "lukso",
    logo: "/logos/lukso-logo.svg",
    fullColorLogo: "/logos/lukso-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/lukso'
  },
  {
    name: "gitcoin",
    logo: "/logos/gitcoin-logo.svg",
    fullColorLogo: "/logos/gitcoin-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/gitcoin'
  },
  {
    name: "scalingx",
    logo: "/logos/scalingx-logo.svg",
    fullColorLogo: "/logos/scalingx-logo-full.svg",
    link: 'https://app.buidlbox.io/guidl/scalingx'
  },
];
</script>

<template>
  <div
    class="grid grid-cols-3 lg:flex flex-wrap items-center justify-between md:justify-center  gap-x-4 sm:gap-x-10 xl:gap-y-16 gap-y-10"
  >
    <NuxtLink :href="logo.link" target="_blank" v-for="(logo, index) in logos" :key="logo.name">
      <div class="relative group cursor-pointer">
        <div v-if="index == 0" class="absolute -top-14">
          <slot name="eyebrow" />
        </div>
        <img
          :src="defaultWhite ? logo.logo : logo.fullColorLogo"
          :alt="`${logo.name} logo`"
          class="w-full h-auto max-w-[220px] 2xl:max-w-none"
        />
        <img
          :src="defaultWhite ? logo.fullColorLogo : logo.logo"
          :alt="`${logo.name} logo`"
          class="absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-0 transition-all duration-300 w-full h-auto max-w-[220px]  2xl:max-w-none"
        />
      </div>
    </NuxtLink>
  </div>
</template>
