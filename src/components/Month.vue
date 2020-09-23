<template>
  <div>
    <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
  </div>
</template>

<script>
  export default {
    name: 'Month',
    components: { Month },
    data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
  }
</script>