<script setup lang="ts">
import { CodeBracketIcon } from "@heroicons/vue/20/solid";
import { UsersIcon } from "@heroicons/vue/24/outline";
import { PublishedHackathon } from "~/types/hackathon";

const props = defineProps<{
  hackathon: {
    hackathonId: string;
    hackathonName: string;
    sponsor: string;
    sponsorLogo: string;
    hackathonLogo: string;
    prizes: string;
    projects: number;
    participants: number;
  };
}>();
</script>

<template>
  <div
    class="bg-gradient-to-r from-primary via-secondary to-tertiary rounded flex items-center justify-center"
  >
    <div class="w-full h-full p-[1px] rounded">
      <div
        class="bg-background py-6 px-4 flex flex-col justify-between gap-10 rounded"
      >
        <div class="flex items-center gap-5">
          <img
            :src="hackathon.hackathonLogo"
            class="rounded-full w-[90px] h-[90px] flex-shrink-0"
          />

          <div class="flex flex-col gap-4">
            <h1 class="font-bold xl:text-lg text-on-surface !leading-tight">
              {{ hackathon.hackathonName }}
            </h1>
            <div class="flex items-center gap-2">
              <img
                :src="hackathon.sponsorLogo"
                class="rounded-full w-[24px] h-[24px]"
              />
              <h3
                class="text-xs 2xl:text-sm text-on-surface-tertiary font-semibold"
              >
                {{ hackathon.sponsor }}
              </h3>
            </div>
          </div>
        </div>
        <div class="flex gap-2 justify-between">
          <div class="flex gap-3">
            <img
              src="/winner-cup.svg"
              alt="winner cup icon"
              width="14"
              height="14"
              class="max-w-[1rem] max-h-[1rem]"
            />
            <div class="flex flex-col gap-2">
              <p class="text-xs 2xl:text-sm text-on-surface-tertiary font-bold">
                Prizes
              </p>
              <p class="text-xs font-bold text-secondary">
                ${{ hackathon.prizes }}+
              </p>
            </div>
          </div>
          <div class="flex gap-3">
            <CodeBracketIcon class="text-on-surface w-4 h-4" />
            <div class="flex flex-col gap-2">
              <p class="text-xs 2xl:text-sm text-on-surface-tertiary font-bold">
                Projects
              </p>
              <p class="text-xs font-bold text-secondary">
                {{ hackathon.projects }}
              </p>
            </div>
          </div>
          <div class="flex gap-3">
            <UsersIcon class="text-on-surface w-4 h-4" />
            <div class="flex flex-col gap-2">
              <p class="text-xs 2xl:text-sm text-on-surface-tertiary font-bold">
                Participants
              </p>
              <p class="text-xs font-bold text-secondary">
                {{ hackathon.participants }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
