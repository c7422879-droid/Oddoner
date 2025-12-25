document.addEventListener('DOMContentLoaded', () => {
    console.log("UI Script Loaded. Adding event listeners.");

    // Esta es una forma moderna de añadir interactividad, en lugar de usar 'onclick' en el HTML.
    // Las funciones como openCrisisModal() ya existen en tu bloque <script> en index.html.

    const crisisButton = document.getElementById('btn-crisis');
    if (crisisButton) crisisButton.addEventListener('click', openCrisisModal);

    const settingsButton = document.getElementById('settings-corner-container');
    if (settingsButton) settingsButton.addEventListener('click', openSettingsModal);

    const musicButton = document.getElementById('music-corner-container');
    if (musicButton) musicButton.addEventListener('click', openMusicModal);
    
    const installButton = document.getElementById('btn-install');
    if(installButton) installButton.addEventListener('click', installPWA);

    const counterContent = document.getElementById('counter-content');
    if(counterContent) counterContent.addEventListener('click', resetCounter);

    const clockFooter = document.getElementById('clock-footer');
    if(clockFooter) clockFooter.addEventListener('click', showDatePicker);

    const tallerButton = document.getElementById('btn-open-taller');
    if(tallerButton) tallerButton.addEventListener('click', openTallerModal);

    const aaButton = document.getElementById('btn-open-aa');
    if(aaButton) aaButton.addEventListener('click', openAAMenuModal);

    const toxicButton = document.getElementById('btn-open-toxic');
    if(toxicButton) toxicButton.addEventListener('click', openToxicTestModal);

    const donationButton = document.getElementById('btn-open-donation');
    if(donationButton) {
        donationButton.addEventListener('click', (e) => {
            e.preventDefault();
            openDonationModal();
        });
    }

    const closeModalButton = document.getElementById('btn-close-modal');
    if(closeModalButton) closeModalButton.addEventListener('click', closeGenModal);

    const portal = document.getElementById('portal');
    if(portal) portal.addEventListener('click', activatePortal);

    const closePupila = document.getElementById('btn-close-pupila');
    if(closePupila) closePupila.addEventListener('click', deactivatePortal);

    const closeLoom = document.getElementById('btn-close-loom');
    if(closeLoom) closeLoom.addEventListener('click', closeLoom);

    const neuroStimulus = document.getElementById('neuro-stimulus');
    if(neuroStimulus) {
        neuroStimulus.addEventListener('mousedown', handleNeuroInput);
        neuroStimulus.addEventListener('touchstart', handleNeuroInput);
    }

    const startNeuro = document.getElementById('btn-start-neuro');
    if(startNeuro) startNeuro.addEventListener('click', startNeuroGate);

    const closeNeuroStart = document.getElementById('btn-close-neuro-start');
    if(closeNeuroStart) closeNeuroStart.addEventListener('click', closeNeuroGate);

    const closeNeuroResults = document.getElementById('btn-close-neuro-results');
    if(closeNeuroResults) closeNeuroResults.addEventListener('click', closeNeuroGate);

    console.log("Interactive elements are now wired up via script.js.");
});