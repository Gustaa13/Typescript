function showText(text: string, align: 'left' | 'right' | 'center') {
    return `<div style="text-align: ${align}>${text}</div>`;
}

showText('Gustavo', 'left');
showText('Gustavo', 'right');
showText('Gustavo', 'center');
/* showText('Gustavo', 'adasdad'); */ // ERROR: The parameter 'align' does not accept this value

function isName(name: string): true | false {
    return (name !== '') ? true : false;
}

type Options = {
    width: number,
    height: number
}

function configure(props: Options | 'auto') {

}

configure({width: 100, height:300});
configure('auto');
/* configurate('automatic'); */ // ERROR: The parameter 'props' does not accept this value

/* */

function makeRequest(url: string, method: 'GET' | 'POST') {
    // ........
}

type Method = 'GET' | 'POST';

let url = "https://google.com.br";
let method: Method = 'GET';

method = 'GET';
/* method = 'blablabla'; */ // ERROR: The 'method' variable needs to be 'GET' or 'POST'

makeRequest(url, method);

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
}

let req: RequestDetails = {
    url: "https://google.com.br", 
    method: 'GET'
};

req.method = 'POST';
/* req.method = 'ADADA'; */ //The atribute 'method' needs to be 'GET' or 'POST'

makeRequest(req.url, req.method);