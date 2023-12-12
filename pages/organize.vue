<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EasePack } from "gsap/EasePack";
import { ButtonType } from "~/types/button";

definePageMeta({
  layout: "new-design",
});

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
  <img
    src="/images/background-gradient.png"
    alt="buidlbox logo"
    class="absolute -rotate-90 -top-80 left-0 right-0 m-auto"
  />
  <section class="pt-64 padding flex pb-40 relative">
    <div class="self-center justify-self-center max-w-md">
      <h1 class="section-title text-7xl pb-6">
        We grow <br /><span class="gradient-text">ecosystems</span>
      </h1>
      <p class="pb-20">
        Unlock innovation and grow developer communities through hackathons &
        bounties with buidlbox
      </p>
      <NuxtLink :href="FEATURES_URL">
        <GradientButton class="flex-shrink-0 flex-grow-0" @clicked="() => {
          mixpanel.track('Request a demo', {
            type: 'Lead',
          });
        }
          ">Request a demo</GradientButton>
      </NuxtLink>
    </div>
    <div class="relative w-full h-90">
      <img
        class="animate-grow absolute h-32 w-32 animation-delay-0  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle1.svg" alt="buidlbox logo" style="transform-origin: center;" />
      <img
        class="animate-grow absolute  h-32 w-32 animation-delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle2.svg" alt="buidlbox logo" style="transform-origin: center;" />
      <img
        class="animate-grow absolute  h-32 w-32 animation-delay-4000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle1.svg" alt="buidlbox logo" style="transform-origin: center;" />
    </div>

  </section>

  <!--Client Logos-->
  <section class="padding flex flex-wrap">
    <Logos class="slide-in-section" />
  </section>

  <!-- quote section -->
  <section class="mt-52">
    <h1
      class="section-title text-[2.5rem] max-w-[58rem] m-auto text-center leading-[3.5rem] tracking-wider"
    >
      We believe the best way to
      <span class="text-primary">grow</span> developer
      <span class="text-secondary">ecosystems</span> is through the power of
      <span class="text-tertiary">hackathons</span>.
    </h1>
  </section>

  <!-- ecosystem section -->
  <section class="mt-52">
    <div class="grid sm:grid-cols-2 gap-12 max-w-[65rem] m-auto justify-center">
      <div class="max-w-lg">
        <div class="flex items-center gap-2 mb-4">
          <span>[i]</span>
          <h4 class="section-eyebrow">Ecosystem</h4>
        </div>
        <h1 class="section-title text-6xl mb-7">
          Grow your community with the right people
        </h1>
        <p class="font-medium">
          Elevate your hackathon experience by buidling meaningful connections
          and fostering collaboration.
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="h-72 rounded-[32px] border border-surface p-8">
          <p class="mb-3 section-title text-2xl">35k buidlers worldwide</p>
          <p class="font-medium max-w-xs">
            Our community consists of buidlers from 155 countries on the
            platform.
          </p>
        </div>
        <div class="h-72 rounded-[32px] border border-surface p-8">
          <p class="mb-3 section-title text-2xl">
            Find the champions of your ecosystem
          </p>
          <p class="font-medium max-w-xs">
            Discover and source top-tier talent from our community, and fund
            cutting-edge projects built on your ecosystem by hackathon buidlers.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- tools section -->
  <section class="mt-52">
    <div
      class="relative h-full grid sm:grid-cols-2 gap-12 max-w-[65rem] m-auto justify-center"
    >
      <div class="max-w-md sticky top-40 h-fit">
        <div class="flex items-center gap-2 mb-4">
          <span>[i]</span>
          <h4 class="section-eyebrow">platform tools</h4>
        </div>
        <h1 class="section-title text-6xl mb-7">
          All the tools for engagement
        </h1>
        <p class="font-medium mb-10 max-w-sm">
          Your vision, our platform: We’ve got everything you need to
          successfully organize your hackathon and power your community.
        </p>
        <NuxtLink :href="FEATURES_URL">
          <Button
            title="Request a demo"
            class="sm:w-52"
            @clicked="
              () => {
                mixpanel.track('Request a demo', {
                  type: 'Lead',
                });
              }
            "
          />
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5"
        >
          <p class="section-eyebrow text-primary">buidling</p>
          <p class="font-extrabold text-2xl">buidlbot</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div
          class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5"
        >
          <p class="section-eyebrow text-tertiary">marketing</p>
          <p class="font-extrabold text-2xl">Bounties</p>
          <p class="font-medium max-w-xs">
            Engage your developer community in between hackathons. Source great
            ideas. Solve problems. Find bugs.
          </p>
        </div>
        <div
          class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5"
        >
          <p class="section-eyebrow text-secondary">marketing</p>
          <p class="font-extrabold text-2xl">Allowlist</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div
          class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5"
        >
          <p class="section-eyebrow text-secondary">marketing</p>
          <p class="font-extrabold text-2xl">Allowlist</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div
          class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5"
        >
          <p class="section-eyebrow text-secondary">marketing</p>
          <p class="font-extrabold text-2xl">Allowlist</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- marketing section -->
  <section class="mt-52"></section>

  <div>
    <!-- <div class="grid gap-32">
      <div class="bg-hero-bg w-full bg-top bg-contain bg-no-repeat grid gap-10">
        <div
          class="flex flex-col gap-8 items-center justify-center py-24 pt-24"
        >
          <GradientTitle class="font-heading text-5xl 2xl:text-6xl"
            >Build amazing hackathons.</GradientTitle
          >
          <h3 class="2xl:text-lg max-w-md text-center text-on-surface">
            A hack-in-a-box designed to connect talented buidlers with top web3
            organizations to buidl a better web.
          </h3>

          <div class="flex items-center gap-4 mt-4">
            <Button
              title="Request a demo"
              :button-type="ButtonType.Secondary1"
              @click="isTrialModalOpen = true"
              class="w-52"
            />
            <a href="https://app.buidlbox.io/buy-hackathons/tiers">
              <Button title="View pricing" class="w-52" />
            </a>
          </div>
        </div>

        <Logos />
      </div>

      <div
        class="px-[10vw] bg-gradient-to-b from-dark-blue to-tertiary-surface"
      >
        <div class="flex flex-col items-center text-center gap-6">
          <h5
            class="font-heading text-xl text-around-forms font-medium uppercase"
          >
            DISCOVER OUR FEATURES
          </h5>
          <GradientTitle
            class="font-heading text-2xl xl:text-4xl font-extrabold"
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
          <GradientTitle
            class="font-heading text-2xl xl:text-4xl font-extrabold"
            >Elevate your hackathon experience</GradientTitle
          >
          <p>
            With a guidl account for your organization, you can seamlessly
            launch your hackathon in minutes – bounties too.
          </p>
          <div class="flex items-center justify-center gap-5">
            <Button
              title="Request a demo"
              @click="isTrialModalOpen = true"
              class="w-52"
            />
            <a href="https://app.buidlbox.io/buy-hackathons/tiers">
              <Button
                title="View pricing"
                :button-type="ButtonType.Secondary1"
                class="w-52"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="px-[10vw] bg-gradient-to-b from-dark-blue to-tertiary-surface"
      >
        <div class="flex flex-col items-center text-center gap-6">
          <h5
            class="font-heading text-xl text-around-forms font-medium uppercase"
          >
            HOW WE COMPARE
          </h5>
          <GradientTitle
            class="font-heading text-2xl xl:text-4xl font-extrabold"
            >Our platform goes above & beyond</GradientTitle
          >
          <p>
            With a guidl account for your organization, you can seamlessly
            launch your hackathon in minutes – bounties too.
          </p>
          <Features />
          <div class="flex items-center justify-center gap-5">
            <a href="https://app.buidlbox.io/buy-hackathons/tiers">
              <Button title="Purchase a hackathon" class="w-52" />
            </a>
            <Button
              title="Request a demo"
              :button-type="ButtonType.Secondary1"
              @click="isTrialModalOpen = true"
              class="w-52"
            />
          </div>
        </div>
      </div>
    </div>

    <RequestTrial
      :is-modal-open="isTrialModalOpen"
      @close-modal="isTrialModalOpen = false"
    /> -->
  </div></template>
