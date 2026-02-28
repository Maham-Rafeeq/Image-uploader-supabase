import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

let project_url = "https://gdwzktkfuhpththerfnf.supabase.co";
let project_anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkd3prdGtmdWhwdGh0aGVyZm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NTgwNjUsImV4cCI6MjA4NjAzNDA2NX0.d1_p-ZccPJPNY-n_1DFwDOjBVYG5px_YIhqi7gUtSWA";

const supabase = createClient(project_url, project_anonkey);

// function to upload image on database "supabase backet"
async function uploadefile() {
    let fileinput = document.getElementById("userimg");
   let file = fileinput.files[0];
   if(!file){
    alert("first upload a file");
    return
   }
   else{
   let filePath = `${Date.now()}`;
   console.log(filePath);
   
  
    const { data, error } = await supabase
        .storage
        .from('Image-Database')
        .upload(filePath,file);
        if(error){
            console.log("something went wrong try again"+ error.message);
            
        }
       else {
            console.log(data);
            fileinput.value = ""; 
                }
    }
        
}
window.uploadefile = uploadefile;

