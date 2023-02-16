/*const vino_polyfill = {
    ir_enableCodeset: (arg) => {
        if (arg == 1) window.vinoPolyfillIrEnabled = true;
        else if (arg == 0) window.vinoPolyfillIrEnabled = false;
    },
    ir_send: (code, what) => {
        console.log("sent ir code",code)
    },
    act_getName: (slot) => {
        return "jan Luna"
    },
    act_getMiiImage: (slot) => {
        return "https://images-ext-2.discordapp.net/external/VtboU7WYAw1bRcrVuxbszi24pzSQ1i5Dmirry2x_JCo/http/mii-images.account.nintendo.net/2tq2mk2xki89y_normal_face.png"
    },
    act_getCurrentSlotNo: () => { return 0 },
    memo_open: () => {
        console.log("opened olive memo")
    }
}

if (!globalThis.vino) {
    globalThis.vino = vino_polyfill
}*/

var buttonmap = {
    "power": 0,
    "chanup": 1,
    "chandown": 2,
    "volup": 3,
    "voldown": 4,
    "1": 11,
    "2": 12,
    "3": 13,
    "4": 14,
    "5": 15,
    "6": 16,
    "7": 17,
    "8": 18,
    "9": 19,
    "0": 20,
    "input": 52
}

buttons = document.querySelectorAll(".remotebtn")

for(var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(event){
        vino.ir_send(buttonmap[event.target.id],69)
    })
}

vino.ir_enableCodeset(1);
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
img = document.getElementById("mii-image");
span = document.getElementById("mii-name");
img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);
