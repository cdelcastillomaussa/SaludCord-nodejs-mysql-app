CREATE DATABASE saludcord;

USE saludcord;

CREATE TABLE registros(
    id INT(11) NOT NULL,
    identificacion VARCHAR(10) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    EPS VARCHAR(80) NOT NULL,
    genero VARCHAR(15) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
    
);

ALTER TABLE registros
    ADD PRIMARY KEY (id);

ALTER TABLE registros
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE registros;

/*user_id INT(11),        ESTO NO TERMINE
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES registros(id)*/

CREATE TABLE pacientes_citas (
    id INT(11) NOT NULL,
    tipocita VARCHAR(25) NOT NULL,
    fechacita DATE NOT NULL,
    horacita TIME NOT NULL
    
);

ALTER TABLE pacientes_citas
    ADD PRIMARY KEY (id);

ALTER TABLE pacientes_citas
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE pacientes_citas;



CREATE TABLE doctores (
    id INT(11) NOT NULL,
    tipocita VARCHAR(25) NOT NULL,
    paciente VARCHAR(100) NOT NULL,
    fechacita DATE NOT NULL,
    horacita TIME NOT NULL
    
);

ALTER TABLE doctores
    ADD PRIMARY KEY (id);

ALTER TABLE doctores
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE doctores;