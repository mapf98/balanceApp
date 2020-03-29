/*SCRIPTS DE INSERCIÓN*/

/*CATEGORIA*/
INSERT INTO CATEGORIA (category_name) VALUES ('Alimentos');
INSERT INTO CATEGORIA (category_name) VALUES ('Estudios');
INSERT INTO CATEGORIA (category_name) VALUES ('Vestimenta'); 
INSERT INTO CATEGORIA (category_name) VALUES ('Hogar');
INSERT INTO CATEGORIA (category_name) VALUES ('Vehículos');
SELECT * FROM CATEGORIA;

/*ESTATUS*/
INSERT INTO ESTATUS (status_name) VALUES ('OPEN');
INSERT INTO ESTATUS (status_name) VALUES ('CLOSE');
INSERT INTO ESTATUS (status_name) VALUES ('DISCONTINUED');
INSERT INTO ESTATUS (status_name) VALUES ('REMOVE');
INSERT INTO ESTATUS (status_name) VALUES ('ON HOLD');
SELECT * FROM ESTATUS;

/*USUARIO*/
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ('Miguel' , 'Fraga', 'mpfraga98@gmail.com', 'mpfraga98', '1998-04-03', 'admin1', '2020-04-03', 1);
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ('Alba', 'Silvestre', 'alba.sofia.n.n@gmail.com', 'albasofia', '1999-01-31', 'admin2', '2020-04-12', 1);
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ('Josefa', 'Fraga', 'jfraga2023@gmail.com', 'jfraga2023', '1963-12-20', 'admin3', '2020-04-13', 1);
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ('Jesús', 'Chang', 'zchangvx@hotmail.com', 'zchang', '1997-10-25', 'admin4', '2020-04-30', 1);
INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ('Diego', 'Di Salvatore', 'disalvatorediego@gmail.com', 'disalvatore', '1998-06-02', 'admin5', '2020-04-02', 1);
SELECT * FROM USUARIO;

/*FEEDBACK*/
INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ('Muy bueno, excelente!', '5', '2020-10-20', 1);
INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ('Agregar mas categorias', '5', '2020-12-22', 2);
INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ('Color muy claro', '5', '2020-07-12', 3);
INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ('Falta configuracion', '5', '2020-04-22', 1);
INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ('Muy lento', '5', '2020-06-04', 5);
SELECT * FROM FEEDBACK;

/*LUGAR*/
INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ('Venezuela', 'PAI', NULL);
INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ('Alemania', 'PAI', NULL);
INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ('España', 'PAI', NULL);
INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ('Puerto Rico', 'PAI', NULL);
INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ('Luxemburgo', 'PAI', NULL);
SELECT * FROM LUGAR;

/*BANCO*/
INSERT INTO BANCO (bank_name, fk_place_id) VALUES ('Bank of America', 3);
INSERT INTO BANCO (bank_name, fk_place_id) VALUES ('BBVA', 1);
INSERT INTO BANCO (bank_name, fk_place_id) VALUES ('Mercantil', 1);
INSERT INTO BANCO (bank_name, fk_place_id) VALUES ('Banesco', 1);
INSERT INTO BANCO (bank_name, fk_place_id) VALUES ('BFC', 5);
SELECT * FROM BANCO;

/*MONEDA*/
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ('Bolivares', 'Bs', 'VEF_BLKMKT', 73000);
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ('Dolares', '$', 'USD', 1);
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ('Bolivares', '€', 'EUR', 0.9);
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ('Yenes', '¥', 'JPY', 1.8);
INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ('Libra Esterlina', '£', 'GBP', 1.2);
SELECT * FROM MONEDA;

/*HISTORIAL_MONEDA*/
INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ('74000', '2020-03-18', 1);
INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ('75000', '2020-03-18', 1);
INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ('78000', '2020-03-18', 1);
INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ('84000', '2020-03-18', 1);
INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ('101000', '2020-03-18', 1);
SELECT * FROM HISTORIAL_MONEDA;

/*PERFIL*/
INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ('Abuelo', 'PER', '2020-03-10', '1');
INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ('Proindal', 'COM', '2020-03-10', '1');
INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ('HH', 'COM', '2020-03-10', '1');
INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ('Mama', 'PER', '2020-03-10', '1');
INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ('Ramonete', 'OTR', '2020-03-10', '1');
SELECT * FROM PERFIL;

/*CUENTA*/
INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ('DIG', '234DVC', '2020-04-11', 1, 1, 2, 1);
INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ('EFE', 'Chirulinos', '2020-04-11', 1, NULL, 1, 2);
INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ('EFE', 'Proindal', '2020-04-11', 2, NULL, 1, 3);
INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ('DIG', 'AAFS33', '2020-04-11', 2, 1, 2, 1);
INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ('DIG', '0092SD', '2020-04-11', 4, 2, 3, 3);
SELECT * FROM CUENTA;

/*TRANSACCION*/
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (20.32, -10, 'Primer pago de clases', '2020-01-02', '2020-04-03', 1, 1);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (100.9, 120, 'Carne', '2020-04-01', '2020-04-03', 4, 5);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (220.327, 200, 'Primer pago de flores', '2020-01-02', '2020-04-03', 5, 4);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (2220, -20, 'Celular nuevo', '2020-01-02', '2020-04-03', 4, 2);
INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (1220.32, -420.32, 'Primer cobro', '2020-01-02', '2020-04-03', 3, 1);
SELECT * FROM TRANSACCION;
