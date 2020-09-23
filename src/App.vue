<template>
  <div id="app">
    <Slider class="hidden lg:block">
        <SliderCard big="Allemannia" small="Deine Mutter war auch schon hier." imagepath="./src/assets/img/titel1.jpg"></SliderCard>
        <SliderCard big="Es brennt" small=" Aber keiner tut was." imagepath="./src/assets/img/titel2.jpg"></SliderCard>
        <SliderCard big="Elite" small="Nur die Schlausten und Schönsten." imagepath="./src/assets/img/titel3.jpg"></SliderCard>
    </Slider>
  <HeaderNav></HeaderNav>
  <div class="relative flex flex-col items-center w-full">
    <Entry title="Kai ist super"> <ImagePlace class="float-left w-2/5" imagepath="./src/assets/img/mannhure.jpg">Exemplarische Mannhure</ImagePlace>Lorem ipsum dolor sit amet, no consul appellantur philosophia eam, graeco voluptua splendide et sit. Oblique patrioque mei ad, te mea errem splendide. Id vel erant omnium definiebas, minim dolor invidunt est no. No usu odio impetus, nam no probo utroque. Vel id saepe legere minimum, ad case euripidis nam. Nam omnes audiam cu, ei integre platonem inciderint usu.

    Ea quo vero accumsan democritum, cu veritus erroribus ius. Duo quot zril putant at, et platonem percipitur ius, his enim offendit in. An case dicunt sit, no vis tation numquam denique, pro modus velit salutandi et. Et vis ludus latine, cu nam augue ludus periculis.</Entry>
    
    <Entry title="Kai ist superer">Lorem ipsum dolor sit amet, no consul appellantur philosophia eam, graeco voluptua splendide et sit. Oblique patrioque mei ad, te mea errem splendide. Id vel erant omnium definiebas, minim dolor invidunt est no. No usu odio impetus, nam no probo utroque. Vel id saepe legere minimum, ad case euripidis nam. Nam omnes audiam cu, ei integre platonem inciderint usu.

    Ea quo vero accumsan democritum, cu veritus erroribus ius. Duo quot zril putant at, et platonem percipitur ius, his enim offendit in. An case dicunt sit, no vis tation numquam denique, pro modus velit salutandi et. Et vis ludus latine, cu nam augue ludus periculis.</Entry>
    <ProgramMonth></ProgramMonth>
    </div>

</div>

</template>

<script>

import Entry from "./components/Entry"
import HeaderNav from "./components/HeaderNav"
import Slider from "./components/Slider"
import SliderCard from "./components/SliderCard"
import ImagePlace from "./components/ImagePlace"
import ProgramMonth from "./components/ProgramMonth"

export default {
  name: 'app',
  components: {
    Entry,HeaderNav,Slider,SliderCard,ImagePlace,ProgramMonth
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="./assets/css/tailwind.css">
