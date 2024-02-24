//Listens for messages from the popup
//and starts water animation
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startWaterAnimation') {
      startWaterAnimation();
    }
  });

function startWaterAnimation() {
    // Create a div to cover the entire screen
    const wavesContainer = document.createElement('div');
    wavesContainer.classList.add('waves-container');
    
    // Add the overlay to the body
    document.body.appendChild(wavesContainer);

  }