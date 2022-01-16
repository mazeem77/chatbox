-- create database chatbox; 
CREATE TABLE user (
    user_id INT UNIQUE NOT NULL AUTO_INCREMENT,
    username VARCHAR(40) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20),
    date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL,
    status VARCHAR(20),
    about VARCHAR(200),
    phone_no INT,
    PRIMARY KEY (user_id)
);

CREATE TABLE chat_room
(/*implement m:n realtionship TABLEs*/
	cr_id INT UNIQUE NOT NULL,
    cr_name VARCHAR(20) NOT NULL,
    cr_desc VARCHAR(200),
    date_created date NOT NULL,
    PRIMARY KEY (cr_id)
);

CREATE TABLE message
(/*implement inheritance*/
	m_id INT UNIQUE NOT NULL,
    time_stamp TIMESTAMP NOT NULL,
    sender INT NOT NULL,
    chat_room INT NOT NULL,
    PRIMARY KEY (m_id),
    FOREIGN KEY (sender) REFERENCES user(user_id),
    FOREIGN KEY (chat_room) REFERENCES chat_room(cr_id)
);

CREATE TABLE user_is_in_chat
(
	user_id INT NOT NULL,
    cr_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (cr_id) REFERENCES chat_room(cr_id),
    UNIQUE(user_id, cr_id)
);

CREATE TABLE user_manages
(
	user_id INT NOT NULL,
    cr_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (cr_id) REFERENCES chat_room(cr_id),
    UNIQUE(user_id, cr_id)
);

CREATE TABLE text_msg
(
	m_id INT REFERENCES message,
	message_body TEXT,
	PRIMARY KEY(m_id)
);

CREATE TABLE media
(
	m_id INT REFERENCES message,
	link TEXT,
	PRIMARY KEY(m_id)
);



/*CREATE domain activity_status as VARCHAR(20)
default "inactive"
check (status in ('inactive','active'));
