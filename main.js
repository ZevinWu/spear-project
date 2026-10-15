(() => {
 const trigger = document.getElementById('intro-trigger');
 const dialog = document.getElementById('intro-dialog');
 const close = document.getElementById('close-intro');
 const video = document.getElementById('intro-video');
 if (dialog && typeof dialog.showModal === 'function') {
   trigger.addEventListener('click', event => {
     event.preventDefault();
     dialog.showModal();
     video.play().catch(() => {});
   });
   const closeDialog = () => dialog.close();
   close.addEventListener('click', closeDialog);
   dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
   dialog.addEventListener('close', () => {video.pause(); video.currentTime = 0;});
 }
 const copy = document.getElementById('copy-citation');
 const status = document.getElementById('message');
 copy.addEventListener('click', async () => {
   const txt = document.getElementById('bibtex-text').textContent;
   try {
     if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(txt);
     else {
       const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.left = '-9999px';
       document.body.appendChild(ta); ta.select();
       if (!document.execCommand('copy')) throw new Error('Copy failed'); ta.remove();
     }
     copy.textContent = 'Copied'; status.textContent = 'BibTeX copied to clipboard.';
     setTimeout(() => { copy.textContent = 'Copy'; }, 1800);
   } catch (_) { copy.textContent = 'Select text'; status.textContent = 'Select and copy the citation text manually.'; }
 });
})();
