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

const testimonialsRow1 = [
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
  {
    avatar: "",
    role: "organiser",
    name: "Joen, ceo buidlbox",
    testimonial: "“Loved working with the buidlbox team! “",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
];
const testimonialsRow2 = [
  {
    avatar: "",
    role: "organiser",
    name: "Joen, ceo buidlbox",
    testimonial: "“Loved working with the buidlbox team! “",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
];

const testimonialsRow3 = [
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
  {
    avatar: "",
    role: "buidler",
    name: "Johnny john",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great “",
  },
  {
    avatar: "",
    role: "organiser",
    name: "Joen, ceo buidlbox",
    testimonial: "“Loved working with the buidlbox team! “",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
];

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

const buidlboxTeam = [
  {
    name: "Emma Clarkson",
    eyebrow: "Lead Developer",
    image: "test1",
  },
  {
    name: "John Doe",
    eyebrow: "Marketing Strategist",
    image: "test2",
  },
  {
    name: "Sophia Turner",
    eyebrow: "Product Manager",
    image: "test3",
  },
  {
    name: "Liam Smith",
    eyebrow: "Creative Director",
    image: "test4",
  },
  {
    name: "Isabella Johnson",
    eyebrow: "Financial Analyst",
    image: "test5",
  },
  {
    name: "Oliver Williams",
    eyebrow: "UX Designer",
    image: "test1",
  },
  {
    name: "Mia Brown",
    eyebrow: "HR Coordinator",
    image: "test2",
  },
  {
    name: "Lucas Jones",
    eyebrow: "IT Specialist",
    image: "test3",
  },
  {
    name: "Amelia Garcia",
    eyebrow: "Sales Executive",
    image: "test4",
  },
  {
    name: "Ethan Martinez",
    eyebrow: "Operations Manager",
    image: "test5",
  },
];


const getSlideIndex = ($slide: Element) => {
  const slides = [...document.getElementsByClassName(".carousel__item")];
    return slides.indexOf( $slide );
}

const activateSlide = ($slide: Element) => {
    if (!$slide) return;
    const $slides = [...document.getElementsByClassName(".carousel__item")];;
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute( 'data-active', "true" );
    $slide.focus();
}
const selectSlide = (e: any) => {
  console.log("here")
    const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 5 : 8;
    const $slide = e.target.closest( ".carousel__item" );
    const index = getSlideIndex( $slide );
    // if ( index < 3 || index > max ) return;
    // if ( index === max ) nextSlide();
    // if ( index === 3 ) prevSlide();
    activateSlide($slide);
}
</script>

<template>
  <section class="pt-64 padding flex pb-40 relative">
    <img src="/images/background-gradient.png" alt="buidlbox logo"
      class="absolute -rotate-90 -top-[600px] w-[800px] z-40 left-0 right-0 m-auto" />
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
    <div class="relative w-full h-90 z-0">
      <img
        class="animate-grow absolute h-32 z-0 w-32 animation-delay-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle1.svg" alt="buidlbox logo" style="transform-origin: center" />
      <img
        class="animate-grow absolute z-0 h-32 w-32 animation-delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle2.svg" alt="buidlbox logo" style="transform-origin: center" />
      <img
        class="animate-grow absolute z-0 h-32 w-32 animation-delay-4000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/images/circle1.svg" alt="buidlbox logo" style="transform-origin: center" />
    </div>
  </section>

  <!--Client Logos-->
  <section class="padding flex flex-wrap">
    <Logos class="slide-in-section" />
  </section>

  <!-- quote section -->
  <section class="mt-52">
    <h1 class="section-title text-[2.5rem] max-w-[58rem] m-auto text-center leading-[140%] tracking-wider">
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
        <h1 class="section-title text-6xl mb-7 leading-[120%]">
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
    <div class="relative h-full grid sm:grid-cols-2 gap-12 max-w-[65rem] m-auto justify-center">
      <div class="max-w-md sticky top-40 h-fit">
        <div class="flex items-center gap-2 mb-4">
          <span>[i]</span>
          <h4 class="section-eyebrow">platform tools</h4>
        </div>
        <h1 class="section-title text-6xl mb-7 leading-[120%]">
          All the tools for engagement
        </h1>
        <p class="font-medium mb-10 max-w-sm">
          Your vision, our platform: We’ve got everything you need to
          successfully organize your hackathon and power your community.
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
      <div class="flex flex-col gap-4">
        <div class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5">
          <p class="section-eyebrow text-primary">buidling</p>
          <p class="font-extrabold text-2xl">buidlbot</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5">
          <p class="section-eyebrow text-tertiary">marketing</p>
          <p class="font-extrabold text-2xl">Bounties</p>
          <p class="font-medium max-w-xs">
            Engage your developer community in between hackathons. Source great
            ideas. Solve problems. Find bugs.
          </p>
        </div>
        <div class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5">
          <p class="section-eyebrow text-secondary">marketing</p>
          <p class="font-extrabold text-2xl">Allowlist</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5">
          <p class="section-eyebrow text-secondary">marketing</p>
          <p class="font-extrabold text-2xl">Allowlist</p>
          <p class="font-medium max-w-xs">
            We have a full judging platform that is simple and very effective
          </p>
        </div>
        <div class="h-52 rounded-[32px] border border-surface p-8 flex flex-col gap-2.5">
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
  <section class="mt-52">
    <div class="flex items-center justify-center flex-col sm:gap-16 gap-28 max-w-8xl px-6">
      <div class="child:mx-auto">
        <div class="flex items-center gap-2 mb-4 justify-center">
          <span>[i]</span>
          <h4 class="section-eyebrow leading-[120%]">Marketing</h4>
        </div>
        <h1 class="section-title text-6xl mb-7 text-center max-w-xl">
          A full stack marketing strategy
        </h1>
        <p class="font-medium text-center max-w-md">
          We’re here to navigate your marketing journey — comprehensive support
          tailored to your unique needs.
        </p>
      </div>
      <div class="flex items-center justify-center flex-wrap gap-4">
        <div class="rounded-[32px] border border-surface p-10">
          <div class="flex items-center justify-center w-[3.75rem] h-[3.75rem]">
            <font-awesome-icon :icon="['fab', 'discord']"
              class="!w-[3.75rem] !h-[3.75rem] text-red-200 text-transparent bg-clip-text !bg-gradient-to-br from-primary via-secondary to-tertiary hover:bg-positive transition-all" />
          </div>
        </div>

        <MarketingCard type="tertiary"><template v-slot:eyebrow>discord</template><template v-slot:title>Discord <br />
            bot</template></MarketingCard>
        <MarketingCard type="secondary"><template v-slot:eyebrow>planner</template><template v-slot:title>Schedule
            <br />planning</template></MarketingCard>
        <div class="rounded-[32px] border border-surface p-10">
          <div class="flex items-center justify-center w-[3.75rem] h-[3.75rem]">
            <font-awesome-icon :icon="['fab', 'telegram']"
              class="!w-[3.75rem] !h-[3.75rem] border border-red-500 bg-transparent bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full" />
          </div>
        </div>
        <MarketingCard type="primary"><template v-slot:eyebrow>medium</template><template v-slot:title> Blog
            posts</template></MarketingCard>
        <MarketingCard type="primary"><template v-slot:eyebrow>analytics</template><template v-slot:title>
            Marketing driven<br />
            by analytics</template></MarketingCard>
        <div class="rounded-[32px] border border-surface p-10">
          <div class="flex items-center justify-center w-[3.75rem] h-[3.75rem]">
            <font-awesome-icon :icon="['fab', 'telegram']"
              class="!w-[3.75rem] !h-[3.75rem] border border-red-500 bg-transparent bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full" />
          </div>
        </div>
        <MarketingCard type="secondary"><template v-slot:eyebrow>workshops</template><template v-slot:title>Hosting
            <br />workshops</template></MarketingCard>
        <MarketingCard type="tertiary"><template v-slot:eyebrow>emails</template><template v-slot:title>Continuos email
            <br />marketing</template></MarketingCard>
        <MarketingCard type="tertiary"><template v-slot:eyebrow>emails</template><template v-slot:title>Continuos email
            <br />marketing</template></MarketingCard>
        <MarketingCard type="tertiary"><template v-slot:eyebrow>reddit</template><template v-slot:title>Reddit pages and
            <br />engagements</template></MarketingCard>
        <div class="rounded-[32px] border border-surface p-10">
          <div class="flex items-center justify-center w-[3.75rem] h-[3.75rem]">
            <font-awesome-icon :icon="['fab', 'telegram']"
              class="!w-[3.75rem] !h-[3.75rem] border border-red-500 bg-transparent bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full" />
          </div>
        </div>
        <MarketingCard type="primary"><template v-slot:eyebrow>twitter</template><template v-slot:title>Twitter
            spaces</template></MarketingCard>
        <div class="rounded-[32px] border border-surface p-10">
          <div class="flex items-center justify-center w-[3.75rem] h-[3.75rem]">
            <font-awesome-icon :icon="['fab', 'telegram']"
              class="!w-[3.75rem] !h-[3.75rem] border border-red-500 bg-transparent bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- team section -->
  <section class="mt-52 flex flex-col items-center max-w-full overflow-hidden">

    <!--header-->
    <div class="top-40 h-fit flex flex-col items-center">
      <div class="flex items-center gap-2 mb-4">
        <span>[i]</span>
        <h4 class="section-eyebrow">the team</h4>
      </div>
      <h1 class="section-title text-6xl mb-7">Meet the buidlbox team</h1>
      <p class="font-medium mb-10 max-w-sm text-center">
        We've got your back (and your hack) at every stage, providing support
        throughout your hackathon journey.
      </p>
    </div>

    <!--Team carousel-->
    <div class=" w-screen hide-scrollbar carousel">
      <ul class="hide-scrollbar carousel__list">
        <li v-for="(item, index) in buidlboxTeam" class="carousel__item" tabindex="0" @click="selectSlide">
          <div class="carousel__box">
            <div class="carousel__image">
              <img :src="`team/${item.image}.jpg?fit=crop&h=720&q=80`" width="480" height="720">
            </div>
            <div class="carousel__contents">
              <h2 class="user__name">{{ item.name }}</h2>
              <h3 class="user__title">{{ item.eyebrow }}</h3>
            </div>
          </div>
          <!-- <div class="absolute bottom-0 left-0 bg-secondary-surface transition-all p-4 opacity-0 group-hover:opacity-100">
            <h4 class="section-eyebrow">{{ item.eyebrow }}</h4>
            <h3>{{ item.name }}</h3>
          </div>
          <img :src="`/team/${item.image}.jpg`" class="h-full w-full object-cover object-center" alt="buidlbox logo"
            style="transform-origin: center;" /> -->
         
        </li>
      </ul>
    </div>

  </section>


  <!-- testimonials section -->
  <section class="mt-52">
    <div
      class="flex items-center justify-center flex-col sm:gap-16 gap-28 px-6"
    >
      <div class="child:mx-auto max-w-8xl">
        <div class="flex items-center gap-2 mb-4 justify-center">
          <span>[i]</span>
          <h4 class="section-eyebrow leading-[120%]">Testimonials</h4>
        </div>
        <h1 class="section-title text-6xl mb-7 text-center max-w-2xl">
          Don’t take it from us
        </h1>
        <p class="font-medium text-center max-w-md">
          We've got your back (and your hack) at every stage, providing support
          throughout your hackathon journey.
        </p>
      </div>
      <div
        class="child:flex child:items-stretch child:justify-center child:gap-x-5 child:gap-y-2 flex flex-col gap-2"
      >
        <div class="overflex-x-hidden -mx-60 h-auto">
          <div
            v-for="(person, index) in testimonialsRow1"
            :key="index"
            class="rounded-[32px] border border-surface xl:px-14 sm:px-6 px-3 sm:py-8 py-4 w-[200px] md:w-[363px]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="bg-gray-400 rounded-full sm:w-[46px] sm:h-[46px] w-7 h-7"></div>
              <div>
                <p
                  class="section-eyebrow sm:mb-2 mb-1"
                  :class="{
                    'text-primary': person.role == 'buidler',
                    'text-secondary': person.role == 'sponsor',
                    'text-tertiary': person.role == 'organizer',
                  }"
                >
                  {{ person.role }}
                </p>
                <p class="sm:text-base text-xs">{{ person.name }}</p>
              </div>
            </div>
            <p class="font-extrabold xl:text-base sm:text-sm text-xs">
              {{ person.testimonial }}
            </p>
          </div>
        </div>
        <div class="">
          <div
            v-for="(person, index) in testimonialsRow2"
            :key="index"
            class="rounded-[32px] border border-surface xl:px-14 sm:px-6 px-3 sm:py-8 py-4 w-[200px] md:w-[363px]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="bg-gray-400 rounded-full sm:w-[46px] sm:h-[46px] w-7 h-7"></div>
              <div>
                <p
                  class="section-eyebrow sm:mb-2 mb-1"
                  :class="{
                    'text-primary': person.role == 'buidler',
                    'text-secondary': person.role == 'sponsor',
                    'text-tertiary': person.role == 'organizer',
                  }"
                >
                  {{ person.role }}
                </p>
                <p class="sm:text-base text-xs">{{ person.name }}</p>
              </div>
            </div>
            <p class="font-extrabold xl:text-base sm:text-sm text-xs">
              {{ person.testimonial }}
            </p>
          </div>
        </div>
        <div class="2xl:-mx-50 2xl:-ml-50 -ml-52">
          <div
            v-for="(person, index) in testimonialsRow3"
            :key="index"
            class="rounded-[32px] border border-surface xl:px-14 sm:px-6 px-3 sm:py-8 py-4 w-[200px] md:w-[363px]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="bg-gray-400 rounded-full sm:w-[46px] sm:h-[46px] w-7 h-7"></div>
              <div>
                <p
                  class="section-eyebrow sm:mb-2 mb-1"
                  :class="{
                    'text-primary': person.role == 'buidler',
                    'text-secondary': person.role == 'sponsor',
                    'text-tertiary': person.role == 'organizer',
                  }"
                >
                  {{ person.role }}
                </p>
                <p class="sm:text-base text-xs">{{ person.name }}</p>
              </div>
            </div>
            <p class="font-extrabold xl:text-base sm:text-sm text-xs">
              {{ person.testimonial }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- final CTA -->
  <section class="relative mt-52 flex flex-col items-center max-w-full overflow-hidden h-screen justify-center">
    <h1 class="section-title text-6xl mb-7 text-center">Ready to grow your community?</h1>
    <p class="font-medium mb-10 max-w-sm text-center">
      Arrange a call with us to go through the next steps!
    </p>
    <NuxtLink :href="FEATURES_URL">
      <GradientButton class="flex-shrink-0 flex-grow-0" @clicked="() => {
        mixpanel.track('Request a demo', {
          type: 'Lead',
        });
      }
        ">Request a demo</GradientButton>
    </NuxtLink>
    <img
      class="animate-grow absolute h-32 w-32 animation-delay-0 bottom-0 left-1/2 mr-80 transform -translate-x-1/2 -translate-y-1/2"
      src="/images/circle1.svg" alt="buidlbox logo" />
    <img
      class="animate-grow absolute h-32 w-32 animation-delay-2000 bottom-0 left-1/2 mr-80 transform -translate-x-1/2 -translate-y-1/2"
      src="/images/circle2.svg" alt="buidlbox logo" />
    <img
      class="animate-grow absolute h-32 w-32 animation-delay-4000 bottom-0 left-1/2 mr-80 transform -translate-x-1/2 -translate-y-1/2"
      src="/images/circle1.svg" alt="buidlbox logo" />
    <div class="absolute bottom-0 left-0 right-0 m-auto">
    </div>
  </section>

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
  </div>
</template>

<style scoped>

:root {
    --height: calc( 80vh - 50px );
    --width: 450px;
}
/* Custom class to hide the scrollbar */
.hide-scrollbar {

  /* Hide scrollbar for Chrome, Safari, and Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.carousel {
  display: grid;
  transform: translate3d(0, 0, 0.1px);
}

.carousel__list {
  display: flex;
  overflow: hidden;
  list-style: none;
  padding: 2em 0 3em;
  margin: 0;
  contain: layout;
  isolation: isolate;
}

.carousel__item {
  display: grid;
  position: relative;
  align-content: start;
  margin: 0 10px;
  padding: 0;
  flex: 1 1 10%;
  height: 526px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  transform: translate3d(0, 0, 0.1px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 15px 2px, rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  contain: layout;
  isolation: isolate;
}

.carousel__item,
.carousel__item * {
  transition: all .6s cubic-bezier(.55, .24, .18, 1);
  user-select: none;
}

.carousel__image,
.carousel__contents {
  width: 450px;
  height: auto;
}

.carousel__item:hover {
  flex-basis: 225px;
  transition: all 0.3s ease;
}

.carousel__item[data-active] {
  flex-basis: 450px;
  flex-grow: 0;
}

@media screen and (max-width: 800px) {
  .carousel__item {
    flex-basis: 15%;
  }
}

@media screen and (max-width: 600px) {

  .carousel__item {
    flex-basis: 10%;
    margin: 0 5px;
    border-radius: 8px;
    font-size: 3vw;
  }

  .carousel__item[data-active] {
    flex-basis: 45%;
    flex-grow: 0;
  }

  .carousel__item:nth-child(3),
  .carousel__item:nth-child(7) {
    flex: 0 0 10px;
  }

  .carousel__item:nth-child(2),
  .carousel__item:nth-child(8) {
    flex: 0 0 5px;
    transform: translateX(-50px);
  }

  .carousel__item:nth-child(8) {
    transform: translateX(50px);
  }

  .carousel__item:nth-child(1),
  .carousel__item:nth-child(n + 9) {
    flex: 0 0 0px;
    margin: 0;
    box-shadow: none;
    opacity: 0 !important;
  }

  .carousel__item:not(:nth-child(n + 5)) img,
  .carousel__item:nth-child(n + 7) img {
    opacity: 0.8;
  }

  .carousel__item:not(:nth-child(n + 4)) *,
  .carousel__item:nth-child(n + 7) * {
    opacity: 0 !important;
  }

}

@media screen and (min-width: 600px) {

  .carousel__item:nth-child(3),
  .carousel__item:nth-child(10) {
    flex: 0 0 10px;
  }

  .carousel__item:nth-child(2),
  .carousel__item:nth-child(11) {
    flex: 0 0 5px;
    transform: translateX(-50px);
  }

  .carousel__item:nth-child(11) {
    transform: translateX(50px);
  }

  .carousel__item:nth-child(1),
  .carousel__item:nth-child(n + 12) {
    flex: 0 0 0px;
    margin: 0;
    box-shadow: none;
    opacity: 0 !important;
  }

  .carousel__item:not(:nth-child(n + 5)) img,
  .carousel__item:nth-child(n + 9) img {
    opacity: 0.8;
  }

  .carousel__item:not(:nth-child(n + 4)) *,
  .carousel__item:nth-child(n + 10) * {
    opacity: 0 !important;
  }

}

.carousel__item img {
  display: block;
  position: absolute;
  width: 450px;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  aspect-ratio: 2/3;
  object-fit: cover;
  filter: saturate(0.2) contrast(0.75) brightness(1.1);
}

.carousel__item::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  background: linear-gradient(160deg, rgba(2, 0, 36, 0) 40%, rgba(118, 221, 136, .5) 70%, rgba(0, 255, 246, .6) 100%);
  transition: all .66s cubic-bezier(.55, .24, .18, 1);
}

.carousel__item[data-active]::after {
  transform: translateY(100%);
}

.carousel__item[data-active],
.carousel__item[data-active] * {
  opacity: 1;
  filter: none;
}

.carousel__contents {
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  min-height: 200px;
  padding: 1em;
  z-index: 2;
  background-image: radial-gradient(ellipse at 0px 0px, rgba(0, 0, 0, 0.4) 20%, transparent 50%);
  background-size: 170% 200px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel__contents .user__name {
  color: #e8eff4;
  font-size: 1.75em;
  font-weight: 600;
  letter-spacing: .8px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}

.carousel__contents .user__title {
  font-family: lexend;
  font-size: .875em;
  letter-spacing: 1.25px;
  font-weight: 500;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(270deg, rgb(67, 255, 0), rgb(0, 255, 247));
  background-clip: text;
  -webkit-background-clip: text;
  opacity: 0.85;
  text-wrap: balance;
  margin-bottom: 0.5em;
}

.carousel__contents .user__title,
.carousel__contents .user__name {
  margin: 0;
  line-height: 1.1;
  opacity: 0;
  transform: translateX(-200px);
  transition-duration: 1s;
  max-width: 18em;
}

@media screen and (max-width: 800px) {
  .carousel__item img {
    width: 225px;
  }

  .carousel__contents {
    transform: translateX(-100%) rotate(90deg);
    transform-origin: bottom right;
    align-items: end;
    justify-content: end;
    background-image: radial-gradient(ellipse at 100% 100%, rgba(0, 0, 0, .4) 0%, transparent 50%);
    background-position: -100% 100%;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: right;
  }

  [data-active] .carousel__contents {
    background-position: 100% 100%;
  }

  .carousel__contents .user__title,
  .carousel__contents .user__name {
    max-width: 70vh;
    transform: translateX(200px);
  }
}

[data-active] .carousel__contents * {
  transform: translateX(0px);
  transition-duration: 0.66s;
  opacity: 1;
}

[data-active] .carousel__contents .user__name {
  transition-delay: 0.1s;
}

[data-active] .carousel__contents .user__title {
  opacity: 0.85;
  transition-delay: 0.05s;
}
</style>