const evasiveButton = document.getElementById('evasiveButton');

evasiveButton.addEventListener('mouseover', function(e) {
    const container = document.querySelector('.container');
    const button = e.target;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate new position inside the container
    let newX = Math.random() * (containerRect.width - buttonRect.width);
    let newY = Math.random() * (containerRect.height - buttonRect.height);

    // Apply new position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

evasiveButton.addEventListener('click', function() {
    // Play an animation and change color to indicate a successful click
    this.style.animation = 'pop 0.5s';
    this.style.backgroundColor = '#28a745';
    this.innerText = 'Caught!';

    // Reset button after animation
    setTimeout(() => {
        this.style.animation = '';
        this.style.backgroundColor = '#007bff';
        this.innerText = 'Catch Me!';
    }, 2000); // Reset after 2 seconds
});
