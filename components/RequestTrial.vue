<script setup lang="ts">
import { ref, type Ref } from "vue";
import { ModalSize } from "@/types/general";
// import { useToast } from "vue-toastification";
import { requestTrialAPI } from "~/api";

defineProps<{
  isModalOpen: boolean;
}>();

const emit = defineEmits(["closeModal"]);

// const toast = useToast();
const isRequestTrialLoading = ref(false);
const form: Ref<any> = ref(null);
const trial = ref({
  entityName: "",
  teamMembers: undefined,
  industry: "",
  contactEmail: "",
  link: "",
  comments: "",
});

const submit = () => {
  const node = form.value?.node;
  node.submit();
};

const submitForm = async (data: any) => {
  try {
    isRequestTrialLoading.value = true;
    const newData = { ...data, teamMembers: +data.teamMembers };
    await requestTrialAPI(newData);

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
  <Teleport to="body">
    <SlideInModal
      title="Request a free trial"
      :size="ModalSize.MD"
      :isOpen="isModalOpen"
      @close="$emit('closeModal')"
    >
      <template v-slot:content>
        <div class="p-4">
          <p class="text-on-surface-secondary text-xs 2xl:text-sm mb-4">
            The trial will allow you to explore the features, create your guidl,
            invite team members, hackathons and challenges in draft mode, and
            view the landing page. However, during the trial period, you will
            not have the ability to publish the hackathon.
          </p>
          <FormKit
            ref="form"
            type="form"
            id="registration-example"
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
              type="number"
              v-model="trial.teamMembers"
              name="teamMembers"
              label="Number of team members you would like to have on buidlbox (optional)"
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
              v-model="trial.comments"
              name="comments"
              :help="'Max 250 characters'"
              label="Anything you would like to add? (optional)"
            />
            <div class="max-w-2xl flex w-full justify-end">
              <Button
                title="Request trial"
                class="mt-2"
                :is-loading="isRequestTrialLoading"
                @clicked="submit()"
              />
            </div>
          </FormKit>
        </div>
      </template>
    </SlideInModal>
  </Teleport>
</template>
