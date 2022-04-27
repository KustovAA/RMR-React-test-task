## Задание

У нас есть данные о том сколько сотрудники компании проводят времени в соцсетях с рабочего компьютера. Нам поступило задание сделать приложение, в котором можно удобно просматривать данную информацию с возможностью видеть
- временя за каждый день месяца
- общее время за месяц
- искать сотрудника по имени


Веб-приложение необходимо реализовать с использованием React (обязательно), typescript/javascript на выбор. Можно использовать библиотеки компонентов, например MUI React, Ant Design или другие. Также можно воспользоваться create-react-app для сборки или сделать сборку самому используя любой удобный tool, например webpack, rollup, parcel, vite, esbuild или другие.


Приложение представляет из себя таблицу с пользователями со столбцами | User | 1 | 2 | 3 | ... | Monthly |, где User - Имя пользователя, 1, 2, 3 - числа месяца, Monthly total - время проведенное пользователем в приложении за месяц


Пример таблицы

![example1](/example1.png "example1")
![example2](/example2.png "example2")

Для каждой строки в дни месяца отобразить количество времени который провел пользователь в этот день, если данных за этот день нет, то отобразить 0.

В колонку Monthly total отобразить все количество времени пользователя за месяц.

##### Как получить данные для таблицы

1. Запустить команду `npm run server`
2. Сервер имеет endpoint GET /api/users, который возвращает необходимые данные

### Дополнительно:

1. Для каждой колонки реализовать сортировку по возрастанию и убыванию;
2. Реализовать поиск по имени пользователя (поле Fullname);
3. Реализовать постраничную пагинацию на фронтенде (получаем с бэка полный список, на страницы разбиваем на фронте)

4. Первая и последняя колонка (User and Monthly total) должны быть приклеены к своим сторонам, то есть при горизонтальном скролле они не должны скрываться;
5. Колонки таблицы должны быть resizeable;
