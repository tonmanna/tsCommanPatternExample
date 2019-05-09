let remote = new RemoteControl();
let kitchenLight  = new Light("Kitchen");
let livingRoomLight  = new Light("Livingroom");

let livingRoomLightOn = new LightOnCommand(livingRoomLight);
let livingRoomLightOff = new LightOffCommand(livingRoomLight);

let kitchenLightOn = new LightOnCommand(kitchenLight);
let kitchenLightOff = new LightOffCommand(kitchenLight);

remote.setCommand(0,livingRoomLightOn,livingRoomLightOff);
remote.setCommand(1,kitchenLightOn,kitchenLightOff);

remote.onButtonWasPushed(0);
remote.offButtonWasPushed(0);

remote.onButtonWasPushed(1);
remote.offButtonWasPushed(1);
