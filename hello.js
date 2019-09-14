/**
 * This class handles the work of writing a greeting
 */
class Hello {
    /**
     *
     * @param {*} args
     * @param {*} writter
     */
    constructor(args, writter) {
        this.name = args[2];
        this.writter = writter;
    }

    greetings() {
        const sentance = this.putTogetherASentance();
        this.writter.log(sentance);
    }

    putTogetherASentance() {
        const line = this.line();
        return `${line}\nHello ${this.name}, nice to meet you.\n${line}`;
    }

    line(length=80) {
        let line = '';
        for (let i = 0; i < length; i++) {
            line+= '=';
        }
        return line;
    }
}

module.exports = Hello;
