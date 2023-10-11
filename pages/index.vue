<script setup lang="ts">
import { ButtonType } from "~/types/button";
import { testimonials } from "~/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EasePack } from "gsap/EasePack";
import {
  Announcement,
  Metrics,
  getAnnouncementsAPI,
  getMetricsAPI,
  newsletterSubscribeAPI,
} from "../api";
import buidlerLottie3 from "~/assets/lottie/03-flex.json";
import buidlerLottie1 from "~/assets/lottie/01-hack.json";
import buidlerLottie2 from "~/assets/lottie/02-gm.json";
import timelineLottie from "~/assets/lottie/04-roadmap.json";
import { getErrorMessage } from "~/utils";
import { Mixpanel } from "mixpanel-browser";
import MiniProgress from "~/components/MiniProgress.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack);
const metrics = ref<Metrics[]>();
const announcements = ref<Announcement[]>();
const mixpanel = inject("mixpanel") as Mixpanel;
const animationFrameId = ref();
const progress = ref(0);
const startTime = ref();
const elapsedPauseTime = ref(0);
const requireReset = ref(true);
const INTERVAL_DURATION = 7000;

onMounted(async () => {
  nextTick(() => {
    const slideInSections = gsap.utils.toArray(".slide-in-section");
    slideInSections.forEach((section: any) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 5,
        scrollTrigger: {
          trigger: section,
          scrub: 1.2,
          end: "center center",
        },
      });
    });

    const blogImages = gsap.utils.toArray(".blog-image");
    blogImages.forEach((img: any) => {
      gsap.set(img, { transformPerspective: 500 });
      gsap.from(img, {
        opacity: 0,
        transformOrigin: "50% 50%",
        rotateY: 180,
        scale: 0.5,
        duration: 2.5,
        scrollTrigger: {
          trigger: img,
        },
      });
    });
  });

  const metricsData = await getMetricsAPI();
  metrics.value = metricsData.data?.data;

  const announcementData = await getAnnouncementsAPI();
  announcements.value = announcementData.data?.data;
});
onMounted(() => {
  slider1W.value = slideRef.value?.scrollY;
});
onMounted(() => {
  setTabSwitchInterval();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId.value);
});

const hackathons = [
  {
    hackathonId: "1",
    hackathonName: "BUIDLEra",
    sponsor: "zkSync Era",
    sponsorLogo: "/zksync-logo.jpg",
    hackathonLogo: "/zksync-logo.jpg",
    prizes: "42.000",
    projects: 55,
    participants: 207,
  },
  {
    hackathonId: "2",
    hackathonName: "ETHDenver 2023",
    sponsor: "ETHDenver",
    sponsorLogo: "/ethdenver-logo.jpg",
    hackathonLogo: "/ethdenver-hack-logo.png",
    prizes: "1.23M",
    projects: 426,
    participants: 972,
  },
  {
    hackathonId: "3",
    hackathonName: "Permissionless II",
    sponsor: "Blockworks",
    sponsorLogo: "/blockworks-logo.jpg",
    hackathonLogo: "/permissionless-logo.png",
    prizes: "63.500",
    projects: 53,
    participants: 153,
  },
  {
    hackathonId: "4",
    hackathonName: "Fund Public Goods",
    sponsor: "Funding the Commons",
    sponsorLogo: "funding-the-commons-logo.png",
    hackathonLogo: "fund-public-goods-logo.png",
    prizes: "99.700",
    projects: 116,
    participants: 431,
  },
];

const displayBountiesTab = ref(false);

const horizontalScrollWrapper = ref();

function getScrollAmount() {
  let racesWidth = horizontalScrollWrapper?.value.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const orgHeaderRef = ref();
const userDashboardRef = ref();

const hackathonsRef = ref(null);
watch(hackathonsRef, () => {
  if (!hackathonsRef.value) return;
  gsap.set(".hack-1", {
    opacity: 0,
    x: -150,
  });
  gsap.set(".hack-2", {
    opacity: 0,
    y: -150,
  });
  gsap.set(".hack-3", {
    opacity: 0,
    x: -150,
  });
  gsap.set(".hack-4", {
    opacity: 0,
    y: 200,
  });

  let ctx = gsap.context(() => {
    var tl = gsap
      .timeline()
      .to(".hack-1", {
        opacity: 1,
        x: 0,
        ease: "power3",
        duration: 2,
      })
      .to(
        ".hack-2",
        {
          opacity: 1,
          y: 0,
          ease: "power3",
          duration: 2,
        },
        "<20%"
      )

      .to(
        ".hack-3",
        {
          opacity: 1,
          x: 0,
          ease: "power1",
          duration: 2,
        },
        0
      )
      .to(
        ".hack-4",
        {
          opacity: 1,
          y: 0,
          ease: "power1",
          duration: 2,
        },
        0
      );

    ScrollTrigger.create({
      trigger: hackathonsRef.value,
      end: "center center",
      animation: tl,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });
  }, hackathonsRef.value); // <- scopes all selector text inside the context to this component (optional, default is document)
});
watch(userDashboardRef, () => {
  if (!userDashboardRef.value) return;
  gsap.set(userDashboardRef.value, { transformPerspective: 500 });
  var tl = gsap.timeline().to(userDashboardRef.value, {
    scrollTrigger: {
      trigger: userDashboardRef.value,
      start: "bottom 100%",
      scrub: 1.5,
      invalidateOnRefresh: true,
      // markers: true,
    },
    rotationX: -90,
    transformOrigin: "50% 0%",
    duration: 3,
    ease: "none",
    y: -40,
  });
});

const sponsorsHeader = ref();
watch(sponsorsHeader, () => {
  if (!sponsorsHeader.value) return;
  gsap.set(sponsorsHeader.value, {
    opacity: 0,
  });
  gsap.to(sponsorsHeader.value, {
    scrollTrigger: {
      trigger: sponsorsHeader.value,
      invalidateOnRefresh: true,
    },
    y: -80,
    scale: 1.4,
    duration: 1.7,
    opacity: 1,
  });
});

watch([horizontalScrollWrapper, orgHeaderRef], () => {
  if (!horizontalScrollWrapper.value || !orgHeaderRef.value) return;

  var tl = gsap
    .timeline()
    .to(horizontalScrollWrapper.value, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    })
    .to(orgHeaderRef.value, { scale: 1.05 }, 0)
    .to(
      orgHeaderRef.value,
      {
        // ease: '',
        opacity: 0,
      },
      "-=10%"
    );
  ScrollTrigger.create({
    trigger: horizontalScrollWrapper.value,
    start: "top 40%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tl,
    scrub: 1,
    invalidateOnRefresh: true,
    // markers: true,
  });
});

const target = ref(null);
const firstSlide = ref(["lorem1", "lorem2"]);
const slideRef = ref();

const slider1W = ref("");
// const getSliderW = (elementsNumber: number) => {
//   // 2xl = 1536px; sm = 640px;
//   const logoWidth = width.value < 640 ? 60 : width.value > 1536 ? 120 : 90;
//   const gap = width.value < 640 ? 1.3 : 2;
//   return `${elementsNumber * logoWidth * gap}`;
// };

onMounted(() => {
  slider1W.value = slideRef.value?.scrollY;
});

// watch(width, () => {
//   slider1W.value = getSliderW(firstSlide.value.length + 1);
// });

const email = ref("");
const isSubscribeLoading = ref(false);
const subscribedSuccessfully = ref(false);
const subscribeError = ref();
const subscribe = async (email: string) => {
  try {
    isSubscribeLoading.value = true;
    const { success, error } = await newsletterSubscribeAPI(email);
    if (!success) throw new Error(error?.message);
    subscribedSuccessfully.value = true;
  } catch (err) {
    const error = err as Error;
    console.log(err);
    console.log(typeof err);
    console.log(error.message);
    console.log(typeof error.message);
    subscribeError.value = getErrorMessage(err);
  } finally {
    isSubscribeLoading.value = false;
  }
};

const buidlerLottieRef1 = ref();
const buidlerLottieRef2 = ref();
const buidlerLottieRef3 = ref();

const playLottie = (elem: any) => {
  if (!elem) return;
  elem.setDirection("forward");
  elem.play();
};
const reverseLottie = (elem: any) => {
  if (!elem) return;
  elem.setDirection("reverse");
  elem.play();
};
const handleTabSwitch = (value: boolean) => {
  displayBountiesTab.value = value;
  elapsedPauseTime.value = 0;
  setTabSwitchInterval();
  pauseInterval();
  progress.value = 0;
  requireReset.value = false;
};
const updateProgressBar = () => {
  const elapsed = Date.now() - startTime.value + elapsedPauseTime.value;
  progress.value = (elapsed / INTERVAL_DURATION) * 100;
  if (progress.value < 100) {
    animationFrameId.value = requestAnimationFrame(updateProgressBar);
  } else {
    displayBountiesTab.value = !displayBountiesTab.value;
    elapsedPauseTime.value = 0;
    requireReset.value = true;
    setTabSwitchInterval();
  }
};
const pauseInterval = () => {
  cancelAnimationFrame(animationFrameId.value);
  elapsedPauseTime.value =
    Date.now() - startTime.value + elapsedPauseTime.value;
  animationFrameId.value = null;
  requireReset.value = false;
};
const setTabSwitchInterval = () => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
  startTime.value = Date.now();
  if (requireReset.value) {
    progress.value = 0;
  }
  animationFrameId.value = requestAnimationFrame(updateProgressBar);
};
</script>

<template>
  <div class="flex flex-col gap-32">
    <!-- hero -->
    <div class="bg-gradient-to-b from-tertiary-surface to-dark-blue from-35%">
      <div class="bg-hero-bg w-full bg-top bg-contain bg-no-repeat">
        <div
          class="bg-secondary py-2 overflow-hidden w-screen relative min-h-[44px]"
        >
          <div class="flex items-center justify-center w-full py-1">
            <ClientOnly>
              <Vue3Marquee
                pauseOnHover
                :clone="true"
                v-if="announcements && announcements.length > 0"
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
            </ClientOnly>
          </div>
        </div>

        <div class="">
          <div class="flex flex-col gap-8 items-center justify-center py-24">
            <GradientTitle class="font-heading text-5xl 2xl:text-6xl"
              >Elevate your hackathon experience.</GradientTitle
            >
            <h3 class="2xl:text-lg max-w-md text-center text-on-surface">
              Fostering collaboration between buidlers and organizations,
              powered by hackathons – all on one seamless platform.
            </h3>

            <div class="flex items-center gap-4 mt-4">
              <Button
                title="Join a hackathon"
                @clicked="
                  () => {
                    mixpanel.track('Join a hackathon', {
                      type: 'Lead',
                    });
                  }
                "
              />
              <NuxtLink to="/organizations">
                <Button
                  title="Host a hackathon"
                  :button-type="ButtonType.Secondary1"
                  @clicked="
                    () => {
                      mixpanel.track('Host a hackathon', {
                        type: 'Lead',
                      });
                    }
                  "
                />
              </NuxtLink>
            </div>
          </div>
          <div class="xl:max-w-[80vw] m-auto px-8" ref="userDashboardRef">
            <img
              src="/buidlbox-user-dashboard.png"
              alt="buidlbox user dashboard"
              width="1199"
              height="594"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- logos -->
    <div class="px-4">
      <h2
        ref="sponsorsHeader"
        class="font-heading text-on-surface-tertiary text-center text-3xl 2xl:text-4xl mb-20"
      >
        TRUSTED BY TOP ORGANIZATIONS IN WEB3 & BEYOND
      </h2>
      <Logos />
    </div>

    <!-- hackathons & bounties -->
    <div class="flex items-center xl:gap-16 gap-6 max-w-6xl m-auto w-full">
      <div class="flex flex-col gap-8 max-w-md w-full">
        <GradientTitle class="font-heading text-5xl slide-in-section"
          >Where unique challenges find creative solutions.</GradientTitle
        >
        <p class="2xl:text-lg text-on-surface slide-in-section">
          Through the power of hackathons, buidlers come together to discover
          solutions to the ecosystem's most pressing challenges – with
          opportunities for prizes, mentorship, and ongoing support from top
          organizations in web3.
        </p>
        <Button
          title="Explore hackathons"
          :button-type="ButtonType.Secondary1"
          @clicked="
            () => {
              mixpanel.track('Explore hackathons', {
                type: 'Lead',
              });
            }
          "
        />
      </div>
      <div class="w-full">
        <!-- tabs -->
        <div class="rounded-md overflow-hidden flex mb-8 w-full bg-[#142937]">
          <div
            class="w-full p-4 text-center cursor-pointer hover:text-on-surface-tertiary transition-all ease-in-out relative overflow-hidden"
            :class="{
              'font-bold bg-surface text-on-surface rounded-md':
                !displayBountiesTab,
              'text-on-surface-secondary hover:bg-[#162D3E] hover:rounded-md':
                displayBountiesTab,
            }"
            @mouseenter="pauseInterval"
            @mouseleave="setTabSwitchInterval"
            @click="() => handleTabSwitch(false)"
          >
            Hackathons
            <MiniProgress :progress="progress" v-if="!displayBountiesTab" />
          </div>
          <div
            class="w-full p-4 text-center cursor-pointer hover:text-on-surface-tertiary transition-all ease-in-out relative overflow-hidden"
            :class="{
              'font-bold bg-surface text-on-surface rounded-md':
                displayBountiesTab,
              'text-on-surface-secondary hover:bg-[#162D3E] hover:rounded-md':
                !displayBountiesTab,
            }"
            @mouseenter="pauseInterval"
            @mouseleave="setTabSwitchInterval"
            @click="() => handleTabSwitch(true)"
          >
            Bounties
            <MiniProgress :progress="progress" v-if="displayBountiesTab" />
          </div>
        </div>
        <div
          class="grid sm:grid-cols-2 gap-4"
          ref="hackathonsRef"
          v-if="!displayBountiesTab"
        >
          <HackathonCard
            v-for="(hackathon, index) in hackathons"
            :key="hackathon.hackathonId"
            :hackathon="hackathon"
            :class="`hack-${index + 1}`"
          />
        </div>
        <div v-else class="w-full grid gap-4">
          <div
            class="w-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded flex items-center justify-center"
          >
            <div class="w-full h-full p-[1px] rounded">
              <div
                class="bg-background py-2 px-4 rounded h-[100px] w-full flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="/blog-img-1.png"
                    alt=""
                    class="w-[30px] h-[30px] rounded-full"
                  />
                  <div class="flex flex-col gap-2 p-5">
                    <h2 class="font-semibold text-lg">
                      Bounty1 by
                      <span class="text-on-surface-tertiary">zksync</span>
                    </h2>
                  </div>
                </div>
                <div class="flex gap-3">
                  <img
                    src="/winner-cup.svg"
                    alt="winner cup icon"
                    width="14"
                    height="14"
                    class="max-w-[1rem] max-h-[1rem]"
                  />
                  <p class="text-xs font-bold text-secondary">$2.340</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded flex items-center justify-center"
          >
            <div class="w-full h-full p-[1px] rounded">
              <div
                class="bg-background py-2 px-4 rounded h-[100px] w-full flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="/blog-img-1.png"
                    alt=""
                    class="w-[30px] h-[30px] rounded-full"
                  />
                  <div class="flex flex-col gap-2 p-5">
                    <h2 class="font-semibold text-lg">
                      Bounty1 by
                      <span class="text-on-surface-tertiary">zksync</span>
                    </h2>
                  </div>
                </div>
                <div class="flex gap-3">
                  <img
                    src="/winner-cup.svg"
                    alt="winner cup icon"
                    width="14"
                    height="14"
                    class="max-w-[1rem] max-h-[1rem]"
                  />
                  <p class="text-xs font-bold text-secondary">$2.340</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded flex items-center justify-center"
          >
            <div class="w-full h-full p-[1px] rounded">
              <div
                class="bg-background py-2 px-4 rounded h-[100px] w-full flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="/blog-img-1.png"
                    alt=""
                    class="w-[30px] h-[30px] rounded-full"
                  />
                  <div class="flex flex-col gap-2 p-5">
                    <h2 class="font-semibold text-lg">
                      Bounty1 by
                      <span class="text-on-surface-tertiary">zksync</span>
                    </h2>
                  </div>
                </div>
                <div class="flex gap-3">
                  <img
                    src="/winner-cup.svg"
                    alt="winner cup icon"
                    width="14"
                    height="14"
                    class="max-w-[1rem] max-h-[1rem]"
                  />
                  <p class="text-xs font-bold text-secondary">$2.340</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full bg-gradient-to-r from-primary via-secondary to-tertiary rounded flex items-center justify-center"
          >
            <div class="w-full h-full p-[1px] rounded">
              <div
                class="bg-background py-2 px-4 rounded h-[100px] w-full flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="/blog-img-1.png"
                    alt=""
                    class="w-[30px] h-[30px] rounded-full"
                  />
                  <div class="flex flex-col gap-2 p-5">
                    <h2 class="font-semibold text-lg">
                      Bounty1 by
                      <span class="text-on-surface-tertiary">zksync</span>
                    </h2>
                  </div>
                </div>
                <div class="flex gap-3">
                  <img
                    src="/winner-cup.svg"
                    alt="winner cup icon"
                    width="14"
                    height="14"
                    class="max-w-[1rem] max-h-[1rem]"
                  />
                  <p class="text-xs font-bold text-secondary">$2.340</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- for orgs -->
    <div class="flex-col justify-center items-center">
      <div
        ref="orgHeaderRef"
        class="sticky top-[20px] left-0 overflow-hidden w-full flex flex-col items-center text-center max-w-6xl m-auto mb-24"
      >
        <h5
          class="font-heading text-xl text-around-forms font-medium uppercase mb-2"
        >
          For organizations
        </h5>
        <GradientTitle
          class="font-heading text-4xl xl:text-6xl uppercase mb-6 font-extrabold"
          >Hackathons made easy</GradientTitle
        >
        <h5 class="text-on-surface 2xl:text-lg text-center">
          As a full-service hackathon platform, we’ve got everything you need to
          host your next hackathon.
        </h5>
      </div>

      <div ref="horizontalScrollWrapper" class="relative">
        <div class="w-fit flex no-wrap gap-2">
          <div class="flex-shrink-0">
            <div
              class="flex items-center gap-20 px-24 justify-center w-[100vw] m-auto"
            >
              <div class="w-full py-4 px-5">
                <h3
                  class="font-heading text-on-surface-tertiary text-3xl 2xl:text-4xl mb-4 font-extrabold slide-in-section"
                >
                  SOURCE TOP-TIER TALENT & <br />
                  FUND INNOVATIVE PROJECTS
                </h3>
                <p class="mb-12 slide-in-section">
                  Discover and source top-tier talent from our community, and
                  fund cutting-edge projects built on your ecosystem by
                  hackathon buidlers.
                </p>
                <Button
                  title="Learn more"
                  :button-type="ButtonType.Positive"
                  @clicked="
                    () => {
                      mixpanel.track('Learn more about us', {
                        type: 'Lead',
                      });
                    }
                  "
                />
              </div>
              <div class="grid grid-cols-2 gap-2 w-full">
                <div
                  class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-4"
                >
                  <GradientTitle class="font-heading font-bold text-5xl"
                    >{{
                      formatAmount(
                        metrics?.find((m) => m.property == "buidlers")?.value ||
                          0
                      )
                    }}+</GradientTitle
                  >
                  <h5 class="font-heading font-semibold uppercase text-sm">
                    Buidler profiles created
                  </h5>
                </div>
                <div
                  class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-4"
                >
                  <GradientTitle class="font-heading font-bold text-5xl"
                    >${{
                      formatAmount(
                        metrics?.find((m) => m.property == "prizes")?.value || 0
                      )
                    }}+</GradientTitle
                  >
                  <h5 class="font-heading font-semibold uppercase text-sm">
                    Prizes distributed
                  </h5>
                </div>

                <div
                  class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-10"
                >
                  <GradientTitle class="font-heading font-bold text-8xl"
                    >{{
                      formatAmount(
                        metrics?.find((m) => m.property == "hackathons")
                          ?.value || 0
                      )
                    }}+</GradientTitle
                  >
                  <GradientTitle
                    class="font-heading font-bold uppercase text-2xl"
                  >
                    hackathons
                  </GradientTitle>
                </div>
                <div
                  class="rounded-md bg-surface flex flex-col gap-2 items-center justify-center p-10"
                >
                  <GradientTitle class="font-heading font-bold text-8xl"
                    >{{
                      formatAmount(
                        metrics?.find((m) => m.property == "projects")?.value ||
                          0
                      )
                    }}+</GradientTitle
                  >
                  <GradientTitle
                    class="font-heading font-bold uppercase text-2xl"
                  >
                    Projects created
                  </GradientTitle>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-shrink-0">
            <div
              class="flex items-center gap-20 px-24 justify-center w-[100vw] m-auto"
            >
              <div class="rounded border border-around-forms w-full">
                <client-only>
                  <Vue3Lottie
                    :animationData="timelineLottie"
                    :height="350"
                    speed="0.85"
                  />
                </client-only>
              </div>
              <div class="w-full">
                <h3
                  class="font-heading text-on-surface-tertiary text-3xl 2xl:text-4xl mb-4 font-extrabold slide-in-section"
                >
                  A ONE-STOP SHOP TO LAUNCH <br />
                  YOUR HACKATHONS WITH EASE
                </h3>
                <p class="mb-12 slide-in-section">
                  Our hackathon dashboard is fully-equipped with everything you
                  need: create your landing page, inviting co-sponsors,
                  publishing challenges, event scheduling, judging projects, and
                  so much more.
                </p>
                <Button
                  title="Explore features"
                  :button-type="ButtonType.Positive"
                  @clicked="
                    () => {
                      mixpanel.track('Explore features', {
                        type: 'Lead',
                      });
                    }
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- testimonials -->
    <!-- <div class="w-screen">
          <div class="z-20 relative">
            <Carousel
              class="w-screen"
              :testimonial-cards="testimonials"
              :un-mutated-cards="unmutatedTestimonials"
            />
          </div>
        </div> -->

    <!-- for buidlers -->
    <div class="bg-gradient-to-b from-dark-blue to-tertiary-surface pb-24">
      <div class="grid gap-24 max-w-6xl m-auto">
        <div class="flex flex-col items-center text-center">
          <h5
            class="font-heading text-xl text-around-forms font-medium uppercase mb-2 slide-in-section"
          >
            For buidlers
          </h5>
          <GradientTitle
            class="font-heading text-4xl xl:text-6xl uppercase mb-6 font-extrabold slide-in-section"
            >A PLACE TO LEARN, EARN, & CONNECT</GradientTitle
          >
          <h5 class="text-on-surface 2xl:text-lg text-center slide-in-section">
            Through hackathons and bounties, our platform provides the tools for
            our buidler community to learn, earn, and connect with top web3
            organizations.
          </h5>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div
            @mouseover="playLottie(buidlerLottieRef1)"
            @mouseout="reverseLottie(buidlerLottieRef1)"
            class="pt-8 flex flex-col gap-8 rounded-lg border border-around-forms"
          >
            <h4
              class="px-4 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
            >
              Participate in hackathons hosted by <br />
              top web3 organizations
            </h4>
            <p class="text-xs text-center px-2">
              Grow your skills, buidl innovative projects, and earn prizes by
              participating in hackathons and bounties on buidlbox.
            </p>
            <div class="rounded-b">
              <client-only>
                <Vue3Lottie
                  class="cursor-pointer"
                  :animationData="buidlerLottie1"
                  :height="200"
                  ref="buidlerLottieRef1"
                  :autoPlay="false"
                  :loop="1"
                />
              </client-only>
            </div>
          </div>

          <div
            @mouseover="playLottie(buidlerLottieRef2)"
            @mouseout="reverseLottie(buidlerLottieRef2)"
            class="pt-8 flex flex-col gap-8 rounded-lg border border-around-forms"
          >
            <h4
              class="px-4 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
            >
              Connect with buidlers<br />
              from around the world
            </h4>
            <p class="text-xs text-center px-2">
              Join our Discord community to access upcoming hackathons, find
              team members, get support, and share memes.
            </p>
            <div class="rounded-b">
              <client-only>
                <Vue3Lottie
                  class="cursor-pointer"
                  :animationData="buidlerLottie2"
                  :height="200"
                  ref="buidlerLottieRef2"
                  :autoPlay="false"
                  :loop="1"
                />
              </client-only>
            </div>
          </div>

          <div
            @mouseover="playLottie(buidlerLottieRef3)"
            @mouseout="reverseLottie(buidlerLottieRef3)"
            class="pt-8 flex flex-col gap-8 rounded-lg border border-around-forms"
          >
            <h4
              class="px-4 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
            >
              Flex your skills on your buidler profile <br />
              & project pages
            </h4>
            <p class="text-xs text-center px-2">
              Showcase your skills, projects, and make connections through your
              personal buidler profile.
            </p>
            <div class="rounded-b">
              <client-only>
                <Vue3Lottie
                  class="cursor-pointer"
                  :animationData="buidlerLottie3"
                  :height="200"
                  ref="buidlerLottieRef3"
                  :autoPlay="false"
                  :loop="1"
                />
              </client-only>
            </div>
          </div>
        </div>

        <Button
          title="Start buidling"
          class="m-auto w-fit"
          @clicked="
            () => {
              mixpanel.track('Start buidling', {
                type: 'Lead',
              });
            }
          "
        />
      </div>
    </div>

    <!-- blog -->
    <div class="bg-hero-bg w-full bg-top bg-cover bg-no-repeat py-20">
      <div class="flex items-center xl:gap-16 gap-6 max-w-6xl m-auto">
        <div class="flex flex-col gap-8 w-full">
          <GradientTitle class="font-heading text-5xl slide-in-section"
            >THE POSSIBILITIES ARE <br />
            ENDLESS ON BUIDLBOX.</GradientTitle
          >
          <p class="2xl:text-lg text-on-surface slide-in-section">
            Browse our blog for hackathon recaps and learn about how <br />
            buidlbox does really really cool things
          </p>
          <a
            href=""
            target="_blank"
            class="text-secondary font-semibold slide-in-section"
            >Read more hackathon highlights →</a
          >
        </div>

        <div class="flex flex-col gap-2 w-full">
          <div class="flex rounded-lg border border-around-forms">
            <img
              src="/blog-img-1.png"
              alt=""
              class="max-w-[186px] h-auto rounded-l-lg blog-image"
            />
            <div class="flex flex-col gap-2 p-5">
              <h2 class="font-semibold text-lg">Permissionless II Hackathon</h2>
              <p class="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <a class="text-xs text-secondary">Read more</a>
            </div>
          </div>
          <div class="flex rounded-lg border border-around-forms">
            <img
              src="/blog-img-1.png"
              alt=""
              class="max-w-[186px] h-auto rounded-l-lg blog-image"
            />
            <div class="flex flex-col gap-2 p-5">
              <h2 class="font-semibold text-lg">Permissionless II Hackathon</h2>
              <p class="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <a class="text-xs text-secondary">Read more</a>
            </div>
          </div>
          <div class="flex rounded-lg border border-around-forms">
            <img
              src="/blog-img-1.png"
              alt=""
              class="max-w-[186px] h-auto rounded-l-lg blog-image"
            />
            <div class="flex flex-col gap-2 p-5">
              <h2 class="font-semibold text-lg">Permissionless II Hackathon</h2>
              <p class="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <a class="text-xs text-secondary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- newsletter -->
    <div
      class="bg-gradient-to-b from-transparent via-secondary-surface to-transparent"
    >
      <div class="w-full py-12">
        <div class="flex items-center xl:gap-16 gap-6 max-w-7xl m-auto">
          <div
            class="flex flex-col gap-6 items-center justify-center py-8 m-auto w-full"
          >
            <GradientTitle
              class="font-heading text-3xl font-extrabold w-fit slide-in-section"
              >SIGN UP FOR OUR WEEKLY NEWSLETTER</GradientTitle
            >
            <p class="2xl:text-lg text-on-surface text-center slide-in-section">
              Get the latest scoop on buidlbox hackathons, product
              announcements,<br />
              and memes – delivered straight to your inbox.
            </p>
            <div
              v-if="!subscribedSuccessfully"
              class="flex flex-col gap-6 items-center justify-center"
            >
              <input
                v-model="email"
                placeholder="Email address"
                class="mt-4 w-[20rem] px-3 py-1.5 rounded bg-surface border border-around-forms"
              />
              <Button
                title="Signup"
                @clicked="subscribe(email)"
                :button-type="ButtonType.Gradient"
                :is-loading="isSubscribeLoading"
                class="w-[20rem] h-full"
              />
            </div>
            <div v-else-if="subscribedSuccessfully">
              <GradientTitle
                class="font-heading text-xl font-extrabold w-fit py-4"
                >Successfully subscribed!</GradientTitle
              >
            </div>
            <div v-if="subscribeError && !subscribedSuccessfully">
              <p class="text-destructive-secondary">
                An error occured: {{ subscribeError }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.sticky-header {
  -webkit-transform: perspective(2000px);
  transform: perspective(2000px);
}

.test {
  transform-style: preserve-3d;
}
</style>
