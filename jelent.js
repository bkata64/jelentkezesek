gazda = ['72728674322','72645366666','72794233049','72770055371','72793994280','72790754217'];
gepesztech = ['72795375011','72629093452','72656239779','72755785937','72746248140','72790160875','72794146711','72645362344'];
ru = ['72731324273','72728674322','72731528925','72732309754','72629089914','72656239779','72726338062','72736642136','72777929238','72794826922','72645318471','72696360727','72741416673','72630673070','72793429632','72746248140','72755785937','72645366666','72790160875','72795438532','72689693377','72779220420','72645374407','72611145719','72794578889','72645401184'];
szf=['72731324273','72731263418','72732309754','72757479781','72736642136','72794967617','72645366666','72742764448','72795539876','72794578889'];
konnyu = ['72795472454','72645368301','72728674322'];
divat =['72739497404','72645319880','72793300174','72793503767'];
forgacsolo = ['72755785937','72790160875','72739509087','72645390894','72779220420','72750285365','72764247491','72793994280','72645362344','72679914311','72753990975','72794885351','72684251775','72793200965','72753191182'];
hegeszto = ['72720146594','72793403260','72754990100','72645323408','72762672343','72731455112','72752582986','72749880180','72645390894','72755206687','72779220420','72750285365','72629148102','72764247491','72794084904','72645362344','72794054137','72792279924','72679914311','72753990975','72794885351','72795243845','72629098682','72948396406','72682678038','72684251775','72645317269','72645401184','72793896708','72629094816','72793200965','72753191182','72703391603','72736617957'];

kereskedo= ['72629100637','72730596321','72629148102','72794032588','72645319880','72692851066','72795411127','72794113621','72793300174','72793503767','72756029406','72793695648','72793487251'];
szocgond = ['72645319880','72629148102','72645343062'];

function keres()
{ 
  kiir.innerHTML='';
  if(om.value.length != 11) kiir.innerHTML+= "Az OM azonosító hossza 11 karakter!"
else
	{
	  for(i=0;i<=gepesztech.length;i++)
	   { if(om.value==gepesztech[i]) kiir.innerHTML+='- Gépészet ágazat Tagozatkód: 0302, Gépésztechnikus Rangsorban '+(i+1)+'.helyen<br>'; }
	  for(i=0;i<=ru.length;i++)
	   { if(om.value==ru[i]) kiir.innerHTML+='- Informatika és távközlés ágazat  Tagozatkód: 0301, Informatikai rendszer és alk. üzemeltető  Rangsorban '+(i+1)+'.helyen<br>'; } 
          for(i=0;i<=szf.length;i++)
	   { if(om.value==szf[i]) kiir.innerHTML+='- Informatika és távközlés ágazat  Tagozatkód: 0301, Szoftverfejlesztő és tesztelő  Rangsorban '+(i+1)+'.helyen<br>'; } 
	  for(i=0;i<=gazda.length;i++)
	   { if(om.value==gazda[i]) kiir.innerHTML+='- Gazdálkodás és menedzsment ágazat  Tagozatkód: 0303, Pénzügyi-számviteli ügyintéző Rangsorban '+(i+1)+'.helyen<br>'; }
	  for(i=0;i<=konnyu.length;i++)
	   { if(om.value==konnyu[i]) kiir.innerHTML+='- Kreatív ágazat Tagozatkód: 0304, Könnyűipari technikus Rangsorban '+(i+1)+'.helyen<br>'; }
          for(i=0;i<=divat.length;i++)
	   { if(om.value==divat[i]) kiir.innerHTML+='- Kreatív ágazat Tagozatkód: 0314, Divatszabó Rangsorban '+(i+1)+'.helyen<br>'; }
	  for(i=0;i<=forgacsolo.length;i++)
	   { if(om.value==forgacsolo[i]) kiir.innerHTML+='- Gépészet ágazat Tagozatkód: 0311, Gépi és CNC forgácsoló Rangsorban '+(i+1)+'.helyen<br>'; }
	  for(i=0;i<=hegeszto.length;i++)
	   { if(om.value==hegeszto[i]) kiir.innerHTML+='- Gépészet ágazat Tagozatkód: 0312, Hegesztő Rangsorban '+(i+1)+'.helyen<br>'; }
	  
	  for(i=0;i<=kereskedo.length;i++)
	   { if(om.value==kereskedo[i]) kiir.innerHTML+='- Kereskedelem ágazat Tagozatkód: 0315, Kereskedelmi értékesítő Rangsorban '+(i+1)+'.helyen<br>'; }
	  for(i=0;i<=szocgond.length;i++) { if(om.value==szocgond[i]) kiir.innerHTML+='- Szociális ágazat Tagozatkód: 0316, Szociális ápoló és gondozó Rangsorban '+(i+1)+'.helyen<br>'; } 
	  if(kiir.innerHTML=='') kiir.innerHTML+=' Nincs ilyen oktatási azonosító a nyilvántartásunkban! '; } } 


