var idade = $(".idade");
var aviso = $(".aviso");

idade.on("input", function(){
  if (idade.val() >= 18){
    aviso.text("Você é maior de idade")
  }else {
    aviso.text("Você é menor de idade")
  }
});
