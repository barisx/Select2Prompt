function transferSelectedTextToTextarea() {
  const textArea = document.getElementById('prompt-textarea');

  if (textArea) {
    // Define the style element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes fadeBackground {
        0% { background-color: yellow; }
        100% { background-color: transparent; }
      }
      .fade-background {
        animation: fadeBackground 0.5s ease forwards;
      }
    `;
    // Add the style element to the document's head
    document.head.appendChild(style);

    document.body.addEventListener('mouseup', (event) => {
      if (event.target.id === 'prompt-textarea') {
        return;
      }

      const selectedText = window.getSelection().toString();

      if (selectedText) {
  textArea.value = selectedText + '\n\n'; // Replaces the existing text with the selected text followed by two new lines
  textArea.focus();
  textArea.scrollTop = textArea.scrollHeight;

  // Add the fade-background class to trigger the animation
  textArea.classList.add('fade-background');

  // Remove the class after the animation duration to be able to re-trigger it for subsequent text selections
  setTimeout(() => {
    textArea.classList.remove('fade-background');
  }, 500); // Adjust the timeout duration to match the animation duration
}

    });
  } else {
    console.log('Element with id "prompt-textarea" not found.');
  }
}

transferSelectedTextToTextarea();