<template>
    <div class="container-fluid">
      <form @submit.prevent="createItem" class="form-container">
        <!-- ID Field -->
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" id="id" v-model="id" class="form-control" />
        </div>
        <!-- Title Field -->
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" class="form-control" />
        </div>
        <!-- Price Field -->
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" id="price" v-model="price" class="form-control" />
        </div>
        <!-- Description Field -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="description" class="form-control"></textarea>
        </div>
          <!-- Picture Field -->
      <div class="form-group">
        <label for="picture">Picture</label>
        <input type="file" id="picture" @change="handleFileUpload" class="form-control" />
        <div v-if="picture" class="image-preview">
          <img :src="picture" alt="Image preview" />
        </div>
      </div>
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

// Define refs for form fields
const id = ref('');
const title = ref('');
const price = ref('');
const description = ref('');
const picture = ref(null);

// Inject the data provided by App.vue
const data = inject('data');

if (!data) {
  throw new Error('Data not provided!');
}

// Use Vue Router for navigation
const router = useRouter();

// Function to handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    picture.value = URL.createObjectURL(file); // Create a URL for the uploaded file
  }
};

// Function to handle form submission
const createItem = () => {
  const newItem = {
    id: id.value,
    title: title.value,
    price: price.value,
    description: description.value,
    picture: picture.value, // Include the picture URL in the new item
  };
  data.value.push(newItem); // Add the new item to the data array

  // Reset form fields
  id.value = '';
  title.value = '';
  price.value = '';
  description.value = '';
  picture.value = null;

  // Redirect to the Products page
  router.push('/product');
};
</script>

  
<style scoped>
.container-fluid {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #e84242;
  outline: none;
  box-shadow: 0 0 5px #f30303;
}

textarea.form-control {
  height: 100px;
  resize: vertical;
}

.form-group input[type="file"] {
  padding: 10px;
  border: 1px solid #ced4da;
  background-color: #fff;
  overflow: hidden;
}

.image-preview {
  margin-top: 10px;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.btn-primary {
  padding: 10px 20px;
  color: #fff;
  background-color: #e84242;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #f57676;
}
</style>
