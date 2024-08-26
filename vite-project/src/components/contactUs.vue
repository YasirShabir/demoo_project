<template>
  <!--fotter-section start  -->
  <div class="container-fluid fotter-section">
    <div class="row">
      <div class="col-12 mb-5 col-sm-6 col-md-6 col-lg-4">
        <div><img src="../../assets/imges/Layer 2.svg" alt="" /></div>
        <p class="footer-pregraf">
          Welcome to our great food delivery website. we are delivering all type
          of food that you want from our great Crisp green broccoli and sweet
          onions, with beef, glistens with the best-ta Crisp green broccoli and
          sweet onions, with beef, glistens with the best-ta Crisp green
        </p>
        <h6 class="footer-hading">Follow us on</h6>
        <div class="fotter-icon">
          <div class="iconrround"><i class="bi bi-facebook"></i></div>
          <div class="iconrround"><i class="bi bi-twitter"></i></div>
          <div class="iconrround"><i class="bi bi-instagram"></i></div>
          <div class="iconrround"><i class="bi bi-youtube"></i></div>
        </div>
      </div>
      <div class="col-12 mb-5 col-sm-6 col-md-6 col-lg-2">
        <h5 class="foter-link-hading">Useful Links</h5>
        <router-link to="/home"> <p class="foter-link">Home</p></router-link>
        <router-link to="/about"> <p class="foter-link">About Us</p></router-link>
        <router-link to="/product"> <p class="foter-link">Product</p></router-link>
      </div>
      <div class="col-12 mb-5 col-sm-6 col-md-6 col-lg-3">
        <h5 class="foter-link-hading">Contact Us</h5>
        <div class="link-flex">
          <i class="bi bi-envelope"></i>
          <p class="foter-link">yasirshabir@gmail.com</p>
        </div>

        <div class="link-flex">
          <i class="bi bi-telephone"></i>
          <p class="foter-link">03029503513</p>
        </div>
      </div>
      <div class="col-12 mb-5 col-sm-6 col-md-6 col-lg-3">
        <h5 class="foter-link-hading">You can Find us On!</h5>
        <p class="foter-link">
          Subscribe to our newsletter to get latest updates
        </p>
        <div class="">
          <input
            type="email"
            class="email-box"
            placeholder="Your email address"
            name=""
            id=""
          />
          <button type="button" class="foter-email-btn">Subscribe</button>
        </div>
        <div class="img-flex-box">
          <img
            src="../../assets/imges/Link → play-store.png.svg"
            class="foter-link-img"
            alt=""
          />
          <img
            src="../../assets/imges/Link → app-store.png.svg"
            class="foter-link-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr class="line" />
    <p class="copyright">© FoodKing by UZR Tech 2023, All Rights Reserved</p>
  </div>

  <div class="footnav">
    <div class="icone-box">
      <i class="bi bi-house-door-fill icone"></i>
      <p class="nav-pregraf">Home</p>
    </div>
    <div class="icone-box">
      <i class="bi bi-clipboard2-minus-fill icone"></i>
      <p class="nav-pregraf">Menu</p>
    </div>
    <div class="icone-box">
      <i class="bi bi-bag-fill"></i>
    </div>
    <div class="icone-box">
      <i class="bi bi-patch-exclamation-fill icone"></i>
      <p class="nav-pregraf">Offers</p>
    </div>
    <div class="icone-box">
      <i class="bi bi-person-circle icone"></i>
      <p class="nav-pregraf">Log In</p>
    </div>
  </div>
  <!-- fotter-section end  -->
</template>

<style scoped>
.fotter-section {
  padding: 5rem 1rem;
  background-color: black;
  height: 91vh;
}

.footer-pregraf {
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 500;
  width: 80%;
}
.footer-hading {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0;
}
.fotter-icon {
  display: flex;
  align-items: center;
}

.iconrround {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
  cursor: pointer;
}
.bi-facebook {
  font-size: 1rem;
  color: #e84242;
}
.bi-twitter {
  font-size: 1rem;
  color: #e84242;
}
.bi-instagram {
  font-size: 1rem;
  color: #e84242;
}
.bi-youtube {
  font-size: 1rem;
  color: #e84242;
}

.foter-link-hading {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 2rem;
}
.foter-link {
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 10px;
}
.link-flex {
  display: flex;
  align-items: baseline;
}
.bi-envelope {
  margin-right: 10px;
  font-size: 1rem;
  color: #ffffff;
}
.bi-telephone {
  margin-right: 10px;
  font-size: 1rem;
  color: #ffffff;
}
.email-box {
  border: none;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
  width: 100%;
}
::placeholder {
  font-size: 0.8rem;
  color: #a0a3bd;
  font-weight: 500;
}
.email-box:focus {
  outline: none;
}
.foter-email-btn {
  border: none;
  padding: 8px 10px 6px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  background-color: #e84242;
  margin-left: -5rem;
}
.footer-hading-2 {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
}
.img-flex-box {
  display: flex;
  align-items: center;
}
.foter-link-img {
  width: 100px;
  margin-right: 10px;
}
.line {
  margin-top: 13rem;
  color: #ff77b0;
}
.copyright {
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500s;
}

.footnav {
  display: none;
}
</style>
