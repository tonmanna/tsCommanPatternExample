class Light{
    public name : string;
    constructor(name : string) {
        this.name = name;
    }
    on(){
        console.log("Light On:"+ this.name);
    }
    off(){
        console.log("Light Off:"+ this.name);        
    }
}