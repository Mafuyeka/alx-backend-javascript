///<reference path="./interface.js">

import { RowElement, RowID } from "./interface";

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(row: RowID): void;
export declare function updateRow(row: RowElement, rowId: RowID ): RowID;
