///<reference path="./crud.d.ts">
import { RowID, RowElement } from "./interface"
import * as CRUD from './crud.js'


const obj: RowElement = {firstName: 'pascal', lastName: 'ojukwu', age: 89};

const id: RowID = CRUD.insertRow(obj);
const updateRow: RowElement = {
  ...obj,
};
const uid: RowID = CRUD.updateRow(updateRow, id);
CRUD.deleteRow(uid);
