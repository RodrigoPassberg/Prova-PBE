const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database:'hoteis'
});

con.connect((err) => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create cliente
const createclientes = (req, res) => {
    const {nome, cpf, email, endereco, data_nascimento, data_cadastro} =req.body;

    const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'cliente criado com sucesso', result});
        }

    });
}

//CRUD - Read cliente
const readclientes = (req, res) => {
    con.query("SELECT * FROM clientes",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update cliente
const updateclientes = (req, res) => {
    const {cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro} = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?'
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, cliente_id],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'cliente atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete cliente
const deleteclientes = (req, res) => {
    const { cliente_id } = req.params;

    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [cliente_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'cliente removido com sucesso', result});
        }
    });
}

// CRUD - Create estacionamento
const createestacionamento = (req, res) => {
    const {cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} =req.body;

    const query = 'INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'estacionamento criado com sucesso', result});
        }

    });
}

//CRUD - Read estacionamento
const readestacionamento = (req, res) => {
    con.query("SELECT * FROM estacionamento",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update estacionamento
const updateestacionamento = (req, res) => {
    const {cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} = req.body;

    const query = 'UPDATE estacionamento SET cliente_id = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ? WHERE veiculo_placa = ?'
    con.query(query, [cliente_id,veiculo_marca, veiculo_modelo, data_entrada, data_saida,  veiculo_placa],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'estacionamento atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete estacionamento
const deleteestacionamento = (req, res) => {
    const {estacionamento_id} = req.params;

    const query = 'DELETE FROM estacionamento WHERE estacionamento_id = ?';
    con.query(query, [estacionamento_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'estacionamento removido com sucesso', result});
        }
    });
}

// CRUD - Create quartos
const createquartos = (req, res) => {
    const {numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} =req.body;

    const query = 'INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'quartos criado com sucesso', result});
        }

    });
}

//CRUD - Read quartos
const readquartos = (req, res) => {
    con.query("SELECT * FROM quartos",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update quartos
const updatequartos = (req, res) => {
    const {quarto_id, numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} = req.body;

    const query = 'UPDATE quartos SET andar = ?, tipo = ?, valor_diaria = ?, statusQuarto = ?, cliente_id = ? WHERE quarto_id = ?'
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id, quarto_id],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'quartos atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete quartos
const deletequartos = (req, res) => {
    const {quarto_id} = req.params;

    const query = 'DELETE FROM quartos WHERE quarto_id = ?';
    con.query(query, [quarto_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'quartos removido com sucesso', result});
        }
    });
}

// CRUD - Create reservas
const createreservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} =req.body;

    const query = 'INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES(?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'reservas criado com sucesso', result});
        }

    });
}

//CRUD - Read reservas
const readreservas = (req, res) => {
    con.query("SELECT * FROM reservas",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update reservas
const updatereservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} = req.body;

    const query = 'UPDATE reservas SET quarto_id = ?, data_reserva = ?, data_entrada = ?, data_saida = ?, valor_total = ?, statusReserva = ? WHERE cliente_id = ?'
    con.query(query, [quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva, cliente_id],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'reservas atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete reservas
const deletereservas = (req, res) => {
    const {reserva_id} = req.params;

    const query = 'DELETE FROM reservas WHERE reserva_id = ?';
    con.query(query, [reserva_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'reservas removido com sucesso', result});
        }
    });
}

// CRUD - Create telefone
const createtelefone = (req, res) => {
    const {cliente_id, numero, tipo} =req.body;

    const query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES(?, ?, ?)';
    con.query(query, [cliente_id, numero, tipo], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'telefone criado com sucesso', result});
        }

    });
}

//CRUD - Read telefone
const readtelefone = (req, res) => {
    con.query("SELECT * FROM telefone",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update telefone
const updatetelefone = (req, res) => {
    const {telefone_id, cliente_id, numero, tipo} = req.body;

    const query = 'UPDATE telefone SET cliente_id = ?, numero = ?, tipo = ? WHERE telefone_id = ?'
    con.query(query, [cliente_id, numero, tipo, telefone_id],(err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'telefone atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete telefone
const deletetelefone = (req, res) => {
    const { telefone_id } = req.params;

    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    con.query(query, [telefone_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'telefone removido com sucesso', result});
        }
    });
}

//Saida Front
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", teste);

app.post("/clientes",createclientes);
app.get("/clientes", readclientes);
app.put("/clientes", updateclientes);
app.delete("/clientes/:cliente_id", deleteclientes);

app.post("/estacionamento",createestacionamento);
app.get("/estacionamento", readestacionamento);
app.put("/estacionamento", updateestacionamento);
app.delete("/estacionamento/:estacionamento_id", deleteestacionamento);

app.post("/quartos",createquartos);
app.get("/quartos", readquartos);
app.put("/quartos", updatequartos);
app.delete("/quartos/:quarto_id", deletequartos);

app.post("/reservas",createreservas);
app.get("/reservas", readreservas);
app.put("/reservas", updatereservas);
app.delete("/reservas/:reserva_id", deletereservas);

app.post("/telefone",createtelefone);
app.get("/telefone", readtelefone);
app.put("/telefone", updatetelefone);
app.delete("/telefone/:telefone_id", deletetelefone);

//Teste de porta
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});