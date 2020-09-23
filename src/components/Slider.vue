<template>
  <div>
    <VueSlickCarousel style="line-height: 0" :arrows="true" :dots="false">
      <slot></slot>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Slider',
    components: { VueSlickCarousel },
  }
</script>