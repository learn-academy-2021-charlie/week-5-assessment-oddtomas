# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
Structured Query Language is a domain-specific languaged used for communicating with relational databses. Relational databses are where information is dplayed in rows and columns like an excel spreadsheet. SQL statements are used to perform tasks like updata data, retrieve data, sort, manipulate data, etc. 

2. What the PostgreSQL query that would return all the content in a particular table?
The SELECT statement in a query would be used along with the * symbole to return "all items" from a table. (SELECT *) would display all of the available columns and their data. 

3. What is the command to create a new Rails application with a PostgreSQL database?
The command to create just a new Rails application using postgesql would be " rails new app_name -d postgresql -T ".

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
The command to generate this Rails model would be "rails generate model Meal breakfast:string lunch:string dinner:string ".


5. What is a migration? Why would you use one?
Migrations in Rails are used to modify the shape of an existing database. Changing the shape of a database could be adding, deleting, changing the name, or changing the data type of a column. 

6. What is the command to generate a migration file?
The command to generate a migration file would be " rails generate migration action_name_here (depending on what you wanted to do)" Then inside the actual migration file created you'd input the code depending on what you wanted to accomplish like "add_column :table_name, :column_name, :datatype" for example, followed by "rails db:migrate" to set the changes.  

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
The naming convention for a Rails model is singular and PascalCase, and the model file name is singular and snake_case. The naming convention for the database table is plural and snake_case. 


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
The schema file in a Rails application is the "shape" of the database; the columns and data types of those columns. The schema is created by Rails and updated by migrations, and should not be modified directly. Since the schema is just a representation of the current state of your database it doesn't make sense to modify it since it's just a representation and not the actual databse. 

9. What is the Rails console?
The Rails console is our way to interat directly with Active Record, there we can create variables and instances that only exist within the context of that console session.

10. What is the Rails console command to see all the content in a particular table?
The console command to see all the content in a table would be ".all" on whatever the class is you are trying to see into. The ".all" command is the same as the SQL query of "SELECT *".