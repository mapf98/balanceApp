/*SCRIPTS DE CREACIÓN*/

CREATE TABLE USUARIO (
	user_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    bd_date DATE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE BANCO (
	bank_id INTEGER NOT NULL AUTO_INCREMENT,
    bank_name VARCHAR(50) NOT NULL,
	PRIMARY KEY (bank_id)
);

CREATE TABLE MONEDA (
	currency_id INTEGER NOT NULL AUTO_INCREMENT,
    currency_name VARCHAR(20) NOT NULL,
    currency_symbol VARCHAR(5) NOT NULL UNIQUE,
    currency_iso_code VARCHAR(5) NOT NULL,
	PRIMARY KEY (currency_id)
);

CREATE TABLE CUENTA (
	account_id INTEGER NOT NULL AUTO_INCREMENT,
    account_resume DOUBLE NOT NULL,
    account_reference VARCHAR(6) NOT NULL,
    fk_user_id INTEGER NOT NULL,
    fk_bank_id INTEGER NOT NULL,
    fk_currency_id INTEGER NOT NULL,
	PRIMARY KEY (account_id),
    FOREIGN KEY FK_ACCOUNT_USER_ID (fk_user_id) REFERENCES USUARIO (user_id),
    FOREIGN KEY FK_ACCOUNT_BANK_ID (fk_bank_id) REFERENCES BANCO (bank_id),
    FOREIGN KEY FK_ACCOUNT_CURRENCY_ID (fk_currency_id) REFERENCES MONEDA (currency_id)
);

CREATE TABLE TRANSACCION (
	transaction_id INTEGER NOT NULL AUTO_INCREMENT,
    transaction_total DOUBLE NOT NULL,
    transaction_concept VARCHAR(150) NOT NULL,
    transaction_date DATE NOT NULL,
    fk_account_id INTEGER NOT NULL,
	PRIMARY KEY (transaction_id),
    FOREIGN KEY FK_TRANSACTION_ACCOUNT_ID (fk_account_id) REFERENCES CUENTA (account_id)
);