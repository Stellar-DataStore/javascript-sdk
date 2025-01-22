var StellarDataStore = window.stellards_js_sdk;
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REDIRECT_URI = '';
const AUTHORIZATION_ENDPOINT = 'https://stellards.io/oauth';
const TOKEN_ENDPOINT = 'https://api.stellards.io/v1/oauth/token';
const BASE_URL = 'https://api.stellards.io/v1';
const PROJECT = ""; // String | The project containing the table.
const TABLE = 0; 

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const signIn = document.getElementById('signIn');

let tokenResponse = null;

const oauth = new OAuth2({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    authorizationEndpoint: AUTHORIZATION_ENDPOINT,
    tokenEndpoint: TOKEN_ENDPOINT,
    clientSecret: CLIENT_SECRET
});

function Redirect() {
    oauth.redirectToAuth();
}
let defaultClient= StellarDataStore.ApiClient.instance;
        
let Bearer = defaultClient.authentications['Bearer'];
let apiInstance;
window.redirect = Redirect;

window.addEventListener('load', async () => {
    const code = oauth.getAuthorizationCode();

    if (code) {

        try {
            tokenResponse = await oauth.exchangeCodeForToken(code);
            Bearer.apiKey = "Bearer " + tokenResponse.access_token;
            apiInstance = new StellarDataStore.DataApi(defaultClient);
            signIn.style.display = 'none';
            renderTodos();
        } catch (error) {
            console.error('Failed to retrieve access token:', error);
        }
    } else {
        console.log('No authorization code found.');
    }
});

async function renderTodos() {
   
    
    apiInstance.v1DataTableGet(PROJECT, TABLE, null, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            todoList.innerHTML = '';
            console.log(data);
            data.data.forEach((todo) => {
                const li = document.createElement('li');
                li.className = todo.completed ? 'completed' : '';
                li.innerHTML = `
      <span>${todo.task}</span>
      <div>
        <button onclick="toggleTodo(${todo.id})">✔️</button>
        <button onclick="DeleteTodo(${todo.id})">❌</button> 
      </div>
    `;
                todoList.appendChild(li);
            });
            
        }
    });

}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task) {
        let opts = {
            'createRecordRequest': new StellarDataStore.CreateRecordRequest() 
          };
          opts.createRecordRequest.records = [];
          opts.createRecordRequest.records.push( {'task':task , 'completed': false});
          apiInstance.v1DataTablePost(PROJECT, TABLE, opts, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
        todoInput.value = '';
        renderTodos();
    }
});

    }
});

window.toggleTodo = async (id) => {
    apiInstance.v1DataTableGet(PROJECT, TABLE, null, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            UpdateTodo(data.data.find((t) => t.id === id))
        }
    });
    
};

function UpdateTodo(todo){
    let opts = {
        'updateRecordRequest': new StellarDataStore.UpdateRecordRequest() 
      };

    opts.updateRecordRequest.idList = [todo.id];
    opts.updateRecordRequest.record = {'completed': !todo.completed};

    apiInstance.v1DataTablePut(PROJECT, TABLE, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            renderTodos();
        }
    });
}

function DeleteTodo(id){
    let opts = {
        'record': id 
      };

    apiInstance.v1DataTableDelete(project, table, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            renderTodos();
        }
    });
}
