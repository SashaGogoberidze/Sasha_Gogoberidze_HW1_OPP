const change = document.getElementsByTagName('p')[13]

function switchh(){
    if (document.getElementsByTagName('p')[6].innerText==='ИВАНОВА')

    {document.getElementsByTagName('p')[6].innerHTML='IVANOVA';
    document.getElementsByTagName('p')[7].innerText='MARIA';
    document.getElementsByTagName('p')[8].innerText='OLEGOVNA';
    document.getElementsByTagName('p')[10].innerHTML='November 21st 1992';}

    else{
    if (document.getElementsByTagName('p')[6].innerText==='IVANOVA')

    {document.getElementsByTagName('p')[6].innerText='ИВАНОВА';
    document.getElementsByTagName('p')[7].innerText='МАРИЯ';
    document.getElementsByTagName('p')[8].innerText='ОЛЕГОВНА';
    document.getElementsByTagName('p')[10].innerHTML='21.11.1992';}
    }
    }

change.addEventListener('click', switchh)
