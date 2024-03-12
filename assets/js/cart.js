
  var cart = document.querySelector('.container1');
  cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart.innerHTML = '';
  for(var i=0; i<cartItems.length; i++){
    cart.innerHTML += ` 
    <div class="product">
    <section class="product__heading">
      <div>
        <img src="https://media3.scdn.vn/img4/2020/03_27/xZAsjGbJSx9X0MSLhbZU_simg_34545b_120x60_maxb.jpg" alt="Mẹ và Bé QN" class="product__heading-img">
        <span class="fs14">Mẹ và Bé QN</span>
      </div>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><path d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z" fill="#3f4b53" fill-rule="nonzero"></path></svg>
        <span class="fs14">Chat với Shop</span>
      </button>
    </section>
    <form action="">
      <div class="product__detail">
        <div class="product__infor">
          <div>
            <input type="checkbox">
            <img src="${cartItems[i].img}" alt="" class="d7ed-RabqT0 undefined _96ac-NDrPiV">
          </div>
          <div>
            <span>Mua trước trả sau</span>
            <p>${cartItems[i].name}</p>
            <p>Số lượng: ${cartItems[i].quantity}</p>
          </div>
        </div>
        <article class="product__price">
          <h3>${cartItems[i].price}</h3>
          <span>45.000đ</span>
        </article>
        <div class="product__quantity">
          <div>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><g id="24-/-basic-/-icon24_minus_default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path id="icon-background" fill="#6F787E" fill-rule="nonzero" d="M22 11v2H2v-2z"></path></g></svg>
            </button>
            <input type="text" inputmode="numeric">
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><g id="24-/-basic-/-icon24_plus_default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path id="icon-background" fill="#6F787E" fill-rule="nonzero" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path></g></svg>
            </button>
          </div>
          <span>Chỉ được mua 33 sản phẩm khuyến mại này</span>
        </div>
        <div class="product__icon">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><path d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 3.038-1.694 5.972-4.849 8.81-1.656 1.49-3.77 2.963-5.285 3.747l-.866.45-.866-.45c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728a6.3 6.3 0 0 1 1.068.668 6.17 6.17 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696Zm-.004 2c-1.162 0-1.803.118-2.567.492-.47.23-.887.541-1.25.936l-.73.79-.735-.784a4.266 4.266 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43 1.359-.712 3.302-2.07 4.814-3.43C19.586 13.949 21 11.5 21 9.12c0-2.931-1.912-5.11-4.45-5.12Z" fill="#3f4b53" fill-rule="nonzero"></path></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><path d="M14 1c.537 0 1.042.214 1.414.586.308.307.509.708.575 1.211L16 3v1h2.5a2.49 2.49 0 0 1 1.623.599l.145.133c.404.405.66.937.723 1.564L21 6.5V9h-1.111l-.62 11.166a2.997 2.997 0 0 1-.789 1.866l-.145.147c-.49.463-1.12.75-1.844.812l-.218.009H7.727a2.994 2.994 0 0 1-2.975-2.616l-.02-.218L4.11 9H3V6.5c0-.671.267-1.303.732-1.768.405-.404.937-.66 1.564-.723L5.5 4H8V3c0-.477.169-.93.468-1.285l.118-.13c.307-.307.708-.508 1.211-.574L10 1zm3.885 8H6.114l.611 11.012.012.132c.032.224.14.428.303.582a.99.99 0 0 0 .687.274h8.503l.132-.004a.994.994 0 0 0 .598-.27.996.996 0 0 0 .312-.67L17.885 9zM9 11a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zM8 5.998H5.55l-.102.005A.495.495 0 0 0 5 6.5V7h14.001v-.45l-.004-.102A.495.495 0 0 0 18.5 6H8v-.002zm2.067-3L10 3v1h4.001l.001-.933L14 3l-3.932-.002z" fill="#3f4b53" fill-rule="nonzero"></path></svg>
          </button>
        </div>
      </div>
      <section class="footer">
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2"><g fill="none" fill-rule="nonzero"><path fill="#CFD2D4" d="M14 6h7v12h-7z"></path><path d="M21 4a2 2 0 0 1 2 2v3.112l-.5.289A2.998 2.998 0 0 0 21 12c0 1.084.579 2.066 1.5 2.6l.5.288V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.112l.5-.289A2.998 2.998 0 0 0 3 12a2.998 2.998 0 0 0-1.5-2.6L1 9.113V6a2 2 0 0 1 2-2h18Zm0 2-6-.001a1 1 0 0 1-.883.994L14 7a1 1 0 0 1-1-1.001L3 6v2c1.241.93 2 2.4 2 4s-.759 3.07-2 4v2l10-.001a1 1 0 0 1 1.993-.116L15 18 21 18v-2c-1.241-.93-2-2.4-2-4s.759-3.07 2-4V6Zm-7 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#6F787E"></path></g></svg>
          <span>Mã giảm giá của Shop</span>
          <i class="ti-angle-right"></i>
        </div>
        <button>
          <span>Mua ngay</span>
        </button>
      </section>
    </form>
  </div>
    `
  };

  var numberCart = $(".cart__number");
  var totalQuantity = 0;
  for(var i=0; i<cartItems.length; i++){
    totalQuantity+= cartItems[i].quantity;
  }

  numberCart.text(totalQuantity);