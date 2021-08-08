# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: The MVC or Model View Controller pattern structures how the application runs and how data is handled in each step of the application.

  Researched answer: The MVC pattern is the Model-View-Controller architectural pattern. This seperates an application into models for handling data and business logic, controllers for UI and application, and views for GUI objects and presentation. With MVC the browser sends a quest for a page to the controller, then the controllers retrieves the data from the model, then the controller gives that data to the view where it is rendered and sent back to the client browser to display. 
ß


2. What is a relational database? Are there other kinds of databases?

  Your answer: Relational databases are databases like excel where there are rows and columns structure with associated values. These databases store and provide access to data that is related to eachother. 

  Researched answer: Relational databases store information in tables consisting of rows and columns. A table is one set of rows and clumns and a database can have many different tables that have relationships to each other. The schema is a description of the layout of all the tables, and name and data types of eah column in a database. In a relational database each row is a record with a unique ID key, and each column holds attributes of the data, and each record usually has a value for each attribute making it easy to establish relationships among data points. 



3. What is object-relational mapping?

  Your answer: ORM is a tool for writing SQL queries using Rails.Active Record is an example of an ORM, and it helps us intereact with database data. 

  Researched answer: ORM is a programming technique for convertin data between incompatible systems. ORM allows developers to wrtie SQL queries using Rails, an example is Active Record which takes data which is stored in a database table and allows interaction with the data as if it was Ruby object. ORM in effect creates a "virtual object database". 



4. What is a gem?

  Your answer: A gem is an extension to the programming language Ruby. Gems are packages that can be installed to expand functionality. 

  Researched answer:
Gems are plugins or extensions to Ruby, in this context even Rails can be considered as nothing more than a gem. Inside of a Rails there is a Gemfile, where you add gems you want tot include and use. Gems are installed via the 
bundler. The Gemfile.lock gets updated with added gems and their dependencies so that that specific version continues to be used. 

5. What are primary keys? Why are they important?

  Your answer: A primary key is an id that automatically added by Rails to each entry in our databases. The primary key is referenced when creating associations, without them it would be difficult to establish a link between different tables. 

  Researched answer:
Primary keys are ids that are automatically added by Rails to each entry. Primary keys are used in "association" where a connection is created between two Active Record models. To create associations we use foreigns keys, "has_many" model, and "belongs_to" model. Foreign keys provide a link between data in two tables by referencing the primary key of the other tables, establishing a link.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Rails follows a RESTful pattern for interactions between the client and server. REST stands for Representational State Transfer, and RESTfyk riytes attempt to bring the operations that can be applied to an object into HTTP requests. Rails routes follow two basic structures, without params or with params. (http verb, url request, param/no param, name of controller, name of controller method)
//get '/photos' => 'photos#index'
//delete '/photos/:id' => 'photos#destroy'


2. JSON: Javascript Object Notation is a lightweight data-interchange format that is easier for humans to read and write. JSON uses conventions familiar to the C-family of languages. JSON is built on two structures; a collection of name/value pairs and an ordered list of values. 

3. ERB: ERB stands for embedded Ruby, which is a file structure that allows us to code in HTML and put Ruby code into the view file. 

4. Params: Params are a way to pass in additional information into a controller method to query the databases of modify the view. Params return an "ActionController::Parameters" object that behaves similarly to a hash.  

5. API: Application Programming Interface is a software intermediary that allows applications to talk to each other. API is a set of definitions and protocols for building and integrating app software. Apps can communicate without having to know how they're implemented, which saves time. APIs can be thought of as contracts where there is an agreement between apps that conclude if app1 sends a request structured in a particular way, then app2 will respond in a particular way. 
