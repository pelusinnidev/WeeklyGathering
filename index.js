document.addEventListener('DOMContentLoaded', function() {
    fetch('index.json')
    .then(response => response.json())
    .then(data => {
        updateContent('es', data);
    });

    document.getElementById('language-selector').addEventListener('change', function(event) {
        fetch('index.json')
        .then(response => response.json())
        .then(data => {
            updateContent(event.target.value, data);
        });
    });
});

function updateContent(lang, data) {
    document.querySelectorAll('[data-key]').forEach(element => {
        let key = element.getAttribute('data-key').split(':');
        element.textContent = data[lang][key[0]][key[1]];
    });
}

function toggleMenu() {
    let links = document.getElementById('navbar-links');
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}
