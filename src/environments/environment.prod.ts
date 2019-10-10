import { HttpClient } from 'selenium-webdriver/http';

export const environment = {
  production: true
};
export const SERVER_HOST = 'http://localhost:8181/';
export const API_LOGIN_PATH = SERVER_HOST + '/login';

export const Api_Get_Customers = SERVER_HOST + 'customers/{id}';
export const Api_Get_Items = SERVER_HOST + 'items';
export const Api_Get_Purchase_Orders = SERVER_HOST + 'purchases/{date}';

export const Api_Add_Customer = SERVER_HOST + 'AddCustomer' ;
export const Api_Purchase_Order = SERVER_HOST + 'purchase';

export const Api_Delete_Customer = SERVER_HOST + 'deleteCustomer/{id}';
export const Api_Delete_Item = SERVER_HOST + 'deleteItem/{id}';

export const Api_Update_Stock = SERVER_HOST + 'renewstock';
