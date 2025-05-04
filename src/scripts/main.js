const shareBtn = document.getElementById("shareBtn")
const shareModal = document.getElementById("shareModal")

function toggleModal() {
  shareBtn.classList.toggle("active")
  shareModal.classList.toggle("visible")
}

shareBtn.addEventListener("click", toggleModal)