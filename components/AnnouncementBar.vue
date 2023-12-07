<script setup lang="ts">
import { Announcement } from "~/api";

defineProps<{
  announcements: Announcement[];
  isGetAnnouncementsLoading: boolean;
}>();
</script>

<template>
  <div class="bg-secondary py-2 overflow-hidden w-screen relative min-h-[44px]">
    <div class="flex items-center justify-center w-full py-1">
      <ClientOnly>
        <div v-if="isGetAnnouncementsLoading" />
        <Vue3Marquee
          pauseOnHover
          :clone="true"
          v-else-if="announcements && announcements.length > 0"
        >
          <a
            :href="announcement.link"
            v-for="(announcement, index) of announcements"
            :key="index"
            class="3xl:text-base text-sm text-center text-black font-bold whitespace-nowrap mr-12 lg:mr-16"
            :class="{
              'cursor-default': !announcement.link,
            }"
          >
            {{ announcement.message }}
          </a>
        </Vue3Marquee>
        <button
          v-else
          @click="$emit('openNewsletterModal')"
          class="text-center font-heading uppercase font-bold tracking-widest text-surface hover:opacity-85 transition-opacity"
        >
          Get our latest hack updates
        </button>
      </ClientOnly>
    </div>
  </div>
</template>
