import {DataAttributeAttributeDTO} from "./DataAttributeAttributeDTOS.dto";

export class DataAttributeTypeDTO{
  createdAt?: string;
  createdBy?: string;
  description?: string;
  name?: string;
  status?: number | any;
  statusName?: string | any
  id?: number | any;
  updatedAt?: string | any;
  updatedBy?: string | any;
  disabled: boolean | any;
  dataAttributeAttributeDTOS?: DataAttributeAttributeDTO[];
  constructor(description: string, name: string, dataAttributeAttributeDTOS: DataAttributeAttributeDTO[]) {
    this.description = description;
    this.name = name;
    this.dataAttributeAttributeDTOS = dataAttributeAttributeDTOS;
  }



}
