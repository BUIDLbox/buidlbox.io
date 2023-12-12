<script setup lang="ts">
import { computed } from "vue";
import { ButtonSize, ButtonType } from "../types/button";
import loadingDots from "@/assets/lottie/loading-colored-dots.json";
const props = withDefaults(
    defineProps<{
        buttonType?: ButtonType;
        title?: string;
        size?: ButtonSize;
        transform?: boolean;
        disabled?: boolean;
        isLoading?: boolean;
        newTab?: boolean;
    }>(),
    {
        buttonType: ButtonType.Primary1,
        size: ButtonSize.Medium,
        transform: false,
    }
);

const classes = computed(() => {
    return {
        "bg-light-blue text-dark-blue": props.buttonType == ButtonType.Primary2,
        "hover:bg-mid-blue":
            props.buttonType == ButtonType.Primary2 && !props.disabled,

        "bg-transparent text-dark-blue": props.buttonType == ButtonType.Primary1,
        "hover:bg-light-cream":
            props.buttonType == ButtonType.Primary1 && !props.disabled,

        "border border-mid-blue text-light-cream":
            props.buttonType == ButtonType.Secondary2,
        "hover:border-light-blue":
            props.buttonType == ButtonType.Secondary2 && !props.disabled,

        "bg-transparent border-transparent border  text-light-cream":
            props.buttonType == ButtonType.Secondary1,
        "hover:border-light-cream hover:bg-inherit":
            props.buttonType == ButtonType.Secondary1 && !props.disabled,

        "bg-transparent text-secondary border-2 border-secondary":
            props.buttonType == ButtonType.Secondary3,
        "hover:bg-secondary hover:text-surface":
            props.buttonType == ButtonType.Secondary3 && !props.disabled,

        "opacity-50": props.disabled,
        "bg-primary text-white ": props.buttonType == ButtonType.Primary3,
        "bg-gradient-to-r from-primary to-secondary text-white":
            props.buttonType == ButtonType.Gradient,
        "bg-positive text-background hover:opacity-80":
            props.buttonType == ButtonType.Positive,
        "bg-destructive text-white hover:opacity-80 ":
            props.buttonType == ButtonType.Desctructive,
        "text-destructive-secondary hover:opacity-80":
            props.buttonType == ButtonType.Destructive2,
        "bg-tentative text-white ": props.buttonType == ButtonType.Tentative,
        "relative inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold":
            props.size == ButtonSize.XSmall,
        "sm:py-2 sm:px-3 sm:text-sm py-1 px-2 text-xs font-semibold":
            props.size == ButtonSize.Small,

        "py-2.5 px-4 text-sm": props.size == ButtonSize.Medium,

        "py-3.5 px-4.5 text-sm": props.size == ButtonSize.Large,

        "py-4.5 px-5.5 text-sm": props.size == ButtonSize.XLarge,

        "py-0 pointer-events-none": props.isLoading,
    };
});

const iconFill = computed(() => {
    return {
        "fill-on-primary":
            props.buttonType == ButtonType.Primary1 ||
            props.buttonType == ButtonType.Primary2 ||
            props.buttonType == ButtonType.Secondary3,
        "fill-on-surface  ": props.buttonType == ButtonType.Secondary1,
        "fill-background  ": props.buttonType == ButtonType.Secondary2,
        "fill-background ": props.buttonType == ButtonType.Positive,
        "fill-on-surface ": props.buttonType == ButtonType.Desctructive,
        "fill-white ": props.buttonType == ButtonType.Tentative,
    };
});
</script>

<template>
    <div class="relative">
        <div class=" p-0.5 gradient rounded-lg relative z-50 w-fit group">
            <div class=" p-0.5 gradient rounded-lg blur-xl opacity-25 group-hover:scale-125 transition-all absolute z-0 w-full h-full"></div>
            <button type="button" :disabled="disabled || isLoading" :class="{ 'cursor-not-allowed': disabled }"
                class="inter font-bold flex items-center justify-center  rounded-md relative overflow-hidden bg-secondary-surface">
                <!-- Content of the button -->
                <div v-if="isLoading">
                    <client-only>
                        <Vue3Lottie :animationData="loadingDots" class="transition-all duration-300" :height="20"
                            :width="50" />
                    </client-only>
                </div>
                <div class="px-8 py-4">
                    <slot></slot>
                </div>
            </button>
        </div>
    </div>
</template>
