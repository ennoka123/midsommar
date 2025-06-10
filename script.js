function toggleSnapsvisor() {
  const visor = document.getElementById('visor');
  visor.classList.toggle('hidden');
}

document.getElementById('snapsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('newTitle').value.trim();
  const text = document.getElementById('newText').value.trim();

  if (title && text) {
    const container = document.getElementById('userVisor');
    const entry = document.createElement('div');
    entry.innerHTML = `<p><strong>${title}:</strong><br>${text}</p>`;
    container.appendChild(entry);

    document.getElementById('newTitle').value = '';
    document.getElementById('newText').value = '';
  }
});