window.onload = function(){
  var modal = null;
  var modalOverlay = document.querySelector("#modal-overlay");;
  var openBtn = document.getElementsByClassName("modal-trigger");
  var cardElement = document.getElementsByClassName("card-element");
  var openModal = function() {

      var attribute = this.getAttribute("data-form");
      modal = document.querySelector("#"+attribute);
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app');
      }

  };
  for (var i = 0; i < openBtn.length; i++) {
      openBtn[i].addEventListener('click', openModal, false);
  };
  var closeBtn = document.getElementsByClassName("modal-close");
  var closeModal = function() {
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app')
      }
  };
  for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', closeModal, false);
  };

  modalOverlay.addEventListener("click", function() {
    if(modal !== null){
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app')
      }
    };
  });


}