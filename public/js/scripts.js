const clickMe = () => {
alert("looking for something?")
}
$(document).ready(function(){
$('.materialboxed').materialbox();
$('#clickMeButton').click(()=>{
clickMe();
})
});