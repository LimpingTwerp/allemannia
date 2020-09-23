<template>
<div class="overflow-auto lg:w-2/3">
  <div class="px-6 py-8 block leading-5 my-4 mx-4 shadow-md">
      <h1 class="text-3xl font-serif text-orange-900 py-4"> {{title}} </h1>
      <div class="overflow-auto text-2xl leading-7 font-serif">
      <slot></slot>
      </div>
  </div>
  <hr class="grad-style my-6">
</div>
</template>

<script>

export default {
  name: "Entry",
props: ['title']
};
</script>
