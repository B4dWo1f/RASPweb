var translations = {
   en: {
      options : 'Options',
      windlines : 'Wind Flow',
      aerology : 'Aerology',
      ccaa: 'Provinces',
      rivers: 'Rivers and lakes',
      roads: 'Roads',
      takeoffs: 'Takeoffs',
      sfcwind : 'SFCwind',
      blwind : 'BLwind',
      bltopwind : 'BLTOPwind',
      hgldier: 'Max. Therm. Height',
      zsfclcl: 'Cu Cloudbase @CuPot>0',
      cape: 'CAPE',
      wstar: 'Thermal Updraft Velocity',
      wblmaxmin: 'BL Max.Up/Down Motion',
      zblcl: 'OD Cloudbase @ODpot>0',
      rain: '%Clouds & rain',
      press: 'Isobars',
      days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
   },
   es: {
      options : 'Opciones',
      windlines : 'Líneas de Viento',
      aerology : 'Aerología',
      ccaa: 'Provincias',
      rivers: 'Ríos y lagos',
      roads: 'Carreteras',
      takeoffs: 'Despegues',
      sfcwind : 'Superficie',
      blwind : 'Promedio',
      bltopwind : 'Techo',
      hgldier: 'Techo (Azul)',
      zsfclcl: 'Base cúmulos',
      cape: 'CAPE',
      wstar: 'Térmica',
      wblmaxmin: 'Convergencia',
      zblcl: 'Base cobertura (8/8)',
      rain: 'Nubes y lluvia',
      press: 'Isobaras',
      days: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
   }
};


function translate(lang) {
   // define language reload anchors
   language = lang
   SetLanguageCookie(language)
   var dataReload = document.querySelectorAll("[translate]");
   for (i = 0; i < dataReload.length; i++) {
      var element = dataReload[i];
      element.textContent = translations[language][element.id];
   }
}

function SetLanguageCookie(lang) {
   var expiration_date = new Date();
   var cookie_string = '';
   expiration_date.setFullYear(expiration_date.getFullYear()+1);
   cookie_string = "lang="+lang+'; path=/; '
   cookie_string = cookie_string +'expires='+expiration_date.toUTCString();
   document.cookie = cookie_string;
}
