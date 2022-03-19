      var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("Name").value;
			list2[x] = document.getElementById("email").value;
			list3[x] = document.getElementById("website").value;
			list4[x] = document.getElementById("imagelink").value;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];

			n++;
			x++;
		}

  
  
//   var Name =[];
// var Email =[];
// var Website =[];
// var Imagelink =[];

// var n=1;
// var x=0;

// function Addrow(){
//    var addrow=document.getElementById('show');
//    var newrow=addrow.insertRow(n);

//    Name[x]=document.getElementById('Name').value;
//    Email[x]=document.getElementById('email').value;
//    Website[x]=document.getElementById('website').value;
//    Imagelink[x] =document.getElementById('imagelink').value;
   
//    var cel1= newrow.insertcell(0);
//    var cel2= newrow.insertcell(1);
//    var cel3= newrow.insertcell(2);
//    var cel4= newrow.insertcell(3);

//    cel1.innerHTML = Name[x];
//    cel2.innerHTML = Email[x];
//    cel3.innerHTML = Website[x];
//    cel4.innerHTML = Imagelink[x];
   
//    n++;
//    x++;

}