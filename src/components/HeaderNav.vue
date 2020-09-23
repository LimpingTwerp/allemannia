<template>
<header class="sticky top-0 shadow-md w-full px-4 py-3 bg-black z-10">
    <!-- small mobile stuff -->
    <div class="flex lg:hidden items-center w-full">
        <div class="w-1/3"></div>
        <img class="w-1/3 h-16 px-2 py-2" src="../assets/img/Zirkel.svg">
        <div class="w-1/3 flex justify-end">
            <div>
                <dropdown></dropdown>
            </div>
        </div>
    </div>
    <!-- bigger stuff -->
    <div class="hidden lg:flex items-center w-full justify-center" >
        <div class="hidden lg:flex w-2/3 justify-between items-center">
             <img class="h-16 px-2 py-2" src="../assets/img/Zirkel.svg">
            <HeaderButton>Haus</HeaderButton>
            <HeaderButton>Gemeinschaft</HeaderButton>
            <HeaderButton>Mitgliedschaft</HeaderButton>
        </div>
    </div>       
  </header>
</template>

<script>
import Dropdown from "./Dropdown";
import HeaderButton from "./HeaderButton";
export default {
  name: "HeaderNav",
components: {Dropdown,HeaderButton}
};
</script>
