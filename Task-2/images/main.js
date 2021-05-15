function loadjson(file,callback){
	var xhr =new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange =function(){
		if (xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	let data = JSON.parse(text);
	console.log(data);
	DisplayData(data.details);
})

function DisplayData(info){
	// <h1 class="Resume">Resume</h1>
	var bodyElement = document.querySelector('body');
	var resumetag=document.createElement("h1");
	resumetag.classList.add("Resume");
	bodyElement.appendChild(resumetag)
	resumetag.textContent="Resume";
	// <div class="main">
	var main = document.createElement("div");
	main.classList.add('main');
	bodyElement.appendChild(main);
	// <div class="left">
	var left=document.createElement("div");
	left.classList.add('left');
	main.appendChild(left);
	// <img src="images/p3.png" class="profile">
	var img=document.createElement("img");
	img.classList.add("profile");
	img.src="p3.png";
	img.alt="Picture";
	left.appendChild(img);
	// <h2>Name:Vijay Kumar</h2>
	var name=document.createElement("h2");
	name.textContent=info.Name;
	left.appendChild(name);
	// <h2>Email:Vijay10022@gmail.com</h2>
	var email=document.createElement("h2");
	email.textContent=info.Email;
	left.appendChild(email);
	// 		// <h2>Address:Proddatur,Kadapa.</h2>
	var address = document.createElement("h2");
	address.textContent=info.Address;
	left.appendChild(address);
	// 		// <h2>Ph.No:9876543214</h2>
	var phno=document.createElement("h2");
	phno.textContent=info.Ph_No;
	left.appendChild(phno);

	// <div class="right">
	var right=document.createElement("div");
	right.classList.add('right');
	main.appendChild(right);

	// <div class="mod">
	var mod = document.createElement("div");
	mod.classList.add('mod');
	right.appendChild(mod);
	// <h3>Carrer Objectives:</h3>
	var cobject=document.createElement("h3");
	cobject.textContent="Carrer Objectives:";
	mod.appendChild(cobject);

	// <h4>
	// 	To be involved in work where I can utilize skill and creatively involved with system that effectively contributes to the growth of organization. 
	// </h4>
	var ccontent=document.createElement("h4");
	ccontent.textContent="To be involved in work where I can utilize skill and creatively involved with system that effectively contributes to the growth of organization.";
	cobject.appendChild(ccontent);
	var mod = document.createElement("div");
	mod.classList.add('mod');
	right.appendChild(mod);
	var edu=document.createElement("h3");

	// <div class="mod">
			// <h3>Educational Qualifications:</h3>
			// <ul>
			// 	<li><h4>Completed Bachelor of Engineering & Technology in Electronics and Communication Engineering from  Jawaharlal Nehru Technological University, C.B.I.T, Proddatur 2013-2016 with 62% .
			// 	</h4></li>
			// 	<li><h4>Completed Diploma in  Electronics and Communication Engineering from state board of technical education , Proddatur 2010-2013with70%
			// 	</h4></li>
			// 	<li><h4>Completed SSC from   Little angels High School ,PRODDATUR  in 2010 with 80%.
			// 	</h4></li>
			// </ul>
				
			// </div>
	edu.textContent="Educational Qualifications:";
	mod.appendChild(edu);
	var ul=document.createElement("ul");
	mod.appendChild(ul);

	var li1=document.createElement('li');
	ul.appendChild(li1);
	var li1_h=document.createElement('h4');
	li1_h.textContent="Completed Bachelor of Engineering & Technology in Electronics and Communication Engineering from Jawaharlal Nehru Technological University, C.B.I.T, Proddatur 2013-2016 with 62% .";
	li1.appendChild(li1_h);

	var li2=document.createElement('li');
	ul.appendChild(li2);
	var li2_h=document.createElement('h4');
	li2_h.textContent="Completed Diploma in Electronics and Communication Engineering from state board of technical education , Proddatur 2010-2013with70%";
	li2.appendChild(li2_h);

	var li3=document.createElement('li');
	ul.appendChild(li3);
	var li3_h=document.createElement('h4');
	li3_h.textContent="Completed SSC from Little angels High School ,PRODDATUR in 2010 with 80%.";
	li3.appendChild(li3_h);

	// <div class="mod">
			// <h3>Technical Skills:</h3>
			// <ol>
			// 	<li><h4>C-Language</h4></li>
			// 	<li><h4>Python</h4></li>
			// 	<li><h4>Django</h4></li>
			// 	<li><h4>Machine Learning</h4></li>
			// 	<li><h4>AWS</h4></li>
			// </ol>
			// <h4></h4>
			// </div>

	var mod = document.createElement("div");
	mod.classList.add('mod');
	right.appendChild(mod);
	var h3=document.createElement('h3')
	h3.textContent="Technical Skills:";
	mod.appendChild(h3);

	var ol=document.createElement('ol');
	mod.appendChild(ol);

	var li_o1=document.createElement('li');
	ol.appendChild(li_o1);
	var li1_h4=document.createElement('h4');
	li1_h4.textContent="C-Language";
	li_o1.appendChild(li1_h4);

	var li_o2=document.createElement('li');
	ol.appendChild(li_o2);
	var li2_h4=document.createElement('h4');
	li2_h4.textContent="Python";
	li_o2.appendChild(li2_h4);

	var li_o3=document.createElement('li');
	ol.appendChild(li_o3);
	var li3_h4=document.createElement('h4');
	li3_h4.textContent="Django";
	li_o3.appendChild(li3_h4);

	var li_o4=document.createElement('li');
	ol.appendChild(li_o4);
	var li4_h4=document.createElement('h4');
	li4_h4.textContent="Data Analysis";
	li_o4.appendChild(li4_h4);

	var li_o4=document.createElement('li');
	ol.appendChild(li_o4);
	var li4_h4=document.createElement('h4');
	li4_h4.textContent="Machine Learning";
	li_o4.appendChild(li4_h4);

	var li_o5=document.createElement('li');
	ol.appendChild(li_o5);
	var li5_h4=document.createElement('h4');
	li5_h4.textContent="AWS";
	li_o5.appendChild(li5_h4);

	var mod = document.createElement("div");
	mod.classList.add('mod');
	right.appendChild(mod);
	var exp= document.createElement("h3");
	exp.textContent="Experince:";
	mod.appendChild(exp);

	var ul_e=document.createElement('ul');
	mod.appendChild(ul_e);

	var ul_e_l1=document.createElement('li');
	ul_e.appendChild(ul_e_l1);
	var ul_e_h1=document.createElement('h4');
	ul_e_h1.textContent="Involved in software development life cycle (SDLC) of tracking the requirements, gathering, analysis, detailed design, development, and user acceptance testing.";
	ul_e_l1.appendChild(ul_e_h1);

	var ul_e_l2=document.createElement('li');
	ul_e.appendChild(ul_e_l2);
	var ul_e_h2=document.createElement('h4');
	ul_e_h2.textContent="Actively involved in developing the methods for Create, Read, Update and Delete (CRUD) in Active Record.";
	ul_e_l2.appendChild(ul_e_h2);

	var ul_e_l3=document.createElement('li');
	ul_e.appendChild(ul_e_l3);
	var ul_e_h3=document.createElement('h4');
	ul_e_h3.textContent="Developed entire frontend and backend modules using Python on Django Web Framework.";
	ul_e_l3.appendChild(ul_e_h3);

	var ul_e_l3=document.createElement('li');
	ul_e.appendChild(ul_e_l3);
	var ul_e_h3=document.createElement('h4');
	ul_e_h3.textContent="Managed large datasets using Panda data frames and MySQL.";
	ul_e_l3.appendChild(ul_e_h3);

	var ul_e_l4=document.createElement('li');
	ul_e.appendChild(ul_e_l4);
	var ul_e_h4=document.createElement('h4');
	ul_e_h4.textContent="Involved in designing user interactive web pages as the front end part of the web application using various web technologies like HTML, JavaScript, Angular JS, JQuery, AJAX and implemented CSS for better appearance and feel.";
	ul_e_l4.appendChild(ul_e_h4);

			// <div class="mod">
			// 	<h3>Experince:</h3>
			// 	<ul>
			// 		<li><h4>Involved in software development life cycle (SDLC) of tracking the requirements, gathering, analysis, detailed design, development, and user acceptance testing.</h4></li>
			// 		<li><h4>Actively involved in developing the methods for Create, Read, Update and Delete (CRUD) in Active Record.</h4></li>
			// 		<li><h4>Developed entire frontend and backend modules using Python on Django Web Framework.</h4></li>
			// 		<li><h4>Managed large datasets using Panda data frames and MySQL.</h4></li>
			// 		<li><h4>Involved in designing user interactive web pages as the front end part of the web application using various web technologies like HTML, JavaScript, Angular JS, JQuery, AJAX and implemented CSS for better appearance and feel.</h4></li>
			// 	</ul>
				
			// </div>
	
	// var row= document.createElement("div");
	// row.classList.add("row");
	// bodyElement.appendChild(row);

	for(i=0;i<info.length;i++){
	console.log(info[i].Pname);
	}

}