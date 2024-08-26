<!-- <template>
  <navbarr />

  <RouterView />
</template>
<script setup>
import { ref, provide } from "vue";
import navbarr from "./components/navbar.vue";
import Admin from './components/admine.vue';

const data = ref([
  {
    id: 1,
    image: "../../src/assets/imges/bgg.avif",
    title: "Casual T-Shirt",
    price: "$10",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 2,
    image: "../../src/assets/imges/kk.avif",
    title: "Denim Jacket",
    price: "$20",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 3,
    image: "../../src/assets/imges/ii.avif",
    title: "Summer Dress",
    price: "$30",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 4,
    image: "../../src/assets/imges/u.avif",
    title: "Formal Shirt",
    price: "$40",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 5,
    image: "../../src/assets/imges/oo.avif",
    title: "Classic Jeans",
    price: "$50",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 6,
    image: "../../src/assets/imges/o.avif",
    title: "Winter Coat",
    price: "$60",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
  {
    id: 7,
    image: "../../src/assets/imges/one.avif",
    title: "Sports Hoodie",
    price: "$70",
    description: "Clothes are garments worn on the body, typically made from fabrics or textiles, but over time have included garments made from animal skin and other thin sheets of materials put together. The wearing of clothes is mostly restricted to human beings and is a feature of nearly all human societies. Clothes serve many purposes: they can protect from the elements, provide modesty, enhance appearance, and signify status or identity. The styles, designs, and types of clothing vary widely based on culture, occasion, season, and personal preference, ranging from everyday casual wear to formal attire for special events",
  },
]);
provide("data", data); // Provide products to children components
</script> -->
<template>
  <navbarr />
  <RouterView />
</template>

<script setup>
import { ref, provide, onMounted , watch } from 'vue';
import navbarr from './components/navbar.vue';

// Initialize data with local storage or an empty array
const data = ref(JSON.parse(localStorage.getItem('items')) || []);

// Provide data to child components
provide('data', data);

// Update local storage when data changes
watch(data, (newValue) => {
  localStorage.setItem('items', JSON.stringify(newValue));
}, { deep: true });
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1,
p,
h2 {
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
</style>