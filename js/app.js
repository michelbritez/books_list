let plantilla = $(".contenedor").html();


$(".contenedor").html("");

$.get("https://3a8i3.github.io/libros/", function( datos ){
	
	mostrarDatos( datos );
});

function mostrarDatos( d ){

	
	for (let i = 0; i < d.length; i++){
		let plantJQ = $(plantilla);

		plantJQ.find(".portada").attr("src", d[i].portada);
		plantJQ.find(".foto").attr("src", d[i].autor.foto);

		plantJQ.find(".titulo").text(d[i].titulo);
		plantJQ.find(".anho").text(d[i].anho);
		plantJQ.find(".editorial").text(d[i].editorial);
		plantJQ.find(".temas").text(d[i].temas);
		plantJQ.find(".anho").text(d[i].anho);
		plantJQ.find(".resumen").text(d[i].resumen);


		plantJQ.find(".nombre-autor").text(d[i].autor.nombre);
		plantJQ.find(".fecha-autor").text(d[i].autor.nacimiento.fecha);
		plantJQ.find(".ciudad-autor").text(d[i].autor.nacimiento.ciudad);
		plantJQ.find(".pais-autor").text(d[i].autor.nacimiento.pais);
		plantJQ.find(".bio-autor").text(d[i].autor.biografia);


		$(".contenedor").append(plantJQ);
		
	}
}
