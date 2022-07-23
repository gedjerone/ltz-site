const rubric = document.querySelector('.rubric');
const items = document.querySelectorAll('.item');

rubric.addEventListener('change', (event) => {
    if (event.target.value == 'Все') {
        items.forEach(element => {
            element.className = 'item';
        });
    }
    if (event.target.value == 'Навеска') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Навеска') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Т_25') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Т-25') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Коробка_передач') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Коробка передач') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'реставрация') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Б/У (РЕСТАВРАЦИЯ)') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Ремкомплекты') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Ремкомплекты') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Вал_отбора_мощности') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Вал отбора мощности') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Двигатель') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Двигатель') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Кабина') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Кабина') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Рама') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Рама') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Пусковой_двигатель') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Пусковой двигатель') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Передний_ведущий_мост') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Передний ведущий мост') {
                element.className = 'none_item';
            }
        })
    }
    if (event.target.value == 'Рулевое_управление') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Рулевое управление') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Раздаточная_коробка') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Раздаточная коробка') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Сцепление') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Сцепление') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Тормоза') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Тормоза') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Трансмиссия') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Трансмиссия') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Трактор_сельскохозяйственный') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Трактор Сельскохозяйственный') {
                element.className = 'none_item';
            }
        });
    }
    if (event.target.value == 'Тяга_центральная_Т40_ЛТЗ_МТЗ_Т25') {
        items.forEach(element => {
            element.className = 'item';
            if (element.id != 'Тяга центральная Т40_ЛТЗ_МТЗ_Т25') {
                element.className = 'none_item';
            }
        });
    }
});