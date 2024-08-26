<script setup></script>

<template>
  <div class="home">
    <div class="login-box">
      <div class="card">
        <h2>Our new collection</h2>
        <p>
          Unveil the latest trends in fashion and find your unique style with
          our exclusive collection. Explore now and redefine your wardrobe with
          our carefully curated pieces.
        </p>
      </div>
    </div>
    <div class="discount">
      <div class="inner">
        <h1>50% OFF</h1>
      </div>
    </div>
  </div>
  <div class="product">
    <h2 class="box-heading">Our product</h2>
    <div class="container-fluid pro">
      <div class="row">
        <div class="col-lg-3">
          <div class="product-card">
            <img src="../../src/assets/imges/item1.jpg" alt="product" />
            <div class="card-content">
              <h3 class="card-title">Proin vel ligula</h3>
              <p class="card-price">$15.00</p>
              <router-link to="/product">
                <button class="see-more">See More</button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-card">
            <img src="../../src/assets/imges/item2.jpg" alt="product" />
            <div class="card-content">
              <h3 class="card-title">Erat odio rhoncus</h3>
              <p class="card-price">$25.00</p>
              <router-link to="/product">
                <button class="see-more">See More</button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-card">
            <img src="../../src/assets/imges/item3.jpg" alt="product" />
            <div class="card-content">
              <h3 class="card-title">Integer vel turpis</h3>
              <p class="card-price">$48.00</p>
              <router-link to="/product">
                <button class="see-more">See More</button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-card">
            <img src="../../src/assets/imges/item4.jpg" alt="product" />
            <div class="card-content">
              <h3 class="card-title">Sed purus quam</h3>
              <p class="card-price">$35.00</p>
              <router-link to="/product">
                <button class="see-more">See More</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: #fff;
}
p {
  font-size: 0.8rem;
  font-weight: 500;
  word-spacing: 0.5px;
  line-height: 1.3;
  color: #fff;
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
  margin: 3rem;
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
.home {
  background-image: url("../../src/assets/imges/item9.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.discount {
  width: 30%;
  height: 80%;
}
.inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
h1 {
  font-size: 5rem;
  display: inline-block;
  font-family: cursive;
}
.card {
  /* width: 20rem; */
  background-color: transparent;

  padding: 1rem;
}
.login-box {
  background-color: #96878762;

  padding: 1rem;
  width: 40%;
  text-align: center;
  border-radius: 1rem;
}
.product-heading {
  text-align: center;
  margin: 3rem;
  font-size: 2rem;
  color: #505050;
}
/* card styling */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card img {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 9px;
}

.card-title {
  font-size: 1em;
  color: #333;
}

.card-price {
  font-size: 1em;
  margin-top: 8px;
  color: #dc3545;
}

.see-more {
  background-color: #dc3545;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  margin-left: auto !important;
  display: block;
  padding: 6px 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.see-more:hover {
  background-color: #dc3545;
  transform: scale(1.05);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.pro {
  padding: 2rem 2rem 5rem 2rem;
}
</style>
