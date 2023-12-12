<script setup lang="ts">
import { Mixpanel } from "mixpanel-browser";
const route = useRoute();
const mixpanel = inject("mixpanel") as Mixpanel;

watch(
    () => route.path,
    () => {
        if (mixpanel) {
            mixpanel.track_pageview({
                page: route.path,
                type: "buidlbox.io",
            });
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="bg-secondary-surface mb-16 w-screen max-w-screen sm:overflow-visible overflow-hidden min-h-screen relative">

        <div class="w-full py-4 flex items-center justify-between padding fixed z-[999]">

            <img src="/buidlbox-logo-horizontal.png" alt="buidlbox logo" width="180" height="40" />
            <NuxtLink :href="FEATURES_URL">
                <GradientButton class="flex-shrink-0 flex-grow-0" @clicked="() => {
                    mixpanel.track('Request a demo', {
                        type: 'Lead',
                    });
                }
                    ">Request a demo</GradientButton>
            </NuxtLink>
        </div>

        <slot />
        <p>Fake Footer</p>

    </div>
</template>
