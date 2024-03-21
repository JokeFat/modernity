document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const title = item.querySelector('.accordion-title');

    title.addEventListener('click', function () {
      const isActive = item.classList.contains('active');
      closeAllItems(accordionItems);
      
      if (!isActive) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = null;
      }
    });
  });

  function closeAllItems(items) {
    items.forEach(function (item) {
      item.classList.remove('active');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = null;
    });
  }
});

const bad = document.querySelector('body');

if (bad.querySelector('.elpop') !== null) {
const elpop=document.querySelector('.elpop');const pop =elpop.querySelector('.pop');elpop.addEventListener('mouseenter',()=>{pop.classList.toggle('povery');});elpop.addEventListener('mouseleave',()=>{pop.classList.toggle('fade-out');});
} else {
    console.log('unload');
}

if (bad.querySelector('.loading-overlay') !== null) {
const navLinks = document.querySelectorAll('.nav-link');
  const navLinkst = document.querySelectorAll('.nav-link2');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    window.addEventListener('load', () => {
      loadingOverlay.classList.add('loading');
      setTimeout(() => {
        loadingOverlay.classList.remove('loading');
      }, 2000);
    });
    } else {
        console.log('unload2')
    }

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const offcanvasMenu = document.querySelector('.offcanvas');
  const content = document.querySelector('.content');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', function () {
    offcanvasMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    content.classList.toggle('content-open');
  });

  overlay.addEventListener('click', function () {
    offcanvasMenu.classList.remove('open');
    overlay.classList.remove('active');
    content.classList.remove('content-open');
  });
});

function toggleDarkMode() {
      const body = document.body;
      body.classList.toggle('light-mode');
    
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
       card.classList.toggle('dark-mode');
      });
      
      const drks = document.querySelectorAll('.drk');
      drks.forEach(drk => {
       drk.classList.toggle('light-mode');
      });

const hs = document.querySelectorAll('h2');
      hs.forEach(h => {
       h.classList.toggle('light-mode');
      });

const hro = document.querySelectorAll('.hero');
      hro.forEach(hr => {
       hr.classList.toggle('herod');
      });
      
const pb = document.querySelectorAll('p')
pb.forEach(p => {
       p.classList.toggle('dcolor');
      });

const bgrids = document.querySelectorAll('.bento-grid');
      bgrids.forEach(bgrid => {
       bgrid.classList.toggle('light-mode');
      });
      
const bcells = document.querySelectorAll('.bento-cell');
      bcells.forEach(bcell => {
          bcell.classList.toggle('dark-mode');
      });

const hos = document.querySelectorAll('.cowto');
      hos.forEach(ho => {
       ho.classList.toggle('dark-mode');
      });
      }

if (bad.querySelector("#myModal") !== null) {
var modal = document.getElementById("myModal");

var closeButton = document.querySelector(".close");

var darkModeToggle = document.querySelector(".modal-buttons button:last-child");

window.onload = function() {
  modal.style.display = "flex";
  setTimeout(function() {
    document.getElementById("modalContent").classList.add("show");
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }, 50);
}

function closeModal() {
  document.getElementById("modalContent").classList.remove("show");
  modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); 
}

function setModalContent(title, text) {
  var modalTitle = document.getElementById("modalTitle");
  var modalText = document.getElementById("modalText");

  modalTitle.textContent = title;
  modalText.textContent = text;
}

var customTitle = "Welcome!";
var customText = "Thanks for visiting our website. Feel free to explore.";

setModalContent(customTitle, customText);

function onYes() {
  alert("You clicked Yes!");
}

function onNo() {
  closeModal();
} } else {
    console.log('unload3');
}