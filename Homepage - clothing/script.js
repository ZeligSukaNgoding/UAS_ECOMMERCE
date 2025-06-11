document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.querySelector(".cart-count");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let count = parseInt(cartCount.textContent);
      count++;
      cartCount.textContent = count;

      alert("Product added to cart!");
    });
  });

  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    if (email && email.includes("@")) {
      alert("Thank you for subscribing with " + email);
      this.querySelector("input").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
