function transferSelectedTextToTextarea() {
  const textArea = document.getElementById('prompt-textarea');

  if (textArea) {
    document.body.addEventListener('mouseup', (event) => {
      if (event.target.id === 'prompt-textarea') {
        return;
      }

      const selectedText = window.getSelection().toString();

      if (selectedText) {
        textArea.value = selectedText + '\n';
        textArea.focus();
        textArea.scrollTop = textArea.scrollHeight;
      }
    });
  } else {
    console.log('Element with id "prompt-textarea" not found.');
  }
}

transferSelectedTextToTextarea();
