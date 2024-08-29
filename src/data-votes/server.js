const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voting_db'
});

conex.connect();

app.post(`/endpoint`, (req, res) => {
    const { title, begindate, fdate, chapa } = req.body;
    const maininfo = [title, begindate, fdate];


    conex.query('CREATE TABLE IF NOT EXISTS votacoes (id INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(255), data_inicio DATETIME, data_fim DATETIME)');

    conex.query('INSERT INTO votacoes (titulo, data_inicio, data_fim) VALUES (?, ?, ?)', maininfo, (err, results) => {
        const vtID = results.insertId;

        conex.query('CREATE TABLE IF NOT EXISTS chapas (id INT AUTO_INCREMENT PRIMARY KEY, votacao_id INT, nome VARCHAR(255), FOREIGN KEY (votacao_id) REFERENCES votacoes(id))');

        chapa.forEach((element) => {
            const chapainfo = [vtID, element];
            conex.query('INSERT INTO chapas (votacao_id, nome) VALUES (?, ?)', chapainfo);
        });

        res.send('dados de votação inseridos no banco de dados');
    });
});

//TODO: enviar os dados pra criar lista
app.get('/', (req, res) => {
});

// endpoint api http://localhost:5000/endpoint
app.listen(5000)
