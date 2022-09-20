const message =() =>{
    var Name=document.getElementById('name');
    var Number=document.getElementById('number');
    var msg=document.getElementById('msg');
    const success=document.getElementById('success');
const danger=document.getElementById('danger');
    if(Name.value === ''|| Number.value ===''  || msg.value ===''){
      danger.style.display='block';
    }
    else{
      setTimeout(() => {
        Name.value='';
        Number.value='';
        msg.value ='';
      }, 2000);
      success.style.display='block';
    }

    setTimeout(()=> {
      danger.style.display='none';
      success.style.display='none';
    },4000);}

    export default message