/*SCRIPTS DE INSERCIÓN*/

/*BANCO*/
INSERT INTO BANCO (bank_name) VALUES ('Bank of America');
INSERT INTO BANCO (bank_name) VALUES ('BBVA');
INSERT INTO BANCO (bank_name) VALUES ('Mercantil');
INSERT INTO BANCO (bank_name) VALUES ('Banesco');
INSERT INTO BANCO (bank_name) VALUES ('BFC');

/*MONEDA*/
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Bolivares', 'Bs', 'VES');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Dolares', '$', 'USD');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Bolivares', '€', 'EUR');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Yenes', '¥', 'JPY');
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code) VALUES ('Libra Esterlina', '£', 'GBP');

/*USUARIO*/
INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES ('Miguel','Fraga','mpfraga98@gmail.com', '1998-04-03');
INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES ('Alba','Silvestre','alba.sofia.n.n@gmail.com', '1999-01-31');
INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES ('Josefa','Fraga','jfraga2023@gmail.com', '1963-12-20');
INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES ('Jesús','Chang','zchangvx@hotmail.com', '1997-10-25');
INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES ('Diego','Di Salvatore','disalvatorediego@gmail.com', '1998-06-02');

/*CUENTA*/
INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (1000,'234DVC', 1, 1, 2);
INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (0,'UU2344', 1, 1, 1);
INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (300.23,'AAS221', 2, 3, 1);
INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (4000.330,'AAFS33', 2, 1, 2);
INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (2333.456,'0092SD', 4, 2, 3);

/*TRANSACCION*/
INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (20.32, 'Primer pago de clases', '2020-01-02', 1);
INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (-100.9, 'Carne', '2020-04-01', 4);
INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (-220.327, 'Primer pago de flores', '2020-01-02', 5);
INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (-2220, 'Celular nuevo', '2020-01-02', 4);
INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (1220.32, 'Primer cobro', '2020-01-02', 3);

/*CONSULTAS*/
SELECT * FROM BANCO;
SELECT * FROM MONEDA;
SELECT * FROM USUARIO;
SELECT * FROM CUENTA;
SELECT * FROM TRANSACCION;