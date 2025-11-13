-- user table
create table user (
    userId int primary key AUTO_INCREMENT,
    userName varchar(250),
    password varchar(250),
    email varchar(100),
    firstName varchar(100),
    lastName varchar(100),
    dateRegistered date, 
    lastLogin DATETIME, 
    role  varchar(20),
    Status varchar(20),
    UNIQUE(userName,email)
)

insert into user ( username, password, email, firstName, lastName, dateRegistered,lastLogin,role,Status )
values ('tcvadmin','Tcv@1234','timecablevision@gmail.com','sivakumar','m','2025-11-10', '2025-11-10', 'admin','true' );