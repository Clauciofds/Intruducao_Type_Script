select date, id, name from users;

select * from orders where email <> 'aliquam@aol.net';

select * from orders where price < 10000;

select * from orders where price < 10000 and email <> 'aliquam.nec.enim@outlook.com';

select * from orders where price < 10000 or email <> 'aliquam.nec.enim@outlook.com';

select * from orders where price > 1000 and price < 6000;

select * from orders where not price > 8000;

select * from orders where price between 10000 and 15000;

select * from orders where price not between 10000 and 15000;

select * from orders where price between 1000 and 5500 or price between 10000 and 15000 order by price;

select * from orders where price between 1000 and 5500 or price between 10000 and 15000 order by price desc;

select * from users where country is null;

select * from users where country is not null;

select * from users where name like 'Bruno Chan';

select * from users where name like 'Ab%';

select * from users where name ilike 'ac%';

select * from users where name like '%es';

select * from users where name like '%Ce%';

select * from users where name ilike '%Ce%';

select * from users where country like '%ra_____';

select * from users where country ilike '%r_% &_a%';

select * from users where country like '%ra%';

select id, email
from orders
where price between 3000 and 8000
order by email desc;

select * from orders
where price between 4000 and 50000
limit 5;

select * from orders
order by email
limit 10 offset 3;

select * from users
where country = 'Brazil';

-- Para selecionar um coluna sem que se repita algum item;
select distinct country from users
where country is not null;

select date, avg(price) as media
from orders
where price between 3000 and 6000
group by date order by media;

select date, count(price) as contador
from orders
where price between 2000 and 8000
group by date;

-- 5000 -> R$ 50,00

select * from orders where price + 5000 < 10000;

select * from orders where price - (price * 0.1) < 10000;

select *, sqrt(price) as raiz from orders;

select *, ceil(sqrt(price)) as raiz from orders;

select *, round(sqrt(price)) as raiz from orders;

select id, upper(name) as "Nome formatado" from users;

-- CONCATENAR COLUNAS

select name || ' ' || email from users;

select concat(name, ' ', email) as "name/email" from users;

-- CONVERSÃO DE TIPOS

select char_length(price::text) as "numero/texto" from orders;

-- TRABALHANDO COM DATAS

select now();

select *, extract(year from date::timestamp) as "ano" from orders;

select *, date, date::timestamp at time zone 'America/Sao_Paulo'
as "hora/brasilia" from orders;