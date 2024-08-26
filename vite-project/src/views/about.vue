

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-12">
                <h1 class="box-heading">About DailyShop</h1>
                <p class="lead">
                    Welcome to DailyShop, your ultimate destination for the
                    latest trends in fashion.
                </p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <h2 class="mb-3 box-heading">Our Mission</h2>
                <p>
                    At DailyShop, we believe that fashion is more than just
                    clothing; it's a form of self-expression. Our mission is to
                    provide you with an exceptional shopping experience,
                    offering a wide range of stylish and high-quality apparel
                    for every occasion. We aim to make fashion accessible to
                    everyone, regardless of style preference or budget.
                </p>
            </div>
            <div class="col-md-6">
                <img
                    src="../../src/assets/imges/item4.jpg"
                    alt="About Us"
                    class="img-fluid rounded shadow-sm"
                />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <img
                    src="../../src/assets/imges/item10.jpg"
                    alt="Our Values"
                    class="img-fluid rounded shadow-sm"
                />
            </div>
            <div class="col-md-6">
                <h2 class="mb-3 box-heading">Our Values</h2>
                <p>
                    We are passionate about bringing you the best in fashion,
                    focusing on quality, affordability, and customer
                    satisfaction. Our team works tirelessly to source the finest
                    materials and collaborate with talented designers to create
                    pieces that are both trendy and timeless. We believe in
                    sustainable fashion and strive to minimize our environmental
                    impact.
                </p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <h2 class="mb-3 box-heading">Customer Service</h2>
                <p>
                    Your satisfaction is our top priority. Our dedicated
                    customer service team is here to assist you with any
                    inquiries or concerns, ensuring a seamless shopping
                    experience from start to finish. We value your feedback and
                    strive to continually improve our services to meet your
                    needs.
                </p>
            </div>
            <div class="col-md-6">
                <img
                    src="../../src/assets/imges/item11.jpg"
                    alt="Customer Service"
                    class="img-fluid rounded shadow-sm"
                />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>


.box-heading {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #0a0b0d;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  padding-bottom: 5px;
  display: inline-block;
  margin-bottom: 1rem;
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
.container {
    max-width: 1140px;
    margin: auto;
}

h2 {
    color: #333;
}
.lead {
    color: #666;
    font-size: 1.25rem;
    margin-bottom: 3rem;
}
p {
    color: #666;
    font-size: 1rem;
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
.rounded {
    border-radius: 0.25rem;
}
.shadow-sm {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
