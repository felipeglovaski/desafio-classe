class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Harry", 19, "Mago");
heroi1.atacar();

const heroi2 = new Heroi("Marino", 30, "Ninja");
heroi2.atacar();

const heroi3 = new Heroi("Julius", 25, "Guerreiro");
heroi3.atacar();

const heroi4 = new Heroi("Miu", 78, "Monge");
heroi4.atacar(); 


