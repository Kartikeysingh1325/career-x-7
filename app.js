const $=s=>document.querySelector(s);
document.addEventListener("DOMContentLoaded",()=>{
 const hours=$("#hours"), out=$("#hoursOut"); if(hours&&out) hours.addEventListener("input",()=>out.textContent=hours.value);
 document.querySelectorAll(".choices").forEach(group=>group.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{group.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected")})));
 const form=$("#careerForm");
 if(form) form.addEventListener("submit",e=>{e.preventDefault();const data={role:$("#role").value||"AI Engineer",company:$("#company").value||"Target company",time:document.querySelector('[data-group="time"] .selected')?.dataset.value||"3",level:document.querySelector('[data-group="level"] .selected')?.dataset.value||"2nd year",skills:$("#skills").value,projects:$("#projects").value,hours:hours?.value||10};localStorage.setItem("careerxProfile",JSON.stringify(data));location.href="analyze.html"});
 const saved=localStorage.getItem("careerxProfile"); if(saved){try{const d=JSON.parse(saved);if($("#dRole")){$("#dRole").textContent=d.role;$("#dCompany").textContent=d.company;$("#dTime").textContent=d.time+"-year";$("#dHours").textContent=d.hours}}catch{}}
});

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}
