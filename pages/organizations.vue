<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EasePack } from "gsap/EasePack";
import { ButtonType } from "~/types/button";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack);

const isTrialModalOpen = ref(false);

const carouselTags = [
  { name: "Guidl dashboard", imgSrc: "/carouselTags/guidl-dashboard.png" },
  { name: "Hackathon setup wizard", imgSrc: "/buidlbox-user-dashboard.png" },
  { name: "Manage challenges", imgSrc: "" },
  { name: "Personalized landing page", imgSrc: "" },
  { name: "Invite co-sponsors & judges", imgSrc: "" },
  { name: "Manage event calendar", imgSrc: "" },
  { name: "Review submissions", imgSrc: "" },
  { name: "Judging platform", imgSrc: "" },
  { name: "Announce winners", imgSrc: "" },
  { name: "Metrics & data", imgSrc: "" },
];
const selectedCarouselTag = ref<{ name: string; imgSrc: string }>(
  carouselTags[0]
);
</script>

<template>
  <div>
  <div class="grid gap-32">
    <div class="bg-hero-bg w-full bg-top bg-contain bg-no-repeat grid gap-10">
      <div class="flex flex-col gap-8 items-center justify-center py-24 pt-24">
        <GradientTitle class="font-heading text-5xl 2xl:text-6xl"
          >Build amazing hackathons.</GradientTitle
        >
        <h3 class="2xl:text-lg max-w-md text-center text-on-surface">
          A hack-in-a-box designed to connect talented buidlers with top web3
          organizations to buidl a better web.
        </h3>

        <div class="flex items-center gap-4 mt-4">
          <Button title="Request a demo" :button-type="ButtonType.Secondary1" @click="isTrialModalOpen = true"/>
        </div>
      </div>

      <Logos />
    </div>

    <div class="px-[10vw] bg-gradient-to-b from-dark-blue to-tertiary-surface">
      <div class="flex flex-col items-center text-center gap-6">
        <h5
          class="font-heading text-xl text-around-forms font-medium uppercase"
        >
          DISCOVER OUR FEATURES
        </h5>
        <GradientTitle class="font-heading text-2xl xl:text-4xl font-extrabold"
          >Hackathons made easy, on one seamless platform</GradientTitle
        >
        <div class="flex items-center justify-center flex-wrap gap-2">
          <div
            @click="selectedCarouselTag = carouselTag"
            v-for="carouselTag in carouselTags"
            :key="carouselTag.name"
            class="px-5 py-2.5 rounded-full border border-primary text-on-surface text-sm font-bold cursor-pointer hover:opacity-70 transition-all"
            :class="{
              'bg-primary': selectedCarouselTag.name == carouselTag.name,
            }"
          >
            {{ carouselTag.name }}
          </div>
        </div>
        <div>
          <img
            :src="selectedCarouselTag.imgSrc"
            :alt="selectedCarouselTag.name"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col items-center text-center gap-6">
        <h5
          class="font-heading text-xl text-around-forms font-medium uppercase"
        >
          WHY CHOOSE BUIDLBOX?
        </h5>
        <GradientTitle class="font-heading text-2xl xl:text-4xl font-extrabold"
          >Elevate your hackathon experience</GradientTitle
        >
        <p>
          With a guidl account for your organization, you can seamlessly launch
          your hackathon in minutes – bounties too.
        </p>
        <div class="flex items-center justify-center gap-5">
          <Button title="Request a demo" @click="isTrialModalOpen = true" />
          <Button title="View pricing" :button-type="ButtonType.Secondary1" />
        </div>
      </div>
    </div>

    <div class="px-[10vw] bg-gradient-to-b from-dark-blue to-tertiary-surface">
      <div class="flex flex-col items-center text-center gap-6">
        <h5
          class="font-heading text-xl text-around-forms font-medium uppercase"
        >
          HOW WE COMPARE
        </h5>
        <GradientTitle class="font-heading text-2xl xl:text-4xl font-extrabold"
          >Our platform goes above & beyond</GradientTitle
        >
        <p>
          With a guidl account for your organization, you can seamlessly launch
          your hackathon in minutes – bounties too.
        </p>
        <Features />
        <div class="flex items-center justify-center gap-5">
          <Button title="Purchase a hackathon" />
          <Button title="Request a demo" :button-type="ButtonType.Secondary1" @click="isTrialModalOpen = true" />
        </div>
      </div>
    </div>
  </div>

  <RequestTrial
    :is-modal-open="isTrialModalOpen"
    @close-modal="isTrialModalOpen = false"
  />
</div>
</template>
