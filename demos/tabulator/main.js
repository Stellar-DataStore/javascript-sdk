import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { DateTime } from "luxon";
import datetime from 'tabulator-tables/src/js/modules/Edit/defaults/editors/datetime.js';


const TABLE = 0;
const PROJECT = '';
const BASEURL = 'https://api.stellards.io/v1/data/table'
const TOKEN = '';

var StellarDataStore = window.stellards_js_sdk;
var defaultClient = StellarDataStore.ApiClient.instance;
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = TOKEN;
Bearer.apiKeyPrefix = "Bearer"
let apiInstance = new StellarDataStore.DataApi(defaultClient);

var rowMenu = [
    {
        label:"<i class='fas fa-plus'></i> Add new driver",
        action:function(e, row){
            table.addRow({name: "", progress: 50, gender: "Male", rating: 0, col: "Red", car: false});
        },
        
    },
    {
        
        label:"<i class='fas fa-trash '></i> Delete driver",
        action:function(e, row){
            row.delete();
        }
    
    },
    {
        separator:true,
    },
    {
        label:"<i class='fas fa-floppy-disk'></i> Save as", //sub menu
        menu:[
            {
                label:"<i class='fas fa-file-csv'></i> CSV",
                action:function(e, column){
                    table.download("csv", "data.csv");
                }
            },
            {
                label:"<i class='fas fa-file-excel'></i> Excel",
                action:function(e, column){
                    table.download("xlsx", "data.xlsx");
                }
            },
            {
                label:"<i class='fas fa-file-pdf'></i> PDF",
                action:function(e, column){
                    table.downloadToTab("pdf");
                }
            },
            {
                label:"<i class='fas fa-file'></i> JSON",
                action:function(e, column){
                    table.downloadToTab("json");
                }
            },
        ]
    },
    {
        separator:true,
    },
    {
        label:"<i class='fas fa-print'></i> Print",
        action:function(e, row){
            table.print(false, true);
        }
    }
]


var table = new Tabulator("#example-table", {
    index: "id",
    dependencies:{
        DateTime:DateTime,
    },  
    rowContextMenu: rowMenu, 
    responsiveLayout:"hide", 
    history:true,            
    pagination:"local",     
    paginationSize:20,        
    paginationCounter:"rows", 
    movableColumns:true,     
    ajaxURL: BASEURL,
    ajaxParams: {project: PROJECT, table: TABLE},
    ajaxRequestFunc: function(url, config, params){
        return new Promise(function(resolve, reject){
        apiInstance.v1DataTableGet(PROJECT, TABLE, null, (error, data, response) => {
            if (error) {
                reject();
            } else {
                resolve(data.data);
            }})
        })
    },
    columns:[
        {title:"Name", field:"name", sorter:"string",  editor:true},
        {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center", editor:"date", formatter: "datetime",
            formatterParams: {
                inputFormat:"iso",
                outputFormat: "dd/MM/yyyy"
            },
            editorParams:{
                format:"iso", // the format of the date value stored in the cell
                verticalNavigation:"table", //navigate cursor around table without changing the value
            }},
        {title:"Active", field:"car", sorter:"boolean", formatter:"tickCross", editor:true},
        {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", editor:true},
    
    ]
});

table.on('cellEdited', (cell) => {
    let UpdatedValue = cell.getValue();
    let UpdatedField = cell.getColumn().getField();
    var i = cell.getRow().getIndex();

    let data = {}
    data[UpdatedField] = UpdatedValue

    let opts = {
        'updateRecordRequest': new StellarDataStore.UpdateRecordRequest() 
      };

    opts.updateRecordRequest.idList = [i];
    opts.updateRecordRequest.record = data;

    apiInstance.v1DataTablePut(PROJECT, TABLE, opts, (error, data, response) => {
        if (error) {
            table.undo();
        }
    });

    
})

table.on("rowDeleted", function(row){
    let opts = {
        'record': row.getIndex() 
      };

    apiInstance.v1DataTableDelete(PROJECT, TABLE, opts, (error, data, response) => {
        if (error) {
           table.undo();
        } 
    });
});

table.on('rowAdded', (row) => {
    let opts = {
        'createRecordRequest': new StellarDataStore.CreateRecordRequest() 
      };
      opts.createRecordRequest.records = [row.getData()];
     
      apiInstance.v1DataTablePost(PROJECT, TABLE, opts, (error, data, response) => {
        if (error) {
            table.undo();
        }});
});

function Click(){
   
}


   


