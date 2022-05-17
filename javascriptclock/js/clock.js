let username = prompt("Lütfen isminizi girin..")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username}`

function showTime() {
    let myclock = document.querySelector('#myClock');
    let dte = new Date();
    let saat = dte.getHours();
    let dakika = dte.getMinutes();
    let saniye = dte.getSeconds();
    let gun = dte.getDay();

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
    myclock.innerHTML = `${saat}:${dakika}+${saniye} ${gun}`

}
showTime();