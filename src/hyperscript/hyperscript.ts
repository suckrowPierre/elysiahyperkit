export class Hyperscript {
    public script: string;

    constructor(script: string) {
        this.script = script;
    }

    concat(script: string | Hyperscript): Hyperscript {
        this.script += " " + script.toString();
        return this;
    }

    concatThen(script: string | Hyperscript): Hyperscript {
        this.script += " then " + script.toString();
        return this;
    }

    static if(condition: string | Hyperscript, toDo: string | Hyperscript): Hyperscript {
        return new Hyperscript(`if ${condition.toString()} then ${toDo.toString()} end`);
    }

    static ifElse(condition: string, toDo: string, elseDo: string): Hyperscript {
        return new Hyperscript(`if ${condition.toString()} then ${toDo.toString()} else ${elseDo.toString()} end`);
    }

    toString() {
        return this.script;
    }
}