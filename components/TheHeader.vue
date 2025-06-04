<template>
  <div class="flex justify-between items-center flex-wrap gap-5">
    <div class="leading-none flex-1 md:w-1/2">
      <h1>Jefferson Paltera</h1>
      <h3>Web DEVeloper</h3>
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex gap-2">
        <box-icon name="envelope" />
        <a
          href="mailto:hi@jeffp.one"
          class="hover:underline"
        >hi@jeffp.one</a>
      </div>
      <!-- <div class="flex gap-2">
                <box-icon name="phone"></box-icon>
                <a href="tel:+639171178024" class="hover:underline"
                    >(+63) 917-117-8024</a
                >
            </div> -->
      <div class="flex gap-2">
        <box-icon
          name="github"
          type="logo"
        />
        <a
          href="https://github.com/jeffpdotone"
          class="hover:underline"
          style="overflow-wrap: anywhere;"
        >https://github.com/jeffpdotone</a>
      </div>

      <div class="print:hidden">
        <ClientOnly>
          <div ref="aptBtn" />
        </ClientOnly>
      </div>
      <div class="hidden gap-2 print:flex">
        <box-icon name="globe" />
        <a href="https://jeffp.one">jeffp.one</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const aptBtn = ref()

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://calendar.google.com/calendar/scheduling-button-script.css',
    },
  ],
  script: [
    {
      src: 'https://calendar.google.com/calendar/scheduling-button-script.js',
      async: true,
      onload: () => {
        const unwatch = watch(aptBtn, (val) => {
          window.calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1fTgx1xv16Ep1VbVHEcMi1Rf8RKbfw2SqScrKY_uUgv8SB7ZKXouvIvIu-0GMmf2V6NL-JTDcn?gv=true',
            color: '#039BE5',
            label: 'Hire or Say Hi!',
            target: val,
          })

          nextTick(() => {
            unwatch()
          })
        }, { immediate: true })
      },
    },
  ],
})
</script>
