<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  $(document).ready(function(){
  	getArtist();
    //setChromeLinks();
  });
  
  function getArtist(){
  	$("#playerInfo").load("https://dme.ceedee71.de/short.php");
  }
  
  setInterval(function(){
	getArtist();
	}, 5000);
  
  function setChromeLinks(){
	var cSafe = navigator.userAgent;
    if(cSafe.indexOf("Chrome"))
    {
      $('#audioPlayer').hide();
      $('#ownLink').attr("onclick","window.open('http://ceedee71.myqnapcloud.com/_dme','Live Radio','width=400,height=120,resizable=no')");
    }
  }
</script>
<h2>Was läuft</h2>
<div id="playerInfo"></div>
<audio controls id="audioPlayer" style="width:100%"><source src="https://server4.streamserver24.com:8080/proxy/darkmelo?mp=%2Fstream" type="audio/mpeg" /></audio>