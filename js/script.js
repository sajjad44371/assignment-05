// heart count =====================================================================================================
const allButtonHeart = document.getElementsByClassName("btn-heart");
for(const buttonHeart of allButtonHeart) {
    buttonHeart.addEventListener("click", function() {
        let count = 0;
        count++;

        const heartCountSection = parseInt(document.getElementById("heart-count").innerText);
        let finalCount = heartCountSection + count;
        document.getElementById("heart-count").innerText = finalCount;
    })
}

// call button event ===============================================================================================
function callButton(button) {
    const btnCall = document.getElementById(button);
    return btnCall;
}

function coinDeduction() {
    const availableCoin = document.getElementById("coin").innerText;
    const coinInInteger = parseInt(availableCoin);
    const deduction = 20;
     if(coinInInteger < deduction) {
        alert("⚠️ Not Enough Coins. Minimum 20 Coins is Required to Make a Call.");
        return false;
    } else {
        const finalCoin = coinInInteger - deduction;
        document.getElementById("coin").innerText = finalCoin;
        return true;
    }
    
}

// history
function collectTitle(id) {
    const title = document.getElementById(id).innerText;
    return title;
}
function collectNum(id) {
    const num = document.getElementById(id).innerText;
    return num;
}

function addHistory(a, b) {
    const historyData = [];
    const data = {
        name: collectTitle(a),
        num: collectNum(b),
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    
    const historySection = document.getElementById("history-section");

    for(const newData of historyData) {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div class="single-history bg-[#fafafa] rounded-xl">
                            <div class="history-content flex justify-between items-center p-4">
                                <div>
                                    <h3 class="inter font-semibold text-lg">${newData.name}</h3>
                                    <p class="hind-madurai text-lg text-[#5c5c5c]">${newData.num}</p>
                                </div>
                                <div>
                                    <p class="hind-madurai text-lg text-[#5c5c5c]">${newData.date}</p>
                                </div>
                            </div>
                        </div>
        `
        historySection.appendChild(div);
    }
}

callButton("btn-call-1").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling National Emergency Service 999 ...");
        addHistory("national-title", "national-num");
    }  

})

callButton("btn-call-2").addEventListener("click", function () {
     if(coinDeduction()){
        alert("📞 Calling Police 999 ...");
        addHistory("police-title", "police-num");
    }

})

callButton("btn-call-3").addEventListener("click", function () {
     if(coinDeduction()){
        alert("📞 Calling Fire Service 999 ...");
        addHistory("fire-title", "fire-num");
    }
    
})

callButton("btn-call-4").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Ambulance Service 1994-999999 ...");
        addHistory("ambulance-title", "ambulance-num");
    }
    
})

callButton("btn-call-5").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Women & Child Helpline 109 ...");
        addHistory("w&c-title", "w&c-num");
    }
    
})

callButton("btn-call-6").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Anti-Corruption Helpline 106 ...");
        addHistory("anti-title", "anti-num");
    }
    
})

callButton("btn-call-7").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Electricity Helpline 16216 ...");
        addHistory("elc-title", "elc-num");
    }
    
})

callButton("btn-call-8").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Brac Helpline 16445 ...");
        addHistory("brac-title", "brac-num");
    }
    
})

callButton("btn-call-9").addEventListener("click", function () {
    if(coinDeduction()){
        alert("📞 Calling Bangladesh Railway Helpline 163 ...");
        addHistory("rail-title", "rail-num");
    }
    
})