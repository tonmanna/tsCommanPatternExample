class LightOffCommand implements ICommand
{
    public light : Light
    constructor(light : Light){
        this.light = light;
    }
    excute(){
        this.light.off();
    }
    undo(){
        this.light.on();
    }
}
