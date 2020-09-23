<template>
  <div>
<div class="relative pb-4/5 mt-2 mr-4 mb-2">
 <img class="absolute p-2 bg-desert h-full w-full object-cover" :src="imagepath">
</div>
 <p class="text-maroon text-center text-2xl leading-6 p-4 italic"><slot></slot></p>  
</div>
</template>


<script>
  // var image_height = document.getElementById('image').style.height;
  // document.getElementById('container').style.height=image_height;

export default {
  name: "ImagePlace", 
  props: ['imagepath'],
};
</script>

