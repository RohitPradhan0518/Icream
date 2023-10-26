
let baseprice = 0;
let taxAmount = 0;
let totalDue = 0;
const TAX_RATE = 1.0828;


function submitOrder(
    scoopCount,
     containerType, 
     hasSprinkless, 
     hasFudge, 
     hasWip, 
     hasCherry
     ){
        baseprice = 0;
        taxAmount = 0;
        totalDue = 0;

    baseprice += 2.25
    baseprice += 1.25 * (scoopCount -1)
    if(containerType === "cup"){
        if(hasSprinkless){
            baseprice += 0.5
        }
        if(hasFudge){
        baseprice += 1.25
    }
     if(hasWip){
        baseprice += 0.5
    }
     if(hasCherry){
        baseprice += 0.5
    }
}
 taxAmount = TAX_RATE * baseprice;
 totalDue = baseprice + taxAmount;

}

submitOrder(4, "cup", true, true, true, true)
console.log(baseprice, taxAmount, totalDue);
submitOrder(1, "cone", true, true, true, true)
console.log(baseprice, taxAmount, totalDue);

