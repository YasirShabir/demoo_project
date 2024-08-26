<template>
  <div class="container-fluid singal-product" v-if="singalvalue">
    <h1 class="box-heading">Single Product</h1>
    <div class="row">
      <div class="col-lg-5">
        <div class="img-box">
          <img
            :src="singalvalue.picture"
            class="card-img-top product-image"
            alt="Product Image"
          />
        </div>
      </div>
      <div class="col-lg-7">
        <div class="body-detls">
          <h5 class="card-title">{{ singalvalue.title }}</h5>
          <p class="card-text-pregraf">{{ singalvalue.description }}</p>
          <h5 class="card-text">{{ singalvalue.price }}</h5>
          <p class="card-text-pregraf2">{{ singalvalue.id  }} : Left in stock</p>
        </div>
        <div class="Quantity-box">
          <h6 class="Quantity-box-heading">Quantity</h6>
          <input type="number" class="Quantity-box-input" v-model="quantity" min="1" />
          <router-link to="/pement">
            <button class="see-more">ORDER NOW</button>
          </router-link>
        </div>
        <h6 class="Quantity-box-heading">
          Category : <span class="sapn-p">Pants, Women, Lifestyle</span>
        </h6>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Product not found</p>
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const data = inject('data');
const route = useRoute();

const singalvalue = ref(null);
const quantity = ref(1); // Default quantity set to 1

onMounted(() => {
  const productId = route.params.id;

  // Debugging
  console.log('Injected data singal:', data.value);
  console.log('Product ID singal:', productId);

  // Check if data is defined and is an array
  if (Array.isArray(data.value)) {
    singalvalue.value = data.value.find(
      (item) => item.id === productId
    );
    console.log('Found product:', singalvalue.value);
  } else {
    console.error('Injected data is not an array or is undefined');
  }
});
</script>

<style scoped>
.singal-product {
  padding: 2rem 1rem;
}
.box-heading {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #0a0b0d;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  padding-bottom: 5px;
  display: inline-block;
  margin-bottom: 3rem;
}
.box-heading::after {
  content: "";
  background-color: #dc3545;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0px;
  left: 0;
  transform: translateX(-105%);
  transition: transform 0.6s ease;
}
.box-heading:hover::after {
  transform: translateX(0);
}
.img-box{
  padding: 1rem;
  border: 1px solid gray;
}
.product-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 5px;
}
.body-detls{
  width: 80%;
}
.card-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}
.card-text-pregraf {
  font-size: 1rem;
  color: grey;
  margin-bottom: 1rem;
}
.card-text {
  font-size: 1.5rem;
  color: #dc3545;
  margin-bottom: 1rem;
  font-weight: 600;
}
.card-text-pregraf2 {
  font-size: 1.2rem;
  color: #3935fc;
  font-weight: 700;
  margin-bottom: 1rem;
}
.Quantity-box {
  display: flex;
  align-items: center;
  margin: 2rem 0;
}
.Quantity-box-heading {
  font-size: 1.2rem;
  font-weight: 700;
}
.Quantity-box-input {
  width: 50px;
  margin: 0 2rem;
  padding: 10px 5px;
  text-align: center;
}
.sapn-p {
  color: grey;
  font-weight: 500;
  font-size: 1.1rem;
}
.see-more {
  background-color: #dc3545;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 01em;
  display: block;
  padding: 6px 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.see-more:hover {
  background-color: #f13043;
  transform: scale(1.05);
}
</style>
