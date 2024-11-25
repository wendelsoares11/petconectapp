const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicializando o Express
const app = express();
const port = 3000;

// Configuração do banco de dados SQLite com Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // O SQLite irá armazenar o banco de dados no arquivo `database.sqlite`
});

// Definindo o modelo de Usuário
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  cpf: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  cep: DataTypes.STRING,
  address: DataTypes.STRING,
  houseNumber: DataTypes.STRING,
  password: DataTypes.STRING,
  confirmPassword: DataTypes.STRING,
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password !== user.confirmPassword) {
        throw new Error("As senhas não coincidem.");
      }
      user.password = await bcrypt.hash(user.password, 10);
    },
  },
});

User.prototype.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Configurando o Express para usar JSON
app.use(bodyParser.json());
app.use(cors());  // Permite CORS

// Rota para registrar um novo usuário
app.post('/api/register', async (req, res) => {
  const { name, cpf, email, phone, cep, address, houseNumber, password, confirmPassword } = req.body;

  try {
    const newUser = await User.create({ name, cpf, email, phone, cep, address, houseNumber, password, confirmPassword });
    res.status(201).json({ message: "Usuário registrado com sucesso", user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Iniciando o servidor e conectando ao banco de dados SQLite
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Erro ao conectar com o banco de dados:', err);
  });
