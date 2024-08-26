<template>
    <div class="container-fluid vedioLibrary">
      <h1 class="box-heading">Payment</h1>
      <div class="row">
        <div class="boxes">
          <div class="tebal-box">
            <h2 class="pyamentheading-1">Payment Method</h2>
            <div class="inputt-radio">
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  >Credit/Debit card
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  >Net Banking
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  >Paypal
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  >Bitcoin
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
  
            <h2 class="pyamentheading-1">Add Payment Details</h2>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6 mb-3">
                <div class="input-box">
                  <label for="" class="leball">Enter Name on Card</label>
                  <i class="bi bi-camera"></i>
                  <input type="text" class="inputt" name="" id="" />
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-3">
                <div class="input-box">
                  <label for="" class="leball">Card Number</label>
                  <i class="bi bi-person-vcard"></i>
                  <input type="text" class="inputt" name="" id="" />
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-3">
                <div class="input-box">
                  <label for="" class="leball">Expiry (MM/YY)</label>
                  <i class="bi bi-pci-card-sound"></i>
                  <input type="text" class="inputt" name="" id="" />
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-3">
                <div class="input-box">
                  <label for="" class="leball">CVV Code</label>
                  <input type="text" class="inputt" name="" id="" />
                </div>
              </div>
            </div>
            <p class="pyment-pregraf">
              By Clicking on ‘Confirm Payment’
              <span class="pyment-span">Terms and conditions</span> I agree with
              the of the Company.
            </p>
            <div class="btn-box">
              <button type="button" class="btnbuy">Save</button>
              <button type="button" class="btnbuy2">Confirm Payment</button>
            </div>
  
            <!-- cardsof pyment start -->
            <div class="cardd">
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  ><img
                    src=" ../../src/assets/imges/visa.svg"
                    class="card-img"
                    alt="card-img"
                  />
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
             <div class="preaf-box">
              <p class="carddpregraf1">**** **** **** 1157</p>
              <p class="carddpregraf2">VISA Card</p>
             </div>
            </div>
            <div class="cardd">
              <div class="potion-sector-detils-box">
                <label class="radio-container"
                  ><img
                    src="../../src/assets/imges/circul.svg"
                    class="card-img"
                    alt="card-img"
                  />
                  <input type="radio" name="approval-status" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
             <div class="preaf-box">
              <p class="carddpregraf1">**** **** **** 1157</p>
              <p class="carddpregraf2">Master Card</p>
             </div>
  
            </div>
            <button type="button" class="btnbuy">ADD New Card</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup></script>
  <style scoped>
  h1,
  h5,
  h4,
  h2,
  h3,
  h6,
  p {
    margin-bottom: 0;
  }
  
  .vedioLibrary {
    background-color: #fff9f1;
    padding: 1rem 1rem 3rem 1rem;
  }
 .boxes{
    width: 60%;
    margin: 0 auto;
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
  .tebal-box {
    padding: 1rem;
    border-radius: 14px;
    background: #ffffff;
  }
  .pyamentheading-1 {
    color: #4c4d4f;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .leball {
    font-size: 14px;
    font-weight: 400;
    color: #00000080;
    margin-bottom: 5px;
  }
  
  .inputt {
    background-color: #ffffff;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: #4c4d4f80;
    border: 1px solid #4c4d4f80;
    border-radius: 5px;
    padding: 10px;
    z-index: 3;
  }
  .inputt:focus {
    outline: none;
  }
  
  .bi-camera {
    color: #4c4d4f;
    font-size: 15px;
    position: absolute;
    right: 12px;
    top: 2.2rem;
    z-index: 22;
  }
  .bi-person-vcard {
    color: #4c4d4f;
    font-size: 15px;
    position: absolute;
    right: 12px;
    top: 2.2rem;
    z-index: 22;
  }
  .bi-pci-card-sound {
    color: #4c4d4f;
    font-size: 15px;
    position: absolute;
    right: 12px;
    top: 2.2rem;
    z-index: 22;
  }
  .pyment-pregraf {
    margin: 1rem 0;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
  }
  .pyment-span {
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid red;
  }
  /* pyment box end css  */
  
  /* redio btn css start  */
  .inputt-radio {
    display: flex;
    align-items: center;
  }
  .radio-container {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    color: #00000080;
    margin-right: 2rem;
  }
  
  /* Hide the actual radio input */
  .radio-container input[type="radio"] {
    display: none;
  }
  
  /* Style for the checkmark */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px; /* Adjust size of the radio button */
    width: 20px; /* Adjust size of the radio button */
    background-color: #fff;
    border: 1px solid #000000;
    border-radius: 50%;
    padding: 4px;
  }
  
  /* When the radio input is checked, change the background color of the checkmark */
  .radio-container input[type="radio"]:checked + .checkmark {
    background-color: #fff;
  }
  
  /* Add a dot inside the checkmark when radio is checked */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px; /* Adjust size of the dot */
    height: 15px; /* Adjust size of the dot */
    border-radius: 50%;
    background: #000000;
  }
  
  /* Show the dot when radio is checked */
  .radio-container input[type="radio"]:checked + .checkmark:after {
    display: block;
  }
  /* rido btn end css */
  
  /* pymentcardss */
  .cardd {
    padding: 1rem;
    border: 1px solid #4C4D4F;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .card-img {
    height: 1.5rem;
    width: 4rem;
    margin-top: -6px;
  }
  .carddpregraf1 {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    text-align: right;
  }
  .carddpregraf2 {
    font-size: 18px;
    font-weight: 400;
    color: #4C4D4F;
    text-align: right;
  }
  /* text card styling  */
  .tex-card {
    background-color: #ffffff;
    padding: 12px;
    border-radius: 12px;
  }
  .info-flex-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
.btn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btnbuy {
  margin-right: 8px;
  width: 48%;
  height: 46px;
  border: 1px solid #dbdbdc; /* Border width and color */
  color: #4c4d4f; /* Text color */
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  text-transform: capitalize;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  margin: 1rem 0;
}
.btnbuy:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 23px solid #000000;
  border-bottom: 23px solid #000000;
  border-right: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(-100%);
}
.btnbuy:hover:before {
  transform: translateX(0);
}
.btnbuy:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 23px solid #000000;
  border-bottom: 23px solid #000000;
  border-left: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(100%);
}
.btnbuy:hover::after {
  transform: translateX(0);
}
.btnbuy:hover {
  color: #fff;
}
.btnbuy2 {
  margin-right: 8px;
  width: 48%;
  height: 46px;
  border: 1px solid #dbdbdc; /* Border width and color */
  color: #4c4d4f; /* Text color */
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  text-transform: capitalize;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  margin: 1rem 0;
}
.btnbuy2:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 23px solid #000000;
  border-bottom: 23px solid #000000;
  border-right: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(-100%);
}
.btnbuy2:hover:before {
  transform: translateX(0);
}
.btnbuy2:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 23px solid #000000;
  border-bottom: 23px solid #000000;
  border-left: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(100%);
}
.btnbuy2:hover::after {
  transform: translateX(0);
}
.btnbuy2:hover {
  color: #fff;
}

.b {
  border-radius: 10px;
  border: 1px solid #4c4d4f33;
  overflow: hidden;
  margin: 1.5rem 0;
}
  </style>
  