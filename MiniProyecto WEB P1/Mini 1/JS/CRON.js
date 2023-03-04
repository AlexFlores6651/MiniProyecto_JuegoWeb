var horas = 0;
		var minutos = 0;
		var segundos = 0;

		function iniciarCronometro() {
			setInterval(function() {
				segundos++;
				if (segundos == 60) {
					segundos = 0;
					minutos++;
					if (minutos == 60) {
						minutos = 0;
						horas++;
					}
				}
				var tiempo = (horas < 10 ? "0" + horas : horas) + ":" + 
							(minutos < 10 ? "0" + minutos : minutos) + ":" + 
							(segundos < 10 ? "0" + segundos : segundos);
				document.getElementById("cronometro").innerHTML = tiempo;
			}, 1000);
		}