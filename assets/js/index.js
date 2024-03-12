let slideIndex = 0;
const lengthSlides = $('.slide-img').length;
const btnSlide = $(".btn-slide");
const Slides = $('.slide-img');

function showSlides(n) {
  if (slideIndex >= lengthSlides) {
    slideIndex = 0;
  }

  Slides.hide();
  btnSlide.removeClass("active");

  btnSlide.eq(slideIndex).addClass("active");
  Slides.eq(slideIndex).show();

  slideIndex++;
}

setInterval(showSlides, 2000);

btnSlide.each((index, div) => {
  $(div).on("click", () => currentSlide(index));
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Nút Chat
$(document).ready(function(){
  var openChat = $("#blockchat-btn");
  var menuChat = $("#background-chat");
  var closeChat = $("#exit");

  openChat.click(function(){
      menuChat.css("display", "block");
  });

  closeChat.click(function(){
      menuChat.css("display", "none");
  });

  $(window).click(function(event) {
      if(event.target == menuChat[0]){
          menuChat.css("display", "none");
      }
  });
});




// // Sản phẩm
const products = [
  {
    id: 1,
    name: 'BỊCH GIẤY RÚT LỤA HÀNG KHÔNG 300 TỜ / 3 LỚP. GIẤY MỊN, DAI',
    price: '7.000đ',
    oldPrice: '22.000đ',
    percent: '-65%',
    img: 'https://media3.scdn.vn/img4/2023/07_20/OuEjfEK44rv1NC2DQM4d_simg_b5529c_250x250_maxb.jpg',
  },
  {
    id: 2,
    name: 'Aó Khoác Dù Nam Nữ Phong Cách Thời Trang Chống Nắng Và  UV,TiaCực Tím Lớp Trong chống nước [giá 1sản phẫm]',
    price: '7.000đ',
    percent: '-50%',
    oldPrice: '240.000đ',
    img: 'https://media3.scdn.vn/img4/2020/08_26/BrAF8LoABnxDG1jSqG6O_simg_b5529c_250x250_maxb.jpg',
  },
  {
    id: 3,
    name: 'Ly Giữ Nhiệt (Loại Lớn) Dung Tích 600ml Inox 304 Cao Cấp Không Gỉ Americano',
    price: '7.000đ',
    percent: '-40%',
    oldPrice: '119.000đ',
    img: 'https://media3.scdn.vn/img4/2023/04_24/K3trquhUZYMVA6NB5TFP_simg_b5529c_250x250_maxb.png',
  },
  {
    id: 4,
    name: 'Khay Đá Silicon Có Nắp Đậy 14 Viên, Khay Đựng Đá Tủ Lạnh, Làm Đá Thạch Kem Bảo Quản Chống Mùi Tuyệt Đối - S124',
    price: '15.000đ',
    percent: '-55%',
    oldPrice: '22.000đ',
    img: 'https://media3.scdn.vn/img4/2023/04_10/6rcHSSGtjLiTBMClAJQS_simg_b5529c_250x250_maxb.jpg',
  },
  {
    id: 5,
    name: 'Áo thun nam cổ tròn THÁI KHANG vải thun lạnh co dãn 4 chiều siêu mát ATRON12',
    price: '59.000đ',
    percent: '-55%',
    oldPrice: '190.000đ',
    img: 'https://media3.scdn.vn/img4/2021/12_26/MUBwZCAfkNw9ZXv0oSNX_simg_b5529c_250x250_maxb.jpg',
  },
]

let listProduct = document.querySelector('.container__listproduct');
for(var i=0; i < products.length; i++){
  listProduct.innerHTML += `
  <article class="container__product">
    <div class="container__product-image">
      <img heigh="100%" data-src="${products[i].img}" src="${products[i].img}" alt="Khay Đá Silicon Có Nắp Đậy 14 Viên, Khay Đựng Đá Tủ Lạnh, Làm Đá Thạch Kem Bảo Quản Chống Mùi Tuyệt Đối - S124" class="container__product-img"></img>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 40 40" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="container__product-logo"><g fill-rule="nonzero" fill="none"><rect width="37.5" height="37.5" x="1.25" y="1.25" fill="#0F1E29" fill-opacity="0.5" stroke="#FFF" stroke-width="2.5" rx="18.75"></rect><path fill="#FFF" d="M15 27.29V12.71c0-1.145 1.188-1.843 2.104-1.236l11 7.29c.861.571.861 1.901 0 2.472l-11 7.29c-.917.607-2.104-.09-2.104-1.236z"></path></g></svg>
      <div class="container__product-sponsor">
        <span>Tài trợ</span>
      </div>
    </div>
    <div class="container__product-intro">
      <div class="container__product-intro-logo">
        <img src="https://media3.scdn.vn/img4/2023/11_02/LTQdoOT4idtS0xtMVjSS.png" alt="sale-event" class="" style="display: block;">
      </div>
      <h3>
        <img mr="1" src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-badge" class=""></img>
        ${products[i].name} 
      </h3>
      <div class="container__product-intro-price">
        <div class="container__product-intro-price-old">
          <span>
            ${products[i].oldPrice}
          </span>
          <span>
            ${products[i].percent}
          </span>
        </div>
        <span>${products[i].price}</span>
      </div>
      <div class="container__product-intro-selective">
          <div class="container__product-intro-select" style="background-color: rgb(242, 243, 244);">
            <img width="10px" height="10px" conponent="[object Object]" src="https://media3.scdn.vn/img4/2023/04_17/uRpqpuUUe3NDEoErtrUo.png" alt="promotion-icon" class="">
            <span>Trả góp Muadee</span>
          </div>
        </div>
        <div class="container__product-intro-sold">
          <span>Đã bán 4</span>
        </div>
        <div class="container__product-intro-evaluate">
          <div class="container__product-intro-star">
            <span>4.7/5</span>
            <i class="fa-solid fa-star"></i>
          </div>
          <span>TP.HCM</span>
        </div>
        <div class="container__product-add">
          <button data-id="${products[i].id }" data-name="${products[i].name }" data-price="${products[i].price }" data-img="${products[i].img }" class="container__product-btn js-add-to-cart">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
  </article>
  `;
}


//Thêm giỏ hang
$(document).ready(function(){
  updateNumberCart();
  $(".js-add-to-cart").on("click", function(){
    var productId = $(this).data("id");
    var productName = $(this).data("name");
    var productImage = $(this).data("img");
    var productPrice = $(this).data("price");
    addToCart(productId, productName, productImage, productPrice);
    updateNumberCart();
  });

  function addToCart(productId, productName, productImage, productPrice) {
  // Lấy giỏ hàng từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var existingProduct = cartItems.find(item => item.id === productId);
    if (existingProduct) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng
      existingProduct.quantity++;
    }
    else {
    // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
      cartItems.push({
        id: productId,
        name: productName,
        img: productImage,
        price: productPrice,
        quantity: 1
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
});

function updateNumberCart(){
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  $(".cart__number").text(cartItems.length);
}

  