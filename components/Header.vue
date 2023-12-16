<script setup lang="ts">
import { ButtonSize, ButtonType } from "~/types/button";
</script>

<template>
  <div class="sticky top-0 left-0 right-0 z-50">
    <div
      class="bg-background py-3 sm:px-8 px-3 flex items-center border-b border-on-surface sm:gap-8 gap-4"
    >
      <NuxtLink href="/" class="flex sm:flex-1 sm:flex-grow w-fit">
        <img
          src="/buidlbox-logo-horizontal.png"
          alt="buidlbox logo"
          width="110"
          height="28"
          class="sm:w-[110px] sm:h-[28px] w-[70px] h-auto"
        />
      </NuxtLink>

      <!-- <div class="justify-center items-center gap-8 mx-auto sm:flex hidden">
       <NuxtLink class="text-on-surface text-sm" href="/organizations#features"
          >Features</NuxtLink
        > 
        <NuxtLink
          href="https://app.buidlbox.io/buy-hackathons/tiers"
          class="text-on-surface text-sm "
          >Pricing</NuxtLink
        >
         <NuxtLink class="text-on-surface text-sm">About Us</NuxtLink>
        <NuxtLink
          href="https://medium.com/buidlbox"
          class="text-on-surface text-sm"
          >Blog</NuxtLink
        > 
      </div> -->

      <div class="flex flex-1 flex-grow items-center justify-end gap-4">
        <NuxtLink href="https://app.buidlbox.io">
          <Button
            title="Launch app 🚀"
            :button-type="ButtonType.Secondary1"
            :size="ButtonSize.XSmall"
            class="md:hidden"
          />
          <Button
            title="Launch app 🚀"
            :button-type="ButtonType.Secondary1"
            class="md:flex hidden"
          />
        </NuxtLink>
        <!-- <NuxtLink href="https://app.buidlbox.io/buy-hackathons/tiers">
          <Button
            title="Organize hackathons"
            :size="ButtonSize.XSmall"
            class="md:hidden"
          />
          <Button title="Organize hackathons" class="md:flex hidden" />
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>
