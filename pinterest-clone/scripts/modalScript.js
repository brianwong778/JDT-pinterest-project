let pin_image_blob = null;

document.querySelector("#uploadImg").addEventListener("change", (event) => {
  if (event.target.files && event.target.files[0]) {
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();

      reader.onload = function () {
        const new_image = new Image();
        new_image.src = reader.result;
        pin_image_blob = reader.result;

        new_image.onload = function () {
          const modals_pin = document.querySelector(".addPinModal .modalsPin");

          new_image.classList.add("pinMaxWidth");

          document
            .querySelector(".addPinModal .pinImage")
            .appendChild(new_image);
          
          document.querySelector("#uploadImgLabel").style.display = "none";
          modals_pin.style.display = "block";
          if (
            new_image.getBoundingClientRect().width <
              new_image.parentElement.getBoundingClientRect().width ||
            new_image.getBoundingClientRect().height <
              new_image.parentElement.getBoundingClientRect().height
          ) {
            new_image.classList.remove("pinMaxWidth");
            new_image.classList.add("pinMaxHeight");
          }
          modals_pin.style.opacity = 1;
        };
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  document.querySelector("#uploadImg").value = "";
});

document.querySelector(".savePin").addEventListener("click", () => {
  const users_data = {
    author: "Jack",
    board: "default",
    title: document.querySelector("#pin_title").value,
    description: document.querySelector("#pinDescription").value,
    destination: document.querySelector("#pinDestination").value,
    img_blob: pin_image_blob,
    pin_size: document.querySelector("#pinSize").value,
  };

  console.log(users_data);
});
