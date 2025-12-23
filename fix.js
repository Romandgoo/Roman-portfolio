console.log("Fix.js загружен!"); // Проверка загрузки

// Ждём полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Страница загружена!");
    
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error("Кнопка themeToggle не найдена!");
        return;
    }
    
    console.log("Кнопка найдена:", themeToggle);
    
    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    // Вешаем обработчик
    themeToggle.addEventListener('click', function() {
        console.log("Кнопка нажата!");
        
        // Переключаем тему
        document.body.classList.toggle('light-theme');
        
        // Меняем иконку
        const icon = this.querySelector('i');
        if (icon) {
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
                console.log("Переключено на светлую тему");
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
                console.log("Переключено на тёмную тему");
            }
        }
    });
    
    // Проверка клика по всему документу
    document.addEventListener('click', function(e) {
        console.log("Клик по:", e.target);
    });
});
