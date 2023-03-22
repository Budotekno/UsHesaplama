
function usHesapla(){

    boslukKontrol();
}

function boslukKontrol(){
   
    us=document.getElementById("us");
    sayi=document.getElementById("sayi");

    if( us.value=="" || sayi.value==""){
       
        
        if(us.value==""  || sayi.value==""){
            us.style.backgroundColor="Red";
            sayi.style.backgroundColor="Red";
          

        }
        else if(us.value=="" ){
            us.style.backgroundColor="Red";
           

        }
        else{

            sayi.style.backgroundColor="Red";
           

        }


        if(us.value!=""){
            us.style.backgroundColor="White";

        }
        else if(sayi.value!=""){
            sayi.style.backgroundColor="White";

        }
    
    }
    else{
        us.style.backgroundColor="White";
        sayi.style.backgroundColor="White";
        butonKontrol();
    }

}

function butonKontrol(){
    buton = document.getElementById("buton");
    us=document.getElementById("us");
    sayi=document.getElementById("sayi");
   
    if(buton.value=="Hesapla"){
        buton.value="Temizle";
        hesapla();
    }
    else{
        buton.value="Hesapla";
        us.value="";
        sayi.value="";
        document.getElementById("sonuc").value="";
        document.getElementById("sonucUs2").innerHTML="";
        document.getElementById("sonucSayi2").innerHTML="";
    }
}

function hesapla(){
    us=Number(document.getElementById("us").value);
    sayi=Number(document.getElementById("sayi").value);
    var sonuc=1;
    for(var i=0; i<us;i++){
       
       sonuc = sonuc*sayi;
    }

   // document.getElementById("sonucUs2").innerHTML=us;
    document.getElementById("sonuc").value=sonuc;
    //document.getElementById("sonucSayi2").innerHTML="Sonuç : "+ sayi +"   = "+sonuc;
}