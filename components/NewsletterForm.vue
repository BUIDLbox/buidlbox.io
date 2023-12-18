<script setup lang="ts">
import { newsletterSubscribeAPI } from "~/api";
import { ButtonType } from "~/types/button";

const props = defineProps<{
  subscribedSuccessfully: boolean;
  source: "source-banner" | "source-footer";
}>();
const emit = defineEmits(["subscribed"]);

const email = ref("");
const isSubscribeLoading = ref(false);

const subscribeError = ref();

const subscribe = async (email: string) => {
  try {
    isSubscribeLoading.value = true;
    const { success, error } = await newsletterSubscribeAPI({email, source: props.source});
    if (!success) throw new Error(error?.message);
    emit("subscribed");
  } catch (err) {
    subscribeError.value = getErrorMessage(err);
  } finally {
    isSubscribeLoading.value = false;
  }
};
</script>

<template>
  <div class="px-4">
    <div class="w-full sm:py-12 py-4">
      <div class="flex items-center xl:gap-16 gap-6 max-w-7xl m-auto">
        <div
          class="flex flex-col gap-6 items-center justify-center py-8 px-4 m-auto w-full"
        >
          <GradientTitle
            class="font-heading sm:text-3xl text-2xl font-extrabold w-fit text-center"
            >SIGN UP FOR OUR WEEKLY NEWSLETTER</GradientTitle
          >
          <p
            class="2xl:text-lg text-on-surface text-center max-w-[34rem]"
          >
            Get the latest scoop on buidlbox hackathons, product announcements,
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
              @click="email && subscribe(email)"
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
              Error: {{ subscribeError }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
