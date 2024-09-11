var addRow1=0;
var sumAmount=0;
const totalArr=[];
let print=document.getElementById('clickevt');
print.addEventListener("click",printFunc);
let div=document.getElementById('addRow');
let rowAdd=document.getElementById('rowAdd');
let addTotal=document.querySelector("#addTotal");
document.getElementById('rowAdd').addEventListener("click",addRow);
let input1=`
<textArea rows="3"></textArea>`;

function printFunc()
{   hideRow()
    window.print();  
}

function hideRow()
{
    rowAdd.style.visibility="hidden";
}

function addRow()
{   addRow1+=1;
    console.log(addRow1)
    el=document.createElement("tr");
    el.setAttribute("id",`rowId${addRow1}`);
    console.log(el.getAttribute("id"));
    for(let i=1;i<=8;i++)
        {
            el1=document.createElement("td");
            el1.setAttribute("id",`dataId${i}`);
            console.log(el1.getAttribute("id"));
            if (i==1)
            {
                el1.innerText=addRow1;
            }
            if (i==2)
            {
                el1.innerHTML=input1;
            }
            if(i==3)
            {
                input2=document.createElement("input");
                input2.style.height="50px";
                el1.append(input2);
            }       
            if(i==4)
            {
                input3=document.createElement("input");
                input3.setAttribute("id",`qty${addRow1}`);
                console.log(input3.getAttribute("id"));
                input3.setAttribute("value",""); 
                input3.style.height="50px"; 
                el1.append(input3);
            }
            if(i==5)
            {
                input4=document.createElement("input");
                input4.setAttribute("id",`amt${addRow1}`);
                input4.setAttribute("value",0);
                input4.style.height="50px";
                el1.append(input4);
               
            }
            if(i==6)
            {
                para1=document.createElement("p");
                para1.setAttribute("id",`para1${addRow1}`);
                el1.append(para1);
            }
            if(i==7)
            {
                input5=document.createElement("input");
                input5.setAttribute("id",`igst${addRow1}`);
                input5.setAttribute("value","");
                input5.style.height="50px";
                el1.append(input5);
            }
            if(i==8)
            {
                para2=document.createElement("input");
                para2.setAttribute("id",`total${addRow1}`);
                para2.disabled=true;
                para2.style.fontSize="20px";
                para2.style.color="black";
                el1.append(para2);
            }
            el.append(el1)
        }
    div.append(el);
    // a=`qyt${addRow1}`;
    // b=`amt${addRow1}`;
    // onchangeFunc();
    // calcGrandTotal();    
} 

// function onchangeFunc()
// {
//     // console.log("weloome")
// document.getElementById("dataId5").addEventListener("change",()=>
// {
//     let qyt=document.getElementById(`qty${addRow1}`);
//     let amt=document.getElementById(`amt${addRow1}`);
//     // console.log(`qty${addRow1}`);
//     let taxAmt=qyt.value*amt.value;
//     document.getElementById("dataId6").innerText=taxAmt;
    
//     document.getElementById("dataId7").addEventListener("change",()=>
//     {
//         let igst=document.getElementById(`igst${addRow1}`);
//         let total=parseInt(taxAmt)+parseInt(igst.value);
//         document.getElementById("dataId8").innerText=total;
//     })
// })
// }

// function onchangeFunc()
// {
    console.log("Welcome");
    document.querySelector("#addRow").addEventListener("change",()=>
    {
        let taxAmt=input3.value*input4.value;
        para1.innerText=taxAmt;
        // document.querySelector("#addRow").addEventListener("change",()=>
        // {
        //     let tax1=para1.innerText;
        //     let total=parseFloat(tax1)+parseFloat(input5.value)
        //     if (input5.value!="")
        //     {
        //         para2.disabled=false;
        //         para2.value=total;
        //     let arrayCheck = totalArr.some((item)=>{
        //         item.id==addRow1;
        //     })
        //     if (arrayCheck==false)
        //     {
        //         totalArr.push({id:addRow1,total:total});
        //     }
        //         para2.disabled=true;
        //         console.log(totalArr);
        //     }
        // })
        // document.querySelector(`#para2${addRow1}`).addEventListener("change",()=>
        //     {
        //         let totamt=para2.innerText;
        //         sumAmount+=parseFloat(totamt);
        //         console.log(sumAmount);
        //         // document.querySelector(".hide").classList.add("visi");
        //         // document.querySelector(".grandtotal").innerText=sumAmount;
        //     })
});

document.querySelector("#addRow").addEventListener("change",()=>
    {
        let tax1=para1.innerText;
        let total=parseFloat(tax1)+parseFloat(input5.value)
        if (input5.value!="")
        {
            para2.disabled=false;
            para2.value=total;
            para2.disabled=true;
        // let arrayCheck = totalArr.some((item)=>{
        //     item.id==addRow1;
        // })
        // if (arrayCheck==false)
        // {
        //     totalArr.push({id:addRow1,total:total});
        // }
        //     para2.disabled=true;
        //     console.log(totalArr);
        sumAmount+=total;
        console.log(sumAmount);
        document.querySelector(".hide").classList.add("visi");
        document.querySelector(".grandtotal").innerText=sumAmount;
        }
    })

// }
let taxBf=document.querySelector("#amtBf");
let cgst=document.querySelector("#cgst");
let sgst=document.querySelector("#sgst");
let totTax=document.querySelector("#totTax");

document.querySelector("#totTax").addEventListener("change",()=>
{
    // let totAmount=parseFloat(taxBf)+parseFloat(cgst)+parseFloat(sgst)+parseFloat(totTax);
    console.log(taxBf.value);
    console.log(cgst.value);
    console.log(sgst.value);
    console.log(totTax.value);
    let totTallyAmount=parseFloat(taxBf.value)+parseFloat(cgst.value)+parseFloat(sgst.value)+parseFloat(totTax.value);
    console.log(totTallyAmount);
    document.querySelector(".tallyAmount").innerText=totTallyAmount;
})

let m=document.querySelector("#totTax");



