function showEventsByYear(year) {
    const events = document.querySelectorAll('.timeline-event');

    events.forEach(event => {
      const eventYear = parseInt(event.querySelector('.event-date').textContent.split('-')[0]);
      event.style.display = eventYear === year ? 'flex' : 'none';
    });
  }

  function hoverEvent(element) {
    element.classList.add('active');
  }

  function unhoverEvent(element) {
    element.classList.remove('active');
  }


  function downloadCV() {
    // Replace 'path/to/your/cv.docx' with the actual path to your document file
    var downloadLink = document.createElement('a');
    downloadLink.href = 'document/cv.pdf';
    downloadLink.download = 'cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}