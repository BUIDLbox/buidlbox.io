<script setup lang="ts">
import { tiers, sections } from '~/data';
import { XMarkIcon, CheckIcon } from '@heroicons/vue/20/solid';
</script>

<template>
  <div class="relative lg:pt-6 2xl:pt-14">
    <div class="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
      <!-- Feature comparison (up to lg) -->
      <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
        <h2 id="mobile-comparison-heading" class="sr-only">
          Feature comparison
        </h2>

        <div class="mx-auto max-w-2xl space-y-16">
          <div
            v-for="tier in tiers"
            :key="tier.id"
            class="border-t border-gray-900/10"
          >
            <div
              :class="[
                tier.featured ? 'border-secondary' : 'border-transparent',
                '-mt-px w-72 border-t-2 pt-10 md:w-80',
              ]"
            >
              <h3
                :class="[
                  tier.featured ? 'text-secondary' : 'text-on-surface',
                  'text-sm font-semibold leading-6',
                ]"
              >
                {{ tier.name }}
              </h3>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                {{ tier.description }}
              </p>
            </div>

            <div class="mt-10 space-y-10">
              <div v-for="section in sections" :key="section.name">
                <h4 class="text-sm font-semibold leading-6 text-on-surface">
                  {{ section.name }}
                </h4>
                <div class="relative mt-6">
                  <!-- Fake card background -->
                  <div
                    aria-hidden="true"
                    class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                  />

                  <div
                    :class="[
                      tier.featured
                        ? 'ring-2 ring-indigo-600'
                        : 'ring-1 ring-gray-900/10',
                      'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                    ]"
                  >
                    <dl class="divide-y divide-gray-200 text-sm leading-6">
                      <div
                        v-for="feature in section.features"
                        :key="feature.name"
                        class="flex items-center justify-between py-3 px-4 sm:grid sm:grid-cols-2 sm:px-0"
                      >
                        <dt class="pr-4 text-gray-600">{{ feature.name }}</dt>
                        <dd
                          class="flex items-center justify-end sm:justify-center sm:px-4"
                        >
                          <span
                            v-if="typeof feature.tiers[tier.name] === 'string'"
                            :class="
                              tier.featured
                                ? 'font-semibold text-secondary'
                                : 'text-on-surface'
                            "
                            >{{ feature.tiers[tier.name] }}</span
                          >
                          <template v-else>
                            <CheckIcon
                              v-if="feature.tiers[tier.name] === true"
                              class="mx-auto h-5 w-5 text-secondary"
                              aria-hidden="true"
                            />
                            <XMarkIcon
                              v-else
                              class="mx-auto h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span class="sr-only">{{
                              feature.tiers[tier.name] === true ? "Yes" : "No"
                            }}</span>
                          </template>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <!-- Fake card border -->
                  <div
                    aria-hidden="true"
                    :class="[
                      tier.featured
                        ? 'ring-2 ring-indigo-600'
                        : 'ring-1 ring-gray-900/10',
                      'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature comparison (lg+) -->
      <section aria-labelledby="comparison-heading" class="hidden lg:block">
        <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

        <div
          class="grid grid-cols-3 gap-x-8 border-t border-gray-900/10 before:block"
        >
          <div
            v-for="tier in tiers"
            :key="tier.id"
            aria-hidden="true"
            class="-mt-px"
          >
            <div
              :class="[
                tier.featured ? 'border-secondary' : 'border-transparent',
                'border-t-2 pt-10',
              ]"
            >
              <p
                :class="[
                  tier.featured ? 'text-secondary' : 'text-on-surface',
                  'text-sm font-semibold leading-6',
                ]"
              >
                {{ tier.name }}
              </p>
              <p class="mt-1 text-sm leading-6 text-on-surface-secondary">
                {{ tier.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="-mt-6 space-y-16">
          <div v-for="section in sections" :key="section.name">
            <h3 class="text-sm font-semibold leading-6 text-on-surface">
              {{ section.name }}
            </h3>
            <div class="relative -mx-8 mt-10">
              <!-- Fake card backgrounds -->
              <div
                class="absolute inset-y-0 inset-x-8 grid grid-cols-3 gap-x-8"
                aria-hidden="true"
              >
                <div class="h-full w-full rounded-lg shadow-sm" />
                <div class="h-full w-full rounded-lg bg-surface shadow-sm" />
                <div class="h-full w-full rounded-lg bg-surface shadow-sm" />
              </div>

              <table class="relative w-full border-separate border-spacing-x-8">
                <thead>
                  <tr class="text-left">
                    <th scope="col">
                      <span class="sr-only">Feature</span>
                    </th>
                    <th v-for="tier in tiers" :key="tier.id" scope="col">
                      <span class="sr-only">{{ tier.name }} tier</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(feature, featureIdx) in section.features"
                    :key="feature.name"
                  >
                    <th
                      scope="row"
                      class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-on-surface"
                    >
                      {{ feature.name }}
                      <div
                        v-if="featureIdx !== section.features.length - 1"
                        class="absolute inset-x-8 mt-3 h-px bg-around-forms"
                      />
                    </th>
                    <td
                      v-for="tier in tiers"
                      :key="tier.id"
                      class="relative w-1/4 px-4 py-0 text-center"
                    >
                      <span class="relative h-full w-full py-3">
                        <span
                          v-if="typeof feature.tiers[tier.name] === 'string'"
                          :class="[
                            tier.featured
                              ? 'font-semibold text-secondary'
                              : 'text-on-surface',
                            'text-sm leading-6',
                          ]"
                          >{{ feature.tiers[tier.name] }}</span
                        >
                        <template v-else>
                          <CheckIcon
                            v-if="feature.tiers[tier.name] === true"
                            class="mx-auto h-5 w-5 text-secondary"
                            aria-hidden="true"
                          />
                          <XMarkIcon
                            v-else
                            class="mx-auto h-5 w-5 text-primary"
                            aria-hidden="true"
                          />
                          <span class="sr-only">{{
                            feature.tiers[tier.name] === true ? "Yes" : "No"
                          }}</span>
                        </template>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Fake card borders -->
              <div
                class="pointer-events-none absolute inset-y-0 inset-x-8 grid grid-cols-3 gap-x-8 before:block"
                aria-hidden="true"
              >
                <div
                  v-for="tier in tiers"
                  :key="tier.id"
                  :class="[
                    tier.featured
                      ? 'ring-2 ring-secondary'
                      : 'ring-1 ring-around-forms',
                    'rounded-lg',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>