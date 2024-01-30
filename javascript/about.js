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