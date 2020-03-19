/*SCRIPTS DE CREACIÓN*/

CREATE TABLE ESTATUS (
	status_id INTEGER NOT NULL AUTO_INCREMENT,
    status_name VARCHAR(50) NOT NULL,
	PRIMARY KEY (status_id)
);

CREATE TABLE USUARIO (
	user_id INTEGER NOT NULL AUTO_INCREMENT,
    user_first_name VARCHAR(20) NOT NULL,
    user_last_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_alias VARCHAR(50) NOT NULL UNIQUE,
    user_birthdate DATE NOT NULL,
    user_password VARCHAR(12) NOT NULL,
    user_create_date DATE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE MONEDA (
	currency_id INTEGER NOT NULL AUTO_INCREMENT,
    currency_name VARCHAR(20) NOT NULL,
    currency_symbol VARCHAR(5) NOT NULL UNIQUE,
    currency_iso_code VARCHAR(5) NOT NULL,
    currency_amount_one_dollar_equivalent DOUBLE NOT NULL,
	PRIMARY KEY (currency_id)
);

CREATE TABLE HISTORIAL_MONEDA (
	currency_history_id INTEGER NOT NULL AUTO_INCREMENT,
    currency_history_amount_one_dollar_equivalent DOUBLE NOT NULL,
    currency_history_date DATE NOT NULL,
    fk_currency_id INTEGER NOT NULL,
	PRIMARY KEY (currency_history_id),
    FOREIGN KEY FK_HISTORY_CURRENCY_CURRENCY_ID (fk_currency_id) REFERENCES MONEDA (currency_id)
);

CREATE TABLE FEEDBACK (
	feedback_id INTEGER NOT NULL AUTO_INCREMENT,
    feedback_description VARCHAR(100),
    feedback_rate DOUBLE NOT NULL,
    feedback_date DATE NOT NULL,
	fk_user_id INTEGER NOT NULL,
    PRIMARY KEY (feedback_id),
    FOREIGN KEY FK_FEEDBACK_USER_ID (fk_user_id) REFERENCES USUARIO (user_id)
);

CREATE TABLE LUGAR (
	place_id INTEGER NOT NULL AUTO_INCREMENT,
    place_name VARCHAR(50) NOT NULL,
    place_type VARCHAR(3) NOT NULL,
    fk_place_id INTEGER,
	PRIMARY KEY (place_id),
    FOREIGN KEY FK_PLACE_PLACE_ID (fk_place_id) REFERENCES LUGAR (place_id),
    CONSTRAINT CHECK_PLACE_TYPE CHECK (place_type in ('PAI','EST','MUN'))
);

/*ARREGLAR EN BACKEND*/
CREATE TABLE BANCO (
	bank_id INTEGER NOT NULL AUTO_INCREMENT,
    bank_name VARCHAR(50) NOT NULL,
    fk_place_id INTEGER NOT NULL,
	PRIMARY KEY (bank_id),
    FOREIGN KEY FK_BANK_PLACE_ID (fk_place_id) REFERENCES LUGAR (place_id)
);

/*AGREGAR EN BACKEND*/
CREATE TABLE PERFIL (
	profile_id INTEGER NOT NULL AUTO_INCREMENT,
    profile_name VARCHAR(25) NOT NULL,
    profile_type VARCHAR(3) NOT NULL,
    profile_create_date DATE NOT NULL,
    fk_user_id INTEGER NOT NULL,
	PRIMARY KEY (profile_id),
    FOREIGN KEY FK_PROFILE_USER_ID (fk_user_id) REFERENCES USUARIO (user_id),
    CONSTRAINT CHECK_PROFILE_TYPE CHECK (profile_type in ('PER','COM','OTR'))
);

/*AGREGAR EN BACKEND*/
CREATE TABLE CATEGORIA (
	category_id INTEGER NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
	PRIMARY KEY (category_id)
);

/*ARREGLAR EN BACKEND*/
CREATE TABLE CUENTA (
	account_id INTEGER NOT NULL AUTO_INCREMENT,
    account_type VARCHAR(3) NOT NULL,
    account_reference VARCHAR(30) NOT NULL,
    account_create_date DATE NOT NULL,
    fk_profile_id INTEGER NOT NULL,
    fk_bank_id INTEGER,
    fk_status_id INTEGER NOT NULL,
    fk_currency_id INTEGER NOT NULL,
	PRIMARY KEY (account_id),
    FOREIGN KEY FK_ACCOUNT_PROFILE_ID (fk_profile_id) REFERENCES PERFIL (profile_id),
    FOREIGN KEY FK_ACCOUNT_BANK_ID (fk_bank_id) REFERENCES BANCO (bank_id),
    FOREIGN KEY FK_ACCOUNT_CURRENCY_ID (fk_currency_id) REFERENCES MONEDA (currency_id),
    FOREIGN KEY FK_ACCOUNT_STATUS_ID (fk_status_id) REFERENCES ESTATUS (status_id),
    CONSTRAINT CHECK_ACCOUNT_TYPE CHECK (account_type in ('DIG','EFE','CRY'))
);

/*ARREGLAR EN BACKEND*/
CREATE TABLE TRANSACCION (
	transaction_id INTEGER NOT NULL AUTO_INCREMENT,
    transaction_account_total DOUBLE NOT NULL,
    transaction_amount DOUBLE NOT NULL,
    transaction_concept VARCHAR(150) NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_create_date DATE NOT NULL,
    fk_account_id INTEGER NOT NULL,
    fk_category_id INTEGER NOT NULL,
	PRIMARY KEY (transaction_id),
    FOREIGN KEY FK_TRANSACTION_ACCOUNT_ID (fk_account_id) REFERENCES CUENTA (account_id),
    FOREIGN KEY FK_TRANSACTION_CATEGORY_ID (fk_category_id) REFERENCES CATEGORIA (category_id)
);