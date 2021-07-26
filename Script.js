var Hide = document.getElementsByClassName('Hidden');
var ActHov =document.getElementById('BoutonNavAct');
var HebHov =document.getElementById('BoutonNavHeb');



function Plus()
{
   document.getElementById('BoxHebergement').style.height="770px";
   document.getElementById('AfficherPlus').style.display = "none";
   document.getElementById('AfficherMoins').style.display = "block";
   for(var i=0;i<Hide.length;i++)
   {
       Hide[i].style.display='block';
   }
{
    
}
}
function Moins()
{
   document.getElementById('BoxHebergement').style.height="570px";
   document.getElementById('AfficherMoins').style.display = "none";
   document.getElementById('AfficherPlus').style.display = "block";
   for(var i=0;i<Hide.length;i++)
   {
       Hide[i].style.display='none';
   }
}
function PlusL()
{
   document.getElementById('BoxHebergement').style.height="1270px";
   document.getElementById('AfficherPlusL').style.display = "none";
   document.getElementById('AfficherMoinsL').style.display = "block";
   for(var i=0;i<Hide.length;i++)
   {
       Hide[i].style.display='block';
   }
{
    
}
}
function MoinsL()
{
   document.getElementById('BoxHebergement').style.height="770px";
   document.getElementById('AfficherMoinsL').style.display = "none";
   document.getElementById('AfficherPlusL').style.display = "block";
   for(var i=0;i<Hide.length;i++)
   {
       Hide[i].style.display='none';
   }
}
function Act()
{
    document.getElementById('BoutonNavAct').style.color="#0065FC";
    document.getElementById('BoutonNavAct').style.borderTop="4px solid #0065FC";
    /*document.getElementById('BoutonNavAct').style.fontSize="17px";*/
    document.getElementById('BoutonNavHeb').style.color="#000000";
    document.getElementById('BoutonNavHeb').style.borderTop="0px";
    /*document.getElementById('BoutonNavHeb').style.fontSize="16px";*/
}


function Heb()
{
    document.getElementById('BoutonNavHeb').style.color="#0065FC";
    document.getElementById('BoutonNavHeb').style.borderTop="4px solid #0065FC";
    /*document.getElementById('BoutonNavHeb').style.fontSize="17px";*/
    document.getElementById('BoutonNavAct').style.color="#000000";
    document.getElementById('BoutonNavAct').style.borderTop="0px";
    /*document.getElementById('BoutonNavAct').style.fontSize="16px";*/
}

