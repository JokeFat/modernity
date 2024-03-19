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

const elpop=document.querySelector('.elpop');const pop =elpop.querySelector('.pop');elpop.addEventListener('mouseenter',()=>{pop.classList.toggle('povery');});elpop.addEventListener('mouseleave',()=>{pop.classList.toggle('fade-out');});

const navLinks = document.querySelectorAll('.nav-link');
  const navLinkst = document.querySelectorAll('.nav-link2');
    const loadingOverlay = document.getElementById('loadingOverlay');

 //   navLinks.forEach(link => {
     // link.addEventListener('click', (e) => {
   //     e.preventDefault();
      //  loadingOverlay.classList.add('loading');
       // const targetId = link.getAttribute('href').substring(1);
      //  const targetSection = document.getElementById(targetId);

     //   if (targetSection) {
        //  window.scrollTo({
        //    top: targetSection.offsetTop - 50,
         //   behavior: 'smooth'
       //   });

       //   setTimeout(() => {
            //loadingOverlay.classList.remove('loading');
        //  }, 600);
     //   }
  //    });
   // });
    
  //  window.addEventListener('load', () => {
    //  loadingOverlay.classList.add('loading');
    //  setTimeout(() => {
        //loadingOverlay.classList.remove('loading');
   //   }, 2000);
 //   });
    
   // navLinkst.forEach(link => {
     // link.addEventListener('click', (e) => {
     //   e.preventDefault();
      //  loadingOverlay.classList.add('loading');
      //  const targetId = link.getAttribute('href').substring(1);
      //  const targetSection = document.getElementById(targetId);

    //    if (targetSection) {
        //  window.scrollTo({
          //  top: targetSection.offsetTop - 50,
         //   behavior: 'smooth'
      //    });

     //     setTimeout(() => {
            //loadingOverlay.classList.remove('loading');
         // }, 600);
      //  }
   //   });
 //   });

    window.addEventListener('load', () => {
      loadingOverlay.classList.add('loading');
      setTimeout(() => {
        loadingOverlay.classList.remove('loading');
      }, 2000);
    });

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

// JavaScript code for the Modern Alert Pop-up

// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button
var closeButton = document.querySelector(".close");

// Get the Dark Mode toggle button
var darkModeToggle = document.querySelector(".modal-buttons button:last-child");

// When the page loads, show the modal with fade-in animation
window.onload = function() {
  modal.style.display = "flex";
  setTimeout(function() {
    document.getElementById("modalContent").classList.add("show");
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }, 50); // Delay added for smoother animation
}

// Function to close the modal with fade-out animation
function closeModal() {
  document.getElementById("modalContent").classList.remove("show");
  modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Same duration as the CSS transition
}

// Function to set modal content
function setModalContent(title, text) {
  var modalTitle = document.getElementById("modalTitle");
  var modalText = document.getElementById("modalText");

  modalTitle.textContent = title;
  modalText.textContent = text;
}

// Example usage: set modal content with custom text
var customTitle = "Welcome!";
var customText = "Thanks for visiting our website. Feel free to explore.";

setModalContent(customTitle, customText);

// Function for Yes button
function onYes() {
  alert("You clicked Yes!");
}

// Function for No button
function onNo() {
  closeModal();
}
