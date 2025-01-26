<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        v-if="!ended"
        class="cursor-pointer"
        @click="openLetter"
      >
        <div id="heart" />

        <div class="text-white ">
          Tap The Heart
        </div>
      </div>

      <ThanksHeart v-if="ended" />
    </div>
  </div>
</template>

<script setup>
import { useFirestore } from 'vuefire'
import { doc, updateDoc, getDoc } from 'firebase/firestore'

const db = useFirestore()

const docRef = doc(db, 'answers', 'rYLxSZ585PJFmZgGW0rf')

const ended = ref(false)

useHead({
  title: 'Aya\'s Secret Message',
  bodyAttrs: {
    class: 'bg-red-600',
  },
  script: [
    { src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11' },
  ],
})

async function openLetter() {
  const doc = await getDoc(docRef)

  const docData = doc.data()

  updateDoc(docRef, {
    LOADED: docData.LOADED + 1,
  })

  Swal.fire({
    title: 'Hi Aya!',
    text: 'I have something for you. Click Next to reveal it.',
    icon: 'info',
    confirmButtonText: 'Next',
    allowOutsideClick: false,
  }).then(() => {
    awesomeLetter()
  })
}

function awesomeLetter() {
  Swal.fire({
    title: 'Aya,',
    text: 'You are amazing!',
    confirmButtonText: 'Next',
    allowOutsideClick: false,
  })
    .then(() => {
      jeffLetter()
    })
}

function calculateDaysFromJanFirst2025(targetDate = new Date()) {
  // Set the reference date to January 1, 2025
  const janFirst2025 = new Date('2025-01-01')

  // Calculate the difference in time (milliseconds)
  const differenceInTime = targetDate - janFirst2025

  // Convert milliseconds to days (1 day = 1000ms * 60s * 60min * 24hrs)
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))

  return differenceInDays + 1
}

function jeffLetter() {
  const days = calculateDaysFromJanFirst2025()

  Swal.fire({
    title: 'Marga,',
    text: `You've known Jeff for ${days} days.`,
    confirmButtonText: 'Next',
    allowOutsideClick: false,
  })
    .then(() => {
      appreciateLetter()
    })
}

function appreciateLetter() {
  const days = calculateDaysFromJanFirst2025()
  Swal.fire({
    title: 'Aya,',
    text: `I just want to take a moment to say how much I truly appreciate you. Since we met on January 1st, these past ${days} days have been amazing, and I’ve grown to admire you more and more. Getting to know you has been such a wonderful experience, and I feel so lucky to have you in my life. Whether it’s through our conversations or the little moments we’ve shared, you’ve brought so much positivity and happiness my way. I genuinely appreciate you and everything you do.`,
    confirmButtonText: 'Next',
    allowOutsideClick: false,
  })
    .then(() => {
      canIBeYourValentine()
    })
}

async function canIBeYourValentine() {
  Swal.fire({
    title: 'Aya,',
    text: 'Will you be my Valentine?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    allowOutsideClick: false,
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Yay!',
        text: 'I will make you happy every day. 😍',
        icon: 'success',
        confirmButtonText: 'See You!',
        allowOutsideClick: false,
      }).then(async () => {
        const doc = await getDoc(docRef)

        const docData = doc.data()

        updateDoc(docRef, {
          YES: docData.YES + 1,
        })

        ended.value = true
      })
    }
    else {
      const doc = await getDoc(docRef)

      const docData = doc.data()

      updateDoc(docRef, {
        NO: docData.NO + 1,
      })

      Swal.fire({
        title: 'OOps!',
        text: 'OOps! There\'s an error. Please try again.',
        icon: 'error',
        confirmButtonText: 'Next',
        allowOutsideClick: false,
      })
        .then(() => {
          canIBeYourValentine()
        })
    }
  })
}
</script>

<style scoped>
.ml6 {
    position: relative;
    font-weight: 900;
    font-size: 3.3em;
}

.ml6 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
}

.ml6 .letter {
    display: inline-block;
    line-height: 1em;
}

#heart {
    position: relative;
    width: 100px;
    height: 90px;
    animation: heartbeat 1s infinite;
    margin: 0 auto
}

#heart:before,
#heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #fff;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

#heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}

@keyframes heartbeat {
    0% {
        transform: scale(.75);
    }

    20% {
        transform: scale(1);
    }

    40% {
        transform: scale(.75);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(.75);
    }

    100% {
        transform: scale(.75);
    }
}
</style>
