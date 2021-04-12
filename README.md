# LoginRegisterNodeJS

Fazer o git clone, abrir projeto com vscode.
No terminal(ctrl+') executar "npm install", e todas as dependências serão instaladas.

Para executar o projeto "npm start".


## Para fazer o teste de cadastro e de login, baixar insomia e criar as seguintes rotas:

### Post - Cadastro
http://localhost:3333/users

no corpo json da requisição passar:
{
	"name": "Nome exmeplo",
	"email": "exemplo@gmail.com",
	"pass": "exemplo123"
}

### Get - Login
http://localhost:3333/login

no corpo json da requisição passar:
{
	"email": "felipe@gmail.com",
	"pass": "felipe123"
}
