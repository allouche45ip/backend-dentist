
 
// }/***********/ CRUDS/*******  */

//create client
// save localstorge
//clear inpute
//read
///*count */
// deleat
//updete
// serache
//clean data

//  let Id =document.getElementById('Id'); 
//  let nom =document.getElementById('nom');
//  let  prenom =document.getElementById('prenom');
//  let Age =document.getElementById('age');
//  let Email=document.getElementById('Email');
//  let message= document.getElementById('message');
//  let telphone =document.getElementById('numerote');
//  let create = document.getElementById('create');
//             // console.log(nom,prenom,Age,Email ,telphone,message,create)
//  let mod='create'; 

//  let temp ;  // varaible globale 

//  // create 
 
//    let tabs ; /* tableau pour resarvie    */
//    if(localStorage.homme != null){      /* Ce code vérifie la présence des données dans le stockage local sous la clé "homme"
//                                         . S'il y en a, il l’extrait et le stocke dans une variable (Tabs) sous forme de tableau
//                                        . Si la clé "homme" n'existe pas, il initialise simplement Tabs à un tableau vide. */
//      tabs =JSON.parse(localStorage.homme);  /* donne les valeur dans tableau */
//    }else{                                  // Récupération des données du localStorage
//     tabs=[];
//    }

//    create.onclick=function(){

     
//      let myclient ={  /*object */
    
//        nom:nom.value,
//        prenom:prenom.value,
//        Age:Age.value,
//        Email:Email.value,
//        telphone:telphone.value,
//        message : message.value,
    
//     }
    
   
//          // console.log(myclient);
   
      
//     if( mod =='create') {        // Ajout du nouveau client au tableau
//                              // crre si le mode create
//       tabs.push(myclient); // cette valeuer Enregistrer dans tableu  myclient a la fin 
      
//     }else{
    
//       tabs[temp]=myclient;     // Mise à jour du client existant
//                               // temp=i  indice pour modifie le client 
                               
//        mod='create';
//        create.innerHTML='create';
//        message.style.display='block';

//     }
         
           

 
//                       /* resarvie une localstorage */ 
//    localStorage.setItem('homme',JSON.stringify(tabs)); // Sauvegarde dans localStorage

    

//     // document.getElementById("deleteAll").style.display="";
  
//     affichecliente();
//     cleardata();
    
        
   
//   }
//    /* pour Eiface les information dans les formule apre Enregistrer */
//    function cleardata(){
//     nom.value='';         /* Cette fonction permet  d’effacer l’information dans les formule après une click sur le bouton et le stocker  */
//     prenom.value='';
//     Age.value='';
//     Email.value='';
//     telphone.value='';
//     message.value='';
//    }
//    affichecliente();
//  /* affiche les clients (contenu) de locale storge dans tableau */
//  function affichecliente(){
//   let tableau2='';
//   for( let i=0; i<tabs.length; i++){
//      tableau2 +=
//      `<tr>
//      <td>  ${i} </td>
//      <td> ${tabs[i].nom} </td>
//      <td> ${tabs[i].prenom} </td>
//      <td> ${tabs[i].Age} </td>
//      <td> ${tabs[i].Email}</td>
//      <td> ${tabs[i].telphone} </td>
//      <td> ${tabs[i].message} </td>
//      <td>   <button onclick ="updated(${i})" id="ac">update </button> </td>  
//      <td>   <button onclick ="suprime(${i})" id="sa">delete</button> </td>
//  </tr>
    
// `} /* donne id pour update et supprim */  

//  document.getElementById('tbod').innerHTML=tableau2;

//  let dele = document.getElementById('deleteAll');

//  if(tabs.length > 0 ){   //i le tableau n'est pas vide, un bouton pour supprimer tous les clients est affiché
//   dele.innerHTML=`  
// <button onclick ="deletAllb()"> delete All (${tabs.length}) </button>
// `
//  }else{
//   dele.innerHTML='';
//  }
//  }
                              
//  affichecliente();
 
//   // delete suprime clients 
//    function suprime(i){  /*  Dans cette fonction  on suprime avec un seul élément  */
//                         // Suppression du client à l'indice i
//     tabs.splice(i,1);    /* supprime dans arrye */ 

//     localStorage.homme=JSON.stringify(tabs) ; // Mise à jour du localStorage
  
//     affichecliente();/* pour affiche le decalage dans tableau apre la suprime  */
//   }

//   /*deleate all */      /*Cette fonction permet de supprimer tous le client .  donc supprime tous la contenu  de local Storage  « localStorage.clear (); » */
//   function deletAllb(){
//     localStorage.clear();
//     document.getElementById('tbod').innerHTML="";
//     tabs.splice(0);
//     document.getElementById("deleteAll").style.display="none";
//     affichecliente();
//   }



//     function updated(i){   /*  if faute  récupérer les valeuer dans formulaire  */ 

//       nom.value =tabs[i].nom; 
//       prenom.value=tabs[i].prenom;
//       Age.value=tabs[i].Age;
//       Email.value=tabs[i].Email;
//       telphone.value=tabs[i].telphone;
//       message.valeu=tabs[i].message;
//       // message.style.display='none';
//       create.innerHTML='update';

//         mod='update';    /*Cette fonction remplit le formulaire avec les données du client à l'indice i pour modification.
//                           Elle change le bouton "create" en "update" et fait défiler la page vers le formulaire. */

//         temp = i;     // le index (i) dans varible globale  pour update le Contienu
//                    //  dans fonctin create
           
//        //scroll(), qui permet de faire défiler la page jusqu'à une certaine position
       
//             scroll({     //  lever formuleur
//               top:3900,
//               behavior:'smooth',

//             })

//     }
      

//      // fonction searche
//    let scmod='nom';  // par defaut  la recharche avec nom

//  function smod (id){  // cette function pour récupérer id de deux  butom
//                       // pour utilise un butom dans recherche
//    let recherche=document.getElementById('gg');   
                      
//                       // si scomd==nom  on utilise butom seche by nom
//      if(id=='search'){
//     scmod='nom';
//      gg.placeholder='nom'
//      }else{
//       scmod='telephone';
//       gg.placeholder='telephone';
//      }
//     // console.log(scmod);
//     gg.focus();        // si on click sur un les 2 butom 
//                        // on focus  lever inpute serche 
//    }
       

//    function rechercheclient( valeu){ // la valeur de Écriture
//        let tableau2='';
//       if( scmod =='nom'){

//          for(let i=0; i<tabs.length;i++){   // pour recherche dans tous tableau

//             if( tabs[i].nom .includes(valeu) ){ // recherche la valeur ecrite  dans tableu 

//                    // pour affiche seulement les lingne visite
//               tableau2 +=
//               `<tr>
//               <td>  ${i} </td>
//               <td> ${tabs[i].nom} </td>
//               <td> ${tabs[i].prenom} </td>
//               <td> ${tabs[i].Age} </td>
//               <td> ${tabs[i].Email}</td>
//               <td> ${tabs[i].telphone} </td>
//               <td> ${tabs[i].message} </td>
//               <td>   <button onclick ="updated(${i})" id="ac"> update </button> </td>  
//               <td>   <button onclick ="suprime(${i})" id="sa">delete</button> </td>
//           </tr>
//           `
//             }
//              }

//        }else{  
//       for(let i=0; i<tabs.length;i++){   // pour recherche dans tous tableau

//         if( tabs[i].telphone .includes(valeu) ){ // recherche la valeur ecrite  dans tableu 

//                // pour affiche seulement les ligne visite
//           tableau2 +=
//           `<tr>
//           <td>  ${i} </td>
//           <td> ${tabs[i].nom} </td>
//           <td> ${tabs[i].prenom} </td>
//           <td> ${tabs[i].Age} </td>
//           <td> ${tabs[i].Email}</td>
//           <td> ${tabs[i].telphone} </td>
//           <td> ${tabs[i].message} </td>
//           <td>   <button onclick ="updated(${i})" id="ac">update </button> </td>  
//           <td>   <button onclick ="suprime(${i})" id="sa">delete</button> </td>
//       </tr>
//       `

//             }
//       }
//         }
//         document.getElementById('tbod').innerHTML=tableau2;
    

//    } 
    
    

//    nom.onclick=function(){

//     alert('enter le nom');
//    }
//    prenom.onclick=function(){

//     alert('enter le prenom');
//    }
//    Email.onclick=function(){

//     alert('enter le Email');
//    }
//    telphone.onclick=function(){

//     alert('enter le numeroie telephone');
//    }
//    Age.onclick=function(){

//     alert('enter le Age');
//    }
  
   
   
   