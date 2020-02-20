var translations = {
   en: {
      options : 'Options',
      windlines : 'Wind Flow',
      aerology : 'Aerology',
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
      press: 'Isobars'
   },
   es: {
      options : 'Opciones',
      windlines : 'Líneas de Viento',
      aerology : 'Aerología',
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
      press: 'Isobaras'
   }
};


function translate(lang) {
   // define language reload anchors
   var dataReload = document.querySelectorAll("[translate]");
   for (i = 0; i < dataReload.length; i++) {
      var element = dataReload[i];
      element.textContent = translations[lang][element.id];
   }
}
