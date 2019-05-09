var Light = (function () {
    function Light(name) {
        this.name = name;
    }
    Light.prototype.on = function () {
        console.log("Light On:" + this.name);
    };
    Light.prototype.off = function () {
        console.log("Light Off:" + this.name);
    };
    return Light;
}());
var LightOffCommand = (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.excute = function () {
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    return LightOffCommand;
}());
var LightOnCommand = (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.excute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
var NoCommand = (function () {
    function NoCommand() {
    }
    NoCommand.prototype.excute = function () {
    };
    NoCommand.prototype.undo = function () {
    };
    return NoCommand;
}());
var RemoteControl = (function () {
    function RemoteControl() {
        this.onCommand = [];
        this.offCommand = [];
        for (var i = 0; i < 7; i++) {
            this.onCommand[i] = new NoCommand();
        }
    }
    RemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
        this.onCommand[slot] = onCommand;
        this.offCommand[slot] = offCommand;
    };
    RemoteControl.prototype.onButtonWasPushed = function (slot) {
        this.onCommand[slot].excute();
    };
    RemoteControl.prototype.offButtonWasPushed = function (slot) {
        this.offCommand[slot].excute();
    };
    return RemoteControl;
}());
var remote = new RemoteControl();
var kitchenLight = new Light("Kitchen");
var livingRoomLight = new Light("Livingroom");
var livingRoomLightOn = new LightOnCommand(livingRoomLight);
var livingRoomLightOff = new LightOffCommand(livingRoomLight);
var kitchenLightOn = new LightOnCommand(kitchenLight);
var kitchenLightOff = new LightOffCommand(kitchenLight);
remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remote.setCommand(1, kitchenLightOn, kitchenLightOff);
remote.onButtonWasPushed(0);
remote.offButtonWasPushed(0);
remote.onButtonWasPushed(1);
remote.offButtonWasPushed(1);
