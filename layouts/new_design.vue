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

        <div class="w-full py-4 flex justify-between padding fixed">
           
            <img src="/buidlbox-logo-horizontal.png" alt="buidlbox logo" width="180" height="40"
                class=" h-auto" />
            <NuxtLink :href="FEATURES_URL">
                <Button title="Request a demo"  class="sm:w-52" @clicked="() => {
                        mixpanel.track('Request a demo', {
                            type: 'Lead',
                        });
                    }
                    " />
            </NuxtLink>
        </div>

        <slot />
        <p>Fake Footer</p>

    </div>
</template>
