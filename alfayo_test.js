function encriptDemographics(first_name,last_name,dateOb){
dateOb=dateOb.replace(name.charAt(3),'*');
dateOb=dateOb.replace(name.charAt(4),'*');
dateOb=dateOb.replace(name.charAt(6),'*');
dateOb=dateOb.replace(name.charAt(9),'*');
var name=name.replace(name.charAt(0),'*');

first_name=first_name.replace(name.charAt(2),'*');
first_name=first_name.replace(name.charAt(3),'*');



last_name=last_name.replace(name.charAt(2),'*');
last_name=last_name.replace(name.charAt(3),'*');
var person={first_name:null,last_name:null,date_of_birth:null, mobile:null};
person.first_name=first_name;
person.last_name=last_name;
person.dateOb=dateOb;
return person



}

