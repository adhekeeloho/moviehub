<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { useRouter } from "vue-router";
import LandingHeader from "../components/LandingHeader.vue";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("successfully registered");
      console.log(auth.currentUser);

      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log("registration successfully");
      console.log(result.user);
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>

<template>
<LandingHeader/>
  <div class="flex h-screen us bg-gradient-to-l from-sky-900 to-slate-900">
    <div class="w-full max-w-xs m-auto bg-sky-100 rounded p-5">
      <header class="flex justify-center">
        <svg
          version="1.1"
          class="rocket"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100px"
          height="60px"
          viewBox="0 0 360 360"
          enable-background="new 0 0 360 360"
          xml:space="preserve"
        >
          <path
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M191.357,132.787l60.498,23.933 c5.553,2.2,6.646,0.521,2.422-3.744l-57.369-57.912c-4.217-4.258-12.096-5.655-17.497-3.094l-11.561,5.474"
          />
          <path
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M125.846,198.645l23.885,60.365 c2.2,5.572,0.509,6.646-3.741,2.441l-57.925-57.396c-4.251-4.229-5.645-12.1-3.085-17.498l5.466-11.542"
          />
          <path
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M170.295,186.65l-22.106,22.115l-0.042,0.029 c-5-1.922-142.409-60.772-142.409-196c135.571,0,194.067,137.398,196,142.421l-0.104,0.097l-21.687,21.703"
          />
          <path
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M200.289,175.386l38.936,39.335 c12.106,10.666,35.463,12.584,42.063,13.454c7.594,0.992,46.429,14.026,0.197,63.363c-46.228,49.336-60.148-8.451-60.953-11.636 c-2.284-8.938-5.586-23.967-14.975-33.444l-37.791-38.207"
          />
          <circle
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            cx="91.883"
            cy="98.929"
            r="24.999"
          />
          <circle
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            cx="91.883"
            cy="98.929"
            r="33"
          />
          <polyline
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            points="153.305,203.906 161.513,212.365 179.305,194.059"
          />
          <polyline
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            points="188.034,185.521 206.102,167.987 197.379,159.522"
          />
          <path
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M209.008,215.838L209.008,215.838 c-3.1,3.104-66.612-53.011-66.612-53.011c-2.555-2.557-0.938-8.33,2.167-11.432l0,0c3.103-3.103,8.877-4.725,11.434-2.166 C155.997,149.229,212.102,212.734,209.008,215.838z"
          />
          <polyline
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="98.5,124 98.5,97.5 88.5,97.5 88.5,75"
          />
          <polyline
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            points="11.734,61.082 11.824,60.993 53.734,19.083"
          />
          <polyline
            fill="none"
            stroke="#1A2A58"
            stroke-width="3"
            stroke-miterlimit="10"
            points="14.756,71.3 14.868,71.189 63.756,22.3"
          />

          <g class="circles">
            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="291.5"
              cy="265.5"
              r="37.5"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="27.5"
                to="37.5"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="267"
              cy="310"
              r="30"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="25"
                to="30"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="229.5"
              cy="324.5"
              r="20"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="15"
                to="20"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="335.5"
              cy="277.5"
              r="20"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="15"
                to="20"
                dur="0.7s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="306.5"
              cy="224.5"
              r="22.5"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="11"
                to="22.5"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="330.5"
              cy="332.5"
              r="10"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="5"
                to="10"
                dur="0.7s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="175.5"
              cy="291.5"
              r="10"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="5"
                to="10"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              fill="#1A2A58"
              stroke="#1A2A58"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="270.5"
              cy="177.5"
              r="10"
            >
              <animate
                attributeType="xml"
                attributeName="r"
                from="5"
                to="10"
                dur="0.7s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </header>
      <div class="flex justify-center">
        <span class="font-semibold text-[#1A2A58] text-xl tracking-tight"
          >Movie Hub</span
        >
      </div>
      <form action="#" @submit.prevent>
        <div class="flex justify-center mt-3">
          <h6 class="text-[#1A2A58] tracking-tight">SignUp Form</h6>
        </div>
        <div>
          <div>
            <label class="block mb-2 text-sky-900" for="username">Email</label>
            <input
              class="w-full p-2 mb-6 text-sky-900 border-b-2 border-sky-900 outline-none focus:bg-gray-300"
              v-model="email"
              type="email"
              name="username"
            />
          </div>
          <div>
            <label class="block mb-2 text-sky-900" for="password"
              >Password</label
            >
            <input
              class="w-full p-2 mb-6 text-sky-900 border-b-2 border-sky-900 outline-none focus:bg-gray-300"
              v-model="password"
              type="password"
              name="password"
            />
          </div>
          <div>
            <button
              @click="register"
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-l from-sky-900 to-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <footer class="flex mt-5 justify-between">
        <a
          style="cursor: pointer"
          @click="signInWithGoogle"
          class="flex justify-center"
        >
          <svg
            style="color: #1a2a58"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              fill="#1A2A58"
            ></path>
          </svg>
          <p class="text-sky-900">oogle</p>
        </a>

        <a
          class="text-sky-900 text-sm hover:underline float-right"
          style="cursor: pointer"
          @click="
            $router.push({
              name: 'login',
            })
          "
          >Log in to your Account</a
        >
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.us {
  font-family: "Poppins", sans-serif;
}
</style>