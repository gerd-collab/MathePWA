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
  button.addEventListener('click', () => showTableOfContents(key));
  nav.appendChild(button);
}
}

function showTableOfContents(key) {
const main = document.getElementById('content');
const toc = document.createElement('div');
toc.innerHTML = `<h2>${content[key].title}</h2>`;

const ul = document.createElement('ul');
content[key].topics.forEach(topic => {
  const li = document.createElement('li');
  li.textContent = topic;
  ul.appendChild(li);
});
toc.appendChild(ul);

// Behalte die ursprünglichen Worksheet-Links bei
const worksheetLinks = main.querySelector('ul');

main.innerHTML = '';
main.appendChild(toc);

if (worksheetLinks) {
  main.appendChild(document.createElement('h2')).textContent = 'Arbeitsblätter';
  main.appendChild(worksheetLinks);
}
}

document.addEventListener('DOMContentLoaded', () => {
createNavigation();
// Zeige initial keine Inhalte an, um die ursprünglichen Links sichtbar zu lassen
});
