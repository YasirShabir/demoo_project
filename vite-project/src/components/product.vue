<template>
  <div class="container-fluid product">
    <h1 class="box-heading">Products</h1>
    
    <!-- Check if there are no products -->
    <div v-if="!data.length" class="no-products">
      <p>No products available. Please create a product throw admin first.</p>
    </div>

    <!-- Display products when available -->
    <div v-else class="row">
      <div v-for="(item, index) in data" :key="index" class="col-md-4 mb-4">
        <div class="card h-100 product-card">
          <img
            :src="item.picture"
            class="card-img-top product-image"
            alt="Product Image"
          />
          <div class="card-body">
            <h5 class="card-title">Title: {{ item.title }}</h5>
            <h5 class="card-text">Price: {{ item.price }}</h5>
            <button class="see-more" @click="getSingalproduct(item.id)">See More</button>
            <button class="delete-btn" @click="deleteProduct(index)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();
const data = inject('data');

if (!data) {
  throw new Error('Data not provided!');
}

// Function to navigate to a single product's page
function getSingalproduct(id) {
  router.push(`/singalProduct/${id}`);
}

// Function to delete a product
function deleteProduct(index) {
  data.value.splice(index, 1); // Remove the product from the data array
}
</script>

<style scoped>
.product {
  padding: 2rem 1rem;
}
.no-products {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
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
  bottom: 0;
  left: 0;
  transform: translateX(-105%);
  transition: transform 0.6s ease;
}

.box-heading:hover::after {
  transform: translateX(0);
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  color: #333;
  margin: 0.8rem 0;
}

.card-text {
  font-size: 1.2rem;
  color: #dc3545;
}

.card-id {
  font-size: 0.875rem;
  color: #666;
}

.see-more {
  background-color: #dc3545;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  margin-right: 10px;
  padding: 6px 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.see-more:hover {
  background-color: #f13043;
  transform: scale(1.05);
}

.delete-btn {
  background-color: #dc3545;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  margin-left: auto;
  padding: 6px 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.delete-btn:hover {
  background-color: #a02d2d;
  transform: scale(1.05);
}
</style>