import axios from "axios";
import { defineStore } from "pinia";

export const postErrorToSlack = async (error: any) => {
  /**
    for backend
     const slackToken = 'xoxb-4768454365056-4747343573076-uImVErYDatOo7OJnryjnh1nf';
      const url = 'https://slack.com/api/chat.postMessage';
   */

  const webHook =
    "https://hooks.slack.com/services/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";
  await axios.post(
    webHook,
    {
      channel: "#error-log",
      text: error,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );
};


// @ts-ignore
export const useErrorStore = defineStore('APP/CORE/ERRORS', () => {
  const errors = useStorage('APP/CORE/ERRORS', ref<any[]>([]))
  const pushError = (error: any) => errors.value.push(error)
  const errorRevese = computed(() => errors.value)
  const clearError = () => errors.value = []
  return {
    errors,
    errorRevese,
    pushError,
    clearError
  }
})

export const postErrorToStorage = (error: any) => {
  // const errorStore = useErrorStore()
  // errorStore.pushError(error);
}
