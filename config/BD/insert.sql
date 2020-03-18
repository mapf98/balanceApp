/*SCRIPTS DE INSERCIÓN*/

/*BANCO*/
INSERT INTO BANCO (bank_name) VALUES ('Bank of America');
INSERT INTO BANCO (bank_name) VALUES ('BBVA');
INSERT INTO BANCO (bank_name) VALUES ('Mercantil');
INSERT INTO BANCO (bank_name) VALUES ('Banesco');
INSERT INTO BANCO (bank_name) VALUES ('BFC');
SELECT * FROM BANCO;

/*MONEDA*/
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Bolivares', 'Bs', 'VES');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Dolares', '$', 'USD');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Bolivares', '€', 'EUR');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Yenes', '¥', 'JPY');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Libra Esterlina', '£', 'GBP');
SELECT * FROM MONEDA;

/*USUARIO*/
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES ('Miguel' , 'Fraga', 'mpfraga98@gmail.com', 'mpfraga98', '1998-04-03', 'admin1');
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES ('Alba', 'Silvestre', 'alba.sofia.n.n@gmail.com', 'albasofia', '1999-01-31', 'admin2');
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES ('Josefa', 'Fraga', 'jfraga2023@gmail.com', 'jfraga2023', '1963-12-20', 'admin3');
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES ('Jesús', 'Chang', 'zchangvx@hotmail.com', 'zchang', '1997-10-25', 'admin4');
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES ('Diego', 'Di Salvatore', 'disalvatorediego@gmail.com', 'disalvatore', '1998-06-02', 'admin5');
SELECT * FROM USUARIO;

/*CUENTA*/
INSERT INTO CUENTA (account_type, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES ('DIG', '234DVC', 1, 1, 2);
INSERT INTO CUENTA (account_type, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES ('EFE', 'Chirulinos', 1, NULL, 1);
INSERT INTO CUENTA (account_type, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES ('EFE', 'Proindal', 2, NULL, 1);
INSERT INTO CUENTA (account_type, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES ('DIG', 'AAFS33', 2, 1, 2);
INSERT INTO CUENTA (account_type, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES ('DIG', '0092SD', 4, 2, 3);
SELECT * FROM CUENTA;

/*TRANSACCION*/
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, fk_account_id) VALUES (20.32, -10, 'Primer pago de clases', '2020-01-02', 1);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, fk_account_id) VALUES (100.9, 120, 'Carne', '2020-04-01', 4);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, fk_account_id) VALUES (220.327, 200, 'Primer pago de flores', '2020-01-02', 5);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, fk_account_id) VALUES (2220, -20, 'Celular nuevo', '2020-01-02', 4);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, fk_account_id) VALUES (1220.32, -420.32, 'Primer cobro', '2020-01-02', 3);
SELECT * FROM TRANSACCION;