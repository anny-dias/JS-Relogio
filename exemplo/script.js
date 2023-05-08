// retorna a data
msg = document.getElementById('msgData')
let data = new Date()
//document.write(data)
//document.write("<br><br>");

msg.innerHTML += `<p>${data}</p>`

//tempo
function BemVindo(){
    alert("Olá Dev, tudo bem?")
}
setTimeout(BemVindo, 1000)




/*
// retorna a data padrao americana
let data1 = new Date()
document.write(data1.toDateString());
document.write("<br><br>");

// retorna a data padrao do navegador 
let data2 = new Date()
document.write(data2.toLocaleDateString());
document.write("<br><br>");

// retorna com data do array
let data3 = new Date()
let diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>");

// horas
let hour = new Date()
document.write(hour.getHours());
document.write("<br><br>");
hour.setHours(hour.getHours()+1);
document.write(hour.getHours());
document.write("<br><br>");

// retorna minutos
let minutes = new Date()
document.write(minutes.getMinutes());
document.write("<br><br>");

// retorna segundos 
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>");
*/