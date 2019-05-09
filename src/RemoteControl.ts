class RemoteControl {
    public onCommand : ICommand[] = [];
    public offCommand : ICommand[] = [];
    constructor() {
        for(let i = 0; i< 7 ;i++){
            this.onCommand[i] = new NoCommand()
        }
    }
    public setCommand(slot : number, onCommand : ICommand, offCommand : ICommand){
        this.onCommand[slot] = onCommand;
        this.offCommand[slot] = offCommand;
    }
    public onButtonWasPushed(slot: number){
        this.onCommand[slot].excute();
    }
    public offButtonWasPushed(slot: number){
        this.offCommand[slot].excute();
    }
}