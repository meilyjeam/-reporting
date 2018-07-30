jQuery(document).ready(function($) {
	$ (id) .eventCalendar ({
  eventsjson: 'archivo.json',
  configuraciones regionales: {
    locale: "es",
	monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
		"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles',
		'Jueves', 'Viernes', 'Sábado'],
	dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
	txt_noEvents: "No hay eventos para este periodo",
	txt_SpecificEvents_prev: "",
	txt_SpecificEvents_after: "eventos:",
	txt_next: "siguiente",
	txt_prev: "anterior",
	txt_NextEvents: "Próximos eventos:",
	txt_GoToEventUrl: "Ir al evento",
	momento: {
        "meses": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        "monthsShort": ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
                "Julio", "Ago", "Sep", "Oct", "Nov", "Dic"],
        "días de la semana": ["Domingo", "Lunes", "Martes", "Miércoles",
                "Jueves", "Viernes", "Sabado"],
        "weekdaysShort": ["Dom", "Lun", "Mar", "Mie",
                "Jue", "Vie", "Sab"],
        "weekdaysMin": ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        "longDateFormat": {
            "LT": "H: mm",
            "LTS": "LT: ss",
            "L": "DD / MM / YYYY",
            "LL": "D [de] MMMM [de] YYYY",
            "LLL": "D [de] MMMM [de] YYYY LT",
            "LLLL": "dddd, D [de] MMMM [de] YYYY LT"
        },
        "semana" : {
            "dow": 1,
            "doy": 4
        }
    }
  }
});
$ (id) .eventCalendar ({
  eventsjson: 'archivo.json',
  locales: 'json / locale.es.php'
}); 
 $ (id) .eventCalendar ({
  eventsjson: 'archivo.json',
  jsonDateFormat: 'humano'
});
$ (id) .eventCalendar ({
  eventsjson: 'archivo.json',
  dateFormat: 'dddd MM-D-YYYY'
});
})
