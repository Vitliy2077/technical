        fetch('text/date.txt')
            .then(response => response.text())
            .then(text => {
                document.getElementById('date').innerText = text;
            })
            .catch(error => console.error('Ошибка:', error));
        fetch('text/title.txt')
            .then(response => response.text())
            .then(text => {
                document.getElementById('title').innerText = text;
            })
            .catch(error => console.error('Ошибка:', error));
            fetch('text/name.txt')
            .then(response => response.text())
            .then(text => {
                document.getElementById('name').innerText = text;
            })
            .catch(error => console.error('Ошибка:', error));
            fetch('text/text.txt')
            .then(response => response.text())
            .then(text => {
                document.getElementById('text').innerText = text;
            })
            .catch(error => console.error('Ошибка:', error));
            
