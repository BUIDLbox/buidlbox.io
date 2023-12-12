<script setup lang="ts">
import { ButtonType } from "~/types/button";
import { testimonials, hackathons } from "~/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EasePack } from "gsap/EasePack";
import { Announcement, getAnnouncementsAPI } from "../api";
import buidlerLottie3 from "~/assets/lottie/03-flex.json";
import buidlerLottie1 from "~/assets/lottie/01-hack.json";
import buidlerLottie2 from "~/assets/lottie/02-gm.json";
import timelineLottie from "~/assets/lottie/04-roadmap.json";
import { getErrorMessage } from "~/utils";
import { Mixpanel } from "mixpanel-browser";
import MiniProgress from "~/components/MiniProgress.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack);

const announcements = ref<Announcement[]>();
const isGetAnnouncementsLoading = ref(true);
const mixpanel = inject("mixpanel") as Mixpanel;
const animationFrameId = ref();
const progress = ref(0);
const startTime = ref();
const elapsedPauseTime = ref(0);
const requireReset = ref(true);
const INTERVAL_DURATION = 7000;
const { width } = useWindowSize();

const displayBountiesTab = ref(false);

const horizontalScrollWrapper = ref();
const orgHeaderRef = ref();
const userDashboardRef = ref();
const sponsorsHeader = ref();
const buidlerLottieRef1 = ref();
const buidlerLottieRef2 = ref();
const buidlerLottieRef3 = ref();

const isNewsletterModalOpen = ref(false);
const subscribedSuccessfully = ref(false);

const unmutatedTestimonials = [...testimonials];
let mm = gsap.matchMedia();

onUnmounted(() => {
  mm.revert();
});
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
    blogImages?.forEach((img: any) => {
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

  const announcementData = await getAnnouncementsAPI();
  announcements.value = announcementData.data?.data;
  isGetAnnouncementsLoading.value = false;
});

onMounted(() => {
  setTabSwitchInterval();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId.value);
});

function getScrollAmount() {
  let elemWidth = horizontalScrollWrapper.value?.scrollWidth;
  return -(elemWidth - window.innerWidth);
}

watch(userDashboardRef, () => {
  if (!userDashboardRef.value) return;
  gsap.set(userDashboardRef.value, { transformPerspective: 500 });
  var tl = gsap.timeline().to(userDashboardRef.value, {
    scrollTrigger: {
      trigger: userDashboardRef.value,
      start: "bottom 100%",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
    rotationX: -90,
    transformOrigin: "50% 0%",
    duration: 3,
    ease: "none",
    y: -40,
  });
});

watch(
  sponsorsHeader,
  () => {
    if (!sponsorsHeader.value) return;
    gsap.set(sponsorsHeader.value, {
      opacity: 0,
    });
    gsap.to(sponsorsHeader.value, {
      scrollTrigger: {
        trigger: sponsorsHeader.value,
        invalidateOnRefresh: true,
      },
      duration: 1.7,
      opacity: 1,
    });
  },
  { immediate: true }
);

watch([horizontalScrollWrapper, orgHeaderRef], () => {
  if (!horizontalScrollWrapper.value || !orgHeaderRef.value) return;

  mm.add("(min-width: 1280px)", () => {
    // gsap.to(...);
    // gsap.from(...);
    // ScrollTrigger.create({...});

    // return () => { // optional
    //   // custom cleanup code here (runs when it STOPS matching)
    // };

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
    });
  });
});

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
  <div>
    <!-- hero -->
    <div class="bg-gradient-to-b from-tertiary-surface to-dark-blue from-35%">
      <div class="bg-hero-bg w-full bg-top bg-contain bg-no-repeat">
        <AnnouncementBar
          :announcements="announcements"
          :isGetAnnouncementsLoading="isGetAnnouncementsLoading"
          @open-newsletter-modal="isNewsletterModalOpen = true"
        />

        <div class="px-2">
          <div class="flex flex-col gap-8 items-center justify-center py-24">
            <GradientTitle
              class="font-heading text-3xl sm:text-5xl 2xl:text-6xl sm:text-left text-center"
              >Elevate your hackathon experience.</GradientTitle
            >
            <h3
              class="text-base 2xl:text-lg max-w-md text-center text-on-surface"
            >
              Fostering collaboration between buidlers and organizations,
              powered by hackathons – all on one seamless platform.
            </h3>

            <div class="flex items-center gap-4 mt-4">
              <a href="https://app.buidlbox.io/">
                <Button
                  class="sm:w-52"
                  title="Join a hackathon"
                  @clicked="
                    () => {
                      mixpanel.track('Join a hackathon', {
                        type: 'Lead',
                      });
                    }
                  "
                />
              </a>
              <NuxtLink href="https://app.buidlbox.io/buy-hackathons/tiers">
                <Button
                  title="Organize a hackathon"
                  :button-type="ButtonType.Secondary1"
                  class="sm:w-52"
                  @clicked="
                    () => {
                      mixpanel.track('Organize a hackathon', {
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

    <div class="flex flex-col sm:gap-32 gap-28">
      <!-- logos -->
      <div class="px-6">
        <h2
          ref="sponsorsHeader"
          class="font-heading text-around-forms text-center text-2xl sm:text-3xl 2xl:text-4xl mb-16"
        >
          TRUSTED BY TOP ORGANIZATIONS IN WEB3 & BEYOND
        </h2>
        <Logos class="slide-in-section" />
      </div>

      <!-- hackathons & bounties -->
      <div
        class="px-4 flex items-center xl:gap-16 sm:gap-6 gap-10 max-w-[74rem] m-auto w-full xl:flex-row flex-col"
      >
        <div class="flex flex-col gap-8 max-w-md w-full">
          <GradientTitle
            class="font-heading text-3xl xl:text-5xl slide-in-section xl:text-left text-center"
            >Where unique challenges find creative solutions.</GradientTitle
          >
          <p
            class="2xl:text-lg text-on-surface slide-in-section sm:text-left text-justify"
          >
            Through the power of hackathons, buidlers come together to discover
            solutions to the ecosystem's most pressing challenges – with
            opportunities for prizes, mentorship, and ongoing support from top
            organizations in web3.
          </p>
          <a href="https://app.buidlbox.io/">
            <Button
              title="Explore hackathons"
              class="w-60 sm:m-0 m-auto"
              :button-type="ButtonType.Secondary1"
              @clicked="
                () => {
                  mixpanel.track('Explore hackathons', {
                    type: 'Lead',
                  });
                }
              "
            />
          </a>
        </div>

        <div class="w-full max-w-3xl xl:px-0 px-4">
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

          <div class="grid sm:grid-cols-2 gap-4" v-if="!displayBountiesTab">
            <HackathonCard
              v-for="(hackathon, index) in hackathons"
              :key="hackathon.hackathonId"
              :hackathon="hackathon"
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
                      src="/logos/algorand-logo.png"
                      alt="algorand logo"
                      class="w-[30px] h-[30px] rounded-full"
                    />
                    <div class="flex flex-col gap-2 p-5">
                      <h2 class="font-semibold sm:text-base text-sm">
                        Algorand Azure Tutorials For The Algorand Developer
                        Portal <br /><span class="font-thin">by </span>
                        <span class="text-on-surface-tertiary">Algorand</span>
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
                    <p class="text-xs font-bold text-secondary">$1,250</p>
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
                      src="/logos/giveth-logo.png"
                      alt="giveth logo"
                      class="w-[30px] h-[30px] rounded-full"
                    />
                    <div class="flex flex-col gap-2 p-5">
                      <h2 class="font-semibold sm:text-base text-sm">
                        Allow apps to sign arbitrary data via a RPC call<br />
                        <span class="font-thin">by </span>
                        <span class="text-on-surface-tertiary">Giveth</span>
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
                    <p class="text-xs font-bold text-secondary">$1,250</p>
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
                      src="/logos/livepeer-logo.png"
                      alt="livepeer logo"
                      class="w-[30px] h-[30px] rounded-full"
                    />
                    <div class="flex flex-col gap-2 p-5">
                      <h2 class="font-semibold sm:text-base text-sm">
                        Improve RemoteTranscoder error handling<br />
                        <span class="font-thin">by </span>
                        <span class="text-on-surface-tertiary">Livepeer</span>
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
                    <p class="text-xs font-bold text-secondary">$500</p>
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
                      src="/logos/aragon-logo.png"
                      alt="aragon logo"
                      class="w-[30px] h-[30px] rounded-full"
                    />
                    <div class="flex flex-col gap-2 p-5">
                      <h2 class="font-semibold sm:text-base text-sm">
                        Pop over component<br />
                        <span class="font-thin">by </span>
                        <span class="text-on-surface-tertiary">Aragon</span>
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
                    <p class="text-xs font-bold text-secondary">$3,972</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- for orgs -->
      <div class="px-4 flex-col justify-center items-center relative">
        <div
          ref="orgHeaderRef"
          class="xl:sticky top-[70px] left-0 overflow-hidden w-full flex flex-col items-center text-center max-w-6xl m-auto mb-24"
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
          <h5
            class="text-on-surface 2xl:text-lg text-center md:max-w-none max-w-md"
          >
            As a full-service hackathon platform, we’ve got everything you need
            to host your next hackathon.
          </h5>
        </div>
        <div class="max-w-screen overflow-x-hidden">
          <div ref="horizontalScrollWrapper" class="relative">
            <div
              class="w-fit flex xl:no-wrap xl:gap-2 gap-10 xl:flex-row flex-col"
            >
              <div class="xl:flex-shrink-0">
                <div
                  class="flex items-center gap-6 lg:gap-20 lg:px-24 px-8 justify-center w-[100vw] m-auto md:flex-row flex-col"
                >
                  <div class="w-full py-4">
                    <h3
                      class="font-heading text-on-surface-tertiary text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl mb-4 font-extrabold slide-in-section"
                    >
                      SOURCE TOP-TIER TALENT & <br />
                      FUND INNOVATIVE PROJECTS
                    </h3>
                    <p class="md:text-base text-sm mb-12 slide-in-section">
                      Discover and source top-tier talent from buidlbox
                      community, and fund cutting-edge projects built on your
                      ecosystem by hackathon buidlers.
                    </p>
                    <NuxtLink
                      href="https://app.buidlbox.io/buy-hackathons/tiers"
                    >
                      <Button
                        title="Learn more"
                        :button-type="ButtonType.Positive"
                        class="w-40"
                      />
                    </NuxtLink>
                  </div>
                  <Metrics />
                </div>
              </div>

              <div class="xl:flex-shrink-0">
                <div
                  class="flex items-center gap-6 lg:gap-20 lg:px-24 px-8 justify-center w-[100vw] m-auto sm:flex-row flex-col-reverse"
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
                      class="font-heading text-on-surface-tertiary text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl mb-4 font-extrabold slide-in-section"
                    >
                      A ONE-STOP SHOP TO LAUNCH <br />
                      YOUR HACKATHONS WITH EASE
                    </h3>
                    <p class="md:text-base text-sm mb-12 slide-in-section">
                      Buidlbox hackathon dashboard is fully-equipped with
                      everything you need: create your landing page, inviting
                      co-sponsors, publishing challenges, event scheduling,
                      judging projects, and so much more.
                    </p>
                    <NuxtLink
                      href="https://app.buidlbox.io/buy-hackathons/tiers"
                    >
                      <Button
                        title="Explore features"
                        :button-type="ButtonType.Positive"
                        class="w-40"
                        @clicked="
                          () => {
                            mixpanel.track('Explore features', {
                              type: 'Lead',
                            });
                          }
                        "
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- testimonials -->
      <div class="w-screen">
        <div class="z-20 relative">
          <Carousel
            class="w-screen"
            :testimonial-cards="testimonials"
            :un-mutated-cards="unmutatedTestimonials"
          />
        </div>
      </div>

      <!-- for buidlers -->
      <div
        class="bg-gradient-to-b from-dark-blue to-tertiary-surface pb-24 px-4"
      >
        <div class="grid sm:gap-24 gap-12 max-w-6xl m-auto">
          <div class="flex flex-col items-center text-center">
            <h5
              class="font-heading text-xl text-around-forms font-medium uppercase mb-2 slide-in-section"
            >
              For buidlers
            </h5>
            <GradientTitle
              class="font-heading text-3xl xl:text-6xl uppercase mb-6 font-extrabold slide-in-section"
              >A PLACE TO EARN, LEARN, & CONNECT</GradientTitle
            >
            <h5
              class="text-on-surface 2xl:text-lg text-center slide-in-section"
            >
              Through hackathons and bounties, buidlbox platform provides the
              tools for our buidler community to learn, earn, and connect with
              top web3 organizations.
            </h5>
          </div>

          <div class="grid md:grid-cols-3 gap-2 child:max-w-xl child: m-auto">
            <div
              @mouseover="playLottie(buidlerLottieRef1)"
              @mouseout="reverseLottie(buidlerLottieRef1)"
              class="pt-8 flex flex-col sm:gap-8 rounded-lg border border-around-forms"
            >
              <h4
                class="px-4 sm:mb-0 mb-6 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
              >
                Participate in hackathons hosted by <br />
                top web3 organizations
              </h4>
              <p class="text-xs text-center px-4">
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
              class="pt-8 flex flex-col sm:gap-8 rounded-lg border border-around-forms"
            >
              <h4
                class="px-4 sm:mb-0 mb-6 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
              >
                Connect with buidlers<br />
                from around the world
              </h4>
              <p class="text-xs text-center px-4">
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
              class="pt-8 flex flex-col sm:gap-8 rounded-lg border border-around-forms"
            >
              <h4
                class="px-4 sm:mb-0 mb-6 text-center font-heading text-xl font-extrabold text-on-surface-tertiary"
              >
                Flex your skills on your buidler <br />profile & project pages
              </h4>
              <p class="text-xs text-center px-4">
                Showcase your skills, projects, and make connections through
                your personal buidler profile.
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
          <a href="https://app.buidlbox.io/">
            <Button
              title="Start buidling"
              class="m-auto w-72"
              @clicked="
                () => {
                  mixpanel.track('Start buidling', {
                    type: 'Lead',
                  });
                }
              "
            />
          </a>
        </div>
      </div>

      <!-- blog -->
      <!-- <BlogSection /> -->

      <!-- newsletter -->
      <div
        class="bg-gradient-to-b from-transparent via-secondary-surface to-transparent"
      >
        <NewsletterForm
          @subscribed="subscribedSuccessfully = true"
          :subscribed-successfully="subscribedSuccessfully"
          source="source-footer"
        />
      </div>
    </div>
  </div>
  <ClientOnly>
    <Teleport to="body">
      <DashboardModal
        v-if="isNewsletterModalOpen"
        class="w-full z-[100]"
        @close="isNewsletterModalOpen = false"
      >
        <div class="bg-gradient-to-b from-transparent to-secondary-surface">
          <NewsletterForm
            @subscribed="subscribedSuccessfully = true"
            :subscribed-successfully="subscribedSuccessfully"
            source="source-banner"
          />
        </div>
      </DashboardModal>
    </Teleport>
  </ClientOnly>
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
