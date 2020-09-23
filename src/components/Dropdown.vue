<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative block shadow-xl w-18 mx-auto">
      <button @click="open = !open" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
      </button>
      <div v-show="open" class="absolute shadow-lg rounded-lg top-auto bg-white mt-2 right-0 rounded-b">
          <a href="#" class="block px-8 py-4 text-4xl font-serif">Haus</a>
           <a href="#" class="block px-8 py-4 text-4xl font-serif">Gemeinschaft</a>
            <a href="#" class="block px-8 py-4 text-4xl font-serif">Mitgliedschaft</a>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "./OnClickOutside.vue";

export default {
  name: "DropdownDemo",
  components: {
    OnClickOutside
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false;
      }
    }
  }
};
</script>
