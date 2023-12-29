function moveCircle() { 

    var circle = document.getElementById("shaft");
    circle.className += " rotate";
    
  }
  
  function closeCircle() { 
  
    var circle = document.getElementById("shaft");
  circle.classList.remove("rotate");
    
  }

  const carButton = document.getElementById("car");
  const buttonContainer = document.getElementById("buttonContainer");
  
  function createNewButton() {
    const newButton = document.createElement("button");
    newButton.textContent = "Your parking place here";
  
    // Apply styles for gradual appearance of the button
    newButton.style.opacity = 0;
    newButton.style.transition = "opacity 3s";
  
    // Create an empty link and add it to the button
    const link = document.createElement("a");
    // Replace 'your_url_here' with the actual URL you want to open
    link.href = 'http://127.0.0.1:3000/index.html';
    link.target = "_blank"; // Open in a new tab/window
    link.textContent = "Click me!";
  
    newButton.appendChild(link);
    buttonContainer.appendChild(newButton);
  
    // Triggering a reflow to apply styles before changing opacity
    void newButton.offsetWidth;
  
    newButton.style.opacity = 1; // Make the button gradually visible
  
    // Create and display the extracted image
    const imageElement = document.createElement("img");
    imageElement.src = "choose_place.gif";
    imageElement.style.width = "94px";
    imageElement.style.height = "24px";
    imageElement.style.opacity = 0; // Start with zero opacity
    imageElement.style.transition = "opacity 3s";
    imageElement.style.position = "absolute";
    imageElement.style.left = "50%"; // Center horizontally
    imageElement.style.top = "50%"; // Center vertically
    imageElement.style.transform = "translate(-50%, -50%)"; // Adjust for centering
  
    // Triggering a reflow to apply styles before changing opacity
    void imageElement.offsetWidth;
  
    imageElement.style.opacity = 1; // Make the image gradually visible
  
    // Add the image to the container
    buttonContainer.appendChild(imageElement);
  }
  
  carButton.addEventListener("click", createNewButton);
  