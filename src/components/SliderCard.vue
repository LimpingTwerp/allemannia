<template>
   <div class="relative">
          <img class="h-screen object-cover" :src="imagepath">
          <h1 class="absolute h-full  text-white top-2/3 left-1/2 text-7xl font-voll transform -translate-x-1/2 tracking-wide shadow-lg opacity-75 text-shadow"> {{big}} </h1>
          <h2 class="absolute h-full  text-white top-4/5 left-1/2 text-4xl font-voll transform -translate-x-1/2"> {{small}}</h2>
        </div>
</template>

<script>

export default {
  name: "SliderCard",
props: ['big','small','imagepath']
};
</script>
