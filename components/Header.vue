<script setup lang="ts">
import { ButtonSize } from "~/types/button";
</script>
<template>
  <div class="sticky top-0 left-0 right-0 z-50">
    <div
      class="bg-background 2xl:py-5 py-3.5 px-8 flex items-center justify-between border-b border-on-surface"
    >
      <img
        src="/buidlbox-logo-horizontal.png"
        alt="buidlbox logo"
        width="110"
        height="28"
      />
      <div class="flex items-center gap-8">
        <a class="text-on-surface text-sm">Platform</a>
        <a class="text-on-surface text-sm">Solutions</a>
        <a class="text-on-surface text-sm">Customers</a>
        <a class="text-on-surface text-sm">Resources</a>
        <a class="text-on-surface text-sm">Support</a>
        <a class="text-on-surface text-sm">Company</a>
        <a class="text-on-surface text-sm">Pricing</a>
      </div>

      <div class="flex items-center gap-8">
        <a class="text-on-surface text-sm">Launch app –> </a>
        <Button title="Organize hackathons" :size="ButtonSize.Small" />
      </div>
    </div>
  </div>
</template>
