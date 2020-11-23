## Part 4: Mongo

Для выполнения данного задания необходимо привести в качестве решения запросы к MongoDB и ответы на вопросы, если таковые есть в пункте. Все ваши результаты записывайте в файл `albums-mongo.txt`. 

Задания:

1. Подключитесь к новой Базе Данных.
2. Создайте коллекции: Album, Band, Label (альбом, музыкальная группа, лейбл - звукозаписывающая компания).
3. В альбоме должны содержаться данные о группе, лейбле. Каждая группа может иметь несколько альбомов, а каждый лейбл может работать с несколькими группами.
4. Наполните БД записями (по 3 записи в каждую коллекцию).
5. Выведите в консоль всех исполнителей отсортированных по названию/имени в алфавитном порядке.
6. Выведите в консоль **Только Названия** всех альбомов, которые принадлежат первому по счету исполнителю  (`labels[0]`) из результата предыдущего пункта.
7. Измените имя последнего лейбла. Присутствует ли его имя где-нибудь еще?
8. Удалите последний добавленный в БД альбом.


Все вышеприведенные пункты должны выполняться последовательно.

## Заключение

Если ты завершил(а) части c 1 по 4 и закончил(а) с ассессментом, то подожди до конца ассессмента, чтобы сделать push и создать pull request.