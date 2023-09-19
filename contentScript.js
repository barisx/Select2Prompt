function transferSelectedTextToTextarea() {
    const textArea = document.getElementById('prompt-textarea');
  
    if (textArea) {
      document.body.addEventListener('mouseup', () => {
        const selectedText = window.getSelection().toString();
  
        if (selectedText) {
          textArea.value += selectedText + '\n';
          textArea.focus();
          textArea.scrollTop = textArea.scrollHeight;
        }
      });
    } else {
      console.error('Element with id "prompt-textarea" not found.');
    }
  }
  
  transferSelectedTextToTextarea();
  