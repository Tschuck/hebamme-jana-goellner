<template>
  <div
    class="relative flex flex-col items-center justify-center w-full my-4 overflow-hidden md:my-16"
    :id="separatorId"
  >
    <h2 class="z-10 px-8 text-6xl font-cursive" style="background-color: var(--mw-bg-light)">
      {{ $t(`${separatorId}.title`) }}
    </h2>

    <div class="separator-line" />
  </div>
</template>

<script>
export default {
  props: {
    separatorId: { type: String },
  },
};
</script>

<style lang="postcss">
.separator-line {
  position: absolute;
  height: 5px;
  width: 80%;
  background-color: var(--mw-primary);

  @media (max-width: 767px) {
    width: 99%;
  }
}
</style>
