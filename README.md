
# backend-app of super-coffee (Home assessment task from SwensonHe

just open the project root dir in terminal and do:

```
docker-compose up --build
```

the above command build the docker images and let the containers up-and-running. It seeds the database as well ;)

The postman collection is included in the root directory of the project. You can import from Postman.

The endpoints are listed as follows:

Coffee machines
>> {{url}}/coffee-machines?product_type=COFFEE_MACHINE_LARGE
>> {{url}}/coffee-machines?product_type=ESPRESSO_MACHINE


Coffee pods
>> {{url}}/coffee-pods?product_type=COFFEE_POD_LARGE
>> {{url}}/coffee-pods?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA
>> {{url}}/coffee-pods?product_type=COFFEE_POD_SMALL
>> {{url}}/coffee-pods?pack_size=7

**Note:** url is a postman variable with value: http://localhost:3030
