
// Get all the images with class="modalImg"
var modalImg = document.getElementsByClassName("modalImg");

// Loop through all the images and add the click event listener
for (var i = 0; i < modalImg.length; i++) {
  modalImg[i].addEventListener("click", function() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and set it inside the modal
    var modalImg = document.getElementById("img01");
    modalImg.src = this.src;

    // Show the modal
    modal.style.display = "block";
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
});