// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const SERVER_HOST = 'http://localhost:8181/';
export const API_LOGIN_PATH = SERVER_HOST + 'login';

export const Api_Get_Customer = SERVER_HOST + 'customer/';
export const Api_Get_Items = SERVER_HOST + 'items';
export const Api_Get_Purchase_Orders = SERVER_HOST + 'purchases/{date}';
export const Api_Get_Countries = SERVER_HOST + 'countries';

export const Api_Add_Customer = SERVER_HOST + 'AddCustomer' ;
export const Api_Purchase_Order = SERVER_HOST + 'purchase';

export const Api_Delete_Customer = SERVER_HOST + 'deleteCustomer/';
export const Api_Delete_Item = SERVER_HOST + 'deleteItem/';

export const Api_Update_Stock = SERVER_HOST + 'renewstock';