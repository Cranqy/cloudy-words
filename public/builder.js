

function LoadTables(words)
{
    const table = document.getElementById("word_table");
    let table_string = "<tr><th>Word</th><th>Translations</th></tr>";
    for(let w in words)
    {
        let new_html = `<tr><td>${words[w].word}</td><td>${words[w].translations}</td></tr>`;
        table_string += new_html;
    }
    table.innerHTML = table_string;

    //TODO BUILD TABLES WITH WORD LIST
}

function GetWordTables()
{
    console.log("getting tables");
    let word_list; 
    fetch('/auth/getwordtables').then((res) => res.json()).then(data => word_list = data).then(() => LoadTables(word_list));
}

function FilterWords()
{
    let table = document.getElementById("word_table");
    let input = document.getElementById("filter");
    input = input.value.toUpperCase();
    let tr = table.getElementsByTagName("tr");
    for(let i = 1; i< tr.length;i++)
    {
        let trow = tr[i];
        if(!trow){return;}
        let tdat = trow.getElementsByTagName("td")[0];
        let txt_content = tdat.textContent.toUpperCase();
        if(txt_content.indexOf(input) > -1)
        {
            trow.style.display = "";
        }
        else
        {
            trow.style.display = "none";
        }
        
       
    }
}