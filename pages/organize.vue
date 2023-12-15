<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EasePack } from "gsap/EasePack";
import { ButtonType } from "~/types/button";

import {
  BriefcaseIcon,
  ChartBarIcon,
  EnvelopeIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";
import { GlobeAltIcon } from "@heroicons/vue/20/solid";

definePageMeta({
  layout: "new-design",
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack);

const isTrialModalOpen = ref(false);

onMounted(async () => {
  nextTick(() => {
    const slideInSections = gsap.utils.toArray(".slide-in-section");
    slideInSections.forEach((section: any) => {
      gsap.from(section, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        immediateRender: true,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "center center",
        },
      });
    });

    const slideFromRightSections = gsap.utils.toArray(
      ".slide-from-right-section"
    );
    slideFromRightSections.forEach((section: any) => {
      gsap.from(section, {
        x: 50,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 80%",
          trigger: section,
          end: "center center",
        },
      });
    });

    const parallaxSections = gsap.utils.toArray(".parallax-section");
    parallaxSections.forEach((section: any) => {
      gsap.to(section, {
        y: -100,

        ease: "none",
        scrollTrigger: {
          start: "bottom 80%",
          trigger: section,
          scrub: 1,
        },
      });
    });
  });
});

const testimonialsRow1 = [
  {
    testimonial:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh, Full-stack Developer",
    role: "buidler",
    avatar: "/vansh-pfp.png",
    id: 11,
  },
  {
    testimonial:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh, Full-stack Developer",
    role: "buidler",
    avatar: "/vansh-pfp.png",
    id: 143,
  },
  {
    avatar: "/images/pfps/jonathan.jfif",
    role: "organiser",
    name: "Jonathan W. @ Lukso",
    testimonial:
      "“The LUKSO Build UP! Hackathon was a success. We were so happy with the results and enjoyed working with the team!”",
  },
  {
    avatar: "/images/pfps/kitti.jpg",
    role: "sponsor",
    name: "Kitti Borissza @ Tezos",
    testimonial:
      "“Hosting hackathons with buidlbox has provided a global network of driven, independent builders that continue to thrive within our ecosystem. Hackathons are energizing, and they allow us to educate and empower builders.“",
  },
  {
    testimonial:
      "“The buidlbox team is easily approachable, listens to feedback, and improves the product based on your feedback. I not only look forward to using buidlbox again to participate in future hackathons, but I would like to host my own hackathon on their platform too. ”",
    name: "humptycalderon, founder at mosaic",
    role: "buidler",
    avatar: "/humptycalderon-pfp.jpeg",
    id: 23222,
  },
];
const testimonialsRow2 = [
  {
    avatar: "/images/pfps/ivan.jpg",
    role: "organiser",
    name: "Ivan Kotelnikov @ everscale.network",
    testimonial:
      "““Hosting a hackathon with the buidlbox team was one of the most productive outcomes we've seen in the tech ecosystem and crypto community”“",
  },
  {
    avatar: "",
    role: "sponsor",
    name: "Joen, ceo buidlbox",
    testimonial:
      "“This was a great hackathon to be apart of and I totally liked it and thought it was great ",
  },
  {
    testimonial:
      "“The buidlbox team is easily approachable, listens to feedback, and improves the product based on your feedback. I not only look forward to using buidlbox again to participate in future hackathons, but I would like to host my own hackathon on their platform too. ”",
    name: "humptycalderon, founder at mosaic",
    role: "buidler",
    avatar: "/humptycalderon-pfp.jpeg",
    id: 2322,
  },
  {
    avatar: "/images/pfps/daphne.jpg",
    role: "sponsor",
    name: "Daphne Tan @ Mask Network",
    testimonial:
      "“The ETHShanghai Hackathon was a positive experience with the support we got. Overall, it was a successful hackathon with 950 participants from 344 projects, which helped raise awareness our ecosystem.”",
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
    avatar: "/images/pfps/soham.jpg",
    role: "sponsor",
    name: "Soham Mishra @ Reserve Protocol",
    testimonial:
      "“Our goal was to host a hackathon to kickstart the platform while driving high quality community growth. Partnering with buidlbox was a phenomenal experience - We at Reserve would highly recommend it!“",
  },
  {
    testimonial:
      "“I recently participated in the inaugural Permissionless II Hackathon and had an excellent experience. The event itself was great for hackers, but the buidlbox platform made things especially smooth and straightforward when it came to creating a team and submitting a project. I really look forward to using buidlbox again at a future hackathon!”",
    name: "travcrypto, Marketing",
    role: "buidler",
    avatar:
      "https://cdn.buidlbox.io/user/19718d4d-a82f-4b16-b4e7-9410f7c4e88d/avatar/avatar.JPG?t=1697105741898",
    id: 32323,
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
  const slides = [...document.getElementsByClassName("carousel__item")];
  return slides.indexOf($slide);
};

const list = ref();

onMounted(() => {
  list.value = [...document.getElementsByClassName("carousel__list")][0];
});

const activateSlide = ($slide: Element) => {
  if (!$slide) return;
  const $slides = [...document.getElementsByClassName("carousel__item")];
  $slides.forEach((el) => el.removeAttribute("data-active"));
  $slide.setAttribute("data-active", "true");
};

const selectSlide = (e: any) => {
  const max = window.matchMedia("screen and ( max-width: 600px)").matches
    ? 5
    : 8;
  const $slide = e.target.closest(".carousel__item");
  const index = getSlideIndex($slide);
  if (index < 3 || index > max) return;
  if (index === max) nextSlide();
  if (index === 3) prevSlide();
  activateSlide($slide);
};

onMounted(() => {
  list.value = [...document.getElementsByClassName("carousel__list")][0];
});

const getActiveIndex = () => {
  const $active = [...document.querySelectorAll("[data-active]")][0];
  return getSlideIndex($active);
};

const prevSlide = () => {
  const index = getActiveIndex();
  const slides = [...document.getElementsByClassName("carousel__item")];
  const last = slides[slides.length - 1];
  last.remove();
  list.value.prepend(last);
  activateSlide(slides[index]);
};

const nextSlide = () => {
  const index = getActiveIndex();
  const slides = [...document.getElementsByClassName("carousel__item")];
  const first = slides[0];
  first.remove();
  list.value.append(first);
  activateSlide(slides[index]);
};
</script>

<template>
  <div class="max-w-screen overflow-x-hidden lg:overflow-x-clip">
    <div class="relative max-w-screen">
      <img
        src="/images/background-gradient.png"
        alt="buidlbox logo"
        class="absolute -rotate-90 -top-[25rem] left-0 right-0 m-auto"
      />
    </div>
    <section
      class="pt-[25vh] padding flex sm:flex-row flex-col pb-40 relative overflow-hidden"
    >
      <div class="self-center justify-self-center max-w-md z-50">
        <h1 class="section-title leading-[120%] text-6xl sm:text-7xl pb-6">
          We grow <br /><span class="gradient-text">ecosystems</span>
        </h1>
        <p class="pb-20 sm:text-lg">
          Unlock innovation and grow developer communities through hackathons &
          bounties with buidlbox
        </p>

        <GradientButton
          class="flex-shrink-0 flex-grow-0"
          @click="
            () => {
              isTrialModalOpen = true;
              mixpanel.track('Request a demo', {
                type: 'Lead',
              });
            }
          "
          >Request a demo</GradientButton
        >
      </div>
      <div class="relative w-full h-90">
        <div
          class="origin-center z-0 absolute h-32 w-32 top-1/2 left-1/2 m-auto transform -translate-x-1/2"
        >
          <img
            class="animate-grow origin-center h-32 w-32 animation-delay-0"
            src="/images/circle1.svg"
            alt="buidlbox logo"
          />
        </div>
        <div
          class="origin-center z-0 absolute h-32 w-32 top-1/2 left-1/2 m-auto transform -translate-x-1/2"
        >
          <img
            class="animate-grow origin-center z-0 h-32 w-32 animation-delay-2000"
            src="/images/circle2.svg"
            alt="buidlbox logo"
          />
        </div>
        <div
          class="origin-center z-0 absolute h-32 w-32 top-1/2 left-1/2 m-auto transform -translate-x-1/2"
        >
          <img
            class="animate-grow origin-center z-0 h-32 w-32 animation-delay-4000"
            src="/images/circle1.svg"
            alt="buidlbox logo"
          />
        </div>
      </div>
    </section>

    <!--Client Logos-->

    <section class="parallax-section max-w-[85rem] mx-auto px-4 w-fit relative">
      <div
        class="w-screen overflow-x-hidden h-[650px] background-gradient absolute left-0 right-0 -top-48"
      ></div>
      <div class="w-fit">
        <Logos
          class="slide-in-section child:z-[60] z-[60]"
          :default-white="true"
          ><template v-slot:eyebrow
            ><div class="flex items-center gap-2 mb-4">
              <BriefcaseIcon class="text-on-surface h-4 w-4" />
              <h4 class="section-eyebrow">Clients</h4>
            </div></template
          ></Logos
        >
      </div>
    </section>

    <!-- quote section -->
    <div class="relative">
      <section class="mt-52 px-4 overflow-x-hidden max-w-screen">
        <h1
          class="slide-in-section section-title text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-[58rem] m-auto text-center !leading-[140%] tracking-wider"
        >
          We believe the best way to
          <span class="text-primary">grow</span> developer
          <span class="text-secondary">ecosystems</span> is through the power of
          <span class="text-tertiary">hackathons</span>.
        </h1>

        <img
          src="/images/background-gradient.png"
          alt=""
          class="absolute -top-80 -right-[100px] w-[800px] z-40 m-auto"
        />
      </section>
    </div>

    <div class="relative scale-100">
      <!-- bg circles -->
      <div
        class="absolute h-full origin-center -left-[250px] top-20 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center h-32 w-32 animation-delay-0"
          src="/images/circle1.svg"
          alt=""
        />
      </div>
      <div
        class="absolute h-full origin-center -left-[250px] top-20 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center h-32 w-32 animation-delay-2000"
          src="/images/circle2.svg"
          alt=""
        />
      </div>
      <div
        class="absolute h-full origin-center -left-[250px] top-20 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center h-32 w-32 animation-delay-4000"
          src="/images/circle1.svg"
          alt=""
        />
      </div>

      <!-- ecosystem section -->
      <section class="mt-52 px-4 z-50">
        <div
          class="grid sm:grid-cols-2 md:gap-12 gap-6 max-w-[65rem] m-auto justify-center"
        >
          <div class="max-w-lg h-fit top-40 lg:sticky z-50 child:z-50">
            <div class="flex items-center gap-2 mb-4">
              <GlobeAltIcon class="text-on-surface h-4 w-4" />
              <h4 class="section-eyebrow">Ecosystem</h4>
            </div>
            <h1
              class="slide-in-section section-title text-4xl md:text-6xl mb-7 !leading-[120%]"
            >
              Grow your community with the right people
            </h1>
            <p class="font-medium sm:text-lg mb-10">
              Elevate your hackathon experience by buidling meaningful
              connections and fostering collaboration.
            </p>
            <NuxtLink :href="FEATURES_URL">
              <GradientButton
                class="flex-shrink-0 flex-grow-0"
                @click="
                  () => {
                    isTrialModalOpen = true;
                    mixpanel.track('Request a demo', {
                      type: 'Lead',
                    });
                  }
                "
                >Request a demo</GradientButton
              >
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-4 slide-from-right-section">
            <div
              class="h-72 rounded-[32px] bg-card-bg border border-surface p-8"
            >
              <p class="mb-3 section-title text-2xl">
                Over 35K buidlers worldwide
              </p>
              <p class="font-medium max-w-xs">
                Extend your reach by accessing our community of talented
                buidlers from around the world.
              </p>
            </div>
            <div
              class="h-72 rounded-[32px] bg-card-bg border border-surface p-8 slide-from-right-section"
            >
              <p class="mb-3 section-title text-2xl">
                Uncover your ecosystem champions
              </p>
              <p class="font-medium max-w-xs">
                Discover and source top-tier talent from our community, and fund
                cutting-edge projects built on your ecosystem by hackathon
                buidlers.
              </p>
            </div>
            <div
              class="h-72 rounded-[32px] bg-card-bg border border-surface p-8 slide-from-right-section"
            >
              <p class="mb-3 section-title text-2xl">Developer feedback loop</p>
              <p class="font-medium max-w-xs">
                Collect authentic feedback from developers throughout every
                stage of your hackathon journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- tools section -->
      <section class="pt-52 relative px-4" id="features">
        <div
          class="relative h-full grid sm:grid-cols-2 gap-16 sm:gap-6 md:gap-12 max-w-[65rem] m-auto justify-center"
        >
          <div class="max-w-md lg:sticky top-40 h-fit">
            <div class="flex items-center gap-2 mb-4">
              <WrenchScrewdriverIcon class="text-on-surface h-4 w-4" />
              <h4 class="section-eyebrow">platform tools</h4>
            </div>
            <h1
              class="slide-in-section section-title text-4xl md:text-6xl mb-7 !leading-[120%]"
            >
              All the tools you need
            </h1>
            <p class="font-medium mb-10 max-w-sm sm:text-lg">
              We've got a full suite of features and tools to successfully
              organize your hackathons, power your community, and fuel your
              growth.
            </p>
            <GradientButton
              class="flex-shrink-0 flex-grow-0"
              @click="
                () => {
                  isTrialModalOpen = true;
                  mixpanel.track('Request a demo', {
                    type: 'Lead',
                  });
                }
              "
              >Request a demo</GradientButton
            >
          </div>
          <div class="flex flex-col gap-4">
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-primary">buidling</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Dynamic hackathon platform
              </p>
              <p class="font-medium max-w-xs">
                All the features you need to run amazing hackathons in one
                platform. Submissions, judging, feedback, winner showcase,
                allowlist and many more.
              </p>
            </div>
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-tertiary">engagement</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Standalone bounties
              </p>
              <p class="font-medium max-w-xs">
                Engage your developer community in between hackathons. Source
                great ideas. Solve problems. Find bugs.
              </p>
            </div>
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-secondary">customer success</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Comprehensive 1:1 support
              </p>
              <p class="font-medium max-w-xs">
                Receive dedicated support from our global team, from challenge
                brainstorming to assistance with judging (and everything in
                between).
              </p>
            </div>
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-primary">analytics</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Measurable impact
              </p>
              <p class="font-medium max-w-xs">
                Real time metrics about your community: including ongoing
                hackathon stats, product feedback, builder rentention, buidler
                sentiment & demographics
              </p>
            </div>
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-tertiary">marketing</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Ongoing community engagement
              </p>
              <p class="font-medium max-w-xs">
                Actively engage with your growing community through automated
                email announcements, Discord roles, feedback forms, workshops,
                targeted ads and X (Twitter) Spaces.
              </p>
            </div>
            <div
              class="rounded-[32px] bg-card-bg border border-surface p-8 flex flex-col gap-2.5 slide-from-right-section"
            >
              <p class="section-eyebrow text-primary">buidling</p>
              <p class="slide-from-right-section font-extrabold text-2xl">
                Powered by buidlbot
              </p>
              <p class="font-medium max-w-xs">
                buidlbot is our AI tool, it automates dedicated Discord channels
                for your hackathon and trains on your documentation to help
                builders with their projects on our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- marketing section -->
    <section class="mt-52 px-4">
      <div
        class="flex items-center justify-center flex-col sm:gap-16 gap-28 max-w-[85rem] mx-auto px-2 sm:px-6"
      >
        <div class="child:mx-auto">
          <div class="flex items-center gap-2 mb-4 justify-center">
            <ChartBarIcon class="text-on-surface h-4 w-4" />
            <h4 class="section-eyebrow !leading-[120%]">Marketing</h4>
          </div>
          <h1
            class="slide-in-section section-title text-4xl sm:text-6xl !leading-[120%] mb-7 text-center max-w-xl"
          >
            A full stack marketing strategy
          </h1>
          <p class="font-medium text-center max-w-md sm:text-lg">
            We’re here to navigate your marketing journey — comprehensive
            support tailored to your unique needs.
          </p>
        </div>
        <div
          class="child:sm:h-auto child:h-[100px] parallax-section flex items-center justify-center flex-wrap gap-1 sm:gap-4"
        >
          <div
            class="rounded-[32px] bg-card-bg flex items-center border border-surface p-4 sm:p-10"
          >
            <img
              src="/images/discord-gradient-icon.svg"
              width="60"
              height="60"
              class="sm:!w-[3.75rem] sm:!h-[3.75rem] !w-10 !h-10"
            />
          </div>

          <MarketingCard type="tertiary"
            ><template v-slot:eyebrow>discord</template
            ><template v-slot:title
              >Discord <br />
              bot</template
            ></MarketingCard
          >
          <MarketingCard type="secondary"
            ><template v-slot:eyebrow>planner</template
            ><template v-slot:title
              >Individualized <br />marketing plan</template
            ></MarketingCard
          >
          <div
            class="rounded-[32px] bg-card-bg flex items-center border border-surface p-4 sm:p-10"
          >
            <img
              src="/images/telegram-gradient-icon.svg"
              width="60"
              height="60"
              class="sm:!w-[3.75rem] sm:!h-[3.75rem] !w-10 !h-10"
            />
          </div>
          <MarketingCard type="primary"
            ><template v-slot:eyebrow>medium</template
            ><template v-slot:title> Blog posts</template></MarketingCard
          >
          <MarketingCard type="primary"
            ><template v-slot:eyebrow>analytics</template
            ><template v-slot:title>
              Metric tracking <br />
              across all KPIs</template
            ></MarketingCard
          >
          <div
            class="rounded-[32px] bg-card-bg flex items-center border border-surface p-4 sm:p-10"
          >
            <img
              src="/images/reddit-gradient-icon.svg"
              width="60"
              height="60"
              class="sm:!w-[3.75rem] sm:!h-[3.75rem] !w-10 !h-10"
            />
          </div>
          <MarketingCard type="secondary"
            ><template v-slot:eyebrow>workshops</template
            ><template v-slot:title
              >Hosting <br />workshops</template
            ></MarketingCard
          >
          <MarketingCard type="tertiary"
            ><template v-slot:eyebrow>emails</template
            ><template v-slot:title
              >Access to <br />35k buidlers</template
            ></MarketingCard
          >
          <MarketingCard type="tertiary"
            ><template v-slot:eyebrow>emails</template
            ><template v-slot:title
              >Continuos email <br />marketing</template
            ></MarketingCard
          >
          <MarketingCard type="tertiary"
            ><template v-slot:eyebrow>reddit</template
            ><template v-slot:title
              >Reddit pages and <br />engagements</template
            ></MarketingCard
          >
          <div
            class="rounded-[32px] bg-card-bg flex items-center border border-surface p-4 sm:p-10"
          >
            <img
              src="/images/twitter-gradient-icon.svg"
              width="60"
              height="60"
              class="sm:!w-[3.75rem] sm:!h-[3.75rem] !w-10 !h-10"
            />
          </div>
          <MarketingCard type="primary"
            ><template v-slot:eyebrow>twitter</template
            ><template v-slot:title
              >Twitter space hosting</template
            ></MarketingCard
          >
          <div
            class="rounded-[32px] bg-card-bg flex items-center border border-surface p-4 sm:p-10"
          >
            <img
              src="/images/instagram-gradient-icon.svg"
              width="60"
              height="60"
              class="sm:!w-[3.75rem] sm:!h-[3.75rem] !w-10 !h-10"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- team section -->
    <section
      class="mt-52 px-4 flex flex-col items-center max-w-full overflow-hidden"
    >
      <!--header-->
      <div class="top-40 h-fit flex flex-col items-center">
        <div class="flex items-center gap-2 mb-4">
          <UserGroupIcon class="text-on-surface h-4 w-4" />
          <h4 class="section-eyebrow">meet the team</h4>
        </div>
        <h1
          class="slide-in-section section-title !leading-[120%] text-4xl sm:text-6xl text-center mb-7"
        >
          The team behind<br />
          <span class="gradient-text bg-gradient-to-br">160+</span> hackathons
        </h1>
        <p class="font-medium mb-10 max-w-md text-center sm:text-lg">
          We've got your back (and your hack) at every stage, providing support
          throughout your hackathon journey.
        </p>
      </div>

      <!--Team carousel-->
      <div class="w-screen hide-scrollbar carousel">
        <ul class="hide-scrollbar carousel__list">
          <li
            v-for="(item, index) in buidlboxTeam"
            :key="index"
            class="carousel__item"
            tabindex="0"
            @click="selectSlide"
          >
            <div class="carousel__box">
              <div class="carousel__image">
                <img
                  :src="`/team/${item.image}.jpg?fit=crop&h=720&q=80`"
                  width="480"
                  height="720"
                />
              </div>
              <div class="carousel__contents">
                <h2 class="user__name">{{ item.name }}</h2>
                <h3
                  class="user__title section-eyebrow"
                  :class="[
                    index % 3 === 0
                      ? 'text-secondary'
                      : index % 2 === 0
                      ? 'text-primary'
                      : 'text-tertiary',
                  ]"
                >
                  {{ item.eyebrow }}
                </h3>
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
    <section class="mt-52 overflow-hidden relative pb-4">
      <img
        src="/images/background-gradient.png"
        alt=""
        class="absolute -top-120 -right-[10px] h-full w-auto z-0 m-auto"
      />
      <img
        src="/images/background-gradient.png"
        alt=""
        class="absolute -top-120 -left-[10px] rotate-180 z-0 h-full w-auto m-auto"
      />
      <div
        class="flex items-center justify-center flex-col sm:gap-16 gap-28 px-6 relative z-10"
      >
        <div class="child:mx-auto max-w-8xl">
          <div class="flex items-center gap-2 mb-4 justify-center">
            <EnvelopeIcon class="text-on-surface h-4 w-4" />

            <h4 class="section-eyebrow !leading-[120%]">Testimonials</h4>
          </div>
          <h1
            class="slide-in-section section-title !leading-[120%] text-4xl sm:text-6xl mb-7 text-center max-w-2xl"
          >
            See what people say about us
          </h1>
          <p class="font-medium text-center max-w-md sm:text-lg">
            Here's some feedback from buidlers, sponsors and organizers of their
            experience with buidlbox.
          </p>
        </div>
        <div
          class=""
        >
          <div class="">
            <ClientOnly>
              <div
                v-masonry
                transition-duration="1s"
                item-selector=".item"
                class="masonry-container w-screen flex justify-center m-auto"
                :gutter="5"
                :fit-width="true"
              >
                <div
                  v-masonry-tile
                  class="item mb-[5px]"
                  :key="index"
                  v-for="(person, index) in [
                    ...testimonialsRow1,
                    ...testimonialsRow2,
                    ...testimonialsRow3,
                  ]"
                >
                  <div
                    class="max-w-[80vw] sm:max-w-[250px] md:max-w-[400px] rounded-[32px] bg-card-bg border border-surface 2xl:px-14 xl:px-9 px-6 sm:py-8 py-6"
                  >
                    <div class="flex items-center gap-4 mb-6">
                      <img
                        :src="person.avatar"
                        class="bg-gray-400 rounded-full sm:w-[46px] sm:h-[46px] w-7 h-7 flex-shrink-0"
                      />

                      <div>
                        <p
                          class="section-eyebrow sm:mb-2 mb-1"
                          :class="{
                            'text-primary': person.role == 'buidler',
                            'text-secondary': person.role == 'organiser',
                          }"
                        >
                          {{ person.role }}
                        </p>
                        <p class="sm:text-base text-sm">{{ person.name }}</p>
                      </div>
                    </div>
                    <p
                      class="!leading-normal font-bold xl:text-base text-sm"
                    >
                      {{ person.testimonial }}
                    </p>
                  </div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <!-- final CTA -->
    <section class="relative w-screen px-4 mt-52 overflow-hidden h-screen">
      <div
        class="flex flex-col items-center max-w-full justify-center z-50 child:z-50"
      >
        <h1
          class="section-title !leading-[120%] text-4xl sm:text-6xl mb-7 text-center"
        >
          Ready to grow your community?
        </h1>
        <p class="font-medium mb-10 max-w-md text-center sm:text-lg">
          Let's level up, together – schedule a call today to discuss next
          steps.
        </p>
        <GradientButton
          class="flex-shrink-0 flex-grow-0"
          @click="
            () => {
              isTrialModalOpen = true;
              mixpanel.track('Request a demo', {
                type: 'Lead',
              });
            }
          "
          >Request a demo</GradientButton
        >
      </div>
      <div
        class="origin-center z-0 absolute h-32 w-32 bottom-0 left-1/2 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center h-32 w-32 animation-delay-0"
          src="/images/circle1.svg"
          alt="buidlbox logo"
        />
      </div>
      <div
        class="origin-center z-0 absolute h-32 w-32 bottom-0 left-1/2 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center z-0 h-32 w-32 animation-delay-2000"
          src="/images/circle2.svg"
          alt="buidlbox logo"
        />
      </div>
      <div
        class="origin-center z-0 absolute h-32 w-32 bottom-0 left-1/2 m-auto transform -translate-x-1/2"
      >
        <img
          class="animate-grow origin-center z-0 h-32 w-32 animation-delay-4000"
          src="/images/circle1.svg"
          alt="buidlbox logo"
        />
      </div>

      <div class="absolute bottom-0 left-0 right-0 m-auto"></div>
    </section>
  </div>

  <RequestTrial
    :dark-bg="true"
    :is-modal-open="isTrialModalOpen"
    @close-modal="isTrialModalOpen = false"
  />

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
</template>

<style scoped>
:root {
  --height: calc(80vh - 50px);
  --width: 450px;
}

.background-gradient {
  background: rgb(16, 20, 24);
  background: linear-gradient(
    180deg,
    rgba(16, 20, 24, 0) 0%,
    rgba(16, 20, 24, 1) 30%,
    rgba(16, 20, 24, 1) 98%
  );
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 15px 2px,
    rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  contain: layout;
  isolation: isolate;
}

.carousel__item,
.carousel__item * {
  transition: all 0.6s cubic-bezier(0.55, 0.24, 0.18, 1);
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
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 0) 40%,
    rgba(118, 221, 136, 0.5) 70%,
    rgba(0, 255, 246, 0.6) 100%
  );
  transition: all 0.66s cubic-bezier(0.55, 0.24, 0.18, 1);
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
  background-image: radial-gradient(
    ellipse at 0px 0px,
    rgba(0, 0, 0, 0.4) 30%,
    transparent 50%
  );
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
  letter-spacing: 0.8px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}

.carousel__contents .user__title {
  font-size: 0.875em;
  letter-spacing: 1.25px;
  font-weight: 500;
  text-transform: uppercase;
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
    background-image: radial-gradient(
      ellipse at 100% 100%,
      rgba(0, 0, 0, 0.4) 0%,
      transparent 50%
    );
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
.grid-sizer { width: 20%; }
</style>
