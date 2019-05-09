class LightOnCommand implements ICommand
{
    public light : Light
    constructor(light : Light){
        this.light = light;
    }
    excute(){
        this.light.on();
    }
    undo(){
        this.light.off();
    }
}
