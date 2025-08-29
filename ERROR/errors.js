document.addEventListener('DOMContentLoaded', () => {
    // Получаем URL-параметры
    const urlParams = new URLSearchParams(window.location.search);
    const errorCode = urlParams.get('code');

    // Если код ошибки существует, находим и показываем соответствующий блок
    if (errorCode) {
        const errorElement = document.getElementById(errorCode);
        if (errorElement) {
            // Удаляем класс 'active' у всех элементов, чтобы избежать конфликтов
            const allErrorContainers = document.querySelectorAll('.error-container');
            allErrorContainers.forEach(container => container.classList.remove('active'));

            // Добавляем класс 'active' только к нужному элементу
            errorElement.classList.add('active');
        } else {
            // Если код ошибки не найден, можно показать ошибку 404 по умолчанию
            document.getElementById('404').classList.add('active');
        }
    } else {
        // Если в URL нет кода, тоже показываем 404
        document.getElementById('404').classList.add('active');
    }
});