$("#myCarousel").carousel({
  interval: 5000,
});
$("#myCarousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
  selectors: {
    target: '[data-ref~="mixitup-target"]',
  },
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", function () {
  var scrollButton = document.getElementById("scroll-up-button");
  if (window.pageYOffset > 100) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
});

document
  .getElementById("scroll-up-button")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

const popupImage = document.getElementById("popup-image");

popupImage.addEventListener("click", () => {
  const clonedImage = popupImage.cloneNode(true);
  clonedImage.classList.add("popup-image-animation");
  document.body.appendChild(clonedImage);

  clonedImage.addEventListener("animationend", () => {
    document.body.removeChild(clonedImage);
  });
});

function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("project-type").value = "Select A Course";
  document.getElementById("msg").value = "";
}

function showSuccessMessage() {
  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
}

function showErrorMessage() {
  alert("An error occurred while submitting the form. Please try again later.");
}

function showLoading(button) {
  button.value = "Loading...";

  setTimeout(function () {
    button.value = "Done";

    setTimeout(function () {
      alert("Successfully Submitted");
    }, 500);
  }, 500);
}

//excel sheet code
