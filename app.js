const content = {
    'klasse2': {
      'title': 'Klasse 2',
      'topics': [
        'Einführung',
        'Teilbarkeit',
        'Bruchrechnen',
        'Ganze Zahlen',
        'Geometrische Grundlagen',
        'Proportionalitäten',
        'Dreiecke'
      ]
    },
    'klasse3': {
      'title': 'Klasse 3',
      'topics': [
        'Gleichungen',
        'Vierecke',
        'Prozentrechnen',
        'Daten',
        'Lernen mit Technologien'
      ]
    }
  };
  
  function createNavigation() {
    const nav = document.getElementById('main-nav');
    for (const [key, value] of Object.entries(content)) {
      const button = document.createElement('button');
      button.textContent = value.title;
      button.addEventListener('click', () => loadContent(key));
      nav.appendChild(button);
    }
  }
  
  function loadContent(key) {
    const main = document.getElementById('content');
    main.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.textContent = content[key].title;
    main.appendChild(h2);
    const ul = document.createElement('ul');
    content[key].topics.forEach(topic => {
      const li = document.createElement('li');
      li.textContent = topic;
      ul.appendChild(li);
    });
    main.appendChild(ul);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    loadContent('klasse2');
  });