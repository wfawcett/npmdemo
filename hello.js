class Hello{

    constructor(args, writter){
        this.name = args[2];
        this.writter = writter;
    }

    greetings(){
        let sentance = this.putTogetherASentance();
        this.writter.log(sentance);
    }

    putTogetherASentance(){
        return `${this.line(80)}\nHello ${this.name}, it is nice to meet you.\n${this.line()}`
    }

    line(length=80){
        let line = "";
        for(let i = 0; i < length; i++){
            line+= "=";
        }
        return line;
    }

}

module.exports = Hello;