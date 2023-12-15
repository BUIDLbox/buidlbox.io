<script setup lang="ts">
import { ref, type Ref } from "vue";
import { ModalSize } from "@/types/general";
// import { useToast } from "vue-toastification";
import { requestTrialAPI } from "~/api";

defineProps<{
  isModalOpen: boolean;
  darkBg?: boolean;
}>();

const emit = defineEmits(["closeModal"]);

// const toast = useToast();
const isRequestTrialLoading = ref(false);
const form: Ref<any> = ref(null);
const trial = ref({
  entityName: "",
  industry: "",
  contactEmail: "",
  link: "",
  requirements: "",
});

const submit = () => {
  const node = form.value?.node;
  node.submit();
};

const submitForm = async (data: any) => {
  try {
    isRequestTrialLoading.value = true;
    await requestTrialAPI(data);
    // TODO: add a modal after submitting - confirmation
    // toast.success(
    //   "Thank you for submitting your free trial request! Our team has received your information and will get back to you shortly.",
    //   {
    //     timeout: 4000,
    //   }
    // );
  } catch (err) {
    // showErrorToast(err);
  } finally {
    isRequestTrialLoading.value = false;
    emit("closeModal");
  }
};
</script>

<template>
  <div>
    <Teleport to="body">
      <SlideInModal
        :dark-bg="darkBg"
        title="Request a demo"
        :size="ModalSize.MD"
        :isOpen="isModalOpen"
        @close="$emit('closeModal')"
      >
        <template v-slot:content>
          <div class="p-4">
            <p class="text-on-surface-secondary text-xs 2xl:text-sm mb-4">
              Please tell us more about your organization. our sales team will
              reach out soon.
            </p>
            <FormKit
              ref="form"
              type="form"
              :form-class="'w-full'"
              submit-label="Register"
              @submit="submitForm"
              :incomplete-message="false"
              :actions="false"
            >
              <FormKit
                class="w-full"
                :validation="[['required']]"
                v-model="trial.entityName"
                name="entityName"
                label="Entity / project name"
              />
              <FormKit
                class="w-full max-h-12"
                type="textarea"
                :maxLength="250"
                :validation="[['required']]"
                v-model="trial.industry"
                name="industry"
                :help="'Max 250 characters'"
                label="Your domain / industry"
              />
              <FormKit
                class="w-full"
                type="email"
                v-model="trial.contactEmail"
                name="contactEmail"
                label="Contact email address"
                validation="required|email"
                suffix-icon="email"
                placeholder="janedoe@buidlbox.io"
              />
              <FormKit
                class="w-full"
                type="url"
                v-model="trial.link"
                :validation="[['required']]"
                name="link"
                label="Social link / website"
                placeholder="https://supermodular.xyz"
              />
              <FormKit
                class="w-full max-h-12"
                type="textarea"
                :maxLength="250"
                v-model="trial.requirements"
                name="requirements"
                :help="'Max 250 characters'"
                label="Anything you would like to add? (optional)"
              />
              <div class="max-w-2xl flex w-full justify-end">
                <Button
                  v-if="!darkBg"
                  title="Request demo"
                  class="mt-2"
                  :is-loading="isRequestTrialLoading"
                  @clicked="submit()"
                />
                <GradientButton
                  v-else
                  class="mt-2"
                  :is-loading="isRequestTrialLoading"
                  @clicked="submit()"
                  >Request demo</GradientButton
                >
              </div>
            </FormKit>
          </div>
        </template>
      </SlideInModal>
    </Teleport>
  </div>
</template>
