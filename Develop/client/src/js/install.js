const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // used to store the triggered events
     window.deferredPrompt = event;

     butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }

    promptEvent.prompt();

    // install button can only be used once
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // clears the prompt
    window.deferredPrompt = null;
});
