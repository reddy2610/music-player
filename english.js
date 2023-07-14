var a = document.getElementById("idAudio");
			function playaudio() {
				document.getElementById("d11").style.backgroundColor="darkgrey";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				e.pause();
				b.pause();
				c.pause();
				d.pause();
				f.pause();
				g.pause();
				h.pause();
				a.play();
			}
			function pauseaudio() {
				a.pause();
			}
			
			var b = document.getElementById("idAudio1");
			function playaudio1() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="darkgrey";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				e.pause();
				a.pause();
				c.pause();
				d.pause();
				f.pause();
				g.pause();
				h.pause();
				b.play();
			}
			function pauseaudio1() {
				b.pause();
			}
			
			var c = document.getElementById("idAudio2");
			function playaudio2() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="darkgrey";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				e.pause();
				b.pause();
				a.pause();
				d.pause();
				f.pause();
				g.pause();
				h.pause();
				c.play();
			}
			function pauseaudio2() {
				c.pause();
			}
			
			var d = document.getElementById("idAudio3");
			function playaudio3() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="darkgrey";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				e.pause();
				b.pause();
				c.pause();
				a.pause();
				f.pause();
				g.pause();
				h.pause();
				d.play();
			}
			function pauseaudio3() {
				d.pause();
			}
			
			var e = document.getElementById("idAudio4");
			function playaudio4() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="darkgrey";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				a.pause();
				b.pause();
				c.pause();
				d.pause();
				f.pause();
				g.pause();
				h.pause();
				e.play();
			}
			function pauseaudio4() {
				e.pause();
			}
			var h = document.getElementById("idAudio5");
			function playaudio5() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="darkgrey";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				a.pause();
				b.pause();
				c.pause();
				d.pause();
				f.pause();
				g.pause();
				e.pause();
				h.play();
			}
			function pauseaudio5() {
				h.pause();
			}
			var f = document.getElementById("idAudio6");
			function playaudio6() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="darkgrey";
				document.getElementById("d18").style.backgroundColor="white";
				a.pause();
				b.pause();
				c.pause();
				d.pause();
				e.pause();
				g.pause();
				h.pause();
				f.play();
			}
			function pauseaudio6() {
				f.pause();
			}
			var g = document.getElementById("idAudio7");
			function playaudio7() {
				document.getElementById("d11").style.backgroundColor="white";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="darkgrey";
				a.pause();
				b.pause();
				c.pause();
				d.pause();
				f.pause();
				e.pause();
				h.pause();
				g.play();
			}
			function pauseaudio7() {
				g.pause();
			}
			let c1=1;
            function follow(){
                if(c1==1){
                    document.getElementById("b4").style.backgroundColor="rgb(105, 218, 180)";
                    document.getElementById("b4").innerHTML="Following";
                    c1=c1+1;
                }
                else{
                    document.getElementById("b4").style.backgroundColor="gold";
                    document.getElementById("b4").innerHTML="Follow";
                    c1=1;
                }
			}
			function stopaudio(){
				document.getElementById("l1").style.color="red";
			}
			function playsong(){
				a.currentTime=0;
				document.getElementById("d11").style.backgroundColor="grey";
				document.getElementById("d12").style.backgroundColor="white";
				document.getElementById("d13").style.backgroundColor="white";
				document.getElementById("d14").style.backgroundColor="white";
				document.getElementById("d15").style.backgroundColor="white";
				document.getElementById("d16").style.backgroundColor="white";
				document.getElementById("d17").style.backgroundColor="white";
				document.getElementById("d18").style.backgroundColor="white";
				e.pause();
				b.pause();
				c.pause();
				d.pause();
				f.pause();
				g.pause();
				h.pause();
				a.play();
			}
			function stopaudio2(){
				document.getElementById("l2").style.color="red";
			}
			function stopaudio3(){
				document.getElementById("l3").style.color="red";
			}
			function stopaudio4(){
				document.getElementById("l4").style.color="red";
			}
			function stopaudio5(){
				document.getElementById("l5").style.color="red";
			}
			function stopaudio6(){
				document.getElementById("l6").style.color="red";
			}
			function stopaudio7(){
				document.getElementById("l7").style.color="red";
			}
			function stopaudio8(){
				document.getElementById("l8").style.color="red";
			}


			function sub(){
                if(c1==1){
                    document.getElementById("b1").style.backgroundColor="rgb(105, 218, 180)";
                    document.getElementById("b1").innerHTML="Subscribed";
                    c1=c1+1;
                }
                else{
                    document.getElementById("b1").style.backgroundColor=" azure";
                    document.getElementById("b1").innerHTML="Subscribe";
                    c1=1;
                }
			}

			function music(){
                window.location.href = 'music.html'
            }