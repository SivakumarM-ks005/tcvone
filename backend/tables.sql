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

create table brand {
    brandid int primary key AUTO_INCREMENT,
    brandName varchar(100),
    brandCode varchar(100),
    desription varchar(1000),
     UNIQUE(brandName)
}

CREATE TABLE product_brand (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    brand_code VARCHAR(50),
    brand_name VARCHAR(150) NOT NULL,
    manufacturer VARCHAR(150),
    country_origin VARCHAR(100),
    description TEXT,
    website VARCHAR(255),
    logo_url VARCHAR(255),
    status TINYINT(1) DEFAULT 1,
    created_by INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE(brandName)
);