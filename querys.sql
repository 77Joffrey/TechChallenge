select customer_id,last_name,first_name,customer_nbrentals_vw.address_id,nb_rental,address,postal_code,city,latitude,longitude 
from customer_nbrentals_vw 
left join address 
on customer_nbrentals_vw.address_id = address.address_id order by nb_rental DESC;

select customer_id,last_name,first_name,customer_nbrentals_vw.address_id,address,postal_code,city,latitude,longitude,
max(nb_rental) as nb_rentals 
from customer_nbrentals_vw 
join `address` 
on customer_nbrentals_vw.address_id = address.address_id;