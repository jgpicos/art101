const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=3",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fdee12741cmshed37aee1ff6785ep1d4ebbjsn96b738557cba",
		"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com"
	}
};

function getajaxdata(){
$.ajax({
  url:"https://hargrimm-wikihow-v1.p.rapidapi.com/image",
  type: "GET",
  datatype: "text",
  success: successFun,
  error: errorFun,
  complete: function(xhr, status){
    console.log(status);
  }
})
}
function successFun(result){
  console.log(result);
  //$('#ajax_text').html(result)
}

function errorFun(xhr, status, strErr,result){
  console.log("error: "+strErr);
}
$("#ajax_get").click(getajaxdata)
