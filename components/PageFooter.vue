<script setup lang="ts">
import { ref } from "vue";

const isTrialModalOpen = ref(false);
</script>

<template>
  <div>
    <footer>
      <div class="flex flex-col gap-6 pt-10 px-[8vw] border-t border-surface">
        <div>
          <img
            src="/buidlbox-logo-horizontal.png"
            alt="buidlbox logo"
            width="138"
            height="35"
          />
        </div>
        <div
          class="sm:border-t sm:border-around-forms sm:pt-4 flex justify-between gap-4 items-center w-full flex-wrap"
        >
          <div
            class="flex gap-x-6 gap-y-2 child:text-sm child:text-on-surface-secondary flex-wrap"
          >
            <!-- <a
              class="hover:underline"
              href="https://buidlbox.zendesk.com"
              target="_blank"
              >Organize a hackathon</a
            > -->
            <a
              class="hover:underline"
              href="https://app.buidlbox.io/buy-hackathons/tiers"
              target="_blank"
              >Pricing</a
            >
            <!-- <a
              class="hover:underline"
              href="https://buidlbox.io/"
              target="_blank"
              >About</a
            > -->
            <a
              class="hover:underline"
              href="mailto:team@buidlbox.io"
              target="_blank"
              >Contact</a
            >
            <a
              class="hover:underline"
              href="https://buidlbox.zendesk.com"
              target="_blank"
              >Help center</a
            >
            <a class="hover:underline" @click="isTrialModalOpen = true"
              >Request a demo</a
            >
            <NuxtLink
              to="/privacy"
              class="hover:underline"
              target="_blank"
            >
              Privacy
            </NuxtLink>
            <NuxtLink
              to="/terms"
              class="hover:underline"
              target="_blank"
              >Terms
            </NuxtLink>
          </div>
          <div class="flex items-center gap-3">
            <a href="https://twitter.com/buidlbox" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="cursor-pointer rounded-full text-on-surface-secondary hover:text-positive transition-all w-5 h-5"
              />
            </a>
            <a href="https://discord.gg/NTRYy5V2Q9" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'discord']"
                class="cursor-pointer rounded-full text-on-surface-secondary hover:text-positive transition-all w-5 h-5"
              />
            </a>
            <a href="https://www.instagram.com/buidlbox" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="cursor-pointer rounded-full text-on-surface-secondary hover:text-positive transition-all w-5 h-5"
              />
            </a>
            <a href="https://www.linkedin.com/company/buidlbox" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="cursor-pointer rounded-full text-on-surface-secondary hover:text-positive transition-all w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>

    <RequestTrial
      :is-modal-open="isTrialModalOpen"
      @close-modal="isTrialModalOpen = false"
    />
  </div>
</template>
