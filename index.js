
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const ninja = new heroi("Naruto", 16, "ninja");
ninja.atacar();

const mago = new heroi("Asta", 15, "mago");
mago.atacar();

const guerreiro = new heroi("Guts", 24, "guerreiro");
guerreiro.atacar();