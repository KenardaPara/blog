function initForm(urlParams){

    console.log("initing form", urlParams);
    var desiredStartDate = new Date(2003, 1,1); 
    if(urlParams.has("start")){
        desiredStartDate = new Date(urlParams.get("start"));
        console.log("amk",$('input[name="start"]'));
        $('input[name="start"]').val(urlParams.get("start"));
        urlParams.delete('start');
    } else {
        desiredStartDate = new Date(2003, 1,1);
    }

    var TLMiktar = 100;
    if(urlParams.has("miktar")){
        TLMiktar = parseFloat(urlParams.get("miktar"));
        urlParams.delete('miktar');
        $("#miktar").attr('value', TLMiktar);
    }

    var DevletKatkisiFonu ;
    if(urlParams.has("devlet")){
        DevletKatkisiFonu = urlParams.get("devlet");
        urlParams.delete('devlet');
        $("#devlet").attr('value', DevletKatkisiFonu);
    }

    if(urlParams.has("inflationAdj")){
        var inflationAdj = urlParams.get("inflationAdj") == 'on';
        urlParams.delete('inflationAdj');
        $("#inflationAdj").prop('checked', inflationAdj);
    }

    
    var c=0;
    for(var kv of urlParams.entries()){
        addFon(kv[0], kv[1], c==0);
        c += 1;
    }

    if (c==0){
        addFon('','', true);
    }
    
    $("#devlet-fon").insertAfter(fonlar);

}

function tarihAciklama(graphData){
    graphData.dateAligment.then( function(x)  {
        if (x.reason != '') {
            console.log("algiment reason", x.reason);
            $("#tarih-aciklama").removeClass("invisible").addClass("visible");
            $("#fon-neden").text(x.reason);
            $("#fon-tarih").text(x.date.toLocaleDateString("tr-TR"));
    }});
}

function duzelt(){
    $(".fon").each(function(i, elem){
        //console.log(elem);
        var kod = $(elem).find(".fonadi").first().val();
        var agirlik = $(elem).find(".fonoran").first().val();
        $(elem).find(".fonkodu").first().attr("name", kod);
        $(elem).find(".fonkodu").first().attr("value", agirlik);
    });
}


const bankalar = new Set(fonlar.map( x=> x.bank));

function initBankalar(params){
    

}


function addFon(kod, agirlik, ilk = false){
    const labelClass = ilk ? "col-form-label" : "sr-only";
    const aciklamaKodHtml = `<small  class="form-text text-muted"> BES Fonu. Yazmaya baslayin ve listeden fonunuzu secin. Fon kodusunuz gozukecektir </small>`;
    const aciklamaOranHtml = `<small  class="form-text text-muted"> Bu fon porftyounuzude ne kadar oradan olsun. Degerler normalize edilecektir </small>`;
    const aciklamaKod =  "";
    const aciklamaOran =  "";
    const gozuksun = ilk ? "hidden" : "visible"
    const delButton = `
            <button type="button" onclick='$(this).closest(".form-row").remove();' class="btn btn-outline-primary" >Sil</button>
    `;

    const delHtml = ilk ? "" : delButton
    
    $("#fons").append(`
        <div class="form-row fon">

        <div class="form-group col-9">
        <label for="fon" class="${labelClass}">BES Fonu</label>
        ${aciklamaKod}
          <input type="list" class="fonadi form-control" list="fonlarimiz" value="${kod}" required>
           ${fonlar}
          <input type="hidden" class="fonkodu">
        </div>

       <div class="form-group col-2">

         <label for="fonoran" class="${labelClass}">For Orani</label>
         ${aciklamaOran}
         <div class="input-group">
          <div class="input-group-prepend">
             <div class="input-group-text">%</div>
          </div>

          <input type="number" class="fonoran form-control" value="${agirlik}" min=1 max=100 required>
         </div>
        </div>

        <div class="form-group col-1" visibility=${gozuksun}>

        ${delHtml}
       </div>


    </div>

    `);
    
}



