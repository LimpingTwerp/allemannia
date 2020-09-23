<template>
<div>
 <a href="" class="middle text-white text-3xl font-serif tracking-wider"><slot></slot></a>
</div>
</template>

<style type="text/css" media="screen">
a.middle
{
    color: #fff;
    position: relative;
}

a.middle:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}


a.middle:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
    
</style>

<script>
export default {
  name: "HeaderButton"
};
</script>

