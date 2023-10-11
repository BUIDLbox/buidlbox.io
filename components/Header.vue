<script setup lang="ts">
import { ButtonType } from "~/types/button";
</script>

<template>
  <div class="sticky top-0 left-0 right-0 z-50">
    <div
      class="bg-background py-5 px-8 flex items-center border-b border-on-surface"
    >
      <NuxtLink href="/" class="flex flex-1 flex-grow">
        <img
          src="/buidlbox-logo-horizontal.png"
          alt="buidlbox logo"
          width="110"
          height="28"
        />
      </NuxtLink>

      <div class="flex justify-center items-center gap-8 mx-auto">
        <NuxtLink class="text-on-surface text-sm" href="/organizations#features"
          >Features</NuxtLink
        >
        <NuxtLink
          href="https://app.buidlbox.io/buy-hackathons/tiers"
          class="text-on-surface text-sm"
          >Pricing</NuxtLink
        >
        <NuxtLink class="text-on-surface text-sm">About Us</NuxtLink>
        <NuxtLink
          href="https://medium.com/buidlbox"
          class="text-on-surface text-sm"
          >Blog</NuxtLink
        >
      </div>

      <div class="flex flex-1 flex-grow items-center justify-end gap-4">
        <NuxtLink href="https://app.buidlbox.io">
          <Button title="Launch app 🚀" :button-type="ButtonType.Secondary1" />
        </NuxtLink>
        <NuxtLink href="/organizations">
          <Button title="Organize hackathons" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
