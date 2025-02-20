let currentActiveBox = 1;

function toggleOptions(boxNumber) {
  const boxes = document.querySelectorAll('.price-box');
  const options = document.querySelectorAll('.options');

  boxes.forEach((box, index) => {
    if (index + 1 === boxNumber) {
      box.classList.add('active');
      options[index].classList.add('visible');
    } else {
      box.classList.remove('active');
      options[index].classList.remove('visible');
    }
  });

  currentActiveBox = boxNumber;
  updateTotal();
}

// Attach color event listeners to all color elements
document.querySelectorAll('.color').forEach(color => {
  color.addEventListener('click', function(e) {
    // Prevent triggering the box click event
    e.stopPropagation();
    // Remove active class only within the active price-box
    const activeBox = document.querySelector('.price-box.active');
    activeBox.querySelectorAll('.color').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    updateTotal();
  });
});

function updateTotal() {
  const prices = [195, 345, 528];
  const totalElement = document.querySelector('.total-price');
  totalElement.textContent = `DKK ${prices[currentActiveBox - 1].toFixed(2)}`;
}

// Initialize first box as active
toggleOptions(1);
