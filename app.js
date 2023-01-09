let pronoun = ["the","our"];
let adj = ["great","big"];
let noun = ["jogger","racoon"];
let ext = [".com",".net",".us",".io"];

for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0;k<noun.length; k++){
            for(let l=0; l<ext.length;l++){
                let exit = pronoun[i]+adj[j]+noun[k]+ext[l];
                console.log(exit)          
            }
        }
    }
}
for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0;k<noun.length; k++){
            for(let l=0; l<ext.length;l++){
                let div = document.createElement('div');
            div.innerText = `
                ${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}
            `
            document.body.appendChild(div);
            }
        }
    }
}